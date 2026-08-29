import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'シード値を選択し、グリッドと建築スタイルを設定します。メモ、印刷、オンラインセッション（VTT）で使えるマップを生成します。',
  seedLabel: 'マップシード値',
  seedHint: '同じ設定で同じシード値を使用すると、まったく同じマップを再現できます。',
  randomSeed: '新しいシード値',
  sizeLabel: '探検規模',
  sizeCompact: '単発セッション（ワンショット）',
  sizeSession: '標準セッション',
  sizeStronghold: '大規模要塞',
  fineTuneGrid: 'グリッドと密度の微調整',
  columnsLabel: '列数（横）',
  rowsLabel: '行数（縦）',
  densityLabel: '部屋の密度',
  densityHint: '密度を高くすると、より多くの部屋と歩行可能な床面が生成されます。',
  styleLabel: 'マップ建築スタイル',
  dungeonStyle: 'ダンジョン',
  dungeonStyleHint: '標準的な石造りの部屋と単一幅の通路。',
  cavernStyle: '洞窟',
  cavernStyleHint: '曲線を描く不規則な天然空洞。',
  scifiStyle: 'SFモジュール',
  scifiStyleHint: '広々とした部屋と2マス幅の接続ハッチ。',
  generate: 'このマップを描画',
  mapRegionLabel: '生成されたダンジョンマップとエクスポート操作',
  connectedBadge: '全小部屋接続完了',
  roomsLabel: '部屋数',
  doorsLabel: 'ドア数',
  floorLabel: '床面カバー率',
  legendFloor: '移動可能な床',
  legendWall: '堅固な壁',
  legendDoor: 'ドア / ハッチ',
  editHint: 'マスを右クリックして編集',
  editCell: 'このマスを編集',
  paintFloor: '床',
  paintWall: '壁',
  paintDoor: 'ドア',
  mapData: 'マップデータ',
  copyLink: 'マップリンクをコピー',
  linkCopied: 'リンクをコピーしました',
  exportPng: 'PNGダウンロード',
  exportSvg: 'SVGダウンロード',
  exportJson: 'JSON保存',
  importJson: 'JSONを開く',
  importError: 'このファイルには有効なダンジョン設定が含まれていません。',
  compactMap: '緊迫した探索',
  balancedMap: 'バランス型の探検',
  sprawlingMap: '広大な要塞',
  compactHint: '長い通路により部屋間に多くの未知の空間が残ります。',
  balancedHint: '部屋と通路が心地よく配置されます。',
  sprawlingHint: '広い床面積により戦闘や高速移動が容易になります。',
  mapReady: 'マップ凡例',
  dimensionsUnit: 'グリッドマス',
};

const faq = [
  {
    question: '同じシード値からは常に同じマップが生成されますか？',
    answer: 'はい。シード値、グリッド寸法、密度、建築スタイルによって決定論的にマップが作成されます。',
  },
  {
    question: '生成されたすべての部屋へ移動できますか？',
    answer: 'はい。配置後に最小全域ルーツ接続が行われるため、すべての部屋へ到達可能です。',
  },
  {
    question: 'ダンジョン、洞窟、SFスタイルの違いは何ですか？',
    answer: 'ダンジョンは石造りの四角い部屋、洞窟は曲線状の空洞、SFスタイルは広々としたモジュールと2マス幅の通路を生成します。',
  },
  {
    question: 'オンラインセッション（VTT）にはどの形式が最適ですか？',
    answer: 'PNG形式が最も手軽です。SVG形式は拡大しても鮮明さを保ち、ベクトルソフトでの編集に適しています。',
  },
  {
    question: '他のプレイヤーと生成したマップを共有できますか？',
    answer: 'はい。マップリンクをコピーするかJSONファイルを共有することで、完全に同じマップを再現できます。',
  },
  {
    question: 'モンスターや宝箱などのデータも自動配置されますか？',
    answer: 'いいえ。ゲームマスターが自由なルールで装飾できるよう、純粋な建築フロアプランのみを提供します。',
  },
];

