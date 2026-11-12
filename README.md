# BryTech — Tienda Web

**Potencia accesible. Calidad real.**

Prototipo frontend de la tienda oficial de BryTech: tecnología y accesorios para gaming, estudio, oficina, productividad, hogar y uso cotidiano. Identidad visual 70 % minimalista, 20 % tecnológica y 10 % gamer.

- **Ubicación inicial:** Cúcuta, Norte de Santander, Colombia.
- **Instagram:** [BryTech.co](https://www.instagram.com/BryTech.co/)
- **WhatsApp:** [3178385428](https://wa.me/573178385428)

Este README distingue con claridad qué es frontend de demostración y qué requiere backend.

## Cómo abrir el prototipo

1. Abre la carpeta `brytech-web` en Visual Studio Code o Cursor.
2. Sirve la carpeta con Live Server o con un servidor estático local.
3. Entra a `index.html`.

No hace falta instalar Node.js, frameworks ni base de datos en esta etapa.

## Estructura

```text
brytech-web/
├── index.html              Página principal (RF01)
├── catalogo.html           Catálogo, búsqueda y filtros (RF02, RF03)
├── producto.html           Ficha y variantes (RF04)
├── carrito.html            Carrito (RF05)
├── checkout.html           Pedido de demostración (RF06)
├── pedido.html             Consulta de pedido (RF07)
├── cuenta.html             Registro e inicio de sesión (RF11)
├── admin.html              Preparación de backoffice (RF08–RF10)
├── styles.css              Diseño (variables en :root)
├── js/
│   ├── data.js             Catálogo centralizado
│   ├── cart.js             Carrito y simulación local
│   └── app.js              Interfaz compartida y páginas
├── README.md
├── AGENTS.md
└── assets/
    ├── logo/Logo_BryTech.jpg
    ├── identidad/
    ├── banners/
    ├── redes/
    └── productos/          Fotografías originales (no se movieron)
```

## Qué está implementado (frontend)

| Código | Estado |
|---|---|
| RF01 Inicio | Implementado: logo original, menú, buscador, carrito, banner, lema, categorías, destacados, beneficios, WhatsApp y pie. |
| RF02 Catálogo | Implementado con las fotografías locales. Combos y accesorios existen como categorías vacías. |
| RF03 Filtros | Búsqueda, categoría, rango de precio, orden, mostrar todos, limpiar y mensaje vacío. |
| RF04 Detalle | Página de producto con galería, color, precio COP de demostración y alta al carrito. |
| RF05 Carrito | Altas, cantidades, borrado, subtotal, unidades, variantes separadas y `localStorage`. |
| RF06 Checkout | Formulario validado. Simulación en `sessionStorage`. No afirma registro en servidor. |
| RF07 Pedidos | Consulta de demostración. Si no hay simulación en esta sesión, lo indica con claridad. |
| RF08–RF10 Admin | Página documental + tabla de solo lectura. Sin CRUD real. |
| RF11 Cuenta | Formularios visibles. No autenticación ficticia ni guardado de contraseñas. |

## Qué es demostrativo

- Todos los **precios** son de demostración. No son tarifas comerciales verificadas.
- Las **existencias** están en `null`. No se muestran cantidades reales ni se bloquea la venta por inventario.
- No hay **SKU** verificados.
- Las **descripciones** se limitan a lo que se puede inferir del nombre de archivo y de la fotografía. No hay fichas técnicas inventadas.
- El carrito en `localStorage` no es una base de datos ni un pedido.
- Un identificador `BRY-DEMO-####` solo vive en la sesión del navegador.

## Inventario de imágenes

### Logo

- `assets/logo/Logo_BryTech.jpg` — logo original circular (fondo blanco). Se usa en encabezado y pie, sin recortes agresivos.

### Productos agrupados por modelo (variantes de color)

| Producto | Variantes | Archivos |
|---|---|---|
| Attack Shark X11 | Negro, blanco, rojo | `mouses/Mouse Attack Shark X11 *.jpg` |
| Ajazz 139 V2 | Negro, blanco, rojo | `mouses/Mouse Ajjazz 139V2 *.jpg` |
| Lenovo N220 | Negro, blanco | `mouses/Mouse Inalámbrico Lenovo N220 *.png` |
| Ajazz NK61 | Blanco, negro, negro/gris/amarillo | `teclados/AjjazzNK61_*` |
| Easy SMX X05 Pro | Negro, blanco | `mandos/Mando Easy SMX X05 Pro *.jpg` |
| Ajazz NK68 | Lila (3 fotos del mismo color) | `teclados/AjjazzNK68_lila*` |
| Ajazz AK820 | Gris (2 fotos) | `teclados/AjjazzAK820_gris*` |

El resto de modelos tiene una sola fotografía y se trata como un producto con un acabado único.

### Pendiente de reclasificación (no se movieron archivos)

`assets/productos/mandos/AuricularesCable/` contiene fotografías de auriculares **QKZ AK6**. La carpeta está dentro de mandos, pero el contenido no corresponde a controles. En el prototipo se muestran como audífonos de cable, **sin mover ni borrar** los archivos. Revisión manual solicitada.

### Carpetas preparadas y aún vacías

`assets/identidad/`, `assets/banners/`, `assets/redes/`, `assets/productos/combos/`, `assets/productos/accesorios/`, `assets/productos/otros/`.

### Imágenes ilustrativas de la página de inicio (REEMPLAZAR por fotos propias)

Estas cinco imágenes vienen de la propuesta de diseño de Figma. **No son fotos de productos de BryTech**: sirven para que el diseño se vea completo. Para cambiarlas, guarda tu foto con el **mismo nombre** y formato en `assets/banners/` (no hay que tocar código):

| Archivo | Dónde se ve | Tamaño recomendado |
|---|---|---|
| `hero-audio.webp` | Imagen grande del héroe (arriba, derecha) | 1660 × 1240 px |
| `banda-teclado-mouse.webp` | Banda oscura "Más precisión. Más control." | 1544 × 816 px |
| `editorial-escritorio.webp` | Sección "Es tu estilo", tarjeta 1 | 1284 × 720 px |
| `editorial-movimiento.webp` | Sección "Es tu estilo", tarjeta 2 | 1284 × 720 px |
| `nosotros-vida-real.webp` | Sección "Somos BryTech" | 1440 × 836 px |

Mientras tanto, los textos de esas secciones (por ejemplo "Audio / Selección BryTech") están escritos en `index.html` y se pueden editar allí.

## Arquitectura futura: Spring Boot + MySQL

El prototipo ya separa productos, variantes, categorías, carrito, clientes y pedidos. En la etapa de backend, `js/data.js` debe dejar de ser la fuente de verdad.

### Entidades previstas

- **Categoria:** id, nombre, descripcion, activa.
- **Producto:** id, nombre, descripcion, categoria_id, precio, publicado, caracteristicas.
- **Variante:** id, producto_id, color, sku, activa.
- **Imagen:** id, producto_id o variante_id, ruta, orden.
- **Inventario:** variante_id, cantidad (fuente de existencias).
- **Usuario:** id, nombre, correo, hash_password, rol (CLIENTE / ADMIN).
- **Pedido:** id, usuario_id o datos de invitado, fecha, estado, total, ciudad, direccion, telefono, observaciones.
- **PedidoItem:** id, pedido_id, variante_id, cantidad, precio_unitario_congelado.

Relaciones: una categoría tiene muchos productos; un producto tiene muchas variantes; cada variante tiene inventario e imágenes; un pedido tiene muchos ítems.

Estados de pedido previstos: `pendiente`, `confirmado`, `en_preparacion`, `enviado`, `entregado`, `cancelado`.

### Endpoints de API (propuesta)

```text
GET    /api/categorias
GET    /api/productos
GET    /api/productos/{id}
GET    /api/productos?q=&categoria=&min=&max=&orden=

POST   /api/auth/registro
POST   /api/auth/login
POST   /api/auth/logout

POST   /api/pedidos                  (valida precios e inventario en servidor)
GET    /api/pedidos/{id}             (autorizado o token de consulta)
GET    /api/admin/pedidos
PATCH  /api/admin/pedidos/{id}/estado

POST   /api/admin/productos
PUT    /api/admin/productos/{id}
PATCH  /api/admin/productos/{id}/precio
POST   /api/admin/variantes
PATCH  /api/admin/inventario/{varianteId}
```

Los totales y el stock definitivos **nunca** deben tomarse del navegador.

### Seguridad que debe vivir en el servidor

- Hash de contraseñas (BCrypt o equivalente).
- Sesiones o JWT con caducidad, HTTPS y cookies `HttpOnly` si aplica.
- Autorización por roles para el panel admin.
- Validación de entradas y protección CSRF.
- Recalcular precios e inventario al confirmar el pedido.
- No persistir secretos ni contraseñas en el frontend.

## Diseño y paleta (variables CSS en `styles.css`)

El diseño sigue la propuesta de Figma: tipografía **Inter**, fondos cálidos, un solo azul de acento y una banda oscura como toque gamer. Todos los colores están en `:root` de `styles.css`; cambiar `--blue` cambia el acento en todo el sitio.

| Variable | Código | Uso |
|---|---|---|
| `--ink` | `#17191C` | Texto principal, barra superior |
| `--muted` | `#66696E` | Texto secundario |
| `--blue` | `#1555F5` | Botones, enlaces, estado activo |
| `--line` | `#DDDFE2` | Bordes y separadores |
| `--warm` | `#F5F4F0` | Fondo cálido de secciones |
| `--media` | `#EDEFF2` | Fondo detrás de las fotos de producto |
| `--dark` | `#101319` | Banda oscura y bloque de contacto |

### Cómo está armada la página de inicio

- `index.html` contiene el héroe, la banda oscura, la sección editorial, la fila de confianza y el bloque "Somos BryTech" (texto e imágenes de `assets/banners/`).
- `js/app.js` genera la barra superior, el encabezado, el pie, las categorías y los productos destacados a partir de `js/data.js`.
- Las categorías con productos aparecen solas en la página de inicio; los lemas de cada una están en `lema` dentro de `CATEGORIAS` (`js/data.js`).
- El botón "+" de cada tarjeta agrega al carrito si el producto tiene un solo color; si tiene varios, abre la ficha para elegir.
- La newsletter del diseño original no se implementó (requeriría backend): ese bloque lleva a Instagram y WhatsApp.

## Limitaciones del prototipo

- Sin pagos, envíos reales, ni tiempos de entrega.
- Sin inventario verificado.
- Sin cuentas de usuario.
- Persistencia local ≠ pedido.
- Algunas fotos de teclado muestran la marca Nacodex aunque el archivo diga Ajazz; se documenta, no se inventa una ficha distinta.

## Próximos pasos sugeridos

1. Confirmar precios comerciales reales y existencias por variante.
2. Reclasificar `AuricularesCable` si corresponde.
3. Completar fichas técnicas verificadas.
4. Diseñar el esquema MySQL y los controladores Spring Boot a partir de las entidades anteriores.
5. Sustituir `BryTechData.PRODUCTOS` por llamadas `fetch` a la API.
