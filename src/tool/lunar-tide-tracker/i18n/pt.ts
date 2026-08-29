import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'calculador-fases-lua',
  title: 'Calculadora de Fases da Lua para RPG de Mesa: Monitore Luas Fantásticas Personalizadas e Ciclos de Maré',
  description: 'Calcule as fases da lua para qualquer mundo fantástico com períodos orbitais personalizados. Acompanhe várias luas ao mesmo tempo, veja previsões de 10 dias e obtenha um nível de maré combinado para sistemas de magia e clima em D&D, Pathfinder ou qualquer RPG.',
  ui: {
    title: 'Rastreador de Fases Lunares e Maré Mística',
    moonsTitle: 'Configuração das Luas',
    addMoon: 'Adicionar Lua Personalizada',
    removeMoon: 'Remover Lua',
    moonName: 'Nome da Lua',
    orbitalPeriod: 'Período Orbital (Dias)',
    startingOffset: 'Deslocamento Inicial (Dias)',
    timelineTitle: 'Controles de Tempo',
    currentDay: 'Dia Atual da Campanha',
    tideTitle: 'Status da Maré Mística',
    tideLevel: 'Nível de Energia da Maré',
    magicModifier: 'Efeito Mágico da Maré',
    forecastTitle: 'Previsão de Fases Lunares e Maré',
    dayLabel: 'Dia',
    resetButton: 'Redefinir para o Dia 0',
    presetTitle: 'Presets de Campanha',
    presetSingle: 'Lua Clássica',
    presetDouble: 'Luas Gêmeas da Magia',
    presetTriple: 'Reino do Eclipse Triplo',
    newMoon: 'Lua Nova',
    waxingCrescent: 'Lua Crescente',
    firstQuarter: 'Quarto Crescente',
    waxingGibbous: 'Gibosa Crescente',
    fullMoon: 'Lua Cheia',
    waningGibbous: 'Gibosa Minguante',
    lastQuarter: 'Quarto Minguante',
    waningCrescent: 'Lua Minguante',
  },
  seo: [
    { type: 'title', text: 'Como Acompanhar Fases da Lua em uma Campanha de RPG Fantástico', level: 2 },
    { type: 'paragraph', html: 'A maioria dos cenários fantásticos tem luas com períodos orbitais que diferem do ciclo lunar real de 29,5 dias. O campo <strong>Período Orbital</strong> define quantos dias no jogo uma lua leva para completar um ciclo completo. A lua da Terra leva 29 dias; o cenário de Eberron usa 28; a Terra-média de Tolkien tem um ciclo lunar próximo de 30. Defina isso conforme a tradição do seu mundo, ou escolha qualquer número entre 5 e 60 dias que produza a frequência de eclipses desejada.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Luas monitoradas simultaneamente' },
        { value: '10', label: 'Período de previsão em dias' },
        { value: '5', label: 'Estados de maré (Maré Morta a Maré Viva)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Entendendo o Campo de Deslocamento Inicial', level: 2 },
    { type: 'paragraph', html: 'O <strong>Deslocamento Inicial</strong> define onde uma lua está em seu ciclo no Dia 0 da campanha. Um deslocamento de 0 significa que a lua começa em Lua Nova. Um deslocamento igual à metade do período orbital a inicia em Lua Cheia. Use isso para corresponder à fase descrita na cena de abertura da sua campanha, ou para garantir que duas luas comecem em posições diferentes e não estejam sempre alinhadas.' },
    { type: 'title', text: 'O que o Nível de Maré Significa para o Seu Jogo', level: 2 },
    { type: 'paragraph', html: 'O nível de maré combina a atração gravitacional de todas as luas ativas com base em suas fases atuais. Uma <strong>Maré Viva</strong> (acima de 75%) ocorre quando as luas estão quase alinhadas em fase cheia ou nova, puxando na mesma direção. Uma <strong>Maré Morta</strong> (abaixo de 30%) acontece quando as luas estão em fases opostas, cancelando-se parcialmente. Você pode vincular isso diretamente a qualquer sistema mecânico: bônus em CD de salvamento de magias, duração de forma selvagem de druida, limites de transformação de lobisomens ou severidade de tempestades em mapas costeiros.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lua Única',
          description: 'Ideal para cenários que espelham de perto o mundo real ou possuem uma única lua dominante. Ciclo simples de 8 fases, fácil de acompanhar sem referência.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'Bom para D&D Forgotten Realms (Selune, 30 dias)',
            'Campanhas de lobisomens e licantropos',
            'Sessões de horror ligadas à lua cheia'
          ]
        },
        {
          title: 'Luas Gêmeas',
          description: 'Comum em cenários de alta fantasia. Cria alinhamentos parciais frequentes e marés interessantes no meio do ciclo. Alinhamentos ocorrem a cada LCM(periodo1, periodo2) dias.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28d + Aryth 12d)',
            'Cria estações de eclipse previsíveis',
            'Bom para sistemas de magia druídica ou elemental'
          ]
        },
        {
          title: 'Luas Triplas',
          description: 'Alinhamentos triplos raros criam surtos imprevisíveis. A maré combinada se torna caótica e difícil de prever sem esta ferramenta, que é o que a torna dramaticamente útil.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Tabelas de surto de magia selvagem em alinhamentos',
            'Complexidade ao estilo Pathfinder Golarion',
            'Ciclos de longo período para campanhas épicas'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Períodos Orbitais Comuns para Mundos Fantásticos', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: 'Período orbital de 30 dias, lua única. Use deslocamento 15 para começar em lua cheia na sessão 1.' },
        { term: 'Luas de Eberron', definition: 'Eberron tem 12 luas com períodos de 9 a 28 dias. Execute cada uma como uma instância de lua separada, ou escolha as duas mais relevantes para a trama.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion tem uma lua única, Somal, com ciclo de 29 dias. Eventos da Tapeçaria Sombria podem ser modelados definindo uma segunda lua de período curto com deslocamento de interferência.' },
        { term: 'Mundo Personalizado', definition: 'Uma lua de 15 dias produz 24 luas cheias por ano. Uma lua de 45 dias produz aproximadamente 8. Períodos mais curtos significam eclipses mais frequentes, mas reduzem seu peso narrativo.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dica: Configurando uma Fase Específica para a Sessão 1',
      icon: 'mdi:information-outline',
      badge: 'DICA DE CONFIGURAÇÃO',
      html: 'Se sua campanha começa em lua crescente, defina o deslocamento para cerca de 20% do período orbital. Para começar em lua cheia, use 50% do período como deslocamento. Por exemplo, uma lua de 28 dias começando cheia usaria deslocamento 14. Avance o contador de dias para o dia atual da campanha e a previsão mostrará os próximos 10 dias automaticamente.'
    }
  ],
  faq: [
    { question: 'Qual período orbital devo usar para meu mundo fantástico?', answer: 'Se seu cenário não especificar um, 28 a 30 dias funciona bem para uma lua única. Para várias luas, escolha períodos que não sejam múltiplos simples um do outro (ex.: 20 e 27) para que os alinhamentos não se repitam com muita frequência. Períodos mais curtos (10 a 15 dias) funcionam bem para luas secundárias que criam marés menores frequentes.' },
    { question: 'Como faço para que duas luas se alinhem em um momento específico da campanha?', answer: 'Defina ambas as luas com o mesmo valor de deslocamento. Elas começarão na mesma fase no Dia 0 e se alinharão novamente a cada múltiplo comum de seus dois períodos. Para alterná-las, dê à segunda lua um deslocamento igual à metade de seu período orbital para que comecem opostas uma à outra.' },
    { question: 'O que significa uma Maré Viva em termos de jogo?', answer: 'Maré Viva significa que todas as luas ativas estão puxando em alinhamento, produzindo energia de maré máxima. Você pode usar isso para desencadear surtos de magia selvagem, amplificar alcances de magias de cura, aumentar a severidade de tempestades ou marcar como uma noite sagrada para facções religiosas em seu mundo.' },
    { question: 'O que significa uma Maré Morta em termos de jogo?', answer: 'Maré Morta ocorre quando as luas se cancelam parcialmente. É um bom momento para efeitos de antimagia, uma calmaria no mar, ou para vilões que precisam de supressão mágica previsível para executar seus planos.' },
    { question: 'Posso usar isso para Call of Cthulhu ou campanhas de horror?', answer: 'Sim. Use uma lua única de 29 dias e defina o deslocamento para que a lua cheia caia no clímax da sessão. O rastreador de maré pode representar influência do Mythos ou picos de sensibilidade psíquica que escalam com a porcentagem da fase.' },
    { question: 'Como funciona a previsão de 10 dias?', answer: 'A previsão mostra a fase da lua de cada lua ativa como um ponto colorido para cada um dos próximos 10 dias de campanha, a partir do dia atual. A porcentagem abaixo de cada coluna de dia é o nível de maré combinado. Dias com alta porcentagem são bons candidatos para encontros dramáticos ligados à magia ou ao clima.' },
    { question: 'Posso rastrear uma lua com um ciclo muito curto, como 7 dias?', answer: 'Sim. Defina o período orbital para 7. A lua completará um ciclo completo a cada semana de tempo no jogo, passando por todas as 8 fases. Isso é útil para mundos de campanha onde a magia lunar é redefinida semanalmente, ou para rastrear um corpo semelhante a um pequeno cometa que passa regularmente.' },
    { question: 'Como igualo a fase da lua de um módulo de aventura publicado?', answer: 'Consulte o dia da campanha na aventura e observe a fase descrita. Conte quantos dias no ciclo isso corresponde, divida pelo período orbital e use isso como seu deslocamento. Por exemplo, um quarto crescente no Dia 0 de um ciclo de 28 dias significa que o deslocamento é 7 (um quarto de 28).' }
  ],
  bibliography,
  howTo: [
    { name: 'Defina o Período Orbital', text: 'Insira o número de dias no jogo que sua lua leva para completar um ciclo completo. Use a tradição do seu mundo ou escolha um valor entre 5 e 60.' },
    { name: 'Defina o Deslocamento Inicial', text: 'Desloque a fase inicial inserindo um deslocamento em dias. Um deslocamento de 0 começa em Lua Nova. Metade do período orbital começa em Lua Cheia.' },
    { name: 'Avançe o Contador de Dias', text: 'Use os botões de passo ou o controle deslizante para avançar até o dia atual da sua campanha e leia a fase e o nível de maré em tempo real.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Fases da Lua para RPG de Mesa: Monitore Luas Fantásticas Personalizadas e Ciclos de Maré',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual período orbital devo usar para meu mundo fantástico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Se seu cenário não especificar um, 28 a 30 dias funciona bem para uma lua única. Para várias luas, escolha períodos que não sejam múltiplos simples um do outro para que os alinhamentos não se repitam com muita frequência.'
          }
        },
        {
          '@type': 'Question',
          'name': 'O que significa uma Maré Viva em termos de jogo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Maré Viva significa que todas as luas ativas estão puxando em alinhamento. Use isso para desencadear surtos de magia selvagem, amplificar alcances de magias de cura, aumentar a severidade de tempestades ou marcar como uma noite sagrada para facções religiosas.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Como faço para que duas luas se alinhem em um momento específico da campanha?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Defina ambas as luas com o mesmo valor de deslocamento. Elas se alinharão novamente a cada múltiplo comum de seus dois períodos orbitais. Para alterná-las, dê à segunda lua um deslocamento igual à metade de seu período orbital.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Como funciona a previsão de 10 dias?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A previsão mostra a fase da lua de cada lua ativa como um ponto colorido para cada um dos próximos 10 dias de campanha. A porcentagem mostrada é o nível de maré combinado. Dias com alta porcentagem são candidatos para encontros dramáticos de magia ou clima.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Posso usar isso para Call of Cthulhu ou campanhas de horror?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. Use uma lua única de 29 dias e defina o deslocamento para que a lua cheia caia no clímax da sessão. O rastreador de maré pode representar influência do Mythos ou picos de sensibilidade psíquica que escalam com a porcentagem da fase.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Como igualo a fase da lua de um módulo de aventura publicado?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Observe a fase descrita e conte quantos dias no ciclo isso corresponde. Divida pelo período orbital e use essa fração como seu deslocamento. Por exemplo, um quarto crescente em um ciclo de 28 dias significa um deslocamento de 7.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Acompanhar Fases da Lua em uma Campanha de RPG de Mesa',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Defina o Período Orbital',
          'text': 'Insira o número de dias no jogo que sua lua leva para completar um ciclo completo.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Defina o Deslocamento Inicial',
          'text': 'Desloque a fase inicial inserindo um deslocamento em dias. Metade do período orbital começa em Lua Cheia.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Avançe o Contador de Dias',
          'text': 'Use os botões de passo ou o controle deslizante para avançar até o dia atual da sua campanha e leia a fase e o nível de maré.'
        }
      ]
    }
  ]
};
export default content;
