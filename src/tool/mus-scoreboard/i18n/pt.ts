import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Dê um nome a cada dupla, defina as regras da mesa e toque nas pedras ao contar os pontos de cada rodada.',
  pairOneLabel: 'Dupla um',
  pairTwoLabel: 'Dupla dois',
  pairOneDefault: 'Mesa Norte',
  pairTwoDefault: 'Mesa Sul',
  targetPointsLabel: 'Pontos limite por jogo',
  targetPointsHint: 'Escolha o limite de pontos para cada jogo (30, 40 ou 50 pontos).',
  gamesToWinLabel: 'Jogos para vencer a vaca',
  gamesToWinHint: 'A primeira dupla a atingir este número vence a partida.',
  deckLabel: 'Baralho da mesa',
  deckHint: 'O baralho espanhol (Baraja española) de 40 cartas é a escolha tradicional. Para baralho francês, remova 8, 9 e 10.',
  spanishDeck: 'Baraja española (Baralho espanhol)',
  frenchDeck: 'Baralho francês',
  frenchDeckNotice: 'Lembre-se de retirar os 8, 9 e 10 do baralho francês para jogar com 40 cartas. Valetes correspondem a Sotas, Damas a Caballos e Reis a Reyes.',
  pointsOption30: '30 pontos',
  pointsOption40: '40 pontos',
  pointsOption50: '50 pontos',
  gamesOption1: '1 jogo',
  gamesOption2: '2 jogos',
  gamesOption3: '3 jogos',
  startMatch: 'Abrir marcador',
  matchSettings: 'Configurar duplas e regras',
  liveMatch: 'Partida em direto',
  targetLabel: 'pontos por jogo',
  gameLabel: 'jogo',
  gamePlural: 'jogos',
  vacaLabel: 'jogos para vencer',
  scoreLabel: 'Pedras atuais',
  handLabel: 'Escolha qual dupla é a mão (Mano)',
  handSelected: 'é a mão (Mano).',
  stonesLabel: 'Marcador de pontos',
  stoneSingular: 'pedra (piedra)',
  stonePlural: 'pedras (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'pontos para vencer',
  addStone: 'pedra',
  addAmarraco: 'amarraco',
  closeGame: 'Fechar jogo',
  closeGamePrompt: 'Confirmar que esta dupla venceu o jogo e iniciar o próximo?',
  confirmationTitle: 'Confirmar ação na mesa',
  confirmAction: 'Confirmar',
  cancelAction: 'Continuar a jogar',
  undo: 'Anular',
  resetMatch: 'Reiniciar partida',
  resetMatchPrompt: 'Reiniciar a partida atual e apagar o histórico de pontos?',
  historyTitle: 'Últimas anotações',
  noHistory: 'Sem registos até ao momento.',
  matchReady: 'A mesa está pronta.',
  closeGameHint: 'Uma dupla atingiu o limite de pontos. Confirme o vencedor do jogo.',
  waitingForScore: 'Continue a contar. Pontos restantes para os líderes:',
  gameWon: 'Jogo concluído.',
  vacaWon: 'Vaca vencida! Inicie uma nova partida quando a mesa estiver pronta.',
  gameClosed: 'fechou o jogo.',
  pointsAdded: 'obteve',
  matchSaved: 'Pontuação guardada neste dispositivo.',
  lastAction: 'Última ação',
  settingsApplied: 'Novas regras aplicadas. Partida reiniciada.',
  pairNameRequired: 'Introduza um nome para ambas as duplas antes de abrir o marcador.',
  visualScoreLabel: 'Marcador digital para o jogo de cartas Mus com pedras e amarracos',
};

const faq = [
  {
    question: 'O que regista este marcador de Mus online?',
    answer: 'Regista as duas duplas, as pedras (pontos individuais), os amarracos (blocos de 5 pontos), os jogos vencidos (chicos), a vaca geral, quem tem a mão (Mano) e o histórico de pontos.',
  },
  {
    question: 'Por que motivo as pedras e os amarracos surgem separados?',
    answer: 'Uma pedra (Piedra) vale 1 ponto e um Amarraco equivale a 5 pedras. A exibição separada facilita a comparação direta com fichas ou feijões na mesa.',
  },
  {
    question: 'É possível jogar a 30, 40 ou 50 pontos?',
    answer: 'Sim. Pode selecionar 30, 40 ou 50 pontos por jogo antes de abrir o marcador.',
  },
  {
    question: 'Como fechar um jogo concluído?',
    answer: 'Quando uma dupla atinge o limite de pontos, o botão de fechar fica ativo. Após a confirmação, é somado 1 jogo e as pedras voltam a zero.',
  },
  {
    question: 'Os dados permanecem guardados ao recarregar a página?',
    answer: 'Sim. As configurações, nomes, pedras e jogos vencidos ficam salvos no navegador do dispositivo.',
  },
  {
    question: 'O marcador impõe regras locais do Mus?',
    answer: 'Não. O Mus possui várias variantes regionais. Este marcador concentra-se em registar os pontos com precisão, deixando os sinais para os jogadores.',
  },
  {
    question: 'Como adaptar um baralho francês para jogar Mus?',
    answer: 'Retire os 8, 9 e 10 do baralho francês para ficar com 40 cartas. Valetes funcionam como Sotas, Damas como Caballos e Reis como Reyes.',
  },
];

