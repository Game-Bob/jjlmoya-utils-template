import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SettlementMapLocaleContent, SettlementMapUI } from '../entry';

const ui: SettlementMapUI = {
  intro: 'Diseña un mapa de exploración de asentamiento para tus partidas. Elige el paisaje, el tipo de poblado y el estilo arquitectónico, y ajusta celdas con clic derecho o pulsación prolongada.',
  seedLabel: 'Semilla y nombre de la aldea',
  seedHint: 'La semilla genera un patrón determinista único para la distribución de caminos y edificios.',
  randomSeed: 'Generar nuevo nombre',
  environmentLabel: 'Paisaje circundante',
  forest: 'Bosque',
  plains: 'Llanura',
  coast: 'Costa',
  river: 'Río',
  mountain: 'Montaña',
  styleLabel: 'Estilo arquitectónico',
  styleHint: 'Cambia la identidad estética: tejados, materiales, estructuras y vegetación regional.',
  styleTimber: 'Entramado',
  styleStone: 'Piedra',
  styleCoastal: 'Costero',
  styleHighland: 'Alta montaña',
  styleMedieval: 'Medieval',
  styleEdo: 'Edo',
  styleSahelian: 'Saheliano',
  sizeLabel: 'Tamaño del asentamiento',
  hamlet: 'Aldea',
  hamletHint: 'Poblado pequeño',
  village: 'Pueblo',
  villageHint: 'Base local',
  town: 'Villa',
  townHint: 'Núcleo urbano',
  homesLabel: 'Viviendas',
  homesHint: 'Ajusta la cantidad de casas respetando el tamaño y espacio disponible.',
  servicesLabel: 'Servicios e hitos',
  serviceListHint: 'Elige servicios predefinidos o añade puntos de interés personalizados.',
  newServicePlaceholder: 'Añadir servicio o lugar',
  addService: 'Añadir',
  removeService: 'Eliminar',
  serviceTavern: 'Taberna',
  serviceSmithy: 'Herrería',
  serviceTemple: 'Templo',
  serviceMarket: 'Mercado',
  serviceStable: 'Establo',
  serviceHall: 'Ayuntamiento',
  generate: 'Regenerar mapa',
  mapRegionLabel: 'Mapa de asentamiento ROL editable',
  mapSummary: 'Plano del poblado',
  buildings: 'Edificios',
  paths: 'Caminos',
  services: 'Servicios',
  terrain: 'Agua',
  legendLabel: 'Leyenda del mapa',
  legendHome: 'Casa',
  legendService: 'Servicio',
  legendPath: 'Camino',
  legendWater: 'Agua',
  legendWild: 'Bosque',
  editLabel: 'Edición directa de mapa',
  toolSelect: 'Inspeccionar',
  toolBuilding: 'Edificio',
  toolPath: 'Camino',
  toolWater: 'Agua',
  toolTree: 'Árbol',
  toolErase: 'Borrar',
  serviceSelectLabel: 'Nueva marca de servicio',
  clickHint: 'Clic derecho o pulsación prolongada para editar una celda.',
  selectedHint: 'Celda seleccionada en',
  shareLink: 'Copiar enlace',
  linkCopied: 'Enlace copiado al portapapeles',
  exportPng: 'PNG',
  exportSvg: 'SVG',
  exportJson: 'Guardar JSON',
  importJson: 'Abrir JSON',
  importError: 'El archivo no es un mapa válido.',
  mapData: 'Datos del mapa',
  readyBadge: 'Listo para explorar',
  serviceNone: 'Sin marca',
  contextMenuLabel: 'Acciones de celda',
  contextInspect: 'Inspeccionar celda',
  contextBuilding: 'Añadir edificio',
  contextPath: 'Añadir camino',
  contextWater: 'Añadir agua',
  contextTree: 'Añadir árbol',
  contextErase: 'Borrar celda',
};

