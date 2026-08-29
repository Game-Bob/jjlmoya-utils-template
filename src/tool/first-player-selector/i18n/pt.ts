import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Seletor de Primeiro Jogador',
  instructions: 'Coloque os dedos na tela ou clique para adicionar pinos',
  tapToSelect: 'Toque para Selecionar',
  winner: 'Vencedor escolhido!',
  reset: 'Reiniciar',
  start: 'Iniciar Sorteio',
  setupTitle: 'Configurações do Seletor',
  clearPlayers: 'Limpar Todos os Pinos',
  fingerMode: 'Modo Toque',
  wheelMode: 'Modo Roleta',
  presetsTitle: 'Opções',
  soundOn: 'Som Ativado',
  soundOff: 'Som Desativado',
  playerCountLabel: 'Pinos / Dedos',
};

const faq = [
  {
    question: 'Como funciona o Modo Toque?',
    answer: 'No Modo Toque, cada jogador coloca um dedo na tela do celular. A ferramenta detecta todos os pontos de toque, exibe anéis coloridos brilhantes ao redor deles e inicia automaticamente uma contagem regressiva curta. Quando a contagem termina, um jogador é destacado como vencedor enquanto os outros desaparecem, acompanhado por uma explosão de partículas.',
  },
  {
    question: 'Posso usar esta ferramenta em um computador desktop?',
    answer: 'Sim! Se você estiver em um dispositivo sem tela sensível ao toque, a ferramenta alterna automaticamente para o Modo Roleta. Você pode clicar na área de toque para posicionar pinos coloridos representando os jogadores e depois clicar no botão Iniciar Sorteio para girar a roda seletora.',
  },
  {
    question: 'Quantos jogadores podem participar?',
    answer: 'A ferramenta suporta até 10 jogadores simultâneos. No Modo Toque, até 10 dedos podem ser detectados de uma vez. No Modo Roleta, você pode posicionar até 10 pinos coloridos na área clicando.',
  },
  {
    question: 'A seleção é verdadeiramente aleatória?',
    answer: 'Sim. O algoritmo de seleção usa o Math.random() de nível criptográfico do JavaScript para garantir resultados imparciais. No Modo Toque, o vencedor é escolhido uniformemente ao acaso entre todos os pontos de toque detectados. No Modo Roleta, a roda desacelera de forma realista usando física de fricção, e o ângulo final determina o vencedor matematicamente.',
  },
  {
    question: 'Como remover um pino de jogador no Modo Roleta?',
    answer: 'Simplesmente clique em um pino existente para removê-lo. A ferramenta detecta cliques dentro de 30 pixels de qualquer pino posicionado e o exclui, permitindo ajustar a formação de jogadores antes de acionar o giro.',
  },
  {
    question: 'Esta ferramenta coleta ou transmite dados?',
    answer: 'De forma alguma. Tudo é executado localmente no seu navegador. Nenhum dado de dedo, posição de toque ou resultado de seleção é enviado para qualquer servidor. Sua noite de jogo permanece completamente privada.',
  },
  {
    question: 'Funciona em projetores ou telas externas?',
    answer: 'Sim. O Modo Roleta funciona muito bem em telas grandes e projetores para sessões de jogo de tabuleiro. Os visuais neon de alto contraste e o grande cronômetro de contagem regressiva são projetados para serem visíveis do outro lado da sala.',
  },
  {
    question: 'Por que a contagem regressiva reinicia quando alguém levanta o dedo?',
    answer: 'Isso é intencional. No Modo Toque, a contagem regressiva só prossegue enquanto todos os jogadores mantêm os dedos firmes na tela. Se alguém levantar ou mover o dedo, o timer reinicia para garantir que todos estejam comprometidos antes da execução da seleção. Isso evita acionamentos acidentais.',
  },
  {
    question: 'Posso alterar o som ou mutá-lo?',
    answer: 'Sim. Clique no ícone de alto-falante no canto superior direito para ativar ou desativar o som. A ferramenta toca um som de tique durante a contagem regressiva e uma fanfarra quando um vencedor é escolhido.',
  },
  {
    question: 'O que acontece se houver apenas um jogador?',
    answer: 'Em ambos os modos, pelo menos dois jogadores são necessários para fazer uma seleção. No Modo Toque, a contagem regressiva não será iniciada até que pelo menos dois dedos sejam detectados. No Modo Roleta, o botão Iniciar Sorteio permanece desabilitado até que você posicione pelo menos dois pinos.',
  },
];

