import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: '2つのペア名を入力し、テーブルルールを設定後、各ハンドの得点計算に合わせてピエドラ（Piedras）をタップしてください。',
  pairOneLabel: 'ペア 1',
  pairTwoLabel: 'ペア 2',
  pairOneDefault: '北テーブル',
  pairTwoDefault: '南テーブル',
  targetPointsLabel: '1ゲーム（Chico）の目標ポイント',
  targetPointsHint: '各ゲームの勝利ポイントを選択してください（30、40、または50ポイント）。',
  gamesToWinLabel: 'バカ（Vaca）勝利に必要なゲーム数',
  gamesToWinHint: '最初にこのゲーム数に達したペアがマッチに勝利します。',
  deckLabel: '使用するカードデッキ',
  deckHint: '40枚のスペイン伝統デッキ（Baraja española）がMusの標準です。フランスデッキは8, 9, 10を除外して使用します。',
  spanishDeck: 'Baraja española（スペインデッキ）',
  frenchDeck: 'フランスデッキ（通常トランプ）',
  frenchDeckNotice: 'フランスデッキを使用する場合は、8, 9, 10を取り除いて40枚でプレイしてください。JはSota、QはCaballo、KはReyに対応します。',
  pointsOption30: '30 ポイント',
  pointsOption40: '40 ポイント',
  pointsOption50: '50 ポイント',
  gamesOption1: '1 ゲーム',
  gamesOption2: '2 ゲーム',
  gamesOption3: '3 ゲーム',
  startMatch: 'スコアボードを開く',
  matchSettings: 'ペアとルールを設定',
  liveMatch: '対局中スコア',
  targetLabel: 'ポイント制ゲーム',
  gameLabel: 'ゲーム',
  gamePlural: 'ゲーム',
  vacaLabel: 'ゲーム先取で勝利',
  scoreLabel: '現在のピエドラ数（Piedras）',
  handLabel: 'このハンドの先手（Mano）ペアを選択',
  handSelected: 'が先手（Mano）です。',
  stonesLabel: '得点カウンター',
  stoneSingular: '1点（Piedra）',
  stonePlural: 'ピエドラ（Piedras）',
  amarracoSingular: '5点（Amarraco）',
  amarracoPlural: 'アマラコ（Amarracos）',
  pointsToGo: 'ポイントで勝利',
  addStone: '1点（Piedra）',
  addAmarraco: '5点（Amarraco）',
  closeGame: 'ゲーム（Chico）を終了して確定',
  closeGamePrompt: 'このペアがゲーム（Chico）に勝利したことを確認し、次のゲームを開始しますか？',
  confirmationTitle: 'テーブル操作の確認',
  confirmAction: '確認して進む',
  cancelAction: 'プレイを続ける',
  undo: '元に戻す',
  resetMatch: 'マッチをリセット',
  resetMatchPrompt: '現在のマッチ를リセットし、スコア履歴を消去しますか？',
  historyTitle: '直近の記録',
  noHistory: 'まだ記録がありません。得点を入力するとここに表示されます。',
  matchReady: 'テーブルの準備が完了しました。',
  closeGameHint: 'いずれかのペアが目標ポイントに達しました。勝利を確定させてください。',
  waitingForScore: '計算を続けてください。リードしているペアの残りポイント:',
  gameWon: 'ゲーム（Chico）終了。',
  vacaWon: 'バカ（Vaca）獲得！準備ができたら新しいマッチを開始してください。',
  gameClosed: 'がゲーム（Chico）を獲得しました。',
  pointsAdded: 'が獲得:',
  matchSaved: 'スコアはこの端末に自動保存されます。',
  lastAction: '直近の操作',
  settingsApplied: '新しいルールが適用され、マッチがリセットされました。',
  pairNameRequired: 'スコアボードを開く前に両方のペア名を入力してください。',
  visualScoreLabel: 'Mus対局用デジタルスコアボード（ピエドラ・アマラコ対応）',
};

const faq = [
  {
    question: 'このオンラインMusスコアボードでは何が記録できますか？',
    answer: '2つのペア名、ピエドラ（Piedras, 1点単位）、アマラコ（Amarracos, 5点単位）、勝利ゲーム数（Chicos）、全体勝敗（Vaca）、先手（Mano）の位置、および直近の得点履歴をリアルタイムで記録できます。',
  },
  {
    question: 'なぜピエドラ（Piedras）とアマラコ（Amarracos）が分けて表示されるのですか？',
    answer: '1ピエドラ（Piedra）は1点、1アマラコ（Amarraco）は5点に相当します。分けて表示することで、卓上の実際の代用チップや豆と簡単に照合できます。',
  },
  {
    question: '30点、40点、50点ゲームに対応していますか？',
    answer: 'はい。スコアボードを開く前に、1ゲーム（Chico）の目標ポイントを30点、40点、50点から自由に選択できます。',
  },
  {
    question: '目標ポイントに達したゲームはどうやって終了しますか？',
    answer: 'いずれかのペアが目標ポイントに達すると「ゲーム終了して確定」ボタンが有効になります。確認後、勝利ゲーム数（Chicos）が加算され、ピエドラがリセットされます。',
  },
  {
    question: 'ページを再読み込みしてもデータは保持されますか？',
    answer: 'はい。対局設定、ペア名、現在の得点、勝利ゲーム数はブラウザのローカルストレージに自動保存されます。',
  },
  {
    question: 'このスコアボードは特定のローカルルールを強制しますか？',
    answer: 'いいえ。Musには多様な地域ルールが存在します。このスコアボードは正確な得点管理に集中し、サインや声掛けは実卓のプレイヤーに委ねています。',
  },
  {
    question: '通常トランプ（フランスデッキ）で遊ぶにはどうすればよいですか？',
    answer: '8, 9, 10を取り除いて40枚にします。JはSota、QはCaballo、KはReyに対応し、3はK、2はAとして扱います。',
  },
];

