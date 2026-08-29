import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Nombra a las dos parejas, ajusta los tantos y amarracos, y anota el tanteo conforme avanza cada lance de la partida.',
  pairOneLabel: 'Pareja uno',
  pairTwoLabel: 'Pareja dos',
  pairOneDefault: 'Mesa Norte',
  pairTwoDefault: 'Mesa Sur',
  targetPointsLabel: 'Tantos por juego',
  targetPointsHint: 'Elige el límite de tantos para cerrar cada chico o juego.',
  gamesToWinLabel: 'Juegos para ganar la vaca',
  gamesToWinHint: 'La primera pareja en alcanzar esta cifra gana la vaca o partida completa.',
  deckLabel: 'Baraja de la mesa',
  deckHint: 'La baraja española de 40 cartas es la opción tradicional. Si usas baraja francesa, elimina los 8, 9 y 10.',
  spanishDeck: 'Baraja española',
  frenchDeck: 'Baraja francesa',
  frenchDeckNotice: 'Recuerda retirar los 8, 9 y 10 de la baraja francesa para jugar con 40 cartas. Las Jotas equivalen a Sotas, las Reinas a Caballos y los Reyes a Reyes.',
  pointsOption30: '30 tantos',
  pointsOption40: '40 tantos',
  pointsOption50: '50 tantos',
  gamesOption1: '1 juego',
  gamesOption2: '2 juegos',
  gamesOption3: '3 juegos',
  startMatch: 'Abrir el marcador',
  matchSettings: 'Configurar parejas y reglas',
  liveMatch: 'Partida en curso',
  targetLabel: 'tantos por chico',
  gameLabel: 'juego',
  gamePlural: 'juegos',
  vacaLabel: 'juegos para ganar',
  scoreLabel: 'Piedras actuales',
  handLabel: 'Elige qué pareja es mano',
  handSelected: 'es mano.',
  stonesLabel: 'Tanteo parcial',
  stoneSingular: 'piedra',
  stonePlural: 'piedras',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'para ganar',
  addStone: 'piedra',
  addAmarraco: 'amarraco',
  closeGame: 'Cerrar juego',
  closeGamePrompt: '¿Confirmar que esta pareja ha ganado el chico y comenzar el siguiente?',
  confirmationTitle: 'Confirmar acción en la mesa',
  confirmAction: 'Confirmar',
  cancelAction: 'Seguir jugando',
  undo: 'Deshacer',
  resetMatch: 'Reiniciar partida',
  resetMatchPrompt: '¿Reiniciar la partida actual y borrar el historial de tanteo?',
  historyTitle: 'Últimas anotaciones',
  noHistory: 'Sin anotaciones todavía. Cada lance anotado aparecerá aquí.',
  matchReady: 'La mesa está lista para empezar.',
  closeGameHint: 'Una pareja ha alcanzado el límite de tantos. Confirma la victoria del chico.',
  waitingForScore: 'Sigue contando. Tantos restantes para el líder:',
  gameWon: 'Chico cerrado.',
  vacaWon: 'Vaca ganada. Inicia una nueva partida cuando la mesa esté lista.',
  gameClosed: 'ha cerrado el juego.',
  pointsAdded: 'ha sumado',
  matchSaved: 'Puntuación guardada en este dispositivo.',
  lastAction: 'última anotación',
  settingsApplied: 'Nuevas reglas aplicadas. Partida reiniciada.',
  pairNameRequired: 'Asigna un nombre a ambas parejas antes de abrir el marcador.',
  visualScoreLabel: 'Marcador de mus en mesa con piedras, amarracos, juegos y límite de tantos',
};

const faq = [
  {
    question: '¿Qué permite registrar este marcador de mus online?',
    answer: 'Permite llevar el tanteo en vivo de las dos parejas: piedras (tantos individuales), amarracos (bloques de 5 tantos), chicos o juegos ganados, marca de la pareja que es mano e historial de anotaciones.',
  },
  {
    question: '¿Por qué se diferencian las piedras y los amarracos?',
    answer: 'Una piedra representa un punto individual y un amarraco equivale a 5 piedras. Separar ambas métricas facilita cotejar el marcador digital con garbanzos, amarracos o fichas reales en la mesa.',
  },
  {
    question: '¿Se puede jugar a 30, 40 o 50 tantos?',
    answer: 'Sí. Puedes seleccionar 30, 40 o 50 tantos por chico antes de abrir el marcador. Todas las métricas y botones de cierre se adaptan a la meta fijada.',
  },
  {
    question: '¿Cómo se cierra un chico o juego completado?',
    answer: 'Al sumar amarracos y piedras hasta alcanzar el límite seleccionado, el botón de cierre se activa. Tras la confirmación de ambas parejas, se suma un juego al marcador general y se reinician las piedras a cero.',
  },
  {
    question: '¿Se guardan los datos si recargo la página o cierro el navegador?',
    answer: 'Sí. La configuración de la mesa, los nombres, las piedras y los chicos ganados se guardan localmente en el navegador de tu dispositivo sin enviar datos a servidores externos.',
  },
  {
    question: '¿El marcador valida automáticamente las señas o los lances?',
    answer: 'No. El Mus cuenta con múltiples variantes regionales y de torneo. Este marcador gestiona de forma impecable el tanteo acordado por los jugadores, dejando los envites, señas y voces en la mesa.',
  },
  {
    question: '¿Cómo adaptar una baraja francesa para jugar al mus?',
    answer: 'Retira los 8, 9 y 10 para dejar la baraja en 40 cartas. Las Jotas funcionan como Sotas, las Reinas como Caballos y los Reyes como Reyes. Los 3 se juegan como Reyes y los 2 como Ases (pitos).',
  },
];

