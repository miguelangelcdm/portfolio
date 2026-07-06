# Portafolio Personal — Miguelangel Garay

Este es el repositorio de mi sitio web y portafolio personal, diseñado y construido utilizando **Next.js** y **React**. Está optimizado para mostrar mis proyectos, habilidades, experiencia laboral y publicaciones de forma dinámica.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre las siguientes tecnologías y librerías clave:

- **Framework**: [Next.js (v12.3)](https://nextjs.org/) (Pages Router)
- **Librería de Interfaz**: [React (v18.2)](https://react.dev/)
- **Estilos**: [Sass (SCSS)](https://sass-lang.com/) con estructura de módulos CSS (`.module.scss`) y variables de tokens de diseño.
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) y `react-type-animation` para micro-interacciones dinámicas y de máquina de escribir en el Hero.
- **Gestión de Datos**: Carga de contenido dinámico mediante archivos JSON locales (en `/content/`) para facilitar la edición sin tocar el código.
- **Iconografía**: [FontAwesome](https://fontawesome.com/) (Free/Pro icons) y [Devicon](https://devicon.dev/) para logos de tecnologías y herramientas.
- **Pruebas**: Jest y React Testing Library para pruebas unitarias.
- **Despliegue**: Optimizado para la plataforma de [Vercel](https://vercel.com/).

---

## 📁 Estructura del Proyecto

```text
portfolio/
├── components/          # Componentes modulares reutilizables
│   ├── blocks/          # Bloques visuales específicos (fondos, botones)
│   ├── layout/          # Estructura del Layout global (Navbar, Footer, etc.)
│   ├── sections/        # Secciones completas de las páginas (Hero, About, Technical, Career)
│   ├── structure/       # Componentes estructurales de diseño (Section, Container)
│   └── utils/           # Utilidades de renderizado de iconos, espaciados y temas
├── content/             # Archivos JSON con el contenido de la web (Textos, Proyectos, Configuración)
├── pages/               # Páginas y enrutamiento del Pages Router de Next.js
│   ├── api/             # API Routes internas
│   ├── articles/        # Páginas de artículos de blog
│   ├── index.jsx        # Página principal (Home)
│   └── _app.jsx         # Configuración y estilos globales de la aplicación
├── public/              # Recursos estáticos (Imágenes, currículum, etc.)
├── styles/              # Archivos de estilos Sass (.scss)
└── tests/               # Pruebas unitarias de componentes y secciones
```

---

## 🚀 Cómo Empezar

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión recomendada LTS, v18+).

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

Inicia el servidor de desarrollo local:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 3. Construir para producción

Compila el proyecto optimizado para producción:

```bash
npm run build
```

### 4. Ejecutar pruebas unitarias

Para ejecutar la suite de pruebas con Jest:

```bash
npm run test
```

---

## 📝 Personalización del Contenido

Toda la información personal y los textos de la página están desacoplados del código para facilitar la edición rápida. Puedes modificar los archivos JSON dentro de la carpeta `/content/`:

- **Ajustes Generales**: `/content/_settings.json` (Nombre, GitHub, Redes sociales).
- **Sección Hero**: `/content/index/hero.json` (Presentación, títulos, redes, CV).
- **Habilidades y Tecnologías**: `/content/index/technical.json`.
- **Trayectoria Profesional**: `/content/index/career.json`.
- **Proyectos Destacados**: `/content/projects/` y `/content/index/about.json`.

---

## 🗺️ Próximas Mejoras y Hoja de Ruta

- [ ] **Migración a TypeScript**: Cambiar la base de código de JS/JSX a TS/TSX para mejorar la robustez y autocompletado del código.
- [ ] **Actualización de Next.js**: Migrar de Next.js 12 (Pages Router) a Next.js 14/15 con **App Router** para aprovechar React Server Components y mejoras nativas de rendimiento.
- [ ] **Integración de Base de Datos/CMS**: Reemplazar los archivos JSON locales por una base de datos liviana o un headless CMS como **Sanity.io** para una gestión de contenido gráfica y dinámica.
- [ ] **Resolución de Vulnerabilidades**: Actualizar las dependencias obsoletas que contienen fallas de seguridad conocidas.
- [ ] **Completar Integraciones**: Terminar de configurar el consumo de posts de Dev.to y HackerNoon mediante sus APIs correspondientes.
