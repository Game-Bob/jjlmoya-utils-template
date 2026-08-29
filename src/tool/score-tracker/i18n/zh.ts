import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Score Tracker',
  addPlayer: '添加玩家',
  removePlayer: '移除',
  renamePlayer: '重命名',
  startRound: '开始第1轮',
  nextRound: '下一轮',
  resetGame: '重置游戏',
  undoRound: '撤销上一轮',
  playerLabel: '玩家',
  scoreLabel: '分数',
  roundLabel: '轮次',
  totalLabel: '总计',
  rankLabel: '排名',
  leaderboardTitle: '排行榜',
  historyTitle: '分数历史',
  noPlayersHint: '添加玩家以开始计分',
  playerNamePlaceholder: '玩家姓名',
  confirmLabel: '确认',
  cancelLabel: '取消',
  deleteRoundConfirm: '删除最后一轮？',
  playerAdded: '玩家已添加',
  playerRemoved: '玩家已移除',
  roundStarted: '本轮已开始',
  gameReset: '游戏已重置',
  noRoundsYet: '尚无记录轮次',
  currentRoundLabel: '当前轮次',
  scoringTitle: '轮次计分',
  resetAllLabel: '重置全部',
  confirmResetAll: '这将删除所有玩家和分数。你确定吗？',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'score-tracker',
  title: 'Score Tracker: Duan Ren Ji Fen Qi He Bang Dan Guan Li Qi',
  description: '追踪任何桌面游戏的分数。添加玩家，逐轮记录分数，并观看排行榜通过自动排名实时更新。',
  ui,
  seo: [
    { type: 'title', text: '桌面游戏计分：如何无误地追踪分数', level: 2 },
    { type: 'paragraph', html: '在桌面游戏中计分看似简单，直到你玩到第五轮时才发现有人算错了。无论你玩的是 Wingspan、Terraforming Mars、Catan 还是任何胜利点游戏，准确的计分是公平游戏与争论之间的分水岭。数字计分器消除了算术错误，显示实时排名，并保留每一轮的完整历史记录，以便你验证最终总数。' },
    {
      type: 'stats',
      items: [
        { value: '无限', label: '支持的玩家数' },
        { value: '实时', label: '排行榜更新' },
        { value: '无限', label: '记录的轮次' },
      ],
      columns: 3,
    },
    { type: 'title', text: '常见计分错误及如何避免', level: 2 },
    { type: 'paragraph', html: '最常见的计分错误是忘记添加轮末加分或把一列数字加错。当您使用数字方式追踪分数时，累计总数会在每次输入后自动更新。这意味着您可以在数字看起来不对劲的瞬间发现错误，而不是在游戏结束时才发现，那时已经没人记得正确的数值了。轮次历史功能让您可以审核任何之前的轮次并修正错误，而无需重新开始整场游戏。' },
    {
      type: 'tip',
      title: '快速计分技巧',
      html: '每轮结束后立即输入分数，趁大家还记得结果。对于有隐藏角色的游戏，使用描述性标签（如颜色或派系名称）代替真实姓名。和孩子一起玩时，让他们自己按按钮，以保持他们对计分过程的参与感。',
    },
    {
      type: 'title',
      text: '逐轮计分 vs 仅计总分',
      level: 3,
    },
    {
      type: 'proscons',
      title: '逐轮计分 vs 仅计最终分数',
      items: [
        {
          pro: '您可以查看游戏每个阶段谁领先以及势头如何变化。',
          con: '需要在每轮后输入数据，而不是只在结束时输入一次。',
        },
        {
          pro: '错误很容易定位，因为您可以将每轮的记录与记忆进行核对。',
          con: '在游戏过程中会稍微多花一点时间。',
        },
        {
          pro: '玩家可以核对自己的轮次分数，减少争议并建立信任。',
          con: '最好由一个人管理设备或玩家轮流操作。',
        },
      ],
    },
    {
      type: 'title',
      text: '具有不寻常计分系统的游戏',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '胜利点游戏',
          description: '大多数德式游戏使用在游戏过程中获得的胜利点。挑战在于追踪多种 VP 来源：资源、成就、终局奖励。数字追踪器让您可以在获得分数时即时输入并查看累计总数。',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            '追踪多个计分类别',
            '终局奖励计算',
            '即时平局裁决',
          ],
        },
        {
          title: '含负分计分的游戏',
          description: '有些游戏会对玩家的特定行为处以负分惩罚。数字计分器能自然地处理负值，将其标红以便惩罚一目了然。这在吃墩游戏或带有惩罚机制的推理游戏中特别有用。',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            '自动处理负值',
            '可视化惩罚指示器',
            '准确的累计总数',
          ],
        },
        {
          title: '战役游戏',
          description: '遗产和战役游戏会跨多次游戏会话继承分数。没有追踪器，您需要在游戏之夜之间保留纸质笔记。数字工具能让您的战役分数井井有条，并让您回顾自己的决定如何影响了整体排名。',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            '持久性战役追踪',
            '跨会话比较',
            '逐会话细分',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '计分术语表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '胜利点（VP）',
          definition: '大多数现代桌面游戏的标准计分单位。玩家通过行动获得 VP，游戏结束时拥有最多 VP 的人获胜。',
        },
        {
          term: '逐轮计分',
          definition: '在每轮结束时（而非仅在游戏结束时）记录分数。这样可以创建详细的历史记录，并使错误检查变得简单。',
        },
        {
          term: '排行榜',
          definition: '根据总分数显示每位玩家位置的实时排名。当输入新分数时，排行榜会自动重新排序。',
        },
        {
          term: '负分计分',
          definition: '玩家可能因惩罚或失败行动而失分，从而导致负总数的计分系统。数字追踪器无需手动减法即可处理此问题。',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '如何处理有争议的分数',
      icon: 'mdi:information-outline',
      badge: '游戏提示',
      html: '当玩家对分数提出质疑时，不要立即更改。首先检查轮次历史以确认输入的记录。如果录入有误，使用 +/- 按钮进行修正，总数会自动更新。如果轮次记录正确但玩家不同意，历史记录提供了每个人都可以一起查看的客观凭据。',
    },
  ],
  faq: [
    {
      question: '我可以追踪多少名玩家？',
      answer: '没有限制。添加您的游戏支持的所有玩家，并在游戏过程中随时重命名他们。',
    },
    {
      question: '我能撤销错误吗？',
      answer: '是的。使用「撤销上一轮」按钮移除最近的一轮分数，这将自动重新计算所有总数和排名。',
    },
    {
      question: '计分器会保存我的数据吗？',
      answer: '计分器完全在您的浏览器中运行。数据在当前会话期间持续保存。刷新页面将重置所有分数。',
    },
    {
      question: '排行榜如何工作？',
      answer: '排行榜按总分数降序排列玩家。当您输入或修改每轮的分数时，排名会自动更新。',
    },
    {
      question: '我可以追踪负分吗？',
      answer: '是的。+/- 按钮允许正值和负值调整，使其适用于有惩罚分或扣分机制的游戏。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '添加玩家',
      text: '使用「添加玩家」输入框输入玩家姓名。您可以在游戏过程中随时添加或移除玩家。',
    },
    {
      name: '开始计分',
      text: '点击「开始轮次」开始一轮新的计分。使用 +/- 按钮调整每位玩家在该轮中的分数。',
    },
    {
      name: '查看排名',
      text: '排行榜会自动更新。浏览「分数历史」选项卡以回顾之前的轮次记录。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Score Tracker & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '我可以追踪多少名玩家？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '没有限制。添加您的游戏支持的所有玩家，并在游戏过程中随时重命名他们。',
          },
        },
        {
          '@type': 'Question',
          'name': '我能撤销错误吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的。使用「撤销上一轮」按钮移除最近的一轮分数，这将自动重新计算所有总数和排名。',
          },
        },
        {
          '@type': 'Question',
          'name': '计分器会保存我的数据吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '计分器完全在您的浏览器中运行。数据在当前会话期间持续保存。刷新页面将重置所有分数。',
          },
        },
        {
          '@type': 'Question',
          'name': '排行榜如何工作？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '排行榜按总分数降序排列玩家。当您输入或修改每轮的分数时，排名会自动更新。',
          },
        },
        {
          '@type': 'Question',
          'name': '我可以追踪负分吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的。+/- 按钮允许正值和负值调整，使其适用于有惩罚分或扣分机制的游戏。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用计分器',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '添加玩家',
          'text': '使用「添加玩家」输入框输入玩家姓名。您可以在游戏过程中随时添加或移除玩家。',
        },
        {
          '@type': 'HowToStep',
          'name': '开始计分',
          'text': '点击「开始轮次」开始一轮新的计分。使用 +/- 按钮调整每位玩家在该轮中的分数。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看排名',
          'text': '排行榜会自动更新。浏览「分数历史」选项卡以回顾之前的轮次记录。',
        },
      ],
    },
  ],
};
