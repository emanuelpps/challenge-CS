# CustomerScoops Challenge

Este proyecto consiste en un **formulario de varias pantallas**, donde los usuarios pueden seleccionar diferentes opciones. El formulario cuenta con botones que permiten navegar entre las distintas pantallas, con la funcionalidad de **volver a pantallas anteriores** sin perder el estado de las selecciones. Además, incluye una **barra de progreso** que muestra el avance del formulario según la pantalla en la que se encuentre el usuario. El diseño está completamente **adaptado de manera responsive**, garantizando una experiencia óptima en dispositivos de diferentes tamaños.

## Deploy

Aplicación en producción [aquí](https://challenge-cs.vercel.app/).

## Tecnologías Usadas

- **Lenguaje:** TypeScript
- **Framework:** React 18
- **Enrutamiento:** React Router DOM 6.27
- **Componentes de correo:** @react-email/components 0.0.27
- **Plataforma de envío de correos:** Resend 4.0.1-alpha.0
- **Gestión de estado:** Zustand 5.0.1
- **Estilos:** Styled-components 6.1.13
- **Desarrollo:** Vite (para configurar y lanzar el proyecto)

# Estructura de Carpetas

## `/API/Emails`
Esta carpeta contiene el desarrollo del envío de correos, aunque no fue completamente implementado. Aquí se almacenaban los archivos relacionados con la integración de la plataforma de correo **Resend** y los componentes necesarios para manejar la lógica de envío de correos electrónicos.

## `/components`
En esta carpeta se encuentran todos los **componentes reutilizables** en toda la aplicación.

## `/form`
Aquí se encuentran todos los **componentes y estilos** relacionados con los formularios de la aplicación.

## `/store`
Esta carpeta maneja el **estado global** de la aplicación utilizando **Zustand**.

## `/utils`
Esta carpeta alberga **funciones útiles** que son reutilizadas en diferentes partes de la aplicación.


## Detalles Adicionales sobre el Uso de Componentes y Estilos

### Componentes
La mayoría de los componentes de la aplicación están diseñados para ser **reutilizables** en distintas partes del proyecto. Esto incluye componentes de la interfaz de usuario (UI) como botones, entradas de texto, y cabeceras. Sin embargo, algunos componentes son específicos para ciertas funcionalidades y no están diseñados para ser reutilizados en otras secciones del proyecto.

Los componentes reutilizables se encuentran dentro de la carpeta `/components` y están organizados en unidades pequeñas y modulares para facilitar su mantenimiento y reutilización en todo el proyecto.

### Estilos
Los estilos de la aplicación están gestionados mediante **Styled-Components**, lo que permite asociar estilos directamente a los componentes de **React**. Este enfoque facilita la creación de componentes con estilos encapsulados, asegurando que no haya conflictos entre estilos de diferentes componentes.

Cada componente tiene su propio conjunto de estilos definidos dentro del mismo archivo o en archivos de estilo separados, garantizando una estructura de código limpia, modular y fácil de mantener.

### Barra de Progreso
La barra de progreso es un componente visual que se actualiza dinámicamente según el avance del usuario en el formulario. Esta barra proporciona una representación visual clara del progreso en el formulario y es **reutilizable** en cualquier parte de la aplicación.

El componente de la barra de progreso se encuentra implementado en la carpeta `/components/ProgressBar.tsx` y es un ejemplo de componente reutilizable que se actualiza en función de la pantalla actual del formulario.


## Instrucciones para Ejecutar el Proyecto

Seguir estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio**:

   ```bash
   git clone "https://github.com/emanuelpps/challenge-CS.git"
   cd challenge-CS
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

4. **Abre la aplicación**:
   Abrir [http://localhost:5173](http://localhost:5173) en tu navegador.