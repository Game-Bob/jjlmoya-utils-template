import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Elige un marco',
  frameHint: 'Selecciona la silueta que indica a la mesa quién es este personaje antes de leer su nombre.',
  randomFrame: 'Marco aleatorio',
  surfaceLegend: 'Pinta la ficha',
  backgroundLabel: 'Fondo',
  borderLabel: 'Marco',
  textLabel: 'Texto',
  overlayLabel: 'Tinte',
  randomColors: 'Colores aleatorios',
  borderWidthLabel: 'Grosor de marco',
  opacityLabel: 'Opacidad de marco',
  overlayOpacityLabel: 'Tinte de retrato',
  stageLabel: 'Forja de fichas en vivo',
  chooseImage: 'Elegir retrato',
  positionHint: 'Arrastra el retrato o las etiquetas directamente sobre la ficha.',
  markerName: 'Nombre del marcador',
  markerNamePlaceholder: 'Nombra este marcador',
  textLegend: 'Añade detalles legibles para la mesa',
  textHint: 'Usa etiquetas cortas como nombre, nivel, rol o estado. Arrastra cada una sobre la ficha.',
  textPlaceholder: 'Nombre de personaje o rol',
  addText: 'Añadir etiqueta',
  removeText: 'Quitar etiqueta',
  textSizeLabel: 'Tamaño de letra',
  alignmentLabel: 'Alineación de etiqueta',
  alignLeft: 'Alinear etiqueta a la izquierda',
  alignCenter: 'Centrar etiqueta',
  alignRight: 'Alinear etiqueta a la derecha',
  imageLegend: 'Ajusta el retrato',
  imageZoomLabel: 'Zoom de retrato',
  scaleLabel: 'Escala de exportación',
  savedMarkers: 'Marcadores guardados',
  noSavedMarkers: 'Los marcadores guardados aparecerán aquí para reabrir, editar y reutilizar en otra escena.',
  reuseMarker: 'Selecciona un marcador para reabrirlo en la forja.',
  deleteMarker: 'Eliminar marcador',
  newMarker: 'Nuevo marcador',
  download: 'Descargar PNG',
  copy: 'Copiar PNG',
  downloadBatch: 'Descargar lote',
  batchLabel: 'Exportación avanzada en lote',
  batchHint: 'Opcional: exporta varios retratos con el marco y colores actuales.',
  chooseBatch: 'Elegir retratos',
  batchReady: '{count} retratos listos para forjar.',
  noImage: 'Ningún retrato cargado',
  noText: 'Sin etiquetas todavía. Añade la información que tu grupo necesite.',
  tokenDetails: 'Controles de ficha de personaje',
  exportHint: 'El PNG es transparente fuera de la silueta elegida, listo para tablero virtual o hoja impresa.',
};

const faq = [
  {
    question: '¿Qué hace que un retrato para ficha de personaje sea bueno?',
    answer: 'Elige una ilustración con un rostro claro o una silueta fuerte y suficiente contraste respecto al marco. Un recorte de cabeza y hombros se mantiene legible cuando la ficha es pequeña en el tablero virtual.',
  },
  {
    question: '¿Cómo me aseguro de posicionar bien el retrato dentro del marco?',
    answer: 'Carga la imagen y arrastra directamente sobre la ficha para encuadrar la cara. Usa el zoom de retrato para acercar el rostro sin cambiar la forma del marco ni las etiquetas.',
  },
  {
    question: '¿Puedo añadir el nombre y nivel del personaje?',
    answer: 'Sí. Añade las etiquetas cortas que necesites, selecciona cada una en el inspector para cambiar su tamaño o alineación y arrástrala a una posición legible sobre la ficha.',
  },
  {
    question: '¿El PNG conserva la transparencia fuera de la ficha?',
    answer: 'Sí. La imagen exportada mantiene transparente todo el exterior de la silueta seleccionada, lo que facilita colocar el marcador sobre cualquier mapa o imprimirlo en una hoja.',
  },
  {
    question: '¿Puedo crear las fichas de todo un grupo de golpe?',
    answer: 'Sí. Carga varios retratos en la exportación en lote, mantén el marco y los colores elegidos y descarga un PNG transparente por cada retrato conservando su nombre original.',
  },
  {
    question: '¿Dónde se almacenan mis marcadores guardados?',
    answer: 'El guardado en este dispositivo conserva el marcador activo en el almacenamiento local del navegador. Nunca sube tus fotos a ningún servidor, pero borrar los datos de navegación o cambiar de dispositivo eliminará la copia local.',
  },
];

