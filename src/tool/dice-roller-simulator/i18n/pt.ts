import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'rolador-dados-simulador-probabilidade',
  title: 'Rolador de Dados & Simulador de Probabilidade',
  description: 'Lance dados poliédricos virtuais (D4, D6, D8, D10, D12, D20, D100), adicione modificadores e veja estatísticas ao vivo e probabilidades de rolagem para RPG e jogos de tabuleiro.',
  ui: {
    title: 'Rolador de Dados & Simulador de Probabilidade',
    rollButton: 'Rolar dados',
    clearButton: 'Limpar histórico',
    historyTitle: 'Histórico de rolagens',
    noHistory: 'Nenhuma rolagem registrada. Adicione dados e clique em Rolar para começar.',
    totalRolls: 'Rolagens totais',
    averageRoll: 'Resultado médio',
    lastRoll: 'Último total',
    modifierLabel: 'Modificador (+/-)',
    probabilityTitle: 'Análise de probabilidade',
    selectDice: 'Selecione os dados para rolar',
  },
  seo: [
    { type: 'title', text: 'Dominando as probabilidades: Como a estatística dos dados molda o seu jogo', level: 2 },
    { type: 'paragraph', html: 'Os dados poliédricos são a alma dos jogos de RPG de mesa e tabuleiros modernos. Não importa se você busca superar uma jogada de salvamento em Dungeons & Dragons ou rolar para obter recursos, o resultado é regido por probabilidade matemática. Entender como a combinação de diferentes tipos de dados afeta suas chances é essencial para tomar decisões táticas durante a partida.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Probabilidade de 20 natural' },
        { value: '10.5', label: 'Média de uma rolagem de 3d6' },
        { value: '9.75%', label: '20 natural com vantagem' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'A matemática por trás de múltiplos dados: Por que 3d6 é mais seguro que 1d20', level: 2 },
    { type: 'paragraph', html: 'Ao rolar um único D20, cada resultado de 1 a 20 tem a mesma probabilidade de 5%, gerando uma distribuição plana. Por outro lado, ao rolar múltiplos dados como 3d6, os resultados se concentram em torno da média de 10.5. Essa curva de sino significa que é muito mais provável obter um resultado moderado do que valores extremos, trazendo consistência e reduzindo a aleatoriedade acentuada de dados individuais.' },
    { type: 'title', text: 'Probabilidades do D20 explicadas: Críticos, falhas e impacto de modificadores', level: 2 },
    { type: 'paragraph', html: 'Um modificador simples de mais dois pode mudar drasticamente as chances de sucesso, transformando tarefas difíceis em desafios razoáveis. Em muitos sistemas de jogo, un 20 natural representa um sucesso crítico automático (5% de chance), enquanto um 1 natural é uma falha crítica (pifia). Visualizar esses resultados ajuda a desmistificar o acaso e permite que você planeje seus movimentos táticos com base em estatísticas.' },
    {
      type: 'title',
      text: 'Tabela de referência de dados poliédricos padrão',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de dado', 'Rolagem mínima', 'Rolagem máxima', 'Resultado médio', 'Função principal em RPGs de mesa'],
      rows: [
        ['D4', '1', '4', '2.5', 'Mísseis mágicos, adagas, perigos menores'],
        ['D6', '1', '6', '3.5', 'Bolas de fogo, espadas comuns, testes de atributos'],
        ['D8', '1', '8', '4.5', 'Espadas longas, magias de cura, armas médias'],
        ['D10', '1', '10', '5.5', 'Alabardas, truques, dezenas de percentil'],
        ['D12', '1', '12', '6.5', 'Grandes machados, pontos de vida de bárbaro'],
        ['D20', '1', '20', '10.5', 'Jogadas de salvamento, ataques, testes de perícia'],
        ['D100', '1', '100', '50.5', 'Tabelas de percentil, efeitos de magia selvagem'],
      ],
    },
    {
      type: 'tip',
      title: 'Como calcular médias de dados mentalmente',
      html: 'Para encontrar a média de qualquer dado, some o valor mínimo (1) e o máximo, e divida por 2. Por exemplo, a média de um D6 is (1 + 6) / 2 = 3.5. Para vários dados, multiplique a média de um único dado pelo número de dados (a média de 3d6 é 3 * 3.5 = 10.5). Somar um modificador fixo apenas adiciona o valor à média final (3d6 + 4 promedia 14.5).',
    },
    {
      type: 'title',
      text: 'Comparação de sistemas de dados planos e curvos',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Sistema D20 contra sistema de curva de sino de 3d6',
      items: [
        {
          pro: 'Os sistemas D20 são rápidos de calcular e oferecem um 5% constante para críticos e falhas.',
          con: 'Os resultados de D20 são muito instáveis, fazendo com que a perícia do personagem dependa muito da sorte.',
        },
        {
          pro: 'As curvas de sino de 3d6 priorizam os resultados médios, garantindo que os personagens habilidosos raramente falhem em tarefas fáceis.',
          con: 'Os sistemas de 3d6 exigem somar três dados e tornam os acertos críticos perfeitos (um 18) extremamente raros (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compreendendo as mecânicas de probabilidade',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sistema D20 (Linear)',
          description: 'Usa um único dado de 20 lados para ações, onde cada resultado tem 5% de probabilidade. Alta variação gera emoção, mas reduz a consistência.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            '5% de chance fixa por resultado',
            'Alta variação e oscilações',
            'Os modificadores afetam o sucesso de forma linear',
          ],
        },
        {
          title: 'Sistema 3d6 (Curva de sino)',
          description: 'Soma três dados de 6 lados, criando uma distribuição normal centrada em 10.5. Os resultados são muito consistentes.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Resultados médios muito prováveis',
            'Resultados extremos muito raros',
            'Os modificadores têm impacto não linear',
          ],
        },
        {
          title: 'Sistema percentil (Rolagem por baixo)',
          description: 'Usa dois dados de 10 lados para gerar um número entre 1 and 100. O objetivo é rolar abaixo do atributo do personagem, tornando o sucesso imediato.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Porcentagem direta de chance de sucesso',
            'Fácil de entender à primeira vista',
            'O progresso do personagem é claro matematicamente',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'A falácia do apostador: Por que os dados não têm memória',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Um erro comum no RPG de mesa é acreditar que as jogadas anteriores afetam as futuras. Se você tirar três "1" seguidos em um D20, você pode achar que um resultado alto está "por vir". Na verdade, cada rolagem é um evento independente. A chance de tirar 20 na próxima rolagem permanece exatamente em 5%. Saber disso ajuda a tomar decisões táticas conscientes.',
    },
    {
      type: 'title',
      text: 'Glossário de dados e probabilidade em jogos de mesa',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Vantagem e Desvantagem',
          definition: 'Mecânica onde um jogador rola dois D20 e escolhe o resultado mais alto (Vantagem) ou o mais baixo (Desvantagem). A vantagem eleva a média de 10.5 para 13.8.',
        },
        {
          term: 'Curva de sino (distribuição normal)',
          definition: 'Distribuição na qual os resultados se concentram em torno do valor médio. Ocorre ao somar vários dados (como 3d6 ou 2d10).',
        },
        {
          term: 'Acerto crítico',
          definition: 'Sucesso automático que ocorre ao obter o número máximo do dado (um 20 natural em D20), geralmente concedendo bônus ou dano extra.',
        },
        {
          term: 'Falha crítica',
          definition: 'Falha automática de consequências cômicas ou drásticas, provocada ao obter um 1 no dado.',
        },
        {
          term: 'Valor esperado',
          definition: 'A média de resultados de suas rolagens a longo prazo. Para um único D6 é 3.5; para um D20 é 10.5.',
        },
        {
          term: 'Dados percentis',
          definition: 'Par de dados de 10 lados (um para as dezenas e outro para as unidades) lançados juntos para dar um resultado de 1 a 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Como funciona o simulador de probabilidade?',
      answer: 'Ele calcula a distribuição exata de probabilidade para a combinação de dados e o modificador selecionados através de matemática combinatória, permitindo ver suas chances de rolar acima ou abaixo de determinados valores.',
    },
    {
      question: 'Quais dados são suportados?',
      answer: 'Todos os dados poliédricos usados comumente em RPGs e jogos de mesa, incluindo D4, D6, D8, D10, D12, D20 e D100.',
    },
    {
      question: 'O que são modificadores e como funcionam?',
      answer: 'Os modificadores são valores inteiros fixos (+1, -2, etc.) que você adiciona ou subtrai do total da rolagem para simular habilidades do personagem, bônus ou penalidades situacionais.',
    },
    {
      question: 'O que significa rolar com Vantagem ou Desvantagem?',
      answer: 'Rolar com Vantagem significa rolar dois dados D20 e ficar com o maior resultado. Rolar com Desvantagem significa rolar dois dados D20 e ficar com o menor. Essa é uma mecânica tradicional de RPG de mesa.',
    },
    {
      question: 'O que são Acertos Críticos e Falhas Críticas?',
      answer: 'O Acerto Crítico ocorre quando um dado atinge seu valor máximo (como 20 natural no D20), assegurando sucesso automático. A Falha Crítica ocorre quando um dado rola 1, resultando em falha automática e frequentemente cômica.',
    },
    {
      question: 'Como o simulador calcula as probabilidades de rolagem?',
      answer: 'O simulador mapeia matematicamente cada resultado possível da pilha de dados e modificadores selecionada, fornecendo a porcentagem exata de chance para cada resultado total.',
    },
    {
      question: 'Por que rolar 3d6 é mais estável que rolar um único D20?',
      answer: 'O D20 oferece chances fixas de 5% para cada número. Rolar 3d6 cria uma curva de sino, onde os resultados tendem a se agrupar próximos à média de 10.5, diminuindo muito a incidência de valores extremos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Adicionar dados',
      text: 'Clique nos botões de dados para adicioná-los à sua pilha ativa de rolagens.',
    },
    {
      name: 'Adicionar modificador',
      text: 'Insira um modificador positivo ou negativo para aplicar à soma final.',
    },
    {
      name: 'Rolar e ver estatísticas',
      text: 'Clique no botão Rolar para ver as animações de resultado, histórico e análise de probabilidade.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Rolador de Dados & Simulador de Probabilidade',
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
          'name': 'Como funciona o simulador de probabilidade?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ele calcula a distribuição exata de probabilidade para a combinação de dados e o modificador selecionados através de matemática combinatória, permitindo ver suas chances de rolar acima ou abaixo de determinados valores.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quais dados são suportados?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Todos os dados poliédricos usados comumente em RPGs e jogos de mesa, incluindo D4, D6, D8, D10, D12, D20 e D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'O que são modificadores e como funcionam?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Os modificadores são valores inteiros fixos (+1, -2, etc.) que você adiciona ou subtrai do total da rolagem para simular habilidades do personagem, bônus ou penalidades situacionais.'
          }
        },
        {
          '@type': 'Question',
          'name': 'O que significa rolar com Vantagem ou Desvantagem?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rolar com Vantagem significa rolar dois dados D20 e ficar com o maior resultado. Rolar com Desvantagem significa rolar dois dados D20 e ficar com o menor. Essa é uma mecânica tradicional de RPG de mesa.'
          }
        },
        {
          '@type': 'Question',
          'name': 'O que são Acertos Críticos e Falhas Críticas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O Acerto Crítico ocorre quando um dado atinge seu valor máximo (como 20 natural no D20), assegurando sucesso automático. A Falha Crítica ocorre quando um dado rola 1, resultando em falha automática e frequentemente cômica.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Como o simulador calcula as probabilidades de rolagem?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O simulador mapeia matematicamente cada resultado possível da pilha de dados e modificadores selecionada, fornecendo a porcentagem exata de chance para cada resultado total.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Por que rolar 3d6 é mais estável que rolar um único D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O D20 oferece chances fixas de 5% para cada número. Rolar 3d6 cria uma curva de sino, onde os resultados tendem a se agrupar próximos à média de 10.5, diminuindo muito a incidência de valores extremos.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Adicionar dados',
          'text': 'Clique nos botões de dados para adicioná-los à sua pilha ativa de rolagens.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Adicionar modificador',
          'text': 'Insira um modificador positivo ou negativo para aplicar à soma final.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Rolar e ver estatísticas',
          'text': 'Clique no botão Rolar para ver as animações de resultado, histórico e análise de probabilidade.'
        }
      ]
    }
  ],
};
