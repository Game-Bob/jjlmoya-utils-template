import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Seguimiento de Puntuación',
  addPlayer: 'Añadir jugador',
  removePlayer: 'Eliminar',
  renamePlayer: 'Renombrar',
  startRound: 'Iniciar ronda 1',
  nextRound: 'Siguiente ronda',
  resetGame: 'Reiniciar partida',
  undoRound: 'Deshacer última ronda',
  playerLabel: 'Jugador',
  scoreLabel: 'Puntuación',
  roundLabel: 'Ronda',
  totalLabel: 'Total',
  rankLabel: 'Rango',
  leaderboardTitle: 'Tabla de clasificación',
  historyTitle: 'Historial de puntuación',
  noPlayersHint: 'Añade jugadores para empezar a puntuar',
  playerNamePlaceholder: 'Nombre del jugador',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  deleteRoundConfirm: '¿Eliminar la última ronda?',
  playerAdded: 'Jugador añadido',
  playerRemoved: 'Jugador eliminado',
  roundStarted: 'Ronda iniciada',
  gameReset: 'Partida reiniciada',
  noRoundsYet: 'Aún no se han registrado rondas',
  currentRoundLabel: 'Ronda actual',
  scoringTitle: 'Puntuación de ronda',
  resetAllLabel: 'Restablecer todo',
  confirmResetAll: 'Esto eliminará todos los jugadores y puntuaciones. ¿Estás seguro?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'contador-de-puntuacion',
  title: 'Contador de Puntuación: Anotador Multijugador y Gestor de Clasificación',
  description: 'Calcula las puntuaciones de cualquier juego de mesa. Añade jugadores, registra puntos ronda a ronda y mira la clasificación actualizarse en tiempo real.',
  ui,
  seo: [
    { type: 'title', text: 'Cómo Llevar la Puntuación en Juegos de Mesa Sin Errores', level: 2 },
    { type: 'paragraph', html: 'Llevar la puntuación en juegos de mesa parece fácil hasta que llevas cinco rondas y alguien se da cuenta de que ha sumado mal. Ya sea que juegues al Catán, al Dixit o a cualquier juego de puntos de victoria, un calculador de puntuaciones elimina los errores aritméticos, muestra la clasificación en vivo y mantiene un historial completo de cada ronda para que puedas verificar el total final.' },
    {
      type: 'stats',
      items: [
        { value: 'Ilimitados', label: 'Jugadores Soportados' },
        { value: 'Tiempo Real', label: 'Actualización de Clasificación' },
        { value: 'Ilimitadas', label: 'Rondas Registradas' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Errores Comunes al Puntuar y Cómo Evitarlos', level: 2 },
    { type: 'paragraph', html: 'El error más frecuente es olvidar sumar bonificaciones de final de ronda o equivocarse al acumular números. Cuando usas un marcador digital, el total se actualiza automáticamente tras cada entrada. Esto permite detectar un fallo en el momento en que la cifra parece extraña, en lugar de descubrirlo al final de la partida cuando nadie recuerda el valor correcto. El historial de rondas te permite revisar cualquier ronda anterior y corregir errores sin reiniciar toda la partida.' },
    {
      type: 'tip',
      title: 'Consejos para una Buena Llevanza de Puntuaciones',
      html: 'Introduce las puntuaciones justo después de cada ronda, mientras todos recuerdan los resultados. Usa nombres descriptivos como colores o nombres de facción en lugar de nombres reales para juegos con roles ocultos. Cuando juegues con niños, deja que ellos pulsen los botones para que se sientan parte del proceso.',
    },
    {
      type: 'title',
      text: 'Puntuación por Rondas vs Solo Total Final',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Puntuación por Rondas vs Solo Total Final',
      items: [
        {
          pro: 'Puedes ver quién iba liderando en cada fase y cómo cambió la dinámica de la partida.',
          con: 'Requiere introducir datos tras cada ronda en lugar de una sola vez al final.',
        },
        {
          pro: 'Los errores son fáciles de localizar porque puedes cotejar cada ronda con lo que recuerdas.',
          con: 'Requiere un poco más de tiempo durante la sesión de juego.',
        },
        {
          pro: 'Los jugadores pueden verificar sus propias puntuaciones, reduciendo disputas y generando confianza.',
          con: 'Funciona mejor si una persona gestiona el dispositivo o si los jugadores se turnan.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Juegos con Sistemas de Puntuación Inusuales',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Juegos de Puntos de Victoria',
          description: 'La mayoría de los eurogames usan puntos que se otorgan durante toda la partida. El reto es hacer un seguimiento de múltiples fuentes de PV: recursos, logros, bonificaciones finales. Un anotador digital te permite introducir los puntos conforme llegan y ver el total acumulado.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Seguimiento de múltiples categorías',
            'Cálculo de bonificaciones finales',
            'Resolución instantánea de desempates',
          ],
        },
        {
          title: 'Juegos con Puntuacion Negativa',
          description: 'Algunos juegos penalizan a los jugadores con puntos negativos. Un anotador digital maneja los valores negativos de forma natural, coloreándolos en rojo para que la penalización sea visible al instante. Muy útil en juegos de bazas o de deducción con mecánicas de castigo.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Gestión automática de negativos',
            'Indicadores visuales de penalización',
            'Totales acumulados precisos',
          ],
        },
        {
          title: 'Juegos de Campana',
          description: 'Los juegos legacy y de campaña arrastran puntuaciones entre sesiones. Sin un anotador digital, necesitas guardar notas en papel entre noches de juego. Una herramienta digital mantiene las puntuaciones organizadas y te permite repasar cómo afectaron tus decisiones a la clasificación general.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Seguimiento persistente de campaña',
            'Comparación entre sesiones',
            'Desglose sesión a sesión',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glosario de Puntuación',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Puntos de Victoria (PV)',
          definition: 'La unidad de puntuación estándar en la mayoría de juegos de mesa modernos. Los jugadores consiguen PV mediante acciones, y quien tenga más PV al final gana.',
        },
        {
          term: 'Puntuación por Rondas',
          definition: 'Registrar las puntuaciones al final de cada ronda en lugar de solo al final de la partida. Crea un historial detallado y facilita la detección de errores.',
        },
        {
          term: 'Clasificación',
          definition: 'Un ranking en vivo que muestra la posición de cada jugador según su puntuación total. La clasificación se reordena automáticamente al introducir nuevas puntuaciones.',
        },
        {
          term: 'Puntuación Negativa',
          definition: 'Un sistema donde los jugadores pueden perder puntos mediante penalizaciones, resultando en totales negativos. Un anotador digital gestiona esto sin errores de resta manual.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cómo Resolver Disputas de Puntuación',
      icon: 'mdi:information-outline',
      badge: 'TRUCO DE JUEGO',
      html: 'Cuando un jugador cuestione una puntuación, no la cambies inmediatamente. Revisa primero el historial de rondas para confirmar lo que se introdujo. Si la entrada es errónea, usa los botones +/- para corregirla y el total se actualiza solo. Si la entrada es correcta pero el jugador discrepa, el historial proporciona un registro objetivo que todos pueden revisar juntos.',
    },
  ],
  faq: [
    {
      question: '¿A cuántos jugadores puedo hacer seguimiento?',
      answer: 'No hay límite. Añade tantos jugadores como soporte tu juego y renómbralos cuando quieras durante la sesión.',
    },
    {
      question: '¿Puedo deshacer un error?',
      answer: 'Sí. Usa el botón Deshacer Última Ronda para eliminar la ronda más reciente y los totales y clasificaciones se recalcularán automáticamente.',
    },
    {
      question: '¿El anotador guarda mis datos?',
      answer: 'El anotador funciona completamente en tu navegador. Los datos persisten durante la sesión actual. Si recargas la página, todas las puntuaciones se reiniciarán.',
    },
    {
      question: '¿Cómo funciona la clasificación?',
      answer: 'La clasificación ordena a los jugadores por puntuación total descendente. Los puestos se actualizan automáticamente según introduces o modificas puntuaciones.',
    },
    {
      question: '¿Puedo anotar puntuaciones negativas?',
      answer: 'Sí. Los botones +/- permiten ajustes tanto positivos como negativos, haciéndolo apto para juegos con puntos de penalización o mecánicas de deducción.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Añadir Jugadores',
      text: 'Introduce los nombres de los jugadores usando el campo Añadir Jugador. Puedes añadir o eliminar jugadores en cualquier momento.',
    },
    {
      name: 'Empezar a Puntuar',
      text: 'Pulsa Empezar Ronda para iniciar una nueva ronda de puntuación. Usa los botones +/- para ajustar la puntuación de cada jugador.',
    },
    {
      name: 'Ver Clasificaciones',
      text: 'La clasificación se actualiza automáticamente. Navega a la pestaña Historial para revisar rondas anteriores.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Contador de Puntuación',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿A cuántos jugadores puedo hacer seguimiento?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'No hay límite. Añade tantos jugadores como soporte tu juego.' },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo deshacer un error?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Usa el botón Deshacer Última Ronda para eliminar la ronda más reciente.' },
        },
        {
          '@type': 'Question',
          'name': '¿El anotador guarda mis datos?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El anotador funciona en tu navegador. Los datos persisten durante la sesión.' },
        },
        {
          '@type': 'Question',
          'name': '¿Cómo funciona la clasificación?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ordena por puntuación total descendente y se actualiza automáticamente.' },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo anotar puntuaciones negativas?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Los botones +/- permiten ajustes positivos y negativos.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo Usar el Contador de Puntuación',
      'step': [
        { '@type': 'HowToStep', 'name': 'Añadir Jugadores', 'text': 'Introduce nombres usando el campo Añadir Jugador.' },
        { '@type': 'HowToStep', 'name': 'Empezar a Puntuar', 'text': 'Pulsa Empezar Ronda y usa los botones +/-.' },
        { '@type': 'HowToStep', 'name': 'Ver Clasificaciones', 'text': 'La clasificación se actualiza automáticamente.' },
      ],
    },
  ],
};