const howTo = [
  {
    name: 'ペア名を入力する',
    text: '対戦する2つのペア名を入力し、テーブル上での配置を明確にします。',
  },
  {
    name: '目標ポイントとバカ（Vaca）勝利数を設定する',
    text: '1ゲーム（Chico）の目標（30, 40, 50点）とバカ（Vaca）獲得に必要なゲーム数を設定します。',
  },
  {
    name: 'ハンドごとの得点を加算する',
    text: '各勝負（Grande, Chica, Pares, Juego, Punto）の決着に応じて、ピエドラ(+1)やアマラコ(+5)をタップします。',
  },
  {
    name: 'ゲーム勝利を確定させる',
    text: '目標ポイント到達時、ゲーム勝利を確定してゲーム数を更新し、ピエドラをリセットします。',
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
  name: 'オンライン ムス スコアボード',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'スペイン伝統のカードゲーム Mus（ムス）専用デジタルカウンター。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Mus（ムス）対局での得点記録方法',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'online-mus-scoreboard',
  title: 'オンライン ムス スコアボード',
  description: 'スペイン伝統のカードゲーム Mus（ムス）の得点（Piedras）、アマラコ（Amarracos）、ゲーム（Chicos）、バカ（Vacas）をリアルタイム記録。',
  ui,
  seo: [
    { type: 'title', text: '白熱するMus対局に明確でスピーディーなデジタル得点管理を', level: 2 },
    { type: 'paragraph', html: 'Mus（ムス）はブラフとチームワークが魅力のスペイン伝統カードゲームです。1ハンドの中で複数の勝負（Grande, Chica, Pares, Juego, Punto）が順次計算されるため、デジタルカウンターを使用することで計算違いを防ぎ、スムーズなゲーム進行を実現します。' },
    { type: 'title', text: '最初のハンドを配る前に目標ポイントを設定', level: 2 },
    { type: 'paragraph', html: '一般的な40点勝負のほか、30点や50点で行うローカルルールも多く存在します。カードを配る前に目標ポイントと勝利条件を設定し、スコア表示を実卓と同期させましょう。' },
    {
      type: 'table',
      headers: ['設定', '効果', '推奨プレイ'],
      rows: [
        ['30 ポイント', 'ショートゲーム', '手軽な短時間対局やトーナメント予選向け'],
        ['40 ポイント', '標準ゲーム', '伝統的で最も普及しているクラシックルール'],
        ['50 ポイント', 'ロングゲーム', 'より深い駆け引きを楽しみたいじっくり対局向け'],
      ],
    },
    { type: 'tip', title: 'テーブルルールを事前に声を出して確認', html: 'カードを切る前に「3をK、2をAとする8枚K・8枚Aルール」の適用有無や、チップ管理担当者を全員で確認しましょう。' },
    { type: 'title', text: 'スペインデッキ（Baraja española）とフランスデッキの互換対応', level: 2 },
    { type: 'paragraph', html: '伝統的な40枚のスペインデッキ（Baraja española）が基本ですが、通常のトランプ（フランスデッキ）から8, 9, 10を取り除くことでもプレイ可能です。JはSota、QはCaballo、KはReyに対応します。' },
    { type: 'title', text: '実卓のチップとデジタル表示のリアルタイム照合', level: 2 },
    { type: 'paragraph', html: 'メイン数字で合計点を示し、その直下で自動的にアマラコ（Amarracos, 5点ブロック）とピエドラ（Piedras, 1点）に換算表示するため、卓上の実物チップとの照合が極めて簡単です。' },
    { type: 'list', items: ['<strong>Piedra:</strong> 1点単位の得点。', '<strong>Amarraco:</strong> 5ピエドラ相当の集計単位。', '<strong>Chico:</strong> 目標ポイント到達で獲得する1セット。', '<strong>Vaca:</strong> 所定のゲーム数を先取して得る最終勝利。'] },
    { type: 'title', text: 'ゲームの勝利確定と誤操作の取り消し', level: 2 },
    { type: 'paragraph', html: '目標点に達した際、ゲーム確定ボタンを押すことで安全にゲーム数をカウントアップします。誤って加算した場合は「元に戻す」ボタンで即座に直前の状態へ戻せます。' },
    { type: 'tip', title: '誤入力時は「元に戻す」ボタンを活用', html: '申告ミスやタップミスが発生した場合は、すぐに元に戻すボタンを押すことで履歴を乱さずに修正できます。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
