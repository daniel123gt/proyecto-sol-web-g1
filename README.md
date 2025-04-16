# Sistema de Gestión de Proveedores

Este proyecto es un **sistema de gestión de proveedores** desarrollado con **Angular** por el GRUPO 1 del curso Soluciones WEB y aplicaciones distribuidas de la UPN. El sistema permite gestionar proveedores, productos asociados, pedidos y usuarios, con una autenticación basada en roles (`admin` y `usuario`). Está diseñado para ser escalable y fácil de mantener.

## 🚀 Tecnologías utilizadas

### 1. **Angular**
   - Framework principal para la construcción de la aplicación web.
   - Permite una arquitectura modular, componente-driven, y altamente escalable.
   - [Documentación oficial de Angular](https://angular.io/docs)

### 2. **TailwindCSS**
   - Framework de CSS para estilizar la interfaz de usuario de manera rápida y flexible.
   - Permite la personalización con clases utilitarias y un diseño responsive.
   - [Documentación oficial de TailwindCSS](https://tailwindcss.com/docs)

### 3. **NgXS**
   - Librería para el manejo del estado global de la aplicación.
   - Simplifica la gestión de estado en Angular de forma declarativa y fácil de mantener.
   - [Documentación oficial de NgXS](https://ngxs.gitbook.io/ngxs/)

### 4. **Angular Routing**
   - Gestión de rutas dentro de la aplicación para navegación entre distintas páginas.
   - Implementación de **lazy loading** para módulos y optimización del rendimiento.
   - [Documentación oficial de Angular Routing](https://angular.io/guide/router)

### 5. **JWT (JSON Web Tokens)**
   - Se utiliza para la autenticación y autorización de usuarios.
   - Permite mantener la sesión de los usuarios con tokens seguros.
   - [Documentación de JWT](https://jwt.io/introduction/)

### 6. **Node.js y npm**
   - Node.js como entorno de ejecución para el servidor y npm como gestor de paquetes para instalar dependencias.
   - [Documentación oficial de Node.js](https://nodejs.org/en/docs/)
   - [Documentación oficial de npm](https://docs.npmjs.com/)

## 📋 Características

- **Login y Autenticación**: Autenticación basada en JWT, con roles `admin` y `usuario`.
- **Dashboard**: Panel de control con métricas e información clave.
- **CRUD de Proveedores**: Alta, baja, modificación y listado de proveedores.
- **Productos Asociados a Proveedores**: Listado de productos relacionados a cada proveedor.
- **Gestión de Pedidos**: Generar, aprobar, cancelar y listar pedidos.
- **Roles de Usuario**: El rol `admin` puede gestionar usuarios y proveedores, mientras que el `usuario` solo tiene acceso limitado.
- **CRUD de Usuarios**: Solo accesible para el `admin`.

## 🔧 Instalación

### Requisitos previos

1. **Node.js y npm**: Asegúrate de tener **Node.js** y **npm** instalados en tu sistema. Puedes descargarlos desde [Node.js](https://nodejs.org/).

2. **Instalar dependencias del proyecto**:

```bash
npm install
