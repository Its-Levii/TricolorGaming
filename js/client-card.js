let tarjetaCliente = null
let todosClientes = []

function cargarTodosClientes() {
  const data = localStorage.getItem('tricolor_todos_clientes')
  if (data) {
    try { todosClientes = JSON.parse(data) } catch { todosClientes = [] }
  }
}

function guardarTodosClientes() {
  localStorage.setItem('tricolor_todos_clientes', JSON.stringify(todosClientes))
}

function cargarTarjeta() {
  const data = localStorage.getItem('tricolor_tarjeta_activa')
  if (data) {
    try {
      tarjetaCliente = JSON.parse(data)
    } catch { tarjetaCliente = null }
  }
}

function guardarTarjeta() {
  localStorage.setItem('tricolor_tarjeta_activa', JSON.stringify(tarjetaCliente))
  if (tarjetaCliente) {
    const idx = todosClientes.findIndex(c => c.documento === tarjetaCliente.documento)
    if (idx >= 0) {
      todosClientes[idx] = tarjetaCliente
    }
    guardarTodosClientes()
  }
}

function registrarTarjeta(datos) {
  const existente = todosClientes.find(c => c.documento === datos.documento)
  if (existente) return null

  tarjetaCliente = {
    id: Date.now(),
    fechaRegistro: new Date().toISOString(),
    nombres: datos.nombres,
    apellidos: datos.apellidos,
    documento: datos.documento,
    email: datos.email,
    telefono: datos.telefono,
    fechaNacimiento: datos.fechaNacimiento,
    puntos: 0,
    puntosGastados: 0,
    transacciones: []
  }
  todosClientes.push(tarjetaCliente)
  guardarTarjeta()
  return tarjetaCliente
}

function iniciarSesionTarjeta(documento) {
  const cliente = todosClientes.find(c => c.documento === documento)
  if (!cliente) return null
  tarjetaCliente = cliente
  guardarTarjeta()
  return tarjetaCliente
}

function acumularPuntos(valorCompra) {
  if (!tarjetaCliente) return null
  const puntos = Math.floor(valorCompra / 1000)
  tarjetaCliente.puntos += puntos
  tarjetaCliente.transacciones.push({
    fecha: new Date().toISOString(),
    tipo: 'acumulacion',
    valor: valorCompra,
    puntos
  })
  guardarTarjeta()
  return puntos
}

function canjearPuntos(puntosACanjear) {
  if (!tarjetaCliente) return null
  if (puntosACanjear > tarjetaCliente.puntos) return null
  const valor = puntosACanjear * 50
  tarjetaCliente.puntos -= puntosACanjear
  tarjetaCliente.puntosGastados += puntosACanjear
  tarjetaCliente.transacciones.push({
    fecha: new Date().toISOString(),
    tipo: 'canje',
    puntos: puntosACanjear,
    valor
  })
  guardarTarjeta()
  return { valor, puntosRestantes: tarjetaCliente.puntos }
}

function getTarjetaCliente() {
  return tarjetaCliente
}

function cerrarSesionTarjeta() {
  tarjetaCliente = null
  localStorage.removeItem('tricolor_tarjeta_activa')
}

cargarTodosClientes()
cargarTarjeta()
