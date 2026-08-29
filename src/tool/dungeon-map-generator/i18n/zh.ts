import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: '选择种子值，设置网格大小与建筑风格。生成全连通的地下城地图，适用于笔记、打印或虚拟桌宠/VTT。',
  seedLabel: '地图种子 (Seed)',
  seedHint: '使用相同的种子与设置可以完全重构相同的地图。',
  randomSeed: '新种子',
  sizeLabel: '探险规模',
  sizeCompact: '单次模组 (One-shot)',
  sizeSession: '标准跑团',
  sizeStronghold: '大型堡垒',
  fineTuneGrid: '网格与密度微调',
  columnsLabel: '列数（横向）',
  rowsLabel: '行数（纵向）',
  densityLabel: '房间密度',
  densityHint: '更高的密度会生成更多房间和可行走地面。',
  styleLabel: '建筑风格',
  dungeonStyle: '地牢 (Dungeon)',
  dungeonStyleHint: '石质房间与单格宽度的通道。',
  cavernStyle: '洞穴 (Cavern)',
  cavernStyleHint: '边缘圆润的不规则天然溶洞。',
  scifiStyle: '科幻舱室 (Sci-Fi)',
  scifiStyleHint: '宽敞的模块舱室与双格宽通道。',
  generate: '绘制此地图',
  mapRegionLabel: '生成的地下城地图及导出控制',
  connectedBadge: '所有房间已连通',
  roomsLabel: '房间数',
  doorsLabel: '门数量',
  floorLabel: '地面覆盖率',
  legendFloor: '可行走地面',
  legendWall: '实体墙壁',
  legendDoor: '门 / 气闸',
  editHint: '右键点击格点进行编辑',
  editCell: '编辑此格',
  paintFloor: '地面',
  paintWall: '墙壁',
  paintDoor: '门',
  mapData: '地图数据',
  copyLink: '复制地图链接',
  linkCopied: '链接已复制',
  exportPng: '下载 PNG',
  exportSvg: '下载 SVG',
  exportJson: '保存 JSON',
  importJson: '打开 JSON',
  importError: '此文件不包含有效的地下城地图设置。',
  compactMap: '紧张探索',
  balancedMap: '平衡探险',
  sprawlingMap: '开放堡垒',
  compactHint: '较长的通道使房间之间留出更多未知区域。',
  balancedHint: '房间与通道比例得当。',
  sprawlingHint: '广阔的地面有利于战斗与快速移动。',
  mapReady: '图例说明',
  dimensionsUnit: '网格格数',
};

const faq = [
  {
    question: '相同的种子总是生成相同的地下城地图吗？',
    answer: '是的。种子、网格尺寸、密度和风格构成确定的配置，使用相同设置将重构完全相同的地图。',
  },
  {
    question: '生成的房间都是互通的吗？',
    answer: '是的。房间在生成后会通过主路径连接，确保所有地面都属于同一个连通地图。',
  },
  {
    question: '地牢、洞穴和科幻风格有什么区别？',
    answer: '地牢风格采用规则的石室，洞穴风格生成不规则的天然溶洞，科幻风格采用宽敞模块和双格通道。',
  },
  {
    question: '虚拟桌宠/跑团平台（VTT）应该导出什么格式？',
    answer: 'PNG 格式最适合大多数 VTT 平台。SVG 格式支持无损缩放，方便在矢量软件中编辑。',
  },
  {
    question: '其他人可以重现我生成的随机地图吗？',
    answer: '可以。只需复制地图链接或发送 JSON 文件，对方即可载入完全相同的地图配置。',
  },
  {
    question: '这个生成器会自动添加怪物、陷阱或宝箱吗？',
    answer: '不会。它生成中立的建筑平面图，主持人可以根据任何规则书自行填充内容。',
  },
];

