import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Tradutor de Runas Fantásticas',
  inputPlaceholder: 'Digite uma palavra ou nome para traduzir...',
  alphabetLabel: 'Alfabeto Rúnico',
  elderFuthark: 'Futhark Antigo',
  angloSaxon: 'Anglo-Saxão',
  fantasy: 'Escrita Fantástica',
  theban: 'Tebano',
  enochian: 'Enoquiano',
  daemonic: 'Demoníaco',
  ogham: 'Ogham',
  translate: 'Traduzir',
  clear: 'Limpar',
  copy: 'Copiar texto',
  copied: 'Copiado!',
  runeName: 'Nome',
  runeMeaning: 'Significado',
  runePhonetic: 'Fonético',
  clickHint: 'Clique numa runa para ver os detalhes',
  outputLabel: 'Saída Rúnica',
  noInput: 'Insira texto acima para traduzir em runas',
  unknownChar: '?',
  gmMode: 'Modo Mestre',
  exitGmMode: 'Sair',
  gmHint: 'Mostre isto aos seus jogadores',
  seedLabel: 'Semente',
  seedPlaceholder: 'Opcional',
  seedApplied: 'Bloqueado',
  shuffleSeed: 'Embaralhar',
};

const faq = [
  {
    question: 'O que é o Futhark Antigo?',
    answer: 'O Futhark Antigo é a forma mais antiga dos alfabetos rúnicos, usado por tribos germânicas do século II ao VIII. É composto por 24 runas divididas em três grupos de oito chamados aettir. Cada runa tem um valor fonético e um nome simbólico representando conceitos naturais ou mitológicos.',
  },
  {
    question: 'Qual é a diferença entre o Futhark Antigo e as runas anglo-saxãs?',
    answer: 'O Futhorc anglo-saxão é uma versão estendida do Futhark Antigo desenvolvida na Inglaterra. Acrescenta runas adicionais para representar sons específicos do inglês antigo, expandindo de 24 para até 33 caracteres. Os significados e valores fonéticos também mudaram ao longo do tempo.',
  },
  {
    question: 'Este tradutor converte palavras perfeitamente?',
    answer: 'Esta ferramenta fornece uma transliteração letra por letra para símbolos rúnicos. O uso histórico das runas era fonético em vez de literal letra por letra, portanto o resultado é uma interpretação moderna. A opção Escrita Fantástica oferece um alfabeto fictício criativo para ambientação de RPG de mesa.',
  },
  {
    question: 'Posso usar estas runas nas minhas campanhas de RPG de mesa?',
    answer: 'Sim! Mestres de jogo e jogadores podem usar o tradutor para criar inscrições rúnicas, escritos mágicos, mensagens crípticas ou nomes decorativos para personagens e locais. A opção Escrita Fantástica foi projetada especificamente para cenários de fantasia.',
  },
  {
    question: 'Esta ferramenta armazena o texto que digito?',
    answer: 'Não. Tudo funciona localmente no seu navegador. Nenhum texto, tradução ou seleção é jamais enviado a qualquer servidor. O seu trabalho criativo permanece totalmente privado.',
  },
  {
    question: 'O que acontece quando clico numa runa?',
    answer: 'Clicar em qualquer carta de runa exibe seu nome tradicional, significado simbólico e valor fonético. Isto ajuda-o a aprender as runas e a escolher o símbolo certo para as suas necessidades de RPG.',
  },
];