const howTo = [
  {
    name: 'Introduza os nomes das duplas',
    text: 'Escreva os nomes das duas duplas para as identificar claramente na mesa.',
  },
  {
    name: 'Defina a meta e a vaca',
    text: 'Escolha 30, 40 ou 50 pontos por jogo e o número de jogos necessários para vencer a vaca.',
  },
  {
    name: 'Conte pedras e amarracos',
    text: 'Prima pedra (+1) ou amarraco (+5) à medida que os pontos são contados.',
  },
  {
    name: 'Confirme a vitória do jogo',
    text: 'Ao atingir o limite, confirme a vitória para registar o jogo e reiniciar as pedras.',
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
  description: 'Marcador digital rápido para o jogo tradicional espanhol Mus.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como contar pontos no jogo de cartas Mus',
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
  slug: 'marcador-de-mus-online',
  title: 'Marcador de Mus Online para Partidas em Direto',
  description: 'Registe pedras, amarracos, jogos e vacas no jogo tradicional de cartas Mus. Para baralho espanhol ou francês com salvamento local.',
  ui,
  seo: [
    { type: 'title', text: 'Registo de Pontos Claro e Rápido para a Sua Mesa de Mus', level: 2 },
    { type: 'paragraph', html: 'O Mus é um jogo tradicional espanhol repleto de dinâmica, emoção, estratégia e bluff. Como os pontos são contados rapidamente no final de cada fase (Grande, Chica, Pares, Juego, Punto), este marcador digital evita dúvidas e discussões na mesa.' },
    { type: 'title', text: 'Defina a Meta de Pontos Antes de Dar as Cartas', level: 2 },
    { type: 'paragraph', html: 'Apesar de a norma ser jogar a 40 pontos, algumas mesas preferem 30 ou 50 pontos. Defina a meta antes de distribuir as cartas para alinhar o marcador e os botões de fecho de jogo com a sua mesa.' },
    {
      type: 'table',
      headers: ['Opção', 'Efeito', 'Recomendado para'],
      rows: [
        ['30 pontos', 'Jogo curto', 'Partidas rápidas, torneios relâmpago ou regras locais da casa'],
        ['40 pontos', 'Jogo padrão', 'O formato clássico tradicional entre amigos'],
        ['50 pontos', 'Jogo longo', 'Partidas com maior margem estratégica e profundidade de jogo'],
      ],
    },
    { type: 'tip', title: 'Confirme as Regras da Mesa em Voz Alta', html: 'Combine antecipadamente se jogam com a regra de 8 Reis e 8 Ás (onde 3 valem Reis e 2 valem Ás) e quem fica encarregado das fichas ou feijões físicos.' },
    { type: 'title', text: 'Adaptação de Baralho Espanhol e Francês', level: 2 },
    { type: 'paragraph', html: 'O baralho espanhol tradicional de 40 cartas (Oros, Copas, Espadas, Bastos) é a referência original do Mus. Com um baralho francês, basta retirar os 8, 9 e 10. Valetes são Sotas, Damas são Caballos e Reis são Reyes.' },
    { type: 'title', text: 'Contagem de Pontos Digital ao Lado da Mesa', level: 2 },
    { type: 'paragraph', html: 'O número principal exibe o total de pontos de forma legível. A linha inferior converte automaticamente esse valor em amarracos (blocos de 5) e pedras soltas para verificação rápida.' },
    { type: 'list', items: ['<strong>Pedra (Piedra):</strong> 1 ponto individual na contagem da partida.', '<strong>Amarraco:</strong> 1 ficha ou bloco equivalente a 5 pedras.', '<strong>Jogo (Chico):</strong> Rodada ganha ao atingir a meta acordada.', '<strong>Vaca:</strong> Vitória final na partida após obter o número de jogos fixado.'] },
    { type: 'title', text: 'Encerramento de Jogo e Correção de Erros', level: 2 },
    { type: 'paragraph', html: 'Quando a meta é atingida, o botão de encerramento ativa-se com confirmação deliberada. Se pontuar incorretamente por lapso, o botão Anular reverte a última ação instantaneamente.' },
    { type: 'tip', title: 'Utilize o Botão Anular em Caso de Engano', html: 'Se atribuir um ponto à dupla errada, prima imediatamente Anular para corrigir o resultado sem perturbar o histórico da jogada.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
