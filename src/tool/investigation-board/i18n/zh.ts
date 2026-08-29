import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "线索墙制作器：在线侦探RPG线索与人物关系图整理工具",
  description: "设计交互式线索墙和RPG调查地图。使用定制的彩色关系线将嫌疑人、线索和地点连接起来。",
  ui: {
  "title": "线索墙制作器",
  "addCard": "添加卡片",
  "searchPlaceholder": "按名称或线索搜索卡片",
  "filterAll": "所有类别",
  "filterCharacter": "人物",
  "filterClue": "线索",
  "filterLocation": "地点",
  "filterItem": "道具",
  "cardName": "卡片名称",
  "cardCategory": "类别",
  "cardDescription": "描述",
  "cardNotes": "私人备注",
  "cardTags": "以逗号分隔的的标签",
  "cardColor": "卡片高亮颜色",
  "save": "保存修改",
  "delete": "删除",
  "cancel": "取消",
  "clearBoard": "清空画板",
  "connectionsTitle": "关系地图",
  "addConnection": "添加连接",
  "connectionLabel": "关系标签",
  "connectionColor": "连线颜色",
  "sourceCard": "起始卡片",
  "targetCard": "目标卡片",
  "close": "关闭",
  "character": "人物",
  "clue": "线索",
  "location": "地点",
  "item": "道具",
  "custom": "自定义",
  "immersive": "全屏模式"
},
  seo: [
    { type: 'title', text: "在线线索墙制作器：整理侦探RPG线索与人物关系地图", level: 2 },
    { type: 'paragraph', html: "在侦探RPG中，理清复杂的谎言网络、追踪嫌疑人的不在场证明并连接案发现场证据，很容易让玩家感到混乱。无论是运行《克苏鲁的呼唤》跑团、赛博朋克谋杀谜案、D&D侦探冒险，还是撰写悬疑小说，我们的在线线索墙制作器都是终极工具。在无限的数字化软木板上拖放、分类并关联线索、NPC和实体物证。使用彩色关系连线，瞬间直观查看嫌疑人与案发现场、不在场证明以及隐藏动机的关系。" },
    {
      type: 'stats',
      items: [
        { value: "无限制", label: "节点画板" },
        { value: "4", label: "节点类别" },
        { value: "拖拽操作", label: "操作界面" }
      ],
      columns: 3
    },
    { type: 'title', text: "侦探RPG调查画板整理技巧", level: 2 },
    { type: 'tip', title: "三线索原则", html: "对于你希望玩家得出的每个结论或推理，在调查画板上至少添加三个不同的线索。使用自定义的彩色连线将它们连接起来，展示不同的推理路径。使用人物卡代表嫌疑人与证人，地点卡代表案发现场，道具卡代表物证或文档。根据玩家的发现及时更新私人备注。" },
    { type: 'title', text: "数字线索墙与实体软木板对比", level: 2 },
    {
      type: 'proscons',
      title: "数字线索墙与实体软木板对比",
      items: [
        { pro: "无限的画板尺寸，可根据需要添加任意数量的线索、嫌疑人和人物关系，不受空间限制。", con: "桌面跑团时需要在游戏桌上准备屏幕、平板电脑或数字化设备。" },
        { pro: "即时搜索和类别过滤器，可在游戏过程中立即定位特定证人或物证。", con: "缺少在真实墙壁上使用图钉和真实红毛线连接的实体触感。" },
        { pro: "数字化保存、加载和分享调查地图，在游戏间隙不占用任何物理空间。", con: "需要互联网连接或浏览器本地存储来保存画板状态。" }
      ]
    },
    { type: 'title', text: "为你的谜题地图选择卡片类别", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "人物节点",
          description: "代表NPC、嫌疑人、证人或组织。使用彩色连线突出人物关系。",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "追踪嫌疑人不在场证明与动机",
            "关联家族关系与秘密组织结盟",
            "记录证人证言的详细内容"
          ]
        },
        {
          title: "线索节点",
          description: "代表玩家在跑团过程中发现的实体物证、尸检报告、不在场证明或传闻。",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "尸检报告与法医鉴定数据",
            "从案发现场收集到的实体物品",
            "听到的传闻与泄露的秘密"
          ]
        },
        {
          title: "地点节点",
          description: "案发现场、嫌疑人住宅、秘密藏身处或城市。",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "案发现场照片与平面图",
            "关键NPC的住所与工作地",
            "秘密据点与异次元传送门"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "线索墙专业术语表", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "调查节点", definition: "画布上代表人物、地点、线索或道具 hard card 卡片。" },
        { term: "关系连线", definition: "连接两张卡片的彩色线条，指示它们的关系（例如：嫌疑人、不在场证明、所有者）。" },
        { term: "沉浸模式", definition: "隐藏控制面板的全屏布局，可最大化移动端或平板上的画布工作空间。" },
        { term: "高亮路径", definition: "仅彩色显示与所选卡片直接相连的节点和连线，同时将画板其余部分变暗的视觉效果。" }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "移动端性能建议",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "如果旧款平板电脑上拖拽节点较慢，请开启沉浸模式以隐藏浮动菜单。确保启用了网格吸附（卡片每15像素吸附对齐），以便轻松保持画板整洁。"
    }
  ],
  faq: [
    { question: "如何添加连接线？", answer: "点击控制面板中的'添加连接'，或点击卡片上的链接图标，然后选择目标卡片。" },
    { question: "我可以在手机上拖动卡片吗？", answer: "可以，画板支持触摸手势，可在智能手机和平板电脑上流畅地拖动和移动卡片。" },
    { question: "我可以使用自定义的卡片颜色吗？", answer: "可以。双击卡片，在类别下选择 Custom，然后选择高亮颜色。" },
    { question: "画板会保存我的工作吗？", answer: "会。您的进度会自动保存在浏览器的本地存储中，保存在当前画板名称下。" },
    { question: "如何放大、缩小和移动画板？", answer: "使用双指捏合手势或鼠标滚轮进行放大和缩小。拖动背景可在画布上平移移动。" }
  ],
  bibliography,
  howTo: [
    { name: "添加调查卡片", text: "创建代表NPC、线索、案发现场或道具的卡片。" },
    { name: "关联关系", text: "在卡片之间创建连接线，以显示线索之间的关联。" }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "线索墙制作器：在线侦探RPG线索与人物关系图整理工具",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "如何添加连接线？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "点击控制面板中的'添加连接'，或点击卡片上的链接图标，然后选择目标卡片。"
          }
        },
        {
          '@type': 'Question',
          'name': "我可以在手机上拖动卡片吗？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "可以，画板支持触摸手势，可在智能手机和平板电脑上流畅地拖动和移动卡片。"
          }
        },
        {
          '@type': 'Question',
          'name': "我可以使用自定义的卡片颜色吗？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "可以。双击卡片，在类别下选择 Custom，然后选择高亮颜色。"
          }
        },
        {
          '@type': 'Question',
          'name': "画板会保存我的工作吗？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "会。您的进度会自动保存在浏览器的本地存储中，保存在当前画板名称下。"
          }
        },
        {
          '@type': 'Question',
          'name': "如何放大、缩小和移动画板？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "使用双指捏合手势或鼠标滚轮进行放大和缩小。拖动背景可在画布上平移移动。"
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "线索墙制作器使用方法",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "添加调查卡片",
          'text': "创建代表NPC、线索、案发现场或道具的卡片。"
        },
        {
          '@type': 'HowToStep',
          'name': "关联关系",
          'text': "在卡片之间创建连接线，以显示线索之间的关联。"
        }
      ]
    }
  ]
};
