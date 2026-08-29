import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: '散乱方向選択器',
  setupTitle: '散乱設定',
  sectorsLabel: 'コンパスセクター',
  sectors8: '8方向',
  sectors12: '12方向（時計）',
  diceLabel: '偏差距離ロール',
  diceD6: '1D6インチ',
  dice2D6: '2D6インチ',
  diceD10: '1D10インチ',
  diceCustom: 'カスタム範囲',
  customMaxLabel: '最大距離',
  hitChanceLabel: '直撃確率（%）',
  rollButton: '散乱ロール',
  hitResult: '直撃！',
  scatterResult: '散乱！',
  distanceLabel: '距離',
  angleLabel: '角度',
  dragHint: 'コンパスをドラッグして風向きを手動設定',
  historyTitle: '最近のロール',
  clearHistory: '履歴をクリア',
  presetTitle: 'ウォーゲームプリセット',
  soundOn: 'サウンドON',
  soundOff: 'サウンドOFF',
  guideStep1: 'コンパスをドラッグしてテーブルの向きに合わせる',
  guideStep2: 'セクター、ダイス、直撃確率を選択',
  guideStep3: '中央 = ターゲット。緑の輝きはそこに正確に着弾したことを示す',
  guideStep3Scatter: '矢印 = 偏差方向。中央から矢印に沿ってそのインチ数分だけ射撃を移動',
  scatterModeLabel: '散乱方向',
  scatterModeRandom: 'ランダム',
  scatterModeWind: '風ドリフト',
  scatterModeWindHint: '矢印は常にコンパスに従う - 距離のみランダム',
};

const faq = [
  {
    question: '散乱方向選択器の使い方は？',
    answer: '選択したダイス構成に基づいて、ランダムな角度（0-359度）と距離を計算します。また、散乱ダイスをシミュレートし、直撃をチェックします。',
  },
  {
    question: 'セクター形式を変更できますか？',
    answer: 'はい、8方向の基本セクターと12方向の時計盤セクターを切り替えられます。',
  },
  {
    question: '直撃確率とは何ですか？',
    answer: '発射物が照準した場所に正確に着弾し、まったく偏差がない確率を表します。標準的な散乱ダイスでの「命中」結果をシミュレートします。',
  },
  {
    question: 'WarhammerやBolt Actionと互換性がありますか？',
    answer: 'はい。ほとんどの戦術ウォーゲームやミニチュアルールセットで使用される標準の8方向テンプレートと12方向時計配置をサポートしています。',
  },
  {
    question: '散乱距離は視覚的にどのように表示されますか？',
    answer: '距離（インチ）が着弾点に浮遊ラベルとして表示され、偏差方向に沿って配置されます。赤いコンパス矢印も最終角度にロックされ、テンプレートを素早く位置合わせできます。',
  },
  {
    question: '結果を早く得るためにアニメーションを無効にできますか？',
    answer: 'アニメーションは約2秒間続き、その後最終結果が中央に表示され、コンパス矢印がロックされます。現在スキップオプションはありませんが、この遅延は物理的なダイスを振るペースに合わせて設計されています。',
  },
  { question: '散布方向はどのように決まりますか？', answer: '選択したセクター方式とダイス結果、設定した偏差距離を組み合わせて計算します。' },
  { question: '風モードは使えますか？', answer: 'はい。風モードではコンパスの角度に沿って方向を固定し、距離だけをランダムにします。' },
];

