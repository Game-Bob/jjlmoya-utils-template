import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'roleta-de-decisoes',
  title: 'Roleta de Decisões: Seletor Aleatório e Gerador de Opções',
  description: 'Gire uma roleta de decisões personalizável para jogos de tabuleiro. Adicione e edite fatias com pesos para definir resultados.',
  ui: {
    title: 'Roleta de Decisões',
    spinButton: 'Girar a Roleta',
    clearHistory: 'Limpar Histórico',
    resultHeading: 'Resultado',
    historyTitle: 'Histórico de Giros',
    noHistory: 'Nenhum giro. Clique em Girar a Roleta para começar.',
    addSegmentLabel: 'Adicionar Fatia',
    removeSegmentLabel: 'Remover',
    segmentLabelPlaceholder: 'Rótulo',
    presetLabel: 'Predefinições',
    presetYesNo: 'Sim ou Não',
    presetNumbers: 'Números 1-6',
    presetActions: 'Ações',
    presetCustom: 'Personalizado',
    presetD20: 'D20',
    presetAlignment: 'Alinhamento',
    presetLoot: 'Raridade do Saque',
    weightLabel: 'Peso',
    spinAgain: 'Girar Novamente',
    noSegments: 'Adicione fatias à roleta antes de girar.',
  },
  seo: [
    { type: 'title', text: 'Roleta de Decisões para Jogos de Tabuleiro e Atividades', level: 2 },
    { type: 'paragraph', html: 'A roleta de decisões é uma ferramenta digital versátil para jogos de tabuleiro, RPGs e dinâmicas de grupo. Ela permite sortear opções de forma rápida, justa e totalmente aleatória. Cada fatia pode ser personalizada com seus próprios textos, cores e pesos configuráveis para ajustar as probabilidades exatas do seu jogo.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Adicionar Fatia' },
        { value: '7', label: 'Predefinições' },
        { value: '10', label: 'Histórico de Giros' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Como Usar a Roleta de Decisões', level: 2 },
    { type: 'paragraph', html: 'Escolha uma das predefinições prontas como Sim/Não, D20, Alinhamento ou Saque de Tesouros, ou crie sua própria lista personalizada. Ajuste os pesos de 1 a 5 para alterar a frequência com que cada opção é sorteada. O motor de física simula a inércia e o atrito de rotação para trazer emoção a cada giro.' },
    { type: 'title', text: 'Mais cenários de decisão', level: 3 },
    { type: 'paragraph', html: 'Use a roda para organizar votações rápidas no grupo, gerar encontros aleatórios em jogos de RPG, distribuir os turnos de jogo ou escolher qual jogador escolhe o personagem primeiro.' },
    { type: 'title', text: 'Predefinições para jogos de mesa', level: 3 },
    { type: 'paragraph', html: 'As predefinições permitem carregar decisões frequentes em segundos, economizando tempo precioso durante suas sessões de jogo e evitando discussões desnecessárias à mesa.' },
    { type: 'title', text: 'Ajustar os pesos', level: 3 },
    { type: 'paragraph', html: 'Os pesos permitem balancear ou direcionar os resultados. Aumentar o peso de uma fatia fará com que ela ocupe um arco proporcionalmente maior na roleta, aumentando a chance de ser sorteada.' },
    { type: 'title', text: 'Consultar o histórico', level: 3 },
    { type: 'paragraph', html: 'O painel de histórico guarda os dez giros mais recentes para que todos os jogadores possam verificar os resultados anteriores com total transparência ao longo da partida.' },
  ],
  faq: [
    {
      question: 'Como funciona a roleta de decisões?',
      answer: 'Insira suas opções, ajuste os pesos caso queira variar a probabilidade de sorteio e clique no botão Girar.',
    },
    {
      question: 'Posso personalizar cores e nomes?',
      answer: 'Sim, você pode adicionar fatias, mudar os nomes de exibição, escolher cores e definir pesos de 1 a 5.',
    },
    {
      question: "Posso alterar as probabilidades?",
      answer: "Sim, altere o peso de um segmento.",
    },
    {
      question: "Quantos segmentos são possíveis?",
      answer: "Até 16; são necessárias pelo menos duas opções.",
    },
    {
      question: "Que predefinições existem?",
      answer: "Sim ou Não, Números, Ações, opções próprias, D20, Alinhamento e Saque.",
    },
    {
      question: "Os giros anteriores ficam visíveis?",
      answer: "Sim, o navegador mostra os dez resultados mais recentes.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Montar as Fatias',
      text: 'Carregue uma predefinição rápida ou crie suas próprias fatias especificando rótulos, cores e pesos.',
    },
    {
      name: 'Girar a Roleta',
      text: 'Clique para acionar a rotação e aguarde a roleta parar por completo com física realista.',
    },
    {
      name: "Verificar o resultado",
      text: "Depois de parar, verifique o segmento vencedor e o histórico dos giros recentes.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Roleta de Decisões',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Como funciona a roleta de decisões?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Insira suas opções, ajuste os pesos caso queira variar a probabilidade de sorteio e clique no botão Girar.' } },
        { '@type': 'Question', 'name': 'Posso personalizar cores e nomes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim, você pode adicionar fatias, mudar os nomes de exibição, escolher cores e definir pesos de 1 a 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Montar as Fatias', 'text': 'Carregue uma predefinição rápida ou crie suas próprias fatias especificando rótulos, cores e pesos.' },
        { '@type': 'HowToStep', 'name': 'Girar a Roleta', 'text': 'Clique para acionar a rotação e aguarde a roleta parar por completo com física realista.' },
      ],
    },
  ],
};
