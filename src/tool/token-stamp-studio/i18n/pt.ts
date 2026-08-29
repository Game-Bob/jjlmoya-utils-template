import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Escolha uma moldura',
  frameHint: 'Escolha a silhueta que indica à mesa quem é a personagem antes mesmo de lerem o nome.',
  randomFrame: 'Moldura aleatória',
  surfaceLegend: 'Pinte o token',
  backgroundLabel: 'Fundo',
  borderLabel: 'Borda',
  textLabel: 'Texto',
  overlayLabel: 'Tinta',
  randomColors: 'Cores aleatórias',
  borderWidthLabel: 'Espessura da borda',
  opacityLabel: 'Opacidade da borda',
  overlayOpacityLabel: 'Tinta do retrato',
  stageLabel: 'Forja de tokens em tempo real',
  chooseImage: 'Escolher retrato',
  positionHint: 'Arraste o retrato ou as etiquetas diretamente sobre o token.',
  markerName: 'Nome do marcador',
  markerNamePlaceholder: 'Dê um nome a este marcador',
  textLegend: 'Adicione detalhes legíveis',
  textHint: 'Use etiquetas curtas como nome, nível, função ou estado. Arraste cada uma para o token.',
  textPlaceholder: 'Nome da personagem ou função',
  addText: 'Adicionar etiqueta',
  removeText: 'Remover etiqueta',
  textSizeLabel: 'Tamanho da fonte',
  alignmentLabel: 'Alinhamento do texto',
  alignLeft: 'Alinhar à esquerda',
  alignCenter: 'Centralizar',
  alignRight: 'Alinhar à direita',
  imageLegend: 'Ajuste o retrato',
  imageZoomLabel: 'Zoom do retrato',
  scaleLabel: 'Escala de exportação',
  savedMarkers: 'Marcadores salvos',
  noSavedMarkers: 'Os marcadores salvos aparecerão aqui para você reabrir e editar quando quiser.',
  reuseMarker: 'Selecione um marcador para reabri-lo na forja.',
  deleteMarker: 'Excluir marcador',
  newMarker: 'Novo marcador',
  download: 'Baixar PNG',
  copy: 'Copiar PNG',
  downloadBatch: 'Baixar lote',
  batchLabel: 'Exportação avançada em lote',
  batchHint: 'Opcional: exporte vários retratos com a moldura e cores atuais.',
  chooseBatch: 'Escolher retratos',
  batchReady: '{count} retratos prontos para forjar.',
  noImage: 'Nenhum retrato carregado',
  noText: 'Sem etiquetas ainda. Adicione as informações de que seu grupo precisa.',
  tokenDetails: 'Controles do token de personagem',
  exportHint: 'O PNG é transparente fora da silhueta escolhida, pronto para VTT ou folha impressa.',
};

const faq = [
  {
    question: 'O que faz um bom retrato para token de personagem?',
    answer: 'Escolha uma ilustração com um rosto claro e bom contraste com a moldura. Um corte de cabeça e ombros permanece legível mesmo quando o token é pequeno na mesa virtual.',
  },
  {
    question: 'Como posicionar o retrato corretamente na moldura?',
    answer: 'Carregue a imagem e arraste-a diretamente no token. Use o zoom de retrato para aproximar o rosto sem alterar o formato da borda.',
  },
  {
    question: 'Posso adicionar o nome e o nível da personagem?',
    answer: 'Sim. Adicione etiquetas curtas, ajuste o tamanho e o alinhamento e arraste para uma posição legível no token.',
  },
  {
    question: 'O arquivo PNG mantém a transparência fora do token?',
    answer: 'Sim. A imagem exportada mantém o fundo transparente fora da silhueta selecionada, facilitando a colocação sobre mapas.',
  },
  {
    question: 'Posso criar tokens para todo o grupo de uma vez?',
    answer: 'Sim. Use a exportação em lote para carregar vários retratos e baixar um arquivo PNG transparente para cada um mantendo as configurações.',
  },
  {
    question: 'Onde meus marcadores salvos ficam armazenados?',
    answer: 'Os marcadores salvos ficam armazenados localmente no seu navegador. Nenhuma imagem é enviada para servidores externos.',
  },
];

const howTo = [
  { name: 'Escolha a silhueta da personagem', text: 'Selecione a moldura ideal: circular para heróis, hexagonal para combate tático ou estrela para chefes.' },
  { name: 'Carregue e enquadre o retrato', text: 'Escolha a imagem, arraste-a no token e ajuste o zoom para centralizar o rosto.' },
  { name: 'Adicione informações importantes', text: 'Insira um nome curto ou estado sem poluir a ilustração.' },
  { name: 'Exporte como PNG transparente', text: 'Baixe o arquivo PNG transparente pronto para ser usado no seu VTT ou impresso.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'Crie tokens de personagem legíveis para RPG de mesa com molduras personalizadas, etiquetas, transparência e exportação em lote.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como fazer um token de personagem para RPG de mesa',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'criador-tokens-personagens-rpg-mesa',
  title: 'Criador de Tokens de Personagem para RPG de Mesa',
  description: 'Crie tokens de personagem legíveis para RPG de mesa com molduras personalizadas, etiquetas, transparência e exportação em lote.',
  ui,
  seo: [
    { type: 'title', text: 'Crie tokens de personagem claros e legíveis no mapa', level: 2 },
    { type: 'paragraph', html: 'Um token é um elemento fundamental de comunicação na mesa de jogo. Sua silhueta mostra imediatamente ao grupo se trata de um herói, monstro ou aliado. Escolha a moldura certa e mantenha o rosto e o texto legíveis.' },
    { type: 'title', text: 'Escolha a moldura certa para a personagem', level: 2 },
    { type: 'list', items: ['<strong>Círculo:</strong> padrão para personagens de jogadores e aliados.', '<strong>Hexágono ou octógono:</strong> ótimo para combates táticos com muitas unidades.', '<strong>Estrela:</strong> perfeito para chefes, campeões ou alvos prioritários.', '<strong>Nuvem:</strong> formato suave para espíritos, familiares e criaturas místicas.'] },
    { type: 'tip', title: 'Projete pensando no menor tamanho de exibição', html: 'Reduza o zoom do mapa até que o token fique pequeno. Se o rosto e o texto continuarem visíveis, seu token funcionará perfeitamente.' },
    { type: 'title', text: 'Etiquetas curtas e úteis durante a partida', level: 2 },
    { type: 'paragraph', html: 'O token não deve substituir a ficha de personagem. Adicione apenas os dados mais consultados: nome curto, nível ou estado atual.' },
    { type: 'title', text: 'Prepare todo o grupo de aventureiros de uma só vez', level: 2 },
    { type: 'paragraph', html: 'A exportação em lote permite padronizar o estilo do grupo mantendo a identidade visual de cada personagem.' },
    { type: 'tip', title: 'Salvamento automático no seu dispositivo', html: 'O marcador ativo fica salvo no seu navegador para que você possa editá-lo facilmente quando a personagem subir de nível.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
