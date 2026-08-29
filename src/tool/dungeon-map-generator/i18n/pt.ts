import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Escolha uma semente, ajuste a grade e selecione um estilo arquitetônico. Gere um mapa conectado para suas notas, impressão ou mesa virtual.',
  seedLabel: 'Semente do mapa',
  seedHint: 'Reutilize a mesma semente com as mesmas configurações para reconstruir exatamente o mesmo mapa.',
  randomSeed: 'Nova semente',
  sizeLabel: 'Tamanho da expedição',
  sizeCompact: 'Sessão única (One-shot)',
  sizeSession: 'Sessão padrão',
  sizeStronghold: 'Fortaleza',
  fineTuneGrid: 'Ajuste fino de grade e densidade',
  columnsLabel: 'Colunas',
  rowsLabel: 'Linhas',
  densityLabel: 'Densidade de salas',
  densityHint: 'Densidade mais alta adiciona mais salas e área útil de piso.',
  styleLabel: 'Arquitetura do mapa',
  dungeonStyle: 'Masmorra',
  dungeonStyleHint: 'Salas de pedra com corredores de largura única.',
  cavernStyle: 'Caverna',
  cavernStyleHint: 'Câmaras irregulares com bordas suavizadas.',
  scifiStyle: 'Ficção Científica',
  scifiStyleHint: 'Módulos amplos com corredores de largura dupla.',
  generate: 'Desenhar mapa',
  mapRegionLabel: 'Mapa de masmorra gerado e controles de exportação',
  connectedBadge: 'Todas as salas conectadas',
  roomsLabel: 'Salas',
  doorsLabel: 'Portas',
  floorLabel: 'Cobertura de piso',
  legendFloor: 'Piso caminhável',
  legendWall: 'Parede sólida',
  legendDoor: 'Porta ou escotilha',
  editHint: 'Clique com o botão direito em uma célula para editar',
  editCell: 'Editar esta célula',
  paintFloor: 'Piso',
  paintWall: 'Parede',
  paintDoor: 'Porta',
  mapData: 'Dados do mapa',
  copyLink: 'Copiar link do mapa',
  linkCopied: 'Link copiado',
  exportPng: 'Baixar PNG',
  exportSvg: 'Baixar SVG',
  exportJson: 'Salvar JSON',
  importJson: 'Abrir JSON',
  importError: 'Este arquivo não contém uma configuração válida de mapa de masmorra.',
  compactMap: 'Exploração tensa',
  balancedMap: 'Expedição equilibrada',
  sprawlingMap: 'Fortaleza aberta',
  compactHint: 'Corredores mais longos deixam mais espaço desconhecido entre as salas.',
  balancedHint: 'Salas e corredores dividem o espaço de forma equilibrada.',
  sprawlingHint: 'Maior cobertura de piso favorece combates e movimentação rápida.',
  mapReady: 'Legenda do mapa',
  dimensionsUnit: 'células de grade',
};

const faq = [
  {
    question: 'A mesma semente sempre cria o mesmo mapa de masmorra?',
    answer: 'Sim. A semente, as dimensões da grade, a densidade e o estilo formam uma configuração determinística. Reutilizar os quatro parâmetros recria exatamente as mesmas salas e portas.',
  },
  {
    question: 'Todas as salas geradas são conectadas?',
    answer: 'Sim. As salas são conectadas por uma rota principal após o reposicionamento, garantindo que toda a área de piso pertença a um único mapa conectado.',
  },
  {
    question: 'Qual a diferença entre os estilos masmorra, caverna e ficção científica?',
    answer: 'Masmorra usa salas regulares de pedra. Cavernas criam câmaras irregulares e arredondadas. Ficção científica usa módulos amplos e portas duplas.',
  },
  {
    question: 'Qual formato exportar para uma mesa virtual (VTT)?',
    answer: 'PNG é a opção mais simples para a maioria das mesas virtuais. SVG permanece nítido em qualquer escala e é fácil de editar em softwares vetoriais.',
  },
  {
    question: 'Outra pessoa pode regenerar meu mapa aleatório?',
    answer: 'Sim. Copie o link do mapa para incluir a configuração na URL ou envie o arquivo JSON. O destinatário carregará o mesmo mapa instantaneamente.',
  },
  {
    question: 'Este gerador adiciona monstros, armadilhas ou tesouros?',
    answer: 'Não. Ele cria um plano arquitetônico neutro para que você possa adaptá-lo a qualquer sistema de jogo. A criação de encontros fica a cargo do Mestre.',
  },
];

