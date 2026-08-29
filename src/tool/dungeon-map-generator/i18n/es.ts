import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Elige una semilla, ajusta la cuadrícula y selecciona el estilo arquitectónico. Genera un mapa conectado para tus notas, impresión o tablero virtual.',
  seedLabel: 'Semilla del mapa',
  seedHint: 'Reutiliza la misma semilla con la misma configuración para recrear exactamente el mismo mapa.',
  randomSeed: 'Nueva semilla',
  sizeLabel: 'Tamaño de expedición',
  sizeCompact: 'Una sesión (One shot)',
  sizeSession: 'Sesión',
  sizeStronghold: 'Fortaleza',
  fineTuneGrid: 'Ajuste fino de cuadrícula y densidad',
  columnsLabel: 'Columnas',
  rowsLabel: 'Filas',
  densityLabel: 'Densidad de salas',
  densityHint: 'Una mayor densidad añade más salas y superficie transitable.',
  styleLabel: 'Arquitectura del mapa',
  dungeonStyle: 'Mazmorra',
  dungeonStyleHint: 'Salas de piedra con pasillos de ancho simple.',
  cavernStyle: 'Cueva',
  cavernStyleHint: 'Cámaras irregulares con bordes suavizados.',
  scifiStyle: 'Ciencia Ficción',
  scifiStyleHint: 'Módulos amplios con conectores de doble anchura.',
  generate: 'Dibujar este mapa',
  mapRegionLabel: 'Mapa de mazmorra generado y controles de exportación',
  connectedBadge: 'Todas las salas conectadas',
  roomsLabel: 'Salas',
  doorsLabel: 'Puertas',
  floorLabel: 'Cobertura de suelo',
  legendFloor: 'Suelo transitable',
  legendWall: 'Muro sólido',
  legendDoor: 'Puerta o escotilla',
  editHint: 'Clic derecho en una celda para editar',
  editCell: 'Editar esta celda',
  paintFloor: 'Suelo',
  paintWall: 'Muro',
  paintDoor: 'Puerta',
  mapData: 'Datos del mapa',
  copyLink: 'Copiar enlace al mapa',
  linkCopied: 'Enlace copiado',
  exportPng: 'Descargar PNG',
  exportSvg: 'Descargar SVG',
  exportPrint: 'Imprimir',
  exportJson: 'Guardar JSON',
  importJson: 'Abrir JSON',
  importError: 'Este archivo no contiene una configuración válida de mapa de mazmorra.',
  compactMap: 'Exploración tensa',
  balancedMap: 'Expedición equilibrada',
  sprawlingMap: 'Fortaleza abierta',
  compactHint: 'Pasadizos más largos dejan más espacio desconocido entre salas.',
  balancedHint: 'Salas y pasillos comparten la distribución sin aglomeraciones.',
  sprawlingHint: 'Mayor cobertura de suelo favorece los encuentros y el movimiento rápido.',
  mapReady: 'Leyenda del mapa',
  dimensionsUnit: 'celdas de cuadrícula',
};

const faq = [
  {
    question: '¿La misma semilla siempre crea el mismo mapa de mazmorra?',
    answer: 'Sí. La semilla, las dimensiones de la cuadrícula, la densidad y el estilo forman una configuración determinista. Reutilizar los cuatro parámetros vuelve a generar exactamente las mismas salas, pasillos y puertas.',
  },
  {
    question: '¿Todas las salas generadas son accesibles entre sí?',
    answer: 'Sí. Las salas se conectan mediante una ruta principal tras su colocación, garantizando que cada región transitable pertenezca a un único mapa conectado.',
  },
  {
    question: '¿Qué cambia entre los estilos mazmorra, cueva y ciencia ficción?',
    answer: 'El estilo mazmorra usa salas cuadradas de piedra y pasillos estrechos. Las cuevas crean cámaras irregulares y redondeadas. El estilo ciencia ficción utiliza módulos amplios con pasillos dobles.',
  },
  {
    question: '¿Qué formato debo exportar para un tablero virtual (VTT)?',
    answer: 'PNG es la opción más sencilla para la mayoría de tableros virtuales. SVG se mantiene nítido a cualquier escala y es fácil de editar en programas vectoriales. Ambos respetan la cuadrícula cuadrada.',
  },
  {
    question: '¿Otra persona puede regenerar mi mapa de mazmorra aleatorio?',
    answer: 'Sí. Copia el enlace del mapa para incluir la configuración completa en la URL o envía el archivo JSON. El destinatario podrá cargar el mismo mapa de forma inmediata.',
  },
  {
    question: '¿Este generador añade monstruos, trampas o tesoros?',
    answer: 'No. Crea un plano arquitectónico neutro para que puedas adaptarlo a cualquier sistema de juego. El diseño de encuentros, secretos y peligros queda a discreción del director de juego.',
  },
];

