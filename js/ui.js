function formatoPrecio(precio) {
  return '$' + Math.round(precio).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' COP'
}

function formatearFecha(fechaStr) {
  const d = new Date(fechaStr)
  return d.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

function renderProductCard(p) {
  const badge = p.digital ? '<span class="badge-digital">Digital</span>' : ''
  const varBadge = p.tipo === 'variable' ? '<span class="badge-variable">Variable</span>' : ''
  const marca = MARCAS.find(m => m.id === p.marca)

  const stockActual = typeof getStockActual === 'function' ? getStockActual(p.id) : p.stock
  const disponible = p.digital || (stockActual !== null && stockActual > 0)
  let stockClass
  if (!disponible) {
    stockClass = 'out-of-stock'
  } else if (!p.digital && stockActual !== null && stockActual <= 5) {
    stockClass = 'low-stock'
  } else {
    stockClass = 'in-stock'
  }

  let stockText
  if (p.digital) {
    stockText = 'Disponible'
  } else if (stockActual === 0) {
    stockText = 'Agotado'
  } else if (stockActual <= 5) {
    stockText = `Últimas ${stockActual}`
  } else if (stockActual !== null) {
    stockText = `${stockActual} en inventario`
  } else {
    stockText = 'Disponible'
  }

  return `
    <a href="producto.html?slug=${p.slug}" class="product-card">
      <div class="product-card-img">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        <div class="product-card-badges">${badge}${varBadge}</div>
        ${p.destacado ? '<span class="badge-destacado">Destacado</span>' : ''}
      </div>
      <div class="product-card-body">
        <span class="product-card-brand">${marca ? marca.nombre : p.marca}</span>
        <h3 class="product-card-title">${p.nombre}</h3>
        <div class="product-card-price">${formatoPrecio(p.precioBase)}</div>
        <div class="product-card-footer">
          <span class="product-card-stock ${stockClass}">${stockText}</span>
        </div>
      </div>
    </a>
  `
}

function renderTag(tagId) {
  const tag = TAGS.find(t => t.id === tagId)
  if (!tag) return ''
  return `<span class="tag">${tag.nombre}</span>`
}

function renderStars(rating) {
  let stars = ''
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating
      ? '<span class="star full">' + ICONS.starFull + '</span>'
      : '<span class="star empty">' + ICONS.starEmpty + '</span>'
  }
  return stars
}

function getParam(name) {
  const params = new URLSearchParams(window.location.search)
  return params.get(name)
}

function goTo(url) {
  window.location.href = url
}