const faq = [
  {
    question: '¿Qué genera este generador de mapas de asentamientos para ROL?',
    answer: 'Crea mapas cenitales interactivos y reproducibles para aldeas, pueblos y villas en juegos de rol. Genera viviendas, caminos conectados, fuentes de agua, vegetación y servicios con lógica urbanística.',
  },
  {
    question: '¿La semilla modifica realmente el diseño del mapa?',
    answer: 'Sí. La semilla genera una distribución determinista de calles, casas y servicios. Utilizar la misma semilla y configuración reconstruirá exactamente el mismo mapa.',
  },
  {
    question: '¿Qué tamaños de asentamiento están disponibles?',
    answer: 'Aldea, pueblo y villa. Cada uno amplía la escala del mapa, la densidad de caminos y la capacidad de viviendas.',
  },
  {
    question: '¿Se puede cambiar el estilo arquitectónico?',
    answer: 'Sí. Incluye estilos Medieval, Edo, Saheliano, Entramado, Piedra, Costero y Alta montaña, adaptando tejados, paredes y árboles al entorno.',
  },
  {
    question: '¿Es posible elegir el entorno natural?',
    answer: 'Sí. Puedes seleccionar bosque, llanura, costa, río o montaña para enmarcar el poblado en la geografía deseada.',
  },
  {
    question: '¿Cómo se distribuyen los servicios en el poblado?',
    answer: 'Los servicios predefinidos como taberna, herrería, templo, mercado, establo y ayuntamiento se ubican con pesos lógicos: el ayuntamiento hacia el centro y los establos o herrerías hacia los bordes.',
  },
  {
    question: '¿Puedo añadir mis propios puntos de interés?',
    answer: 'Sí. Puedes añadir lugares de interés personalizados que se guardan en el navegador y se incluyen en los enlaces compartidos y archivos JSON.',
  },
  {
    question: '¿Se puede editar el mapa celda por celda?',
    answer: 'Sí. Al hacer clic derecho o pulsación prolongada sobre cualquier celda puedes cambiar su contenido entre edificio, camino, agua, árbol o borrarla.',
  },
  {
    question: '¿Cómo reaccionan los caminos y el agua al editar?',
    answer: 'Los caminos conectan automáticamente las cruces e intersecciones adyacentes, y las celdas de agua se unen formando ríos, estanques o lagos.',
  },
  {
    question: '¿Cómo comparto un asentamiento con mis jugadores?',
    answer: 'Copia el enlace compartido o exporta el mapa en JSON. Ambos métodos conservan la configuración y todas las ediciones manuales.',
  },
  {
    question: '¿Qué formato de exportación es el más adecuado?',
    answer: 'PNG para imágenes rápidas, SVG para impresión y edición vectorial, y JSON para guardar el estado editable completo.',
  },
];

