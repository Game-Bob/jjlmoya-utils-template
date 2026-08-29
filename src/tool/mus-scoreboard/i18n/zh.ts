import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: '输入两个对局组合的名字，设定本桌规则，在每手牌结算时点击加分。',
  pairOneLabel: '第一组',
  pairTwoLabel: '第二组',
  pairOneDefault: '北桌',
  pairTwoDefault: '南桌',
  targetPointsLabel: '每局目标分数 (Chico)',
  targetPointsHint: '选择每局比赛的决胜分数线 (30、40 或 50 分)。',
  gamesToWinLabel: '赢得大比分 (Vaca) 所需局数',
  gamesToWinHint: '首先达到该局数的组将赢得整场比赛。',
  deckLabel: '桌面所用纸牌',
  deckHint: '40张牌的西班牙纸牌 (Baraja española) 是 Mus 的传统选择；法式扑克牌也可调整后使用。',
  spanishDeck: 'Baraja española (西班牙纸牌)',
  frenchDeck: '法式扑克牌',
  frenchDeckNotice: '使用法式扑克牌时，请抽出 8、9、10，保持 40 张牌。Jack (J) 相当于 Sota，Queen (Q) 相当于 Caballo，King (K) 相当于 Rey。',
  pointsOption30: '30 分',
  pointsOption40: '40 分',
  pointsOption50: '50 分',
  gamesOption1: '1 局',
  gamesOption2: '2 局',
  gamesOption3: '3 局',
  startMatch: '开启记分板',
  matchSettings: '设定组名与规则',
  liveMatch: '实时对局',
  targetLabel: '分局',
  gameLabel: '局',
  gamePlural: '局',
  vacaLabel: '局先胜',
  scoreLabel: '当前筹码 (Piedras)',
  handLabel: '选择本手发牌顺位首位 (Mano)',
  handSelected: '为发牌首位 (Mano)。',
  stonesLabel: '记分筹码',
  stoneSingular: '1分筹码 (Piedra)',
  stonePlural: '1分筹码 (Piedras)',
  amarracoSingular: '5分筹码 (Amarraco)',
  amarracoPlural: '5分筹码 (Amarracos)',
  pointsToGo: '分胜出',
  addStone: '1分 (Piedra)',
  addAmarraco: '5分 (Amarraco)',
  closeGame: '结算本局 (Chico)',
  closeGamePrompt: '确认该组赢得本局 (Chico) 并开始下一局？',
  confirmationTitle: '确认操作',
  confirmAction: '确认',
  cancelAction: '继续比赛',
  undo: '撤销',
  resetMatch: '重置比赛',
  resetMatchPrompt: '确定要重置当前整场比赛并清空记分历史吗？',
  historyTitle: '近期记分记录',
  noHistory: '暂无记分记录。',
  matchReady: '棋牌桌已就绪。',
  closeGameHint: '已有组达到目标分数。请确认本局获胜方。',
  waitingForScore: '继续记分。领先组距离目标尚差：',
  gameWon: '本局结束。',
  vacaWon: '获得大比分胜利 (Vaca)！桌面就绪后可开启新比赛。',
  gameClosed: '赢得了本局。',
  pointsAdded: '获得',
  matchSaved: '比分已保存在本设备中。',
  lastAction: '最近操作',
  settingsApplied: '新规则已生效。',
  pairNameRequired: '请在开启记分板前为两组都输入名称。',
  visualScoreLabel: 'Mus 对局专用数字记分板',
};

const faq = [
  {
    question: '这款在线 Mus 记分板可以记录哪些内容？',
    answer: '可记录两组选手名称、单分筹码 (Piedras)、5分筹码 (Amarracos)、已胜局数 (Chicos)、大比分 (Vaca)、发牌首位 (Mano) 标记以及详细的近期记分历史。',
  },
  {
    question: '为什么把 1分 (Piedra) 和 5分 (Amarraco) 分开显示？',
    answer: '在西班牙 Mus 牌局中，1分称为 Piedra，5分集合称为 Amarraco。分开显示能够方便数字记分板与桌面上实物筹码（如蚕豆或代币）进行直观对照。',
  },
  {
    question: '支持 30 分、40 分或 50 分制吗？',
    answer: '支持。在开启记分板前，您可以自由选择每局 30 分、40 分或 50 分的目标分。',
  },
  {
    question: '一局结束后如何进行结算？',
    answer: '当有一组达到目标分数时，结算本局按钮会亮起。确认获胜方后，系统将为其增加 1 局胜利，并将筹码分数重置为零。',
  },
  {
    question: '断网或刷新页面后数据会丢失吗？',
    answer: '不会。所有比赛设置与分数均安全保存在本地浏览器中。',
  },
  {
    question: '这款记分板会强制执行特定地区的细则吗？',
    answer: '不会。记分板专注于精确记录叫分与比分，具体的明喊与暗号留给玩家在棋牌桌上进行。',
  },
  {
    question: '能否使用普通法式扑克牌进行 Mus 游戏？',
    answer: '可以。只需抽掉 8、9、10 保持 40 张牌。J 对应 Sota，Q 对应 Caballo，K 对应 Rey。在传统规则中，3 可当作 K，2 可当作 A。',
  },
];