const howTo = [
  { name: 'Elige la silueta del personaje', text: 'Comienza seleccionando el marco acorde a la naturaleza del personaje: circular para un héroe clásico, hexagonal para combate táctico, estrella para un campeón o nube para una criatura feérica o espiritual.' },
  { name: 'Carga y encuadra el retrato', text: 'Selecciona una imagen o arrástrala sobre la ficha en vivo. Muévela hasta que el rostro quede centrado en la silueta y ajusta el zoom de retrato.' },
  { name: 'Añade la información necesaria para la mesa', text: 'Incluye un nombre corto, rol, nivel o condición. Mantén las etiquetas breves, ajusta un tamaño legible y arrástralas sin tapar los detalles clave de la ilustración.' },
  { name: 'Reutiliza y exporta para tu partida', text: 'Tu marcador se guarda automáticamente mientras trabajas. Reábrelo desde los marcadores guardados o descarga un PNG transparente para tu tablero virtual o lámina impresa.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'Crea fichas de personaje legibles para mapas de RPG de mesa con siluetas personalizadas, retratos, etiquetas, transparencia y exportación PNG en lote.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo hacer una ficha de personaje para RPG de mesa',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'creador-fichas-personaje-tokens-rpg',
  title: 'Creador de Tokens y Fichas de Personaje para RPG de Mesa',
  description: 'Crea marcadores y fichas de personaje legibles a partir de retratos con marcos expresivos, recortes arrastrabiles, etiquetas, transparencia y exportación PNG en lote.',
  ui,
  seo: [
    { type: 'title', text: 'Crea fichas de personaje legibles a cualquier escala en el mapa', level: 2 },
    { type: 'paragraph', html: 'Una ficha o token es un elemento de comunicación en la mesa. Su silueta comunica al grupo si se trata de un héroe, un monstruo, un efecto de hechizo o una localización destacada antes de acercar la cámara. Elige el marco adecuado para el personaje y mantén el retrato y las letras claros al tamaño real de tu tablero virtual.' },
    { type: 'title', text: 'Elige el marco adecuado para la silueta del personaje', level: 2 },
    { type: 'list', items: ['<strong>Círculo o anillo:</strong> ideal para personajes jugadores y aliados recurrentes.', '<strong>Hexágono u octógono:</strong> fácil de diferenciar en escenas tácticas con muchas unidades.', '<strong>Estrella:</strong> perfecto para un campeón, jefe de zona o personaje que requiere atención inmediata.', '<strong>Nube:</strong> una señal suave para espíritus, familiares y criaturas feéricas.'] },
    { type: 'tip', title: 'Diseña pensando en el tamaño mínimo al que jugarás', html: 'Aleja el mapa hasta que la ficha tenga solo unas decenas de píxeles de ancho. Si el rostro, el borde y el texto se distinguen con claridad, el marcador funcionará perfectamente en combates concurridos.' },
    { type: 'title', text: 'Mantén las etiquetas cortas y útiles durante la partida', level: 2 },
    { type: 'paragraph', html: 'Una ficha de combate no es una hoja de personaje completa. Añade únicamente uno o dos datos que la mesa consulta constantemente: un nombre corto, el nivel, la función principal o una condición como aturdido. Las frases largas generan ruido visual y compiten con la ilustración.' },
    { type: 'title', text: 'Prepara a todo un grupo de aventureros sin perder su identidad', level: 2 },
    { type: 'paragraph', html: 'La exportación en lote es excelente tras una sesión cero o al incorporar aliados a la campaña. Selecciona una silueta y esquema de color común para el grupo y deja que cada retrato conserve su personalidad. El encuadre uniforme da cohesión al grupo mientras cada rostro se identifica al instante.' },
    { type: 'tip', title: 'Tu marcador se guarda mientras trabajas', html: 'El guardado local conserva el encuadre del retrato y las etiquetas en este dispositivo. Los PNG exportados son para jugar; el marcador guardado es la versión que puedes editar cuando el personaje evolucione.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