const howTo = [
  {
    name: 'ルールの設定',
    text: 'コンパスセクターを選択し、距離ダイスのプリセットを選び、直撃確率を調整します。',
  },
  {
    name: 'ロールまたはドラッグ',
    text: '「散乱ロール」をクリックして偏差をシミュレートするか、コンパスホイールをドラッグして方向を手動で調整します。',
  },
  {
    name: '結果の確認',
    text: '中央の表示とベクトル矢印を確認して、散乱の正確な距離、角度、方向を把握します。',
  },
  {
    name: '軌道の観察',
    text: 'ロール後、アニメーション化された発射物がコンパス上を移動する様子を観察します。破線の軌跡が偏差経路を示し、着弾点に距離がインチで表示されます。',
  },
  {
    name: '結果の解釈',
    text: '緑のパルスと「DIRECT HIT」は偏差ゼロを意味します。距離ラベル付きの赤いバーストは散乱を意味します - ターゲットから矢印の方向にテンプレートをそのインチ数だけ配置してください。',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'scatter-direction-selector',
  title: '散乱方向選択器: テーブルトップウォーゲーム用コンパス',
  description: 'ミニチュアウォーゲーム向けに、ランダムな偏差、風ドリフト、散乱方向を3Dタクタイルコンパスで決定します。',
  ui,
  seo: [
    { type: 'title', text: 'リアルタイム弾道アニメーション付きインタラクティブ散乱コンパス', level: 2 },
    { type: 'paragraph', html: '散乱方向選択器は、静的な数値生成を超え、コンパス上にアニメーション化された弾道を直接描画します。「散乱ロール」をクリックすると、発光する発射物が中心から偏差角度に沿って移動し、破線の軌跡を残して着弾点で粒子となって爆発します。これにより、ウォーゲームでの砲撃や魔法の逸れ判定を即座に視覚的に判定できます。' },
    { type: 'stats', items: [
      { value: '2', label: 'セクターシステム', icon: 'mdi:compass-rose' },
      { value: '4', label: 'ダイスプリセット', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: '命中確率範囲', icon: 'mdi:target' },
      { value: '10', label: '最近のロール履歴', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: '弾道アニメーションがウォーゲームの意思決定を向上させる方法', level: 3 },
    { type: 'paragraph', html: '従来の散乱ツールは数値の角度と距離を表示するだけなので、プレイヤーはテーブル上のオフセットを頭の中で視覚化する必要があります。アニメーション化された弾道は、照準点から散乱着弾ゾーンまでの正確な飛行経路を描くことで、このギャップを埋めます。ゲームのテンポを加速させ、範囲テンプレートの配置に関する議論を排除します。' },
    { type: 'diagnostic', variant: 'success', title: '直撃', html: 'ロールが直撃確率を超えると、コンパス中央が脈動する緑のリングと「DIRECT HIT」テキストアニメーションで噴出します。発射物は中央に戻り、偏差ゼロの完全な衝撃を確認します。' },
    { type: 'diagnostic', variant: 'error', title: '散乱', html: '散乱結果の場合、発射物は破線の軌道に沿って着弾点に移動します。粒子の爆発、発光マーカー、距離（例: <strong>5"</strong>）が着弾位置に表示され、即座に計測が可能です。' },
    { type: 'tip', title: 'プロのコツ: 風ドリフトモードの使用', html: '風ドリフトを有効にすると、散乱方向が手動で回転させたコンパス角度に固定されます。これは卓越風や固定変位ベクトルをシミュレートします - 無誘導ロケット、ガス雲、範囲魔法、テレポーテーション事故などに最適です。' },
    { type: 'title', text: 'ウォーゲームの散布を解決する', level: 2 },
    { type: 'paragraph', html: '多くのミニチュアウォーゲームやタクティカルRPGでは、砲撃、迫撃砲、ガスのドリフト、失敗したテレポートなどを予測不能でリアルに表現するために偏差を使用します。1D6、2D6、1D10などのフレキシブルなダイス設定により、あらゆるルールブックに対応します。' },
    { type: 'table', headers: ['ゲームシナリオ', 'ダイス設定', '散乱モード', '戦術的効果'], rows: [['砲撃・迫撃砲', '2D6 インチ', '8セクター + 直撃%', '目標周辺へのランダムな散布'], ['ガス雲・風効果', '1D6 インチ', '風ドリフト（固定角度）', '風方向への直線的変位'], ['テレポート失敗', '1D10 インチ', '12セクター（時計）', '全方位へのランダム偏差']] },
    { type: 'title', text: '風と偏差を管理する', level: 2 },
    { type: 'paragraph', html: '命中確率を設定することで部隊の熟練度を正確に表現でき、ゲーム中の射撃フェイズにおけるテーブル上での計測時間を大幅に短縮できます。' },
    { type: 'comparative', items: [{ title: 'ウォーゲームの散布を解決する', description: '多くのウォーゲームでは、砲撃や風、失敗したテレポートを偏差で表現します。このデジタルコンパスを使えば物理ダイスが情景モデルを動かしてしまう心配もありません。', icon: 'mdi:compass-outline', highlight: true, points: ['風と偏差を管理する', '摩擦のない迅速な計測', '正確なベクトル視覚化'] }], columns: 1 },
    { type: 'glossary', items: [{ term: '風と偏差を管理する', definition: '命中確率を設定すると部隊の信頼性を判断でき、ゲーム中の測定も速くなります。' }] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '散乱方向選択器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '散乱方向選択器の使い方',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