const howTo = [
  {
    name: 'Ajuste as dimensões da grade',
    text: 'Escolha o número de colunas e linhas adequado às suas anotações ou mesa virtual.',
  },
  {
    name: 'Escolha a arquitetura',
    text: 'Selecione masmorra, caverna ou ficção científica e ajuste a densidade de salas.',
  },
  {
    name: 'Gere e inspecione',
    text: 'Insira uma semente, gere o mapa e revise o resumo de salas, portas e cobertura de piso.',
  },
  {
    name: 'Exporte ou compartilhe',
    text: 'Baixe em PNG ou SVG para jogar, ou salve a configuração via link ou arquivo JSON.',
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
  name: 'Gerador de Mapas de Masmorra Aleatórios',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Um gerador determinístico de mapas de masmorra com salas conectadas, portas e exportações locais.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como gerar um mapa de masmorra conectado',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'gerador-mapas-masmorra-aleatorios',
  title: 'Gerador de Mapas de Masmorra Aleatórios para RPG',
  description: 'Crie mapas reproduzíveis de masmorras, cavernas e ficção científica com salas conectadas, portas e exportação PNG/SVG.',
  ui,
  seo: [
    { type: 'title', text: 'Gere um Mapa de Masmorra Jogável com uma Semente Reutilizável', level: 2 },
    { type: 'paragraph', html: 'Um gerador de mapas de masmorra útil precisa ir além do ruído visual aleatório. Cada câmara deve ser acessível por corredores conectados, a grade deve se ajustar à superfície de jogo e o resultado deve poder ser recuperado a qualquer momento em qualquer dispositivo. Este gerador trata a semente e os controles como uma especificação de mapa compacta e determinística. Manter a mesma semente, colunas, linhas, densidade e estilo arquitetônico garante a reconstituição de exatamente o mesmo plano mais tarde.' },
    { type: 'title', text: 'Dimensões de Grade para Impressão e Mesas Virtuais', level: 2 },
    { type: 'paragraph', html: 'Configurar o tamanho da grade é o primeiro passo prático ao planejar uma sessão. Uma grade pequena é fácil de imprimir em papel para aventuras curtas ou locais pontuais, enquanto um mapa amplo deixa espaço para explorações complexas, encontros táticos e várias facções. A imagem exportada preserva células perfeitamente quadradas para alinhar perfeitamente com a grade em softwares de mesa virtual (VTT).' },
    {
      type: 'table',
      headers: ['Tamanho da grade', 'Uso típico', 'Densidade inicial', 'Nota de planejamento'],
      rows: [
        ['20 por 16 células', 'Aventura curta (One-shot)', '35 a 45', 'Fácil de imprimir e leitura visual rápida no papel'],
        ['36 por 26 células', 'Masmorra de sessão', '45 a 55', 'Ritmo equilibrado entre salas e corredores'],
        ['52 por 38 células', 'Complexo multi-sessão', '50 a 65', 'Espaço amplo para várias facções e caminhos opcionais'],
      ],
    },
    { type: 'tip', title: 'Adapte o Mapa à Escala dos Combates', html: 'Calcule as células necessárias para seus encontros principais antes de definir o tamanho total. Uma grande masmorra com salas minúsculas parecerá apertada, enquanto um plano compacto com uma sala principal espaçosa favorece encontros marcantes.' },
    { type: 'title', text: 'Interprete a Cobertura de Piso como Ritmo de Jogo', level: 2 },
    { type: 'paragraph', html: 'A cobertura de piso indica a porcentagem da área retangular do mapa que é caminhável. Baixa cobertura enfatiza mistério, isolamento e tensão entre as salas. Cobertura média suporta um ritmo constante de expedição. Alta cobertura cria complexos fortificados onde combates e patrulhas podem se espalhar para salas adjacentes.' },
    {
      type: 'list',
      items: [
        '<strong>Exploração tensa:</strong> use o espaço vazio para sugerir isolamento ou passagens secretas.',
        '<strong>Expedição equilibrada:</strong> alterne salas de investigação com corredores e áreas de combate.',
        '<strong>Fortaleza aberta:</strong> planeje linhas de visão claras, rotas de patrulha e encontros interconectados.',
      ],
    },
    { type: 'title', text: 'Transforme um Plano Neutro em um Local de Aventura', level: 2 },
    { type: 'paragraph', html: 'O mapa gerado fornece intencionalmente apenas a arquitetura básica. Atribua um papel narrativo a cada sala principal e adicione pistas, armadilhas, criaturas e tesouros de acordo com esse propósito. Use as portas como pontos de decisão estratégica para os jogadores.' },
    { type: 'tip', title: 'Salve a Configuração antes de Adicionar Notas', html: 'Copie o link do mapa ou salve o arquivo JSON antes de anotar os encontros para manter uma cópia limpa para os jogadores sem revelar os segredos do Mestre.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
