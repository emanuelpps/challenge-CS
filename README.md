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
En esta carpeta se encuentran todos los **componentes reutilizables** en toda la aplicación. Los componentes son partes de la UI que se utilizan en diversas secciones del proyecto.

## `/form`
Aquí se encuentran todos los **componentes y estilos** relacionados con los formularios de la aplicación.

## `/store`
Esta carpeta maneja el **estado global** de la aplicación utilizando **Zustand**.

## `/utils`
Esta carpeta alberga **funciones útiles** que son reutilizadas en diferentes partes de la aplicación.
