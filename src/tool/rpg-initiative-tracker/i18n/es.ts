import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Rastreador de Iniciativa',
  addCombatant: 'Agregar combatiente',
  removeCombatant: 'Eliminar',
  playerLabel: 'Jugador',
  npcLabel: 'PNJ',
  initiativeLabel: 'Iniciativa',
  modifierLabel: 'Modificador',
  namePlaceholder: 'Nombre del personaje',
  initiativePlaceholder: 'Iniciativa',
  modifierPlaceholder: 'Modificador',
  addButton: 'Agregar',
  startCombat: 'Iniciar combate',
  endCombat: 'Finalizar combate',
  nextTurn: 'Siguiente turno',
  prevTurn: 'Turno anterior',
  roundLabel: 'Ronda',
  turnLabel: 'Turno',
  noCombatants: 'Aún no hay combatientes. Agrega personajes para comenzar.',
  statusInput: 'Estado',
  combatStarted: '¡Combate iniciado!',
  combatEnded: 'Combate finalizado',
  yourTurn: 'Turno',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'seguidor-de-iniciativa',
  title: 'Rastreador de Iniciativa RPG: Orden de Turno y Gestor de Iniciativa',
  description: 'Sigue el orden de iniciativa para cualquier juego de rol de mesa. Agrega combatientes, tira iniciativa, gestiona efectos de estado y navega entre turnos en combate.',
  ui,
  seo: [
    { type: 'title', text: 'Cómo funciona la Iniciativa en D&D y otros Juegos de Rol de Mesa', level: 2 },
    { type: 'paragraph', html: 'La iniciativa determina el orden de las acciones en combate. Cada participante realiza una prueba de Destreza al inicio del combate, y el orden de turnos va del más alto al más bajo. Un rastreador de iniciativa digital automatiza la clasificación, resalta al combatiente activo, rastrea los efectos de estado en curso y mantiene a toda la mesa informada sobre el próximo turno. Esto es especialmente útil para Dungeon Masters que gestionan encuentros complejos con múltiples tipos de enemigos y personajes jugadores.' },
    {
      type: 'stats',
      items: [
        { value: 'Ilimitados', label: 'Combatientes soportados' },
        { value: 'Orden auto', label: 'Por tirada de iniciativa' },
        { value: 'Tiempo real', label: 'Seguimiento de turnos' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Reglas de Iniciativa Estándar para D&D 5e', level: 2 },
    { type: 'paragraph', html: 'En D&D 5ª Edición, cada participante realiza una prueba de Destreza al inicio del combate. Los jugadores tiran individualmente. El Dungeon Master tira una vez por cada grupo de monstruos idénticos. El orden de turnos va del más alto al más bajo, luego vuelve al principio para la siguiente ronda. Los empates se resuelven por puntuación de Destreza o decide el DM. Un rastreador digital maneja todo esto automáticamente y muestra el orden completo de turnos de un vistazo.' },
    {
      type: 'table',
      headers: ['Función', 'Seguimiento manual', 'Rastreador digital'],
      rows: [
        ['Clasificación', 'Reescribir la lista cuando cambie la iniciativa', 'Reordenamiento automático instantáneo'],
        ['Turno actual', 'Debe seguirse verbalmente o con una ficha', 'Resaltado con brillo verde'],
        ['Efectos de estado', 'Bloc de notas aparte o dado junto a la miniatura', 'Haz clic para activar en cada combatiente'],
        ['Conteo de rondas', 'Llevar la cuenta mentalmente o en un papel', 'Mostrado automáticamente'],
        ['Añadir en combate', 'Borrar y reescribir el orden', 'Insertado en la posición correcta'],
      ],
    },
    {
      type: 'tip',
      title: 'Consejos para dirigir la Iniciativa en la mesa',
      html: 'Tira la iniciativa para todos los monstruos antes de la sesión para ahorrar tiempo durante el combate. Agrega efectos de estado comunes como Aturdido o Envenenado a un combatiente tan pronto como se apliquen. Esto evita olvidar una condición cuando llegue el turno del personaje afectado. Usa el botón Turno anterior para revisar lo que sucedió si necesitas verificar una decisión de una ronda anterior.',
    },
    {
      type: 'title',
      text: 'Efectos de Estado Comunes en Combate',
      level: 3,
    },
    { type: 'paragraph', html: 'El seguimiento de condiciones durante el combate es una de las tareas que más se pasan por alto. Un efecto de estado puede cambiar completamente la eficacia de un personaje, y olvidarse de eliminarlo puede desequilibrar un encuentro. El rastreador de iniciativa te permite aplicar y eliminar condiciones con un solo clic para que permanezcan visibles junto al nombre del combatiente.' },
    {
      type: 'proscons',
      title: 'Gestión digital vs manual de efectos de estado',
      items: [
        {
          pro: 'Las condiciones son visibles junto al nombre del personaje, así que nadie olvida un efecto activo.',
          con: 'Requiere recordar activar y desactivar los estados según se aplican y eliminan.',
        },
        {
          pro: 'Varios estados pueden estar activos en el mismo combatiente y se muestran todos juntos.',
          con: 'El rastreador no aplica automáticamente los efectos de las reglas; el DM aún debe gestionarlos.',
        },
        {
          pro: 'Los estados pueden agregarse durante el combate sin detenerse a escribir en una hoja de personaje.',
          con: 'Solo las etiquetas de estado predefinidas están disponibles por defecto.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sistemas de Iniciativa Alternativos',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iniciativa Estándar',
          description: 'Cada combatiente tira una vez al inicio. El mismo orden se repite cada ronda. Simple y predecible, pero el orden es fijo después de la primera tirada. Funciona bien para la mayoría de grupos y tamaños de encuentro.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Simple de aprender y enseñar', 'Orden de turnos fijo cada ronda', 'Funciona para cualquier grupo'],
        },
        {
          title: 'Iniciativa de Grupo',
          description: 'Todos los personajes jugadores actúan juntos, luego todos los enemigos juntos. Común en ediciones antiguas y juegos OSR. Acelera el combate reduciendo el seguimiento individual pero reduce la profundidad táctica.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Resolución de combate más rápida', 'Fomenta la coordinación del grupo', 'Menos variedad en turnos individuales'],
        },
        {
          title: 'Variante de Factor de Velocidad',
          description: 'Cada ronda los participantes declaran acciones primero, luego tiran iniciativa modificada por la acción elegida. Usado en conjuntos de reglas opcionales. Crea un orden de turno impredecible pero añade profundidad a la toma de decisiones.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Orden diferente cada ronda', 'La elección de acción afecta el tiempo', 'Más decisiones tácticas por turno'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glosario del Rastreador de Combate',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Iniciativa',
          definition: 'Una prueba de Destreza realizada al inicio del combate para determinar la secuencia de turnos. Cada participante tira y actúa en orden descendente.',
        },
        {
          term: 'Ronda',
          definition: 'Un ciclo completo en el que cada combatiente realiza un turno. Después del último combatiente, la ronda termina y comienza una nueva desde el principio del orden.',
        },
        {
          term: 'Efecto de Estado',
          definition: 'Una condición temporal que modifica las capacidades de un personaje. Ejemplos incluyen Aturdido (no puede actuar), Envenenado (desventaja en tiradas) y Cegado (ataques con desventaja).',
        },
        {
          term: 'PNJ',
          definition: 'Personaje No Jugador controlado por el Dungeon Master. En el seguimiento de iniciativa, los PNJ son típicamente enemigos o criaturas neutrales en el encuentro.',
        },
        {
          term: 'PJ',
          definition: 'Personaje Jugador controlado por uno de los jugadores en la mesa. Los PJ se distinguen de los PNJ en el rastreador para ayudar al DM a identificar objetivos aliados.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cuándo relanzar la Iniciativa cada ronda',
      icon: 'mdi:information-outline',
      badge: 'CONSEJO DM',
      html: 'Algunos DM prefieren relanzar la iniciativa cada ronda para mayor imprevisibilidad, mientras que la mayoría mantiene el mismo orden por simplicidad. Si un nuevo combatiente se une a la pelea, tira su iniciativa e insértalo en la posición actual. El rastreador maneja esto automáticamente. Para encuentros con jefes, considera dar al villano una iniciativa fija en un valor específico para que el combate se sienta más estructurado.',
    },
  ],
  faq: [
    {
      question: '¿Cómo agrego combatientes al orden de iniciativa?',
      answer: 'Ingresa el nombre del personaje, la tirada de iniciativa y el modificador de iniciativa, luego haz clic en Agregar. Alterna entre los tipos Jugador y PNJ para distinguir visualmente a los miembros del grupo de los enemigos en la lista.',
    },
    {
      question: '¿Qué sucede cuando hago clic en Iniciar combate?',
      answer: 'Todos los combatientes se ordenan por iniciativa de mayor a menor. El orden de turnos comienza desde arriba, el contador de rondas empieza en 1 y el combatiente activo se resalta con un brillo verde.',
    },
    {
      question: '¿Cómo rastreo los efectos de estado durante el combate?',
      answer: 'Haz clic en una etiqueta de estado (Aturdido, Envenenado, Cegado, etc.) para activarla o desactivarla para el combatiente seleccionado. Los estados activos aparecen junto al nombre del personaje. Esto recuerda a todos los efectos en curso cuando llegue el turno de ese combatiente.',
    },
    {
      question: '¿Mis datos de combate persisten si actualizo la página?',
      answer: 'Sí. El rastreador de iniciativa guarda el estado del combate en el almacenamiento local de tu navegador. Tus combatientes, orden de turnos y efectos de estado permanecen después de recargar la página. Los datos se borran cuando haces clic en Finalizar combate.',
    },
    {
      question: '¿Puedo volver al turno anterior?',
      answer: 'Sí. El botón Turno anterior te permite navegar hacia atrás en el orden de turnos. Esto es útil para revisar lo que sucedió antes en la ronda o corregir un error.',
    },
    {
      question: '¿Puedo agregar o eliminar combatientes durante el combate?',
      answer: 'Sí. Se pueden agregar nuevos combatientes en cualquier momento y se insertan automáticamente en la posición correcta según su tirada de iniciativa. Los combatientes existentes se pueden eliminar si abandonan el encuentro.',
    },
    {
      question: '¿Funciona con cualquier sistema de juego de rol?',
      answer: 'Sí. El rastreador funciona con cualquier juego de rol de mesa que use un orden de turnos basado en iniciativa. Ingresa los valores de iniciativa que use tu sistema, ya sea una tirada de d20 más Destreza para D&D o un mecanismo diferente para otros juegos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Agrega combatientes antes del combate',
      text: 'Ingresa el nombre de cada personaje, su tirada de iniciativa y su modificador. Márcalos como Jugador o PNJ. Agrega tantos combatientes como necesite tu encuentro.',
    },
    {
      name: 'Inicia el combate para fijar el orden',
      text: 'Haz clic en Iniciar combate para ordenar a todos por iniciativa y comenzar el seguimiento de turnos. El primer combatiente en el orden se resalta.',
    },
    {
      name: 'Navega entre turnos y rastrea condiciones',
      text: 'Usa Siguiente turno y Turno anterior para moverte por el orden. Aplica efectos de estado haciendo clic en las etiquetas de estado para rastrear condiciones durante el combate.',
    },
    {
      name: 'Finaliza el combate cuando termines',
      text: 'Haz clic en Finalizar combate para detener el seguimiento de turnos. Esto limpia el estado activo y reinicia el contador de rondas mientras mantiene la lista de combatientes para el próximo encuentro.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Rastreador de Iniciativa RPG',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cómo agrego combatientes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ingresa el nombre del personaje, la tirada de iniciativa y el modificador de iniciativa, luego haz clic en Agregar. Puedes alternar entre Jugador y PNJ para distinguirlos en la lista.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué sucede cuando hago clic en Iniciar combate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Todos los combatientes se ordenan por iniciativa (del más alto primero). El orden de turnos comienza con el primer combatiente y un contador de rondas empieza en 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo usar el Rastreador de Iniciativa',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Agregar combatientes',
          'text': 'Ingresa los detalles del personaje: nombre, tirada de iniciativa y modificador. Alterna entre Jugador y PNJ antes de agregar.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Iniciar combate',
          'text': 'Haz clic en Iniciar combate para ordenar todos los combatientes por iniciativa y comenzar el seguimiento del orden de turnos.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gestionar turnos',
          'text': 'Usa Siguiente turno y Turno anterior para navegar el orden de turnos. El combatiente activo se resalta con un brillo verde.',
        },
      ],
    },
  ],
};

