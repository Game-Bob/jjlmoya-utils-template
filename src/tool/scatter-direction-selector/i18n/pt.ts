import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Seletor de Direç\u00e3o de Desvio',
  setupTitle: 'Configuraç\u00f5es de Desvio',
  sectorsLabel: 'Setores da Bússola',
  sectors8: '8 Direç\u00f5es',
  sectors12: '12 Direç\u00f5es (Relógio)',
  diceLabel: 'Rolagem de Dist\u00e2ncia de Desvio',
  diceD6: '1D6 Polegadas',
  dice2D6: '2D6 Polegadas',
  diceD10: '1D10 Polegadas',
  diceCustom: 'Intervalo Personalizado',
  customMaxLabel: 'Dist\u00e2ncia Máxima',
  hitChanceLabel: 'Probabilidade de Acerto Direto (%)',
  rollButton: 'Rolar Desvio',
  hitResult: 'Acerto Direto!',
  scatterResult: 'Desvio!',
  distanceLabel: 'Dist\u00e2ncia',
  angleLabel: '\u00c2ngulo',
  dragHint: 'Arraste a bússola para ajustar a direç\u00e3o do vento manualmente',
  historyTitle: 'Rolagens Recentes',
  clearHistory: 'Limpar Histórico',
  presetTitle: 'Predefiniç\u00f5es de Wargaming',
  soundOn: 'Som Ativado',
  soundOff: 'Som Desativado',
  guideStep1: 'Arraste a bússola para alinhar com sua mesa de jogo',
  guideStep2: 'Escolha setores, dados e probabilidade de acerto direto',
  guideStep3: 'Centro = seu alvo. O brilho verde significa que caiu exatamente ali',
  guideStep3Scatter: 'Seta = direç\u00e3o de desvio. Mova o tiro do centro essa quantidade de polegadas ao longo da seta',
  scatterModeLabel: 'Direç\u00e3o de Desvio',
  scatterModeRandom: 'Aleatória',
  scatterModeWind: 'Deriva do Vento',
  scatterModeWindHint: 'A seta sempre segue a bússola  -  apenas a dist\u00e2ncia é aleatória',
};

const faq = [
  {
    question: 'Como funciona o Seletor de Direç\u00e3o de Desvio?',
    answer: 'Ele calcula um \u00e2ngulo aleatório (0-359 graus) e uma dist\u00e2ncia com base na configuraç\u00e3o de dados selecionada. Também simula um dado de desvio, verificando acertos diretos.',
  },
  {
    question: 'Posso mudar o formato dos setores?',
    answer: 'Sim, voc\u00ea pode alternar entre setores cardeais de 8 direç\u00f5es e setores de 12 direç\u00f5es no formato de relógio.',
  },
  {
    question: 'O que é a probabilidade de acerto direto?',
    answer: 'Representa a chance de o projétil atingir exatamente o local mirado sem qualquer desvio, simulando um resultado "Acerto" em um dado de desvio padr\u00e3o.',
  },
  {
    question: 'Isso é compatível com Warhammer ou Bolt Action?',
    answer: 'Sim, ele suporta gabaritos padr\u00e3o de 8 direç\u00f5es e alinhamentos de relógio de 12 direç\u00f5es usados na maioria dos wargames táticos e sistemas de miniaturas.',
  },
  {
    question: 'Como a dist\u00e2ncia de desvio é exibida visualmente?',
    answer: 'A dist\u00e2ncia em polegadas aparece como um rótulo flutuante no ponto de impacto, posicionado na direç\u00e3o de desvio. A seta vermelha da bússola também trava no \u00e2ngulo final para alinhamento rápido do gabarito.',
  },
  {
    question: 'Posso desativar a animaç\u00e3o para obter resultados mais rápidos?',
    answer: 'A animaç\u00e3o dura aproximadamente dois segundos, após os quais o resultado final é exibido no centro e a seta da bússola trava. Atualmente n\u00e3o há opç\u00e3o de pular, mas o atraso foi projetado para acompanhar o ritmo de rolar dados físicos.',
  },
  { question: 'Como a direção da dispersão é determinada?', answer: 'A ferramenta combina o sistema de setores escolhido com a rolagem e a distância de desvio configurada.' },
  { question: 'Posso usar o modo de vento?', answer: 'Sim, esse modo segue o ângulo da bússola e mantém a distância aleatória.' },
];