const howTo = [
  {
    name: 'グリッド寸法を設定',
    text: 'ノートや印刷紙面、VTTのシーンサイズに合わせて列数と行数を指定します。',
  },
  {
    name: '建築スタイルを選択',
    text: 'ダンジョン、洞窟、SFから選択し、部屋の密度を調整します。',
  },
  {
    name: 'マップを生成して確認',
    text: 'シード値を入力して生成し、部屋数や床面積の統計を確認します。',
  },
  {
    name: 'エクスポートして共有',
    text: 'PNG/SVGでダウンロードするか、リンクやJSONで共有します。',
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
  name: 'ランダムダンジョンマップ生成ツール',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: '全小部屋が接続されたランダムダンジョンマップを決定論的に生成するツール。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '接続されたダンジョンマップの生成方法',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'random-dungeon-map-generator',
  title: 'TRPG用ランダムダンジョンマップ生成ツール',
  description: 'ダンジョン、洞窟、SF構造のマップを生成。全部屋接続保証、PNG/SVGエクスポート対応。',
  ui,
  seo: [
    { type: 'title', text: 'シード値を利用してプレイ可能なダンジョンマップを再現生成', level: 2 },
    { type: 'paragraph', html: '実用的なダンジョンマップには単なるランダムなノイズ以上の構造が必要です。すべての部屋が通路で接続され、グリッドサイズが卓の環境に適合し、必要な時にいつでも同じ構造を再現できることが求められます。このツールはシード値と設定項目を組み合わせ、再現可能なマップを生成します。' },
    { type: 'title', text: '印刷用紙やVTT（オンライン卓）に合わせたグリッド調整', level: 2 },
    { type: 'paragraph', html: '用途に応じたグリッドサイズの設定が最初の一歩です。小さめのグリッドは印刷しやすく短時間のセッションに最適です。大きめのグリッドは広大な探索領域を提供します。出力画像は正方形グリッドを保持しているため、VTTのマス目合わせもスムーズに行えます。' },
    {
      type: 'table',
      headers: ['グリッドサイズ', '主な用途', '推奨密度', '設計メモ'],
      rows: [
        ['20 × 16 マス', '単発セッション / ワンショット', '35 〜 45', '印刷しやすく視認性が高い'],
        ['36 × 26 マス', '標準的なセッション', '45 〜 55', '部屋と通路のバランスが良い'],
        ['52 × 38 マス', '大規模複合ダンジョン', '50 〜 65', '複数の陣営や迂回路を配置可能'],
      ],
    },
    { type: 'tip', title: '戦闘スケールに合わせた部屋サイズの確保', html: '全体サイズを決める前に、想定される最も大規模な戦闘シーンに必要なスペースを計算してください。巨大なマップでも部屋が狭すぎると移動が困難になります。' },
    { type: 'title', text: '床面カバー率から探索のテンポを読み取る', level: 2 },
    { type: 'paragraph', html: '床面カバー率はキャンバス全体の何パーセントが歩行可能な空間であるかを示します。カバー率が低いと部屋同士が離れ、静かな緊迫感が生まれます。カバー率が高いと活発な遭遇が発生しやすくなります。' },
    {
      type: 'list',
      items: [
        '<strong>緊迫した探索:</strong> 余白部分を活かして隠し通路や壁の奥の気配を演出します。',
        '<strong>バランス型探検:</strong> 調査室、廊下、遭遇部屋をバランスよく配置します。',
        '<strong>広大な要塞:</strong> 視線が通りやすく、敵の巡回ルートが複雑に交差する構造にします。',
      ],
    },
    { type: 'title', text: '中立的なマップ構造から物語の舞台へ', level: 2 },
    { type: 'paragraph', html: '生成されたマップは純粋な建築構造のみを提供します。主要な部屋に役割を与え、それに応じて罠や手がかり、モンスターを配置してください。' },
    { type: 'tip', title: 'メモを書き込む前に設定を保存', html: '遭遇メモを書き込む前にマップURLやJSONファイルを保存しておけば、プレイヤー配布用の綺麗な地図をいつでも出力できます。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
