import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: '选择边框',
  frameHint: '选择能在看到名字前就传达角色身份的轮廓边框。',
  randomFrame: '随机边框',
  surfaceLegend: '棋子配色设置',
  backgroundLabel: '背景颜色',
  borderLabel: '边框颜色',
  textLabel: '文字颜色',
  overlayLabel: '色调覆盖',
  randomColors: '随机颜色',
  borderWidthLabel: '边框粗细',
  opacityLabel: '边框透明度',
  overlayOpacityLabel: '头像遮罩透明度',
  stageLabel: '实时棋子锻造台',
  chooseImage: '选择头像',
  positionHint: '可以直接在棋子上拖动调整头像或文字标签的位置。',
  markerName: '标记名称',
  markerNamePlaceholder: '为此标记命名',
  textLegend: '添加清晰可读的桌面细节',
  textHint: '使用简短标签（如名字、等级、职业或状态），并将其拖动到棋子上的合适位置。',
  textPlaceholder: '角色名字或职业',
  addText: '添加标签',
  removeText: '移除标签',
  textSizeLabel: '字体大小',
  alignmentLabel: '对齐方式',
  alignLeft: '左对齐',
  alignCenter: '居中对齐',
  alignRight: '右对齐',
  imageLegend: '微调头像',
  imageZoomLabel: '头像缩放',
  scaleLabel: '导出比例',
  savedMarkers: '已保存的标记',
  noSavedMarkers: '已保存的标记将显示在此处，方便重新打开和编辑。',
  reuseMarker: '选择标记以重新在锻造台编辑。',
  deleteMarker: '删除标记',
  newMarker: '新建标记',
  download: '下载 PNG',
  copy: '复制 PNG',
  downloadBatch: '批量下载',
  batchLabel: '高级批量导出',
  batchHint: '可选：使用当前的边框和配色方案批量导出多个头像。',
  chooseBatch: '选择批量图片',
  batchReady: '已准备好 {count} 张图片。',
  noImage: '未加载头像',
  noText: '暂无标签。请添加团队所需的详细信息。',
  tokenDetails: '角色棋子控制面板',
  exportHint: '导出的 PNG 图片在选定轮廓外保持透明，可直接用于跑团软件（VTT）或打印。',
};

const faq = [
  {
    question: '什么样的头像适合制作角色棋子？',
    answer: '选择面部清晰、与边框对比鲜明的图片。头部和肩膀的近景裁切在虚拟桌面上缩小显示时最清晰。',
  },
  {
    question: '如何在边框内精准调整头像位置？',
    answer: '导入图片后直接在棋子上拖动。使用头像缩放功能可以放大面部，而无需更改边框形状。',
  },
  {
    question: '可以在棋子上添加角色名字和等级吗？',
    answer: '可以。添加简短的文本标签，调整字体大小和对齐方式，然后拖动到棋子上的清晰位置。',
  },
  {
    question: '导出的 PNG 图片背景是透明的吗？',
    answer: '是的。导出的图片在边框轮廓之外保持透明，方便直接覆盖在战场地图上。',
  },
  {
    question: '可以一次性为整个小队制作棋子吗？',
    answer: '可以。使用批量导出功能，导入多张图片，即可应用相同的边框样式批量生成透明 PNG 棋子。',
  },
  {
    question: '保存的标记保存在哪里？',
    answer: '标记保存在您浏览器的本地存储中，不会将您的个人图片上传到任何服务器。',
  },
];

const howTo = [
  { name: '选择适合角色的边框', text: '根据角色属性选择边框：圆形适合主角，六边形适合战术棋盘，星形适合 Boss。' },
  { name: '导入并调整头像位置', text: '拖入图片，调整拖动和缩放比例，使面部处于中央。' },
  { name: '添加必要的桌面文本', text: '添加简短的名字或状态标签，避免遮挡主要画面。' },
  { name: '导出透明 PNG', text: '下载透明 PNG 棋子，直接在 VTT 跑团软件中使用。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'TRPG 桌面角色棋子（Token）制作工具，支持自定义边框、文本标签、背景透明及批量 PNG 导出。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何制作跑团角色棋子',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'token-stamp-studio',
  title: 'TRPG跑团角色棋子在线制作工具 (Token Stamp)',
  description: 'TRPG 桌面角色棋子（Token）制作工具，支持自定义边框、文本标签、背景透明及批量 PNG 导出。',
  ui,
  seo: [
    { type: 'title', text: '制作在游戏地图上清晰辨识的在线桌面跑团角色棋子', level: 2 },
    { type: 'paragraph', html: '棋子是桌游和 TRPG 跑团中不可或缺的核心视觉交流工具。棋子的轮廓能够在玩家放大地图细节之前，就直观地传达出当前代表的是英雄、强敌怪物、魔法效果还是重要盟友。为角色选择最契合的边框，并确保人物头像和文本标签在实际缩放比例下依然清晰易读。' },
    { type: 'title', text: '为不同定位与阵营的角色选择最合适的边框样式', level: 2 },
    { type: 'list', items: ['<strong>圆形与圆环:</strong> 玩家角色（PC）与常驻盟友的最经典可靠选择。', '<strong>六边形与八边形:</strong> 适合包含大量战斗单位的战术棋盘与战场地图。', '<strong>星形:</strong> 非常适合 Boss 怪物、精英敌人或需要引起注意的重要目标。', '<strong>云朵形:</strong> 适合召唤兽、精灵、魔宠等特殊的存在。'] },
    { type: 'tip', title: '针对游戏时实际最小显示尺寸进行细致设计', html: '缩小地图视角，观察棋子缩到很小时面部特征与文字是否依然清晰可辨。' },
    { type: 'title', text: '使用简短而实用的文本标签辅助对局', level: 2 },
    { type: 'paragraph', html: '跑团棋子无需替代完整的角色卡，只需添加名字、等级或晕眩等状态标签，避免遮挡插画。' },
    { type: 'title', text: '一键为整个冒险小队制作视觉统一的角色棋子', level: 2 },
    { type: 'paragraph', html: '批量导出功能可以在保持团队整体视觉规范统一的同时，完美保留每个角色的独特插画。' },
    { type: 'tip', title: '设备本地自动保存功能', html: '正在制作的标记会自动保存在浏览器本地，随角色升级轻松打开重新编辑。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
