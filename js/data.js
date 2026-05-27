const CATEGORIAS = [
  {
    id: 'hardware', nombre: 'Hardware', icono: ICONS.hardware,
    subcategorias: [
      { id: 'procesadores', nombre: 'Procesadores' },
      { id: 'tarjetas-graficas', nombre: 'Tarjetas Gráficas' }
    ]
  },
  {
    id: 'perifericos', nombre: 'Periféricos', icono: ICONS.perifericos,
    subcategorias: [
      { id: 'teclados', nombre: 'Teclados' },
      { id: 'ratones', nombre: 'Ratones' }
    ]
  },
  {
    id: 'accesorios', nombre: 'Accesorios', icono: ICONS.accesorios,
    subcategorias: [
      { id: 'audifonos', nombre: 'Audífonos' },
      { id: 'iluminacion', nombre: 'Iluminación RGB' }
    ]
  },
  {
    id: 'juegos', nombre: 'Juegos', icono: ICONS.juegos,
    subcategorias: [
      { id: 'pc', nombre: 'PC' },
      { id: 'consolas', nombre: 'Consolas' }
    ]
  },
  {
    id: 'gaming-gear', nombre: 'Gaming Gear', icono: ICONS.gamingGear,
    subcategorias: [
      { id: 'sillas', nombre: 'Sillas Gaming' },
      { id: 'escritorios', nombre: 'Escritorios' }
    ]
  },
  {
    id: 'tarjetas-regalo', nombre: 'Tarjetas de Regalo', icono: ICONS.giftCards,
    subcategorias: [
      { id: 'steam', nombre: 'Steam' },
      { id: 'xbox', nombre: 'Xbox' }
    ]
  }
]

const MARCAS = [
  { id: 'razer', nombre: 'Razer' },
  { id: 'logitech', nombre: 'Logitech' },
  { id: 'corsair', nombre: 'Corsair' },
  { id: 'asus', nombre: 'ASUS' },
  { id: 'hyperx', nombre: 'HyperX' },
  { id: 'steelseries', nombre: 'SteelSeries' },
  { id: 'intel', nombre: 'Intel' },
  { id: 'amd', nombre: 'AMD' },
  { id: 'nvidia', nombre: 'NVIDIA' },
  { id: 'sony', nombre: 'Sony' },
  { id: 'microsoft', nombre: 'Microsoft' },
  { id: 'nintendo', nombre: 'Nintendo' },
  { id: 'ea', nombre: 'EA Sports' },
  { id: 'activision', nombre: 'Activision' },
  { id: 'bethesda', nombre: 'Bethesda' },
  { id: 'cdprojekt', nombre: 'CD Projekt' },
  { id: 'larian', nombre: 'Larian Studios' },
  { id: 'fromsoftware', nombre: 'FromSoftware' },
  { id: 'valve', nombre: 'Valve' },
  { id: 'dxracer', nombre: 'DXRacer' }
]

const TAGS = [
  { id: 'gaming', nombre: 'Gaming' },
  { id: 'hardware', nombre: 'Hardware' },
  { id: 'perifericos', nombre: 'Periféricos' },
  { id: 'juegos', nombre: 'Juegos' },
  { id: 'guias', nombre: 'Guías' },
  { id: 'reseñas', nombre: 'Reseñas' },
  { id: 'novedades', nombre: 'Novedades' },
  { id: 'ofertas', nombre: 'Ofertas' }
]

