
# Reto QA | Adopta Un Junior

Repositorio de pruebas del proyecto AUJ, incluyendo sets de pruebas, evidencia y tests automatizados. Contiene además el backend como submódulo.

---

## 📌 Descripción

Este repositorio contiene:  

- **Submódulo `apirest`**: Backend del proyecto AUJ. Solo se referencia el código original; no se modifican archivos aquí.  
- **Set de pruebas**: Archivo CSV con los datos de pruebas para la API (`Pruebas AUJ - API TESTING.csv`).  
- **Colección de Postman**: `Usuarios.postman_collection.json` para pruebas automatizadas.  
- **Evidencias**: Capturas de pantalla y logs organizados por Historia de Usuario (HU).  
- **Tests automatizados**: Carpeta `test-automatizado/` con scripts y casos de prueba.

---

## 📂 Estructura de carpetas
Pruebas.AUJ/
-  apirest/ (submódulo) # Backend del proyecto (referencia a al repo de @andresmdg)
- test-automatizado/ # Scripts y casos de prueba automatizados
-  Evidencias encontradas/ # Capturas y logs organizados por HU
-  Pruebas AUJ - API TESTING.csv # Set de pruebas
-  Usuarios.postman_collection.json # Colección Postman
-  README.md # Este archivo

---

## ⚡ Cómo usar este repositorio

### 1️⃣ Clonar el repo con submódulo
```bash
git clone --recurse-submodules https://github.com/GBPardoGabrielaBeatriz/Pruebas.AUJ.git
```

### 2️⃣ Revisar la colección de Postman

- Abrir Postman
- Importar Usuarios.postman_collection.json

### 3️⃣ Revisar el set de pruebas

- Abrir Pruebas AUJ - API TESTING.csv con Excel, Google Sheets o similar

### 4️⃣ Revisar evidencias

- Explorar las carpetas dentro de Evidencias encontradas/
- Cada carpeta corresponde a una Historia de Usuario (HU)

### 5️⃣ Ejecutar tests automatizados

- Explorar la carpeta test-automatizado/
- Seguir las instrucciones de cada script

### 6️⃣ Drive

Chequear link al Drive si desean ver mi trabajo de una forma mas flexible.
https://drive.google.com/drive/folders/1ZMXAvdcHaiLeMsYQXsfPWJdIHxgDVVyr?usp=sharing

