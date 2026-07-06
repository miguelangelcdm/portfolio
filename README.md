# Portafolio Personal — Miguelangel Garay

Este es el repositorio de mi sitio web y portafolio personal, diseñado y construido utilizando **Next.js** y **React**. Está optimizado para mostrar mis proyectos, habilidades, experiencia laboral y publicaciones de forma dinámica.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre las siguientes tecnologías y librerías clave:

- **Framework**: [Next.js (v16.2.10)](https://nextjs.org/) (Pages Router)
- **Librería de Interfaz**: [React (v19.0.0)](https://react.dev/)
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
├── content/             # Archivos JSON con el contenido de la web (Textos, Proyectos, Configuración)
├── pages/               # Páginas y enrutamiento del Pages Router de Next.js
├── public/              # Recursos estáticos (Imágenes, currículum, etc.)
├── styles/              # Archivos de estilos Sass (.scss / .css)
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

## 💎 Optimizaciones de Diseño e Implementación (Recordatorio 3 meses)

Al realizar mantenimientos futuros, ten en cuenta los siguientes patrones implementados para resolver regresiones visuales:

- **Estructura de Tarjetas de Carrera (`career.jsx`)**: Cada experiencia sigue una jerarquía estricta: un bloque principal `.company` (encabezado limpio, descripción breve y fecha) seguido de un bloque `.companyPositions` que envuelve las sub-tarjetas `.position` (cargos, viñetas de tareas y badges). Las sub-tarjetas se indentan a la derecha y tienen un fondo diferenciado.
- **Transparencia en Mockups Animados (`poketme-optimized.webp`)**: Las grabaciones de pantalla de celulares a menudo contienen fondos blancos. Para evitar recuadros estéticamente molestos en el fondo oscuro del sitio, se filtran los píxeles blancos en un preprocesamiento por software para convertirlos en transparentes (Alpha = 0) antes de guardarse como WebP animado.
- **Scroll Smooth y Anclas**: El Topbar navega de forma interna mediante hashes (`/#about`, `/#projects`, `/#experience`) combinados con la propiedad CSS `scroll-behavior: smooth` definida en `global.scss`. Los componentes estructurales heredan la propagación de props (`...rest`) para poder renderizar los atributos `id` correctamente.

---

## 📊 Panel de Administración (Backoffice) & Métricas

Se ha implementado un panel de administración (/backoffice) inspirado en la estética de **Nellavio** que permite hacer un seguimiento de las visitas y geolocalizaciones en tiempo real.

### Características Clave:
- **Seguimiento Geográfico**: El sitio obtiene la geolocalización del visitante (país, región, ciudad, coordenadas e IP pública) del lado del cliente a través de una petición de sesión única a `ipapi.co` y lo envía al endpoint de tracking (`/api/track`).
- **Dashboard Interactivo**: Muestra contadores detallados (Visitas Totales, Visitantes Únicos, Ciudades Activas), una gráfica de línea/área SVG personalizada del historial de tráfico de los últimos 7 días y una lista/tabla filtrable de las visitas recientes.
- **Seguridad**: Rutas protegidas mediante una cookie HttpOnly de sesión (`portfolio_session`) e interfaces de inicio de sesión exclusivas.

### Configuración de Variables de Entorno (Render / Local):
Para personalizar las credenciales y asegurar la persistencia de datos en Render, puedes configurar las siguientes variables de entorno:

- **`DASHBOARD_USERNAME`**: El nombre de usuario para iniciar sesión (por defecto: `admin`).
- **`DASHBOARD_PASSWORD`**: La contraseña para iniciar sesión (por defecto: `portfolio2026`).
- **`VISITS_DATA_PATH`**: Ruta absoluta donde se guardará el archivo JSON con el registro de visitas.
  - *Recomendación Render*: Si deseas persistencia total tras redespliegues en Render, crea y monta un **Persistent Disk** (ej. en `/var/data`) y define esta variable como `/var/data/visits.json`. Si no se define, se utilizará `./data/visits.json` (almacenamiento efímero dentro del contenedor).

### 📈 Integración con Umami Analytics (Supabase + Render)
Si deseas una solución de analíticas autohospedada más avanzada, el sitio ya viene pre-configurado para soportar **Umami**.

#### 1. Crear Base de Datos en Supabase
1. Ve a [Supabase](https://supabase.com/) y crea un nuevo proyecto.
2. Ve a **Project Settings > Database** y copia el **Connection String** (en formato URI, ej. `postgresql://postgres:[PASSWORD]@db.xxxx.supabase.co:5432/postgres`).

#### 2. Desplegar Umami en Render
1. Crea un nuevo **Web Service** en Render conectando el repositorio oficial de [Umami](https://github.com/umami-software/umami).
2. Añade las siguientes variables de entorno en Render:
   - `DATABASE_URL`: Pega la cadena de conexión de Supabase copiada anteriormente.
   - `APP_SECRET`: Una cadena aleatoria larga para firmar sesiones de Umami.
3. Despliega el servicio. Tras completarse, Umami estará disponible en tu URL de Render (ej. `https://mi-umami.onrender.com`). Inicia sesión (usuario por defecto: `admin`, clave: `umami`) y cambia tu contraseña.
4. Añade tu sitio web en la sección de configuración de Umami para obtener tu **Website ID**.

#### 3. Activar en tu Portafolio
En la configuración de Render de este portafolio, simplemente añade estas dos variables de entorno:
- **`NEXT_PUBLIC_UMAMI_URL`**: La URL de tu servicio de Umami (ej. `https://mi-umami.onrender.com`).
- **`NEXT_PUBLIC_UMAMI_WEBSITE_ID`**: El Website ID provisto por Umami.

El script de rastreo se inyectará automáticamente y empezará a enviar estadísticas de visitas directamente a tu base de datos de Supabase.

---

## 🗺️ Próximas Mejoras y Hoja de Ruta

- [x] **Panel de Administración**: Implementado backoffice para visualización de visitas, ubicaciones y métricas en tiempo real.
- [ ] **Migración a TypeScript**: Cambiar la base de código de JS/JSX a TS/TSX para mejorar la robustez y autocompletado del código.
- [ ] **Actualización de Next.js**: Migrar de Next.js 16 (Pages Router) a la versión más reciente con **App Router** para aprovechar React Server Components y mejoras nativas de rendimiento.
- [ ] **Integración de Base de Datos/CMS**: Reemplazar los archivos JSON locales por una base de datos liviana o un headless CMS como **Sanity.io** para una gestión de contenido gráfica y dinámica.
- [x] **Resolución de Vulnerabilidades**: Actualizar las dependencias obsoletas que contienen fallas de seguridad conocidas (Vulnerabilidades resueltas a 0).
- [ ] **Completar Integraciones**: Terminar de configurar el consumo de posts de Dev.to y HackerNoon mediante sus APIs correspondientes.


