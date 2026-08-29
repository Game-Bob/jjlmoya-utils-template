import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Traductor de Runas Fantásticas',
  inputPlaceholder: 'Escribe una palabra o nombre para traducir...',
  alphabetLabel: 'Alfabeto Rúnico',
  elderFuthark: 'Futhark Antiguo',
  angloSaxon: 'Anglosajón',
  fantasy: 'Escritura Fantástica',
  theban: 'Tebano',
  enochian: 'Enoquiano',
  daemonic: 'Demoníaco',
  ogham: 'Ogham',
  translate: 'Traducir',
  clear: 'Limpiar',
  copy: 'Copiar texto',
  copied: '¡Copiado!',
  runeName: 'Nombre',
  runeMeaning: 'Significado',
  runePhonetic: 'Fonética',
  clickHint: 'Haz clic en una runa para ver sus detalles',
  outputLabel: 'Salida rúnica',
  noInput: 'Introduce texto arriba para traducirlo a runas',
  unknownChar: '?',
  gmMode: 'Modo DJ',
  exitGmMode: 'Salir',
  gmHint: 'Muestra esto a tus jugadores',
  seedLabel: 'Semilla',
  seedPlaceholder: 'Opcional',
  seedApplied: 'Bloqueado',
  shuffleSeed: 'Mezclar',
};

const faq = [
  {
    question: '¿Qué es el Futhark Antiguo?',
    answer: 'El Futhark Antiguo es la forma más antigua de los alfabetos rúnicos, utilizado por las tribus germánicas desde el siglo II hasta el VIII. Consta de 24 runas divididas en tres grupos de ocho llamados aettir. Cada runa tiene un valor fonético y un nombre simbólico que representa conceptos naturales o mitológicos.',
  },
  {
    question: '¿Cuál es la diferencia entre el Futhark Antiguo y las runas anglosajonas?',
    answer: 'El Futhorc anglosajón es una versión extendida del Futhark Antiguo desarrollada en Inglaterra. Añade runas adicionales para representar sonidos específicos del inglés antiguo, expandiéndose de 24 a hasta 33 caracteres. Los significados y valores fonéticos también cambiaron con el tiempo.',
  },
  {
    question: '¿Este traductor convierte las palabras perfectamente?',
    answer: 'Esta herramienta proporciona una transliteración letra por letra a símbolos rúnicos. El uso histórico de las runas era fonético más que literal letra por letra, por lo que el resultado es una interpretación moderna. La opción de Escritura Fantástica ofrece un alfabeto ficticio creativo para ambientación de juegos de rol de mesa.',
  },
  {
    question: '¿Puedo usar estas runas en mis campañas de RPG de mesa?',
    answer: '¡Sí! Los directores de juego y jugadores pueden usar el traductor para crear inscripciones rúnicas, escritos mágicos, mensajes crípticos o nombres decorativos para personajes y lugares. La opción de Escritura Fantástica está diseñada específicamente para ambientaciones de fantasía.',
  },
  {
    question: '¿Esta herramienta almacena el texto que escribo?',
    answer: 'No. Todo se ejecuta localmente en tu navegador. Ningún texto, traducción o selección se envía jamás a ningún servidor. Tu trabajo creativo permanece completamente privado.',
  },
  {
    question: '¿Qué ocurre cuando hago clic en una runa?',
    answer: 'Al hacer clic en cualquier carta de runa se muestra su nombre tradicional, significado simbólico y valor fonético. Esto te ayuda a aprender las runas y elegir el símbolo adecuado para tus necesidades de juego de rol.',
  },
];