const howTo = [
  {
    name: '设置网格尺寸',
    text: '选择适合您的笔记或 VTT 场景的列数和行数。',
  },
  {
    name: '选择建筑风格',
    text: '选择地牢、洞穴或科幻风格，并调整房间密度。',
  },
  {
    name: '生成并检查',
    text: '输入种子生成地图，查看房间和门的数据统计。',
  },
  {
    name: '导出或分享',
    text: '下载 PNG/SVG 图像，或通过链接和 JSON 保存配置。',
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
  name: '随机地下城地图生成器',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: '全房间连通的随机地下城地图生成工具。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何生成全连通的地下城地图',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'random-dungeon-map-generator',
  title: '桌游 TRPG 随机地下城地图生成器',
  description: '生成全房间连通的地下城、洞穴与科幻地图，支持 PNG 和 SVG 格式导出。',
  ui,
  seo: [
    { type: 'title', text: '使用可复用种子生成可玩的地下城地图', level: 2 },
    { type: 'paragraph', html: '实用且好用的随机地下城地图需要超越单纯的随机视觉噪声。每个房间都必须通过连通的通道确保玩家可达，网格大小需完美匹配游戏桌面或线上跑团软件，并且结果可以在任何设备上随时重现。本生成器将地图种子与各项参数视为一份精炼且确定性的地图规格说明。只要保持相同的种子、行列数、密度和建筑风格，日后就能完全重构出相同的平面图。' },
    { type: 'title', text: '适合打印与虚拟桌面（VTT）的网格尺寸', level: 2 },
    { type: 'paragraph', html: '设置网格大小是规划跑团会话时的实际第一步。较小的网格易于打印在 A4 纸张上用于单次短跑模组或特定地点，而大型地图则为复杂的战术探索、阵营拉锯与备用路线提供充裕空间。导出的图像保持完美的正方形网格单元，以便无缝对齐虚拟桌面 (VTT) 软件中的网格设置。' },
    {
      type: 'table',
      headers: ['网格尺寸', '典型用途', '初始密度', '设计建议'],
      rows: [
        ['20 x 16 格', '短跑模组 (One-shot)', '35 至 45', '易于打印在纸张上，视觉读取直观快速'],
        ['36 x 26 格', '标准跑团地牢', '45 至 55', '房间与通道节奏保持良好平衡'],
        ['52 x 38 格', '大型复合建筑', '50 至 65', '容纳多个阵营和备用通道路线'],
      ],
    },
    { type: 'tip', title: '根据遭遇战规模调整地图大小', html: '在选择总尺寸之前，先计算大型战斗遭遇或BOSS战所需的格数。大型地牢如果充满微型房间会显得拥挤狭窄，而带有宽敞中央大厅的紧凑平面图则有利于营造难忘的遭遇战场景。' },
    { type: 'title', text: '将地面覆盖率作为探索节奏信号', level: 2 },
    { type: 'paragraph', html: '地面覆盖率表示画布中可供玩家移动的区域百分比。低覆盖率强调迷雾中的未知感、隔绝感与房间之间的紧张感。中等覆盖率提供稳健的探险节奏。高覆盖率则构建出一个守备森严的堡垒或设施，其中的战斗与巡逻会迅速蔓延至相邻房间。' },
    {
      type: 'list',
      items: [
        '<strong>紧张探索：</strong> 利用空白区域提示隐藏通道、深邃空间或未知的隔绝区域。',
        '<strong>平衡探险：</strong> 交替配置调查房间、连接通道与战斗遭遇区域。',
        '<strong>开放堡垒：</strong> 预留清晰视线、巡逻路线以及相互关联的遭遇事件。',
      ],
    },
    { type: 'title', text: '将中立平面图转化为冒险舞台', level: 2 },
    { type: 'paragraph', html: '生成的地图故意仅提供基础建筑结构。请为每个主要房间赋予明确的叙事功能，并据此布置线索、陷阱、生物与宝藏。将门与气闸用作玩家做出的战略决策点。' },
    { type: 'tip', title: '在记录遭遇细节前保存配置', html: '在添加地下城主 (DM) 笔记之前复制地图链接或保存 JSON 配置，即可为玩家保留一份干净的地图，而不会泄露剧透细节。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
