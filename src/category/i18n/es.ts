import type { CategoryLocaleContent } from '../../types';

const slug = 'juegos-de-mesa';
const title = 'Utilidades y Herramientas para Juegos de Mesa';
const description = 'Herramientas gratuitas para juegos de mesa y rol: lanza dados virtuales con estadísticas, controla los tiempos de tus partidas con un temporizador multijugador y mucho más. Todo en tu navegador, sin registro y 100% privado.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Herramientas para Juegos de Mesa y Rol | Lanzar Dados Online y Temporizador de Turnos', level: 2 },
    { type: 'paragraph', html: 'Las partidas de juegos de mesa y rol son momentos para disfrutar, pero a veces los dados desaparecen, los turnos se alargan o el maestro de juego termina haciendo malabares con mil cosas a la vez. Esta librería de utilidades nace precisamente para eso: para que tú y tu mesa tengáis herramientas ágiles, bien diseñadas y que funcionen al instante, sin pediros nada a cambio.' },
    { type: 'title', text: 'Lanza Dados Virtuales con Estadísticas en Tiempo Real', level: 2 },
    { type: 'paragraph', html: '¿Cansado de rebuscar dados por el suelo o de esperar a que alguien sume resultados una y otra vez? El lanzador de dados virtual te permite tirar cualquier combinación de dados poliédricos al instante, con modificadores, ventaja, desventaja y un histórico que guarda cada tirada. Además, el análisis de probabilidad te muestra las opciones reales de éxito antes de lanzar. Perfecto para sesiones de Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun o cualquier juego que dependa del azar.' },
    { type: 'title', text: 'Controla los Tiempos de tu Mesa con un Temporizador Inteligente', level: 2 },
    { type: 'paragraph', html: 'Todos conocemos a ese jugador que se toma su tiempo en cada turno. El temporizador de juegos de mesa te permite poner límites de tiempo de forma justa y divertida, con modos que se adaptan a cada tipo de partida: desde un simple cronómetro compartido hasta sistemas de ajedrez con incremento Fischer o retardo Bronstein. Funciona tanto para duelos a dos jugadores con pantalla partida como para grupos de hasta ocho jugadores con control centralizado. Al terminar la partida, consulta estadísticas detalladas de tiempos y ritmo de juego.' },
    { type: 'title', text: 'Privacidad ante Todo: Tus Datos se Quedan en tu Dispositivo', level: 2 },
    { type: 'paragraph', html: 'Una de las grandes ventajas de esta librería es que todo el procesamiento ocurre en tu navegador. No enviamos datos a ningún servidor, no usamos cookies de tracking, no pedimos registro ni correo electrónico. Puedes usar las herramientas estando offline, compartir la pantalla con tu mesa o proyectarla en una televisión sin preocuparte por nada más que jugar. Además, el número de herramientas seguirá creciendo con el tiempo, siempre pensadas para facilitar la vida de los jugadores de mesa y rol.' },
    { type: 'stats', items: [
      { label: 'Herramientas', value: '2+', icon: 'mdi:tools' },
      { label: 'Jugadores', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Idiomas', value: '15', icon: 'mdi:translate' },
      { label: 'Privacidad', value: '100% Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
