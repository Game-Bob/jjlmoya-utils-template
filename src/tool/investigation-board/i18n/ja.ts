import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "相関図メーカー：オンライン推理RPG手掛かり＆関係図整理ツール",
  description: "インタラクティブな相関図や捜査マップを作成。人物、手がかり、場所を繋ぎ、カスタマイズされた赤い糸で関係性を視覚化します。",
  ui: {
  "title": "相関図メーカー",
  "addCard": "カード追加",
  "searchPlaceholder": "カード名や手がかりで検索",
  "filterAll": "すべてのカテゴリ",
  "filterCharacter": "人物",
  "filterClue": "手がかり",
  "filterLocation": "場所",
  "filterItem": "アイテム",
  "cardName": "カード名",
  "cardCategory": "カテゴリ",
  "cardDescription": "説明",
  "cardNotes": "プライベートメモ",
  "cardTags": "カンマで区切られたタグ",
  "cardColor": "カードの強調色",
  "save": "変更を保存",
  "delete": "削除",
  "cancel": "キャンセル",
  "clearBoard": "ボードをクリア",
  "connectionsTitle": "関係図マップ",
  "addConnection": "接続を追加",
  "connectionLabel": "関係性のラベル",
  "connectionColor": "線の色",
  "sourceCard": "開始カード",
  "targetCard": "対象カード",
  "close": "閉じる",
  "character": "人物",
  "clue": "手がかり",
  "location": "場所",
  "item": "アイテム",
  "custom": "カスタム",
  "immersive": "全画面表示"
},
  seo: [
    { type: 'title', text: "オンライン相関図メーカー：推理RPGの手がかりと人物関係図を整理", level: 2 },
    { type: 'paragraph', html: "複雑な嘘の網を解き明かし、容疑者のアリバイを追跡し、事件現場の証拠を繋ぎ合わせる作業は、推理RPGのセッションにおいてプレイヤーを混乱させがちです。クトゥルフ神話TRPGのキャンペーン、サイバーパンクの殺人ミステリー、D&Dの探偵クエスト、あるいはサスペンス小説の執筆など、どのような場面でもこのオンライン相関図メーカーが役に立ちます。無限のデジタルコルクボード上で、手がかり、NPC、物理的証拠をドラッグ＆ドロップで整理。色分けされた関係性の糸を使って、容疑者がどのように事件現場やアリバイ、隠された動機と結びついているかを瞬時に見渡せます。" },
    {
      type: 'stats',
      items: [
        { value: "無制限", label: "ノードボード" },
        { value: "4", label: "カテゴリ数" },
        { value: "ドラッグ＆ドロップ", label: "インターフェース" }
      ],
      columns: 3
    },
    { type: 'title', text: "推理RPGの捜査ボードを整理するコツ", level: 2 },
    { type: 'tip', title: "3つの手がかりルール", html: "プレイヤーに導き出させたい結論や推理ごとに、ボード上に少なくとも3つの異なる手がかりを追加します。それらをカスタム色付きの糸で結び、異なる推論のルートを示します。容疑者には人物カード、事件現場には場所カード、物理的な証拠や文書にはアイテムカードを使用します。プレイヤーの発見に合わせてメモを随時更新してください。" },
    { type: 'title', text: "デジタル相関図と物理コルクボードの比較", level: 2 },
    {
      type: 'proscons',
      title: "デジタル相関図と物理コルクボードの比較",
      items: [
        { pro: "スペースの制限なく、必要なだけ手がかりや容疑者、人物関係を追加できる無制限のボードサイズ。", con: "ゲームセッション中に、テーブル上に画面やタブレット、デバイスを用意する必要があります。" },
        { pro: "セッション中に特定の証人や証拠をすぐに見つけられるインスタント検索とカテゴリフィルタ機能。", con: "実際の壁に物理的な赤い糸やピンを刺すような独特の触感はありません。" },
        { pro: "ゲームの夜の間に場所を取ることなく、捜査マップをデジタルで保存、読み込み、共有可能です。", con: "ボードの状態を保存するためにインターネット接続またはブラウザのローカルストレージが必要です。" }
      ]
    },
    { type: 'title', text: "捜査マップのカードカテゴリの選択", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "人物ノード",
          description: "NPC、容疑者、目撃者、組織を表します。色付きの線で人物関係を強調表示します。",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "容疑者のアリバイと動機の追跡",
            "家族関係や秘密結社のつながりをリンク",
            "目撃者の証言の記録"
          ]
        },
        {
          title: "手がかりノード",
          description: "プレイヤーがキャンペーン中に発見した物理的な証拠、解剖報告、アリバイ、噂などを表します。",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "司法解剖報告書や科学捜査データ",
            "現場から回収された物理的証拠品",
            "聞きつけた噂や秘密情報"
          ]
        },
        {
          title: "場所ノード",
          description: "事件現場、容疑者の自宅、秘密の隠れ家、都市など。",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "事件現場の写真や見取り図",
            "主要NPCの居住地や勤務先",
            "秘密の隠れ家や異次元ポータル"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "相関図マッピング用語集", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "捜査ノード", definition: "人物、場所、手がかり、アイテムを表すボード上の各カード。" },
        { term: "関係性の糸", definition: "2枚のカードを結ぶ色付きの線で、その関係（例：捜査中、アリバイ、所有者など）を示します。" },
        { term: "没入モード", definition: "コントロールパネルを非表示にして、スマートフォンやタブレットでのキャンバス作業スペースを最大化する全画面表示レイアウト。" },
        { term: "ハイライトパス", definition: "選択したカードに接続されているノードと接続線だけを色付きで表示し、残りを薄暗くするビジュアルエフェクト。" }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "モバイルデバイス向けのパフォーマンスのヒント",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "古いタブレットやスマホで動作が重く感じる場合は、没入モードをオンにして浮動メニューを非表示にしてください。また、グリッド吸着（15pxごとの吸着）を有効にすると、最小限の手間でボードを綺麗に整頓できます。"
    }
  ],
  faq: [
    { question: "接続線を追加するにはどうすればよいですか？", answer: "コントロールパネルの「接続を追加」をクリックするか、カードのリンクアイコンをクリックして対象カードを選択します。" },
    { question: "モバイルでもカードをドラッグできますか？", answer: "はい、スマートフォンやタブレット上でのタッチ操作に対応しており、カードをスムーズにドラッグ移動できます。" },
    { question: "カスタムのカード色を使用できますか？", answer: "はい。カードをダブルクリックし、カテゴリで「Custom」を選択して、強調表示色を選択します。" },
    { question: "ボードは作業を保存しますか？", answer: "はい。進行状況はブラウザのローカルストレージに自動的に保存されます。" },
    { question: "ボードのズームと移動はどうすればよいですか？", answer: "ピンチ操作やマウスホイールでズームします。背景をドラッグしてボードを移動します。" }
  ],
  bibliography,
  howTo: [
    { name: "捜査カードを追加する", text: "NPC、手がかり、事件現場、アイテムを表すカードを作成します。" },
    { name: "関係性をリンクする", text: "カード間に接続線を作成し、手がかりの関連性を示します。" }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "相関図メーカー：オンライン推理RPG手掛かり＆関係図整理ツール",
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
          'name': "接続線を追加するにはどうすればよいですか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "コントロールパネルの「接続を追加」をクリックするか、カードのリンクアイコンをクリックして対象カードを選択します。"
          }
        },
        {
          '@type': 'Question',
          'name': "モバイルでもカードをドラッグできますか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "はい、スマートフォンやタブレット上でのタッチ操作に対応しており、カードをスムーズにドラッグ移動できます。"
          }
        },
        {
          '@type': 'Question',
          'name': "カスタムのカード色を使用できますか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "はい。カードをダブルクリックし、カテゴリで「Custom」を選択して、強調表示色を選択します。"
          }
        },
        {
          '@type': 'Question',
          'name': "ボードは作業を保存しますか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "はい。進行状況はブラウザのローカルストレージに自動的に保存されます。"
          }
        },
        {
          '@type': 'Question',
          'name': "ボードのズームと移動はどうすればよいですか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "ピンチ操作やマウスホイールでズームします。背景をドラッグしてボードを移動します。"
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "相関図メーカーの使い方",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "捜査カードを追加する",
          'text': "NPC、手がかり、事件現場、アイテムを表すカードを作成します。"
        },
        {
          '@type': 'HowToStep',
          'name': "関係性をリンクする",
          'text': "カード間に接続線を作成し、手がかりの関連性を示します。"
        }
      ]
    }
  ]
};
