import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Temporizador de Jogos de Tabuleiro',
  setupTitle: 'Configuração do Jogo',
  playerNamePlaceholder: 'Nome do jogador',
  addPlayer: 'Adicionar Jogador',
  removePlayer: 'Remover',
  startGame: 'Iniciar Jogo',
  pauseGame: 'Pausar',
  resumeGame: 'Retomar',
  resetGame: 'Reiniciar',
  nextTurn: 'Fim do Turno',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Jogador',
  minutesLabel: 'min',
  secondsLabel: 'seg',
  expiredLabel: 'TEMPO ESGOTADO',
  overtimeLabel: 'Tempo extra',
  turnIndicator: 'Seu Turno',
  warningLowTime: 'Pouco tempo',
  pausedOverlay: 'Jogo Pausado',
  roundLabel: 'Rodada',
  settingsTitle: 'Ajustes',
  baseTimeLabel: 'Tempo base',
  incrementLabel: 'Incremento/Atraso',
  warningTimeLabel: 'Limite de aviso',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  noPlayersHint: 'Adicione pelo menos 2 jogadores para começar',
  addPlayerHint: 'Digite o nome do jogador',
  timeUpLabel: 'O tempo acabou!',
  presetsTitle: 'Predefinições',
  timeControlTitle: 'Controle de Tempo',
  modeLabel: 'Modo',
  modeNormal: 'Contagem decrescente normal',
  modeFischer: 'Fischer (Incremento)',
  modeBronstein: 'Bronstein (Atraso)',
  modeHourglass: 'Ampulheta',
  modeTurn: 'Reinício de Turno',
  audioTitle: 'Alertas de Áudio',
  soundAlerts: 'Efeitos Sonoros',
  playersTitle: 'Jogadores',
  playersAdded: 'Jogadores Adicionados',
  statsTitle: 'Estatísticas do Jogo',
  totalGameTime: 'Tempo Total',
  totalRounds: 'Rodadas Totais',
  slowestPlayer: 'Jogador mais lento',
  playerPerformance: 'Análise de Tempo dos Jogadores',
  playAgain: 'Novo Jogo',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'temporizador-jogos-tabuleiro-relogio',
  title: 'Temporizador de Jogos de Tabuleiro: Relógio de Xadrez & Gestão de Turnos',
  description: 'Acompanhe turnos e gira o tempo nas suas partidas com um temporizador profissional. Suporta relógio de xadrez, multijogador, incremento Fischer e atraso Bronstein.',
  ui,
  seo: [
    { type: 'title', text: 'Dominando o Ritmo de Jogo: Como Controles de Tempo Profissionais Melhoram Partidas de Tabuleiro', level: 2 },
    { type: 'paragraph', html: 'A gestão do tempo é um elemento vital nos jogos de tabuleiro modernos. Seja numa partida rápida ou num jogo de estratégia complexo, limitar o tempo de reflexão assegura que todos tenham uma participação justa. O uso de métodos profissionais como o incremento Fischer, atraso Bronstein ou modo Ampulheta elimina a paralisia por análise, garante a fluidez do ritmo de jogo e adiciona uma dimensão tática adicional ao tabuleiro.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Jogadores Suportados' },
        { value: '5 Modos', label: 'Configurações de Tempo' },
        { value: '100ms', label: 'Precisão do Motor' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein e Ampulheta: Explicação dos Controles de Tempo Avançados', level: 2 },
    { type: 'paragraph', html: 'Nosso temporizador para jogos de tabuleiro suporta múltiplas opções de cronometragem inspiradas em torneios competitivos, mantendo as suas sessões fluidas:' },
    {
      type: 'table',
      headers: ['Modo', 'Como funciona', 'Ideal para'],
      rows: [
        ['Contagem decrescente normal', 'Um temporizador padrão que desconta tempo e pausa no fim do turno.', 'Jogos casuais com uma reserva comum de tempo'],
        ['Fischer (Incremento)', 'Adiciona uma quantidade fixa de segundos ao seu relógio após terminar o turno.', 'Jogos de estratégia e wargames onde jogar rápido cria reserva de tempo'],
        ['Bronstein (Atraso)', 'Oferece um tempo de tolerância antes de o temporizador principal começar a contar.', 'Jogos táticos complexos onde turnos administrativos curtos devem ser gratuitos'],
        ['Ampulheta', 'O seu tempo diminui enquanto o tempo do oponente aumenta simultaneamente.', 'Duelos competitivos intensos a dois jogadores e xadrez'],
        ['Reinício de Turno', 'Um temporizador fixo que se reinicia por completo no início de cada turno.', 'Jogos de festa rápidos, perguntas e respostas, ou rodadas rápidas'],
      ],
    },
    {
      type: 'tip',
      title: 'Encontrando a Configuração de Tempo Ideal',
      html: 'Um ponto de partida recomendado é alocar 30-45 segundos para jogos de festa rápidos, 1-2 minutos com um atraso Bronstein de 5 segundos para eurogames médios, e 30-45 minutos com um incremento Fischer de 10 segundos para wargames pesados ou campanhas de estratégia.',
    },
    {
      type: 'title',
      text: 'Otimização Visual: Ecran Dividido para Duelos vs Botão Central de Turno Multijogador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para duelos cara a cara, a aplicação apresenta uma interface de relógio de xadrez em ecran dividido. Esta visualização permite rodar as metades do ecran em 180 graus, facilitando a leitura de lados opostos da mesa. Para jogos com 3 ou mais participantes, a interface muda para uma grelha multijogador com destaques no jogador ativo, ajustes individuais em cartões e um grande botão central Fim do Turno que funciona como sinalizador físico partilhado no meio da área de jogo.',
    },
    {
      type: 'proscons',
      title: 'Comparando Incremento Fischer vs Atraso Bronstein',
      items: [
        {
          pro: 'O incremento Fischer recompensa a rapidez acumulando reserva de tempo para turnos futuros.',
          con: 'O tempo total de jogo pode prolongar-se se os jogadores realizarem turnos extremamente rápidos constantemente.',
        },
        {
          pro: 'O atraso Bronstein evita perder tempo em ações de gestão curtas sem acumular reservas massivas.',
          con: 'Exige configurar um limite de atraso apropriado que combine com o tempo de gestão física do jogo.',
        },
        {
          pro: 'A ampulheta cria tensão direta em duelos competitivos ao drenar o seu tempo para abastecer o oponente.',
          con: 'Torna-se matematicamente complexo e menos estratégico em jogos com mais de dois jogadores.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Géneros de Jogos de Tabuleiro que Beneficiam de Temporizadores',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Eurogames Estratégicos',
          description: 'Jogos de alocação de trabalhadores e gestão de recursos onde turnos variam em complexidade. O incremento Fischer ajuda a tomar decisões críticas no final do jogo sem abrandar as rodadas iniciais.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Mitiga a paralisia por análise',
            'Suporte a complexidade de turnos variável',
            'O tempo torna-se um recurso ativo',
          ],
        },
        {
          title: 'Jogos de Festa & Trivia',
          description: 'Jogos de alta energia onde pensar rápido é parte da diversão. Temporizadores fixos de reinício de turno mantêm a energia alta e evitam bloqueios por um único jogador.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Contagens decrescentes curtas e fixas',
            'Mantém o ritmo da festa',
            'Força decisões imediatas',
          ],
        },
        {
          title: 'Partidas Competitivas em Duelo',
          description: 'Duelos estritos de relógio de xadrez exigem layouts precisos e rotativos para assegurar a integridade competitiva em todas as rodadas do torneio.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            'Rotação de ecran de 180 graus',
            'Acompanhamento de intervalos preciso de 100ms',
            'Estados de morte súbita ou prolongamento',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Incremento Fischer',
          definition: 'Método de controle de tempo onde uma quantidade definida de segundos é adicionada ao tempo restante do jogador após a conclusão de cada turno.',
        },
        {
          term: 'Atraso Bronstein',
          definition: 'Método de controle de tempo onde a contagem decrescente é atrasada por um período determinado no início do turno, evitando deduções se concluído rapidamente.',
        },
        {
          term: 'Modo Ampulheta',
          definition: 'Sistema dinâmico de cronometragem onde o tempo deduzido do relógio de um jogador é transferido em tempo real para a reserva do oponente.',
        },
        {
          term: 'Paralisia por análise',
          definition: 'Estado de reflexão excessiva onde o jogador se sente sobrecarregado pelas opções, atrasando o jogo e afetando os demais.',
        },
        {
          term: 'Estatísticas do jogo',
          definition: 'Métricas de desempenho pós-jogo que resumem as rodadas decorridas, velocidade média de pensamento, durações máximas de turnos e classificações de rapidez.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Como funciona a interface no modo Duelo?',
      answer: 'Ao iniciar uma partida para 2 jogadores, a aplicação mostra um relógio de xadrez em ecran dividido. Cada metade representa um jogador; tocar na sua seção finaliza o turno. Os ecrans podem ser rodados 180 graus para jogadores sentados frente a frente.',
    },
    {
      question: 'Qual é a diferença entre os modos Fischer e Bronstein?',
      answer: 'O modo Fischer adiciona segundos extras à reserva do jogador após terminar o turno, permitindo acumular tempo. O modo Bronstein oferece um atraso no início do turno; se o turno terminar dentro desse limite, nenhum tempo é descontado.',
    },
    {
      question: 'A aplicação monitora as estatísticas do jogo?',
      answer: 'Sim! Ao terminar uma partida ou esgotar-se o tempo, o modal de estatísticas apresenta a duração total, número de rodadas, tempo médio de turno, turno máximo e a classificação de velocidade dos jogadores.',
    },
    {
      question: 'Os meus jogadores são guardados se eu recarregar a página?',
      answer: 'Sim, a lista de jogadores e as cores selecionadas são guardadas automaticamente no armazenamento local do navegador, restaurando-se ao regressar à página.',
    },
    {
      question: 'Posso adicionar ou remover tempo durante o jogo?',
      answer: 'Sim! No modo multijogador, os cartões de jogador têm botões +30s e -30s dedicados para ajustar rapidamente o tempo restante ao vivo.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurar os Ajustes do Jogo',
      text: 'Selecione uma predefinição (Casual, Blitz, Estratégica, Ampulheta) ou configure parâmetros personalizados: duração base, incremento/atraso e limite de aviso.',
    },
    {
      name: 'Organizar os Jogadores',
      text: 'Insira os nomes dos jogadores e selecione cores de identificação. Reordene a sequência de turnos usando as setas; os dados são salvos automaticamente.',
    },
    {
      name: 'Iniciar e Passar Turnos',
      text: 'Comece o jogo. No modo Duelo, toque na sua metade do ecran para terminar o turno. No modo Multijogador, clique no grande botão central Fim do Turno.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Temporizador de Jogos de Tabuleiro & Gestão de Turnos',
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
          'name': 'Como funciona a interface no modo Duelo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ao iniciar uma partida para 2 jogadores, a aplicação mostra um relógio de xadrez em ecran dividido. Cada metade representa um jogador; tocar na sua seção finaliza o turno. Os ecrans podem ser rodados 180 graus para jogadores sentados frente a frente.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Qual é a diferença entre os modos Fischer e Bronstein?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O modo Fischer adiciona segundos extras à reserva do jogador após terminar o turno, permitindo acumular tempo. O modo Bronstein oferece um atraso no início do turno; se o turno terminar dentro desse limite, nenhum tempo é descontado.'
          }
        },
        {
          '@type': 'Question',
          'name': 'A aplicação monitora as estatísticas do jogo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim! Ao terminar uma partida ou esgotar-se o tempo, o modal de estatísticas apresenta a duração total, número de rodadas, tempo médio de turno, turno máximo e a classificação de velocidade dos jogadores.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Os meus jogadores são guardados se eu recarregar a página?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim, a lista de jogadores e as cores selecionadas são guardadas automaticamente no armazenamento local do navegador, restaurando-se ao regressar à página.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Posso adicionar ou remover tempo durante o jogo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim! No modo multijogador, os cartões de jogador têm botões +30s e -30s dedicados para ajustar rapidamente o tempo restante ao vivo.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Usar o Temporizador de Jogos de Tabuleiro',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Configurar os Ajustes do Jogo',
          'text': 'Selecione uma predefinição (Casual, Blitz, Estratégica, Ampulheta) ou configure parâmetros personalizados: duração base, incremento/atraso e limite de aviso.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Organizar os Jogadores',
          'text': 'Insira os nomes dos jogadores e selecione cores de identificação. Reordene a sequência de turnos usando as setas; os dados são salvos automaticamente.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Iniciar e Passar Turnos',
          'text': 'Comece o jogo. No modo Duelo, toque na sua metade do ecran para terminar o turno. No modo Multijogador, clique no grande botão central Fim do Turno.'
        }
      ]
    }
  ],
};
