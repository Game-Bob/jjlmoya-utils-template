import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Ajuste o grupo e a ameaça. A calculadora mede o encontro com os limiares de D&D 5e 2014.',
  partySection: 'O grupo',
  partyLevel: 'Nível dos personagens',
  partyLevelHint: 'Use um nível médio para um grupo de nível similar.',
  partySize: 'Personagens',
  partySizeHint: 'As regras ajustam o multiplicador de monstros para grupos muito pequenos ou grandes.',
  threatSection: 'A ameaça',
  monsterCr: 'Nível de desafio (CR)',
  monsterCrHint: 'Escolha o CR de um monstro repetido. Grupos mistos exigem um cálculo separado.',
  moreCr: 'Mostrar mais CR',
  lessCr: 'Mostrar menos CR',
  monsterCount: 'Quantidade de monstros',
  monsterCountHint: 'Mais criaturas aumentam a pressão de ações mesmo com XP base modesto.',
  presets: 'Começar com uma cena',
  presetClassic: 'Patrulha clássica',
  presetBoss: 'Chefe solo',
  presetSwarm: 'Horda de lacaios',
  resultSection: 'Pressão do encontro',
  belowEasyHint: 'Uma cena leve que permite preservar recursos para desafios futuros.',
  easyHint: 'Uma cena acessível com pouca pressão sobre o grupo.',
  mediumHint: 'Um teste significativo que pode custar pontos de vida ou recursos.',
  hardHint: 'Uma cena perigosa onde a tática e a gestão de recursos importam.',
  deadlyHint: 'Sinal de pressão mortal. Verifique rotas de fuga, terreno e custos.',
  adjustedXp: 'XP Ajustado',
  baseXp: 'XP Base',
  multiplier: 'Multiplicador de grupo',
  partyThreshold: 'Limiar Médio',
  belowEasy: 'Abaixo de fácil',
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
  deadly: 'Mortal',
  warning: 'Atenção',
  partyAdjustment: 'O multiplicador foi ajustado porque o grupo tem menos de três ou mais de cinco personagens.',
  highCr: 'Um monstro com CR superior ao nível do grupo pode derrubar um personagem rapidamente.',
  manyMonsters: 'Onze ou mais monstros tornam o combate difícil de gerenciar.',
  rulesNote: 'Estimativa baseada nas regras de D&D 5e 2014. Não considera terreno ou táticas.',
  rulesLinkLabel: 'Ler as regras de origem',
  reset: 'Restaurar exemplo',
  xpUnit: 'XP',
  sceneLabel: 'Gráfico visual de pressão',
  partyMarker: 'Grupo',
  threatMarker: 'Ameaça',
};

const faq = [
  {
    question: 'Quais regras esta calculadora de dificuldade utiliza?',
    answer: 'Utiliza o método oficial de D&D 5e 2014 das Regras Básicas, comparando os limiares do grupo com o XP ajustado dos monstros.',
  },
  {
    question: 'Por que o XP ajustado difere do XP concedido pelo monstro?',
    answer: 'As regras multiplicam o XP total dos monstros para refletir o perigo de várias criaturas agindo no mesmo turno.',
  },
  {
    question: 'Posso usar isso para um grupo misto de monstros?',
    answer: 'Use como uma estimativa rápida para monstros idênticos. Para grupos mistos, some o XP de cada criatura e aplique o multiplicador.',
  },
  {
    question: 'Um resultado mortal significa que o grupo vai morrer?',
    answer: 'Não. Mortal significa que o XP ajustado atinge o limiar mortal nas regras. O terreno, táticas e magias podem alterar o resultado real.',
  },
  {
    question: 'Por que o tamanho do grupo altera o multiplicador?',
    answer: 'As Regras Básicas recomendam aumentar o multiplicador para grupos com menos de três personagens e reduzi-lo para seis ou mais.',
  },
];

const howTo = [
  {
    name: 'Defina o nível do grupo',
    text: 'Escolha o nível médio dos personagens do grupo.',
  },
  {
    name: 'Indique o tamanho do grupo',
    text: 'Insira a quantidade de personagens no combate.',
  },
  {
    name: 'Descreva a ameaça',
    text: 'Selecione o nível de desafio (CR) e a quantidade de monstros.',
  },
  {
    name: 'Interprete a pressão',
    text: 'Compare o XP ajustado com os limiares oficiais.',
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
  name: 'Calculadora de Dificuldade de Encontros D&D 5e',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Calcule a dificuldade de encontros para D&D 5e 2014 com base em nível, tamanho do grupo, CR de monstros, quantidade e limiares oficiais.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como calcular a dificuldade de um encontro em D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'calculadora-dificuldade-encontros-dnd-5e',
  title: 'Calculadora de Dificuldade de Encontros D&D 5e',
  description: 'Estime a pressão dos combates em D&D 5e 2014 por meio do nível do grupo, tamanho, CR de monstros, XP ajustado e limiares oficiais.',
  ui,
  seo: [
    { type: 'title', text: 'Analise a dificuldade do combate antes da iniciativa', level: 2 },
    { type: 'paragraph', html: 'Um encontro de D&D é mais do que o número impresso ao lado de um monstro. Esta calculadora transforma o tamanho do grupo, nível, CR e quantidade de monstros no valor de XP ajustado das regras D&D 5e 2014. O resultado visual mostra claramente onde o combate está posicionado em relação aos limiares fácil, médio, difícil e mortal.' },
    { type: 'title', text: 'Como funciona a fórmula de encontros de D&D 5e', level: 2 },
    { type: 'paragraph', html: 'O método soma o limiar de XP de cada personagem para cada nível de dificuldade, somando o XP base e aplicando o multiplicador correspondente. Grupos com menos de três personagens usam o multiplicador superior seguinte, enquanto grupos com seis ou mais usam o inferior.' },
    {
      type: 'table',
      headers: ['Sinal', 'O que avaliar na mesa'],
      rows: [
        ['Abaixo de fácil', 'O combate serve como aquecimento ou desgaste menor de recursos.'],
        ['Fácil', 'O grupo deve vencer sem gastar muitos recursos.'],
        ['Médio', 'Espere pressão moderada e ao menos uma decisão importante sobre recursos.'],
        ['Difícil', 'Planeje a perda de pontos de vida e espaços de magia.'],
        ['Mortal', 'Verifique táticas, terreno e rotas de fuga.'],
      ],
    },
    { type: 'title', text: 'Por que a quantidade de monstros é fundamental', level: 2 },
    { type: 'paragraph', html: 'Vários monstros criam mais perigo do que o XP base indica porque multiplicam ataques e reações no mesmo turno. É por isso que um par de criaturas usa um multiplicador mais alto do que uma única criatura com o mesmo XP combinado.' },
    { type: 'tip', title: 'Considere um CR alto como um alerta específico', html: 'Um monstro com CR superior ao nível do grupo pode derrubar um personagem em uma única ação potente. Inspecione seu dano e controle em vez de confiar apenas na palavra de dificuldade final.' },
    { type: 'title', text: 'Use o resultado como guia de preparação', level: 2 },
    { type: 'paragraph', html: 'Antes de propor um combate difícil ou mortal, avalie o terreno, surpresa e condições gerais do grupo. Salas estreitas, cobertura, armadilhas e magias de concentração podem alterar substancialmente o perigo real na mesa.' },
    { type: 'tip', title: 'Grupos de monstros mistos', html: 'Some o XP base de cada criatura e aplique o multiplicador correspondente ao total de monstros.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
