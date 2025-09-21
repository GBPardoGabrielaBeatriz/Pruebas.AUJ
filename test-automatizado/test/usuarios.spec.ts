// test/usuarios.spec.ts
import { createUser, getUser, listUsers, deleteUser } from './comandos/comandosUsuarios';

// Función global para generar emails random
const generateEmail = () => {
  const randomStr = Math.random().toString(36).substring(2, 10);
  return `user_${randomStr}@example.com`;
};

describe('API de Usuarios', () => {

  describe('POST | Creación de usuarios', () => {
    it('Creacion de usuario exitosa', async () => {
      const email = generateEmail();
      const res = await createUser({ name: 'Usuario de prueba 1', email });
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('name', 'Usuario de prueba 1');
      expect(res.body).toHaveProperty('email', email);
      expect(res.body).toHaveProperty('id');
    });

    it('No se deberia crear usuarios en duplicado', async () => {
      const email = generateEmail();
      await createUser({ name: 'Usuario duplicado', email });
      const res = await createUser({ name: 'Usuario duplicado', email });
      expect(res.status).toBe(409); // asegúrate de que tu API devuelva esto
      expect(res.body).toHaveProperty("error", "Email already registered");
    });

    it('No se deberian crear usuarios con nombre invalido', async () => {
      const email = generateEmail();
      const res = await createUser({ name: 'Usuario de prueba!!!!!', email });
      expect(res.status).toBe(400); // o 404 según tu backend
      expect(res.body).toHaveProperty('message', 'Nombre invalido');
    });

    it('No se deberian crear usuarios con campos vacios', async () => {
      const res = await createUser({ name: '', email: '' });
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', "Todos los campos son obligatorios");
    });
  });

  describe('GET | Obtención de usuarios', () => {
    it('Listado de usuarios', async () => {
      const res = await listUsers();
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('Usuario segun Id', async () => {
      const email = generateEmail();
      const user = await createUser({ name: 'Usuario especifico', email });
      const res = await getUser(user.body.id);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', 'Usuario especifico');
    });

    it('Debería fallar al obtener usuario inexistente', async () => {
      const res = await getUser('nonexistent-id');
      expect(res.status).toBe(404);
    });
  });

  describe('DELETE | Eliminación de usuarios', () => {
    let userId: string;

    beforeAll(async () => {
      const email = generateEmail();
      const user = await createUser({ name: 'Usuario a eliminar', email });
      userId = user.body.id;
    });

    it('Eliminar usuario exitosamente', async () => {
      const res = await deleteUser(userId);
      expect(res.status).toBe(200);
    });

    it('Intento de eliminar un usuario previamente eliminado', async () => {
      const res = await deleteUser(userId);
      expect(res.status).toBe(404);
    });
  });
});
