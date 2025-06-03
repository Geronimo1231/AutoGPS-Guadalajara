Descripción de la Aplicación - Catálogo de Vehículos y Seguimiento GPS


Esta aplicación es un sistema completo que integra una API RESTful 
y un frontend en Vue 3 para la gestión de un catálogo de vehículos. 

Se implementa usando Node.js 22 LTS con Express, Sequelize, PostgreSQL y Winston para logging, y 
se asegura con un sistema de autenticación que diferencia entre usuarios y administradores.


Funcionalidades de la API
Endpoints RESTful: La API incluye endpoints para POST, GET, DELETE, PUT y PATCH para la gestión de datos.

Endpoint de Login: API separada para autenticación de usuarios y administradores.

Asignación de Vehículos: Endpoint para asignar vehículos a cada usuario.

Gestión de Ubicaciones: Endpoint para actualizar en tiempo real la ubicación de los vehículos 
(actualización automática cada pocos segundos). 
Se pueden consultar las rutas y trazados GPS.

Roles Diferenciados: Los endpoints distinguen entre usuario (que solo puede ver su vehículo y su ruta) y administrador
(que puede ver la ubicación de todos los vehículos y asignar vehículos o agregar usuarios).


Funcionalidades del Catálogo de Vehículos
Tipos de Vehículos: Gestión de varios tipos, como pickup, sedan y otros vehículos.

Detalles del Vehículo: Cada vehículo registra fotos, año y matrícula.

Asignación de Vehículos: Cada usuario tendrá asignado un vehículo, y
solo ese usuario podrá ver los detalles específicos de su vehículo.

Funcionalidades del Frontend
Framework: La interfaz de usuario se desarrollará en Vue 3 con un estilo profesional y moderno.

Mapa Interactivo: Integración de Leaflet para mostrar un mapa centrado en Guadalajara, Jalisco:
Se mostrará la ubicación GPS en tiempo real de cada vehículo.
Al hacer clic en un coche, se mostrará su información (marca, matrícula) y el mapa con el trazado de la ruta recorrida.

Panel de Administrador: Acceso a funcionalidades para asignar vehículos y 
agregar usuarios, mostrando la ubicación de todos los vehículos de manera global.


Consideraciones Adicionales
Seguridad y Autenticación: Incluye endpoints separados para login que gestionan roles (usuario y admin).

Actualización Automática de Ubicaciones: 
El mapa se actualizará automáticamente para reflejar la ubicación actual del vehículo con intervalos predefinidos.

Historico o Trazado de Rutas: Además de la ubicación actual, 
se mostrará el histórico o trazado de la ruta por la que ha pasado cada vehículo.

sta aplicación es una solución integral para gestionar catálogos de vehículos, 
asignaciones personalizadas y seguimiento en tiempo real con un enfoque profesional 
y uso de tecnologías modernas.

Interface
Una aplicación en Vue 3 que permita a usuarios e administradores gestionar y seguir vehículos en tiempo real. 
Al cargar la aplicación, el usuario verá una pantalla de login con campos de correo y contraseña.
Tras autenticarse: • Si es administrador: dashboard con menú lateral para: – Usuarios:
lista de usuarios con opciones para agregar, editar o eliminar.
– Vehículos: catálogo con fotos, marca, año y matrícula, con opciones CRUD (crear, editar, eliminar). 
– Asignaciones: formulario para asignar o reasignar vehículos a usuarios.
– Mapa global: mapa centrado en Guadalajara, Jalisco, que muestra todos los vehículos y su trazo de ruta. 
Al hacer clic en cada icono de vehículo se abre un modal con marca, matrícula y ruta histórica trazada. 
• Si es usuario normal: dashboard con lista de sus vehículos asignados. Al seleccionar uno: 
– Se muestra una tarjeta con foto, marca, año y matrícula.
– Mapa centrado en Guadalajara con la ubicación en tiempo real y el trazo de ruta del vehículo.
– Botón “Actualizar ubicación” que recarga el punto en el mapa. En todas las vistas debe haber estados de carga, 
validación de formularios del lado cliente y un botón de cerrar sesión. 
El estilo es profesional y moderno, con componentes reutilizables en Vue 3 y almacenamiento de tokens en LocalStorage.
