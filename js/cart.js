let carrito = []

const STOCK_KEY = 'tricolor_stock'

function initStock() {
  const saved = localStorage.getItem(STOCK_KEY)
  if (!saved) {
    const stock = {}
    PRODUCTOS.forEach(p => {
      if (p.stock !== null) stock[p.id] = p.stock
    })
    localStorage.setItem(STOCK_KEY, JSON.stringify(stock))
  }
}

function getStockActual(productoId) {
  const producto = PRODUCTOS.find(p => p.id === productoId)
  if (!producto || producto.stock === null) return null
  const saved = localStorage.getItem(STOCK_KEY)
  if (saved) {
    const stock = JSON.parse(saved)
    if (stock[productoId] !== undefined) return stock[productoId]
  }
  return producto.stock
}

function descontarStock(productoId, cantidad) {
  const actual = getStockActual(productoId)
  if (actual === null) return
  const saved = JSON.parse(localStorage.getItem(STOCK_KEY) || '{}')
  saved[productoId] = Math.max(0, actual - cantidad)
  localStorage.setItem(STOCK_KEY, JSON.stringify(saved))
}

function cargarCarrito() {
  const data = localStorage.getItem('tricolor_carrito')
  if (data) {
    try {
      carrito = JSON.parse(data)
    } catch (e) {
      carrito = []
    }
  }
  actualizarBadgeCarrito()
}

function guardarCarrito() {
  localStorage.setItem('tricolor_carrito', JSON.stringify(carrito))
  actualizarBadgeCarrito()
}

function actualizarBadgeCarrito() {
  const badge = document.getElementById('cart-count')
  if (badge) {
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0)
    badge.textContent = total
    badge.style.display = total > 0 ? 'flex' : 'none'
  }
}

function agregarAlCarrito(productoId, varianteIndex, cantidad) {
  const producto = PRODUCTOS.find(p => p.id === productoId)
  if (!producto) return false

  const stockActual = getStockActual(productoId)
  if (!producto.digital && stockActual !== null && cantidad > stockActual) return false

  const existenteCarrito = carrito
    .filter(item => item.productoId === productoId)
    .reduce((sum, item) => sum + item.cantidad, 0)

  if (!producto.digital && stockActual !== null && existenteCarrito + cantidad > stockActual) {
    return false
  }

  const key = varianteIndex !== null && producto.variantes
    ? `${productoId}-${varianteIndex}`
    : `${productoId}`

  const existente = carrito.find(item => item.key === key)
  if (existente) {
    existente.cantidad += cantidad
  } else {
    const precio = varianteIndex !== null && producto.variantes
      ? producto.variantes[varianteIndex].precio
      : producto.precioBase
    const nombreVariante = varianteIndex !== null && producto.variantes
      ? producto.variantes[varianteIndex].nombre
      : null

    carrito.push({
      key,
      productoId,
      nombre: producto.nombre,
      varianteIndex,
      nombreVariante,
      precio,
      cantidad,
      imagen: (varianteIndex !== null && producto.variantes && producto.variantes[varianteIndex].imagen) || producto.imagen,
      slug: producto.slug,
      digital: producto.digital
    })
  }
  guardarCarrito()
  return true
}

initStock()

function eliminarDelCarrito(key) {
  carrito = carrito.filter(item => item.key !== key)
  guardarCarrito()
}

function actualizarCantidad(key, nuevaCantidad) {
  if (nuevaCantidad <= 0) {
    eliminarDelCarrito(key)
    return
  }
  const item = carrito.find(i => i.key === key)
  if (item) {
    item.cantidad = nuevaCantidad
    guardarCarrito()
  }
}

function limpiarCarrito() {
  carrito = []
  guardarCarrito()
}

function getTotalCarrito() {
  return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
}

function getCantidadTotalCarrito() {
  return carrito.reduce((sum, item) => sum + item.cantidad, 0)
}

cargarCarrito()
