import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'パーティーと脅威を設定します。D&D 5e 2014のしきい値に基づいて戦闘の難易度を測定します。',
  partySection: 'パーティー',
  partyLevel: 'キャラクターレベル',
  partyLevelHint: '同程度のレベルのパーティーの場合は平均レベルを使用します。',
  partySize: 'キャラクター数',
  partySizeHint: 'ルールでは人数が極端に少ない・多い場合にモンスター倍率を調整します。',
  threatSection: '脅威',
  monsterCr: 'モンスターの脅威度 (CR)',
  monsterCrHint: '同じ種類のモンスターのCRを選択します。混合編成は別途計算が必要です。',
  moreCr: 'より高いCRを表示',
  lessCr: 'CRの表示を減らす',
  monsterCount: 'モンスターの数',
  monsterCountHint: '数が多いと、基本XPが控えめであっても行動経済の圧력이増大します。',
  presets: 'シナリオから開始',
  presetClassic: 'クラシック巡回兵',
  presetBoss: 'ソロボス',
  presetSwarm: '手下の群れ',
  resultSection: '戦闘のプレッシャー',
  belowEasyHint: '今後の挑戦に備えてリソースを温存できる軽い戦闘です。',
  easyHint: 'パーティーへの負担が少ない扱いやすい戦闘です。',
  mediumHint: 'HPやリソースの消費が予想される本格的なテストです。',
  hardHint: '戦術とリソース管理が重要となる危険な戦闘です。',
  deadlyHint: '致命的なプレッシャーのサイン。逃neg路や地形、ターン消費を確認してください。',
  adjustedXp: '調整後XP',
  baseXp: '基本XP',
  multiplier: 'グループ倍率',
  partyThreshold: '中程度しきい値',
  belowEasy: '簡易以下',
  easy: '簡易',
  medium: '中程度',
  hard: '困難',
  deadly: '致命的',
  warning: '注意事項',
  partyAdjustment: 'パーティーが3人未満または6人以上のため、倍率が調整されました。',
  highCr: 'パーティーのレベルを超えるCRのモンスターは、1回の強力な行動でキャラを倒す可能性があります。',
  manyMonsters: '11体以上のモンスターは戦闘の進行を複雑にし、行動の波を大きくします。',
  rulesNote: 'D&D 5e 2014ルールに基づく推計です。地形や戦術、呪文などは考慮されていません。',
  rulesLinkLabel: '公式ルールを読む',
  reset: 'サンプルにリセット',
  xpUnit: 'XP',
  sceneLabel: '戦闘プレッシャーのビジュアル表示',
  partyMarker: 'パーティー',
  threatMarker: '脅威',
};

const faq = [
  {
    question: 'この遭遇難易度計算ツールはどのルールを使用していますか？',
    answer: 'ベーシックルールに記載されているD&D 5e 2014の公式手順を使用し、パーティーのしきい値と調整後XPを比較します。',
  },
  {
    question: '調整後XPがモンスターの獲得XPと異なるのはなぜですか？',
    answer: '同じラウンドに複数の試練が同時に行動する危険性を反映するため、合計XPに倍率を掛け合わせて難易度を評価します。',
  },
  {
    question: '複数の種類のモンスターが混ざったエンカウントにも使えますか？',
    answer: '同種モンスターの迅速な計算用です。混成群の場合は各モンスターの基本XPを合計し、全体の体に倍率を掛けます。',
  },
  {
    question: '致命的という結果が出たら全滅を意味しますか？',
    answer: 'いいえ。調整後XPが致命的しきい値に達したことを示します。地形や戦術、プレイヤーの判断によって実際の展開は変わります。',
  },
  {
    question: 'なぜパーティー人数によって倍率が変わるのですか？',
    answer: '3人未満の少人数では倍率を上げ、6人以上の大人数では倍率を下げるよう公式ルールで推奨されているためです。',
  },
];

const howTo = [
  {
    name: 'パーティーレベルを設定',
    text: 'パーティーの平均レベルを選択します。',
  },
  {
    name: 'パーティー人数を設定',
    text: '戦闘に参加するキャラクターの人数を入力します。',
  },
  {
    name: '脅威を設定',
    text: 'モンスターの脅威度 (CR) と体数を選択します。',
  },
  {
    name: 'プレッシャーを確認',
    text: '調整後XPと公式のしきい値を比較評価します。',
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
  name: 'D&D 5e 遭遇難易度計算ツール',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'レベル、人数、モンスターのCR、体数、調整後XP、公式しきい値に基づいてD&D 5e 2014の戦闘難易度を計算します。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'D&D 5eの遭遇難易度を計算する方法',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-encounter-difficulty-calculator',
  title: 'D&D 5e 遭遇難易度計算ツール',
  description: 'パーティーレベル、人数、モンスターCR、調整後XP、公式しきい値を用いてD&D 5e 2014の戦闘プレッシャーを推計します。',
  ui,
  seo: [
    { type: 'title', text: 'イニシアチブを振る前に戦闘難易度を評価', level: 2 },
    { type: 'paragraph', html: 'D&Dの戦闘はモンスターのステータス数値だけでは決まりません。この計算ツールは人数、レベル、CR、体をD&D 5e 2014公式の調整後XPに変換します。ビジュアル表示により、計画している遭遇が簡易、中程度、困難、致命的のどの帯に位置しているかを明確に確認できます。' },
    { type: 'title', text: 'D&D 5e戦闘計算式の仕組み', level: 2 },
    { type: 'paragraph', html: '各難易度ごとに各キャラのXPしきい値を合計し、モンスターの基本XP合計に体数に応じた倍率を適用します。3人未満の少人数パーティーでは1段階高い倍率を使用し、6人以上の大人数パーティーでは1段階低い倍率を使用します。' },
    {
      type: 'table',
      headers: ['シグナル', 'セッションでのチェックポイント'],
      rows: [
        ['簡易以下', 'ウォームアップや軽微なリソース消費のための戦闘です。'],
        ['簡易', 'リソースをほとんど消費せずに勝利できる見込みです。'],
        ['中程度', 'ある程度のプレッシャーとリソース選択が発生します。'],
        ['困難', 'HPの減少や高レベル呪文枠の消費を想定してください。'],
        ['致命的', '戦術、地形、撤退ルートをあらかじめ確認してください。'],
      ],
    },
    { type: 'title', text: 'モンスターの体数が重要な理由', level: 2 },
    { type: 'paragraph', html: '複数のモンスターは1ラウンドあたりの攻撃数や反応数が増えるため、基本XP以上の危険度を生み出します。そのため、同じ合計XPを持つ1体のモンスターよりも2体のペアの方が高い倍率が適用されます。' },
    { type: 'tip', title: '高CRモンスターに対する警戒', html: 'パーティーのレベルを超えるCRのモンスターは、一撃でキャラを気絶させる可能性があります。難易度ラベルだけでなく、ダメージ量や状態異常能力も個別に確認してください。' },
    { type: 'title', text: '準備ツールとしての活用', level: 2 },
    { type: 'paragraph', html: '困難や致命的な戦闘を設定する前に、部屋の狭さや不意打ち、パーティーの疲労状態を確認しましょう。狭い室内、遮蔽物、環境ダメージ、集中呪文などは卓上の実際の危険度を大きく変動させます。' },
    { type: 'tip', title: '複数種類のモンスターの計算', html: '各モンスターの基本XPを合計し、全体の体に該当する倍率を掛けて評価します。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
