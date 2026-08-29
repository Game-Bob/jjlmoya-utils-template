import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Selector de Jugador Inicial',
  instructions: 'Coloca tus dedos en la pantalla o haz clic para añadir pines',
  tapToSelect: 'Toca para seleccionar',
  winner: '¡Ganador elegido!',
  reset: 'Reiniciar',
  start: 'Iniciar selección',
  setupTitle: 'Configuración del selector',
  clearPlayers: 'Borrar todos los pines',
  fingerMode: 'Modo táctil',
  wheelMode: 'Modo ruleta',
  presetsTitle: 'Opciones',
  soundOn: 'Sonido activado',
  soundOff: 'Sonido desactivado',
  playerCountLabel: 'Pines / Dedos',
};

const faq = [
  {
    question: '¿Cómo funciona el modo táctil?',
    answer: 'En el modo táctil, cada jugador coloca un dedo en la pantalla del móvil. La herramienta detecta todos los puntos de contacto, muestra anillos de colores brillantes a su alrededor e inicia automáticamente una breve cuenta atrás. Una vez que la cuenta atrás finaliza, un jugador se resalta como ganador mientras los demás se desvanecen, acompañado de una explosión de partículas.',
  },
  {
    question: '¿Puedo usar esta herramienta en un ordenador de escritorio?',
    answer: '¡Sí! Si estás en un dispositivo sin pantalla táctil, la herramienta cambia automáticamente al modo ruleta. Puedes hacer clic en el lienzo para colocar pines de colores que representan a los jugadores, y luego hacer clic en el botón "Iniciar selección" para girar la rueda selectora.',
  },
  {
    question: '¿Cuántos jugadores pueden participar?',
    answer: 'La herramienta admite hasta 10 jugadores simultáneos. En el modo táctil, se pueden detectar hasta 10 dedos a la vez. En el modo ruleta, puedes colocar hasta 10 pines de colores en el lienzo haciendo clic.',
  },
  {
    question: '¿La selección es realmente aleatoria?',
    answer: 'Sí. El algoritmo de selección utiliza Math.random() de JavaScript, de grado criptográfico, para garantizar resultados imparciales. En el modo táctil, el ganador se elige uniformemente al azar entre todos los puntos de contacto detectados. En el modo ruleta, la rueda se desacelera de forma realista usando física de fricción, y el ángulo final determina matemáticamente al ganador.',
  },
  {
    question: '¿Cómo elimino un pin de jugador en el modo ruleta?',
    answer: 'Simplemente haz clic en un pin existente para eliminarlo. La herramienta detecta clics dentro de 30 píxeles de cualquier pin colocado y lo elimina, permitiéndote ajustar la alineación de jugadores antes de activar el giro.',
  },
  {
    question: '¿Esta herramienta recopila o transmite datos?',
    answer: 'En absoluto. Todo se ejecuta localmente en tu navegador. Ningún dato de dedos, posiciones táctiles o resultados de selección se envía jamás a ningún servidor. Tu noche de juegos se mantiene completamente privada.',
  },
  {
    question: '¿Funciona en proyectores o pantallas externas?',
    answer: 'Sí. El modo ruleta funciona muy bien en pantallas grandes y proyectores para sesiones de mesa. Los visuales neón de alto contraste y el gran temporizador de cuenta atrás están diseñados para ser visibles desde cualquier lugar de la sala.',
  },
  {
    question: '¿Por qué se reinicia la cuenta atrás cuando alguien levanta el dedo?',
    answer: 'Esto es intencional. En el modo táctil, la cuenta atrás solo avanza mientras todos los jugadores mantienen los dedos quietos en la pantalla. Si alguien levanta o mueve el dedo, el temporizador se reinicia para asegurar que todos estén comprometidos antes de que se ejecute la selección. Esto evita activaciones accidentales.',
  },
  {
    question: '¿Puedo cambiar el sonido o silenciarlo?',
    answer: 'Sí. Haz clic en el icono del altavoz en la esquina superior derecha para activar o desactivar el sonido. La herramienta reproduce un sonido de tic durante la cuenta atrás y un toque de fanfarria cuando se elige a un ganador.',
  },
  {
    question: '¿Qué pasa si solo hay un jugador?',
    answer: 'En ambos modos, se requieren al menos dos jugadores para realizar una selección. En el modo táctil, la cuenta atrás no comenzará hasta que se detecten al menos dos dedos. En el modo ruleta, el botón "Iniciar selección" permanece desactivado hasta que coloques al menos dos pines.',
  },
];

