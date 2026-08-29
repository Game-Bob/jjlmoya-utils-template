import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: '设置队伍与威胁。计算器将根据 D&D 5e 2014 的官方阈值评估遭遇战的压力。',
  partySection: '队伍设置',
  partyLevel: '角色等级',
  partyLevelHint: '对于等级相近的队伍，请使用平均等级。',
  partySize: '角色人数',
  partySizeHint: '规则会对过小或过大的队伍调整怪物乘数。',
  threatSection: '威胁设置',
  monsterCr: '怪物挑战等级 (CR)',
  monsterCrHint: '选择同种怪物的 CR。混合怪物组合需要单独计算。',
  moreCr: '显示更高 CR',
  lessCr: '显示更少 CR',
  monsterCount: '怪物数量',
  monsterCountHint: '即便基础 XP 较低，较多的怪物也会显著增加行动经济压力。',
  presets: '从预设场景开始',
  presetClassic: '经典巡逻队',
  presetBoss: '单体 Boss',
  presetSwarm: '杂兵蜂拥',
  resultSection: '遭遇战压力评估',
  belowEasyHint: '轻松场景，可保留资源用于后续挑战。',
  easyHint: '可控场景，对队伍压力较小。',
  mediumHint: '有意义的考验，可能会消耗生命值或关键资源。',
  hardHint: '危险场景，战术与资源选择至关重要。',
  deadlyHint: '致命压力信号！请检查撤退路线、地形及失误成本。',
  adjustedXp: '调整后 XP',
  baseXp: '基础 XP',
  multiplier: '队伍乘数',
  partyThreshold: '中等阈值',
  belowEasy: '低于简单',
  easy: '简单',
  medium: '中等',
  hard: '困难',
  deadly: '致命',
  warning: '注意事项',
  partyAdjustment: '由于队伍人数少于3人或多于5人，怪物乘数已作相应调整。',
  highCr: 'CR 高于队伍等级的怪物可能在单次强力行动中击倒角色。',
  manyMonsters: '11 个或更多怪物会让战斗主持变得复杂。',
  rulesNote: '基于 D&D 5e 2014 规则的估算，未包含地形或战术因素。',
  rulesLinkLabel: '阅读源规则',
  reset: '重置为示例',
  xpUnit: 'XP',
  sceneLabel: '战斗压力可视化',
  partyMarker: '队伍',
  threatMarker: '威胁',
};

const faq = [
  {
    question: '本遭遇难度计算器使用什么规则？',
    answer: '它使用基础规则中 D&D 5e 2014 的官方计算公式，将队伍阈值与怪物的调整后 XP 进行对比。',
  },
  {
    question: '为什么调整后 XP 与怪物奖励 XP 不同？',
    answer: '规则对怪物总 XP 进行乘数放大，以反映多个生物在同一轮行动带来的额外危险。',
  },
  {
    question: '能否用于计算混合怪物组合？',
    answer: '适合作为同种怪物的快速估算。对于混合组合，请累加每个生物的基础 XP 后再乘以对应乘数。',
  },
  {
    question: '致命结果是否意味着队伍必然团灭？',
    answer: '并非如此。致命代表调整后 XP 达到了致命阈值。地形、战术和法术使用都会改变实际结果。',
  },
  {
    question: '为什么队伍人数会改变乘数？',
    answer: '官方规则建议对少于 3 人的队伍提高乘数，对 6 人及以上的队伍降低乘数。',
  },
];

const howTo = [
  {
    name: '设置队伍等级',
    text: '选择队伍中角色的平均等级。',
  },
  {
    name: '设置队伍人数',
    text: '输入参战角色的数量。',
  },
  {
    name: '描述威胁',
    text: '选择怪物的挑战等级 (CR) 和数量。',
  },
  {
    name: '评估压力',
    text: '对比调整后 XP 与官方难度阈值区间。',
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
  name: 'D&D 5e 遭遇难度计算器',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: '根据等级、队伍人数、怪物 CR、数量及官方阈值计算 D&D 5e 2014 的遭遇战难度。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何计算 D&D 5e 遭遇战难度',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-encounter-difficulty-calculator',
  title: 'D&D 5e 遭遇难度计算器',
  description: '借助队伍等级、人数、怪物 CR、调整后 XP 与官方阈值估算 D&D 5e 2014 的战斗压力。',
  ui,
  seo: [
    { type: 'title', text: '在投掷先攻前评估战斗难度', level: 2 },
    { type: 'paragraph', html: 'D&D 遭遇战远不止怪物卡上的数值。本计算器将队伍人数、等级、CR 和怪物数量转化为 D&D 5e 2014 规则的调整后 XP。可视化展示可以清晰展现遭遇战相对于简单、中等、困难和致命阈值所处的位置与危险程度。' },
    { type: 'title', text: 'D&D 5e 遭遇计算公式原理', level: 2 },
    { type: 'paragraph', html: '该方法首先汇总各难度等级下的角色 XP 阈值，然后对怪物基础 XP 总和乘以相应的数量乘数。少于 3 人的队伍使用高一阶的乘数，而 6 人及以上的队伍则使用低一阶的乘数进行平衡调整。' },
    {
      type: 'table',
      headers: ['信号', '案头检查要点'],
      rows: [
        ['低于简单', '遭遇战可作为热身或轻微资源消耗。'],
        ['简单', '队伍通常无需消耗过多资源即可获胜。'],
        ['中等', '预计会有适度压力以及至少一次关键资源决策。'],
        ['困难', '请预估生命值与法术位的损失。'],
        ['致命', '检查战术、地形及撤退路线。'],
      ],
    },
    { type: 'title', text: '为什么怪物数量至关重要', level: 2 },
    { type: 'paragraph', html: '多个怪物在同轮中拥有更多攻击与反应机会，因此带来的危险远超其基础 XP 所示。这就是为什么一对怪物使用的乘数要高于具有相同合并 XP 的单只怪物的原因所在。' },
    { type: 'tip', title: '将高 CR 视作特定预警', html: 'CR 高于队伍等级的怪物可能凭借单次强力行动直接击倒角色。请仔细检查其伤害能力与控制效果，而不要仅仅依赖最终的难度标签或文字说明。' },
    { type: 'title', text: '将计算结果作为备战辅助工具', level: 2 },
    { type: 'paragraph', html: '在安排困难或致命遭遇前，请评估环境、突袭及队伍的整体状态。狭窄的空间、遮蔽物、环境伤害和专注法术都可能极大地改变桌面上的实际危险程度与战斗走向。' },
    { type: 'tip', title: '混合怪物组合', html: '累加每个生物的基础 XP，并对怪物总数施加对应的乘数进行评估。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
