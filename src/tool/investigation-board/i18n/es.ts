import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "creador-tablero-conspiracion",
  title: "Creador de Tableros de Conspiración: Mapas de Pistas y Relaciones Online",
  description: "Crea tableros de conspiración interactivos online, mapas de investigación y pizarras virtuales. Conecta sospechosos, pistas y ubicaciones con hilos de colores.",
  ui: {
  "title": "Creador de Tableros de Conspiración",
  "addCard": "Añadir Tarjeta",
  "searchPlaceholder": "Buscar tarjetas por nombre o pistas",
  "filterAll": "Todas las Categorías",
  "filterCharacter": "Personajes",
  "filterClue": "Pistas",
  "filterLocation": "Ubicaciones",
  "filterItem": "Objetos",
  "cardName": "Nombre de la Tarjeta",
  "cardCategory": "Categoría",
  "cardDescription": "Descripción",
  "cardNotes": "Notas Privadas",
  "cardTags": "Etiquetas separadas por comas",
  "cardColor": "Color de Resaltado de Tarjeta",
  "save": "Guardar Cambios",
  "delete": "Eliminar",
  "cancel": "Cancelar",
  "clearBoard": "Limpiar Tablero",
  "connectionsTitle": "Mapa de Relaciones",
  "addConnection": "Añadir Conexión",
  "connectionLabel": "Etiqueta de Relación",
  "connectionColor": "Color de la Línea",
  "sourceCard": "Desde Tarjeta",
  "targetCard": "Hacia Tarjeta",
  "close": "Cerrar",
  "character": "Personaje",
  "clue": "Pista",
  "location": "Ubicación",
  "item": "Objeto",
  "custom": "Personalizado",
  "immersive": "Pantalla Completa"
},
  seo: [
    { type: 'title', text: "Creador de Tableros de Conspiración Online para Rol de Mesa y Detectives", level: 2 },
    { type: 'paragraph', html: "Resolver una red compleja de mentiras, seguir pistas de sospechosos y conectar pruebas en la escena del crimen puede abrumar a cualquier grupo de rol. Ya sea que dirijas una campaña de La Llamada de Cthulhu, un misterio cyberpunk, una partida de detectives en D&D o estés escribiendo una novela de suspense, nuestro creador de tableros de conspiración online es la herramienta definitiva. Arrastra, suelta y clasifica pistas, personajes (PNJ) y evidencias físicas en un corcho digital infinito. Utiliza hilos de relaciones de colores personalizables para visualizar al instante cómo se conectan los sospechosos con las escenas del crimen, coartadas y motivos ocultos, eliminando las notas de papel desordenadas y manteniendo a los jugadores completamente inmersos en la investigación." },
    {
      type: 'stats',
      items: [
        { value: "Ilimitado", label: "Tablero de Nodos" },
        { value: "4", label: "Categorías" },
        { value: "Arrastrar y Soltar", label: "Interfaz" }
      ],
      columns: 3
    },
    { type: 'title', text: "Consejos para Estructurar tu Mapa de Investigación de Rol", level: 2 },
    { type: 'tip', title: "La Regla de las Tres Pistas", html: "Para cada conclusión o deducción que desees que los jugadores alcancen, añade al menos tres pistas distintas al tablero de investigación. Conéctalas con hilos de colores personalizados para mostrar diferentes líneas de razonamiento posibles. Utiliza tarjetas de Personajes para los sospechosos e intermediarios, Ubicaciones para las escenas del crimen o puntos de interés, y Objetos para las pruebas físicas o documentos. Mantén las notas privadas de las cartas siempre actualizadas con los descubrimientos de los jugadores." },
    { type: 'title', text: "Tableros de Conspiración Digitales vs Tableros de Corcho Físicos", level: 2 },
    {
      type: 'proscons',
      title: "Tableros de Conspiración Digitales vs Tableros de Corcho Físicos",
      items: [
        { pro: "Tamaño de tablero ilimitado para añadir tantas pistas y relaciones de personajes como sea necesario sin limitaciones de espacio.", con: "Requiere una pantalla, tableta o dispositivo digital durante la sesión de juego de mesa." },
        { pro: "Búsqueda instantánea y filtros de categoría para ubicar testigos o pistas específicas durante las sesiones.", con: "Falta la sensación táctil del hilo rojo físico y los pines en la pared real." },
        { pro: "Guarda, carga y comparte mapas digitalmente sin ocupar espacio físico entre sesiones.", con: "Necesita acceso a Internet o almacenamiento local para persistir el estado del tablero." }
      ]
    },
    { type: 'title', text: "Elección de Categorías de Tarjetas para tu Mapa de Misterio", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Nodos de Personajes",
          description: "Representan PNJ, sospechosos, testigos u organizaciones. Destaca relaciones con líneas de colores.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Seguimiento de coartadas y motivos de sospechosos",
            "Relaciones familiares o de facciones secretas",
            "Registro de declaraciones y testimonios de testigos"
          ]
        },
        {
          title: "Nodos de Pistas",
          description: "Representan pruebas físicas, autopsias, coartadas o rumores descubiertos por los jugadores.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Informes de autopsias y balística",
            "Evidencia física recogida en la escena del crimen",
            "Rumores, secretos y filtraciones"
          ]
        },
        {
          title: "Nodos de Ubicaciones",
          description: "Escenas del crimen, casas de sospechosos, guaridas secretas o ciudades.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Fotos y planos de la escena del crimen",
            "Residencias de personajes clave",
            "Ubicaciones ocultas y portales secretos"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Glosario de Mapeo de Conspiraciones", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Nodo de Investigación", definition: "Cualquier tarjeta en el lienzo que represente una persona, ubicación, pista u objeto." },
        { term: "Hilo de Relación", definition: "Una línea de color que une dos tarjetas, indicando cómo están conectadas (por ejemplo: Coartada, Aliado, Propietario)." },
        { term: "Modo Inmersivo", definition: "Un diseño a pantalla completa que oculta los paneles de control, maximizando el espacio de trabajo en tabletas y móviles." },
        { term: "Ruta de Resaltado", definition: "Una ruta visual que muestra solo los nodos y líneas conectados de una tarjeta seleccionada, atenuando el resto." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Consejo de Rendimiento para Dispositivos Móviles",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Si el arrastre de nodos va lento en tablets antiguas, activa el modo inmersivo para ocultar menús innecesarios. Asegúrate de habilitar el ajuste a cuadrícula (las tarjetas se alinean cada 15px) para mantener el tablero ordenado con mínimo esfuerzo."
    }
  ],
  faq: [
    { question: "¿Cómo añado líneas de conexión?", answer: "Haz clic en Añadir Conexión en el panel de control o haz clic en el icono de enlace de una tarjeta y selecciona la tarjeta de destino." },
    { question: "¿Puedo arrastrar tarjetas en el móvil?", answer: "Sí, el tablero admite eventos táctiles para arrastrar y mover tarjetas sin problemas en smartphones y tablets." },
    { question: "¿Puedo usar colores de tarjeta personalizados?", answer: "Sí. Haz doble clic en una tarjeta, selecciona Custom en Categoría y elige un color de resaltado." },
    { question: "¿El tablero guarda mi trabajo?", answer: "Sí. Tu progreso se guarda automáticamente en el almacenamiento local de tu navegador bajo el nombre del tablero actual." },
    { question: "¿Cómo hago zoom y me muevo por el tablero?", answer: "Usa gestos de pellizco o la rueda del ratón para hacer zoom. Arrastra el fondo para moverte por el lienzo." }
  ],
  bibliography,
  howTo: [
    { name: "Añadir Tarjetas de Investigación", text: "Crea tarjetas que representen PNJ, pistas, escenas del crimen u objetos." },
    { name: "Enlazar Relaciones", text: "Crea líneas de conexión entre tarjetas para mostrar cómo se relacionan las pistas." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Creador de Tableros de Conspiración: Mapas de Pistas y Relaciones Online",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "¿Cómo añado líneas de conexión?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Haz clic en Añadir Conexión en el panel de control o haz clic en el icono de enlace de una tarjeta y selecciona la tarjeta de destino."
          }
        },
        {
          '@type': 'Question',
          'name': "¿Puedo arrastrar tarjetas en el móvil?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sí, el tablero admite eventos táctiles para arrastrar y mover tarjetas sin problemas en smartphones y tablets."
          }
        },
        {
          '@type': 'Question',
          'name': "¿Puedo usar colores de tarjeta personalizados?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sí. Haz doble clic en una tarjeta, selecciona Custom en Categoría y elige un color de resaltado."
          }
        },
        {
          '@type': 'Question',
          'name': "¿El tablero guarda mi trabajo?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sí. Tu progreso se guarda automáticamente en el almacenamiento local de tu navegador bajo el nombre del tablero actual."
          }
        },
        {
          '@type': 'Question',
          'name': "¿Cómo hago zoom y me muevo por el tablero?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Usa gestos de pellizco o la rueda del ratón para hacer zoom. Arrastra el fondo para moverte por el lienzo."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Cómo Usar el Creador de Tableros de Conspiración",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Añadir Tarjetas de Investigación",
          'text': "Crea tarjetas que representen PNJ, pistas, escenas del crimen u objetos."
        },
        {
          '@type': 'HowToStep',
          'name': "Enlazar Relaciones",
          'text': "Crea líneas de conexión entre tarjetas para mostrar cómo se relacionan las pistas."
        }
      ]
    }
  ]
};