const howTo = [
  {
    name: 'Colocar dedos o pines',
    text: 'En el modo táctil, todos los jugadores colocan un dedo en la pantalla. En el modo ruleta, haz clic en cualquier lugar del lienzo para colocar pines de jugador.',
  },
  {
    name: 'Activar la selección',
    text: 'En el modo táctil, la selección se inicia automáticamente después de mantener los dedos unos segundos. En el modo ruleta, haz clic en el botón "Iniciar selección" para girar.',
  },
  {
    name: 'Ver el ganador',
    text: 'El ganador se resalta con un efecto de pulso, explosión de partículas y fanfarria de sonido. Haz clic en "Reiniciar" o levanta todos los dedos para intentarlo de nuevo.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'selector-primer-jugador',
  title: 'Selector de Jugador Inicial: Eligiendo el Primer Turno',
  description: 'Elige quién empieza en tus juegos de mesa con este espectacular selector de dedos y ruleta interactiva de turnos.',
  ui,
  seo: [
    { type: 'title', text: 'Justicia y Estrategia: Cómo Evitar la Ventaja del Primer Jugador', level: 2 },
    { type: 'paragraph', html: 'Determinar el jugador que comienza en las partidas de mesa puede influir enormemente en la dinámica del juego. En teoría de juegos, la Ventaja del Primer Jugador (FPA, por sus siglas en inglés) se refiere a la ventaja estadística que tiene el jugador que realiza el primer turno sobre sus oponentes. En partidas de ajedrez estratégico, wargames y Eurogames modernos como Agricola o Puerto Rico, realizar la primera acción permite asegurar recursos críticos o posicionar piezas antes de que los oponentes puedan reaccionar. Para mitigar la FPA y garantizar un campo de juego equilibrado, es esencial un método de selección fiable e imparcial. Nuestro selector digital de jugador inicial garantiza un azar absoluto, permitiendo a los grupos de juego establecer el orden de turnos al instante y pasar directamente a jugar.' },
    {
      type: 'stats',
      items: [
        { value: '100% Azar', label: 'Selección imparcial' },
        { value: '2 segundos', label: 'Inicio de cuenta atrás' },
        { value: 'Multitáctil', label: 'Compatible con móviles' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Reglas de mesa vs. Generadores digitales: La revolución táctil', level: 2 },
    { type: 'paragraph', html: 'Muchos manuales de juegos de mesa modernos incluyen reglas temáticas para el jugador inicial, como "el jugador más joven empieza", "la última persona que visitó una granja empieza" o "el jugador más alto empieza". Aunque son entretenidas en las primeras partidas, estas reglas se vuelven rápidamente repetitivas, estáticas e injustas para grupos de juego habituales. Los generadores físicos como lanzamientos de dados o extracción de cartas añaden tiempo de preparación y son propensos a sesgos humanos o mezclas deficientes. El mecanismo de selección por dedos resuelve este problema ofreciendo un generador rápido táctil que selecciona un jugador inicial en segundos sin necesidad de cartas o dados adicionales.' },
    {
      type: 'table',
      headers: ['Método de selección', 'Velocidad y preparación', 'Calidad del azar', 'Más adecuado para'],
      rows: [
        ['Reglas arbitrarias del manual', 'Instantáneo, pero repetitivo', 'Sin azar tras la primera partida', 'Juegos familiares y fiestas'],
        ['Lanzamiento de dados', 'Requiere buscar y lanzar dados, propenso a empates', 'Alto azar, pero tedioso para grupos grandes', 'Wargames y juegos de rol'],
        ['Robar cartas', 'Requiere barajar y repartir', 'Buen azar, pero requiere cartas físicas', 'Deck-builders y juegos de cartas'],
        ['Selector táctil de dedos', 'Instantáneo, sin preparación, animaciones visuales', 'Azar algorítmico absoluto', 'Todos los juegos de mesa y rol'],
      ],
    },
    {
      type: 'tip',
      title: 'Optimizando tu configuración de selección multitáctil',
      html: 'Para obtener la mejor experiencia en el modo táctil, coloca tu tableta o teléfono inteligente plano en el centro de la mesa. Todos los jugadores deben colocar un dedo claramente sobre el lienzo. La cuenta atrás se reinicia si un jugador levanta o mueve el dedo, evitando selecciones accidentales y garantizando el consenso absoluto antes de que el selector se active.',
    },
    {
      type: 'title',
      text: 'Elige tu herramienta: Selector táctil de dedos vs. Ruleta giratoria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dependiendo de tu configuración de hardware y entorno, puedes alternar entre dos modos de diseño distintos diseñados para maximizar el espacio en pantalla y la accesibilidad:' },
    {
      type: 'proscons',
      title: 'Comparación de modos de selección',
      items: [
        {
          pro: 'El modo táctil ofrece una experiencia increíblemente rápida y táctil, permitiendo que hasta 10 jugadores coloquen los dedos simultáneamente.',
          con: 'Requiere una pantalla táctil como un teléfono inteligente o tableta.',
        },
        {
          pro: 'El modo ruleta funciona en cualquier ordenador portátil, de escritorio o proyector, siendo ideal para sesiones virtuales y noches de juego a distancia.',
          con: 'Requiere hacer clic para colocar pines manualmente antes de activar el giro.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Optimización visual: Redes multitáctiles vs. Ruedas desaceleradoras',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Selector multitáctil',
          description: 'Rastrea múltiples puntos de contacto distintos en la pantalla. Dibuja redes de conexión neón y anillos de cuenta atrás que se encogen alrededor de cada dedo, culminando en una explosión de celebración.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Rastreo táctil simultáneo',
            'Verificaciones táctiles de mantener y soltar',
            'Espectaculares explosiones de partículas',
          ],
        },
        {
          title: 'Ruleta giratoria',
          description: 'Traza pines de jugador de colores alrededor de un centroide matemático. Gira una rueda de sectores de colores que se ralentiza naturalmente usando fricción simulada antes de designar al ganador.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Alineación basada en centroide',
            'Física de desaceleración por fricción',
            'Soporte universal para ratón de escritorio',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ventaja del Primer Jugador (FPA)',
          definition: 'Un sesgo en el orden de turnos en juegos de mesa donde el jugador que comienza obtiene una ventaja estadísticamente significativa en la selección de acciones o el control de recursos.',
        },
        {
          term: 'Protocolo de selección táctil',
          definition: 'Una interacción de mantener presionado donde todos los participantes colocan sus dedos en una pantalla táctil hasta que un solo ganador es resaltado aleatoriamente.',
        },
        {
          term: 'Física de desaceleración',
          definition: 'Una rutina de animación matemática que aplica multiplicadores de fricción a una rueda giratoria para simular la inercia natural y generar anticipación.',
        },
        {
          term: 'Cálculo de centroide',
          definition: 'El punto central calculado de un conjunto disperso de pines de coordenadas, utilizado como pivote de rotación para los gráficos de la rueda de la ruleta.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'Selector de Jugador Inicial y Selector de Dedos',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requiere HTML5 y JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo Usar el Selector de Jugador Inicial',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