const howTo = [
  {
    name: 'Introduzir texto',
    text: 'Digite qualquer palavra, nome ou frase em inglês no campo de entrada. O tradutor funciona melhor com palavras isoladas ou frases curtas.',
  },
  {
    name: 'Selecionar um alfabeto',
    text: 'Escolha entre Futhark Antigo (germânico antigo), Anglo-Saxão (inglês medieval) ou Escrita Fantástica (estilo RPG de mesa).',
  },
  {
    name: 'Traduzir e explorar',
    text: 'Clique em Traduzir para converter o seu texto. Cada runa aparece como um cartão. Clique em qualquer runa para saber seu nome, significado e som. Use o botão Copiar para guardar o texto rúnico na sua área de transferência.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'tradutor-runas-fantasticas',
  title: 'Tradutor de Runas Fantásticas / Conversor de Runas Futhark Antigo, Tebano, Enoquiano e Demoníaco',
  description: 'Traduza texto para Futhark Antigo, Futhorc Anglo-Saxão, Tebano, Enoquiano, Demoníaco, Ogham ou escritas fantásticas. Perfeito para puzzles de RPG de mesa, campanhas, pergaminhos de mago e runas místicas.',
  ui,
  seo: [
    { type: 'title', text: 'Alfabetos Rúnicos e Escritas Místicas para Construção de Mundos de RPG de Mesa', level: 2 },
    { type: 'paragraph', html: 'Os alfabetos rúnicos místicos, símbolos antigos e escritas secretas trazem uma imersão incomparável aos jogos de RPG de mesa fantásticos como D&D, Pathfinder e Warhammer. Esteja você criando ruínas anãs ocultas gravadas com Futhark Antigo, projetando um grimório arcano contendo escritas angélicas enoquianas, espalhando pistas de bruxaria usando o alfabeto tebano ou escrevendo mensagens demoníacas proibidas, o nosso gerador de runas transforma texto inglês padrão em símbolos estilizados em tempo real. Desperte a curiosidade dos jogadores com acessórios físicos, cifras misteriosas e antigas esculturas em pedra.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Alfabetos Rúnicos' },
        { value: '150+', label: 'Variações de Símbolos' },
        { value: 'Instantânea', label: 'Translit. Visual' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Futhark Antigo & Futhorc Anglo-Saxão: Runas Germânicas e Nórdicas Antigas', level: 2 },
    { type: 'paragraph', html: 'Datando do século II, o Futhark Antigo é o sistema rúnico mais antigo, consistindo em 24 caracteres que representam forças fundamentais da natureza. O Futhorc anglo-saxão expandiu este sistema para incluir até 33 caracteres para a fonética do inglês antigo. Estes símbolos históricos são perfeitos para representar clãs anões, culturas inspiradas na mitologia nórdica, esculturas vikings e insígnias de clãs bárbaros nas suas campanhas de RPG.' },
    { type: 'title', text: 'Tebano & Ogham: Alfabetos Medievais de Bruxaria e Árvores Celtas', level: 2 },
    { type: 'paragraph', html: 'Frequentemente chamada de Runas de Honório ou Alfabeto das Bruxas, a escrita tebana é uma cifra medieval historicamente popular usada em tradições ocultas e na Wicca. O Ogham, um alfabeto do início da Idade Média, usa traços lineares esculpidos ao longo de arestas, famosamente ligado ao folclore celta e à magia arbórea druídica. Use estas escritas para embelezar santuários druídicos, florestas élficas, altares pagãos ou mensagens ocultas de covens de bruxas.' },
    { type: 'title', text: 'Enoquiano & Escritas Demoníacas: Línguas Angélicas e Abissais Arcanas', level: 2 },
    { type: 'paragraph', html: 'Registado pela primeira vez por John Dee e Edward Kelley no século XVI, o Enoquiano é uma língua construída detalhada considerada a língua dos anjos. As escritas demoníacas representam glifos abissais, pactos sombrios e marcações infernais. Eleve as apostas narrativas da sua campanha deixando contratos demoníacos decifráveis, esculturas de cultos obscuros e relíquias angélicas para os seus magos, paladinos e clérigos investigarem.' },
    { type: 'title', text: 'Escrita Fantástica Personalizada: Alfabetos Criativos Prontos para RPG', level: 2 },
    { type: 'paragraph', html: 'Para mundos que vão além da história real, a nossa Escrita Fantástica personalizada oferece um conjunto fictício de runas construídas especificamente para evocar a estética clássica de alta fantasia. Cada runa é projetada para se destacar em impressões de mestre de jogo, mapas digitais e fichas de jogador personalizadas. Combine-a com randomizações baseadas em sementes para criar línguas secretas únicas para diferentes facções, nações ou deuses antigos.' },
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
      'name': 'Tradutor de Runas Fantásticas',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como usar o Tradutor de Runas Fantásticas',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