const howTo = [
  {
    name: 'Ajusta las dimensiones',
    text: 'Elige el número de columnas y filas para adaptar el mapa a tus notas, página impresa o escena de tablero virtual.',
  },
  {
    name: 'Selecciona la arquitectura',
    text: 'Elige entre mazmorra, cueva o ciencia ficción, y ajusta la densidad de salas según el tipo de exploración deseado.',
  },
  {
    name: 'Genera e inspecciona',
    text: 'Introduce una semilla o genera una aleatoria, dibuja el mapa y revisa la métrica de salas, puertas y cobertura de suelo.',
  },
  {
    name: 'Exporta o comparte',
    text: 'Descarga el mapa en PNG o SVG para jugar, o guarda la configuración mediante un enlace o archivo JSON.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generador de Mapas de Mazmorras Aleatorios',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Un generador determinista de mapas de mazmorras aleatorios con salas conectadas, pasillos, puertas y exportaciones locales.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo generar un mapa de mazmorra conectado',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'generador-mapas-mazmorras-aleatorios',
  title: 'Generador de Mapas de Mazmorras Aleatorios para Juegos de Rol',
  description: 'Crea mapas reproducibles de mazmorras, cuevas y ciencia ficción con salas conectadas, puertas y exportación PNG o SVG.',
  ui,
  seo: [
    { type: 'title', text: 'Genera un Mapa de Mazmorra Jugable mediante una Semilla Reutilizable', level: 2 },
    { type: 'paragraph', html: 'Un generador de mapas de mazmorras aleatorios necesita ir más allá del ruido visual aleatorio. Cada cámara debe ser alcanzable mediante pasillos conectados, la cuadrícula debe adaptarse a la superficie de juego y el resultado debe poder recuperarse en cualquier momento. Este generador trata la semilla y los controles como una especificación de mapa compacta y determinista. Mantener la misma semilla, filas, columnas y estilo garantiza reconstruir exactamente la misma estructura más adelante.' },
    { type: 'title', text: 'Dimensiones de Cuadrícula para Impresión y Tableros Virtuales', level: 2 },
    { type: 'paragraph', html: 'Configurar el tamaño de la cuadrícula es el primer paso práctico. Una cuadrícula pequeña es fácil de imprimir en papel y resulta ideal para aventuras cortas, mientras que un mapa amplio deja espacio para exploración compleja y múltiples facciones. La imagen exportada mantiene celdas perfectamente cuadradas para alinearse sin esfuerzo con la rejilla de cualquier software de tablero virtual (VTT).' },
    {
      type: 'table',
      headers: ['Tamaño de cuadrícula', 'Uso recomendado', 'Densidad inicial', 'Nota de planificación'],
      rows: [
        ['20 por 16 celdas', 'Aventura rápida o One shot', '35 a 45', 'Fácil de imprimir y rápida lectura visual'],
        ['36 por 26 celdas', 'Mazmorra de sesión', '45 a 55', 'Ritmo equilibrado entre salas y pasillos'],
        ['52 por 38 celdas', 'Complejo multisesión', '50 a 65', 'Espacio amplio para facciones y rutas optativas'],
      ],
    },
    { type: 'tip', title: 'Adapta el Mapa a la Escala de Encuentro', html: 'Calcula las celdas necesarias para tus combates o escenas principales antes de fijar el tamaño. Una mazmorra grande con salas minúsculas se sentirá claustrofóbica, mientras que una distribución compacta con una sala central amplia favorece escenas memorables.' },
    { type: 'title', text: 'Interpreta la Cobertura de Suelo como Ritmo de Juego', level: 2 },
    { type: 'paragraph', html: 'La Cobertura de suelo indica qué porcentaje del lienzo rectangular representa espacio transitable. Una cobertura baja acentúa el espacio desconocido y la tensión del viaje entre salas. Una cobertura media ofrece una exploración fluida y estándar. Una cobertura elevada crea complejos fortificados donde los combates y patrullas pueden extenderse entre salas contiguas.' },
    {
      type: 'list',
      items: [
        '<strong>Exploración tensa:</strong> aprovecha las zonas vacías para sugerir aislamiento o pasajes secretos.',
        '<strong>Expedición equilibrada:</strong> alterna salas de investigación con pasadizos de conexión e intercambios de combate.',
        '<strong>Fortaleza abierta:</strong> diseña líneas de visión claras, patrullas enemigas y encuentros interconectados.',
      ],
    },
    { type: 'title', text: 'Transforma un Plano Neutro en una Localización de Aventura', level: 2 },
    { type: 'paragraph', html: 'El mapa generado proporciona únicamente la arquitectura de base. Asigna una función narrativa a cada sala clave y coloca pistas, trampas, criaturas y tesoros en consecuencia. Utiliza las puertas como puntos de decisión estratégica para tus jugadores.' },
    { type: 'tip', title: 'Guarda la Configuración antes de Añadir Notas', html: 'Copia el enlace del mapa o guarda el archivo JSON antes de anotar los encuentros. De este modo tendrás una copia limpia para entregar a los jugadores sin desvelar tus notas de director de juego.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
