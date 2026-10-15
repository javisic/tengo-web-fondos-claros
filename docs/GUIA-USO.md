# Tengo Web — Manual de Producción y Guía de Uso
**Diseñar – Diseño gráfico y web (Río Tercero, Córdoba)**

---

## 1. Introducción
**Tengo Web** es un sistema modular de diseño y construcción de sitios web *one-page* profesionales, ágiles, ultra livianos y optimizados para SEO. 

A diferencia de las plantillas estáticas repetitivas o los constructores lentos como WordPress y Elementor, **Tengo Web** permite concebir cada sitio a partir del rubro y las necesidades concretas de cada negocio:
- Un **abogado** requiere autoridad, trayectoria, áreas de práctica numeradas, preguntas frecuentes y reserva formal de consultas.
- Una **estilista** requiere estética visual cuidada, carta de tratamientos con precios y tiempos, galería de resultados reales y reserva de turnos ágil.
- Un **almacén de barrio** requiere destacar ofertas semanales, catálogo con filtros de categorías, horarios comerciales en vivo, formas de pago y pedidos directos por WhatsApp.
- Un **complejo de cabañas o turismo** requiere hero panorámico con overlay, comodidades (pileta climatizada, asadores), catálogo de unidades con tarifas por noche, horarios de check-in y reserva por WhatsApp.
- Un **electricista u oficio técnico** requiere topbar de urgencias 24hs, llamada inmediata, matrícula oficial ERSeP, zonas de cobertura y presupuestos claros.
- Un **estudio de arquitectura o metalúrgica** requiere geometría pura de esquinas rectas (Sharp 90°), portfolio editorial de obras, cálculo estructural y contacto directo.

---

## 2. Estructura de Archivos del Sistema

```
tengo-web/
├── index.html                   # Portal principal con accesos a todo el sistema
├── core/                        # Base técnica compartida (Nivel A)
│   ├── css/
│   │   ├── tengo-core.css       # Layout base, variables expandidas, reset, utilidades semánticas, navbar sticky, botón WhatsApp
│   │   └── tengo-modules.css    # Biblioteca de módulos y modificadores de variantes (Heroes, Servicios, Catálogo, Mapa, etc.)
│   └── js/
│       └── tengo-core.js        # Sticky header, mobile nav, scrollspy, animaciones, filtros y formularios
│
├── showroom/                    # Catálogo visual vivo para el diseñador (Nivel C y D)
│   └── index.html               # Muestra interactiva de 12 módulos con botón "Copiar HTML"
│
├── starter-boilerplate/         # Plantilla limpia lista para nuevos proyectos
│   ├── index.html               # Estructura HTML5 semántica (section, article, header, figure, time, address)
│   └── theme.css                # Archivo completo de variables comentadas paso a paso
│
├── demos/                       # 6 Sitios demostrativos reales
│   ├── 01-profesional-abogado/  # Inspirado en Passion + Strada (Legal)
│   ├── 02-estilista-salon/      # Inspirado en Clarity + Strada (Estética)
│   ├── 03-comercio-almacen/     # Inspirado en Savora (Retail / Almacén)
│   ├── 04-turismo-cabanas/      # Inspirado en turismo serrano / Calamuchita
│   ├── 05-oficio-electricista/  # Inspirado en oficios técnicos y urgencias ERSeP
│   └── 06-arquitectura-construccion/ # Inspirado en Archiste / Strada (Sharp 90°)
│
└── docs/
    └── GUIA-USO.md              # Este manual
```

---

## 3. Arquitectura HTML Semántica para SEO (No a la "Sopa de Divs")

Para maximizar el posicionamiento orgánico en Google de los clientes de Diseñar en Río Tercero y la zona, **Tengo Web** adopta una estructura HTML5 estrictamente semántica:

| Elemento Semántico | Uso en Tengo Web | Ventaja SEO / Accesibilidad |
|---|---|---|
| `<section id="...">` | Cada sección temática (`#inicio`, `#servicios`, `#nosotros`, `#contacto`) | Delimita las regiones principales para el rastreador de Google. |
| `<header class="tw-section-header">` | Encabezado dentro de cada sección (kicker, título `<h2>`, subtítulo `<p>`) | Asocia jerárquicamente el tema de la sección. |
| `<article class="tw-service-card">` | Tarjetas de servicios, productos, reseñas o proyectos | Indica a los buscadores que la tarjeta es un contenido autónomo e indexable. |
| `<figure class="tw-gallery-item">` | Fotografías de galería o catálogo acompañadas de `<figcaption>` | Mejora la indexación en Google Imágenes. |
| `<time datetime="...">` | Horarios de atención comercial, check-in / check-out o fechas | Permite a los motores de búsqueda reconocer horarios y estados en vivo. |
| `<address class="tw-location-details">` | Direcciones físicas, teléfonos y canales de contacto | Facilita el marcado de datos estructurados locales (Local SEO). |

---

## 4. Control Total con Variables CSS Expandidas (`theme.css`)

El archivo `theme.css` de cada cliente permite configurar granularmente cualquier aspecto visual sin tocar una sola línea de los archivos `core`:

