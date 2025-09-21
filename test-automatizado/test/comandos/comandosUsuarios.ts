
import request from 'supertest';

const API_URL = 'http://localhost:3001'; 
export const api = () => request(API_URL);


// export const generateEmail = () =>
//   `user_${Date.now()}_${Math.floor(Math.random() * 1000)}@example.com`;



interface UsuarioPayload {
  name: string;
  email: string;
}

// Crear usuario
export const createUser = async (payload: UsuarioPayload) => {
  return api().post('/users').send(payload);
};

// Obtener usuario por ID
export const getUser = async (id: string) => {
  return api().get(`/users/${id}`);
};

// Listar usuarios
export const listUsers = async () => {
  return api().get('/users');
};

// Eliminar usuario
export const deleteUser = async (id: string) => {
  return api().delete(`/users/${id}`);
};
