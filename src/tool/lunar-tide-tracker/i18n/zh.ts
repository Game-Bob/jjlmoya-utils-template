import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'lunar-tide-tracker',
  title: '桌面RPG月相计算器：追踪自定义奇幻月亮与潮汐周期',
  description: '为任意奇幻世界计算具有自定义轨道周期的月相。同时追踪多个月亮，查看十天预报，并获取用于D&D、开拓者或任何RPG中魔法与天气系统的综合潮汐等级。',
  ui: {
    title: '月相与秘法潮汐追踪器',
    moonsTitle: '月亮配置',
    addMoon: '添加自定义月亮',
    removeMoon: '移除月亮',
    moonName: '月亮名称',
    orbitalPeriod: '轨道周期（天）',
    startingOffset: '起始偏移（天）',
    timelineTitle: '时间控制',
    currentDay: '当前战役天数',
    tideTitle: '秘法潮汐状态',
    tideLevel: '潮汐能量等级',
    magicModifier: '魔法潮汐效果',
    forecastTitle: '月相与潮汐预报',
    dayLabel: '天数',
    resetButton: '重置到第0天',
    presetTitle: '战役预设',
    presetSingle: '经典单月亮',
    presetDouble: '魔法双月',
    presetTriple: '三重月食之境',
    newMoon: '新月',
    waxingCrescent: '蛾眉月',
    firstQuarter: '上弦月',
    waxingGibbous: '盈凸月',
    fullMoon: '满月',
    waningGibbous: '亏凸月',
    lastQuarter: '下弦月',
    waningCrescent: '残月',
  },
  seo: [
    { type: 'title', text: '如何在奇幻RPG战役中追踪月相', level: 2 },
    { type: 'paragraph', html: '大多数奇幻设定的月亮轨道周期与现实中29.5天的月球周期不同。<strong>轨道周期</strong>字段设定一个月亮完成一次完整周期需要多少游戏内天数。地球的月亮需要29天；艾伯伦设定中使用28天；托尔金的中土世界月亮周期接近30天。根据你的世界设定填写此值，或在5至60天之间选择任意能产生你期望的月食频率的数字。' },
    {
      type: 'stats',
      items: [
        { value: '3', label: '同时追踪月亮数' },
        { value: '10', label: '预报天数' },
        { value: '5', label: '潮汐状态（小潮至大潮）' }
      ],
      columns: 3
    },
    { type: 'title', text: '理解起始偏移字段', level: 2 },
    { type: 'paragraph', html: '<strong>起始偏移</strong>决定月亮在战役第0天所处的周期位置。偏移为0意味着月亮从新月开始。偏移等于轨道周期的一半则使其从满月开始。用此字段匹配你战役开场场景中描述的月相，或确保两个月亮从不同位置开始，避免它们总是对齐。' },
    { type: 'title', text: '潮汐等级对游戏的意义', level: 2 },
    { type: 'paragraph', html: '潮汐等级根据所有活跃月亮当前月相的综合引力计算。<strong>大潮</strong>（75%以上）发生在多个月亮接近满月或新月对齐时，向同一方向施力。<strong>小潮</strong>（30%以下）发生在月亮处于相对相位时，部分力量相互抵消。你可以将其直接与任何游戏机制挂钩：法术豁免DC加值、德鲁伊野性变身持续时间、狼人变形阈值，或沿海地图上的风暴强度。' },
    {
      type: 'comparative',
      items: [
        {
          title: '单月亮',
          description: '最适合贴近现实世界或只有一个主要月亮的设定。简单的八相位周期，无需参考即可轻松掌握。',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            '适用于D&D被遗忘的国度（苏伦，30天）',
            '狼人与兽化人战役',
            '与满月相关的恐怖团'
          ]
        },
        {
          title: '双月亮',
          description: '常见于高奇幻设定。产生频繁的部分对齐和有趣的中周期潮汐。对齐大约每LCM(周期1, 周期2)天发生一次。',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            '艾伯伦（Rhaan 28天 + Aryth 12天）',
            '创造可预测的月食季节',
            '适用于德鲁伊或元素魔法体系'
          ]
        },
        {
          title: '三月亮',
          description: '罕见的三重对齐产生不可预测的潮汐涌流。没有此工具将难以预测综合潮汐，而这正是其戏剧性价值所在。',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            '对齐时触发狂野魔法波动表',
            '开拓者格拉利昂式的复杂性',
            '适用于史诗战役的长周期循环'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: '奇幻世界的常见轨道周期', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: '苏伦（被遗忘的国度）', definition: '30天轨道周期，单月亮。偏移设为15可在第一次团时从满月开始。' },
        { term: '艾伯伦月亮', definition: '艾伯伦有12个月亮，周期从9天到28天。将每个作为独立的月亮实例运行，或挑选两个与剧情最相关的。' },
        { term: '格拉利昂（开拓者）', definition: '格拉利昂有单个月亮索马尔，周期29天。暗幕事件可以通过设置一个具有偏移干扰的短周期副月亮来模拟。' },
        { term: '自定义世界', definition: '15天周期的月亮每年产生24次满月。45天周期的月亮大约产生8次。周期越短意味着月食事件越频繁，但会降低其叙事分量。' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '提示：为第一次团设置特定月相',
      icon: 'mdi:information-outline',
      badge: '设置技巧',
      html: '如果你的战役从弯月开始，将偏移设为轨道周期的约20%。若要满月开始，使用周期的50%作为偏移。例如，28天周期月亮从满月开始应使用偏移14。将天数计数器推进到当前战役天数，预报将自动显示接下来10天。'
    }
  ],
  faq: [
    { question: '我的奇幻世界应该使用多长的轨道周期？', answer: '如果你的设定未指定，28到30天适合单个月亮。对于多个月亮，选择彼此不成简单倍数的周期（例如20和27），这样对齐不会过于频繁。较短的周期（10到15天）适用于产生频繁小潮的副月亮。' },
    { question: '如何让两个月亮在特定战役时刻对齐？', answer: '将两个月亮设为相同的偏移值。它们将在第0天处于相同相位，并在两个周期的最小公倍数那天再次对齐。若要错开它们，给第二个月亮一个等于其轨道周期一半的偏移，使它们从相对位置开始。' },
    { question: '大潮在游戏术语中意味着什么？', answer: '大潮意味着所有活跃月亮处于对齐状态，产生最大潮汐能量。你可以用它触发狂野魔法波动、提升治疗法术范围、加剧风暴强度，或将其标记为世界中某个宗教派系的神圣之夜。' },
    { question: '小潮在游戏术语中意味着什么？', answer: '小潮发生在月亮部分相互抵消时。这是反魔法效果、海上风平浪静、或反派执行需要稳定魔法压制的计划的好时机。' },
    { question: '我能将其用于克苏鲁的呼唤或恐怖战役吗？', answer: '可以。使用单个月亮设置29天周期，偏移设为让满月落在团的高潮时刻。潮汐追踪器可以代表随着月相百分比变化而增强的克苏鲁神话影响力或精神敏感度峰值。' },
    { question: '十天预报是如何工作的？', answer: '预报将每个活跃月亮的月相以彩色圆点形式显示在接下来10个战役天中，从当前天开始。每天下方的百分比是综合潮汐等级。高百分比天数是与魔法或天气相关的戏剧性遭遇的好选择。' },
    { question: '我能追踪周期非常短的月亮吗，比如7天？', answer: '可以。将轨道周期设为7。月亮将每游戏内周完成一次完整周期，经历所有8个相位。适用于魔法每周重置的战役世界，或追踪一个定期经过的小型彗星天体。' },
    { question: '如何匹配已出版冒险模组中的月相？', answer: '查找冒险中的战役天数并记录描述的月相。计算该月相对应在周期中的第几天，除以轨道周期，将该值作为偏移。例如，28天周期第0天是上弦月，意味着偏移为7（28的四分之一）。' }
  ],
  bibliography,
  howTo: [
    { name: '设置轨道周期', text: '输入你的月亮完成一次完整周期所需的游戏内天数。参考你的世界设定，或在5到60之间选择一个值。' },
    { name: '设置起始偏移', text: '输入天数偏移来调整起始月相。偏移0从新月开始。轨道周期的一半从满月开始。' },
    { name: '推进天数计数器', text: '使用步进按钮或滑块移动到当前战役天数，实时查看月相和潮汐等级。' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '桌面RPG月相计算器：追踪自定义奇幻月亮与潮汐周期',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': '需要JavaScript。'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '我的奇幻世界应该使用多长的轨道周期？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '如果你的设定未指定，28到30天适合单个月亮。对于多个月亮，选择彼此不成简单倍数的周期，这样对齐不会过于频繁。'
          }
        },
        {
          '@type': 'Question',
          'name': '大潮在游戏术语中意味着什么？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大潮意味着所有活跃月亮处于对齐状态。用它触发狂野魔法波动、提升治疗法术范围、加剧风暴强度，或将其标记为宗教派系的神圣之夜。'
          }
        },
        {
          '@type': 'Question',
          'name': '如何让两个月亮在特定战役时刻对齐？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '将两个月亮设为相同的偏移值。它们将在两个轨道周期的最小公倍数那天再次对齐。若要错开它们，给第二个月亮一个等于其轨道周期一半的偏移。'
          }
        },
        {
          '@type': 'Question',
          'name': '十天预报是如何工作的？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '预报将每个活跃月亮的月相以彩色圆点形式显示在接下来10个战役天中。显示的百分比是综合潮汐等级。高百分比天数是魔法或天气戏剧性遭遇的好选择。'
          }
        },
        {
          '@type': 'Question',
          'name': '我能将其用于克苏鲁的呼唤或恐怖战役吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可以。使用单个月亮设置29天周期，偏移设为让满月落在团的高潮时刻。潮汐追踪器可以代表随着月相百分比变化而增强的克苏鲁神话影响力或精神敏感度峰值。'
          }
        },
        {
          '@type': 'Question',
          'name': '如何匹配已出版冒险模组中的月相？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '记录描述的月相并计算该月相对应在周期中的第几天。除以轨道周期，将该比值作为偏移。例如，28天周期上弦月意味着偏移为7。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何在桌面角色扮演游戏战役中追踪月相',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '设置轨道周期',
          'text': '输入你的月亮完成一次完整周期所需的游戏内天数。'
        },
        {
          '@type': 'HowToStep',
          'name': '设置起始偏移',
          'text': '输入天数偏移来调整起始月相。轨道周期的一半从满月开始。'
        },
        {
          '@type': 'HowToStep',
          'name': '推进天数计数器',
          'text': '使用步进按钮或滑块移动到当前战役天数，查看月相和潮汐等级。'
        }
      ]
    }
  ]
};
export default content;