const howTo = [
  {
    name: 'Elige una semilla',
    text: 'Usa el nombre generado o escribe una semilla propia para controlar la distribución inicial del poblado.',
  },
  {
    name: 'Selecciona entorno y estilo',
    text: 'Ajusta el paisaje entre bosque, llanura, costa, río o montaña, y elige una arquitectura como Medieval, Edo o Saheliano.',
  },
  {
    name: 'Define la escala',
    text: 'Selecciona aldea, pueblo o villa y ajusta el número de viviendas deseadas.',
  },
  {
    name: 'Añade servicios e hitos',
    text: 'Activa servicios clave como taberna o herrería, o crea tus propios nombres de lugares de interés.',
  },
  {
    name: 'Edita el plano celda a celda',
    text: 'Haz clic derecho o mantén pulsado sobre el mapa para modificar caminos, agua, edificios o árboles.',
  },
  {
    name: 'Exporta y comparte',
    text: 'Obtén el enlace compartido, guarda en JSON o descarga el mapa en PNG o SVG para tus sesiones.',
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
  name: 'Generador de Mapas de Asentamientos ROL',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Generador de mapas de exploración de poblados para juegos de rol con semillas deterministas, estilos arquitectónicos y edición directa.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo crear un mapa de asentamiento para ROL',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: SettlementMapLocaleContent = {
  slug: 'generador-mapas-asentamientos-rol-exploracion',
  title: 'Generador de Mapas de Asentamientos para ROL',
  description: 'Genera mapas de exploración de aldeas, pueblos y villas para ROL con semillas deterministas, 7 estilos arquitectónicos, servicios e interacción celda a celda.',
  ui,
  seo: [
    { type: 'title', text: 'Crea Asentamientos Vivos para tus Partidas de ROL', level: 2 },
    { type: 'paragraph', html: 'Diseña poblados completos que ofrezcan a tus jugadores un lugar real que explorar, en lugar de una simple acumulación de casas sin contexto. Este generador de mapas de rol para navegador crea planos cenitales donde viviendas, caminos, plazas, fuentes de agua, vegetación y terreno abierto trabajan juntos como un espacio coherente con estructura y propósito. Utilízalo para un alto rápido en el camino, una villa llena de facciones, una aldea remota o el primer borrador de una ubicación clave en tu campaña.' },
    { type: 'title', text: 'Semillas Deterministas para Mapas Reproducibles', level: 2 },
    { type: 'paragraph', html: 'Cada poblado generado parte de una semilla basada en un nombre compuesto y memorable. La semilla no solo nombra el plano: selecciona una variante determinista de la distribución, incluyendo el ritmo de los caminos, el espacio entre viviendas, la asignación de servicios e hitos, y la densidad del bosque circundante. Cambiar la semilla genera una nueva ordenación, y reutilizar la misma combinación en el futuro reconstruye de forma exacta el mismo mapa de inicio.' },
    { type: 'list', items: ['Diferentes semillas crean patrones propios para cada tipo de asentamiento.', 'Los mapas son 100% reproducibles para tus notas de campaña o futuras partidas.', 'Mantiene la coherencia urbanística en aldeas, pueblos y villas.', 'Permite compartir semillas exactas con otros directores de juego para la preparación de campañas.'] },
    { type: 'title', text: 'Escala Adaptable de Aldea a Villa', level: 2 },
    { type: 'paragraph', html: 'La selección de tamaño no es un mero cambio cosmético. Aldeas, pueblos y villas emplean patrones de construcción, distancias, capacidades de viviendas y expectativas de servicios diferentes. Una aldea puede mantenerse por debajo de diez casas sin parecer una villa encogida, mientras que una villa dispone de espacio para rutas más largas, mayor número de destinos y una estructura central marcada. El contador de viviendas reacciona al tamaño elegido para asegurar la escala adecuada.' },
    { type: 'table', headers: ['Escala', 'Viviendas', 'Carácter', 'Uso en campaña'], rows: [['Aldea', '3 a 18', 'Pequeña, dispersa y fácil de abarcar a simple vista', 'Alto en el camino, comunidad aislada o borde del poblado'], ['Pueblo', '4 a 28', 'Centro local con varios caminos e hitos destacados', 'Base recurrente, lugar de misterio o núcleo de facción'], ['Villa', '6 a 42', 'Red amplia con múltiples servicios, rutas y desvíos', 'Centro comercial regional, lugar de investigación o poblado inicial']] },
    { type: 'title', text: 'Siete Estilos Arquitectónicos', level: 2 },
    { type: 'paragraph', html: 'Otorga una identidad visual propia al poblado antes de colocar los detalles. Los estilos Medieval, Edo, Saheliano, Entramado, Piedra, Costero y Alta montaña modifican las casas con diferentes pérfiles de tejados, tonos de pared, puertas, ventanas, texturas y detalles decorativos. La vegetación también se adapta al entorno, desde palmeras costeras hasta coníferas de montaña o copas redondeadas de inspiración oriental.' },
    { type: 'list', items: ['Medieval y Entramado para fantasía clásica, poblados fronterizos y comunidades del bosque.', 'Piedra y Alta montaña para entornos rocosos, fortificados o expuestos al clima.', 'Costero para una identidad marítima luminosa con vegetación propia de litoral.', 'Edo para una silueta histórica y regional reconocible en calles, tejados y vegetación.', 'Saheliano para comunidades de clima seco con una arquitectura y paleta propias.'] },
    { type: 'title', text: 'Ubicación Inteligente de Servicios', level: 2 },
    { type: 'paragraph', html: 'Los servicios son anclas narrativas con lógica espacial. Tabernas, herrerías, templos, mercados, establos y ayuntamientos no se asignan a ciegas a las primeras casas. Pesos algorítmicos situán los edificios cívicos hacia el centro del asentamiento, mientras que establos y herrerías tienden hacia los caminos exteriores. Puedes añadir nombres personalizados para puestos de guardia, boticarios, santuarios o gremios, apareciendo en carteles sobre los tejados para ser perfectamente legibles.' },
    { type: 'title', text: 'Integración en el Entorno Natural', level: 2 },
    { type: 'paragraph', html: 'Selecciona entornos de bosque, llanura, costa, río o montaña para integrar el poblado en su entorno geográfico. El mapa otorga al paisaje espacio para respirar, permitiendo que la vegetación silvestre y la topografía enmarquen la zona habitada en lugar de convertir el mapa en un único bloque de casas.' },
    { type: 'title', text: 'Edición Directa Celda a Celda', level: 2 },
    { type: 'paragraph', html: 'El plano generado es un excelente punto de partida, pero el editor contextual lo transforma en tu ubicación concreta. Haz clic derecho en ordenador o mantén pulsado en dispositivos táctiles para abrir el menú de acciones directamente en la celda donde estás trabajando. Inspecciona celdas, añade viviendas, dibuja caminos, pinta agua, planta árboles o borra elementos indeseados.' },
    { type: 'list', items: ['Añade casas faltantes, accesos a puentes, santuarios o puestos de guardia.', 'Modifica rutas sin necesidad de herramientas de dibujo externas.', 'Conserva todas las ediciones manuales en el mismo estado del mapa.', 'Misma interacción intuitiva en ordenadores y dispositivos táctiles.'] },
    { type: 'title', text: 'Caminos y Agua Dinámicos', level: 2 },
    { type: 'paragraph', html: 'Los caminos se generan como rutas conectadas y sus cruces se dibujan de forma limpia cuando se cruzan tres o cuatro vías. El pintado de agua reacciona al entorno: celdas adyacentes se unen formando ríos, estanques o lagos más amplios a medida que expandes el área de agua.' },
    { type: 'title', text: 'Guarda y Comparte tus Mapas', level: 2 },
    { type: 'paragraph', html: 'Genera enlaces para compartir la versión editable completa con tus jugadores o con otro director de juego. Se conserva la semilla, el tamaño, el estilo arquitectónico, la lista de servicios, los caminos, las celdas de agua y todas las modificaciones manuales realizadas. También puedes exportar el mapa completo como archivo JSON.' },
    { type: 'title', text: 'Formatos de Exportación Adaptados', level: 2 },
    { type: 'table', headers: ['Formato', 'Uso recomendado', 'Contenido conservado'], rows: [['PNG', 'Mesas virtuales y notas rápidas', 'Imagen lista del plano actual'], ['SVG', 'Impresión y diseño vectorial', 'Gráficos escalables de alta definición'], ['JSON', 'Archivo y edición futura', 'Estado editable completo del mapa']] },
    { type: 'tip', title: 'Flujo Recomendado para Sesiones', html: 'Empieza eligiendo semilla, tamaño y estilo. Añade los servicios narrativos clave y utiliza el editor contextual para dar el toque final a los caminos o edificios antes de la partida.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
