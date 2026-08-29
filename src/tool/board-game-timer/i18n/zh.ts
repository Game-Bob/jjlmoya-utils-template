import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: '桌游计时器',
  setupTitle: '游戏设置',
  playerNamePlaceholder: '玩家名称',
  addPlayer: '添加玩家',
  removePlayer: '删除',
  startGame: '开始游戏',
  pauseGame: '暂停',
  resumeGame: '继续',
  resetGame: '重置',
  nextTurn: '结束回合',
  addTime: '+30秒',
  removeTime: '-30秒',
  playerLabel: '玩家',
  minutesLabel: '分',
  secondsLabel: '秒',
  expiredLabel: '时间到',
  overtimeLabel: '超时',
  turnIndicator: '轮到你了',
  warningLowTime: '时间紧张',
  pausedOverlay: '游戏已暂停',
  roundLabel: '轮次',
  settingsTitle: '设置',
  baseTimeLabel: '基础时间',
  incrementLabel: '增时/延时',
  warningTimeLabel: '警告阈值',
  confirmLabel: '确认',
  cancelLabel: '取消',
  noPlayersHint: '请至少添加 2 名玩家以开始游戏',
  addPlayerHint: '输入玩家名称',
  timeUpLabel: '时间到！',
  presetsTitle: '预设',
  timeControlTitle: '时间控制',
  modeLabel: '模式',
  modeNormal: '普通倒计时',
  modeFischer: '菲舍尔 (增时)',
  modeBronstein: '布龙斯坦 (延时)',
  modeHourglass: '沙漏',
  modeTurn: '回合重置',
  audioTitle: '声音提示',
  soundAlerts: '音效',
  playersTitle: '玩家',
  playersAdded: '已添加玩家',
  statsTitle: '游戏统计数据',
  totalGameTime: '总时间',
  totalRounds: '总轮次',
  slowestPlayer: '最慢玩家',
  playerPerformance: '玩家用时分析',
  playAgain: '新游戏',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'board-game-timer',
  title: '桌游计时器：双人对局棋钟与多人回合管理器',
  description: '使用专业的桌游计时器记录回合和管理游戏时间。支持双人棋钟对局模式、多人网格布局、菲舍尔增时、布龙斯坦延时、沙漏模式以及详细的游戏数据统计。',
  ui,
  seo: [
    { type: 'title', text: '掌控桌面节奏：专业的时间控制如何提升桌面游戏体验', level: 2 },
    { type: 'paragraph', html: '时间管理是现代桌面游戏中的一个重要元素。无论你是在竞争激烈的派对游戏还是在深度的策略战争游戏中，限制思考时间都可以确保所有参与者获得公平的游戏机会。使用菲舍尔增时、布龙斯坦延时或沙漏模式等专业计时方法可以杜绝长考分析瘫痪，保证游戏节奏的一致性，并为游戏版图增添额外的战略决策维度。' },
    {
      type: 'stats',
      items: [
        { value: '2-8人', label: '支持玩家数量' },
        { value: '5种模式', label: '时间配置' },
        { value: '100ms', label: '引擎精度' },
      ],
      columns: 3,
    },
    { type: 'title', text: '菲舍尔、布龙斯坦与沙漏：高级时间控制模式规则解析', level: 2 },
    { type: 'paragraph', html: '我们的专业桌游计时器支持多种灵感源自竞技锦标赛的计时选项，让你的游戏过程更顺畅：' },
    {
      type: 'table',
      headers: ['模式', '工作原理', '最适合'],
      rows: [
        ['普通倒计时', '标准的全局倒计时时钟，在回合结束时暂停。', '拥有共享思考时间池的休闲桌游'],
        ['菲舍尔 (增时)', '在完成回合后，向你的时钟添加设定的秒数。', '快速行动可以积累时间缓冲的策略德式桌游和兵棋'],
        ['布龙斯坦 (延时)', '在回合开始时提供一个延时窗口，期间主计时器不进行倒计时。', '复杂的战术游戏，玩家需要简短的实体操作整理时间'],
        ['沙漏', '你的时间流逝同时，对手的时间实时增加。', '紧张刺激的双人对抗赛和国际象棋对局'],
        ['回合重置', '每个回合拥有一段全新的固定倒计时时间，在下个回合开始时完全复原。', '节奏飞快的派对游戏、问答挑战和快速轮次'],
      ],
    },
    {
      type: 'tip',
      title: '寻找理想的时间配置',
      html: '推荐的初始设置是：轻度派对游戏分配 30-45 秒，中度策略桌游使用 1-2 分钟并伴随 5 秒布龙斯坦延时，而重度战争游戏或策略战役则使用 30-45 分钟并伴随 10 秒菲舍尔增时。',
    },
    {
      type: 'title',
      text: '视觉优化：双人分屏对局棋钟对比多人网格中央结束按钮',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于双人对决，应用会自动展示分屏棋钟布局。此视图允许玩家将各自的屏幕区域旋转 180 度，方便桌子对面的玩家看清时间。对于 3 名或更多参与者的游戏，界面将切换为多人网格，包含当前玩家发光提示、个人状态卡调整以及一个巨大的中央结束回合按钮，该按钮可用作放置在游戏区中央的共用物理按键。',
    },
    {
      type: 'proscons',
      title: '菲舍尔增时与布龙斯坦延时的对比分析',
      items: [
        {
          pro: '菲舍尔增时奖励快速思考，通过为未来的回合积累时间储备来获得优势。',
          con: '如果玩家持续进行极快的行动，总游戏时间可能会变得很长。',
        },
        {
          pro: '布龙斯坦延时防止在简单的物理管理回合中流失时间，且不会积攒过多的无用储备。',
          con: '需要配置与游戏物理管理用时相匹配的合理延时阈值。',
        },
        {
          pro: '沙漏模式在双人决斗中产生直接的紧张感，通过不断吸取你的时间来喂养对手。',
          con: '在多于两人的游戏中，数学计算变得非常复杂且缺乏策略性。',
        },
      ],
    },
    {
      type: 'title',
      text: '得益于回合计时器的常见桌游类型',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '德式策略桌游',
          description: '工人放置和资源管理类游戏，其回合复杂度往往有所起伏。菲舍尔增时可以帮助玩家处理关键的残局决策，而不会拖慢开局的速度。',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            '缓解长考分析瘫痪',
            '支持动态复杂回合',
            '时间成为一种主动资源',
          ],
        },
        {
          title: '派对与问答游戏',
          description: '注重快速反应和乐趣的高能量游戏。回合重置计时器可以保持团队热度，防止单个玩家卡死整局游戏。',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            '简短的固定倒计时',
            '维持派对的愉快氛围',
            '强制要求立即做出行动',
          ],
        },
        {
          title: '锦标赛双人决斗',
          description: '严格的棋钟决斗需要精确、支持旋转的屏幕布局，以保证在整场锦标赛中的竞争公平性与合理调度。',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '屏幕支持 180 度旋转',
            '高精度的 100 毫秒时间追踪',
            '支持突然死亡与超时状态判定',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '菲舍尔增时 (Fischer Increment)',
          definition: '一种时间控制方法，在每个玩家完成其回合后，向其剩余时间中添加设定数量的的秒数。',
        },
        {
          term: '布龙斯坦延时 (Bronstein Delay)',
          definition: '一种时间控制方法，在回合开始时延迟倒计时一段设定的秒数，如果在该秒数内完成回合则不扣除时间。',
        },
        {
          term: '沙漏模式 (Hourglass Mode)',
          definition: '一种动态计时系统，其中一个玩家被扣除的时间会实时直接转移给对手。',
        },
        {
          term: '分析瘫痪 / 长考 (Analysis Paralysis)',
          definition: '玩家因选项过多而陷入过度思考的状态，从而导致游戏进程停滞并影响其他玩家的体验。',
        },
        {
          term: '游戏统计分析',
          definition: '游戏后性能分析指标，总结总经历轮次、平均思考速度、最大回合耗时以及最慢回合排名。',
        },
      ],
    },
  ],
  faq: [
    {
      question: '双人模式的布局是如何工作的？',
      answer: '当开始 2 人玩家游戏时，界面将显示双人分屏棋钟。每一边代表一个玩家，点击他们各自的半屏即可结束其回合。屏幕可以旋转 180 度，方便面对面坐着的玩家观看。',
    },
    {
      question: '菲舍尔模式和布龙斯坦模式有什么区别？',
      answer: '菲舍尔模式在结束回合后向玩家的时间池中添加额外的秒数，允许他们积累时间。布龙斯坦模式在每个回合开始时给予一定的延迟时间；如果回合在延迟时间内结束，则不扣除时间。',
    },
    {
      question: '应用会记录回合统计数据吗？',
      answer: '是的！游戏结束或计时器用尽后，统计弹窗会显示游戏总耗时、总轮次、平均回合时间、最长回合时间以及玩家思考速度排名。',
    },
    {
      question: '刷新页面后，我的玩家信息会保存吗？',
      answer: '是的，玩家配置和颜色选择会自动保存在浏览器的本地存储中，当你返回页面时，它会恢复你的玩家列表。',
    },
    {
      question: '我可以在实时游戏期间增加或减少时间吗？',
      answer: '可以！在多人模式下，玩家卡片提供了专门的 +30秒 和 -30秒 按钮，以方便在游戏过程中快速调节剩余时间。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '配置游戏设置',
      text: '选择预设（休闲、闪电战、策略、沙漏）或设定自定义参数：基础用时、增时/延时以及警告阈值。',
    },
    {
      name: '添加与保存玩家',
      text: '输入玩家名称并选择识别颜色。使用箭头控件重新排序回合顺序；详细信息会自动保存。',
    },
    {
      name: '启动并交替回合',
      text: '开始游戏。在双人模式中，点击你的屏幕半区以结束回合。在多人模式中，点击中央巨大的"结束回合"按钮。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '桌游计时器与回合管理器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '双人模式的布局是如何工作的？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '当开始 2 人玩家游戏时，界面将显示双人分屏棋钟。每一边代表一个玩家，点击他们各自的半屏即可结束其回合。屏幕可以旋转 180 度，方便面对面坐着的玩家观看。'
          }
        },
        {
          '@type': 'Question',
          'name': '菲舍尔模式和布龙斯坦模式有什么区别？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '菲舍尔模式在结束回合后向玩家的时间池中添加额外的秒数，允许他们积累时间。布龙斯坦模式在每个回合开始时给予一定的延迟时间；如果回合在延迟时间内结束，则不扣除时间。'
          }
        },
        {
          '@type': 'Question',
          'name': '应用会记录回合统计数据吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的！游戏结束或计时器用尽后，统计弹窗会显示游戏总耗时、总轮次、平均回合时间、最长回合时间以及玩家思考速度排名。'
          }
        },
        {
          '@type': 'Question',
          'name': '刷新页面后，我的玩家信息会保存吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的，玩家配置和颜色选择会自动保存在浏览器的本地存储中，当你返回页面时，它会恢复你的玩家列表。'
          }
        },
        {
          '@type': 'Question',
          'name': '我可以在实时游戏期间增加或减少时间吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可以！在多人模式下，玩家卡片提供了专门的 +30秒 和 -30秒 按钮，以方便在游戏过程中快速调节剩余时间。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用桌游计时器',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '配置游戏设置',
          'text': '选择预设（休闲、闪电战、策略、沙漏）或设定自定义参数：基础用时、增时/延时以及警告阈值。'
        },
        {
          '@type': 'HowToStep',
          'name': '添加与保存玩家',
          'text': '输入玩家名称并选择识别颜色。使用箭头控件重新排序回合顺序；详细信息会自动保存。'
        },
        {
          '@type': 'HowToStep',
          'name': '启动并交替回合',
          'text': '开始游戏。在双人模式中，点击你的屏幕半区以结束回合。在多人模式中，点击中央巨大的"结束回合"按钮。'
        }
      ]
    }
  ],
};
