/**
 * Interfaz compartida y lógica de cada página del prototipo BryTech.
 */
(function () {
  "use strict";

  var WHATSAPP = "https://wa.me/573178385428";
  var INSTAGRAM = "https://www.instagram.com/BryTech.co/";


  function qs(id) {
    return document.getElementById(id);
  }

  function param(nombre) {
    return new URLSearchParams(window.location.search).get(nombre) || "";
  }

  function mostrarToast(mensaje) {
    var toast = qs("toast");
    if (!toast) {
      return;
    }
    toast.textContent = mensaje;
    toast.classList.add("is-visible");
    window.clearTimeout(mostrarToast._t);
    mostrarToast._t = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  /* ---------- Iconos (trazo 1.5, estilo lineal consistente) ---------- */
  function icono(paths, size) {
    return '<svg width="' + (size || 20) + '" height="' + (size || 20) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>";
  }

  function svgBag() {
    return icono('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', 22);
  }

  function svgUser() {
    return icono('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', 22);
  }

  function svgSearch() {
    return icono('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 18);
  }

  function svgMenu() {
    return icono('<path d="M4 6h16M4 12h16M4 18h16"/>', 22);
  }

  function svgArrowUpRight() {
    return icono('<path d="M7 17 17 7"/><path d="M7 7h10v10"/>', 18);
  }

  function svgPlus() {
    return icono('<path d="M12 5v14M5 12h14"/>', 18);
  }

  function svgChat() {
    return icono('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>', 20);
  }

  function svgInstagram() {
    return icono('<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>', 20);
  }

  function svgWhatsApp() {
    return '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11.5A8.5 8.5 0 1 1 11.3 3.1 8.5 8.5 0 0 1 20 11.5zm-8.5 7.2a7.2 7.2 0 0 0 3.66-1l.26-.15 3.08.81-.82-3 .17-.28a7.18 7.18 0 1 0-6.35 3.62zm4.02-5.24c-.22-.11-1.3-.64-1.5-.71s-.35-.11-.5.11-.57.71-.7.86-.26.16-.48.05a5.9 5.9 0 0 1-1.73-1.07 6.5 6.5 0 0 1-1.2-1.5c-.13-.22 0-.34.1-.45s.22-.26.33-.4.15-.22.22-.37.03-.28-.02-.4-.5-1.2-.68-1.64-.36-.38-.5-.38h-.43a.83.83 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.86 4.36 4.36 0 0 0 .9 2.3 9.94 9.94 0 0 0 3.82 3.36c.53.23 1 .4 1.34.52a3.23 3.23 0 0 0 1.48.1 2.43 2.43 0 0 0 1.6-1.13 2 2 0 0 0 .14-1.13c-.06-.1-.2-.16-.42-.27z"/></svg>';
  }

  function paginaActual() {
    return document.body.getAttribute("data-page") || "";
  }

  function navLink(href, label, extra) {
    var actual = window.location.pathname.split("/").pop() || "index.html";
    var current = actual === href ? ' aria-current="page"' : "";
    return '<a href="' + href + '"' + current + (extra || "") + ">" + label + "</a>";
  }

  function renderShell() {
    var header = qs("app-header");
    var footer = qs("app-footer");
    if (header) {
      header.innerHTML =
        '<a class="skip-link" href="#contenido">Saltar al contenido</a>' +
        '<div class="topbar"><div class="container topbar__inner">' +
          '<span class="topbar__text">Tecnología para tu día a día. Atención directa por WhatsApp.</span>' +
          '<a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp ↗</a>' +
        "</div></div>" +
        '<header class="site-header">' +
          '<div class="container header-inner">' +
            '<a class="brand" href="index.html" aria-label="BryTech, inicio">' +
              '<img class="brand__logo" src="assets/logo/Logo_BryTech.jpg" width="140" height="140" alt="BryTech. Potencia accesible. Calidad real.">' +
            "</a>" +
            '<nav class="nav" aria-label="Principal">' +
              navLink("index.html", "Inicio") +
              navLink("catalogo.html", "Tienda") +
              navLink("index.html#categorias", "Categorías") +
              navLink("index.html#nosotros", "Nosotros") +
              navLink("index.html#contacto", "Contacto") +
            "</nav>" +
            '<div class="search-panel" id="search-panel">' +
              '<form class="search-form" action="catalogo.html" method="get" role="search">' +
                '<label class="sr-only" for="q-header">Buscar productos</label>' +
                '<button class="search-form__btn" type="submit" aria-label="Buscar">' + svgSearch() + "</button>" +
                '<input id="q-header" name="q" type="search" placeholder="¿Qué estás buscando?" autocomplete="off">' +
              "</form>" +
            "</div>" +
            '<div class="header-actions">' +
              '<button class="search-toggle" type="button" aria-label="Buscar" aria-expanded="false" aria-controls="search-panel" data-search-toggle>' + svgSearch() + "</button>" +
              '<a class="icon-link" href="cuenta.html" aria-label="Mi cuenta">' + svgUser() + "</a>" +
              '<a class="icon-link cart-link" href="carrito.html" aria-label="Carrito de compras">' +
                svgBag() +
                '<span class="cart-count" data-cart-count>0</span>' +
              "</a>" +
              '<button class="nav-toggle" type="button" aria-label="Menú" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle>' + svgMenu() + "</button>" +
            "</div>" +
          "</div>" +
          '<nav class="mobile-nav" id="mobile-nav" aria-label="Menú móvil">' +
            navLink("index.html", "Inicio") +
            navLink("catalogo.html", "Tienda") +
            navLink("index.html#categorias", "Categorías") +
            navLink("index.html#nosotros", "Nosotros") +
            navLink("index.html#contacto", "Contacto") +
            navLink("carrito.html", "Carrito") +
            navLink("pedido.html", "Consultar pedido") +
            navLink("cuenta.html", "Mi cuenta") +
          "</nav>" +
        "</header>";
    }

    if (footer) {
      var enlacesCategorias = categoriasConProductos().map(function (c) {
        return '<li><a href="catalogo.html?categoria=' + c.categoria.id + '">' + c.categoria.nombre + "</a></li>";
      }).join("");
      footer.innerHTML =
        '<footer class="footer" id="contacto">' +
          '<div class="container footer-grid">' +
            '<div class="footer-brand">' +
              '<img class="footer-brand__logo" src="assets/logo/Logo_BryTech.jpg" width="200" height="200" alt="BryTech. Potencia accesible. Calidad real." loading="lazy">' +
              "<p>Tecnología y accesorios · Cúcuta, Colombia</p>" +
            "</div>" +
            '<div class="footer-col">' +
              "<h2>Explora</h2>" +
              '<ul><li><a href="catalogo.html">Tienda</a></li>' + enlacesCategorias + "</ul>" +
            "</div>" +
            '<div class="footer-col">' +
              "<h2>Estamos para ti</h2>" +
              "<ul>" +
                '<li><a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer">Contacto por WhatsApp</a></li>' +
                '<li><a href="pedido.html">Estado del pedido</a></li>' +
                '<li><a href="cuenta.html">Mi cuenta</a></li>' +
                '<li><a href="carrito.html">Carrito</a></li>' +
              "</ul>" +
            "</div>" +
            '<div class="footer-col">' +
              "<h2>Hablemos de tecnología.</h2>" +
              '<div class="footer-contact">' + svgChat() +
                '<div><small>WhatsApp</small><a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer"><strong>317 838 5428</strong></a></div>' +
              "</div>" +
              '<div class="footer-contact">' + svgInstagram() +
                '<div><a href="' + INSTAGRAM + '" target="_blank" rel="noopener noreferrer">BryTech.co ↗</a></div>' +
              "</div>" +
              '<p class="footer-note">¿No sabes cuál elegir? Escríbenos y encuentra tu próximo esencial.</p>' +
            "</div>" +
          "</div>" +
          '<div class="footer-bottom"><div class="container footer-bottom__inner">' +
            "<span>© " + new Date().getFullYear() + " BryTech. Sitio en desarrollo: los precios son de demostración y el carrito se guarda solo en tu navegador, sin pedidos reales.</span>" +
            '<span class="footer-bottom__links"><a href="admin.html">Panel administrativo (prototipo)</a><span>Colombia · COP</span></span>' +
          "</div></div>" +
        "</footer>" +
        '<a class="whatsapp-fab" href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer" aria-label="Escribir a BryTech por WhatsApp">' +
          svgWhatsApp() +
        "</a>" +
        '<div class="toast" id="toast" role="status"></div>';
    }

    var navBtn = document.querySelector("[data-nav-toggle]");
    var searchBtn = document.querySelector("[data-search-toggle]");
    var mobileNav = qs("mobile-nav");
    var searchPanel = qs("search-panel");
    if (navBtn && mobileNav) {
      navBtn.addEventListener("click", function () {
        var abierto = mobileNav.classList.toggle("is-open");
        navBtn.setAttribute("aria-expanded", String(abierto));
      });
    }
    if (searchBtn && searchPanel) {
      searchBtn.addEventListener("click", function () {
        var abierto = searchPanel.classList.toggle("is-open");
        searchBtn.setAttribute("aria-expanded", String(abierto));
        if (abierto) {
          var campo = qs("q-header");
          if (campo) {
            campo.focus();
          }
        }
      });
    }

    // El encabezado se compacta al bajar (el logo grande solo se ve arriba).
    var cabecera = document.querySelector(".site-header");
    function compactarCabecera() {
      if (cabecera) {
        cabecera.classList.toggle("is-compact", window.scrollY > 40);
      }
    }
    window.addEventListener("scroll", compactarCabecera, { passive: true });
    compactarCabecera();

    BryTechCart.actualizarContador();
  }

  /**
   * Las fotos originales tienen dos tipos de fondo: blanco o gris claro.
   * Las de fondo blanco se funden con la tarjeta mediante "multiply" (CSS);
   * las de fondo gris se marcan con la clase .foto-gris para no oscurecerlas.
   * Si el navegador bloquea la lectura (p. ej. abriendo el archivo con file://),
   * simplemente se deja el comportamiento por defecto.
   */
  function prepararFotos(contenedor) {
    if (!contenedor) {
      return;
    }
    var canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    contenedor.querySelectorAll("img[data-foto]").forEach(function (img) {
      function medir() {
        try {
          ctx.clearRect(0, 0, 1, 1);
          ctx.drawImage(img, 2, 2, 4, 4, 0, 0, 1, 1);
          var px = ctx.getImageData(0, 0, 1, 1).data;
          if (px[3] > 0 && Math.min(px[0], px[1], px[2]) < 250) {
            img.classList.add("foto-gris");
          }
        } catch (error) {
          /* sin acceso a los píxeles: se mantiene el estilo por defecto */
        }
      }
      if (img.complete && img.naturalWidth) {
        medir();
      } else {
        img.addEventListener("load", medir, { once: true });
      }
    });
  }

  /** Categorías que ya tienen al menos un producto, con su producto representativo. */
  function categoriasConProductos() {
    return BryTechData.CATEGORIAS.map(function (categoria) {
      var lista = BryTechData.PRODUCTOS.filter(function (p) {
        return p.categoria === categoria.id;
      });
      var destacados = lista.filter(function (p) {
        return p.destacado;
      });
      return { categoria: categoria, total: lista.length, producto: destacados[0] || lista[0] || null };
    }).filter(function (c) {
      return c.producto;
    });
  }

  /** Hasta n productos destacados, intentando variar de categoría. */
  function destacadosVariados(n) {
    var elegidos = [];
    var vistas = {};
    var destacados = BryTechData.productosDestacados();
    destacados.forEach(function (p) {
      if (elegidos.length < n && !vistas[p.categoria]) {
        vistas[p.categoria] = true;
        elegidos.push(p);
      }
    });
    destacados.forEach(function (p) {
      if (elegidos.length < n && elegidos.indexOf(p) === -1) {
        elegidos.push(p);
      }
    });
    return elegidos;
  }

  function tarjetaProducto(producto, sinInsignia) {
    var variante = producto.variantes[0];
    var img = BryTechData.imagenPrincipal(producto, variante);
    var mostrarColores = producto.variantes.length > 1 || variante.color !== "Único";
    var swatches = mostrarColores ? producto.variantes.map(function (v) {
      return '<span class="swatch" style="background:' + v.hex + '" title="' + v.color + '"></span>';
    }).join("") : "";
    var categoria = (BryTechData.obtenerCategoria(producto.categoria) || {}).nombre || "";
    var enlace = "producto.html?id=" + encodeURIComponent(producto.id);
    var insignia = producto.destacado && sinInsignia !== true ? '<span class="badge">Selección BryTech</span>' : "";
    // Con un solo color se agrega directo; con varios, se elige el color en la ficha.
    var accion = producto.variantes.length === 1
      ? '<button class="icon-btn" type="button" data-add="' + producto.id + '" data-variante="' + variante.id + '" aria-label="Agregar ' + producto.nombre + ' al carrito">' + svgPlus() + "</button>"
      : '<a class="icon-btn" href="' + enlace + '" aria-label="Elegir color de ' + producto.nombre + '">' + svgPlus() + "</a>";
    return (
      '<article class="product-card">' +
        '<a class="product-card__media" href="' + enlace + '" tabindex="-1" aria-hidden="true">' +
          '<img data-foto src="' + img + '" alt="' + producto.nombre + '" loading="lazy" decoding="async">' +
          insignia +
        "</a>" +
        '<div class="product-card__body">' +
          '<p class="product-card__cat">' + categoria + "</p>" +
          '<h3><a href="' + enlace + '">' + producto.nombre + "</a></h3>" +
          '<div class="swatches" aria-hidden="true">' + swatches + "</div>" +
          '<div class="product-card__foot">' +
            '<p class="price">' + BryTechData.formatearCOP(producto.precio) + "</p>" +
            accion +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function initInicio() {
    var cats = qs("categorias-destacadas");
    var dest = qs("productos-destacados");

    if (cats) {
      cats.innerHTML = categoriasConProductos().map(function (info) {
        var c = info.categoria;
        return (
          '<a class="category-card" href="catalogo.html?categoria=' + c.id + '">' +
            '<div class="category-card__media"><img data-foto src="' + BryTechData.imagenPrincipal(info.producto, info.producto.variantes[0]) + '" alt="" loading="lazy" decoding="async"></div>' +
            '<div class="category-card__row"><strong>' + c.nombre + "</strong>" + svgArrowUpRight() + "</div>" +
            '<span class="category-card__lema">' + (c.lema || c.descripcion) + "</span>" +
          "</a>"
        );
      }).join("");
      prepararFotos(cats);
    }

    if (dest) {
      dest.innerHTML = destacadosVariados(4).map(function (p) { return tarjetaProducto(p, true); }).join("");
      prepararFotos(dest);
    }
  }

  function leerFiltrosFormulario() {
    return {
      q: (qs("filtro-q") || {}).value || "",
      categoria: (qs("filtro-categoria") || {}).value || "todos",
      min: (qs("filtro-min") || {}).value || "",
      max: (qs("filtro-max") || {}).value || "",
      orden: (qs("filtro-orden") || {}).value || "relevancia"
    };
  }

  function pintarCatalogo() {
    var grid = qs("catalogo-grid");
    var meta = qs("catalogo-meta");
    var empty = qs("catalogo-vacio");
    if (!grid) {
      return;
    }
    var filtros = leerFiltrosFormulario();
    var lista = BryTechData.filtrarProductos(filtros);
    grid.innerHTML = lista.map(function (p) { return tarjetaProducto(p); }).join("");
    prepararFotos(grid);
    if (meta) {
      meta.textContent = lista.length + (lista.length === 1 ? " producto" : " productos") + " · precios de demostración";
    }
    if (empty) {
      empty.hidden = lista.length !== 0;
    }
  }

  function initCatalogo() {
    var select = qs("filtro-categoria");
    if (select) {
      select.innerHTML = '<option value="todos">Todas las categorías</option>' +
        BryTechData.CATEGORIAS.map(function (c) {
          return '<option value="' + c.id + '">' + c.nombre + "</option>";
        }).join("");
    }
    if (qs("filtro-q")) {
      qs("filtro-q").value = param("q");
    }
    if (select && param("categoria")) {
      select.value = param("categoria");
    }
    ["filtro-q", "filtro-categoria", "filtro-min", "filtro-max", "filtro-orden"].forEach(function (id) {
      var el = qs(id);
      if (el) {
        el.addEventListener("input", pintarCatalogo);
        el.addEventListener("change", pintarCatalogo);
      }
    });
    var limpiar = qs("limpiar-filtros");
    if (limpiar) {
      limpiar.addEventListener("click", function () {
        qs("filtro-q").value = "";
        qs("filtro-categoria").value = "todos";
        qs("filtro-min").value = "";
        qs("filtro-max").value = "";
        qs("filtro-orden").value = "relevancia";
        pintarCatalogo();
      });
    }
    pintarCatalogo();
  }

  function initProducto() {
    var id = param("id");
    var producto = BryTechData.obtenerProducto(id);
    var root = qs("producto-detalle");
    if (!root) {
      return;
    }
    if (!producto) {
      root.innerHTML = '<div class="empty-state"><h1>Producto no encontrado</h1><p>El identificador no existe en el catálogo de demostración.</p><a class="btn btn-primary" href="catalogo.html">Volver al catálogo</a></div>';
      return;
    }
    document.title = producto.nombre + " — BryTech";
    var varianteSel = BryTechData.obtenerVariante(producto, param("variante")) || producto.variantes[0];
    var imagenes = (varianteSel.imagenes && varianteSel.imagenes.length ? varianteSel.imagenes : producto.imagenes).slice();
    var categoria = BryTechData.obtenerCategoria(producto.categoria);

    // Ficha: categoría y colores salen de los datos del catálogo. De "caracteristicas"
    // solo se muestran las especificaciones reales; las notas internas se omiten.
    var NOTAS_INTERNAS = /pendiente|carpeta|archivo|identificad|prototipo|agrupa|empaque|^categor/i;
    var especificaciones = producto.caracteristicas.filter(function (c) {
      return !NOTAS_INTERNAS.test(c);
    });
    var datosBasicos = ["Categoría: " + (categoria ? categoria.nombre : "")];
    if (producto.variantes.length > 1 || producto.variantes[0].color !== "Único") {
      datosBasicos.push("Colores: " + producto.variantes.map(function (v) { return v.color; }).join(", "));
    }
    var caracteristicas = datosBasicos.concat(especificaciones);
    var hayFichaIncompleta = especificaciones.length === 0;

    function render() {
      var principal = BryTechData.encodeRuta(imagenes[0]);
      var thumbs = imagenes.length > 1 ? imagenes.map(function (ruta, i) {
        return '<button type="button" class="' + (i === 0 ? "is-active" : "") + '" data-thumb="' + i + '" aria-label="Ver foto ' + (i + 1) + '"><img src="' + BryTechData.encodeRuta(ruta) + '" alt="Vista ' + (i + 1) + " de " + producto.nombre + '"></button>';
      }).join("") : "";
      var colores = producto.variantes.map(function (v) {
        var active = v.id === varianteSel.id ? " is-active" : "";
        var light = v.hex === "#f8fafc" || v.hex === "#cbd5e1" ? " is-light" : "";
        return '<button type="button" class="color-option' + active + '" data-variante="' + v.id + '" aria-pressed="' + (v.id === varianteSel.id) + '"><span class="swatch' + light + '" style="background:' + v.hex + '"></span>' + v.color + "</button>";
      }).join("");
      var selectorColor = "";
      if (producto.variantes.length > 1) {
        selectorColor = '<div><strong>Color o acabado</strong><div class="color-options">' + colores + "</div></div>";
      } else if (varianteSel.color !== "Único") {
        selectorColor = "<p><strong>Color:</strong> " + varianteSel.color + "</p>";
      }
      var consultaWA = WHATSAPP + "?text=" + encodeURIComponent("Hola BryTech, quiero consultar la disponibilidad de " + producto.nombre + " (" + varianteSel.color + ").");
      root.innerHTML =
        '<div class="product-layout">' +
          '<div class="gallery">' +
            '<div class="gallery__main"><img id="foto-principal" src="' + principal + '" alt="' + producto.nombre + ", " + varianteSel.color + '"></div>' +
            (thumbs ? '<div class="thumbs">' + thumbs + "</div>" : "") +
          "</div>" +
          "<div>" +
            '<p class="eyebrow">' + (categoria ? categoria.nombre : "") + "</p>" +
            "<h1>" + producto.nombre + "</h1>" +
            '<p class="product-price">' + BryTechData.formatearCOP(producto.precio) + "</p>" +
            '<p class="demo-chip">Precio de demostración · no es una tarifa comercial verificada</p>' +
            '<p class="product-desc">' + producto.descripcion + "</p>" +
            selectorColor +
            '<form id="form-agregar">' +
              '<div class="qty-row">' +
                '<label for="cantidad">Cantidad</label>' +
                '<input id="cantidad" name="cantidad" type="number" min="1" max="99" value="1">' +
              "</div>" +
              '<button class="btn btn-primary" type="submit">Agregar al carrito</button>' +
            "</form>" +
            '<p class="muted product-wa">¿Quieres confirmar la disponibilidad? <a href="' + consultaWA + '" target="_blank" rel="noopener noreferrer">Consúltala por WhatsApp</a> antes de hacer tu pedido.</p>' +
            "<h2>Detalles</h2>" +
            '<ul class="feature-list">' + caracteristicas.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul>" +
            (hayFichaIncompleta ? '<p class="muted">Estamos completando las especificaciones técnicas. Pregúntanos por WhatsApp si necesitas un dato en particular.</p>' : "") +
          "</div>" +
        "</div>";

      root.querySelectorAll("[data-thumb]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var i = Number(btn.getAttribute("data-thumb"));
          qs("foto-principal").src = BryTechData.encodeRuta(imagenes[i]);
          root.querySelectorAll("[data-thumb]").forEach(function (b) { b.classList.remove("is-active"); });
          btn.classList.add("is-active");
        });
      });
      root.querySelectorAll("[data-variante]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          varianteSel = BryTechData.obtenerVariante(producto, btn.getAttribute("data-variante"));
          imagenes = (varianteSel.imagenes && varianteSel.imagenes.length ? varianteSel.imagenes : producto.imagenes).slice();
          render();
        });
      });
      var form = qs("form-agregar");
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var qty = Number(qs("cantidad").value);
        if (!qty || qty < 1) {
          mostrarToast("Indica una cantidad válida, de 1 a 99.");
          return;
        }
        var res = BryTechCart.agregar(producto.id, varianteSel.id, qty);
        mostrarToast(res.mensaje);
      });
    }

    render();
  }

  function initCarrito() {
    var root = qs("carrito-contenido");
    if (!root) {
      return;
    }

    function pintar() {
      var resumen = BryTechCart.enriquecer();
      if (!resumen.lineas.length) {
        root.innerHTML = '<div class="empty-state"><h1>Tu carrito está vacío</h1><p>Agrega productos desde el catálogo. Este carrito se guarda solo en tu navegador.</p><a class="btn btn-primary" href="catalogo.html">Ir al catálogo</a></div>';
        return;
      }
      var items = resumen.lineas.map(function (linea) {
        return (
          '<article class="cart-item" data-linea="' + linea.id + '">' +
            '<img src="' + BryTechData.imagenPrincipal(linea.producto, linea.variante) + '" alt="">' +
            "<div>" +
              "<h3>" + linea.producto.nombre + "</h3>" +
              '<p class="muted">Variante: ' + linea.variante.color + "</p>" +
              '<p>Precio unitario (demo): <strong>' + BryTechData.formatearCOP(linea.precio) + "</strong></p>" +
              '<div class="qty-row">' +
                '<button class="btn btn-ghost" type="button" data-menos aria-label="Reducir cantidad">-</button>' +
                '<input type="number" min="1" max="99" value="' + linea.cantidad + '" data-qty aria-label="Cantidad">' +
                '<button class="btn btn-ghost" type="button" data-mas aria-label="Aumentar cantidad">+</button>' +
                '<button class="btn btn-danger" type="button" data-eliminar>Eliminar</button>' +
              "</div>" +
              "<p>Importe: <strong>" + BryTechData.formatearCOP(linea.importe) + "</strong></p>" +
            "</div>" +
          "</article>"
        );
      }).join("");
      root.innerHTML =
        '<div class="cart-layout">' +
          '<div><h1>Carrito</h1><p class="alert alert-warn">Persistencia local de demostración. No reserva inventario ni genera un pedido real.</p><div class="cart-table">' + items + "</div></div>" +
          '<aside class="summary">' +
            "<h2>Resumen</h2>" +
            "<p>Unidades: <strong>" + resumen.unidades + "</strong></p>" +
            "<p>Subtotal de demostración: <strong>" + BryTechData.formatearCOP(resumen.subtotal) + "</strong></p>" +
            '<a class="btn btn-primary" href="checkout.html">Continuar al checkout</a>' +
            '<button class="btn btn-ghost" type="button" id="vaciar-carrito" style="margin-top:8px;width:100%">Vaciar carrito</button>' +
          "</aside>" +
        "</div>";

      root.querySelectorAll("[data-linea]").forEach(function (nodo) {
        var id = nodo.getAttribute("data-linea");
        var input = nodo.querySelector("[data-qty]");
        nodo.querySelector("[data-menos]").addEventListener("click", function () {
          BryTechCart.actualizarCantidad(id, Number(input.value) - 1);
          pintar();
        });
        nodo.querySelector("[data-mas]").addEventListener("click", function () {
          BryTechCart.actualizarCantidad(id, Number(input.value) + 1);
          pintar();
        });
        input.addEventListener("change", function () {
          var n = parseInt(input.value, 10);
          if (isNaN(n) || n < 1) {
            mostrarToast("La cantidad mínima es 1.");
            n = 1;
          }
          BryTechCart.actualizarCantidad(id, n);
          pintar();
        });
        nodo.querySelector("[data-eliminar]").addEventListener("click", function () {
          BryTechCart.eliminar(id);
          pintar();
        });
      });
      qs("vaciar-carrito").addEventListener("click", function () {
        BryTechCart.vaciar();
        pintar();
      });
    }

    pintar();
  }

  function valor(id) {
    return (qs(id).value || "").trim();
  }

  function setError(id, mensaje) {
    qs(id).textContent = mensaje || "";
  }

  function initCheckout() {
    var form = qs("form-checkout");
    if (!form) {
      return;
    }
    var resumen = BryTechCart.enriquecer();
    var box = qs("checkout-resumen");
    if (!resumen.lineas.length) {
      form.hidden = true;
      qs("checkout-vacio").hidden = false;
      return;
    }
    box.innerHTML = resumen.lineas.map(function (l) {
      return "<li>" + l.producto.nombre + " · " + l.variante.color + " × " + l.cantidad + " — " + BryTechData.formatearCOP(l.importe) + "</li>";
    }).join("") + "<p><strong>Subtotal de demostración: " + BryTechData.formatearCOP(resumen.subtotal) + "</strong></p>";

    var entrega = qs("entrega");
    function toggleDireccion() {
      var necesita = entrega.value === "domicilio";
      qs("campo-direccion").hidden = !necesita;
      qs("direccion").required = necesita;
    }
    entrega.addEventListener("change", toggleDireccion);
    toggleDireccion();

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      var nombre = valor("nombre");
      var telefono = valor("telefono").replace(/\s/g, "");
      var ciudad = valor("ciudad");
      var metodo = entrega.value;
      var direccion = valor("direccion");
      var observaciones = valor("observaciones");

      setError("error-nombre", "");
      setError("error-telefono", "");
      setError("error-ciudad", "");
      setError("error-entrega", "");
      setError("error-direccion", "");

      if (nombre.length < 3) {
        setError("error-nombre", "Escribe tu nombre completo (mínimo 3 caracteres).");
        ok = false;
      }
      if (!/^[0-9]{10}$/.test(telefono)) {
        setError("error-telefono", "Ingresa un teléfono de 10 dígitos, sin espacios.");
        ok = false;
      }
      if (ciudad.length < 2) {
        setError("error-ciudad", "Indica la ciudad.");
        ok = false;
      }
      if (!metodo) {
        setError("error-entrega", "Selecciona un método de entrega.");
        ok = false;
      }
      if (metodo === "domicilio" && direccion.length < 8) {
        setError("error-direccion", "La dirección es necesaria para domicilio.");
        ok = false;
      }
      if (!ok) {
        qs("checkout-mensaje").innerHTML = '<div class="alert alert-error">Revisa los campos marcados antes de continuar.</div>';
        return;
      }

      var pedido = {
        id: BryTechCart.crearIdPedido(),
        fecha: new Date().toISOString(),
        estado: "simulacion-local",
        cliente: { nombre: nombre, telefono: telefono, ciudad: ciudad, direccion: metodo === "domicilio" ? direccion : "", entrega: metodo, observaciones: observaciones },
        items: resumen.lineas.map(function (l) {
          return { productoId: l.producto.id, nombre: l.producto.nombre, variante: l.variante.color, cantidad: l.cantidad, precioDemo: l.precio };
        }),
        totalDemo: resumen.subtotal,
        aviso: "Simulación local. Este identificador no existe en un servidor ni inicia un pedido real."
      };
      BryTechCart.guardarPedidoDemo(pedido);
      BryTechCart.vaciar();
      form.hidden = true;
      qs("checkout-exito").hidden = false;
      qs("pedido-id-demo").textContent = pedido.id;
    });
  }

  function initPedido() {
    var form = qs("form-pedido");
    if (!form) {
      return;
    }
    var pre = param("id");
    if (pre) {
      qs("pedido-id").value = pre;
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var id = valor("pedido-id").toUpperCase();
      var salida = qs("pedido-resultado");
      if (!id) {
        salida.innerHTML = '<div class="alert alert-error">Escribe un identificador.</div>';
        return;
      }
      var pedido = BryTechCart.buscarPedidoDemo(id);
      if (!pedido) {
        salida.innerHTML = '<div class="alert alert-warn"><strong>Sin resultado en este navegador.</strong> No hay un pedido de demostración con ese identificador en la sesión actual. El seguimiento real de pedidos requiere backend (Spring Boot) y no está activo.</div>';
        return;
      }
      salida.innerHTML =
        '<div class="alert alert-ok">Se encontró una simulación local, no un pedido de servidor.</div>' +
        '<div class="panel" style="padding:18px">' +
          "<p>Identificador: <strong class=\"mono\">" + pedido.id + "</strong></p>" +
          "<p>Estado mostrado: simulación local (no es un estado operativo de tienda).</p>" +
          "<p>Cliente: " + pedido.cliente.nombre + " · " + pedido.cliente.ciudad + "</p>" +
          "<p>Total de demostración: " + BryTechData.formatearCOP(pedido.totalDemo) + "</p>" +
          "<ul>" + pedido.items.map(function (i) { return "<li>" + i.nombre + " (" + i.variante + ") × " + i.cantidad + "</li>"; }).join("") + "</ul>" +
        "</div>";
    });
  }

  function initCuenta() {
    function bloquear(formId, mensajeId, texto) {
      var form = qs(formId);
      if (!form) {
        return;
      }
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var pass = form.querySelector('input[type="password"]');
        if (pass) {
          pass.value = "";
        }
        qs(mensajeId).innerHTML = '<div class="alert alert-warn">' + texto + "</div>";
      });
    }
    bloquear("form-login", "login-mensaje", "El inicio de sesión no está activo. La autenticación segura se implementará en el backend con Spring Security. No se guardó ninguna contraseña.");
    bloquear("form-registro", "registro-mensaje", "El registro de cuentas no está activo. Un formulario frontend no crea usuarios reales ni almacena credenciales. Esta interfaz queda preparada para conectarse a POST /api/auth/registro.");
  }

  function initAdmin() {
    var tbody = qs("admin-productos");
    if (!tbody) {
      return;
    }
    tbody.innerHTML = BryTechData.PRODUCTOS.map(function (p) {
      return "<tr><td>" + p.id + "</td><td>" + p.nombre + "</td><td>" + p.categoria + "</td><td>" + BryTechData.formatearCOP(p.precio) + "</td><td>" + p.variantes.length + "</td><td>stock no verificado</td></tr>";
    }).join("");
  }

  // Botón "+" de las tarjetas: agrega el producto de un solo color al carrito.
  document.addEventListener("click", function (ev) {
    var boton = ev.target.closest ? ev.target.closest("[data-add]") : null;
    if (!boton) {
      return;
    }
    var res = BryTechCart.agregar(boton.getAttribute("data-add"), boton.getAttribute("data-variante"), 1);
    mostrarToast(res.mensaje);
  });

  document.addEventListener("DOMContentLoaded", function () {
    renderShell();
    var page = paginaActual();
    if (page === "inicio") {
      initInicio();
    }
    if (page === "catalogo") {
      initCatalogo();
    }
    if (page === "producto") {
      initProducto();
    }
    if (page === "carrito") {
      initCarrito();
    }
    if (page === "checkout") {
      initCheckout();
    }
    if (page === "pedido") {
      initPedido();
    }
    if (page === "cuenta") {
      initCuenta();
    }
    if (page === "admin") {
      initAdmin();
    }
  });
})();
