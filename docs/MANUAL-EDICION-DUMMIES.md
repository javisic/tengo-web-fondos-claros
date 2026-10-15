# Tengo Web — Manual de Edición para No Desarrolladores ("Guía para Dummies")
**Diseñar – Diseño gráfico y web (Río Tercero, Córdoba)**

¡Hola! Si estás leyendo esto, probablemente seas diseñador gráfico, redactor, community manager o parte del equipo de Diseñar y necesitás armar o modificar un sitio web para un cliente sin saber programar código complejo.

¡Buenas noticias! **Tengo Web** está pensado exactamente para vos. No usamos WordPress, no hay bases de datos misteriosas, no hay contraseñas de administrador que se pierdan, ni pantallas de configuración lentas.

Todo lo que ves en la pantalla está controlado por solo **dos archivos**. Si aprendés a moverte en esos dos archivos, vas a poder armar sitios increíbles en minutos.

---

## 🧭 Índice Rápido
1. [La Regla de Oro N° 1 (Lo más importante)](#1-la-regla-de-oro-n-1)
2. [¿Qué programa necesito para editar?](#2-qué-programa-necesito-para-editar)
3. [El Mapa del Tesoro: Los únicos 2 archivos que vas a tocar](#3-el-mapa-del-tesoro)
4. [Cómo cambiar colores, letras y bordes en 3 minutos (`theme.css`)](#4-cómo-cambiar-colores-y-estilos)
5. [Cómo cambiar textos, títulos y precios (`index.html`)](#5-cómo-cambiar-textos-y-precios)
6. [Cómo configurar WhatsApp (¡El corazón de las ventas!)](#6-cómo-configurar-whatsapp)
7. [Cómo cambiar imágenes y poner el logo del cliente](#7-cómo-cambiar-imágenes-y-logos)
8. [Cómo poner el mapa de Google Maps del negocio](#8-cómo-poner-el-mapa-de-google-maps)
9. [Cómo armar un sitio nuevo usando el Showroom (Copiar y Pegar)](#9-cómo-armar-un-sitio-usando-el-showroom)
10. [Tabla de Rescate: Errores comunes y cómo solucionarlos](#10-tabla-de-rescate)

---

## 1. La Regla de Oro N° 1

> [!CAUTION]
> ### 🛑 NUNCA MODIFIQUES LA CARPETA `core/`
> La carpeta llamada `core/` contiene los motores y la electricidad del sistema.  
> **No la toques, no le cambies el nombre y no borres nada de ahí adentro.**  
> Todos tus cambios van únicamente en la carpeta de tu cliente (en `theme.css` e `index.html`).

---

## 2. ¿Qué programa necesito para editar?

Para editar los archivos solo necesitás un **Editor de Código gratuito**.
El más recomendado del mundo es **Visual Studio Code (VS Code)**:

1. Descargalo gratis desde [code.visualstudio.com](https://code.visualstudio.com/).
2. Instalate la extensión llamada **"Live Server"** (hacés clic en el ícono de cuadritos a la izquierda en VS Code, buscás "Live Server" y le das a "Install").
3. **¿Para qué sirve Live Server?** Te permite hacer clic derecho en `index.html` -> **"Open with Live Server"**, y se te abre la página en Google Chrome. Cada vez que guardás un cambio en el código con `Ctrl + S`, **la página en Chrome se actualiza sola al instante**. ¡Es magia pura!

Si no tenés VS Code, podés usar **Notepad++** o cualquier editor de texto plano. (Nunca uses Microsoft Word).

---

## 3. El Mapa del Tesoro

Cuando creás un sitio para un cliente nuevo (duplicando la carpeta `starter-boilerplate`), vas a tener esta estructura:

```
📁 cliente-veterinaria-rio3/
│
├── 📄 index.html      <-- 🪑 LOS MUEBLES: Aquí van los textos, fotos, títulos, WhatsApp y el mapa.
├── 🎨 theme.css       <-- 🖌️ LA PINTURA: Aquí van los colores de la marca, las letras y si las esquinas son redondas o rectas.
│
└── 📁 assets/
    └── 📁 img/        <-- 📸 LAS FOTOS: Guardá acá el logo y las imágenes del cliente.
```

- Si querés cambiar el **color verde por azul**, abrís `theme.css`.
- Si querés cambiar **"Somos Abogados" por "Somos Veterinarios"**, abrís `index.html`.
- Si querés cambiar **el número de WhatsApp**, abrís `index.html`.

---

## 4. Cómo cambiar colores y estilos (`theme.css`)

Abrí el archivo `theme.css` en tu editor. Vas a ver una lista de "variables" que empiezan con `--tw-`. Solo tenés que cambiar el valor que está después de los dos puntos `:`.

### A. Cambiar los colores de la marca
Buscá este bloque al principio del archivo:

```css
/* Color principal de la marca (botones, enlaces, detalles destacados) */
--tw-primary: #0D6EFD;

/* Mismo color pero un poquito más oscuro (se usa cuando pasás el mouse por encima) */
--tw-primary-hover: #0b5ed7;

/* El color secundario (suele ser un color oscuro o un segundo tono de la marca) */
--tw-secondary: #0F172A;

/* Color de acento para ofertas, promociones o estrellitas de testimonios */
--tw-accent: #10B981;
```

> [!TIP]
> **¿Cómo saco el código de color (`#hex`)?**  
> En Photoshop o Illustrator, usá el cuentagotas en el logo del cliente, copiá el código hexadecimal (ejemplo `#E11D48` para fucsia, `#2D5A27` para verde bosque) y pegalo ahí.

### B. Cambiar el estilo de las esquinas (¿Redondas o Rectas?)
Buscá estas variables:

```css
--tw-btn-radius: 10px;       /* Curvatura de botones */
--tw-card-radius: 16px;      /* Curvatura de tarjetas de servicios y productos */
```

- **Si querés estilo moderno y amigable (salones, peluquerías, heladerías):**
  Poné botones tipo píldora: `--tw-btn-radius: 999px;` y tarjetas curvas `--tw-card-radius: 20px;`.
- **Si querés estilo sobrio, arquitectónico o industrial (abogados, metalúrgicas, arquitectos):**
  Poné esquinas 100% rectas a 90°: `--tw-btn-radius: 0px;` y `--tw-card-radius: 0px;`.
- **Si querés estilo estándar equilibrado (comercios, electricistas, consultorios):**
  Usá `--tw-btn-radius: 8px;` y `--tw-card-radius: 12px;`.

### C. Cambiar los fondos de las secciones
```css
--tw-bg-body: #FFFFFF;       /* Fondo blanco clásico de la página */
--tw-bg-alt: #F8FAFC;        /* Fondo grisecito suave para separar una sección de otra */
--tw-bg-dark: #0F172A;       /* Fondo oscuro para la barra superior o el pie de página */
```

---

## 5. Cómo cambiar textos y precios (`index.html`)

Abrí `index.html`. Vas a ver código con etiquetas como `<h1>`, `<p>`, `<span>`.

> [!IMPORTANT]
> ### El Truco Infalible del Diseñador:
> 1. Abrí la página web en tu navegador Google Chrome.
> 2. Con el mouse, seleccioná el texto que querés cambiar (por ejemplo: *"Atención en Río Tercero"*).
> 3. Copialo (`Ctrl + C`).
> 4. Andá a VS Code con tu `index.html` abierto.
> 5. Apretá `Ctrl + F` (Buscar) y pegá el texto (`Ctrl + V`).
> 6. El cursor irá directo al lugar exacto. **Cambiá solo las palabras, sin borrar los piquitos `<` ni `>`.**
> 7. Guardá con `Ctrl + S`. ¡Listo!

### ¿Qué significan las etiquetas más comunes?

- `<h1>Texto</h1>`: Es el **título principal** de la página (el del Hero de arriba). Solo debe haber uno por página.
- `<h2>Texto</h2>`: Es el **título de cada sección** ("Nuestros Servicios", "Quiénes Somos", "Contacto").
- `<h4>Texto</h4>`: Es el **título de una tarjeta** individual (nombre de un servicio o producto).
- `<p>Texto</p>`: Es un **párrafo** de texto común de lectura.
- `<time>08:30 a 19:30 hs</time>`: Es un **horario**. Se usa para que Google entienda cuándo atiende el negocio.
- `<article class="...">`: Es una **tarjeta** independiente (un producto, un servicio o una opinión).
- `<!-- Comentario -->`: Es una **nota para vos**. Lo que esté adentro de `<!-- -->` no se ve en la web, solo te ayuda a ubicarte en el archivo.

---

## 6. Cómo configurar WhatsApp

WhatsApp es la herramienta número 1 de conversión de Tengo Web. Hay 3 lugares donde tenés que poner el número del cliente:

### 1. El Botón Flotante Verde (abajo a la derecha)
Andá al final de `index.html` (alrededor de la línea 230). Vas a ver esto:

```html
<a href="https://wa.me/5493571XXXXXX?text=Hola!%20Visite%20su%20web%20y%20quiero%20hacer%20una%20consulta." 
   class="tw-wa-floating" 
   target="_blank" 
   rel="noopener">
```

**¿Cómo se pone el número de teléfono?**
- Debe llevar siempre el código de Argentina: `54`
- Luego el `9` de celulares
- Luego el código de área (por ejemplo Río Tercero es `3571`, Córdoba Capital es `351`, Villa María es `353`)
- Luego el número de celular **sin el 15, sin espacios, sin guiones y sin paréntesis**.
- *Ejemplo real:* Si el teléfono es `03571-15-420000`, ponés: `5493571420000`.

**¿Cómo se cambia el mensaje que aparece escrito?**
En la parte que dice `?text=Hola!%20Visite%20su%20web...`:
- Cada espacio se escribe como `%20`.
- Ejemplo: `?text=Hola!%20Quiero%20pedir%20un%20presupuesto`

### 2. El Formulario de Contacto que manda a WhatsApp
En la sección de contacto, buscá la etiqueta `<form>`:

```html
<form data-tw-wa-form="5493571XXXXXX">
```

¡Solo cambiás `5493571XXXXXX` por el número de tu cliente!  
Cuando el usuario llene su nombre, su consulta y toque el botón "Enviar", Tengo Web arma un mensaje impecable en WhatsApp con todos los datos ordenados. **No requiere programar nada en el servidor ni PHP.**

### 3. Los Botones "Pedir" o "Reservar" de cada producto o cabaña
En las tarjetas de productos vas a ver enlaces como:

```html
<a href="https://wa.me/5493571XXXXXX?text=Hola!%20Quiero%20pedir%20la%20Tabla%20de%20Quesos" target="_blank" class="tw-btn tw-btn-primary btn-sm">
  <i class="bi bi-whatsapp"></i> Pedir
</a>
```
Cambiá el número y poné el nombre del producto al final del texto para que el comerciante sepa exactamente qué le están pidiendo.

---

## 7. Cómo cambiar imágenes y logos

### A. Dónde guardar las imágenes
Guardá todas las fotos del cliente dentro de la carpeta:  
📁 `assets/img/` (dentro de la carpeta de tu cliente).

> [!WARNING]
> ### Reglas de oro para los nombres de las fotos:
> 1. **Todo en minúsculas:** `cabana-roble.jpg` (NO `Cabaña Roble.jpg`).
> 2. **Sin espacios:** Usá guiones medios `-` (ej: `taller-electricidad.jpg`).
> 3. **Sin tildes ni eñes:** `almacen.jpg`, no `almacén.jpg`.
> 4. **Comprimí las fotos antes de subirlas:** Pasalas por [tinypng.com](https://tinypng.com/) para que pesen menos de 300 KB. Eso hace que el sitio cargue en 1 segundo en el celular del cliente.

### B. Cómo poner el logo del cliente en la barra de navegación
En `index.html`, buscá la clase `tw-brand`:

```html
<!-- Si NO tenés logo en imagen y querés solo texto elegante: -->
<a href="#inicio" class="tw-brand">
  <span>NombreCliente<span class="tw-brand-dot">.</span></span>
</a>

<!-- Si SÍ tenés el logo en PNG transparente: -->
<a href="#inicio" class="tw-brand">
  <img src="assets/img/logo-cliente.png" alt="Logo de Mi Cliente" style="height: 48px;">
</a>
```

### C. Cómo cambiar una foto de la galería o de un servicio
Buscá la etiqueta `<img>` y cambiá lo que está entre comillas en `src=""`:

```html
<img src="assets/img/foto-fachada.jpg" alt="Fachada del local en Río Tercero" loading="lazy">
```

---

## 8. Cómo poner el mapa de Google Maps

No necesitás pagar APIs ni cuentas de Google Cloud. Usamos el mapa embebido oficial gratuito:

1. Abrí [Google Maps](https://maps.google.com) en tu computadora.
2. Buscá el negocio del cliente o su dirección en Río Tercero o la localidad que corresponda.
3. Hacé clic en el botón **"Compartir"** (o "Share").
4. Hacé clic en la pestaña que dice **"Insertar un mapa"** (o "Embed a map").
5. Hacé clic en **"Copiar HTML"**.
6. Google te copiará un código largo que empieza con `<iframe src="https://www.google.com/maps/embed...`.
7. En tu `index.html`, andá a la sección de ubicación y reemplazá el `<iframe>` anterior por el que acabás de copiar.
8. Asegurate de que tenga `width="100%"` y `height="100%"` para que se adapte perfecto al celular.

---

## 9. Cómo armar un sitio usando el Showroom

El Showroom es tu **supermercado de módulos**. En vez de programar desde cero:

```
PASO 1: Abrí con doble clic el archivo "showroom/index.html".
PASO 2: Navegá por los módulos visuales (Hero, Servicios, Nosotros, Catálogo, Galería, Testimonios, Contacto, Footers).
PASO 3: Cuando encuentres el diseño que le sirve a tu cliente, tocá el botón negro "Copiar HTML".
PASO 4: Andá a tu "index.html" y pegalo adentro de la etiqueta <main>.
PASO 5: Cambiá los textos por los de tu cliente y guardá con Ctrl + S.
```

Podés mezclar cualquier módulo con cualquier otro: todos encajan como piezas de Lego y toman automáticamente los colores y estilos que definiste en `theme.css`.

---

## 10. Tabla de Rescate (Solución a Errores Típicos)

| ¿Qué pasó? | ¿Por qué ocurrió? | ¿Cómo lo soluciono? |
|---|---|---|
| **"Toqué algo y se rompió toda la página"** | Borraste una etiqueta o un piquito accidentalmente. | Apretá `Ctrl + Z` varias veces para deshacer los últimos cambios hasta que vuelva a verse bien. Guardá con `Ctrl + S`. |
| **"Cambié un color en `theme.css` pero no se ve el cambio en Chrome"** | La memoria caché de tu navegador sigue mostrando el archivo viejo. | En Google Chrome, apretá `Ctrl + F5` (recarga forzada). También verificá que hayas guardado el archivo `theme.css`. |
| **"La foto no se ve y aparece un ícono roto"** | El nombre del archivo está mal escrito o la foto no está en la carpeta `assets/img/`. | Verificá si la foto termina en `.jpg` o `.png` y asegurate de que no tenga mayúsculas o espacios en el nombre. |
| **"El botón de WhatsApp me da error o no abre la app"** | El número tiene espacios, guiones o le falta el código de país. | Asegurate de que el enlace sea `https://wa.me/5493571XXXXXX` todo junto y sin el signo `+`. |
| **"Quiero poner esquinas rectas a todo y no sé cómo"** | No querés tocar una por una las tarjetas. | En `index.html`, agregale `class="tw-sharp"` a la etiqueta `<body>` o poné `--tw-card-radius: 0px;` y `--tw-btn-radius: 0px;` en `theme.css`. |
| **"¿Cómo le entrego la web terminada a Diseñar para publicarla?"** | La web ya está lista. | Comprimí la carpeta del cliente en un archivo `.zip` y envialo. Se puede subir directo a DonWeb, Hostinger, cPanel o Vercel sin compilar nada. |

---

> **¿Tenés dudas adicionales?**  
> Consultá también la [Guía de Producción Técnica (`GUIA-USO.md`)](file:///C:/Users/Usuario/.gemini/antigravity/scratch/tengo-web/docs/GUIA-USO.md) o inspeccioná las 6 demos de la carpeta `demos/` para ver ejemplos de código funcionando en la vida real.
