import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'lunar-tide-tracker',
  title: 'TRPGのための月相計算ツール：ファンタジー世界の月と潮汐サイクルを追跡',
  description: 'カスタム軌道周期を持つファンタジー世界の月相を計算します。最大3つの月を同時に追跡し、10日間の予報を確認し、D&D・Pathfinder・その他TRPGの魔法・天候システム向けに合算した潮汐レベルを取得できます。',
  ui: {
    title: '月相と神秘の潮汐トラッカー',
    moonsTitle: '月の設定',
    addMoon: '月を追加',
    removeMoon: '月を削除',
    moonName: '月の名前',
    orbitalPeriod: '軌道周期（日）',
    startingOffset: '開始オフセット（日）',
    timelineTitle: '時間コントロール',
    currentDay: '現在のキャンペーン日',
    tideTitle: '神秘の潮汐状態',
    tideLevel: '潮汐エネルギーレベル',
    magicModifier: '魔法潮汐効果',
    forecastTitle: '月相・潮汐予報',
    dayLabel: '日',
    resetButton: '0日目にリセット',
    presetTitle: 'キャンペーンプリセット',
    presetSingle: 'クラシックムーン',
    presetDouble: '魔法の双子月',
    presetTriple: '三重食の世界',
    newMoon: '新月',
    waxingCrescent: '三日月（上弦）',
    firstQuarter: '上弦の月',
    waxingGibbous: '十三夜月',
    fullMoon: '満月',
    waningGibbous: '十六夜月',
    lastQuarter: '下弦の月',
    waningCrescent: '三日月（下弦）',
  },
  seo: [
    { type: 'title', text: 'ファンタジーTRPGキャンペーンで月相を追跡する方法', level: 2 },
    { type: 'paragraph', html: 'ほとんどのファンタジー世界の月は、現実の29.5日間の月周期とは異なる軌道周期を持っています。<strong>軌道周期</strong>フィールドは、月が一周するのに必要なゲーム内日数を設定します。エベロン設定では28日を使用しています。世界のロアに従って設定するか、5〜60日の間で任意の数を選択してください。' },
    {
      type: 'stats',
      items: [
        { value: '3', label: '同時追跡可能な月' },
        { value: '10', label: '日間予報' },
        { value: '5', label: '潮汐状態' }
      ],
      columns: 3
    },
    { type: 'title', text: '開始オフセットフィールドの意味', level: 2 },
    { type: 'paragraph', html: '<strong>開始オフセット</strong>は、キャンペーン0日目での月の出発フェーズをずらします。オフセット0は新月から始まります。軌道周期の半分のオフセットは満月から始まります。オープニングシーンで描写されているフェーズに合わせたり、2つの月が常に同じ位置に来ないようにするために使用してください。' },
    { type: 'title', text: 'ゲームでの潮汐レベルの意味', level: 2 },
    { type: 'paragraph', html: '潮汐レベルは、現在のフェーズに基づいてすべてのアクティブな月の引力を組み合わせます。<strong>大潮</strong>（75%以上）は月が新月や満月近くで整列しているときに発生します。<strong>小潮</strong>（30%未満）は月が反対のフェーズにあるときに発生します。これをセービングスロー・ボーナス、狼憑き変身閾値、または沿岸マップの嵐の強さなど任意のメカニクスに結びつけてください。' },
    {
      type: 'comparative',
      items: [
        {
          title: '単一の月',
          description: '現実世界に近い設定や支配的な月が1つあるセッティングに最適。シンプルな8フェーズサイクル。',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D フォーゴトン・レルム（セルーン、30日）',
            'ライカンスロピー・キャンペーン',
            '満月に関連したホラーセッション'
          ]
        },
        {
          title: '双子月',
          description: 'ハイファンタジー設定でよく見られます。頻繁な部分的整列と興味深い中間潮汐を生み出します。',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'エベロン（ラーン28日 + アリス12日）',
            '予測可能な食のシーズン',
            'ドルイド・魔法システムに最適'
          ]
        },
        {
          title: '三重月',
          description: 'まれな三重整列は予測不可能なサージを引き起こします。ワイルドマジックイベントに劇的に有用。',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            '整列時のワイルドマジックテーブル',
            'PathfinderのGolarion風の複雑さ',
            '壮大なキャンペーン向けの長周期サイクル'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'ファンタジー世界でよく使われる軌道周期', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'セルーン（フォーゴトン・レルム）', definition: '軌道周期30日、単一の月。最初のセッションで満月から始めるにはオフセット15を使用。' },
        { term: 'エベロンの月', definition: 'エベロンには9〜28日の周期を持つ12の月があります。プロットに最も関連する2つを別々のインスタンスとして使用してください。' },
        { term: 'ゴラリオン（Pathfinder）', definition: 'ゴラリオンには29日サイクルのソマル月が1つあります。短い周期の第二の月で暗黒のタペストリーイベントをモデル化できます。' },
        { term: 'カスタム世界', definition: '15日月は年間24回の満月を生成します。45日月は約8回です。短いサイクルはイベントが多くなりますが、その物語的重みは減ります。' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'ヒント：セッション1に特定のフェーズを設定する',
      icon: 'mdi:information-outline',
      badge: '設定のヒント',
      html: 'キャンペーンが三日月から始まる場合、オフセットを軌道周期の約20%に設定します。満月の場合は周期の50%をオフセットとして使用します。例：28日月で満月スタートはオフセット14。日数カウンターを現在のキャンペーン日に進めると、予報が自動的に次の10日間を表示します。'
    }
  ],
  faq: [
    { question: 'ファンタジー世界にはどの軌道周期を使えばいいですか？', answer: '設定で指定されていない場合、単一の月には28〜30日がよく機能します。複数の月の場合、整列が頻繁すぎないように単純な倍数でない周期を選んでください。' },
    { question: '2つの月をキャンペーンの特定の瞬間に整列させるには？', answer: '両方の月を同じオフセット値に設定します。2つの周期の公倍数ごとに整列します。出発位置をずらすには、2番目の月に軌道周期の半分に等しいオフセットを与えてください。' },
    { question: '大潮はゲームルール上どういう意味ですか？', answer: '大潮はすべてのアクティブな月が最大の潮汐エネルギーを生み出していることを意味します。ワイルドマジックサージの発動、回復呪文の射程強化、または宗教派閥の聖なる夜として使用してください。' },
    { question: '小潮はゲームルール上どういう意味ですか？', answer: '小潮は月が互いに部分的に打ち消し合っているときに発生します。反魔法効果、海上の静寂、または予測可能な魔法抑制が必要な敵対者に最適です。' },
    { question: 'クトゥルフの呼び声やホラーキャンペーンに使えますか？', answer: 'はい。29日月を使用して満月がセッションのクライマックスに来るようにオフセットを設定します。潮汐トラッカーはミュトス影響またはフェーズパーセンテージに比例した精神的感受性のピークを表すことができます。' },
    { question: '10日間予報はどのように機能しますか？', answer: '予報は次の10キャンペーン日それぞれについて、各アクティブな月のフェーズを色のついたドットで表示します。表示されるパーセンテージは合算された潮汐レベルです。' },
    { question: '7日間など非常に短いサイクルの月を追跡できますか？', answer: 'はい。軌道周期を7に設定します。月はゲーム時間の毎週完全なサイクルを完了します。月の魔法が毎週リセットされる世界に便利です。' },
    { question: '発行済み冒険モジュールの月フェーズを再現するには？', answer: '説明されているフェーズが何日目に相当するかを数え、軌道周期で割り、その結果をオフセットとして使用します。例：28日サイクルの0日目の上弦の月はオフセット7を意味します。' }
  ],
  bibliography,
  howTo: [
    { name: '軌道周期を設定する', text: '世界のロアに従って、月が完全なサイクルを完了するのに必要なゲーム内日数を入力します。' },
    { name: '開始オフセットを設定する', text: '日数オフセットで開始フェーズをずらします。軌道周期の半分は0日目の満月に相当します。' },
    { name: '日数カウンターを進める', text: 'ステップボタンまたはスライダーを使用して現在のキャンペーン日に移動し、フェーズと潮汐レベルをリアルタイムで確認します。' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'TRPGのための月相計算ツール：ファンタジー世界の月と潮汐サイクルを追跡',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'ファンタジー世界にはどの軌道周期を使えばいいですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '単一の月には28〜30日がよく機能します。複数の月の場合、単純な倍数でない周期を選んでください。' } },
        { '@type': 'Question', 'name': '大潮はゲームルール上どういう意味ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '最大の潮汐エネルギーを意味します。ワイルドマジックサージや宗教派閥の聖なる夜として使用できます。' } }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'TRPGキャンペーンで月相を追跡する方法',
      'step': [
        { '@type': 'HowToStep', 'name': '軌道周期を設定する', 'text': '月が完全なサイクルを完了するのに必要なゲーム内日数を入力します。' },
        { '@type': 'HowToStep', 'name': '開始オフセットを設定する', 'text': '軌道周期の半分は0日目の満月に相当します。' },
        { '@type': 'HowToStep', 'name': '日数カウンターを進める', 'text': 'スライダーで現在のキャンペーン日に移動します。' }
      ]
    }
  ]
};
export default content;
