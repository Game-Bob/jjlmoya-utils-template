import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: '奇幻符文翻译器',
  inputPlaceholder: '输入要翻译的单词或名称...',
  alphabetLabel: '符文表',
  elderFuthark: 'Elder Futhark',
  angloSaxon: '盎格鲁-撒克逊',
  fantasy: '奇幻字体',
  theban: '底比斯',
  enochian: '以诺语',
  daemonic: '恶魔语',
  ogham: '欧甘文',
  translate: '翻译',
  clear: '清除',
  copy: '复制文本',
  copied: '已复制！',
  runeName: '名称',
  runeMeaning: '含义',
  runePhonetic: '读音',
  clickHint: '点击符文查看详情',
  outputLabel: '符文输出',
  noInput: '在上方输入文本以转换为符文',
  unknownChar: '？',
  gmMode: '游戏主持人模式',
  exitGmMode: '退出',
  gmHint: '向你的玩家展示此内容',
  seedLabel: '种子',
  seedPlaceholder: '可选',
  seedApplied: '已锁定',
  shuffleSeed: '随机',
};

const faq = [
  {
    question: '什么是Elder Futhark?',
    answer: 'Elder Futhark是卢恩字母表的最古老形式，在2至8世纪由日耳曼部落使用。它由24个卢恩字母组成，分为三组，每组八个，称为埃特（aettir）。每个卢恩字母都有一个音值和代表自然或神话概念的象征性名称。',
  },
  {
    question: 'Elder Futhark和盎格鲁-撒克逊卢恩字母有什么区别？',
    answer: '盎格鲁-撒克逊Futhorc是在英格兰发展起来的Elder Futhark扩展版本。它增加了额外的卢恩字母来表示古英语特有的发音，从24个字素扩展到多达33个字素。其含义和音值也随时间发生了变化。',
  },
  {
    question: '这个翻译器能完美地转换单词吗？',
    answer: '该工具提供逐字转写为符文符号的功能。历史上的符文使用是基于语音而非逐字直译，因此结果是现代诠释。奇幻字体选项提供了一种创意的虚构字母表，用于桌面RPG的氛围营造。',
  },
  {
    question: '我可以在我的桌面RPG战役中使用这些符文吗？',
    answer: '可以！游戏主持人和玩家都可以使用该翻译器创建符文铭文、魔法文字、秘密讯息或角色和地点的装饰性名称。奇幻字体选项专为奇幻角色扮演场景设计。',
  },
  {
    question: '这个工具会存储我输入的文本吗？',
    answer: '不会。所有操作均在您的浏览器本地进行。任何文本、翻译或选择都不会发送到任何服务器。您的创作内容完全保密。',
  },
  {
    question: '当我点击一个符文时会发生什么？',
    answer: '点击任何符文卡片都会显示其传统名称、象征含义和音值。这有助于您学习符文并为您的RPG需求选择合适的符号。',
  },
];

const howTo = [
  {
    name: '输入文本',
    text: '在输入框中输入任何英文单词、名称或短语。翻译器对单个单词或短句效果最佳。',
  },
  {
    name: '选择字母表',
    text: '在Elder Futhark（古代日耳曼）、盎格鲁-撒克逊（中世纪英语）或奇幻字体（桌面RPG风格）之间选择。',
  },
  {
    name: '翻译与探索',
    text: '点击"翻译"来转换您的文本。每个符文以卡片形式呈现。点击任意符文可了解其名称、含义和发音。使用"复制"按钮将符文文本保存到剪贴板。',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantasy-runes-translator',
  title: '奇幻符文翻译器 / Elder Futhark、底比斯、以诺语与恶魔语符文转换器',
  description: '将文本翻译为Elder Futhark、盎格鲁-撒克逊Futhorc、底比斯、以诺语、恶魔语、欧甘文或奇幻字体。非常适合桌面RPG谜题、战役、巫师卷轴和神秘符文。',
  ui,
  seo: [
    { type: 'title', text: '用于桌面RPG世界构建的卢恩字母表和神秘文字体系', level: 2 },
    { type: 'paragraph', html: '神秘卢恩字母表、古老符号和秘密文字体系为D&D、Pathfinder和Warhammer等奇幻桌面角色扮演游戏带来了无与伦比的沉浸感。无论您是在制作刻有Elder Futhark的隐藏矮人遗迹、设计包含以诺天使语文字的神秘魔法书、使用底比斯字母表散布女巫线索、还是书写被禁的恶魔信息，我们的符文生成器都能实时将普通英语文本转化为风格化符号。用实体道具、神秘密码和古代石刻激发玩家的好奇心。' },
    {
      type: 'stats',
      items: [
        { value: '7', label: '符文类型' },
        { value: '150+', label: '符号变体' },
        { value: '即时', label: '视觉转写' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Elder Futhark与盎格鲁-撒克逊Futhorc：古代日耳曼与北欧符文', level: 2 },
    { type: 'paragraph', html: '可追溯至2世纪的Elder Futhark是最古老的卢恩体系，由代表自然基本力量的24个字符组成。盎格鲁-撒克逊Futhorc将此体系扩展至33个字符以表示古英语语音。这些历史上真实的符号非常适合在RPG战役设定中代表矮人氏族、受北欧神话启发的文化、维京雕刻和野蛮人氏族徽章。' },
    { type: 'title', text: '底比斯与欧甘文：中世纪巫术与凯尔特树文字母表', level: 2 },
    { type: 'paragraph', html: '常被称为霍诺里乌斯符文或女巫字母表的底比斯文字是一种历史上流行于神秘学传统和威卡教的中世纪密码。欧甘文是一种早期中世纪字母表，使用沿边缘刻划的线性线条，与凯尔特民间传说和德鲁伊树魔法密切关联。使用这些文字来装饰德鲁伊神殿、精灵森林、异教祭坛或来自秘密女巫集会的隐藏信息。' },
    { type: 'title', text: '以诺语与恶魔文字：奥术天使与深渊语言', level: 2 },
    { type: 'paragraph', html: '由约翰·迪伊和爱德华·凯利在16世纪首次记录的以诺语是一种精细构建的语言，被认为是天使的语言。恶魔文字则代表深渊符号、黑暗契约和地狱印记。通过留下可破译的恶魔契约、黑暗邪教雕刻和天使遗物供您的法师、圣武士和牧师调查，提升您战役的叙事层次。' },
    { type: 'title', text: '自定义奇幻字体：角色扮演即用的创意字母表', level: 2 },
    { type: 'paragraph', html: '对于超越真实历史的世界，我们的自定义奇幻字体提供了一套虚构的符文，专为唤起经典高奇幻美学而设计。每个符文都设计为在游戏主持人的打印输出、数字地图和自定义玩家标识上脱颖而出。将其与基于种子的随机化结合，为不同的派系、国家或古神创造独特的秘密语言。' },
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
      'name': '奇幻符文翻译器',
      'operatingSystem': '全部',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': '需要HTML5。需要JavaScript。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用奇幻符文翻译器',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
