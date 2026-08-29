import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: '意思決定ホイール: ランダムセレクターとカスタム抽選ルーレット',
  description: 'ボードゲーム用のカスタマイズ可能な意思決定ホイール。重み付きのセグメントを追加・編集して、結果をランダムに決定します。',
  ui: {
    title: '意思決定ホイール',
    spinButton: 'ホイールを回す',
    clearHistory: '履歴をクリア',
    resultHeading: '結果',
    historyTitle: 'スピン履歴',
    noHistory: '履歴はありません。ホイールを回すをクリックして開始します。',
    addSegmentLabel: 'セグメントを追加',
    removeSegmentLabel: '削除',
    segmentLabelPlaceholder: 'ラベル',
    presetLabel: 'プリセット',
    presetYesNo: 'はい または いいえ',
    presetNumbers: '数字 1-6',
    presetActions: 'アクション',
    presetCustom: 'カスタム',
    presetD20: 'D20',
    presetAlignment: 'アライメント',
    presetLoot: '戦利品のレア度',
    weightLabel: '重み',
    spinAgain: 'もう一度回す',
    noSegments: '回す前にホイールにセグメントを追加してください。',
  },
  seo: [
    { type: 'title', text: 'ボードゲームやグループ活動で使える意思決定ホイール', level: 2 },
    { type: 'paragraph', html: '意思決定ホイールは、ボードゲーム、TRPG、グループのアクティビティで役立つデジタル抽選ツールです。公正かつ完全なランダムで選択肢を決定できます。セグメントごとにラベル、カラー、当選確率の重み（ウェイト）を自由自在にカスタマイズ可能です。' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'セグメントを追加' },
        { value: '7', label: 'プリセット' },
        { value: '10', label: 'スピン履歴' },
      ],
      columns: 3,
    },
    { type: 'title', text: '意思決定ホイールの使い方', level: 2 },
    { type: 'paragraph', html: '「はい/いいえ」「D20」「属性」「戦利品」などの便利なプリセットを選択するか、オリジナルの項目を自由に作成してください。重みを1から5まで調整することで、特定の選択肢が出やすくなる確率を細かくコントロールできます。物理シミュレーションによる回転アニメーションが緊張感を高めます。' },
    { type: 'title', text: 'その他のシナリオ', level: 3 },
    { type: 'paragraph', html: 'グループでのクイック投票、TRPGでのランダムエンカウント決定、プレイヤーの順番決め、罰ゲームの選定など、幅広い用途で活用いただけます。' },
    { type: 'title', text: '卓上ゲームのプリセット', level: 3 },
    { type: 'paragraph', html: 'よく使われる判定用プリセットが最初から用意されているため、ゲーム準備の時間を短縮し、ゲームセッションをスムーズに進行できます。' },
    { type: 'title', text: '重みを調整する', level: 3 },
    { type: 'paragraph', html: '重み（ウェイト）を増やすと、ホイール上の面積が大きくなり、その項目が選ばれる確率が比例して高くなります。' },
    { type: 'title', text: '履歴を確認する', level: 3 },
    { type: 'paragraph', html: 'スピン履歴パネルには直近10回の結果が保存されるため、グループ全員で過去の抽選結果を透明性をもって確認できます。' },
  ],
  faq: [
    {
      question: '意思決定ホイールはどのように機能しますか？',
      answer: 'セグメントを作成し、必要に応じて重みを設定したら、ホイールを回すボタンをクリックするだけでランダムに結果が選ばれます。',
    },
    {
      question: '色や名前は変更できますか？',
      answer: 'はい。セグメントを追加し、名前や色、1から5までの重要度の重みを自由に変更可能です。',
    },
    {
      question: "確率を変更できますか？",
      answer: "はい。セグメントの重みを変更します。",
    },
    {
      question: "セグメントはいくつ置けますか？",
      answer: "最大16個で、動作には2個以上必要です。",
    },
    {
      question: "どんなプリセットがありますか？",
      answer: "はい・いいえ、数字、アクション、カスタム、D20、属性、戦利品です。",
    },
    {
      question: "以前のスピンは表示されますか？",
      answer: "はい。ブラウザーに直近10件が表示されます。",
    },
  ],
  bibliography,
  howTo: [
    {
      name: '項目を選択または作成',
      text: 'プリセットを選ぶか、独自のラベル、カラー、ウェイトを設定したセグメントを追加します。',
    },
    {
      name: 'ホイールをスピン',
      text: 'スタートボタンをクリックすると、リアルな摩擦減速アニメーションを伴ってホイールが回転します。',
    },
    {
      name: "結果を確認する",
      text: "停止後に当選セグメントと最近のスピン履歴を確認します。",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '意思決定ホイール',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '意思決定ホイールはどのように機能しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'セグメントを作成し、必要に応じて重みを設定したら、ホイールを回すボタンをクリックするだけでランダムに結果が選ばれます。' } },
        { '@type': 'Question', 'name': '色や名前は変更できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。セグメントを追加し、名前や色、1から5までの重要度の重みを自由に変更可能です。' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': '項目を選択または作成', 'text': 'プリセットを選ぶか、独自のラベル、カラー、ウェイトを設定したセグメントを追加します。' },
        { '@type': 'HowToStep', 'name': 'ホイールをスピン', 'text': 'スタートボタンをクリックすると、リアルな摩擦減速アニメーションを伴ってホイールが回転します。' },
      ],
    },
  ],
};
