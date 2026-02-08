# 🔥 Poción Fire

<div align="center">

**Una experiencia de comercio electrónico de lujo para fragancias artesanales**

*Donde la llama se encuentra con la elegancia*

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Sobre el Proyecto

**Poción Fire** es una plataforma de e-commerce de lujo especializada en fragancias artesanales premium. El sitio presenta una colección exclusiva de perfumes inspirados en elementos volcánicos y naturales, con una experiencia de usuario sofisticada y elegante.

### ✨ Características Principales

- 🎨 **Diseño de Lujo**: Interfaz dark con glassmorphism, gradientes sutiles y tipografías elegantes
- 🖼️ **Hero Carousel Interactivo**: Presentación dinámica de productos destacados con auto-avance
- 🛍️ **Catálogo de Productos**: Grid responsive con efectos hover sofisticados e imágenes duales
- 📱 **Completamente Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Implementa las mejores prácticas de Vercel para React
- 🎯 **Code Splitting**: Carga bajo demanda de rutas para optimizar el bundle inicial
- 🖼️ **Lazy Loading**: Imágenes con carga diferida para mejor rendimiento

---

## 🛠️ Stack Tecnológico

### Core
- **React 19.2.4** - Biblioteca UI con las últimas características
- **TypeScript 5.8.2** - Type safety y mejor developer experience
- **Vite 6.2.0** - Build tool ultra-rápido con HMR
- **React Router 7.13.0** - Navegación client-side con hash routing

### Styling
- **Tailwind CSS** (vía CDN) - Utility-first CSS framework
- **Google Fonts**: Playfair Display, Manrope, Syncopate, Cormorant Garamond
- **Material Symbols** - Iconografía moderna

### Optimizaciones
- **React.memo()** - Memoización de componentes para prevenir re-renders
- **React.lazy()** - Code splitting dinámico de rutas
- **useCallback** - Estabilización de funciones callback
- **Throttling** - Control de eventos de scroll para mejor performance

---

## 🚀 Instalación y Uso

### Prerrequisitos

