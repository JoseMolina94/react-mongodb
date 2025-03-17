# Proyecto Fullstack con TypeScript, React y MongoDB
### Desarrollado por: Jose Molina

## 1. Introducción

Este proyecto fue desarrollado utilizando **TypeScript** tanto en el frontend como en el backend para asegurar un tipado estricto de los datos. TypeScript nos permite:

- **Mantener el código legible y mantenible**: Al definir interfaces y tipos, el código es más fácil de entender y modificar.
- **Evitar errores en tiempo de compilación**: TypeScript detecta errores de tipo antes de que el código se ejecute, lo que reduce bugs en producción.
- **Garantizar la integridad de los datos**: Al validar los tipos de datos antes de que entren a la base de datos, aseguramos que no se corrompan o se almacenen incorrectamente.

Además, se utilizó **React** para construir una interfaz de usuario dinámica y reactiva, y conectandose a una base de datos en **MongoDB** otorgada para esta prueba.

## 2. Estructura del Proyecto

Este proyecto está organizado en dos partes principales, cada una con su propia estructura y responsabilidades claras:

### Backend

El backend es el corazón de la aplicación, encargado de manejar la lógica del negocio, interactuar con la base de datos y exponer una API RESTful para el frontend. Su estructura es la siguiente:

- **Controladores**: Contienen la lógica para manejar las solicitudes HTTP y las respuestas correspondientes. Cada controlador se encarga de una entidad específica (por ejemplo, usuarios, productos, etc.).
- **Modelos**: Definen la estructura de los datos y las reglas de validación utilizando Mongoose. Estos modelos representan las colecciones en la base de datos MongoDB.
- **Rutas**: Configuran los endpoints de la API y enlazan las solicitudes HTTP con los controladores correspondientes.
- **Configuración**: Incluye la configuración de la base de datos, middlewares (como CORS y manejo de errores), y otras utilidades.

El backend está diseñado para ser escalable y mantenible, con un enfoque en la claridad del código y la separación de responsabilidades.

### Frontend

El frontend es la interfaz de usuario de la aplicación, construida con React y TypeScript. Su estructura está organizada de la siguiente manera:

- **Componentes**: Contiene los componentes reutilizables de la interfaz de usuario, como formularios, tablas, botones, etc. Cada componente está diseñado para ser independiente y fácil de integrar.
- **Vistas**: Representan las páginas o pantallas de la aplicación, que combinan varios componentes para crear una experiencia de usuario completa.
- **Servicios**: Encapsulan la lógica para realizar solicitudes HTTP al backend. Estos servicios se encargan de obtener, enviar y manipular datos desde la API.
- **Estilos**: Incluye archivos CSS o módulos de estilos para darle vida a la interfaz de usuario, asegurando que sea atractiva y responsive.
- **Contextos**: Proporcionan un manejo eficiente del estado global de la aplicación, permitiendo que los componentes compartan datos y funcionalidades sin necesidad de pasar props manualmente.

El frontend está diseñado para ser intuitivo, rápido y fácil de mantener, con un fuerte enfoque en la experiencia del usuario.

---

Esta división en dos microproyectos (backend y frontend) permite un desarrollo modular y facilita la colaboración entre equipos, asegurando que cada parte de la aplicación sea independiente pero funcione en armonía con el resto.

## 3. Cómo arrancar el proyecto

Sigue estos pasos para arrancar el proyecto en tu entorno local. Preferiblemente en terminales separadas.

### Backend

  **cd backend** ->
  **npm install** ->
  **npm run dev**

### Frontend

  **cd frontend** ->
  **npm install** ->
  **npm start**

## 4. Notas adicionales

Para efectos de prueba ambas partes de la misma (frontend y backend) tienen los archivos .env .
La colección de precios especiales creada para este proyecto tiene como nombre "preciosEspecialesMolina94"
