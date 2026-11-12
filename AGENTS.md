# AGENTS.md — BryTech

Guía para agentes y desarrolladores que continúen el prototipo.

## Alcance actual

Prototipo frontend académico con HTML, CSS y JavaScript. No hay backend, ni MySQL, ni autenticación real.

## No hacer

- No redibujar ni sustituir `assets/logo/Logo_BryTech.jpg`.
- No mover ni borrar fotografías originales sin autorización del dueño del proyecto.
- No presentar precios, existencias, SKU, garantías o tiempos de entrega como información comercial auténtica.
- No guardar contraseñas en `localStorage`.
- No introducir React, Angular, Vue, Tailwind, Bootstrap ni un empaquetador en esta etapa.

## Dónde están los datos

- Catálogo: `js/data.js` (`BryTechData`).
- Carrito: `js/cart.js` (`BryTechCart`), clave `brytech_carrito_demo` en `localStorage`.
- Pedidos de simulación: `sessionStorage`, clave `brytech_pedidos_demo`.
- Interfaz: `js/app.js`.
- Estilos: `styles.css` (variables de marca).

## Variantes de color

Un modelo con varios colores es un solo producto y varias variantes. El carrito usa `productoId::varianteId`.

## Imágenes pendientes de revisión

La carpeta `assets/productos/mandos/AuricularesCable/` contiene fotos de auriculares QKZ AK6. En el prototipo se muestran como audífonos, sin mover archivos.

## Diseño y paleta

Diseño basado en la propuesta de Figma (Inter, fondos cálidos, un solo azul de acento). Los colores viven en `:root` de `styles.css`:

- Tinta `#17191C` · Gris texto `#66696E` · Azul `#1555F5`
- Cálido `#F5F4F0` · Fondo de fotos `#EDEFF2` · Oscuro `#101319`

Las imágenes de `assets/banners/*.webp` son ILUSTRATIVAS (de Figma) y deben reemplazarse por fotos propias con el mismo nombre. No presentarlas como fotos de productos de BryTech.
