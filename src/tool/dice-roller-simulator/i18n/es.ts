import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'tirador-dados-simulador-probabilidad',
  title: 'Tirador de Dados y Simulador de Probabilidad',
  description: 'Lanza dados poliédricos virtuales (D4, D6, D8, D10, D12, D20, D100), añade modificadores y visualiza estadísticas en tiempo real y probabilidades de lanzamiento para juegos de mesa y de rol.',
  ui: {
    title: 'Tirador de Dados y Simulador de Probabilidad',
    rollButton: 'Lanzar dados',
    clearButton: 'Borrar historial',
    historyTitle: 'Historial de tiradas',
    noHistory: 'Aún no hay tiradas registradas. Añade dados y pulsa Lanzar para empezar.',
    totalRolls: 'Tiradas totales',
    averageRoll: 'Resultado medio',
    lastRoll: 'Último total',
    modifierLabel: 'Modificador (+/-)',
    probabilityTitle: 'Análisis de probabilidad',
    selectDice: 'Selecciona los dados para lanzar',
  },
  seo: [
    { type: 'title', text: 'Dominando las probabilidades: Cómo afecta la estadística de los dados a tu juego', level: 2 },
    { type: 'paragraph', html: 'Los dados poliédricos son el alma de los juegos de rol y de mesa modernos. Ya sea que busques superar una tirada de salvación en Dungeons & Dragons o lanzar para obtener recursos, el resultado se rige por la probabilidad matemática. Comprender cómo influye la combinación de diferentes tipos de dados en tus opciones de éxito es clave para tomar decisiones tácticas durante la partida.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Probabilidad de 20 natural' },
        { value: '10.5', label: 'Media de una tirada de 3d6' },
        { value: '9.75%', label: '20 natural con ventaja' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'La matemática tras varios dados: Por qué 3d6 es más seguro que 1d20', level: 2 },
    { type: 'paragraph', html: 'Al lanzar un solo D20, cada resultado del 1 al 20 tiene la misma probabilidad del 5%, dando lugar a una distribución plana. En cambio, al lanzar varios dados como 3d6, los resultados se concentran en torno al valor medio de 10.5. Esta curva de campana implica que es mucho más probable obtener un resultado moderado que valores extremos, aportando consistencia y reduciendo la aleatoriedad extrema de las tiradas de un único dado.' },
    { type: 'title', text: 'Probabilidades del D20: Críticos, pifias e impacto de los modificadores', level: 2 },
    { type: 'paragraph', html: 'Un simple modificador de más dos puede cambiar drásticamente la probabilidad de éxito, transformando tareas difíciles en retos asequibles. En muchos sistemas de juego, un 20 natural representa un éxito crítico automático (un 5% de probabilidad), mientras que un 1 natural es una pifia o fallo crítico. Visualizar estos resultados ayuda a desmitificar el azar y te permite planificar tus movimientos tácticos con respaldo estadístico.' },
    {
      type: 'title',
      text: 'Tabla de referencia de dados poliédricos estándar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de dado', 'Tirada mínima', 'Tirada máxima', 'Resultado medio', 'Rol principal en juegos de rol'],
      rows: [
        ['D4', '1', '4', '2.5', 'Proyectiles mágicos, dagas, peligros menores'],
        ['D6', '1', '6', '3.5', 'Bolas de fuego, espadas comunes, pruebas de atributo'],
        ['D8', '1', '8', '4.5', 'Espadas largas, conjuros de curación, armas medianas'],
        ['D10', '1', '10', '5.5', 'Alabardas, trucos de daño, decenas de percentil'],
        ['D12', '1', '12', '6.5', 'Grandes hachas, puntos de golpe de bárbaro'],
        ['D20', '1', '20', '10.5', 'Tiradas de salvación, ataques, pruebas de habilidad'],
        ['D100', '1', '100', '50.5', 'Tablas de percentiles, efectos de magia salvaje'],
      ],
    },
    {
      type: 'tip',
      title: 'Cómo calcular medias de dados mentalmente',
      html: 'Para hallar la media de cualquier dado, suma el valor mínimo (1) y el máximo, y divide entre 2. Por ejemplo, la media de un D6 es (1 + 6) / 2 = 3.5. Para varios dados, multiplica la media de uno solo por el número de dados (la media de 3d6 es 3 * 3.5 = 10.5). Sumar un modificador plano simplemente añade su valor al total (3d6 + 4 promedia 14.5).',
    },
    {
      type: 'title',
      text: 'Comparación de sistemas de dados planos y curvos',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Sistema D20 frente a sistema de curva de campana de 3d6',
      items: [
        {
          pro: 'Los sistemas D20 son muy rápidos de calcular y ofrecen un 5% fijo para críticos y pifias.',
          con: 'Los resultados de D20 son muy inestables, haciendo que la habilidad del personaje dependa demasiado del azar.',
        },
        {
          pro: 'Las curvas de campana de 3d6 priorizan los resultados medios, garantizando que los personajes hábiles rara vez fallen tareas fáciles.',
          con: 'Los sistemas de 3d6 exigen sumar tres dados y hacen que los impactos críticos (un 18 perfecto) sean extremadamente raros (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comprendiendo las mecánicas de probabilidad',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sistema D20 (Lineal)',
          description: 'Usa un único dado de 20 caras para las acciones, donde cada resultado tiene un 5% de probabilidad. Su alta variación y aleatoriedad generan emoción, pero reducen la consistencia.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            '5% de probabilidad fija por resultado',
            'Alta variación y fluctuación',
            'Los modificadores afectan al éxito de forma lineal',
          ],
        },
        {
          title: 'Sistema 3d6 (Curva de campana)',
          description: 'Suma tres dados de 6 caras, creando una distribución normal centrada en 10.5. Los resultados son muy consistentes, haciendo que las desviaciones extremas sean inusuales.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Resultados medios muy probables',
            'Resultados extremos muy poco comunes',
            'Los modificadores tienen un impacto no lineal',
          ],
        },
        {
          title: 'Sistema percentil (Tirada por debajo)',
          description: 'Usa dos dados de 10 caras para obtener un número entre 1 y 100. El objetivo es sacar menos de la puntuación del personaje, haciendo que las opciones de éxito sean transparentes.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Porcentaje directo de probabilidad de éxito',
            'Fácil de entender a primera vista',
            'El progreso del personaje es claro matemáticamente',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La falacia del apostador: Por qué los dados no tienen memoria',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Un error frecuente al jugar al rol es creer que las tiradas previas afectan a las futuras. Si sacas tres "1" seguidos en un D20, podrías sentir que una tirada alta "tiene que salir". En realidad, cada tirada es independiente. La probabilidad de sacar un 20 en la siguiente tirada sigue siendo exactamente del 5%. Conocer esto ayuda a tomar decisiones objetivas.',
    },
    {
      type: 'title',
      text: 'Glosario de dados y probabilidad en juegos de mesa',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ventaja y Desventaja',
          definition: 'Mecánica por la que un jugador lanza dos D20 y elige el resultado más alto (Ventaja) o el más bajo (Desventaja). La ventaja eleva la media de 10.5 a 13.8.',
        },
        {
          term: 'Curva de campana (distribución normal)',
          definition: 'Distribución en la que los resultados se concentran en torno al valor medio. Ocurre al sumar varios dados (como 3d6 o 2d10).',
        },
        {
          term: 'Éxito crítico',
          definition: 'Éxito automático que se logra al obtener el número máximo del dado (un 20 natural en un D20), lo que suele otorgar bonificaciones o daño extra.',
        },
        {
          term: 'Pifia (fallo crítico)',
          definition: 'Fallo automático de consecuencias catastróficas o cómicas, provocado al obtener un 1 en un D20.',
        },
        {
          term: 'Valor esperado',
          definition: 'La media de resultados de tus tiradas a largo plazo. Para un único D6 es 3.5; para un D20 es 10.5.',
        },
        {
          term: 'Dados percentiles',
          definition: 'Pareja de dados de 10 caras (uno para las decenas y otro para las unidades) que se lanzan juntos para obtener un resultado del 1 al 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '¿Cómo funciona el simulador de probabilidad?',
      answer: 'Calcula la distribución exacta de probabilidad para la combinación de dados y el modificador elegidos mediante combinatoria matemática, permitiéndote ver tus opciones de quedar por encima o por debajo de ciertos valores.',
    },
    {
      question: '¿Qué dados son compatibles?',
      answer: 'Todos los dados poliédricos habituales de los juegos de rol y mesa: D4, D6, D8, D10, D12, D20 y D100.',
    },
    {
      question: '¿Qué son los modificadores y cómo funcionan?',
      answer: 'Son valores fijos (+1, -2, etc.) que sumas o restas a tu resultado final de dados para representar bonos o penalizaciones de tu personaje.',
    },
    {
      question: '¿Qué significa tirar con ventaja o desventaja?',
      answer: 'Tirar con ventaja significa lanzar dos dados D20 y quedarse con el resultado más alto. Con desventaja se lanzan dos y te quedas con el más bajo. Es una mecánica popular en juegos de rol.',
    },
    {
      question: '¿Qué son los éxitos críticos y las pifias?',
      answer: 'Un éxito crítico ocurre cuando sacas el máximo del dado (un 20 natural en D20), garantizando el éxito. Una pifia es sacar un 1 en el dado, lo que garantiza el fallo.',
    },
    {
      question: '¿Cómo calcula el simulador las probabilidades de las tiradas?',
      answer: 'Analiza matemáticamente todas las combinaciones posibles de tus dados y modificadores para ofrecerte el porcentaje exacto de probabilidad de cada total.',
    },
    {
      question: '¿Por qué una tirada de 3d6 es más consistente que lanzar un D20?',
      answer: 'Un D20 ofrece un 5% plano para cada número. Una tirada de 3d6 forma una curva de campana, haciendo que los resultados cercanos a 10.5 sean muy probables, mientras que los extremos son raros.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Añadir dados',
      text: 'Haz clic en los botones de dados para añadirlos a tu reserva activa.',
    },
    {
      name: 'Añadir modificador',
      text: 'Introduce un valor positivo o negativo para sumarlo o restarlo al total.',
    },
    {
      name: 'Lanzar y ver estadísticas',
      text: 'Pulsa el botón Lanzar para ver las animaciones de resultados, el historial y el análisis de probabilidades.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tirador de Dados y Simulador de Probabilidad',
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
          'name': '¿Cómo funciona el simulador de probabilidad?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Calcula la distribución exacta de probabilidad para la combinación de dados y el modificador elegidos mediante combinatoria matemática, permitiéndote ver tus opciones de quedar por encima o por debajo de ciertos valores.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Qué dados son compatibles?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Todos los dados poliédricos habituales de los juegos de rol y mesa: D4, D6, D8, D10, D12, D20 y D100.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Qué son los modificadores y cómo funcionan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Son valores fijos (+1, -2, etc.) que sumas o restas a tu resultado final de dados para representar bonos o penalizaciones de tu personaje.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Qué significa tirar con ventaja o desventaja?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tirar con ventaja significa lanzar dos dados D20 y quedarse con el resultado más alto. Con desventaja se lanzan dos y te quedas con el más bajo. Es una mecánica popular en juegos de rol.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Qué son los éxitos críticos y las pifias?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un éxito crítico ocurre cuando sacas el máximo del dado (un 20 natural en D20), garantizando el éxito. Una pifia es sacar un 1 en el dado, lo que garantiza el fallo.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Cómo calcula el simulador las probabilidades de las tiradas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Analiza matemáticamente todas las combinaciones posibles de tus dados y modificadores para ofrecerte el porcentaje exacto de probabilidad de cada total.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Por qué una tirada de 3d6 es más consistente que lanzar un D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un D20 ofrece un 5% plano para cada número. Una tirada de 3d6 forma una curva de campana, haciendo que los resultados cercanos a 10.5 sean muy probables, mientras que los extremos son raros.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Añadir dados',
          'text': 'Haz clic en los botones de dados para añadirlos a tu reserva activa.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Añadir modificador',
          'text': 'Introduce un valor positivo o negativo para sumarlo o restarlo al total.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lanzar y ver estadísticas',
          'text': 'Pulsa el botón Lanzar para ver las animaciones de resultados, el historial y el análisis de probabilidades.'
        }
      ]
    }
  ],
};