const howTo = [
  {
    name: 'Introducir texto',
    text: 'Escribe cualquier palabra, nombre o frase en inglés en el campo de entrada. El traductor funciona mejor con palabras sueltas o frases cortas.',
  },
  {
    name: 'Seleccionar un alfabeto',
    text: 'Elige entre Futhark Antiguo (germánico antiguo), Anglosajón (inglés medieval) o Escritura Fantástica (estilo de juegos de rol de mesa).',
  },
  {
    name: 'Traducir y explorar',
    text: 'Haz clic en Traducir para convertir tu texto. Cada runa aparece como una tarjeta. Haz clic en cualquier runa para conocer su nombre, significado y sonido. Usa el botón Copiar para guardar el texto rúnico en tu portapapeles.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'traductor-runas-fantasticas',
  title: 'Traductor de Runas Fantásticas / Conversor de Runas Futhark Antiguo, Tebano, Enoquiano y Demoníaco',
  description: 'Traduce texto a Futhark Antiguo, Futhorc Anglosajón, Tebano, Enoquiano, Demoníaco, Ogham o escrituras fantásticas. Perfecto para acertijos de juegos de rol de mesa, campañas, pergaminos de mago y runas místicas.',
  ui,
  seo: [
    { type: 'title', text: 'Alfabetos Rúnicos y Escrituras Místicas para la Creación de Mundos de Juegos de Rol', level: 2 },
    { type: 'paragraph', html: 'Los alfabetos rúnicos místicos, los símbolos antiguos y las escrituras secretas aportan una inmersión incomparable a los juegos de rol de mesa fantásticos como D&D, Pathfinder y Warhammer. Ya sea creando ruinas enanas ocultas grabadas con Futhark Antiguo, diseñando un grimorio arcano con escrituras angélicas enoquianas, repartiendo pistas de brujería con el alfabeto tebano o escribiendo mensajes demoníacos prohibidos, nuestro generador de runas convierte el texto inglés estándar en símbolos estilizados en tiempo real. Despierta la curiosidad de los jugadores con accesorios físicos, cifrados misteriosos y antiguos grabados en piedra.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Alfabetos Rúnicos' },
        { value: '150+', label: 'Variaciones de Símbolos' },
        { value: 'Instantánea', label: 'Translit. Visual' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Futhark Antiguo y Futhorc Anglosajón: Runas Germánicas y Nórdicas', level: 2 },
    { type: 'paragraph', html: 'Con origen en el siglo II, el Futhark Antiguo es el sistema rúnico más antiguo, compuesto por 24 caracteres que representan las fuerzas fundamentales de la naturaleza. El Futhorc anglosajón expandió este sistema para incluir hasta 33 caracteres para la fonética del inglés antiguo. Estos símbolos históricos son perfectos para representar clanes enanos, culturas inspiradas en la mitología nórdica, grabados vikingos e insignias de clanes bárbaros en tus campañas de juegos de rol.' },
    { type: 'title', text: 'Tebano y Ogham: Alfabetos de Brujería Medieval y Árboles Celtas', level: 2 },
    { type: 'paragraph', html: 'Conocida a menudo como las Runas de Honorio o el Alfabeto de las Brujas, la escritura tebana es un cifrado medieval históricamente popular utilizado en tradiciones ocultas y la Wicca. El Ogham, un alfabeto altomedieval, utiliza trazos lineales tallados a lo largo de bordes, famosamente vinculado al folclore celta y la magia arbórea druídica. Usa estas escrituras para adornar santuarios druídicos, bosques élficos, altares paganos o mensajes ocultos de aquelarres de brujas.' },
    { type: 'title', text: 'Enoquiano y Escrituras Demoníacas: Lenguajes Angélicos y Abisales', level: 2 },
    { type: 'paragraph', html: 'Registrado por primera vez por John Dee y Edward Kelley en el siglo XVI, el Enoquiano es un lenguaje construido detallado que se cree es la lengua de los ángeles. Las escrituras demoníacas representan glifos abisales, pactos oscuros y marcas infernales. Eleva las apuestas narrativas de tu campaña dejando contratos demoníacos descifrables, grabados de cultos oscuros y reliquias angélicas para que tus magos, paladines y clérigos investiguen.' },
    { type: 'title', text: 'Escritura Fantástica Personalizada: Alfabetos Creativos Listos para el Juego', level: 2 },
    { type: 'paragraph', html: 'Para mundos que van más allá de la historia real, nuestra Escritura Fantástica personalizada ofrece un conjunto ficticio de runas construidas específicamente para evocar la estética clásica de la alta fantasía. Cada runa está diseñada para destacar en impresiones de director de juego, mapas digitales y fichas de jugador personalizadas. Combínala con aleatorizaciones basadas en semillas para crear idiomas secretos únicos para diferentes facciones, naciones o dioses antiguos.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Traductor de Runas Fantásticas',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo usar el Traductor de Runas Fantásticas',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