const howTo = [
  {
    name: '输入两组选手名称',
    text: '输入搭档组的名称（如北桌/南桌或选手姓名），以便记分员快速辨识。',
  },
  {
    name: '设定目标分数与大比分 (Vaca) 局数',
    text: '选择每局 30、40 或 50 分，并设定赢得大比分 (Vaca) 所需的局数。',
  },
  {
    name: '按手牌结算记分',
    text: '根据大牌 (Grande)、小牌 (Chica)、对子 (Pares)、点数 (Juego/Punto) 的决胜结果，点击 +1 分 (Piedra) 或 +5 分 (Amarraco) 筹码。',
  },
  {
    name: '确认局胜利并重置分数',
    text: '达到目标分数后确认本局胜者，记录局数并重置下一局筹码。',
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
  name: '在线 Mus 记分板',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: '专为西班牙传统扑克游戏 Mus 打造的实战实时数字记分器。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何在 Mus 纸牌对局中记分',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'online-mus-scoreboard',
  title: '在线 Mus 记分板',
  description: '实时记录西班牙 Mus 纸牌对局中的 Piedras (1分)、Amarracos (5分)、Chicos (局) 与 Vacas (大比分)。支持 30/40/50 分制。',
  ui,
  seo: [
    { type: 'title', text: '为激烈的 Mus 纸牌对局提供清晰准确的数字记分', level: 2 },
    { type: 'paragraph', html: 'Mus 是西班牙最具代表性的传统纸牌游戏，充满心理博弈与同伴默契。每手牌都会在多个环节（Grande、Chica、Pares、Juego、Punto）结算得分，使用数字记分板能有效杜绝计错分的情况。' },
    { type: 'title', text: '在首手发牌前设定胜负目标', level: 2 },
    { type: 'paragraph', html: '标准规则通常为 40 分一局，但在不同地区也流行 30 分或 50 分制。在发牌前设定好规则，让记分器与棋牌桌保持同步。' },
    {
      type: 'table',
      headers: ['设定', '规则效果', '适用场景'],
      rows: [
        ['30 分', '短局制', '快速对局或锦标赛预赛'],
        ['40 分', '标准局制', '最经典与通用的传统对局'],
        ['50 分', '长局制', '更具博弈深度与容错率的高手较量'],
      ],
    },
    { type: 'tip', title: '对局前明确本地规则', html: '在切牌前，请与对家确认是否采用 8张K与8张A（即3当作K、2当作A）的规则，并确定实物筹码保管人。' },
    { type: 'title', text: '西班牙纸牌 (Baraja española) 与法式扑克牌的转换', level: 2 },
    { type: 'paragraph', html: 'Mus 传统采用 40 张牌的西班牙纸牌 (Baraja española)。如果使用普通法式扑克牌，只需移除 8、9、10。J 对应 Sota，Q 对应 Caballo，K 对应 Rey。' },
    { type: 'title', text: '实时对比数字比分与棋牌桌物理筹码', level: 2 },
    { type: 'paragraph', html: '主数字显示当前总得分，下方一行自动换算为 Amarracos (5分筹码) 与单分 Piedras，极大方便了现场核对。' },
    { type: 'list', items: ['<strong>Piedra:</strong> 单分筹码。', '<strong>Amarraco:</strong> 相当于 5 个 Piedra 的记分块。', '<strong>Chico:</strong> 达到目标分数赢下的单局。', '<strong>Vaca:</strong> 赢得预设局数后取得的整场胜利。'] },
    { type: 'title', text: '结算单局胜利与误操作撤销', level: 2 },
    { type: 'paragraph', html: '当得分达到目标后，结算按钮亮起。若点错记分，可点击撤销按钮即刻还原。' },
    { type: 'tip', title: '善用撤销功能修正误记', html: '在喊分记错时，立即点击撤销按钮即可恢复至上一计分状态。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
