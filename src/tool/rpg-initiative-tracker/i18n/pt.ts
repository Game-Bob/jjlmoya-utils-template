import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Rastreador de Iniciativa',
  addCombatant: 'Adicionar combatente',
  removeCombatant: 'Remover',
  playerLabel: 'Jogador',
  npcLabel: 'PNJ',
  initiativeLabel: 'Iniciativa',
  modifierLabel: 'Modificador',
  namePlaceholder: 'Nome do personagem',
  initiativePlaceholder: 'Iniciativa',
  modifierPlaceholder: 'Modificador',
  addButton: 'Adicionar',
  startCombat: 'Iniciar combate',
  endCombat: 'Encerrar combate',
  nextTurn: 'Próximo turno',
  prevTurn: 'Turno anterior',
  roundLabel: 'Rodada',
  turnLabel: 'Turno',
  noCombatants: 'Nenhum combatente ainda. Adicione personagens para começar.',
  statusInput: 'Estado',
  combatStarted: 'Combate iniciado!',
  combatEnded: 'Combate encerrado',
  yourTurn: 'Turno',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'rastreador-de-iniciativa',
  title: 'Rastreador de Iniciativa RPG: Ordem de Turnos & Gerenciador de Iniciativa',
  description: 'Acompanhe a ordem de iniciativa para qualquer RPG de mesa. Adicione combatentes, role iniciativa, gerencie efeitos de estado e navegue pelos turnos em combate.',
  ui,
  seo: [
    { type: 'title', text: 'Como a Iniciativa Funciona em D&D e Outros RPGs de Mesa', level: 2 },
    { type: 'paragraph', html: 'A iniciativa determina a ordem das ações em combate. Cada participante faz um teste de Destreza no início da luta, e a ordem dos turnos vai do maior para o menor. Um rastreador de iniciativa digital automatiza a classificação, destaca o combatente ativo, acompanha os efeitos de estado em andamento e mantém toda a mesa informada sobre de quem é o próximo turno. Isso é especialmente útil para Mestres de Dungeon que gerenciam encontros complexos com vários tipos de inimigos e personagens jogadores.' },
    {
      type: 'stats',
      items: [
        { value: 'Ilimitados', label: 'Combatentes suportados' },
        { value: 'Ordem auto', label: 'Por rolagem de iniciativa' },
        { value: 'Tempo real', label: 'Acompanhamento de turnos' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Regras Padrão de Iniciativa para D&D 5e', level: 2 },
    { type: 'paragraph', html: 'Em D&D 5ª Edição, cada participante faz um teste de Destreza no início do combate. Jogadores rolam individualmente. O Mestre de Dungeon rola uma vez para cada grupo de monstros idênticos. A ordem dos turnos vai do maior para o menor, depois volta ao topo para a próxima rodada. Empates são resolvidos pelo valor de Destreza, ou o MD decide. Um rastreador digital lida com tudo isso automaticamente e mostra a ordem completa dos turnos de relance.' },
    {
      type: 'table',
      headers: ['Função', 'Acompanhamento manual', 'Rastreador digital'],
      rows: [
        ['Classificação', 'Reescrever a lista quando a iniciativa mudar', 'Reordenação automática instantânea'],
        ['Turno atual', 'Deve ser acompanhado verbalmente ou com uma ficha', 'Destacado com brilho verde'],
        ['Efeitos de estado', 'Bloco de notas separado ou dado perto do mini', 'Clique para ativar em cada combatente'],
        ['Contagem de rodadas', 'Contar mentalmente ou em papel de rascunho', 'Mostrado automaticamente'],
        ['Adicionar durante combate', 'Apagar e reescrever a ordem', 'Inserido na posição correta'],
      ],
    },
    {
      type: 'tip',
      title: 'Dicas para Gerenciar Iniciativa na Mesa',
      html: 'Role iniciativa para todos os monstros antes da sessão para economizar tempo durante o combate. Adicione efeitos de estado comuns como Atordoado ou Envenenado a um combatente assim que forem aplicados. Isso evita esquecer uma condição quando o turno do personagem afetado chegar. Use o botão Turno anterior para revisar o que aconteceu se precisar verificar uma decisão de uma rodada anterior.',
    },
    {
      type: 'title',
      text: 'Efeitos de Estado Comuns em Combate',
      level: 3,
    },
    { type: 'paragraph', html: 'Acompanhar condições durante o combate é uma das tarefas mais frequentemente negligenciadas. Um efeito de estado pode mudar completamente a eficácia de um personagem, e esquecer de removê-lo pode desequilibrar um encontro. O rastreador de iniciativa permite aplicar e remover condições com um único clique para que permaneçam visíveis ao lado do nome do combatente.' },
    {
      type: 'proscons',
      title: 'Gerenciamento digital vs manual de efeitos de estado',
      items: [
        {
          pro: 'As condições ficam visíveis ao lado do nome do personagem, então ninguém esquece um efeito ativo.',
          con: 'Exige lembrar de ativar e desativar os estados conforme são aplicados e removidos.',
        },
        {
          pro: 'Múltiplos estados podem estar ativos no mesmo combatente e são mostrados juntos.',
          con: 'O rastreador não aplica automaticamente os efeitos das regras; o MD ainda precisa gerenciá-los.',
        },
        {
          pro: 'Estados podem ser adicionados durante o combate sem pausar para escrever numa ficha de personagem.',
          con: 'Apenas etiquetas de estado predefinidas estão disponíveis por padrão.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sistemas de Iniciativa Alternativos',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iniciativa Padrão',
          description: 'Cada combatente rola uma vez no início. A mesma ordem se repete a cada rodada. Simples e previsível, mas a ordem é fixa após a primeira rolagem. Funciona bem para a maioria dos grupos e tamanhos de encontro.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Simples de aprender e ensinar', 'Ordem de turnos fixa a cada rodada', 'Funciona para qualquer grupo'],
        },
        {
          title: 'Iniciativa de Grupo',
          description: 'Todos os personagens jogadores agem juntos, depois todos os inimigos juntos. Comum em edições antigas e jogos OSR. Acelera o combate reduzindo o acompanhamento individual mas reduz a profundidade tática.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Resolução de combate mais rápida', 'Incentiva a coordenação do grupo', 'Menos variedade em turnos individuais'],
        },
        {
          title: 'Variante de Fator de Velocidade',
          description: 'Cada rodada os participantes declaram ações primeiro, depois rolam iniciativa modificada pela ação escolhida. Usado em conjuntos de regras opcionais. Cria uma ordem de turno imprevisível mas adiciona profundidade à tomada de decisões.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Ordem diferente a cada rodada', 'Escolha de ação afeta o tempo', 'Mais decisões táticas por turno'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossário do Rastreador de Combate',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Iniciativa',
          definition: 'Um teste de Destreza realizado no início do combate para determinar a sequência dos turnos. Cada participante rola e age em ordem decrescente.',
        },
        {
          term: 'Rodada',
          definition: 'Um ciclo completo onde cada combatente realiza um turno. Após o último combatente, a rodada termina e uma nova rodada começa do topo da ordem.',
        },
        {
          term: 'Efeito de Estado',
          definition: 'Uma condição temporária que modifica as capacidades de um personagem. Exemplos incluem Atordoado (não pode agir), Envenenado (desvantagem nas rolagens) e Cego (ataques com desvantagem).',
        },
        {
          term: 'PNJ',
          definition: 'Personagem Não Jogador controlado pelo Mestre de Dungeon. No rastreamento de iniciativa, PNJs são tipicamente inimigos ou criaturas neutras no encontro.',
        },
        {
          term: 'PJ',
          definition: 'Personagem Jogador controlado por um dos jogadores na mesa. PJs são distintos de PNJs no rastreador para ajudar o MD a identificar alvos aliados.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando Rerrolar a Iniciativa a Cada Rodada',
      icon: 'mdi:information-outline',
      badge: 'DICA DO MD',
      html: 'Alguns MDs preferem rerrolar a iniciativa a cada rodada para imprevisibilidade, enquanto a maioria mantém a mesma ordem por simplicidade. Se um novo combatente entrar no meio da luta, role sua iniciativa e insira-o na posição atual. O rastreador lida com isso automaticamente. Para encontros com chefes, considere dar ao vilão uma iniciativa fixa em um valor específico para tornar o combate mais estruturado.',
    },
  ],
  faq: [
    {
      question: 'Como adiciono combatentes à ordem de iniciativa?',
      answer: 'Insira o nome do personagem, a rolagem de iniciativa e o modificador de iniciativa, depois clique em Adicionar. Alterne entre os tipos Jogador e PNJ para distinguir visualmente os membros do grupo dos inimigos na lista.',
    },
    {
      question: 'O que acontece quando clico em Iniciar combate?',
      answer: 'Todos os combatentes são ordenados por iniciativa do maior para o menor. A ordem dos turnos começa do topo, o contador de rodadas inicia em 1 e o combatente ativo é destacado com um brilho verde.',
    },
    {
      question: 'Como acompanho efeitos de estado durante o combate?',
      answer: 'Clique em uma etiqueta de estado (Atordoado, Envenenado, Cego, etc.) para ativá-la ou desativá-la para o combatente selecionado. Estados ativos aparecem ao lado do nome do personagem. Isso lembra a todos sobre os efeitos em andamento quando o turno daquele combatente chegar.',
    },
    {
      question: 'Meus dados de combate persistem se eu atualizar a página?',
      answer: 'Sim. O rastreador de iniciativa salva o estado do combate no armazenamento local do seu navegador. Seus combatentes, ordem de turnos e efeitos de estado permanecem após recarregar a página. Os dados são limpos quando você clica em Encerrar combate.',
    },
    {
      question: 'Posso voltar ao turno anterior?',
      answer: 'Sim. O botão Turno anterior permite navegar para trás na ordem dos turnos. Isso é útil para revisar o que aconteceu antes na rodada ou corrigir um erro.',
    },
    {
      question: 'Posso adicionar ou remover combatentes durante o combate?',
      answer: 'Sim. Novos combatentes podem ser adicionados a qualquer momento e são automaticamente inseridos na posição correta com base na rolagem de iniciativa. Combatentes existentes podem ser removidos se saírem do encontro.',
    },
    {
      question: 'Funciona com qualquer sistema de RPG?',
      answer: 'Sim. O rastreador funciona com qualquer RPG de mesa que use ordem de turnos baseada em iniciativa. Insira os valores de iniciativa que seu sistema usa, seja uma rolagem de d20 mais Destreza para D&D ou um mecanismo diferente para outros jogos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Adicione combatentes antes do combate',
      text: 'Insira o nome de cada personagem, sua rolagem de iniciativa e modificador. Marque-os como Jogador ou PNJ. Adicione quantos combatentes seu encontro precisar.',
    },
    {
      name: 'Inicie o combate para travar a ordem',
      text: 'Clique em Iniciar combate para ordenar todos por iniciativa e começar o acompanhamento de turnos. O primeiro combatente na ordem é destacado.',
    },
    {
      name: 'Navegue pelos turnos e acompanhe condições',
      text: 'Use Próximo turno e Turno anterior para percorrer a ordem. Aplique efeitos de estado clicando nas etiquetas de estado para acompanhar condições durante o combate.',
    },
    {
      name: 'Encerre o combate quando terminar',
      text: 'Clique em Encerrar combate para parar o acompanhamento de turnos. Isso limpa o estado ativo e redefine o contador de rodadas enquanto mantém a lista de combatentes para o próximo encontro.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Rastreador de Iniciativa RPG',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como adiciono combatentes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Insira o nome do personagem, a rolagem de iniciativa e o modificador de iniciativa, depois clique em Adicionar. Jogadores e PNJs podem ser alternados para distingui-los na lista.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que acontece quando clico em Iniciar combate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Todos os combatentes são ordenados por iniciativa (do maior primeiro). A ordem dos turnos começa com o primeiro combatente e um contador de rodadas inicia em 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Usar o Rastreador de Iniciativa',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Adicionar combatentes',
          'text': 'Insira os detalhes do personagem: nome, rolagem de iniciativa e modificador. Alterne entre Jogador e PNJ antes de adicionar.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Iniciar combate',
          'text': 'Clique em Iniciar combate para ordenar todos os combatentes por iniciativa e começar o acompanhamento da ordem de turnos.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gerenciar turnos',
          'text': 'Use Próximo turno e Turno anterior para navegar pela ordem de turnos. O combatente ativo é destacado com um brilho verde.',
        },
      ],
    },
  ],
};
