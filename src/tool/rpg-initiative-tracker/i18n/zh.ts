import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: '先攻追踪器',
  addCombatant: '添加战斗者',
  removeCombatant: '移除',
  playerLabel: '玩家',
  npcLabel: 'NPC',
  initiativeLabel: '先攻',
  modifierLabel: '调整值',
  namePlaceholder: '角色名称',
  initiativePlaceholder: '先攻',
  modifierPlaceholder: '调整值',
  addButton: '添加',
  startCombat: '开始战斗',
  endCombat: '结束战斗',
  nextTurn: '下一回合',
  prevTurn: '上一回合',
  roundLabel: '轮',
  turnLabel: '回合',
  noCombatants: '暂无战斗者。请添加角色以开始。',
  statusInput: '状态',
  combatStarted: '战斗开始！',
  combatEnded: '战斗结束',
  yourTurn: '回合',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'rpg-initiative-tracker',
  title: 'RPG先攻追踪器: 战斗回合顺序与先攻管理工具',
  description: '追踪任何桌面RPG的先攻顺序。添加战斗者、掷先攻、管理状态效果，以及在战斗中导航回合。',
  ui,
  seo: [
    { type: 'title', text: '先攻在D&D及其他桌面RPG中的运作方式', level: 2 },
    { type: 'paragraph', html: '先攻决定战斗中行动的顺序。每位参与者在战斗开始时进行一次敏捷检定，回合顺序从高到低进行。数字先攻追踪器自动排序、高亮当前行动者、追踪持续中的状态效果，并让全桌都知道下一个是谁的回合。这对于需要管理多种敌人类型和玩家角色的地下城主来说尤其有用。' },
    {
      type: 'stats',
      items: [
        { value: '无限制', label: '支持战斗者数量' },
        { value: '自动排序', label: '按先攻投掷' },
        { value: '实时', label: '回合追踪' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'D&D 5e的标准先攻规则', level: 2 },
    { type: 'paragraph', html: '在D&D第五版中，每位参与者在战斗开始时进行一次敏捷检定。玩家单独投掷。地下城主为每组相同类型的怪物投掷一次。回合顺序从高到低进行，然后回到开头进行下一轮。平局由敏捷值决定，或由DM裁定。数字追踪器自动处理所有这些，一目了然地显示完整的回合顺序。' },
    {
      type: 'table',
      headers: ['功能', '手动追踪', '数字追踪器'],
      rows: [
        ['排序', '先攻变化时重写列表', '即时自动重新排序'],
        ['当前回合', '必须口头或用标记物追踪', '绿色高亮显示'],
        ['状态效果', '在模型旁放置单独便签或骰子', '点击切换每个战斗者的状态'],
        ['轮次计数', '在脑中或草稿纸上计数', '自动显示'],
        ['战斗中添加', '擦除并重写顺序', '插入到正确位置'],
      ],
    },
    {
      type: 'tip',
      title: '在桌面上管理先攻的提示',
      html: '在游戏开始前为所有怪物投掷先攻，以节省战斗中的时间。像震慑或中毒这样的常见状态效果一旦施加就立即添加到战斗者身上。这可以防止在受影响角色回合到来时忘记该状态。如果需要检查本轮早些时候的裁定，请使用上一回合按钮回顾已发生的情况。',
    },
    {
      type: 'title',
      text: '战斗中常用的状态效果',
      level: 3,
    },
    { type: 'paragraph', html: '战斗中追踪状态是最容易被忽视的任务之一。状态效果可以完全改变角色的效能，忘记移除它可能会改变遭遇战的平衡。先攻追踪器让您只需单击即可应用和移除状态，使其保持在战斗者名称旁边可见。' },
    {
      type: 'proscons',
      title: '数字化管理 vs 手动管理状态效果',
      items: [
        {
          pro: '状态直接显示在角色名称旁边，因此没有人会忘记活跃的效果。',
          con: '需要记住在施加和移除状态时切换开关。',
        },
        {
          pro: '同一战斗者可以同时拥有多个活跃状态，并且全部一起显示。',
          con: '追踪器不会自动强制执行规则效果，DM仍需手动应用它们。',
        },
        {
          pro: '可以在战斗中途添加状态，无需停下来在角色卡上书写。',
          con: '默认情况下仅提供预定义的状态标签。',
        },
      ],
    },
    {
      type: 'title',
      text: '替代先攻系统',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '标准先攻',
          description: '每位战斗者在开始时投掷一次。每轮重复相同的顺序。简单且可预测，但第一次投掷后顺序即固定。适用于大多数团队和遭遇战规模。',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['易于学习和教授', '每轮固定回合顺序', '适用于任何团队规模'],
        },
        {
          title: '分组先攻',
          description: '所有玩家角色一起行动，然后所有敌人一起行动。在旧版和OSR游戏中常见。通过减少单独跟踪来加快战斗速度，但降低了战术细腻度。',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['最快的战斗解决方式', '鼓励团队协作', '个人回合多样性较少'],
        },
        {
          title: '速度因素变体',
          description: '每轮参与者先宣布行动，然后投掷经所选行动调整的先攻。用于可选规则集。产生不可预测的回合顺序，但增加了决策深度。',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['每轮顺序不同', '行动选择影响时机', '每回合更多战术决策'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '战斗追踪器词汇表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '先攻',
          definition: '战斗开始时进行的敏捷检定，用于决定回合顺序。每位参与者投掷并按降序行动。',
        },
        {
          term: '轮',
          definition: '每位战斗者执行一个回合的完整循环。最后一位战斗者行动后，本轮结束，新的一轮从顺序顶部开始。',
        },
        {
          term: '状态效果',
          definition: '临时改变角色能力的条件。例如震慑（无法行动）、中毒（投掷劣势）和目盲（攻击劣势）。',
        },
        {
          term: 'NPC',
          definition: '由地下城主控制的非玩家角色。在先攻追踪中，NPC通常是遭遇战中的敌人或中立生物。',
        },
        {
          term: 'PC',
          definition: '由桌边某位玩家控制的玩家角色。追踪器中PC与NPC区分开，帮助DM识别友方目标。',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '何时每轮重新投掷先攻',
      icon: 'mdi:information-outline',
      badge: 'DM提示',
      html: '有些DM喜欢每轮重新投掷先攻以增加不可预测性，而大多数DM为了简单而保持相同的顺序。如果新的战斗者在战斗中途加入，投掷其先攻并将其插入当前位置。追踪器会自动处理。对于头目战，考虑给反派一个固定先攻值，使战斗感觉更有条理。',
    },
  ],
  faq: [
    {
      question: '如何将战斗者添加到先攻顺序中？',
      answer: '输入角色名称、先攻投掷值和先攻调整值，然后单击添加。在玩家和NPC类型之间切换，以在视觉上区分列表中的队伍成员和敌人。',
    },
    {
      question: '单击开始战斗会发生什么？',
      answer: '所有战斗者按先攻从高到低排序。回合顺序从顶部开始，轮次计数器从1开始，活跃战斗者以绿色高亮显示。',
    },
    {
      question: '如何在战斗中追踪状态效果？',
      answer: '单击状态标签（震慑、中毒、目盲等）以切换选定战斗者的开启或关闭。活跃状态显示在角色名称旁边。这会在该战斗者回合到来时提醒所有人持续中的效果。',
    },
    {
      question: '如果我刷新页面，战斗数据会保留吗？',
      answer: '会。先攻追踪器将战斗状态保存到浏览器的本地存储中。您的战斗者、回合顺序和状态效果在页面重新加载后仍然保留。单击结束战斗时会清除数据。',
    },
    {
      question: '我可以回到上一回合吗？',
      answer: '可以。上一回合按钮允许您向后导航回合顺序。这对于回顾本轮早些时候发生的情况或纠正错误很有用。',
    },
    {
      question: '我可以在战斗中添加或移除战斗者吗？',
      answer: '可以。新战斗者可以随时添加，并根据其先攻投掷自动插入到正确位置。现有战斗者如果离开遭遇战可以移除。',
    },
    {
      question: '这个工具适用于任何RPG系统吗？',
      answer: '适用。该追踪器适用于任何使用基于先攻的回合顺序的桌面RPG。输入您系统使用的任何先攻值，无论是D&D的d20加敏捷投掷，还是其他游戏的不同机制。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '在战斗前添加战斗者',
      text: '输入每个角色的名称、先攻投掷值和调整值。将其标记为玩家或NPC。根据遭遇战需要添加尽可能多的战斗者。',
    },
    {
      name: '开始战斗以锁定顺序',
      text: '单击开始战斗，按先攻对所有战斗者进行排序并开始追踪回合。顺序中的第一个战斗者被高亮显示。',
    },
    {
      name: '导航回合并追踪状态',
      text: '使用下一回合和上一回合在顺序中移动。通过单击状态标签应用状态效果，以追踪战斗中的条件。',
    },
    {
      name: '完成后结束战斗',
      text: '单击结束战斗以停止回合追踪。这将清除活跃状态并重置轮次计数器，同时保留战斗者列表以供下次遭遇战使用。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'RPG先攻追踪器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': '需要HTML5。需要JavaScript。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '如何添加战斗者？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '输入角色名称、先攻投掷值和先攻调整值，然后点击添加。玩家和NPC可以切换以帮助在列表中区分它们。',
          },
        },
        {
          '@type': 'Question',
          'name': '单击开始战斗会发生什么？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '所有战斗者按先攻排序（最高优先）。回合顺序从第一位战斗者开始，轮次计数器从1开始。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用先攻追踪器',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '添加战斗者',
          'text': '输入角色详细信息，包括名称、先攻投掷值和调整值。在添加前在玩家和NPC类型之间切换。',
        },
        {
          '@type': 'HowToStep',
          'name': '开始战斗',
          'text': '单击开始战斗，按先攻对所有战斗者进行排序并开始回合顺序追踪。',
        },
        {
          '@type': 'HowToStep',
          'name': '管理回合',
          'text': '使用下一回合和上一回合导航回合顺序。活跃战斗者以绿色高亮显示。',
        },
      ],
    },
  ],
};
