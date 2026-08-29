import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Ajusta el grupo y la amenaza. La calculadora mide el encuentro con los umbrales de D&D 5e 2014 para detectar la presión antes de la iniciativa.',
  partySection: 'El grupo',
  partyLevel: 'Nivel del personaje',
  partyLevelHint: 'Usa un nivel uniforme para un grupo con personajes de nivel similar.',
  partySize: 'Personajes',
  partySizeHint: 'Las reglas ajustan el multiplicador de monstruos para grupos muy pequeños o grandes.',
  threatSection: 'La amenaza',
  monsterCr: 'Desafío del monstruo (CR)',
  monsterCrHint: 'Elige el CR de un monstruo repetido. Los grupos mixtos requieren un cálculo independiente.',
  moreCr: 'Mostrar más CR',
  lessCr: 'Mostrar menos CR',
  monsterCount: 'Cantidad de monstruos',
  monsterCountHint: 'Más criaturas aumentan la presión de acciones aunque su experiencia base sea modesta.',
  presets: 'Empezar con una escena',
  presetClassic: 'Patrulla clásica',
  presetBoss: 'Jefe en solitario',
  presetSwarm: 'Horda de esbirros',
  resultSection: 'Presión del encuentro',
  belowEasyHint: 'Una escena ligera que permite conservar recursos para los siguientes retos.',
  easyHint: 'Una escena asequible con poca presión sobre el grupo.',
  mediumHint: 'Una prueba significativa que puede costar puntos de golpe o recursos.',
  hardHint: 'Una escena peligrosa donde la táctica y la gestión de recursos importan.',
  deadlyHint: 'Señal de presión mortal. Revisa rutas de escape, terreno y el coste de un mal asalto.',
  adjustedXp: 'XP Ajustada',
  baseXp: 'XP Base',
  multiplier: 'Multiplicador de grupo',
  partyThreshold: 'Umbral Medio',
  belowEasy: 'Inferior a fácil',
  easy: 'Fácil',
  medium: 'Medio',
  hard: 'Difícil',
  deadly: 'Mortal',
  warning: 'Ten en cuenta',
  partyAdjustment: 'Se ha ajustado el multiplicador de monstruos porque el grupo tiene menos de tres o más de cinco personajes.',
  highCr: 'Un monstruo con CR superior al nivel del grupo puede derribar a un personaje rápidamente. Trata esta etiqueta como una alerta.',
  manyMonsters: 'Once o más monstruos pueden dificultar la gestión del combate y crear gran volatilidad en la economía de acciones.',
  rulesNote: 'Esta estimación se basa en las reglas de D&D 5e 2014. No contempla terreno, táctica, conjuros, objetos mágicos o experiencia del jugador.',
  rulesLinkLabel: 'Leer las reglas de origen',
  reset: 'Restablecer ejemplo',
  xpUnit: 'XP',
  sceneLabel: 'Gráfico visual de presión',
  partyMarker: 'Grupo',
  threatMarker: 'Amenaza',
};

const faq = [
  {
    question: '¿Qué reglas utiliza esta calculadora de dificultad de encuentros?',
    answer: 'Utiliza el método oficial de D&D 5e 2014 de las Reglas Básicas. Suma los umbrales del grupo para encuentros fáciles, medios, difíciles y mortales, y los compara con la XP ajustada de los monstruos.',
  },
  {
    question: '¿Por qué la XP ajustada es diferente de la XP que otorga un monstruo?',
    answer: 'Las reglas multiplican la XP total de los monstruos para reflejar el peligro de varias criaturas actuando en el mismo asalto. La XP ajustada es un valor comparativo de dificultad, no la XP que reciben los personajes.',
  },
  {
    question: '¿Puedo usar esto para un grupo mixto de monstruos?',
    answer: 'Úsala como una estimación rápida para monstruos idénticos. Para grupos mixtos, suma la XP de cada criatura y aplica el multiplicador al número total de monstruos significativos.',
  },
  {
    question: '¿Un resultado mortal significa que el grupo morirá?',
    answer: 'No. Mortal significa que la XP ajustada alcanza el umbral mortal en las reglas. El terreno, las tácticas, los descansos, conjuros, objetos mágicos y decisiones pueden alterar el resultado real.',
  },
  {
    question: '¿Por qué el tamaño del grupo cambia el multiplicador?',
    answer: 'Las Reglas Básicas recomiendan aumentar el multiplicador para grupos de menos de tres personajes y reducirlo para grupos de seis o más, equilibrando la economía de acciones.',
  },
];

