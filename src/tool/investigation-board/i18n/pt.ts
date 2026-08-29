import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "criador-de-quadro-de-conspiracao",
  title: "Criador de Quadro de Conspiração: Mapas de Pistas & Relacionamentos RPG Online",
  description: "Desenhe quadros de conspiração interativos e mapas de investigação RPG. Conecte suspeitos, pistas e locais com fios coloridos.",
  ui: {
  "title": "Criador de Quadro de Conspiração",
  "addCard": "Adicionar Cartão",
  "searchPlaceholder": "Buscar cartões por nome ou pistas",
  "filterAll": "Todas as Categorias",
  "filterCharacter": "Personagens",
  "filterClue": "Pistas",
  "filterLocation": "Locais",
  "filterItem": "Itens",
  "cardName": "Nome do Cartão",
  "cardCategory": "Categoria",
  "cardDescription": "Descrição",
  "cardNotes": "Notas Privadas",
  "cardTags": "Tags separadas por vírgulas",
  "cardColor": "Cor de Destaque do Cartão",
  "save": "Salvar Alterações",
  "delete": "Excluir",
  "cancel": "Cancelar",
  "clearBoard": "Limpar Quadro",
  "connectionsTitle": "Mapa de Relações",
  "addConnection": "Adicionar Conexão",
  "connectionLabel": "Rótulo de Relação",
  "connectionColor": "Cor da Linha",
  "sourceCard": "Do Cartão",
  "targetCard": "Para o Cartão",
  "close": "Fechar",
  "character": "Personagem",
  "clue": "Pista",
  "location": "Local",
  "item": "Item",
  "custom": "Personalizado",
  "immersive": "Tela Cheia"
},
  seo: [
    { type: 'title', text: "Criador de Quadro de Conspiração Online: Organize Pistas e Relacionamentos RPG", level: 2 },
    { type: 'paragraph', html: "Desvendar uma rede complexa de mentiras, rastrear álibis de suspeitos e conectar evidências em cenas de crime pode sobrecarregar qualquer grupo de RPG investigativo. Seja narrando uma campanha de O Chamado de Cthulhu, um mistério cyberpunk, uma investigação de D&D ou escrevendo um livro de suspense, o nosso criador de quadro de conspiração online é a ferramenta definitiva. Arraste, solte, categorize e ligue pistas, NPCs e evidências físicas em um quadro de cortiça digital infinito. Use fios de relações coloridos para visualizar instantaneamente como os suspeitos se conectam a cenas de crime, álibis e motivos ocultos." },
    {
      type: 'stats',
      items: [
        { value: "Ilimitado", label: "Quadro de Nodos" },
        { value: "4", label: "Categorias" },
        { value: "Arrastar e Soltar", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Dicas para Estruturar o seu Quadro de Investigação RPG", level: 2 },
    { type: 'tip', title: "A Regra das Três Pistas", html: "Para cada conclusão ou dedução que você deseja que os jogadores alcancem, adicione pelo menos três pistas distintas ao quadro de investigação. Conecte-as com fios coloridos personalizados para mostrar diferentes caminhos de raciocínio possíveis. Use cartões de Personagens para suspeitos, Locais para cenas de crime e Itens para provas físicas. Mantenha as anotações privadas sempre atualizadas." },
    { type: 'title', text: "Quadros de Conspiração Digitais vs Quadros de Cortiça Físicos", level: 2 },
    {
      type: 'proscons',
      title: "Quadros de Conspiração Digitais vs Quadros de Cortiça Físicos",
      items: [
        { pro: "Tamanho de quadro ilimitado para adicionar tantas pistas, suspeitos e conexões quanto necessário sem limite de espaço.", con: "Requer uma tela, tablet ou dispositivo digital durante a sessão de jogo de mesa." },
        { pro: "Busca rápida e filtros de categorias para localizar imediatamente testemunhas ou evidências específicas durante as sessões.", con: "Falta a sensação tátil dos alfinetes e do fio de lã vermelha de verdade em uma parede real." },
        { pro: "Salve, carregue e compartilhe mapas digitalmente sem ocupar espaço físico entre as sessões de jogo.", con: "Requer acesso à internet ou armazenamento local do navegador para salvar o estado do quadro." }
      ]
    },
    { type: 'title', text: "Escolha de Categorias de Cartões para o seu Mapa de Mistérios", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Nodos de Personagens",
          description: "Representam suspeitos, testemunhas, NPCs aliados ou organizações. Destaque relações com linhas coloridas.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Rastreie álibis e motivos de suspeitos",
            "Conecte laços familiares e alianças secretas",
            "Registre detalhes de depoimentos de testemunhas"
          ]
        },
        {
          title: "Nodos de Pistas",
          description: "Representam evidências físicas, relatórios de autópsia, álibis ou boatos descobertos pelos jogadores durante a campanha.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Relatórios de autópsia e laudos forenses",
            "Objetos físicos recolhidos nas cenas de crime",
            "Boatos ouvidos e segredos revelados"
          ]
        },
        {
          title: "Nodos de Locais",
          description: "Cenas de crime, residências de suspeitos, esconderijos secretos ou cidades.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Fotos de cenas de crime e mapas",
            "Residências de personagens importantes",
            "Esconderijos secretos e portais dimensionais"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Glossário de Mapeamento de Conspirações", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Nodo de Investigação", definition: "Qualquer cartão na tela representando uma pessoa, local, pista ou item." },
        { term: "Fio de Relação", definition: "Uma linha colorida ligando dois cartões, indicando como eles estão conectados (por exemplo: Suspeito, Álibi, Proprietário)." },
        { term: "Modo Imersivo", definition: "Um layout de tela cheia que oculta os painéis de controle, maximizando a área de trabalho em celulares ou tablets." },
        { term: "Caminho de Destaque", definition: "Um efeito visual que mostra apenas os nodos e linhas conectados de um cartão selecionado, obscurecendo o resto do quadro." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Dica de Desempenho para Dispositivos Móveis",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Se o arrasto de nodos estiver lento em tablets antigos, ative o modo tela cheia para ocultar menus desnecessários. Certifique-se de ativar o ajuste automático à grade (os cartões alinham a cada 15px) para manter o quadro organizado com pouco esforço."
    }
  ],
  faq: [
    { question: "Como adiciono linhas de conexão?", answer: "Clique em Adicionar Conexão no painel de controle ou clique no ícone de link de um cartão e selecione o cartão de destino." },
    { question: "Posso arrastar cartões no celular?", answer: "Sim, o quadro suporta eventos de toque para arrastar e mover cartões sem problemas em smartphones e tablets." },
    { question: "Posso usar cores de cartão personalizadas?", answer: "Sim. Dê duplo clique em um cartão, selecione Personalizado na Categoria e escolha uma cor de destaque." },
    { question: "O quadro salva o meu trabalho?", answer: "Sim. O seu progresso é salvo automaticamente no armazenamento local do navegador." },
    { question: "Como faço zoom e me movo pelo quadro?", answer: "Use gestos de pinça ou a roda do mouse para aproximar ou afastar. Arraste o fundo para mover-se pela tela." }
  ],
  bibliography,
  howTo: [
    { name: "Adicionar Cartões de Investigação", text: "Crie cartões que representem NPCs, pistas, cenas de crime ou itens." },
    { name: "Vincular Relações", text: "Crie linhas de conexão entre cartões para mostrar como as pistas se relacionam." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Criador de Quadro de Conspiração: Mapas de Pistas & Relacionamentos RPG Online",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Como adiciono linhas de conexão?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Clique em Adicionar Conexão no painel de controle ou clique no ícone de link de um cartão e selecione o cartão de destino."
          }
        },
        {
          '@type': 'Question',
          'name': "Posso arrastar cartões no celular?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sim, o quadro suporta eventos de toque para arrastar e mover cartões sem problemas em smartphones e tablets."
          }
        },
        {
          '@type': 'Question',
          'name': "Posso usar cores de cartão personalizadas?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sim. Dê duplo clique em um cartão, selecione Personalizado na Categoria e escolha uma cor de destaque."
          }
        },
        {
          '@type': 'Question',
          'name': "O quadro salva o meu trabalho?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sim. O seu progresso é salvo automaticamente no armazenamento local do navegador."
          }
        },
        {
          '@type': 'Question',
          'name': "Como faço zoom e me movo pelo quadro?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Use gestos de pinça ou a roda do mouse para aproximar ou afastar. Arraste o fundo para mover-se pela tela."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Como Usar o Criador de Quadro de Conspiração",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Adicionar Cartões de Investigação",
          'text': "Crie cartões que representem NPCs, pistas, cenas de crime ou itens."
        },
        {
          '@type': 'HowToStep',
          'name': "Vincular Relações",
          'text': "Crie linhas de conexão entre cartões para mostrar como as pistas se relacionam."
        }
      ]
    }
  ]
};
