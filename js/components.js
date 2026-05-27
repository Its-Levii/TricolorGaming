function includeHeader() {
  document.getElementById('header').innerHTML = `
    <header>
      <div class="header-inner">
        <a href="index.html" class="logo">
          <span class="logo-dorado">Tricolor</span><span class="logo-azul">Gaming</span>
        </a>
        <nav>
          <a href="index.html" class="nav-link">Inicio</a>
          <a href="tienda.html" class="nav-link">Tienda</a>
          <a href="blog.html" class="nav-link">Blog</a>
          <a href="nosotros.html" class="nav-link">Nosotros</a>
          <a href="contacto.html" class="nav-link">Contacto</a>
          <a href="faq.html" class="nav-link">FAQ</a>
        </nav>
        <div class="header-actions">
          <form action="tienda.html" method="get" id="search-form">
            <input type="text" name="q" id="search-input" placeholder="Buscar productos..." aria-label="Buscar productos">
            <button type="submit" class="search-btn" aria-label="Buscar">${ICONS.search}</button>
          </form>
          <a href="carrito.html" class="cart-icon" aria-label="Carrito de compras">
            ${ICONS.cart}<span id="cart-count">0</span>
          </a>
          <button id="menu-toggle" class="menu-toggle" aria-label="Abrir menú">${ICONS.menu}</button>
        </div>
      </div>
    </header>
    <div id="mobile-menu">
      <a href="index.html" class="nav-link">Inicio</a>
      <a href="tienda.html" class="nav-link">Tienda</a>
      <a href="blog.html" class="nav-link">Blog</a>
      <a href="nosotros.html" class="nav-link">Nosotros</a>
      <a href="contacto.html" class="nav-link">Contacto</a>
      <a href="faq.html" class="nav-link">FAQ</a>
      <a href="carrito.html" class="nav-link">Carrito</a>
      <a href="credito.html" class="nav-link">Solicitud de crédito</a>
      <a href="tarjeta-cliente.html" class="nav-link">Tarjeta de cliente</a>
    </div>
  `
  actualizarBadgeCarrito()
  document.getElementById('menu-toggle')?.addEventListener('click', function() {
    document.getElementById('mobile-menu')?.classList.toggle('open')
  })
  document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('mobile-menu')?.classList.remove('open')
    })
  })
}

function includeFooter() {
  document.getElementById('footer').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <span class="logo-dorado">Tricolor</span><span class="logo-azul">Gaming</span>
          </div>
          <p class="footer-desc">Tu tienda gaming de confianza en Colombia. Hardware, periféricos, juegos y más con los mejores precios y env\u00EDos a todo el pa\u00EDs.</p>
        </div>
        <div>
          <h3>Categor\u00EDas</h3>
          <ul class="footer-links">
            <li><a href="tienda.html?cat=hardware">Hardware</a></li>
            <li><a href="tienda.html?cat=perifericos">Perif\u00E9ricos</a></li>
            <li><a href="tienda.html?cat=accesorios">Accesorios</a></li>
            <li><a href="tienda.html?cat=juegos">Juegos</a></li>
            <li><a href="tienda.html?cat=gaming-gear">Gaming Gear</a></li>
            <li><a href="tienda.html?cat=tarjetas-regalo">Tarjetas de Regalo</a></li>
          </ul>
        </div>
        <div>
          <h3>Enlaces \u00FAtiles</h3>
          <ul class="footer-links">
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="credito.html">Solicitud de cr\u00E9dito</a></li>
            <li><a href="tarjeta-cliente.html">Tarjeta de cliente</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul class="footer-links">
            <li><a href="mailto:contacto@tricolorgaming.com">contacto@tricolorgaming.com</a></li>
            <li><a href="tel:+576011234567">+57 (601) 123-4567</a></li>
            <li>Santa Marta, Colombia</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 TricolorGaming. Todos los derechos reservados.</span>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="#" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="#" aria-label="Twitter">${ICONS.twitter}</a>
          <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
          <a href="#" aria-label="TikTok">${ICONS.tiktok}</a>
        </div>
      </div>
    </footer>
  `
}