const howTo = [
  {
    name: 'Identificar a las parejas',
    text: 'Escribe los nombres de los cuatro jugadores agrupados por parejas (Norte/Sur o nombres propios) para identificarlas en la mesa.',
  },
  {
    name: 'Fijar el límite de tantos y la vaca',
    text: 'Selecciona si jugáis a 30, 40 o 50 tantos por chico y cuántos chicos son necesarios para ganar la vaca.',
  },
  {
    name: 'Anotar piedras y amarracos',
    text: 'Pulsa piedra (+1) o amarraco (+5) conforme la pareja gane puntos en Grande, Chica, Pares, Juego o Punto.',
  },
  {
    name: 'Cerrar el chico y contar la vaca',
    text: 'Al alcanzar el límite, confirma la victoria de la pareja para sumar el chico y reiniciar las piedras de la mesa.',
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
  name: 'Marcador de Mus Online',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Contador de piedras, amarracos, chicos y vacas para partidas de mus en mesa real.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo llevar el tanteo en una partida de Mus',
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

export const content: MusScoreboardLocaleContent = {
  slug: 'marcador-mus-online',
  title: 'Marcador de Mus Online para Partidas en Vivo',
  description: 'Anota piedras, amarracos, chicos y vacas en tus partidas de mus con baraja española o francesa. Partidas a 30, 40 o 50 tantos con guardado local.',
  ui,
  seo: [
    { type: 'title', text: 'Lleva un Tanteo Claro y Dinámico en tus Partidas de Mus', level: 2 },
    { type: 'paragraph', html: 'El Mus es un juego tradicional español repleto de dinamismo, envites e intensidad. Como los puntos se cantan al finalizar cada lance (Grande, Chica, Pares, Juego o Punto), tener un contador ágil evita discusiones y mantiene el ritmo en la mesa.' },
    { type: 'title', text: 'Configura la Meta de Tantos Antes del Primer Mus', level: 2 },
    { type: 'paragraph', html: 'Aunque el estándar habitual es jugar a 40 tantos, en muchas regiones y peñas se juega a 30 o 50 tantos. Ajusta la meta de puntos y la duración de la vaca antes de repartir la primera mano para que el contador visual coincida exactamente con las reglas de vuestra mesa.' },
    {
      type: 'table',
      headers: ['Ajuste', 'Qué controla', 'Cuándo utilizarlo'],
      rows: [
        ['30 tantos', 'Chico corto', 'Partidas rápidas, torneos exprés o reglas locales'],
        ['40 tantos', 'Chico estándar', 'El formato tradicional de partida entre amigos'],
        ['50 tantos', 'Chico largo', 'Mesas que buscan partidas de mayor estrategia'],
      ],
    },
    { type: 'tip', title: 'Acordad las Reglas de la Mesa en Voz Alta', html: 'Antes de cortar la baraja, confirmad si jugáis a 8 reyes y 8 ases (con 3s como reyes y 2s como ases), el límite de amarracos y quién custodia físicamente los garbanzos o fichas.' },
    { type: 'title', text: 'Adaptación de Baraja Española y Francesa', level: 2 },
    { type: 'paragraph', html: 'La baraja española tradicional de 40 cartas (Oros, Copas, Espadas y Bastos) es la referencia natural del Mus. Si jugáis con baraja francesa, retirad los ochos, nueves y dieces. Las Jotas representan a las Sotas, las Reinas a los Caballos y los Reyes a los Reyes. Los doses hacen de pitos (Ases) y los treses de reyes.' },
    { type: 'title', text: 'Piedras y Amarracos: Control Visual Directo', level: 2 },
    { type: 'paragraph', html: 'El marcador digital muestra el total numérico de puntos y desglosa automáticamente la cifra en amarracos (bloques de 5 tantos) y piedras sueltas. Esta equivalencia directa facilita que cualquier jugador en la mesa verifique el tanteo de un vistazo.' },
    { type: 'list', items: ['<strong>Piedra:</strong> 1 punto individual sumado en el tanteo.', '<strong>Amarraco:</strong> 1 ficha o bloque equivalente a 5 piedras.', '<strong>Chico / Juego:</strong> carrera de puntos cerrada al alcanzar la meta acordada.', '<strong>Vaca:</strong> victoria definitiva al conseguir el número fijado de chicos.'] },
    { type: 'title', text: 'Cierre de Chico y Gestión de Errores', level: 2 },
    { type: 'paragraph', html: 'Cuando una pareja alcance los tantos necesarios, el botón de cierre se activa con advertencia de confirmación. Si os equivocáis al anotar un punto por despiste, el botón "Deshacer" permite revertir la última acción al instante sin alterar el historial.' },
    { type: 'tip', title: 'Función Deshacer en Caso de Confusión', html: 'Si al cantar las pares o el juego se anota un punto a la pareja equivocada, pulsa Deshacer inmediatamente para corregir el tanteo de la mano.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
