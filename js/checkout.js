let pedidos = []

function cargarPedidos() {
  const data = localStorage.getItem('tricolor_pedidos')
  if (data) {
    try { pedidos = JSON.parse(data) } catch { pedidos = [] }
  }
}

function guardarPedidos() {
  localStorage.setItem('tricolor_pedidos', JSON.stringify(pedidos))
}

function procesarPedido(datos) {
  if (carrito.length === 0) return null

  const pedido = {
    id: 'TRI-' + Date.now().toString(36).toUpperCase(),
    fecha: new Date().toISOString(),
    items: JSON.parse(JSON.stringify(carrito)),
    subtotal: getTotalCarrito(),
    envio: datos.tipoEnvio === 'domicilio' ? 15000 : 0,
    descuento: 0,
    total: getTotalCarrito() + (datos.tipoEnvio === 'domicilio' ? 15000 : 0),
    cliente: {
      nombres: datos.nombres,
      apellidos: datos.apellidos,
      documento: datos.documento,
      email: datos.email,
      telefono: datos.telefono,
      direccion: datos.direccion,
      ciudad: datos.ciudad,
      departamento: datos.departamento
    },
    tipoEnvio: datos.tipoEnvio,
    metodoPago: datos.metodoPago,
    estado: 'confirmado',
    notas: datos.notas || ''
  }

  if (tarjetaCliente) {
    acumularPuntos(pedido.total)
  }

  if (datos.usarPuntos && datos.puntosCanjeados > 0 && tarjetaCliente) {
    const canje = canjearPuntos(datos.puntosCanjeados)
    if (canje) {
      pedido.descuento = canje.valor
      pedido.total -= canje.valor
      pedido.puntosCanjeados = datos.puntosCanjeados
    }
  }

  carrito.forEach(item => {
    if (!item.digital) descontarStock(item.productoId, item.cantidad)
  })

  pedidos.push(pedido)
  guardarPedidos()
  limpiarCarrito()
  return pedido
}

function getPedidos() {
  return pedidos
}

function getPedido(id) {
  return pedidos.find(p => p.id === id)
}

cargarPedidos()