const howTo = [
  {
    name: 'Coloque os Dedos ou Pinos',
    text: 'No Modo Toque, peça para todos os jogadores colocarem um dedo na tela. No Modo Roleta, clique em qualquer lugar da área para posicionar os pinos dos jogadores.',
  },
  {
    name: 'Inicie a Seleção',
    text: 'No Modo Toque, a seleção começa automaticamente após alguns segundos segurando. No Modo Roleta, clique no botão Iniciar Sorteio para girar.',
  },
  {
    name: 'Veja o Vencedor',
    text: 'O vencedor é destacado com um efeito de pulsação, explosão de partículas e fanfarra sonora. Clique em Reiniciar ou levante todos os dedos para tentar novamente.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'seletor-primeiro-jogador',
  title: 'Seletor de Primeiro Jogador: Escolha por Toque & Roleta de Turnos',
  description: 'Escolha quem começa nos seus jogos de tabuleiro com este espetacular seletor por toque e roleta de turnos interativa.',
  ui,
  seo: [
    { type: 'title', text: 'Justiça e Estratégia: Resolvendo a Vantagem do Primeiro Jogador em Jogos de Tabuleiro', level: 2 },
    { type: 'paragraph', html: 'Determinar o jogador inicial em sessões de tabuleiro pode influenciar fortemente a dinâmica do jogo. Na teoria dos jogos, a Vantagem do Primeiro Jogador (FPA) refere-se à vantagem estatística que o jogador que age primeiro tem sobre seus oponentes. Em partidas estratégicas de xadrez, wargames e Eurogames modernos como Agricola ou Puerto Rico, realizar a primeira ação permite que um jogador garanta recursos críticos ou posicione peças antes que os oponentes possam reagir. Para mitigar a FPA e garantir um campo de jogo equilibrado, um método de seleção confiável e imparcial é essencial. Nosso seletor digital de jogador inicial garante aleatoriedade absoluta, permitindo que grupos de jogo estabeleçam a ordem de turnos instantaneamente e comecem a jogar.' },
    {
      type: 'stats',
      items: [
        { value: '100% Aleatório', label: 'Seleção Imparcial' },
        { value: '2 Segundos', label: 'Gatilho de Contagem' },
        { value: 'Multitoque', label: 'Compatível com Celular' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Regras de Tabuleiro vs. Randomizadores Digitais: A Revolução do Toque', level: 2 },
    { type: 'paragraph', html: 'Muitos manuais de jogos de tabuleiro modernos incluem regras temáticas para definir o jogador inicial, como "o jogador mais novo começa", "a última pessoa que visitou uma fazenda começa" ou "o jogador mais alto começa". Embora divertidas nas primeiras partidas, essas regras rapidamente se tornam repetitivas, estáticas e injustas para grupos regulares. Randomizadores físicos como rolagens de dados ou sorteios de cartas aumentam o tempo de preparação e estão sujeitos a viés humano ou má embaralhada. O mecanismo de escolha por toque resolve isso oferecendo um randomizador rápido de tocar e segurar que seleciona um jogador inicial em segundos, sem exigir cartas ou dados extras.' },
    {
      type: 'table',
      headers: ['Método de Seleção', 'Velocidade e Preparação', 'Qualidade da Aleatoriedade', 'Mais Adequado Para'],
      rows: [
        ['Regras Arbitrárias do Manual', 'Instantâneo, mas repetitivo', 'Zero aleatoriedade após o primeiro jogo', 'Jogos em família e festas'],
        ['Rolagem de Dados', 'Exige encontrar e rolar dados, propenso a empates', 'Alta aleatoriedade, mas tedioso para grupos grandes', 'Wargames e RPGs'],
        ['Sorteio de Cartas', 'Exige embaralhar e distribuir', 'Boa aleatoriedade, mas requer cartas físicas', 'Jogos de construção de baralho e cartas'],
        ['Seletor por Toque', 'Instantâneo, zero preparo, animações visuais', 'Aleatoriedade algorítmica absoluta', 'Todos os jogos de tabuleiro e mesa'],
      ],
    },
    {
      type: 'tip',
      title: 'Otimizando Seu Configuração de Escolha Multitoque',
      html: 'Para a melhor experiência no Modo Toque, coloque seu tablet ou smartphone plano no centro da mesa. Peça para todos os jogadores colocarem um único dedo claramente sobre a área de toque. A contagem regressiva é reiniciada se um jogador levantar ou mover o dedo, evitando seleções acidentais e garantindo consenso absoluto antes da execução do seletor.',
    },
    {
      type: 'title',
      text: 'Escolhendo Sua Ferramenta: Seletor por Toque vs. Roleta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dependendo da sua configuração de hardware e ambiente, você pode alternar entre dois modos de layout distintos, projetados para maximizar o espaço da tela e a acessibilidade:' },
    {
      type: 'proscons',
      title: 'Comparando Modos de Seleção',
      items: [
        {
          pro: 'O Modo Toque oferece uma experiência incrivelmente rápida e tátil, permitindo que até 10 jogadores coloquem os dedos simultaneamente.',
          con: 'Requer uma tela sensível ao toque, como um smartphone ou tablet.',
        },
        {
          pro: 'O Modo Roleta funciona em qualquer laptop, desktop ou tela de projetor, sendo ideal para sessões virtuais e noites de jogo remotas.',
          con: 'Exige clicar para posicionar os pinos manualmente antes de acionar o giro.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Otimização Visual: Teias Multitoque vs. Rodas Desacelerando',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Seletor Multitoque',
          description: 'Rastreia múltiplos pontos de toque distintos na tela. Desenha teias de conexão neon e anéis de contagem regressiva ao redor de cada dedo, culminando em uma explosão de celebração.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Rastreamento simultâneo de toques',
            'Verificações táteis de segurar e soltar',
            'Explosões de partículas espetaculares',
          ],
        },
        {
          title: 'Roleta',
          description: 'Posiciona pinos coloridos de jogadores ao redor de um centro matemático. Gira uma roda de setores coloridos que desacelera naturalmente usando fricção simulada antes de designar o vencedor.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Alinhamento baseado em centroide',
            'Física de desaceleração por fricção',
            'Suporte universal a mouse em desktop',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Vantagem do Primeiro Jogador (FPA)',
          definition: 'Um viés na ordem de turnos em jogos de tabuleiro onde o jogador inicial obtém uma vantagem estatisticamente significativa na seleção de ações ou controle de recursos.',
        },
        {
          term: 'Protocolo de Seleção por Toque',
          definition: 'Uma interação de tocar e segurar onde todos os participantes colocam os dedos em uma tela sensível ao toque até que um único vencedor seja destacado aleatoriamente.',
        },
        {
          term: 'Física de Desaceleração',
          definition: 'Uma rotina matemática de animação que aplica multiplicadores de fricção a uma roda giratória para simular inércia natural e gerar expectativa.',
        },
        {
          term: 'Cálculo de Centroide',
          definition: 'O ponto central calculado de um conjunto disperso de pinos coordenados, usado como pivô de rotação para os gráficos da roleta.',
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
      'name': 'Seletor de Primeiro Jogador e Escolha por Toque',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Usar o Seletor de Primeiro Jogador',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