const howTo = [
  {
    name: 'Configurar Regras',
    text: 'Selecione os setores da bússola, escolha um dado de dist\u00e2ncia e ajuste a probabilidade de acerto direto.',
  },
  {
    name: 'Rolar ou Arrastar',
    text: 'Clique em Rolar Desvio para simular o desvio, ou arraste a roda da bússola para ajustar a direç\u00e3o manualmente.',
  },
  {
    name: 'Ler o Resultado',
    text: 'Verifique o display central e a seta vetorial para encontrar a dist\u00e2ncia, o \u00e2ngulo e a direç\u00e3o exatos do desvio.',
  },
  {
    name: 'Observar a Trajetória',
    text: 'Após rolar, veja o projétil animado viajar pela bússola. O rastro tracejado mostra o caminho de desvio e o ponto de impacto exibe a dist\u00e2ncia em polegadas.',
  },
  {
    name: 'Interpretar o Resultado',
    text: 'Um pulso verde com "DIRECT HIT" significa desvio zero. Uma explos\u00e3o vermelha com um rótulo de dist\u00e2ncia significa que o tiro desviou  -  coloque seu gabarito a essa dist\u00e2ncia do alvo na direç\u00e3o da seta.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'seletor-de-direcao-de-desvio',
  title: 'Seletor de Direç\u00e3o de Desvio: Bússola Tátil para Wargames de Miniaturas',
  description: 'Determine desvios aleatórios, deriva do vento e direç\u00f5es de dispers\u00e3o para wargames de miniaturas usando uma bússola tátil 3D.',
  ui,
  seo: [
    { type: 'title', text: 'Bússola Interativa de Desvio com Animação de Projétil em Tempo Real', level: 2 },
    { type: 'paragraph', html: 'O Seletor de Direção de Desvio vai além da simples geração de números ao renderizar uma trajetória animada do projétil diretamente sobre a bússola. Quando você clica em Rolar Desvio, um projétil brilhante viaja do centro ao longo do ângulo de desvio, deixando um rastro tracejado e explodindo em partículas no ponto de impacto. Isso simplifica imensamente a resolução visual de disparos desviados durante suas partidas.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sistemas de Setores', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Predefinições de Dados', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Faixa de Probabilidade de Acerto', icon: 'mdi:target' },
      { value: '10', label: 'Histórico de Rolagens Recentes', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Como a Animação de Trajetória Melhora a Tomada de Decisão em Wargames', level: 3 },
    { type: 'paragraph', html: 'Ferramentas tradicionais exibem um ângulo e uma distância numéricos, forçando os jogadores a visualizar mentalmente o deslocamento na mesa. A trajetória animada preenche essa lacuna desenhando a rota de voo exata do ponto de mira até a zona de impacto do desvio. Isso acelera o ritmo de jogo e elimina dúvidas ao posicionar modelos de explosão.' },
    { type: 'diagnostic', variant: 'success', title: 'Acerto Direto', html: 'Quando a rolagem supera a probabilidade de acerto, o centro da bússola explode com anéis verdes pulsantes e uma animação de texto "DIRECT HIT". O projétil retorna ao centro, confirmando um impacto perfeito sem qualquer desvio.' },
    { type: 'diagnostic', variant: 'error', title: 'Desvio', html: 'Em um resultado de desvio, o projétil segue uma trajetória tracejada até seu ponto de aterrissagem. Uma explosão de partículas, um marcador brilhante e a distância exata em polegadas (ex. <strong>5"</strong>) aparecem no local do impacto para medição imediata.' },
    { type: 'tip', title: 'Dica: Usar o Modo Deriva do Vento', html: 'Ative a Deriva do Vento para travar a direção de desvio no ângulo da bússola ajustado manualmente. Isso simula um vento predominante ou um vetor de deslocamento fixo  -  ideal para foguetes não guiados, nuvens de gás, feitiços de área ou acidentes de teletransporte.' },
    { type: 'title', text: 'Resolver a dispersão em wargames', level: 2 },
    { type: 'paragraph', html: 'Muitos wargames e RPGs táticos usam desvios para simular artilharia, tiros de morteiro, deriva de gás ou teletransportes malsucedidos de forma realista e imprevisível. Com opções flexíveis de dados (1D6, 2D6, 1D10), esta bússola digital adapta-se a qualquer livro de regras.' },
    { type: 'table', headers: ['Cenário de Jogo', 'Configuração de Dados', 'Modo de Desvio', 'Efeito Tático'], rows: [['Artilharia e Morteiros', '2D6 polegadas', '8 Setores + Acerto %', 'Dispersão aleatória ao redor do alvo'], ['Nuvens de Gás e Vento', '1D6 polegadas', 'Deriva do Vento (Ângulo Fixo)', 'Deslocamento exclusivo na direção do vento'], ['Falhas de Teletransporte', '1D10 polegadas', '12 Setores Relógio', 'Desvio circular em qualquer direção']] },
    { type: 'title', text: 'Gerenciar vento e desvio', level: 2 },
    { type: 'paragraph', html: 'Configurar uma probabilidade de acerto adequada permite refletir o treinamento da tripulação e reduz significativamente o tempo de medição na mesa durante a fase de tiro.' },
    { type: 'comparative', items: [{ title: 'Resolver a dispersão em wargames', description: 'Muitos wargames usam desvios para simular artilharia, vento ou teletransportes malsucedidos. Esta bússola digital evita o deslocamento acidental de dados no cenário.', icon: 'mdi:compass-outline', highlight: true, points: ['Gerenciar vento e desvio', 'Medição rápida e sem atritos', 'Visualização precisa de vetores'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Gerenciar vento e desvio', definition: 'A probabilidade de acerto ajuda a avaliar a confiabilidade da unidade e agiliza as medições durante a partida.' }] },
  ],
  faq,
  bibliography,
  howTo,
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
      'name': 'Seletor de Direç\u00e3o de Desvio',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como usar o Seletor de Direç\u00e3o de Desvio',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