const howTo = [
  {
    name: 'Establece el nivel del grupo',
    text: 'Elige el nivel predominante de los personajes. Si los niveles varían mucho, toma el resultado como orientación y evalúa el nivel más bajo por separado.',
  },
  {
    name: 'Indica el tamaño del grupo',
    text: 'Introduce el número de personajes en el encuentro. Los grupos pequeños y grandes reciben un ajuste en el multiplicador.',
  },
  {
    name: 'Describe la amenaza',
    text: 'Selecciona el desafío (CR) y la cantidad de monstruos. Usa las plantillas predefinidas para una comprobación rápida.',
  },
  {
    name: 'Interpreta la presión',
    text: 'Compara la XP ajustada con las franjas de umbral y revisa las advertencias sobre economía de acciones, terreno y recursos antes del combate.',
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
  name: 'Calculadora de Dificultad de Encuentros D&D 5e',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Calcula la dificultad de encuentros para grupos de D&D 5e 2014 basándote en nivel, tamaño de grupo, desafío de monstruos (CR), cantidad, XP y umbrales oficiales.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo calcular la dificultad de un encuentro en D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'calculadora-dificultad-encuentros-dnd-5e',
  title: 'Calculadora de Dificultad de Encuentros D&D 5e',
  description: 'Estima la presión de encuentros en D&D 5e 2014 mediante nivel del grupo, tamaño, CR de monstruos, cantidad, XP ajustada y umbrales oficiales.',
  ui,
  seo: [
    { type: 'title', text: 'Analiza la dificultad del combate antes de tirar iniciativa', level: 2 },
    { type: 'paragraph', html: 'Un encuentro de D&D es más que el número impreso junto a un monstruo. Esta calculadora convierte el tamaño del grupo, nivel, desafío (CR) y número de monstruos en el valor de XP ajustada utilizado por el sistema oficial de D&D 5e 2014.' },
    { type: 'title', text: 'Cómo funciona la fórmula de encuentros de D&D 5e', level: 2 },
    { type: 'paragraph', html: 'El método suma el umbral de XP de cada personaje para cada nivel de dificultad. Luego suma la XP base de los monstruos y aplica un multiplicador según el número de criaturas. Los grupos de menos de tres personajes usan un multiplicador superior y los de seis o más usan uno inferior.' },
    {
      type: 'table',
      headers: ['Señal', 'Qué evaluar en la mesa'],
      rows: [
        ['Inferior a fácil', 'El encuentro puede ser un calentamiento, un evento de viaje o una escena de desgaste menor.'],
        ['Fácil', 'El grupo debería ganar sin gastar apenas recursos.'],
        ['Medio', 'Espera cierta presión y al menos una decisión importante sobre el uso de recursos.'],
        ['Difícil', 'Planifica que los personajes pierdan puntos de golpe, espacio de conjuros o posición.'],
        ['Mortal', 'Revisa tácticas, terreno, vías de escape y el impacto de un mal turno.'],
      ],
    },
    { type: 'title', text: 'Por qué importa la cantidad de monstruos', level: 2 },
    { type: 'paragraph', html: 'Varios monstruos crean más peligro del que indica su XP base porque aportan más ataques, reacciones y capacidad de concentrar el daño sobre un personaje. Por eso dos criaturas aplican un multiplicador mayor que una sola con la misma XP acumulada.' },
    { type: 'tip', title: 'Considera un CR alto como una alerta específica', html: 'Un monstruo cuyo CR supere el nivel del grupo puede dejar KO a un personaje en una sola acción potente. Revisa su daño, efectos de control y movilidad en lugar de confiar solo en la palabra de dificultad final.' },
    { type: 'title', text: 'Utiliza el resultado como guía de preparación', level: 2 },
    { type: 'paragraph', html: 'Antes de plantear un encuentro difícil o mortal, evalúa el contexto general. Habitaciones estrechas, coberturas, sorpresa, trampas ambientales y conjuros de concentración pueden modificar sustancialmente el peligro real.' },
    { type: 'tip', title: 'Los grupos mixtos requieren un ajuste manual', html: 'Esta calculadora mantiene un único CR para agilizar la entrada de datos. Si el combate incluye criaturas distintas, suma la XP base de cada una, aplica el multiplicador al total de monstruos y compáralo con los umbrales del grupo.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