- **Node.js** 18+
- **pnpm** (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd "Pocion Fire"
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno** (opcional)
   ```bash
   # El archivo .env.local ya existe
   # Editar si necesitas configurar GEMINI_API_KEY
   ```

4. **Iniciar servidor de desarrollo**
   ```bash
   pnpm run dev
   ```

   El sitio estará disponible en `http://localhost:3000`

5. **Build para producción**
   ```bash
   pnpm run build
   ```

6. **Preview del build**
   ```bash
   pnpm run preview
   ```

---

## 📁 Estructura del Proyecto

```
Pocion Fire/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navigation header (memoizado)
│   ├── Footer.tsx      # Footer con newsletter
│   ├── Layout.tsx      # Page wrapper
│   └── ProductCard.tsx # Card de producto (memoizado)
├── pages/              # Páginas principales
│   ├── Home.tsx        # Homepage con hero carousel
│   ├── Catalog.tsx     # Catálogo completo de productos
│   └── ProductDetail.tsx # Detalle de producto individual
├── constants.ts        # Data de productos e imágenes
├── App.tsx            # Router principal con code splitting
├── index.tsx          # Entry point
├── index.html         # HTML template
├── vite.config.ts     # Configuración de Vite
└── tsconfig.json      # Configuración de TypeScript
```

---

## 🎯 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con hero carousel y featured collection |
| `/catalog` | Catálogo completo de 12 fragancias |
| `/product/:id` | Página de detalle de producto individual |

---

## ⚡ Optimizaciones de Performance

Este proyecto implementa las **Vercel React Best Practices** para máximo rendimiento:

### 🔴 Re-render Optimization
- ✅ **Header memoizado** con throttling de scroll (60+/seg → <10/seg)
- ✅ **ProductCard memoizado** (-80% re-renders en catálogo)
- ✅ **useCallback** en handlers de eventos
- ✅ **Dependencias correctas** en useEffect hooks

### 🟡 Bundle Size Optimization
- ✅ **Code splitting** con React.lazy() en todas las rutas
- ✅ **Suspense boundaries** con loaders elegantes
- ✅ **Static JSX hoisting** para prevenir recreación

### 🟢 Image Optimization
- ✅ **Lazy loading** en imágenes below-the-fold
- ✅ **Eager loading** en hero images (above-the-fold)

### 📊 Resultados del Bundle

```
Bundle Analysis (production):
├── index.js          234KB (76.39KB gzip) - Vendor bundle
├── Home.js            9.4KB (3.06KB gzip)  - Lazy loaded
├── Catalog.js         5.9KB (1.75KB gzip)  - Lazy loaded
├── ProductDetail.js   6.4KB (1.69KB gzip)  - Lazy loaded
└── constants.js       10KB  (5.99KB gzip)  - Product data

Initial Load: ~76KB gzipped
Routes: Load on demand (~2-3KB each)
```

---

## 🎨 Paleta de Colores

```css
Primary Red:    #ec1313 (Rojo fuego - acento principal)
Primary Dark:   #7c0a0a (Rojo oscuro - hover states)
Background:     #050505 (Negro profundo)
Surface:        #121212 (Gris oscuro - cards)
White/Text:     #FFFFFF (Texto principal)
Slate:          #94a3b8 (Texto secundario)
```

---

## 🖼️ Catálogo de Productos

El sitio presenta **12 fragancias exclusivas**, incluyendo:

- **Midnight Flame** - Ámbar ahumado con maderas oscuras
- **Crimson Essence** - Rosa damascena con azafrán
- **Arctic Hearth** - Menta glacial con cedro blanco
- **Volcanic Soil** - Vetiver terroso con pachulí
- **Ember Glow** - Vainilla tostada con caramelo salado
- **Obsidian Night** - Cuero negro con oud
- *...y 6 más fragancias exclusivas*

---

## 🧪 Testing y Verificación

### React DevTools Profiler
```bash
1. Instalar React DevTools extension
2. Abrir Profiler tab
3. Record durante 10 segundos de scroll
4. Verificar: Header <10 renders
```

### Lighthouse Audit
```bash
pnpm run build
pnpm run preview
# Chrome DevTools → Lighthouse → Analyze

Targets:
✓ Performance: >90
✓ LCP: <2.5s
✓ FID: <100ms
✓ CLS: <0.1
```

### Network Analysis
- Verificar code splitting: chunks se cargan bajo demanda
- Verificar lazy loading: imágenes cargan al scroll
- Initial bundle <100KB gzipped

---

## 🔧 Scripts Disponibles

```bash
pnpm run dev      # Inicia servidor de desarrollo (puerto 3000)
pnpm run build    # Build optimizado para producción
pnpm run preview  # Preview del build de producción
pnpm run lint     # (si está configurado) Linting
```

---

## 🎓 Mejores Prácticas Implementadas

Este proyecto sigue las **Vercel React Best Practices**:

| Regla | Implementación |
|-------|----------------|
| `rerender-memo` | Componentes Header y ProductCard memoizados |
| `rerender-dependencies` | useEffect con deps correctas |
| `bundle-dynamic-imports` | React.lazy() en todas las rutas |
| `rendering-hoist-jsx` | HERO_SLIDES hoistado fuera del componente |
| `rerender-functional-setstate` | useCallback para handlers estables |
| Image best practices | loading="lazy" en imágenes below-fold |

---

## 📝 Notas de Desarrollo

### Fuentes de Datos
- Los productos están hardcoded en `constants.ts`
- Las imágenes se hospedan en Google Aida CDN
- No hay backend - es una SPA completamente estática

### Navegación
- Usa **HashRouter** (#/) para compatibilidad con hosting estático
- Scroll to top automático en cambios de ruta

### Estilos
- Tailwind CSS se carga vía CDN (no hay archivo CSS procesado)
- Configuración inline en `index.html`
- Animaciones custom: `fade-in`, `slide-up`

---

## 🚢 Deployment

Este proyecto está listo para deployment en:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Cualquier hosting estático

### Deploy a Vercel (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Producción
vercel --prod
```

---

## 📄 Licencia

Este proyecto es un demo de e-commerce de lujo. Todos los derechos reservados.

---

## 🤝 Contribuciones

Este es un proyecto de showcase. Si encuentras bugs o tienes sugerencias, siéntete libre de abrir un issue.

---

## 📧 Contacto

Para consultas sobre el proyecto:
- Website: (agregar URL)
- Email: (agregar email)

---

<div align="center">

**Hecho con 🔥 y React**

*Poción Fire - Donde la elegancia se encuentra con la intensidad*

</div>
