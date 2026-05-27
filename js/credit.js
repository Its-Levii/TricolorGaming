let solicitudesCredito = []

function cargarSolicitudes() {
  const data = localStorage.getItem('tricolor_creditos')
  if (data) {
    try {
      solicitudesCredito = JSON.parse(data)
    } catch { solicitudesCredito = [] }
  }
}

function guardarSolicitudes() {
  localStorage.setItem('tricolor_creditos', JSON.stringify(solicitudesCredito))
}

function simularCredito(monto, plazo) {
  const tasaAnual = 0.18
  const tasaMensual = tasaAnual / 12
  const cuotas = plazo
  const pagoMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / (Math.pow(1 + tasaMensual, cuotas) - 1)
  const totalPagar = pagoMensual * cuotas
  const interesTotal = totalPagar - monto

  return {
    monto,
    plazo,
    pagoMensual: Math.round(pagoMensual),
    totalPagar: Math.round(totalPagar),
    interesTotal: Math.round(interesTotal),
    tasaAnual: tasaAnual * 100
  }
}

function solicitarCredito(datos) {
  const simulacion = simularCredito(datos.monto, datos.plazo)
  const solicitud = {
    id: Date.now(),
    fecha: new Date().toISOString(),
    nombres: datos.nombres,
    apellidos: datos.apellidos,
    documento: datos.documento,
    email: datos.email,
    telefono: datos.telefono,
    direccion: datos.direccion,
    ingresos: datos.ingresos,
    monto: datos.monto,
    plazo: datos.plazo,
    estado: 'aprobado',
    simulacion
  }

  solicitudesCredito.push(solicitud)
  guardarSolicitudes()
  return solicitud
}

function getSolicitudesCredito() {
  return solicitudesCredito
}

cargarSolicitudes()