### A. Tipografía y Textos
- `--tw-font-heading` y `--tw-font-body`: Fuentes tipográficas de Google Fonts.
- `--tw-text-title`, `--tw-text-body`, `--tw-text-muted`, `--tw-text-light`: Jerarquía de color de lectura.
- `--tw-heading-letter-spacing`: Espaciado entre letras en títulos (ej: `-0.02em`, `0.05em`).
- `--tw-heading-transform`: `none`, `uppercase` o `capitalize`.

### B. Botones (`.tw-btn`)
- `--tw-btn-radius`: Curvatura de bordes (`0px` para esquinas rectas sharp, `8px` suave, `999px` píldora).
- `--tw-btn-padding-y` y `--tw-btn-padding-x`: Relleno y tamaño del botón.
- `--tw-btn-primary-bg`, `--tw-btn-primary-border`, `--tw-btn-primary-color`: Colores del botón primario.
- `--tw-btn-primary-hover-bg`, `--tw-btn-primary-hover-color`: Estados al pasar el cursor.
- `--tw-btn-transform`: Mayúsculas (`uppercase`) o minúsculas (`none`).

### C. Tarjetas (Cards)
- `--tw-card-radius`: Radio de bordes de las tarjetas (`0px` para arquitectura/técnico, `16px` estándar, `22px` orgánico).
- `--tw-card-bg`: Fondo de tarjetas (blanco o superficies sutiles).
- `--tw-card-border-color` y `--tw-card-border-width`: Líneas y marcos.
- `--tw-card-hover-transform`: Efecto de elevación al pasar el mouse (ej: `translateY(-6px)`).

### D. Fondos y Superficies
- `--tw-bg-body`: Fondo general de la página.
- `--tw-bg-alt`: Fondo de secciones alternadas para dar dinamismo al scroll.
- `--tw-bg-dark`: Fondo de barra superior, hero oscuro o footer.
- `--tw-hero-overlay`: Filtro oscuro sobre fotos de hero (ej: `rgba(15, 23, 42, 0.65)`).

---

## 5. Módulos Disponibles en el Showroom (`showroom/index.html`)

1. **Heroes y Banners:** Ancho completo con imagen y overlay, color plano, degradado, minimalista con botón, split con stats y local store en vivo.
2. **Esquinas Rectas (Sharp 90°):** Modificador `.tw-sharp` para rubros que exigen máxima rigidez geométrica.
3. **Nosotros:** Nosotros stats (experiencia) y nosotros asimétrico editorial (3 columnas).
4. **Servicios:** Tarjetas elevadas, tarjetas rectilíneas, numeradas 01-03 y cartas con precios y tiempos.
5. **Banner de Ofertas:** Bloque promocional para descuentos y llamados urgentes.
6. **Catálogo de Productos:** Cards con foto, precio, botón de pedido directo por WhatsApp y pestañas de categorías interactivas (`data-tw-tabs`).
7. **Galería:** Grilla balanceada de 8 a 10 fotos con efecto zoom y overlay descriptivo.
8. **Testimonios:** Tarjetas de opiniones con estrellas y procedencia.
9. **FAQS:** Acordeón accesible para resolver dudas previas.
10. **Horarios & Mapa:** Ficha semántica con estado en vivo ("Abierto ahora"), tabla semanal, métodos de pago y Google Maps.
11. **Contacto:** Ficha con canales directos + formulario que envía los datos estructurados a WhatsApp.
12. **Footers:** Standard 4 columnas, minimalista de una sola línea o Big CTA centrado.

---

## 6. Flujo de Trabajo para Crear un Sitio Nuevo (5 Pasos)

1. **Duplicar plantilla:** Copiá la carpeta `starter-boilerplate` y renombrala con el nombre del cliente (ej: `clientes/cabañas-los-pinos/`).
2. **Personalizar `theme.css`:** Ajustá las variables de colores, tipografías, curvaturas de botones y cards.
3. **Elegir módulos en `showroom/index.html`:** Copiá los bloques semánticos necesarios haciendo clic en "Copiar HTML".
4. **Pegar en `index.html`:** Pegá los módulos dentro de la etiqueta `<main>` en el orden deseado.
5. **Configurar WhatsApp:** Reemplazá el número en el botón flotante y en el atributo `data-tw-wa-form="5493571XXXXXX"` del formulario.

---

## 7. Publicación y Mantenimiento
Los sitios generados con Tengo Web son **100% estáticos**:
- **Hosting tradicional (cPanel, DonWeb, Hostinger):** Subir la carpeta del cliente vía FTP o Administrador de Archivos a la carpeta `public_html`.
- **Hosting moderno (GitHub Pages, Netlify, Vercel):** Conectar el repositorio o arrastrar la carpeta. No requiere procesos de build complejos (`npm run build`).
- **Velocidad de Carga Inmediata:** Al no cargar bases de datos SQL pesadas ni PHP dinámico, los sitios obtienen puntuaciones superiores al 95% en Google PageSpeed Insights.
