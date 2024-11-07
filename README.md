


#### `/src/components`

Aquí se guardan los componentes de React utilizados en la aplicación. Cada componente puede ser una función o clase con su propia lógica y estructura JSX.

#### `/src/styles`

Contiene los archivos de estilo globales, como los archivos de CSS o archivos de temas que gestionan el diseño centralizado de la aplicación.

#### `/src/types`

En esta carpeta se definen las interfaces o tipos de TypeScript. Esto asegura un chequeo de tipos estricto y facilita el autocompletado y las sugerencias en el editor.

#### `/src/utils`

Aquí se colocan funciones auxiliares o hooks personalizados que encapsulan lógica reutilizable en toda la app.

#### `/src/App.tsx`

El componente principal de React que contiene la lógica raíz de la aplicación. Usualmente importa otros componentes y actúa como contenedor de la app.

#### `/src/main.tsx`

El archivo de entrada de Vite donde se renderiza la aplicación de React en el DOM. Normalmente, este es el punto inicial de la aplicación.

- **ReactDOM.render()**: Este método se usa para montar la aplicación de React en el contenedor raíz definido en `index.html`.

#### `/src/vite-env.d.ts`

Este archivo contiene las declaraciones específicas de Vite que permiten a TypeScript entender los tipos de características de Vite.

#### `/src/tsconfig.json`

Es el archivo de configuración de TypeScript que define opciones de compilador como rutas, módulos y comprobación de tipos.

## Cómo Funciona la App

La aplicación sigue una arquitectura simple de React + TypeScript:

1. **Componentes de React**: Los componentes son los bloques de construcción de la aplicación. Se comunican entre sí mediante props y estados.
2. **TypeScript**: Todo el código está escrito en TypeScript, lo que garantiza un chequeo de tipos estático durante el desarrollo.
3. **Vite**: Se utiliza como herramienta de construcción. Es rápido y moderno, proporcionando reemplazo rápido de módulos (HMR) durante el desarrollo y construcciones optimizadas para producción.

## Ejecución de la App

Para iniciar la app, ejecuta los siguientes comandos después de clonar el repositorio:

```bash
npm install
npm run dev
