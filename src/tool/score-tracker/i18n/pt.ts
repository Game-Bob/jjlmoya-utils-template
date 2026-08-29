import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Contador de Pontos',
  addPlayer: 'Adicionar Jogador',
  removePlayer: 'Remover',
  renamePlayer: 'Renomear',
  startRound: 'Iniciar Rodada 1',
  nextRound: 'Próxima Rodada',
  resetGame: 'Reiniciar Jogo',
  undoRound: 'Desfazer Última Rodada',
  playerLabel: 'Jogador',
  scoreLabel: 'Pontos',
  roundLabel: 'Rodada',
  totalLabel: 'Total',
  rankLabel: 'Classificação',
  leaderboardTitle: 'Classificação',
  historyTitle: 'Histórico de Pontos',
  noPlayersHint: 'Adicione jogadores para começar a pontuar',
  playerNamePlaceholder: 'Nome do jogador',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  deleteRoundConfirm: 'Excluir a última rodada?',
  playerAdded: 'Jogador adicionado',
  playerRemoved: 'Jogador removido',
  roundStarted: 'Rodada iniciada',
  gameReset: 'O jogo foi reiniciado',
  noRoundsYet: 'Nenhuma rodada registrada ainda',
  currentRoundLabel: 'Rodada Atual',
  scoringTitle: 'Pontuação da Rodada',
  resetAllLabel: 'Reiniciar Tudo',
  confirmResetAll: 'Isso excluirá todos os jogadores e pontuações. Tem certeza?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'contador-de-pontos',
  title: 'Contador de Pontos: Marcador Multijogador e Gerenciador de Classificacao',
  description: 'Acompanhe as pontuações de qualquer jogo de tabuleiro. Adicione jogadores, registre pontuações rodada a rodada e veja a classificação ser atualizada em tempo real com ranqueamento automático.',
  ui,
  seo: [
    { type: 'title', text: 'Pontuação em Jogos de Tabuleiro: Como Registrar Pontos Sem Erros', level: 2 },
    { type: 'paragraph', html: 'Manter a pontuação em jogos de tabuleiro parece simples até você estar cinco rodadas dentro de um jogo e alguém perceber que contou errado. Quer você jogue Wingspan, Terraforming Mars, Catan ou qualquer jogo de pontos de vitória, a precisão na pontuação é a diferença entre um jogo justo e uma discussão. Um contador de pontos digital elimina erros aritméticos, mostra classificações ao vivo e mantém um histórico completo de cada rodada para que você possa verificar o total final.' },
    {
      type: 'stats',
      items: [
        { value: 'Ilimitados', label: 'Jogadores Suportados' },
        { value: 'Tempo Real', label: 'Atualizações da Classificação' },
        { value: 'Ilimitadas', label: 'Rodadas Registradas' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Erros Comuns na Pontuação e Como Evitá-los', level: 2 },
    { type: 'paragraph', html: 'O erro mais frequente é esquecer de adicionar bônus de fim de rodada ou errar a soma de uma coluna de números. Quando você acompanha as pontuações digitalmente, o total em execução é atualizado automaticamente após cada entrada. Isso significa que você pode perceber um erro no momento em que um número parece estranho, em vez de descobri-lo no final do jogo quando ninguém se lembra do valor correto. O recurso de histórico de rodadas permite auditar qualquer rodada anterior e corrigir erros sem reiniciar o jogo inteiro.' },
    {
      type: 'tip',
      title: 'Dicas Rápidas para Pontuação',
      html: 'Insira as pontuações imediatamente após cada rodada enquanto todos ainda se lembram dos resultados. Use rótulos descritivos como cores ou nomes de facções em vez de nomes reais para jogos com papéis ocultos. Ao jogar com crianças, deixe-as apertar os botões para mantê-las envolvidas no processo de pontuação.',
    },
    {
      type: 'title',
      text: 'Pontuação por Rodada vs Apenas Total Final',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Pontos por Rodada vs Apenas Pontuação Final',
      items: [
        {
          pro: 'Você pode ver quem liderou em cada etapa do jogo e como o momentum mudou.',
          con: 'Requer inserir dados após cada rodada em vez de uma única vez no final.',
        },
        {
          pro: 'Erros são fáceis de localizar porque você pode verificar as entradas individuais de cada rodada com a memória.',
          con: 'Requer um pouco mais de tempo durante a sessão de jogo.',
        },
        {
          pro: 'Os jogadores podem verificar suas próprias pontuações de rodada, reduzindo disputas e construindo confiança.',
          con: 'Funciona melhor quando uma pessoa gerencia o dispositivo ou os jogadores se revezam.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jogos com Sistemas de Pontuação Incomuns',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Jogos de Pontos de Vitória',
          description: 'A maioria dos eurogames usa pontos de vitória concedidos ao longo do jogo. O desafio é acompanhar múltiplas fontes de PV: recursos, conquistas, bônus de final de jogo. Um rastreador digital permite inserir pontos conforme eles aparecem e ver o total em execução.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Acompanhe várias categorias de pontuação',
            'Cálculos de bônus de final de jogo',
            'Resolução instantânea de empates',
          ],
        },
        {
          title: 'Jogos com Pontuação Negativa',
          description: 'Alguns jogos penalizam jogadores com pontos negativos por certas ações. Um contador digital lida com valores negativos naturalmente, colorindo-os em vermelho para que a penalidade fique imediatamente visível. Isso é especialmente útil em jogos de vaza ou jogos de dedução com mecânicas de penalidade.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Manipulação automática de negativos',
            'Indicadores visuais de penalidade',
            'Totais acumulados precisos',
          ],
        },
        {
          title: 'Jogos de Campanha',
          description: 'Jogos legacy e de campanha carregam pontuações entre várias sessões. Sem um rastreador, você precisa manter anotações em papel entre as noites de jogo. Uma ferramenta digital mantém suas pontuações de campanha organizadas e permite revisar como suas decisões afetaram a classificação geral.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Rastreamento persistente de campanha',
            'Comparação entre sessões',
            'Detalhamento sessão por sessão',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossário de Pontuação',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Pontos de Vitória (PV)',
          definition: 'A unidade de pontuação padrão na maioria dos jogos de tabuleiro modernos. Os jogadores ganham PV através de ações, e quem tiver mais PV quando o jogo terminar vence.',
        },
        {
          term: 'Pontuação por Rodada',
          definition: 'Registrar as pontuações no final de cada rodada em vez de apenas no final do jogo. Isso cria um histórico detalhado e facilita a verificação de erros.',
        },
        {
          term: 'Classificação',
          definition: 'Um ranking ao vivo que mostra a posição de cada jogador com base na pontuação total. A classificação se reordena automaticamente à medida que novas pontuações são inseridas.',
        },
        {
          term: 'Pontuação Negativa',
          definition: 'Um sistema de pontuação onde os jogadores podem perder pontos através de penalidades ou ações falhas, resultando em totais negativos. Um rastreador digital lida com isso sem erros de subtração manual.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Como Lidar com Pontuações Contestadas',
      icon: 'mdi:information-outline',
      badge: 'DICA DE JOGO',
      html: 'Quando um jogador contestar uma pontuação, não a altere imediatamente. Primeiro verifique o histórico de rodadas para confirmar o que foi inserido. Se a entrada estiver errada, use os botões +/- para corrigi-la e o total será atualizado automaticamente. Se a entrada da rodada estiver correta mas o jogador discordar, o histórico fornece um registro objetivo que todos podem revisar juntos.',
    },
  ],
  faq: [
    {
      question: 'Quantos jogadores posso acompanhar?',
      answer: 'Não há limite. Adicione quantos jogadores seu jogo suportar e renomeie-os a qualquer momento durante a sessão.',
    },
    {
      question: 'Posso desfazer um erro?',
      answer: 'Sim. Use o botão Desfazer Última Rodada para remover a rodada de pontuação mais recente, o que recalculará automaticamente todos os totais e classificações.',
    },
    {
      question: 'O contador de pontos salva meus dados?',
      answer: 'O contador de pontos funciona inteiramente no seu navegador. Os dados persistem durante a sessão atual. Atualizar a página redefinirá todas as pontuações.',
    },
    {
      question: 'Como funciona a classificação?',
      answer: 'A classificação ordena os jogadores por pontuação total em ordem decrescente. Os rankings são atualizados automaticamente conforme você insere ou modifica as pontuações em cada rodada.',
    },
    {
      question: 'Posso registrar pontuações negativas?',
      answer: 'Sim. Os botões +/- permitem ajustes positivos e negativos, tornando-o adequado para jogos com pontos de penalidade ou mecânicas de dedução.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Adicionar Jogadores',
      text: 'Insira os nomes dos jogadores usando o campo Adicionar Jogador. Você pode adicionar ou remover jogadores a qualquer momento durante o jogo.',
    },
    {
      name: 'Começar a Pontuar',
      text: 'Clique em Iniciar Rodada para começar uma nova rodada de pontuação. Use os botões +/- para ajustar a pontuação de cada jogador naquela rodada.',
    },
    {
      name: 'Ver Classificações',
      text: 'A classificação é atualizada automaticamente. Navegue pela aba Histórico de Pontos para revisar as entradas de rodadas anteriores.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Contador de Pontos & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quantos jogadores posso acompanhar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não há limite. Adicione quantos jogadores seu jogo suportar e renomeie-os a qualquer momento durante a sessão.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso desfazer um erro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. Use o botão Desfazer Última Rodada para remover a rodada de pontuação mais recente, o que recalculará automaticamente todos os totais e classificações.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O contador de pontos salva meus dados?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O contador de pontos funciona inteiramente no seu navegador. Os dados persistem durante a sessão atual. Atualizar a página redefinirá todas as pontuações.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Como funciona a classificação?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A classificação ordena os jogadores por pontuação total em ordem decrescente. Os rankings são atualizados automaticamente conforme você insere ou modifica as pontuações em cada rodada.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso registrar pontuações negativas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. Os botões +/- permitem ajustes positivos e negativos, tornando-o adequado para jogos com pontos de penalidade ou mecânicas de dedução.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Usar o Contador de Pontos',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Adicionar Jogadores',
          'text': 'Insira os nomes dos jogadores usando o campo Adicionar Jogador. Você pode adicionar ou remover jogadores a qualquer momento durante o jogo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Começar a Pontuar',
          'text': 'Clique em Iniciar Rodada para começar uma nova rodada de pontuação. Use os botões +/- para ajustar a pontuação de cada jogador naquela rodada.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ver Classificações',
          'text': 'A classificação é atualizada automaticamente. Navegue pela aba Histórico de Pontos para revisar as entradas de rodadas anteriores.',
        },
      ],
    },
  ],
};
