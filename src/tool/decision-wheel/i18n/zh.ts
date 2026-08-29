import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: '决策轮盘: 在线随机选择器与抽签转盘',
  description: '为桌游设计的高级自定义决策轮盘。添加带有不同权重的分块，以随机确定游戏结果。',
  ui: {
    title: '决策轮盘',
    spinButton: '转动轮盘',
    clearHistory: '清除历史',
    resultHeading: '结果',
    historyTitle: '转动历史',
    noHistory: '暂无历史记录。点击转动轮盘开始。',
    addSegmentLabel: '添加选项',
    removeSegmentLabel: '删除',
    segmentLabelPlaceholder: '标签',
    presetLabel: '预设',
    presetYesNo: '是或否',
    presetNumbers: '数字 1-6',
    presetActions: '行动',
    presetCustom: '自定义',
    presetD20: 'D20',
    presetAlignment: '阵营',
    presetLoot: '战利品稀有度',
    weightLabel: '权重',
    spinAgain: '再次转动',
    noSegments: '请在转动前为轮盘添加选项。',
  },
  seo: [
    { type: 'title', text: '适用于桌游及团队聚会的随机决策轮盘', level: 2 },
    { type: 'paragraph', html: '决策轮盘是一个用于桌面游戏、TRPG跑团和团队聚会的多用途数字随机选择工具。它可以帮助您快速、公正且完全随机地决定各种选项。每个扇区都可以自定义文本、背景颜色以及中奖概率权重，以完美契合您的游戏规则。' },
    {
      type: 'stats',
      items: [
        { value: '16', label: '添加选项' },
        { value: '7', label: '预设' },
        { value: '10', label: '转动历史' },
      ],
      columns: 3,
    },
    { type: 'title', text: '如何使用决策轮盘', level: 2 },
    { type: 'paragraph', html: '选择内置预设方案（如是/否、D20、阵营或战利品掉落），或者创建您专属的自定义选项列表。通过将权重调整为 1 到 5，您可以灵活改变每个选项抽中的概率。逼真的物理阻尼旋转动画将为每一次抽取增添紧张刺激的体验。' },
    { type: 'title', text: '更多决策场景', level: 3 },
    { type: 'paragraph', html: '您可以使用决策轮盘在团队中快速发起投票、决定跑团中的随机遭遇、分配玩家行动顺序，或者在派对游戏中抽取惩罚项目。' },
    { type: 'title', text: '桌游预设', level: 3 },
    { type: 'paragraph', html: '内置桌游预设让您能在数秒内加载常见决策，节省游戏准备时间，避免桌上无谓的争议。' },
    { type: 'title', text: '调整结果权重', level: 3 },
    { type: 'paragraph', html: '调整权重可以平衡或倾斜抽取概率。提高某项权重会增大该分块在轮盘上的扇形面积，从而提升中奖几率。' },
    { type: 'title', text: '查看旋转历史', level: 3 },
    { type: 'paragraph', html: '历史记录面板会保存最近 10 次的旋转结果，方便全场所有玩家在游戏过程中透明地复核先前的抽签记录。' },
  ],
  faq: [
    {
      question: '决策轮盘是如何工作的？',
      answer: '配置选项并设置用于调节概率的权重，点击转动轮盘按钮即可随机获得其中一个选项。',
    },
    {
      question: '可以自定义颜色和文字吗？',
      answer: '可以。您可以自由添加选项、更改文本标签、选择背景颜色并将权重在 1 至 5 之间进行调整。',
    },
    {
      question: "可以修改概率吗？",
      answer: "可以，修改分区的权重即可。",
    },
    {
      question: "最多可以有多少个分区？",
      answer: "最多16个，并且至少需要两个选项。",
    },
    {
      question: "有哪些预设？",
      answer: "是或否、数字、行动、自定义、D20、阵营和战利品。",
    },
    {
      question: "之前的旋转会显示吗？",
      answer: "会，浏览器会显示最近十个结果。",
    },
  ],
  bibliography,
  howTo: [
    {
      name: '配置轮盘分块',
      text: '选择一个快速预设方案，或者添加自定义的标签、颜色和权重。',
    },
    {
      name: '转动决策轮盘',
      text: '点击转动按钮，轮盘将伴随逼真的物理摩擦阻尼减速动画进行旋转。',
    },
    {
      name: "检查结果",
      text: "转盘停止后，检查获胜分区和最近的旋转历史。",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '决策轮盘',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '决策轮盘是如何工作的？', 'acceptedAnswer': { '@type': 'Answer', 'text': '配置选项并设置用于调节概率的权重，点击转动轮盘按钮即可随机获得其中一个选项。' } },
        { '@type': 'Question', 'name': '可以自定义颜色和文字吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。您可以自由添加选项、更改文本标签、选择背景颜色并将权重在 1 至 5 之间进行调整。' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': '配置轮盘分块', 'text': '选择一个快速预设方案，或者添加自定义的标签、颜色和权重。' },
        { '@type': 'HowToStep', 'name': '转动决策轮盘', 'text': '点击转动按钮，轮盘将伴随逼真的物理摩擦阻尼减速动画进行旋转。' },
      ],
    },
  ],
};
