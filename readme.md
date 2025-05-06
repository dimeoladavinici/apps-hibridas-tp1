# tp1_appshibridas_dimeola

API REST desarrollada para la materia Aplicaciones Híbridas de la Escuela Da vinci. Es responsive. 
Basada en datos de alfajores argentinos y sus fabricantes.

---

## Tecnologías

- Node.js
- Express
- MongoDB + Mongoose*
- JWT para autenticación
- Postman para pruebas
- Bootstrap para documentación visual

*(no usé atlas pero con una modificación que explico a lo último se puede perfectamente, yo hice todo local)

---

## Instalación

1. Clonar el repo

2. Instalar dependencias

3. Crear archivo `.env` con el siguiente contenido:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/alfajoresdb
JWT_SECRET=clave123
```

4. Iniciar MongoDB (si no se inicia solo)  
5. Correr el proyecto:

```bash
node index.js
```

---

## 📬 Endpoints principales

### /api/alfajores
- GET, POST, PUT, DELETE
- Filtrar por relleno y bañado

### /api/fabricantes
- GET, POST, PUT, DELETE
- Buscar por nombre parcial

### /api/protegida
- Ruta protegida con JWT

---

## Documentación de la API

Accedé a la documentación desde:  
[http://localhost:3000](http://localhost:3000)

---

## Aclaración sobre MongoDB

Yo descargue MongoDB (exactamente usé Mongod) porque lo hice desde casa y me pareció mas simple, como en la escuela estaba bloqueado, se enseño con MongoDB Atlas pero siento que es mas complejo. De todas formas para usarlo con Altas, reemplazá `MONGODB_URI` por tu string de conexión en el archivo `.env`. 

---

## Juan Pedro Di meola | Apps Hibridas | Prof. Jonathan Cruz  