const PRODUCTOS = [
  {
    id: 1, nombre: 'Intel Core i5-14600K', slug: 'intel-core-i5-14600k',
    descripcion: 'Procesador de 14ª generación con 10 núcleos y 16 hilos. Ideal para gaming y productividad con un excelente rendimiento precio-calidad.',
    precioBase: 850000, tipo: 'simple', categoria: 'hardware', subcategoria: 'procesadores',
    marca: 'intel', estado: 'inventario', stock: 20,
    imagen: 'assets/images/Intel core i5-14600k.jfif',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: true,
    rating: 4.5, resenas: 156
  },
  {
    id: 2, nombre: 'Intel Core i7-14700K', slug: 'intel-core-i7-14700k',
    descripcion: 'Procesador de 14ª generación con 20 núcleos y 28 hilos. Rendimiento superior para gaming en 4K y edición de contenido.',
    precioBase: 1350000, tipo: 'simple', categoria: 'hardware', subcategoria: 'procesadores',
    marca: 'intel', estado: 'inventario', stock: 15,
    imagen: 'assets/images/Intel core i7-14700k.jfif',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 4, resenas: 89
  },
  {
    id: 3, nombre: 'Intel Core i9-14900K', slug: 'intel-core-i9-14900k',
    descripcion: 'El procesador más potente de Intel para consumo. 24 núcleos y 32 hilos. Diseñado para entusiastas y creadores sin compromisos.',
    precioBase: 2450000, tipo: 'simple', categoria: 'hardware', subcategoria: 'procesadores',
    marca: 'intel', estado: 'inventario', stock: 8,
    imagen: 'assets/images/Intel core i9-14900k.jfif',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 4, resenas: 67
  },
  {
    id: 4, nombre: 'AMD Ryzen 5 7600X', slug: 'amd-ryzen-5-7600x',
    descripcion: 'Procesador AMD con arquitectura Zen 4. 6 núcleos y 12 hilos. Perfecto para gaming de alto rendimiento con bajo consumo.',
    precioBase: 780000, tipo: 'simple', categoria: 'hardware', subcategoria: 'procesadores',
    marca: 'amd', estado: 'inventario', stock: 25,
    imagen: 'assets/images/Amd ryzen 5 7600x.jpg',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: true,
    rating: 4.5, resenas: 203
  },
  {
    id: 5, nombre: 'AMD Ryzen 7 7800X3D', slug: 'amd-ryzen-7-7800x3d',
    descripcion: 'Procesador gaming definitivo con tecnología 3D V-Cache. 8 núcleos y 16 hilos. El mejor para gaming del mercado.',
    precioBase: 1650000, tipo: 'simple', categoria: 'hardware', subcategoria: 'procesadores',
    marca: 'amd', estado: 'inventario', stock: 12,
    imagen: 'assets/images/Amd ryzen 7 7800x3d.jpg',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: true,
    rating: 5, resenas: 312
  },
  {
    id: 6, nombre: 'AMD Ryzen 9 7950X', slug: 'amd-ryzen-9-7950x',
    descripcion: 'Procesador tope de gama con 16 núcleos y 32 hilos. Potencia absoluta para gaming, streaming y creación de contenido.',
    precioBase: 2800000, tipo: 'simple', categoria: 'hardware', subcategoria: 'procesadores',
    marca: 'amd', estado: 'agotado', stock: 0,
    imagen: 'assets/images/Amd ryzen 9 7950x3d.jpg',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 3.5, resenas: 42
  },
  {
    id: 7, nombre: 'NVIDIA RTX 4060', slug: 'nvidia-rtx-4060',
    descripcion: 'Tarjeta gráfica ideal para gaming 1080p con Ray Tracing. Arquitectura Ada Lovelace con DLSS 3.',
    precioBase: 1450000, tipo: 'simple', categoria: 'hardware', subcategoria: 'tarjetas-graficas',
    marca: 'asus', estado: 'inventario', stock: 18,
    imagen: 'assets/images/Nvidia rtx 4060.jfif',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: true,
    rating: 5, resenas: 445
  },
  {
    id: 8, nombre: 'NVIDIA RTX 4070', slug: 'nvidia-rtx-4070',
    descripcion: 'Gráfica para gaming 1440p con excelente rendimiento. 12GB GDDR6X y soporte completo para Ray Tracing.',
    precioBase: 2250000, tipo: 'simple', categoria: 'hardware', subcategoria: 'tarjetas-graficas',
    marca: 'asus', estado: 'inventario', stock: 10,
    imagen: 'assets/images/Nvidia rtx 4070.jpg',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 4.5, resenas: 187
  },
  {
    id: 9, nombre: 'NVIDIA RTX 4080', slug: 'nvidia-rtx-4080',
    descripcion: 'Gráfica de alto rendimiento para gaming 4K. 16GB GDDR6X con núcleos RT de tercera generación.',
    precioBase: 4200000, tipo: 'simple', categoria: 'hardware', subcategoria: 'tarjetas-graficas',
    marca: 'asus', estado: 'inventario', stock: 5,
    imagen: 'assets/images/Nvidia rtx 4080.jpg',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 4, resenas: 93
  },
  {
    id: 10, nombre: 'NVIDIA RTX 4090', slug: 'nvidia-rtx-4090',
    descripcion: 'La tarjeta gráfica más potente del mundo. 24GB GDDR6X para gaming y creación sin límites.',
    precioBase: 7500000, tipo: 'simple', categoria: 'hardware', subcategoria: 'tarjetas-graficas',
    marca: 'asus', estado: 'agotado', stock: 0,
    imagen: 'assets/images/Nvidia rtx 4090.jpg',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 3.5, resenas: 128
  },
  {
    id: 11, nombre: 'AMD Radeon RX 7800 XT', slug: 'amd-radeon-rx-7800xt',
    descripcion: 'Gráfica AMD con 16GB GDDR6. Excelente rendimiento en 1440p con tecnología FSR.',
    precioBase: 2450000, tipo: 'simple', categoria: 'hardware', subcategoria: 'tarjetas-graficas',
    marca: 'asus', estado: 'inventario', stock: 7,
    imagen: 'assets/images/Rx 7800xt.jfif',
    variantes: null, tags: ['gaming', 'hardware'], digital: false, destacado: false,
    rating: 4, resenas: 76
  },
  {
    id: 12, nombre: 'Teclado Razer BlackWidow V4', slug: 'teclado-razer-blackwidow-v4',
    descripcion: 'Teclado mecánico gaming con switches intercambiables. Frame de aluminio y RGB por tecla. Incluye reposamuñecas magnético.',
    precioBase: 420000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'teclados',
    marca: 'razer', estado: 'inventario', stock: 25,
    imagen: 'assets/images/Teclado razer blackwidow v4 green.png',
    variantes: [
      { nombre: 'Switch Green (Clicky)', precio: 420000, imagen: 'assets/images/Teclado razer blackwidow v4 green.png' },
      { nombre: 'Switch Yellow (Lineal)', precio: 450000, imagen: 'assets/images/Teclado razer blackwidow v4 yellow.png' },
      { nombre: 'Switch Orange (Táctil)', precio: 440000, imagen: 'assets/images/Teclado razer blackwidow v4 orange.png' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: true,
    rating: 4.5, resenas: 234
  },
  {
    id: 13, nombre: 'Teclado Logitech G Pro X', slug: 'teclado-logitech-g-pro-x',
    descripcion: 'Teclado mecánico compacto diseñado para esports. Switches intercambiables GX y perfil ultradelgado.',
    precioBase: 380000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'teclados',
    marca: 'logitech', estado: 'inventario', stock: 20,
    imagen: 'assets/images/Teclado gogitech g pro x blue.png',
    variantes: [
      { nombre: 'Switch GX Blue (Clicky)', precio: 380000, imagen: 'assets/images/Teclado gogitech g pro x blue.png' },
      { nombre: 'Switch GX Brown (Táctil)', precio: 380000, imagen: 'assets/images/Teclado gogitech g pro x brown.png' },
      { nombre: 'Switch GX Red (Lineal)', precio: 380000, imagen: 'assets/images/Teclado gogitech g pro x red.png' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 112
  },
  {
    id: 14, nombre: 'Teclado Corsair K70 RGB', slug: 'teclado-corsair-k70-rgb',
    descripcion: 'Teclado mecánico premium con marco de aluminio anodizado. Teclas PBT y iluminación RGB dinámica.',
    precioBase: 480000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'teclados',
    marca: 'corsair', estado: 'inventario', stock: 15,
    imagen: 'assets/images/Teclado corsair k70 rgb red.png',
    variantes: [
      { nombre: 'Cherry MX Red', precio: 480000, imagen: 'assets/images/Teclado corsair k70 rgb red.png' },
      { nombre: 'Cherry MX Brown', precio: 500000, imagen: 'assets/images/Teclado corsair k70 rgb brown.png' },
      { nombre: 'Cherry MX Speed', precio: 520000, imagen: 'assets/images/Teclado corsair k70 rgb speed.png' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: true,
    rating: 4.5, resenas: 198
  },
  {
    id: 15, nombre: 'Teclado HyperX Alloy Origins', slug: 'teclado-hyperx-alloy-origins',
    descripcion: 'Teclado mecánico con cuerpo de aluminio. Switches HyperX personalizados y cable USB-C desmontable.',
    precioBase: 320000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'teclados',
    marca: 'hyperx', estado: 'inventario', stock: 30,
    imagen: 'assets/images/Teclado hyperx alloy origins aqua.png',
    variantes: [
      { nombre: 'Switch Aqua (Táctil)', precio: 320000, imagen: 'assets/images/Teclado hyperx alloy origins aqua.png' },
      { nombre: 'Switch Red (Lineal)', precio: 320000, imagen: 'assets/images/Teclado hyperx alloy origins red.png' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 84
  },
  {
    id: 16, nombre: 'Teclado SteelSeries Apex Pro', slug: 'teclado-steelseries-apex-pro',
    descripcion: 'Teclado gaming con switches magnéticos ajustables. Pantalla OLED inteligente y reposamuñecas premium.',
    precioBase: 580000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'teclados',
    marca: 'steelseries', estado: 'inventario', stock: 12,
    imagen: 'assets/images/Teclado steelseries apex pro ajustable.png',
    variantes: [
      { nombre: 'OmniPoint 2.0 (Ajustable)', precio: 580000, imagen: 'assets/images/Teclado steelseries apex pro ajustable.png' },
      { nombre: 'OmniPoint 2.0 (Ed. Especial)', precio: 620000, imagen: 'assets/images/Teclado steelseries apex pro especial.png' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: true,
    rating: 5, resenas: 267
  },
  {
    id: 17, nombre: 'Ratón Razer DeathAdder V3', slug: 'raton-razer-deathadder-v3',
    descripcion: 'Ratón gaming ultraligero con sensor Focus Pro 30K. Diseño ergonómico y switches ópticos de 3ra generación.',
    precioBase: 250000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'ratones',
    marca: 'razer', estado: 'inventario', stock: 28,
    imagen: 'assets/images/Raton razer deathadder v3.jpg',
    variantes: [
      { nombre: 'Negro Clásico', precio: 250000 },
      { nombre: 'Blanco Quartz', precio: 270000, imagen: 'assets/images/Raton razer deathadder v3 blanco.jpg' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: true,
    rating: 5, resenas: 389
  },
  {
    id: 18, nombre: 'Ratón Logitech G502 X', slug: 'raton-logitech-g502-x',
    descripcion: 'Ratón gaming con sensor HERO 25K. 11 botones programables y rueda de desplazamiento dual.',
    precioBase: 280000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'ratones',
    marca: 'logitech', estado: 'inventario', stock: 22,
    imagen: 'assets/images/Raton logitech g502 x.jpg',
    variantes: [
      { nombre: 'Negro', precio: 280000 },
      { nombre: 'Blanco', precio: 280000, imagen: 'assets/images/Raton logitech g502 x white.jpg' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4.5, resenas: 176
  },
  {
    id: 19, nombre: 'Ratón Corsair Sabre RGB', slug: 'raton-corsair-sabre-rgb',
    descripcion: 'Ratón gaming ultraligero de 79g. Sensor Marksman 26K con cable Paracord y slices PTFE.',
    precioBase: 180000, tipo: 'simple', categoria: 'perifericos', subcategoria: 'ratones',
    marca: 'corsair', estado: 'inventario', stock: 35,
    imagen: 'assets/images/Raton corsair sabre rgb.jpg',
    variantes: null,     tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 65
  },
  {
    id: 20, nombre: 'Ratón HyperX Pulsefire Haste', slug: 'raton-hyperx-pulsefire-haste',
    descripcion: 'Ratón ultraligero con diseño honeycomb. Sensor Pixart 3335 y switches TTC Gold.',
    precioBase: 160000, tipo: 'variable', categoria: 'perifericos', subcategoria: 'ratones',
    marca: 'hyperx', estado: 'inventario', stock: 40,
    imagen: 'assets/images/Raton hyperx pulsefire haste.jpg',
    variantes: [
      { nombre: 'Negro', precio: 160000 },
      { nombre: 'Blanco', precio: 170000, imagen: 'assets/images/Raton hyperx pulsefire haste blanco.jpg' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 91
  },
  {
    id: 21, nombre: 'Ratón SteelSeries Rival 5', slug: 'raton-steelseries-rival-5',
    descripcion: 'Ratón gaming con 9 botones programables. Sensor TrueMove Air y diseño ergonómico para diestros.',
    precioBase: 220000, tipo: 'simple', categoria: 'perifericos', subcategoria: 'ratones',
    marca: 'steelseries', estado: 'inventario', stock: 18,
    imagen: 'assets/images/Raton steelseries rival 5.jpg',
    variantes: null,     tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 3.5, resenas: 38
  },
  {
    id: 22, nombre: 'Audífonos Razer Kraken V3', slug: 'audifonos-razer-kraken-v3',
    descripcion: 'Audífonos gaming con audio THX Spatial. Drivers TriForce de 50mm y micrófono cardioide desmontable.',
    precioBase: 350000, tipo: 'variable', categoria: 'accesorios', subcategoria: 'audifonos',
    marca: 'razer', estado: 'inventario', stock: 20,
    imagen: 'assets/images/Audifonos razer kraken v3.jfif',
    variantes: [
      { nombre: 'Negro Clásico', precio: 350000 },
      { nombre: 'Blanco Mercury', precio: 370000, imagen: 'assets/images/Audifonos razer kraken v3 blanco.jfif' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: true,
    rating: 4.5, resenas: 212
  },
  {
    id: 23, nombre: 'Audífonos Logitech G733', slug: 'audifonos-logitech-g733',
    descripcion: 'Audífonos inalámbricos gaming con Lightspeed. Banda elástica ajustable y iluminación RGB.',
    precioBase: 450000, tipo: 'variable', categoria: 'accesorios', subcategoria: 'audifonos',
    marca: 'logitech', estado: 'inventario', stock: 14,
    imagen: 'assets/images/Audifonos logitech g733.jfif',
    variantes: [
      { nombre: 'Negro', precio: 450000 },
      { nombre: 'Blanco', precio: 450000, imagen: 'assets/images/Audifonos logitech g733 blanco.jfif' },
      { nombre: 'Azul', precio: 470000, imagen: 'assets/images/Audifonos logitech g733 azul.jfif' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 73
  },
  {
    id: 24, nombre: 'Audífonos Corsair HS80 RGB', slug: 'audifonos-corsair-hs80-rgb',
    descripcion: 'Audífonos gaming con sonido Dolby Atmos. Micrófono omnidireccional y construcción de aluminio.',
    precioBase: 380000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'audifonos',
    marca: 'corsair', estado: 'inventario', stock: 16,
    imagen: 'assets/images/Audifonos corsair hs80 rgb.jfif',
    variantes: null,     tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 3.5, resenas: 45
  },
  {
    id: 25, nombre: 'Audífonos HyperX Cloud II', slug: 'audifonos-hyperx-cloud-ii',
    descripcion: 'Audífonos gaming con sonido surround 7.1. Drivers de 53mm y almohadillas de espuma viscoelástica.',
    precioBase: 280000, tipo: 'variable', categoria: 'accesorios', subcategoria: 'audifonos',
    marca: 'hyperx', estado: 'inventario', stock: 30,
    imagen: 'assets/images/Audifonos hyperx cloud II.jfif',
    variantes: [
      { nombre: 'Negro Rojo', precio: 280000 },
      { nombre: 'Blanco Rosa', precio: 300000, imagen: 'assets/images/Audifonos hyperx cloud II rosa.jfif' },
      { nombre: 'Negro Azul', precio: 280000, imagen: 'assets/images/Audifonos hyperx cloud II azul.jfif' }
    ],
    tags: ['gaming', 'perifericos'], digital: false, destacado: true,
    rating: 4.5, resenas: 156
  },
  {
    id: 26, nombre: 'Audífonos SteelSeries Arctis Nova 1', slug: 'audifonos-steelseries-arctis-nova-1',
    descripcion: 'Audífonos gaming con audio de alta fidelidad. Sistema de micrófono ClearCast y diseño ComfortMax.',
    precioBase: 240000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'audifonos',
    marca: 'steelseries', estado: 'inventario', stock: 25,
    imagen: 'assets/images/Audifonos steelseries arctis nova 1.jfif',
    variantes: null,     tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 58
  },
  {
    id: 27, nombre: 'Tira LED RGB 2m', slug: 'tira-led-rgb-2m',
    descripcion: 'Tira LED RGB con control remoto. 16 colores y 4 modos de iluminación. Perfecta para ambientar tu setup.',
    precioBase: 45000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'iluminacion',
    marca: 'corsair', estado: 'inventario', stock: 50,
    imagen: 'assets/images/Tira led rgb 2m corsair.jpg',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3.5, resenas: 22
  },
  {
    id: 28, nombre: 'Tira LED RGB 5m', slug: 'tira-led-rgb-5m',
    descripcion: 'Tira LED RGB de 5 metros con control remoto y app. Sincronizable con música y compatible con Alexa.',
    precioBase: 85000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'iluminacion',
    marca: 'corsair', estado: 'inventario', stock: 35,
    imagen: 'assets/images/Tira led rgb 5m corsair.jpg',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 4, resenas: 67
  },
  {
    id: 29, nombre: 'Lámpara RGB Escritorio', slug: 'lampara-rgb-escritorio',
    descripcion: 'Lámpara de escritorio RGB con brazo articulado. Iluminación regulable y modos gaming predefinidos.',
    precioBase: 120000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'iluminacion',
    marca: 'razer', estado: 'inventario', stock: 20,
    imagen: 'assets/images/Lampara rgb escritorio razer.jfif',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3, resenas: 15
  },
  {
    id: 30, nombre: 'Panel LED Hexagonal 6pk', slug: 'panel-led-hexagonal-6pk',
    descripcion: 'Paneles LED hexagonales para decoración gaming. Sincronización RGB y montaje magnético.',
    precioBase: 180000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'iluminacion',
    marca: 'corsair', estado: 'inventario', stock: 15,
    imagen: 'assets/images/Panel led hexagonal 6pk corsair.png',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3.5, resenas: 31
  },
  {
    id: 31, nombre: 'Cyberpunk 2077', slug: 'cyberpunk-2077',
    descripcion: 'Juego de rol y acción en mundo abierto. Ambientado en Night City, la ciudad más violenta del futuro. Incluye expansión Phantom Liberty.',
    precioBase: 150000, tipo: 'simple', categoria: 'juegos', subcategoria: 'pc',
    marca: 'cdprojekt', estado: 'inventario', stock: null,
    imagen: 'assets/images/Cyberpunk 2077.jpg',
    variantes: null,     tags: ['juegos', 'novedades'], digital: true, destacado: true,
    rating: 5, resenas: 567
  },
  {
    id: 32, nombre: 'Call of Duty: Modern Warfare III', slug: 'call-of-duty-mw3',
    descripcion: 'La nueva entrega de Call of Duty. Campaña intensa, multijugador clásico y modo Zombies en una experiencia completa.',
    precioBase: 220000, tipo: 'simple', categoria: 'juegos', subcategoria: 'pc',
    marca: 'activision', estado: 'inventario', stock: null,
    imagen: 'assets/images/Call of duty modern warfare III.jpg',
    variantes: null,     tags: ['juegos'], digital: true, destacado: true,
    rating: 3, resenas: 89
  },
  {
    id: 33, nombre: 'Baldur\'s Gate 3', slug: 'baldurs-gate-3',
    descripcion: 'RPG galardonado ambientado en Dungeons & Dragons. Historia profunda y decisiones que afectan el mundo.',
    precioBase: 190000, tipo: 'simple', categoria: 'juegos', subcategoria: 'pc',
    marca: 'larian', estado: 'inventario', stock: null,
    imagen: 'assets/images/Baldurs gate III.jpg',
    variantes: null,     tags: ['juegos', 'reseñas'], digital: true, destacado: false,
    rating: 4.5, resenas: 423
  },
  {
    id: 34, nombre: 'Elden Ring', slug: 'elden-ring',
    descripcion: 'Acción RPG de FromSoftware. Mundo abierto con una historia épica escrita por George R.R. Martin.',
    precioBase: 200000, tipo: 'simple', categoria: 'juegos', subcategoria: 'pc',
    marca: 'fromsoftware', estado: 'inventario', stock: null,
    imagen: 'assets/images/Elden ring.jpg',
    variantes: null,     tags: ['juegos'], digital: true, destacado: true,
    rating: 5, resenas: 678
  },
  {
    id: 35, nombre: 'Starfield', slug: 'starfield',
    descripcion: 'Explora el espacio en el nuevo RPG de Bethesda. Más de 1000 planetas por descubrir y una historia galáctica.',
    precioBase: 230000, tipo: 'simple', categoria: 'juegos', subcategoria: 'pc',
    marca: 'bethesda', estado: 'inventario', stock: null,
    imagen: 'assets/images/Starfield.jpg',
    variantes: null,     tags: ['juegos', 'novedades'], digital: true, destacado: false,
    rating: 4, resenas: 156
  },
  {
    id: 36, nombre: 'FIFA 25', slug: 'fifa-25',
    descripcion: 'La última entrega de la franquicia FIFA. Nuevas mecánicas, modos de juego y equipos actualizados.',
    precioBase: 210000, tipo: 'simple', categoria: 'juegos', subcategoria: 'pc',
    marca: 'ea', estado: 'agotado', stock: null,
    imagen: 'assets/images/Fifa 25.png',
    variantes: null,     tags: ['juegos'], digital: true, destacado: false,
    rating: 3.5, resenas: 34
  },
  {
    id: 37, nombre: 'Spider-Man 2 (PS5)', slug: 'spiderman-2-ps5',
    descripcion: 'La aventura de Spider-Man para PS5. Dos Spider-Men, un nuevo villano y Nueva York más grande que nunca.',
    precioBase: 260000, tipo: 'simple', categoria: 'juegos', subcategoria: 'consolas',
    marca: 'sony', estado: 'inventario', stock: null,
    imagen: 'assets/images/Spiderman 2.jpg',
    variantes: null,     tags: ['juegos', 'novedades'], digital: true, destacado: true,
    rating: 5, resenas: 234
  },
  {
    id: 38, nombre: 'God of War Ragnarök (PS5)', slug: 'god-of-war-ragnarok-ps5',
    descripcion: 'La épica conclusión de la saga nórdica de Kratos y Atreus. Exclusivo de PlayStation.',
    precioBase: 250000, tipo: 'simple', categoria: 'juegos', subcategoria: 'consolas',
    marca: 'sony', estado: 'inventario', stock: null,
    imagen: 'assets/images/God of war ragnarok.png',
    variantes: null,     tags: ['juegos'], digital: true, destacado: false,
    rating: 3.5, resenas: 112
  },
  {
    id: 39, nombre: 'Halo Infinite (Xbox)', slug: 'halo-infinite-xbox',
    descripcion: 'La nueva aventura del Jefe Maestro. Campaña de mundo abierto y multijugador gratuito.',
    precioBase: 200000, tipo: 'simple', categoria: 'juegos', subcategoria: 'consolas',
    marca: 'microsoft', estado: 'inventario', stock: null,
    imagen: 'assets/images/Halo infinite.jpg',
    variantes: null,     tags: ['juegos'], digital: true, destacado: false,
    rating: 4.5, resenas: 145
  },
  {
    id: 40, nombre: 'Forza Motorsport (Xbox)', slug: 'forza-motorsport-xbox',
    descripcion: 'Simulación de carreras de próxima generación. Más de 500 autos y trazados realistas.',
    precioBase: 230000, tipo: 'simple', categoria: 'juegos', subcategoria: 'consolas',
    marca: 'microsoft', estado: 'inventario', stock: null,
    imagen: 'assets/images/Forza motorsport.png',
    variantes: null,     tags: ['juegos'], digital: true, destacado: false,
    rating: 4, resenas: 67
  },
  {
    id: 41, nombre: 'Zelda: Tears of the Kingdom (Switch)', slug: 'zelda-tears-kingdom-switch',
    descripcion: 'La secuela de Breath of the Wild. Nuevas habilidades, secretos y un mundo que desafía la gravedad.',
    precioBase: 280000, tipo: 'simple', categoria: 'juegos', subcategoria: 'consolas',
    marca: 'nintendo', estado: 'inventario', stock: null,
    imagen: 'assets/images/Zelda tears of the kingdom.jpg',
    variantes: null,     tags: ['juegos', 'reseñas'], digital: true, destacado: true,
    rating: 5, resenas: 345
  },
  {
    id: 42, nombre: 'Super Mario Wonder (Switch)', slug: 'super-mario-wonder-switch',
    descripcion: 'Nueva aventura 2D de Mario. Flores Maravilla, nuevas transformaciones y diversión sin límites.',
    precioBase: 250000, tipo: 'simple', categoria: 'juegos', subcategoria: 'consolas',
    marca: 'nintendo', estado: 'inventario', stock: null,
    imagen: 'assets/images/Super mario wonder.jpg',
    variantes: null,     tags: ['juegos'], digital: true, destacado: false,
    rating: 3, resenas: 78
  },
  {
    id: 43, nombre: 'Silla Gaming Razer Iskur', slug: 'silla-gaming-razer-iskur',
    descripcion: 'Silla gaming ergonómica con soporte lumbar ajustable. Tapizado de PVC premium y espuma de alta densidad.',
    precioBase: 1850000, tipo: 'variable', categoria: 'gaming-gear', subcategoria: 'sillas',
    marca: 'razer', estado: 'inventario', stock: 8,
    imagen: 'assets/images/Silla gaming razer iskur negro.jfif',
    variantes: [
      { nombre: 'Negro Clásico', precio: 1850000, imagen: 'assets/images/Silla gaming razer iskur negro.jfif' },
      { nombre: 'Negro y Verde', precio: 1950000, imagen: 'assets/images/Silla gaming razer iskur negro verde.jfif' }
    ],
    tags: ['gaming'], digital: false, destacado: true,
    rating: 5, resenas: 189
  },
  {
    id: 44, nombre: 'Silla Gaming Corsair T3 Rush', slug: 'silla-gaming-corsair-t3-rush',
    descripcion: 'Silla gaming con tejido transpirable. Reposabrazos 4D y soporte lumbar ajustable.',
    precioBase: 1600000, tipo: 'variable', categoria: 'gaming-gear', subcategoria: 'sillas',
    marca: 'corsair', estado: 'inventario', stock: 10,
    imagen: 'assets/images/Silla gaming corsair t3 rush negro.jfif',
    variantes: [
      { nombre: 'Negro Carbón', precio: 1600000, imagen: 'assets/images/Silla gaming corsair t3 rush negro.jfif' },
      { nombre: 'Negro y Amarillo', precio: 1700000, imagen: 'assets/images/Silla gaming corsair t3 rush negro y amarillo.jfif' }
    ],
    tags: ['gaming'], digital: false, destacado: false,
    rating: 4.5, resenas: 134
  },
  {
    id: 45, nombre: 'Silla Gaming DXRacer Formula', slug: 'silla-gaming-dxracer-formula',
    descripcion: 'Silla gaming clásica con diseño de carreras. Estructura de acero y reposacabezas ajustable.',
    precioBase: 1400000, tipo: 'variable', categoria: 'gaming-gear', subcategoria: 'sillas',
    marca: 'dxracer', estado: 'inventario', stock: 6,
    imagen: 'assets/images/Silla gaming dxracer formula negro.jfif',
    variantes: [
      { nombre: 'Negro', precio: 1400000, imagen: 'assets/images/Silla gaming dxracer formula negro.jfif' },
      { nombre: 'Negro y Rojo', precio: 1500000, imagen: 'assets/images/Silla gaming dxracer formula negro y rojo.jfif' },
      { nombre: 'Negro y Azul', precio: 1500000, imagen: 'assets/images/Silla gaming dxracer formula negro y azul.jfif' }
    ],
    tags: ['gaming'], digital: false, destacado: false,
    rating: 4, resenas: 87
  },
  {
    id: 46, nombre: 'Silla Gaming Cougar Armor', slug: 'silla-gaming-cougar-armor',
    descripcion: 'Silla gaming robusta con reposabrazos 4D. Cojín lumbar y cervical incluidos.',
    precioBase: 1200000, tipo: 'variable', categoria: 'gaming-gear', subcategoria: 'sillas',
    marca: 'corsair', estado: 'agotado', stock: 0,
    imagen: 'assets/images/Silla gaming cougar armor.jfif',
    variantes: [
      { nombre: 'Negro', precio: 1200000, imagen: 'assets/images/Silla gaming cougar armor.jfif' },
      { nombre: 'Negro y Naranja', precio: 1300000, imagen: 'assets/images/Silla gaming cougar armor negro y naranja.jfif' }
    ],
    tags: ['gaming'], digital: false, destacado: false,
    rating: 3.5, resenas: 23
  },
  {
    id: 47, nombre: 'Escritorio Gaming Eléctrico', slug: 'escritorio-gaming-electrico',
    descripcion: 'Escritorio ajustable en altura con motor eléctrico. Tamaño 160x75cm con gestión de cables.',
    precioBase: 1200000, tipo: 'simple', categoria: 'gaming-gear', subcategoria: 'escritorios',
    marca: 'corsair', estado: 'inventario', stock: 5,
    imagen: 'assets/images/Escritorio gamer electrico corsair.png',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 4, resenas: 45
  },
  {
    id: 48, nombre: 'Escritorio Gaming 140cm RGB', slug: 'escritorio-gaming-140cm-rgb',
    descripcion: 'Escritorio gaming de 140cm con iluminación RGB integrada. Superficie antideslizante y soporte para monitor.',
    precioBase: 650000, tipo: 'simple', categoria: 'gaming-gear', subcategoria: 'escritorios',
    marca: 'razer', estado: 'inventario', stock: 12,
    imagen: 'assets/images/Escritorio gaming 140cm rgb razer.jpg',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3, resenas: 34
  },
  {
    id: 49, nombre: 'Escritorio Gaming 120cm', slug: 'escritorio-gaming-120cm',
    descripcion: 'Escritorio gaming compacto de 120cm. Diseño moderno con pasacables y soporte para taza.',
    precioBase: 420000, tipo: 'simple', categoria: 'gaming-gear', subcategoria: 'escritorios',
    marca: 'hyperx', estado: 'inventario', stock: 18,
    imagen: 'assets/images/Escritorio gaming 120cm hyperx.jpg',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3, resenas: 28
  },
  {
    id: 50, nombre: 'Tarjeta de Regalo Steam', slug: 'tarjeta-regalo-steam',
    descripcion: 'Tarjeta de regalo digital para Steam. Canjea por juegos, DLCs y más en la plataforma de Valve.',
    precioBase: 36500, tipo: 'variable', categoria: 'tarjetas-regalo', subcategoria: 'steam',
    marca: 'valve', estado: 'inventario', stock: null,
    imagen: 'assets/images/Tarjeta regalo steam 10usd.jpg',
    variantes: [
      { nombre: '$10 USD (36,500 COP)', precio: 36500, imagen: 'assets/images/Tarjeta regalo steam 10usd.jpg' },
      { nombre: '$20 USD (73,000 COP)', precio: 73000, imagen: 'assets/images/Tarjeta regalo steam 20usd.jpg' },
      { nombre: '$50 USD (182,500 COP)', precio: 182500, imagen: 'assets/images/Tarjeta regalo steam 50usd.jpg' }
    ],
    tags: ['juegos', 'ofertas'], digital: true, destacado: true,
    rating: 5, resenas: 201
  },
  {
    id: 51, nombre: 'Tarjeta de Regalo Xbox', slug: 'tarjeta-regalo-xbox',
    descripcion: 'Tarjeta de regalo digital para Xbox. Canjea por juegos, Game Pass, y contenido en Microsoft Store.',
    precioBase: 36500, tipo: 'variable', categoria: 'tarjetas-regalo', subcategoria: 'xbox',
    marca: 'microsoft', estado: 'inventario', stock: null,
    imagen: 'assets/images/Tarjeta regalo xbox 10usd.jpg',
    variantes: [
      { nombre: '$10 USD (36,500 COP)', precio: 36500, imagen: 'assets/images/Tarjeta regalo xbox 10usd.jpg' },
      { nombre: '$25 USD (91,250 COP)', precio: 91250, imagen: 'assets/images/Tarjeta regalo xbox 25usd.jpg' },
      { nombre: '$50 USD (182,500 COP)', precio: 182500, imagen: 'assets/images/Tarjeta regalo xbox 50usd.jpg' }
    ],
    tags: ['juegos', 'ofertas'], digital: true, destacado: true,
    rating: 4.5, resenas: 167
  },
  {
    id: 52, nombre: 'Tarjeta de Regalo PlayStation', slug: 'tarjeta-regalo-playstation',
    descripcion: 'Tarjeta de regalo digital para PlayStation Network. Compra juegos, DLCs y suscripciones.',
    precioBase: 36500, tipo: 'variable', categoria: 'tarjetas-regalo', subcategoria: 'steam',
    marca: 'sony', estado: 'inventario', stock: null,
    imagen: 'assets/images/Tarjeta regalo playstation 10usd.jpg',
    variantes: [
      { nombre: '$10 USD (36,500 COP)', precio: 36500, imagen: 'assets/images/Tarjeta regalo playstation 10usd.jpg' },
      { nombre: '$25 USD (91,250 COP)', precio: 91250, imagen: 'assets/images/Tarjeta regalo playstation 25usd.jpg' },
      { nombre: '$50 USD (182,500 COP)', precio: 182500, imagen: 'assets/images/Tarjeta regalo playstation 50usd.jpg' }
    ],
    tags: ['juegos', 'ofertas'], digital: true, destacado: false,
    rating: 3, resenas: 56
  },
  {
    id: 53, nombre: 'Mousepad Razer Goliathus', slug: 'mousepad-razer-goliathus',
    descripcion: 'Mousepad gaming de superficie Speed. Base antideslizante y bordes con costuras.',
    precioBase: 85000, tipo: 'simple', categoria: 'perifericos', subcategoria: 'ratones',
    marca: 'razer', estado: 'inventario', stock: 45,
    imagen: 'assets/images/Mousepad razer goliathus.jpg',
    variantes: null,     tags: ['gaming', 'perifericos'], digital: false, destacado: false,
    rating: 4, resenas: 89
  },
  {
    id: 54, nombre: 'Soporte Monitor Articulado', slug: 'soporte-monitor-articulado',
    descripcion: 'Soporte de monitor de doble brazo. Compatible con monitores de 13 a 32 pulgadas. Gestión de cables integrada.',
    precioBase: 180000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'iluminacion',
    marca: 'hyperx', estado: 'inventario', stock: 20,
    imagen: 'assets/images/Soporte monitor articulado.jpg',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3.5, resenas: 31
  },
  {
    id: 55, nombre: 'Cable USB-C Braided 2m', slug: 'cable-usb-c-braided-2m',
    descripcion: 'Cable USB-C trenzado de 2 metros. Carga rápida y transferencia de datos. Compatible universal.',
    precioBase: 25000, tipo: 'simple', categoria: 'accesorios', subcategoria: 'iluminacion',
    marca: 'hyperx', estado: 'inventario', stock: 100,
    imagen: 'assets/images/Cable usb-c braided 2m.jfif',
    variantes: null,     tags: ['gaming'], digital: false, destacado: false,
    rating: 3, resenas: 12
  }
]

const BLOG = [
  {
    id: 1, titulo: 'Guía para armar tu PC Gaming en 2026',
    slug: 'guia-armar-pc-gaming-2026',
    resumen: 'Te guiamos paso a paso para elegir los componentes perfectos para tu primera PC gaming. Desde procesadores hasta la tarjeta gráfica.',
    contenido: `
      <p>Armar tu propia PC gaming es una experiencia emocionante y gratificante. En esta guía te mostraremos todo lo que necesitas saber para construir tu equipo ideal en 2026.</p>
      <h3>1. Elige tu procesador</h3>
      <p>El corazón de tu PC. Recomendamos el AMD Ryzen 5 7600X para gaming mainstream o el Intel Core i5-14600K si prefieres Intel. Ambos ofrecen un excelente rendimiento precio-calidad.</p>
      <h3>2. Tarjeta gráfica</h3>
      <p>La GPU es la estrella del gaming. Para 1080p, una RTX 4060 es perfecta. Para 1440p, sube a una RTX 4070. Y si quieres 4K, la RTX 4080 o 4090 son tus mejores opciones.</p>
      <h3>3. Memoria RAM</h3>
      <p>16GB es el mínimo recomendado para gaming actual. 32GB te dará margen para multitarea y juegos más exigentes.</p>
      <h3>4. Almacenamiento</h3>
      <p>Un SSD NVMe M.2 es indispensable. Busca uno de al menos 1TB para tus juegos y sistema operativo.</p>
      <h3>5. Fuente de poder</h3>
      <p>No escatimes en la fuente. Una buena fuente de 750W-850W certificada 80+ Gold te dará tranquilidad y eficiencia.</p>
      <p>Recuerda que en TricolorGaming tenemos todos los componentes que necesitas. ¡Buena suerte con tu build!</p>
    `,
    imagen: 'assets/images/Guia para armar tu pc gaming en 2026.png',
    autor: 'Team Tricolor', fecha: '2026-01-15',
    tags: ['guias', 'hardware', 'gaming']
  },
  {
    id: 2, titulo: 'Los mejores periféricos para gaming competitivo',
    slug: 'mejores-perifericos-gaming-competitivo',
    resumen: 'Descubre qué teclados, ratones y audífonos usan los pro players para llevar tu juego al siguiente nivel.',
    contenido: `
      <p>En el gaming competitivo, cada milisegundo cuenta. Tener los periféricos adecuados puede marcar la diferencia entre ganar o perder.</p>
      <h3>Teclados mecánicos para esports</h3>
      <p>Los teclados con switches lineales son los favoritos en competitivo. El Logitech G Pro X con switches GX Red ofrece una respuesta ultrarrápida. El Razer BlackWidow V4 con switches Yellow también es excelente.</p>
      <h3>Ratones ultraligeros</h3>
      <p>El peso del ratón es crucial. El Razer DeathAdder V3 pesa solo 63g y tiene el sensor Focus Pro 30K. El Logitech G502 X ofrece un equilibrio perfecto entre peso y funcionalidad.</p>
      <h3>Audífonos con sonido posicional</h3>
      <p>Escuchar los pasos del enemigo es vital. Los HyperX Cloud II con sonido surround 7.1 son legendarios. Los SteelSeries Arctis Nova 1 ofrecen un audio excepcional por su precio.</p>
      <h3>Mousepads de superficie Speed</h3>
      <p>Un buen mousepad puede mejorar tu puntería. El Razer Goliathus Speed te permite deslizar el ratón con mínima fricción.</p>
      <p>En TricolorGaming tenemos todo para que compitas al más alto nivel. ¡Equípate como un pro!</p>
    `,
    imagen: 'assets/images/Los mejores periféricos para gaming competitivo.jpg',
    autor: 'Team Tricolor', fecha: '2026-02-20',
    tags: ['reseñas', 'perifericos', 'gaming']
  },
  {
    id: 3, titulo: 'Lanzamientos de videojuegos más esperados del año',
    slug: 'lanzamientos-videojuegos-esperados-2026',
    resumen: 'Prepárate para los títulos más esperados que llegarán este año. Nuevas franquicias y regresos épicos.',
    contenido: `
      <p>El 2026 pinta como un año histórico para los videojuegos. Entre lanzamientos largamente esperados y nueva hardware, esto es lo que no te puedes perder.</p>
      <h3>El fenómeno GTA VI</h3>
      <p>El lanzamiento más anticipado de la década. Grand Theft Auto VI promete revolucionar el mundo abierto con su ambientación en Vice City y una historia digna de Hollywood. Todo apunta a que será el juego más vendido de la historia.</p>
      <h3>Nintendo Switch 2: una nueva generación</h3>
      <p>La sucesora de la exitosa Nintendo Switch llega con especificaciones mejoradas, retrocompatibilidad y títulos de lanzamiento que incluyen un nuevo Mario 3D y Metroid Prime 4. El hype está por las nubes.</p>
      <h3>Nuevas GPUs: RTX 50 Series y Radeon RX 8000</h3>
      <p>NVIDIA y AMD están listas con su nueva generación de tarjetas gráficas. Con avances en ray tracing y DLSS 4 / FSR 4, jugar en 4K a 120 FPS será la nueva norma.</p>
      <h3>Los exclusivos que vienen</h3>
      <p>Ghost of Yōtei expande el universo de Sucker Punch, Death Stranding 2 promete la locura característica de Kojima, y el nuevo God of War ya se asoma en el horizonte. PlayStation y Xbox tienen un 2026 cargado.</p>
      <h3>Grandes regresos</h3>
      <p>Assassin's Creed regresa con su entrega más ambiciosa, Doom: The Dark Age nos lleva a un pasado infernal, y el nuevo Fable promete traer de vuelta la magia de los RPG de fantasía.</p>
      <p>¿Ya apartaste tu copia? En TricolorGaming encuentras todos estos títulos en formato digital y físico al mejor precio. ¡Prepárate para el mejor año del gaming!</p>
    `,
    imagen: 'assets/images/Lanzamientos de videojuegos más esperados del año.png',
    autor: 'Team Tricolor', fecha: '2026-03-10',
    tags: ['novedades', 'juegos']
  }
]

