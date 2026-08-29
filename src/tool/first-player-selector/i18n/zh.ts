import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: '起始玩家选择器',
  instructions: '将手指放在屏幕上或点击添加标记',
  tapToSelect: '点击选择',
  winner: '胜者已定！',
  reset: '重置',
  start: '开始选择',
  setupTitle: '选择器设置',
  clearPlayers: '清除所有标记',
  fingerMode: '手指模式',
  wheelMode: '轮盘模式',
  presetsTitle: '选项',
  soundOn: '音效开启',
  soundOff: '音效关闭',
  playerCountLabel: '标记 / 手指数',
};

const faq = [
  {
    question: '手指模式是如何工作的？',
    answer: '在手指模式下，每位玩家将一根手指放在移动设备屏幕上。该工具会检测所有触控点，在其周围显示发光的彩色圆环，并自动开始一个短暂的倒计时。倒计时结束后，一名玩家会被高亮显示为获胜者，其余玩家则淡出，同时伴有粒子爆炸效果。',
  },
  {
    question: '我可以在台式电脑上使用这个工具吗？',
    answer: '可以！如果您使用的是非触控设备，该工具会自动默认为轮盘模式。您可以点击画布放置代表玩家的彩色标记，然后点击"开始选择"按钮来旋转选择轮盘。',
  },
  {
    question: '最多可以有多少名玩家参与？',
    answer: '该工具支持最多10名玩家同时参与。在手指模式下，最多可以同时检测到10根手指。在轮盘模式下，您可以点击画布放置最多10个彩色标记。',
  },
  {
    question: '选择结果是真正随机的吗？',
    answer: '是的。选择算法使用JavaScript的加密级Math.random()来确保无偏结果。在手指模式下，获胜者是在所有检测到的触控点中均匀随机选择的。在轮盘模式下，轮盘通过摩擦物理模拟逼真减速，最终角度通过数学计算确定获胜者。',
  },
  {
    question: '在轮盘模式下如何移除玩家标记？',
    answer: '只需点击现有标记即可将其移除。该工具会检测任何距离已放置标记30像素以内的点击并将其删除，这样您可以在触发旋转前调整玩家阵容。',
  },
  {
    question: '这个工具会收集或传输数据吗？',
    answer: '完全不会。一切都在您的浏览器中本地运行。任何手指数据、触控位置或选择结果都不会发送到任何服务器。您的游戏之夜将完全保持私密。',
  },
  {
    question: '它能在投影仪或外部屏幕上使用吗？',
    answer: '可以。轮盘模式在大屏幕和投影仪上也能很好地用于桌面游戏。高对比度的霓虹视觉效果和大型倒计时计时器设计得让房间另一端也能清晰可见。',
  },
  {
    question: '为什么有人抬起手指时倒计时会重置？',
    answer: '这是有意设计的。在手指模式下，只有当所有玩家将手指稳定地放在屏幕上时，倒计时才会进行。如果有人抬起或移动手指，计时器会重置，以确保在选择运行前每个人都已做好准备。这可以防止意外触发。',
  },
  {
    question: '我可以更改音效或将其静音吗？',
    answer: '可以。点击右上角的扬声器图标可以切换音效的开启或关闭。该工具会在倒计时期间播放滴答声，在选定获胜者时播放号角声。',
  },
  {
    question: '如果只有一名玩家会怎样？',
    answer: '在两种模式下，都需要至少两名玩家才能进行选择。在手指模式下，直到检测到至少两根手指时倒计时才会开始。在轮盘模式下，"开始选择"按钮将保持禁用状态，直到您放置至少两个标记。',
  },
];

