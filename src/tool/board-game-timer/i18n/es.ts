import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Temporizador de Juegos de Mesa',
  setupTitle: 'Configuración de Partida',
  playerNamePlaceholder: 'Nombre del jugador',
  addPlayer: 'Añadir jugador',
  removePlayer: 'Eliminar',
  startGame: 'Iniciar partida',
  pauseGame: 'Pausar',
  resumeGame: 'Reanudar',
  resetGame: 'Reiniciar',
  nextTurn: 'Fin del turno',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Jugador',
  minutesLabel: 'min',
  secondsLabel: 'seg',
  expiredLabel: 'TIEMPO AGOTADO',
  overtimeLabel: 'Tiempo extra',
  turnIndicator: 'Tu turno',
  warningLowTime: 'Poco tiempo',
  pausedOverlay: 'Juego pausado',
  roundLabel: 'Ronda',
  settingsTitle: 'Ajustes',
  baseTimeLabel: 'Tiempo base',
  incrementLabel: 'Incremento/Retraso',
  warningTimeLabel: 'Umbral de advertencia',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  noPlayersHint: 'Añade al menos 2 jugadores para empezar',
  addPlayerHint: 'Introduce el nombre del jugador',
  timeUpLabel: '¡Tiempo agotado!',
  presetsTitle: 'Ajustes preestablecidos',
  timeControlTitle: 'Control de tiempo',
  modeLabel: 'Modo',
  modeNormal: 'Cuenta atrás normal',
  modeFischer: 'Fischer (Incremento)',
  modeBronstein: 'Bronstein (Retraso)',
  modeHourglass: 'Reloj de arena',
  modeTurn: 'Reinicio de turno',
  audioTitle: 'Alertas de audio',
  soundAlerts: 'Efectos de sonido',
  playersTitle: 'Jugadores',
  playersAdded: 'Jugadores añadidos',
  statsTitle: 'Estadísticas de partida',
  totalGameTime: 'Tiempo total',
  totalRounds: 'Rondas totales',
  slowestPlayer: 'Jugador más lento',
  playerPerformance: 'Análisis de tiempo de jugadores',
  playAgain: 'Nueva partida',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'temporizador-juegos-mesa-reloj',
  title: 'Temporizador de Juegos de Mesa: Reloj de Ajedrez y Control de Turnos',
  description: 'Controla los turnos y gestiona el tiempo en tus partidas con un temporizador profesional. Soporta reloj de ajedrez, multijugador, incremento Fischer, retraso Bronstein y estadísticas detalladas.',
  ui,
  seo: [
    { type: 'title', text: 'Dominando el ritmo de juego: Cómo los controles de tiempo profesionales mejoran las partidas', level: 2 },
    { type: 'paragraph', html: 'La gestión del tiempo es un componente vital en los juegos de mesa modernos. Ya sea que estés disputando una partida rápida o participando en un juego de estrategia complejo, regular el tiempo de reflexión garantiza que todos tengan una participación justa. El uso de métodos de cronometraje profesional como el incremento Fischer, el retraso Bronstein o el reloj de arena elimina el análisis por parálisis y añade una capa estratégica adicional al tablero.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Jugadores soportados' },
        { value: '5 Modos', label: 'Configuraciones de tiempo' },
        { value: '100ms', label: 'Precisión del motor' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein y Reloj de arena: Explicación de los controles de tiempo avanzados', level: 2 },
    { type: 'paragraph', html: 'Nuestro temporizador para juegos de mesa soporta múltiples opciones inspiradas en torneos competitivos, permitiendo que las sesiones fluyan sin interrupciones:' },
    {
      type: 'table',
      headers: ['Modo', 'Cómo funciona', 'Ideal para'],
      rows: [
        ['Cuenta atrás normal', 'Un temporizador estándar que descuenta tiempo y se pausa al terminar el turno.', 'Juegos casuales con una reserva de tiempo común'],
        ['Fischer (Incremento)', 'Añade una cantidad fija de segundos a tu reloj después de completar cada turno.', 'Euros estratégicos y wargames donde jugar rápido genera reserva de tiempo'],
        ['Bronstein (Retraso)', 'Proporciona un tiempo de cortesía antes de que tu temporizador principal empiece a descontar.', 'Juegos tácticos complejos donde los turnos administrativos cortos son gratuitos'],
        ['Reloj de arena', 'Tu tiempo disminuye mientras que el tiempo de tu oponente aumenta simultáneamente.', 'Duelos competitivos intensos a dos jugadores o partidas de ajedrez'],
        ['Reinicio de turno', 'Un temporizador fijo que se reinicia por completo al inicio de cada turno.', 'Juegos de fiesta rápidos, preguntas y respuestas, o rondas veloces'],
      ],
    },
    {
      type: 'tip',
      title: 'Cómo encontrar la configuración de tiempo ideal',
      html: 'Un punto de partida recomendado es asignar de 30 a 45 segundos para juegos de fiesta rápidos, 1 o 2 minutos con un retraso Bronstein de 5 segundos para eurogames medianos, y de 30 a 45 minutos con un incremento Fischer de 10 segundos para wargames pesados o campañas de estrategia.',
    },
    {
      type: 'title',
      text: 'Optimización visual: Duelo en pantalla dividida frente a botón central multijugador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para duelos cara a cara, la aplicación presenta una interfaz de reloj de ajedrez en pantalla dividida. Esta vista permite rotar las mitades de la pantalla 180 grados, facilitando la visualización desde lados opuestos de la mesa. Para partidas con 3 o más participantes, la interfaz cambia a una cuadrícula multijugador con resplandores para el jugador activo, ajustes individuales en tarjetas y un gran botón central para pasar el turno que actúa como zumbador físico compartido.',
    },
    {
      type: 'proscons',
      title: 'Comparativa de incremento Fischer frente a retraso Bronstein',
      items: [
        {
          pro: 'El incremento Fischer premia el juego rápido acumulando una reserva de tiempo para turnos futuros.',
          con: 'El tiempo total de juego puede alargarse si los jugadores realizan turnos extremadamente rápidos de forma constante.',
        },
        {
          pro: 'El retraso Bronstein evita perder tiempo en acciones administrativas cortas sin acumular reservas masivas.',
          con: 'Requiere configurar un umbral de retraso adecuado que coincida con el tiempo de gestión física del juego.',
        },
        {
          pro: 'El modo de reloj de arena crea tensión directa en duelos competitivos al transferir tu tiempo restado a tu rival.',
          con: 'Se vuelve matemáticamente complejo y menos estratégico en partidas de más de dos jugadores.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Géneros comunes de juegos de mesa que se benefician de los temporizadores de turno',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Eurogames estratégicos',
          description: 'Juegos de colocación de trabajadores y gestión de recursos donde la complejidad del turno varía. El incremento Fischer ayuda a tomar decisiones críticas en el final del juego sin retrasar las rondas iniciales.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Mitiga la parálisis por análisis',
            'Soporte para turnos de complejidad variable',
            'El tiempo se convierte en un recurso activo',
          ],
        },
        {
          title: 'Juegos de fiesta y trivia',
          description: 'Juegos dinámicos donde pensar rápido es parte de la diversión. Los temporizadores de reinicio de turno fijo mantienen la energía alta y evitan que un solo jugador detenga el flujo de la partida.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Cuentas atrás fijas y cortas',
            'Mantiene el ritmo de la fiesta',
            'Obliga a tomar decisiones inmediatas',
          ],
        },
        {
          title: 'Partidas competitivas en duelo',
          description: 'Los duelos estrictos con reloj de ajedrez requieren pantallas rotables para garantizar la integridad competitiva y un reparto de tiempo equilibrado entre los jugadores.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            'Rotación de pantalla de 180 grados',
            'Precisión de seguimiento con intervalos de 100 ms',
            'Estados de muerte súbita o tiempo extra',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Incremento Fischer',
          definition: 'Método de control de tiempo donde se suma una cantidad de segundos especificada a la reserva del jugador después de completar cada turno.',
        },
        {
          term: 'Retraso Bronstein',
          definition: 'Método de control de tiempo donde la cuenta atrás se pausa al inicio de cada turno durante un periodo determinado, evitando que se reste tiempo si se juega rápido.',
        },
        {
          term: 'Modo Reloj de Arena',
          definition: 'Sistema dinámico de cronometraje en el que el tiempo descontado del reloj de un jugador se transfiere en tiempo real al del oponente.',
        },
        {
          term: 'Parálisis por análisis',
          definition: 'Estado de sobrepensamiento en el que un jugador se siente abrumado por las opciones, ralentizando el ritmo de la partida e interfiriendo en la experiencia de los demás.',
        },
        {
          term: 'Estadísticas de juego',
          definition: 'Métricas de rendimiento al final de la partida que resumen las rondas transcurridas, la velocidad de pensamiento promedio, las duraciones máximas de turnos y las clasificaciones del ritmo de juego.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '¿Cómo funciona la interfaz del modo Duelo?',
      answer: 'Al iniciar una partida para 2 jugadores, la aplicación muestra un reloj de ajedrez en pantalla dividida. Cada sección representa a un jugador; al tocar su mitad se finaliza su turno. Las pantallas pueden rotarse 180 grados para jugadores sentados frente a frente.',
    },
    {
      question: '¿Cuál es la diferencia entre los modos Fischer y Bronstein?',
      answer: 'El modo Fischer añade segundos adicionales a la reserva del jugador tras terminar el turno, permitiendo acumular tiempo. El modo Bronstein ofrece un retraso al principio del turno; si se termina el turno durante ese tiempo, no se descuenta nada.',
    },
    {
      question: '¿La aplicación realiza un seguimiento de las estadísticas?',
      answer: '¡Sí! Al finalizar la partida o agotarse el tiempo, se muestra un desglose con la duración total, número de rondas, tiempo promedio y máximo por turno, y la clasificación de los jugadores por velocidad.',
    },
    {
      question: '¿Se guardan mis jugadores al recargar la página?',
      answer: 'Sí, la lista de jugadores y sus colores seleccionados se almacenan automáticamente en el almacenamiento local del navegador, restaurándose al volver a la página.',
    },
    {
      question: '¿Puedo añadir o quitar tiempo durante la partida?',
      answer: '¡Sí! En el modo multijugador, las tarjetas de jugador disponen de botones de acceso directo (+30s y -30s) para ajustar el tiempo disponible en tiempo real.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurar los ajustes del juego',
      text: 'Selecciona una preconfiguración (Casual, Blitz, Estratégico, Reloj de arena) o personaliza la duración base, incremento o retraso, y el umbral de advertencia.',
    },
    {
      name: 'Organizar los jugadores',
      text: 'Escribe los nombres de los jugadores y escoge un color para cada uno. Puedes reordenar el orden de turno usando las flechas; la lista se guarda automáticamente.',
    },
    {
      name: 'Iniciar y pasar turnos',
      text: 'Comienza la partida. En el modo Duelo, toca tu mitad de la pantalla para pasar el turno. En el modo Multijugador, haz clic en el gran botón central Fin de Turno.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Temporizador de Juegos de Mesa y Gestión de Turnos',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cómo funciona la interfaz del modo Duelo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Al iniciar una partida para 2 jugadores, la aplicación muestra un reloj de ajedrez en pantalla dividida. Cada sección representa a un jugador; al tocar su mitad se finaliza su turno. Las pantallas pueden rotarse 180 grados para jugadores sentados frente a frente.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Cuál es la diferencia entre los modos Fischer y Bronstein?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El modo Fischer añade segundos adicionales a la reserva del jugador tras terminar el turno, permitiendo acumular tiempo. El modo Bronstein ofrece un retraso al principio del turno; si se termina el turno durante ese tiempo, no se descuenta nada.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿La aplicación realiza un seguimiento de las estadísticas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '¡Sí! Al finalizar la partida o agotarse el tiempo, se muestra un desglose con la duración total, número de rondas, tiempo promedio y máximo por turno, y la clasificación de los jugadores por velocidad.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Se guardan mis jugadores al recargar la página?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí, la lista de jugadores y sus colores seleccionados se almacenan automáticamente en el almacenamiento local del navegador, restaurándose al volver a la página.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Puedo añadir o quitar tiempo durante la partida?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '¡Sí! En el modo multijugador, las tarjetas de jugador disponen de botones de acceso directo (+30s y -30s) para ajustar el tiempo disponible en tiempo real.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo usar el Temporizador de Juegos de Mesa',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Configurar los ajustes del juego',
          'text': 'Selecciona una preconfiguración (Casual, Blitz, Estratégico, Reloj de arena) o personaliza la duración base, incremento o retraso, y el umbral de advertencia.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Organizar los jugadores',
          'text': 'Escribe los nombres de los jugadores y escoge un color para cada uno. Puedes reordenar el orden de turno usando las flechas; la lista se guarda automáticamente.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Iniciar y pasar turnos',
          'text': 'Comienza la partida. En el modo Duelo, toca tu mitad de la pantalla para pasar el turno. En el modo Multijugador, haz clic en el gran botón central Fin de Turno.'
        }
      ]
    }
  ],
};
