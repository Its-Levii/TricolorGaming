let tarjetaCliente = null

function cargarTarjeta() {
  const data = localStorage.getItem('tricolor_tarjeta')
  if (data) {
    try {
      tarjetaCliente = JSON.parse(data)
    } catch { tarjetaCliente = null }
  }
}

function guardarTarjeta() {
  localStorage.setItem('tricolor_tarjeta', JSON.stringify(tarjetaCliente))
}

function registrarTarjeta(datos) {
  tarjetaCliente = {
    id: Date.now(),
    fechaRegistro: new Date().toISOString(),
    nombres: datos.nombres,
    apellidos: datos.apellidos,
    documento: datos.documento,
    email: datos.email,
    telefono: datos.telefono,
    fechaNacimiento: datos.fechaNacimiento,
    puntos: Math.floor(Math.random() * 500) + 100,
    puntosGastados: 0,
    transacciones: []
  }
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
  localStorage.removeItem('tricolor_tarjeta')
}

cargarTarjeta()
