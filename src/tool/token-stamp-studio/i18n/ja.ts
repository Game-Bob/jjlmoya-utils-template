import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'フレームを選択',
  frameHint: '名前を読む前にキャラクターの役割が伝わるシルエットを選びます。',
  randomFrame: 'ランダムフレーム',
  surfaceLegend: 'トリートメント設定',
  backgroundLabel: '背景色',
  borderLabel: 'フレーム色',
  textLabel: '文字色',
  overlayLabel: 'トーン',
  randomColors: 'ランダムカラー',
  borderWidthLabel: 'フレーム幅',
  opacityLabel: 'フレーム不透明度',
  overlayOpacityLabel: 'ポートレート不透明度',
  stageLabel: 'ライブコマ作成スタジオ',
  chooseImage: '画像を選択',
  positionHint: 'コマ上で直接画像やラベルをドラッグして移動できます。',
  markerName: 'マーカー名',
  markerNamePlaceholder: 'マーカーの名前を入力',
  textLegend: '卓で役立つテキストを追加',
  textHint: '名前、レベル、役割、状態などの短いラベルを追加してコマ上に配置します。',
  textPlaceholder: 'キャラクター名や役割',
  addText: 'ラベルを追加',
  removeText: 'ラベルを削除',
  textSizeLabel: '文字サイズ',
  alignmentLabel: 'テキスト揃え',
  alignLeft: '左揃え',
  alignCenter: '中央揃え',
  alignRight: '右揃え',
  imageLegend: 'ポートレートの調整',
  imageZoomLabel: 'ズーム倍率',
  scaleLabel: '出力スケール',
  savedMarkers: '保存済みマーカー',
  noSavedMarkers: '保存されたコマはここに表示され、後から再編集や再利用が可能です。',
  reuseMarker: '再編集するコマを選択してください。',
  deleteMarker: 'コマを削除',
  newMarker: '新規コマ',
  download: 'PNGをダウンロード',
  copy: 'PNGをコピー',
  downloadBatch: '一括ダウンロード',
  batchLabel: '高度な一括エクスポート',
  batchHint: '複数のポートレート画像に同じフレーム設定を適用して一括出力します。',
  chooseBatch: '一括画像を選択',
  batchReady: '{count} 枚の画像が準備完了。',
  noImage: '画像が未読み込みです',
  noText: 'ラベルはまだありません。必要な情報を追加してください。',
  tokenDetails: 'キャラクターコマ操作パネル',
  exportHint: 'フレームの外側は透明PNGとして出力され、ココフォリア等のココフォリアやVTT、印刷シートでそのまま使えます。',
};

const faq = [
  {
    question: '視認性の高いキャラクターコマを作成するコツは？',
    answer: '顔がはっきりと写っているイラストや、フレームとのコントラストが高い画像を選びます。胸から上の切り抜きにすると、オンラインセッション画面で縮小しても見やすくなります。',
  },
  {
    question: 'フレーム内でイラストをうまく配置するには？',
    answer: '画像を読み込んだ後、コマ上で直接ドラッグして位置を調整します。ズーム倍率を変更することで、フレーム枠を変えずに顔の位置を調整できます。',
  },
  {
    question: 'キャラクター名やレベルをコマに印字できますか？',
    answer: 'はい。短いラベルを自由に追加し、サイズや配置を調整してコマ上の読みやすい位置にドラッグして配置できます。',
  },
  {
    question: '出力されるPNG画像の背景は透過されますか？',
    answer: 'はい。選択したフレームの外側は背景透過PNGとして保存されるため、マップの上にそのまま配置できます。',
  },
  {
    question: 'パーティー全員のコマを一括で作成できますか？',
    answer: 'はい。一括エクスポート機能を使用すると、同じフレーム設定を複数の画像に適用して一括で透明PNGを出力できます。',
  },
  {
    question: '作成したコマデータはどこに保存されますか？',
    answer: 'お使いのブラウザのローカルストレージに保存されます。サーバーへ画像がアップロードされることはありません。',
  },
];

const howTo = [
  { name: 'キャラに合ったフレームを選択', text: 'PC用には円形、エネミーや戦術戦闘用には六角形、ボスには星形など、キャラクターの性質に合わせた枠を選びます。' },
  { name: '画像を読み込んで位置を調整', text: 'イラストを選択またはドラッグ＆ドロップし、顔が中央に来るように位置とズームを調整します。' },
  { name: '必要なテキストを追加', text: '名前や役割などの短い文字を追加し、イラストを邪魔しない位置に配置します。' },
  { name: '透過PNGとしてエクスポート', text: '完成したコマをPNGとしてダウンロードし、オンラインセッションツール（VTT）で使用します。' },
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
  description: 'TRPGのオンラインセッションで使える見やすいキャラクターコマ（Token）を作成。透過PNG出力、一括作成対応。',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'TRPGキャラクターコマの作り方',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'token-stamp-studio',
  title: 'TRPG用キャラクターコマ作成ツール（透過PNG対応）',
  description: 'TRPGのオンラインセッションで使える見やすいキャラクターコマ（Token）を作成。透過PNG出力、一括作成対応。',
  ui,
  seo: [
    { type: 'title', text: '卓上で一目で判別できるキャラクターコマを作成', level: 2 },
    { type: 'paragraph', html: 'オンラインセッションや卓上ゲームにおいて、コマのシルエットはキャラクターの種別や状態を瞬時に伝える大切な要素です。適切なフレームを選び、縮小表示しても視認性を損なわないコマを作成しましょう。' },
    { type: 'title', text: 'キャラクターの役割に合わせたフレーム選び', level: 2 },
    { type: 'list', items: ['<strong>円形・リング:</strong> プレイヤーキャラクターや味方NPCに最適な王道スタイル。', '<strong>六角形・八角形:</strong> 戦術的なマス目や多数のエネミーの判別に便利。', '<strong>星形:</strong> ボスキャラクターや強調したいユニットに最適。', '<strong>雲型:</strong> 召喚獣や精霊、ファミリアなどの特殊な存在に。'] },
    { type: 'tip', title: '実際のプレイ画面サイズを意識したデザイン', html: 'マップを縮小してコマが小さくなっても、顔の表情やテキストが潰れないか確認しながら作成するのがコツです。' },
    { type: 'title', text: 'プレイ中に役立つ短く簡潔なテキスト配置', level: 2 },
    { type: 'paragraph', html: 'コマ上に載せる情報は名前や簡単な状態（気絶、毒など）に絞ることで、イラストの見やすさを保ちつつ必要な情報を共有できます。' },
    { type: 'title', text: 'パーティー全体のコマを一括で作成', level: 2 },
    { type: 'paragraph', html: '一括作成機能を使えば、統一感のあるデザインでメンバー全員のコマを素早く作成できます。' },
    { type: 'tip', title: 'ローカル自動保存機能', html: '作成途中のコマ設定はブラウザに保存されるため、レベルアップ時などの再編集も簡単です。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