const howTo = [
  {
    name: '放置手指或标记',
    text: '在手指模式下，所有玩家将一根手指放在屏幕上。在轮盘模式下，点击画布上的任意位置来放置玩家标记。',
  },
  {
    name: '触发选择',
    text: '在手指模式下，保持几秒钟后选择会自动开始。在轮盘模式下，点击"开始选择"按钮进行旋转。',
  },
  {
    name: '查看获胜者',
    text: '获胜者会以脉冲效果、粒子爆发和音效号角的方式高亮显示。点击"重置"或所有人抬起手指即可重新开始。',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'first-player-selector',
  title: '起始玩家选择器：手指选择器与回合轮盘',
  description: '通过这款华丽的手指选择器和交互式回合轮盘，来决定您的桌游中谁先开始。',
  ui,
  seo: [
    { type: 'title', text: '公平与策略：消除桌游中的先手优势', level: 2 },
    { type: 'paragraph', html: '在桌面游戏中，决定起始玩家会显著影响游戏动态。在博弈论中，先手优势（FPA）指的是率先行动的玩家相对于对手拥有的统计优势。在策略性国际象棋比赛、战棋游戏以及 Agricola 或 Puerto Rico 等现代德式游戏中，先行动作的玩家可以在对手做出反应之前抢占关键资源或布置棋子。为了减轻FPA并保证公平的竞争环境，一种可靠、无偏的选择方法至关重要。我们的数字起始玩家选择器保证了绝对的随机性，让游戏小组能够立即确定回合顺序并直接开始游戏。' },
    {
      type: 'stats',
      items: [
        { value: '100% 随机', label: '无偏选择' },
        { value: '2秒', label: '倒计时触发' },
        { value: '多点触控', label: '移动端兼容' },
      ],
      columns: 3,
    },
    { type: 'title', text: '桌游规则 vs 数字随机器：触控革命', level: 2 },
    { type: 'paragraph', html: '许多现代桌游规则书包含主题性的起始玩家规则，例如"最年轻的玩家先开始"、"最后一个去过农场的玩家先开始"或"个子最高的玩家先开始"。虽然初次游戏时很有趣，但这些规则很快变得重复、静态且对固定游戏群体不公平。物理随机化方法如掷骰子或抽牌会增加准备时间，并且容易受到人为偏见或洗牌不彻底的影响。手指选择器机制通过提供一种快速、触摸并保持的随机化方法，在无需额外卡牌或骰子的情况下，几秒钟内选出一位起始玩家，从而解决了这个问题。' },
    {
      type: 'table',
      headers: ['选择方式', '速度与准备', '随机性质量', '最适合场景'],
      rows: [
        ['任意规则书规则', '即时，但重复', '首局后随机性为零', '家庭游戏、聚会游戏'],
        ['掷骰子比拼', '需要寻找和投掷骰子，容易平局', '随机性高，但多人时繁琐', '战棋游戏、RPG'],
        ['抽牌', '需要洗牌和发牌', '随机性好，但需要实体卡牌', '牌库构筑游戏、卡牌游戏'],
        ['触控手指选择器', '即时，无需准备，视觉动画', '绝对算法随机性', '所有桌面游戏和桌游'],
      ],
    },
    {
      type: 'tip',
      title: '优化您的多点触控选择器设置',
      html: '为了在手指模式下获得最佳体验，请将平板电脑或智能手机平放在桌子中央。让所有玩家将一根手指清晰地放在画布上。如果有玩家抬起或移动手指，倒计时将重置，防止意外触发选择，确保在挑选器运行前达成绝对共识。',
    },
    {
      type: 'title',
      text: '选择您的工具：触控手指选择器 vs 轮盘旋转',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '根据您的硬件设置和环境，您可以在两种不同的布局模式之间切换，这两种模式旨在最大化屏幕空间和可访问性。',
    },
    {
      type: 'proscons',
      title: '选择模式对比',
      items: [
        {
          pro: '手指模式提供极快的触觉体验，最多可让10名玩家同时放置手指。',
          con: '需要触摸屏，如智能手机或平板电脑。',
        },
        {
          pro: '轮盘模式可在任何笔记本电脑、台式机或投影仪屏幕上运行，非常适合虚拟会话和远程游戏之夜。',
          con: '需要手动点击来放置标记，然后再触发旋转。',
        },
      ],
    },
    {
      type: 'title',
      text: '视觉优化：多点触控网络 vs 减速轮盘',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '多点触控选择器',
          description: '追踪屏幕上的多个不同触控点。在每个手指周围绘制霓虹连接网络和缩小的倒计时环，最终以庆祝爆发效果收尾。',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            '同步触控追踪',
            '触觉式按压保持检测',
            '壮观的粒子爆炸效果',
          ],
        },
        {
          title: '轮盘旋转器',
          description: '在数学计算的重心周围放置彩色玩家标记。旋转一个彩色扇形轮盘，通过模拟摩擦力自然减速，最终确定获胜者。',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            '基于重心的对齐',
            '基于摩擦的减速物理',
            '通用桌面鼠标支持',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '先手优势（FPA）',
          definition: '桌游中的回合顺序偏差，起始玩家在行动选择或资源控制方面获得统计上显著的领先优势。',
        },
        {
          term: '触控选择协议',
          definition: '一种触摸并保持的交互方式，所有参与者将手指放在触摸屏上，直到随机高亮显示一位获胜者。',
        },
        {
          term: '减速物理',
          definition: '一种数学动画程序，对旋转的轮盘施加摩擦系数以模拟自然惯性并增强期待感。',
        },
        {
          term: '重心计算',
          definition: '计算分散坐标标记集合的中心点，用作轮盘图形旋转的枢轴。',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': '起始玩家选择器与手指选择器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用起始玩家选择器',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
