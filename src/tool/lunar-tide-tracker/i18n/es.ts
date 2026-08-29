import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'calculadora-fases-lunares',
  title: 'Calculadora de Fases Lunares para Rol: Seguimiento de Lunas Fantásticas y Ciclos de Marea',
  description: 'Calcula las fases lunares de cualquier mundo fantástico con periodos orbitales personalizados. Sigue hasta tres lunas a la vez, consulta pronósticos de 10 días y obtén un nivel de marea combinado para sistemas de magia y clima en D&D, Pathfinder o cualquier juego de rol.',
  ui: {
    title: 'Rastreador de Fases Lunares y Mareas Místicas',
    moonsTitle: 'Configuración de lunas',
    addMoon: 'Añadir luna',
    removeMoon: 'Eliminar luna',
    moonName: 'Nombre de la luna',
    orbitalPeriod: 'Periodo orbital (días)',
    startingOffset: 'Desfase inicial (días)',
    timelineTitle: 'Control del tiempo',
    currentDay: 'Día actual de campaña',
    tideTitle: 'Estado de Marea Mística',
    tideLevel: 'Nivel de energía mareal',
    magicModifier: 'Efecto mágico de marea',
    forecastTitle: 'Pronóstico lunar y de mareas',
    dayLabel: 'Día',
    resetButton: 'Reiniciar al día 0',
    presetTitle: 'Presets de campaña',
    presetSingle: 'Luna clásica',
    presetDouble: 'Lunas gemelas de la magia',
    presetTriple: 'Reino del triple eclipse',
    newMoon: 'Luna nueva',
    waxingCrescent: 'Cuarto creciente',
    firstQuarter: 'Primer cuarto',
    waxingGibbous: 'Gibosa creciente',
    fullMoon: 'Luna llena',
    waningGibbous: 'Gibosa menguante',
    lastQuarter: 'Último cuarto',
    waningCrescent: 'Cuarto menguante',
  },
  seo: [
    { type: 'title', text: 'Cómo seguir las fases lunares en una campaña de rol de fantasía', level: 2 },
    { type: 'paragraph', html: 'La mayoría de los mundos fantásticos tienen lunas con periodos orbitales distintos a los 29,5 días de la Luna real. El campo <strong>Periodo Orbital</strong> define cuántos días de juego tarda una luna en completar un ciclo completo. La ambientación Eberron usa 28 días; la Tierra Media de Tolkien ronda los 30. Ajusta este valor según el lore de tu mundo o elige cualquier número entre 5 y 60 días que produzca la frecuencia de eclipses que deseas.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Lunas simultáneas' },
        { value: '10', label: 'Días de pronóstico' },
        { value: '5', label: 'Estados de marea' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Para qué sirve el campo Desfase inicial', level: 2 },
    { type: 'paragraph', html: 'El <strong>Desfase inicial</strong> desplaza la fase de salida de una luna en el día 0 de campaña. Un desfase de 0 comienza en luna nueva. Un desfase igual a la mitad del periodo orbital comienza en luna llena. Úsalo para reproducir la fase descrita en tu escena de apertura, o para que dos lunas no empiecen siempre alineadas.' },
    { type: 'title', text: 'Qué significa el nivel de marea para tu partida', level: 2 },
    { type: 'paragraph', html: 'El nivel de marea combina la atracción gravitacional de todas las lunas activas según sus fases actuales. Una <strong>marea viva</strong> (por encima del 75%) ocurre cuando las lunas están casi alineadas en fase llena o nueva. Una <strong>marea muerta</strong> (por debajo del 30%) se produce cuando las lunas están en fases opuestas y se anulan parcialmente. Vincula esto a cualquier mecánica: bonificadores a las CD de salvación, duración de la metamorfosis druídica, umbrales de transformación de licántropos o severidad de tormentas en mapas costeros.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Luna única',
          description: 'Ideal para ambientaciones cercanas al mundo real o con una sola luna dominante. Ciclo simple de 8 fases, fácil de seguir.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Reinos Olvidados (Selune, 30 días)',
            'Campañas de hombres lobo y licantropía',
            'Sesiones de terror ligadas a la luna llena'
          ]
        },
        {
          title: 'Lunas gemelas',
          description: 'Habitual en fantasía épica. Crea alineaciones parciales frecuentes y mareas interesantes a mitad de ciclo.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28d + Aryth 12d)',
            'Temporadas de eclipse predecibles',
            'Ideal para sistemas de magia druídica o elemental'
          ]
        },
        {
          title: 'Triple luna',
          description: 'Las raras alineaciones triples generan oleadas impredecibles. Dramáticamente útil para eventos de magia salvaje.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Tablas de magia salvaje en alineación',
            'Complejidad estilo Golarion de Pathfinder',
            'Ciclos de largo periodo para campañas épicas'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Periodos orbitales habituales en mundos fantásticos', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Reinos Olvidados)', definition: 'Periodo orbital de 30 días, luna única. Usa un desfase de 15 para empezar en luna llena en la primera sesión.' },
        { term: 'Lunas de Eberron', definition: 'Eberron tiene 12 lunas con periodos de 9 a 28 días. Usa las dos más relevantes para la trama como instancias separadas.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion tiene una luna, Somal, con ciclo de 29 días. Un segundo satélite de periodo corto puede modelar eventos de la Tapicería Oscura.' },
        { term: 'Mundo propio', definition: 'Una luna de 15 días produce 24 lunas llenas por año de juego. Una de 45 días produce unas 8. Los ciclos cortos generan más eventos pero reducen su peso narrativo.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Consejo: Configurar una fase concreta para la sesión 1',
      icon: 'mdi:information-outline',
      badge: 'CONSEJO DE AJUSTE',
      html: 'Si tu campaña empieza en cuarto creciente, pon el desfase en torno al 20% del periodo orbital. Para luna llena, usa el 50% del periodo como desfase. Ejemplo: luna de 28 días que empieza llena, desfase 14. Avanza el contador al día actual de campaña y el pronóstico mostrará los próximos 10 días de forma automática.'
    }
  ],
  faq: [
    { question: '¿Qué periodo orbital debo usar para mi mundo fantástico?', answer: 'Si tu ambientación no especifica uno, entre 28 y 30 días funciona bien para una luna única. Para varias lunas, elige periodos que no sean múltiplos simples entre sí para que las alineaciones no se repitan demasiado a menudo.' },
    { question: '¿Cómo hago que dos lunas se alineen en un momento concreto de la campaña?', answer: 'Pon ambas lunas con el mismo valor de desfase. Se alinearán en cada múltiplo común de sus dos periodos. Para empezarlas en posiciones opuestas, da a la segunda luna un desfase igual a la mitad de su periodo orbital.' },
    { question: '¿Qué significa la marea viva en términos de juego?', answer: 'La marea viva significa que todas las lunas activas están tirando en la misma dirección y producen energía mareal máxima. Úsala para desencadenar oleadas de magia salvaje, potenciar el rango de hechizos curativos o marcarla como noche sagrada para facciones religiosas.' },
    { question: '¿Qué significa la marea muerta en términos de juego?', answer: 'La marea muerta ocurre cuando las lunas se anulan parcialmente entre sí. Ideal para efectos antimagia, calmas absolutas en el mar o para antagonistas que necesitan supresión mágica predecible para ejecutar sus planes.' },
    { question: '¿Puedo usarlo para La Llamada de Cthulhu u otras campañas de terror?', answer: 'Sí. Usa una luna de 29 días y ajusta el desfase para que la luna llena caiga en el clímax de la sesión. El rastreador de mareas puede representar la influencia del Mito o picos de sensibilidad psíquica proporcionales al porcentaje de fase.' },
    { question: '¿Cómo funciona el pronóstico de 10 días?', answer: 'El pronóstico muestra la fase lunar de cada luna activa como un punto de color para cada uno de los próximos 10 días de campaña. El porcentaje indica el nivel de marea combinado. Los días con valores altos son buenos candidatos para encuentros dramáticos vinculados a la magia o el clima.' },
    { question: '¿Puedo seguir una luna con un ciclo muy corto, como 7 días?', answer: 'Sí. Pon el periodo orbital en 7. La luna completará un ciclo completo cada semana de tiempo de juego. Útil para mundos donde la magia lunar se reinicia semanalmente o para rastrear un pequeño cuerpo cometario de paso regular.' },
    { question: '¿Cómo reproduzco la fase lunar de un módulo de aventura publicado?', answer: 'Consulta el día de campaña en la aventura y fíjate en la fase descrita. Cuenta cuántos días del ciclo corresponde, divídelo entre el periodo orbital y usa ese resultado como desfase. Ejemplo: primer cuarto en día 0 de una luna de 28 días significa desfase 7.' }
  ],
  bibliography,
  howTo: [
    { name: 'Configura el periodo orbital', text: 'Introduce el número de días de juego que tarda tu luna en completar un ciclo completo, según el lore de tu mundo.' },
    { name: 'Ajusta el desfase inicial', text: 'Desplaza la fase inicial con un valor de desfase en días. La mitad del periodo orbital equivale a luna llena en el día 0.' },
    { name: 'Avanza el contador de días', text: 'Usa los botones de paso o el deslizador para llegar al día actual de campaña y leer la fase y el nivel de marea en tiempo real.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Fases Lunares para Rol: Seguimiento de Lunas Fantásticas y Ciclos de Marea',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '¿Qué periodo orbital debo usar para mi mundo fantástico?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Entre 28 y 30 días funciona bien para una luna única. Para varias lunas, elige periodos que no sean múltiplos simples entre sí para que las alineaciones no se repitan demasiado.' } },
        { '@type': 'Question', 'name': '¿Qué significa la marea viva en términos de juego?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'La marea viva significa que todas las lunas activas producen energía mareal máxima. Úsala para desencadenar magia salvaje, potenciar hechizos curativos o marcarla como noche sagrada.' } },
        { '@type': 'Question', 'name': '¿Cómo reproduzco la fase lunar de un módulo de aventura publicado?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Cuenta cuántos días del ciclo corresponde la fase descrita y usa ese valor como desfase. Ejemplo: primer cuarto en una luna de 28 días significa desfase 7.' } }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo seguir las fases lunares en una campaña de rol',
      'step': [
        { '@type': 'HowToStep', 'name': 'Configura el periodo orbital', 'text': 'Introduce los días de juego que tarda tu luna en completar un ciclo.' },
        { '@type': 'HowToStep', 'name': 'Ajusta el desfase inicial', 'text': 'La mitad del periodo orbital equivale a luna llena en el día 0.' },
        { '@type': 'HowToStep', 'name': 'Avanza el contador', 'text': 'Usa el deslizador para llegar al día actual y leer la fase en tiempo real.' }
      ]
    }
  ]
};
export default content;
