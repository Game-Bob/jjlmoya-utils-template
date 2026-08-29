import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Grubu ve tehdidi ayarlayın. Hesaplayıcı karşılaşmayı D&D 5e 2014 eşikleriyle karşılaştırır.',
  partySection: 'Grup',
  partyLevel: 'Karakter seviyesi',
  partyLevelHint: 'Benzer seviyedeki bir grup için ortalama seviye kullanın.',
  partySize: 'Karakterler',
  partySizeHint: 'Kurallar çok küçük veya büyük gruplar için canavar çarpanını ayarlar.',
  threatSection: 'Tehdit',
  monsterCr: 'Canavar meydan okuma derecesi (CR)',
  monsterCrHint: 'Aynı tür canavarlar için bir CR seçin. Karışık gruplar ayrı hesaplama gerektirir.',
  moreCr: 'Daha yüksek CR göster',
  lessCr: 'Daha az CR göster',
  monsterCount: 'Canavar sayısı',
  monsterCountHint: 'Daha fazla yaratık, temel XP mütevazı olsa bile eylem baskısını artırır.',
  presets: 'Bir sahne ile başlayın',
  presetClassic: 'Klasik devriye',
  presetBoss: 'Yalnız patron',
  presetSwarm: 'Minyon sürüsü',
  resultSection: 'Karşılaşma baskısı',
  belowEasyHint: 'Gelecek zorluklar için kaynakları koruyan hafif bir sahne.',
  easyHint: 'Grup üzerinde az baskı oluşturan yönetilebilir bir sahne.',
  mediumHint: 'Can puanı veya kaynak maliyeti çıkarabilecek anlamlı bir test.',
  hardHint: 'Taktik ve kaynak seçimlerinin önem taşıdığı tehlikeli bir sahne.',
  deadlyHint: 'Ölümcül baskı sinyali. Kaçış yollarını ve araziyi kontrol edin.',
  adjustedXp: 'Ayarlanmış XP',
  baseXp: 'Temel XP',
  multiplier: 'Grup çarpanı',
  partyThreshold: 'Orta eşik',
  belowEasy: 'Kolay altı',
  easy: 'Kolay',
  medium: 'Orta',
  hard: 'Zor',
  deadly: 'Ölümcül',
  warning: 'Dikkat',
  partyAdjustment: 'Grup üçten az veya beşten fazla karakterden oluştuğu için çarpan ayarlandı.',
  highCr: 'Grup seviyesinden yüksek CR değerine sahip bir canavar bir karakteri hızlıca düşürebilir.',
  manyMonsters: 'On bir veya daha fazla canavar savaşı yönetmeyi zorlaştırır.',
  rulesNote: 'D&D 5e 2014 kurallarına göre tahmindir. Arazi veya taktikleri hesaba katmaz.',
  rulesLinkLabel: 'Kaynak kuralları oku',
  reset: 'Örneğe sıfırla',
  xpUnit: 'XP',
  sceneLabel: 'Savaş baskısı görsel göstergesi',
  partyMarker: 'Grup',
  threatMarker: 'Tehdit',
};

const faq = [
  {
    question: 'Bu karşılaşma zorluğu hesaplayıcısı hangi kuralları kullanır?',
    answer: 'Temel Kurallar daki resmi D&D 5e 2014 yöntemini kullanır. Kolay, orta, zor ve ölümcül eşikleri ayarlanmış XP ile karşılaştırır.',
  },
  {
    question: 'Ayarlanmış XP neden canavarın ödül XP sinden farklıdır?',
    answer: 'Kurallar, aynı turda hareket eden birden fazla yaratığın tehlikesini yansıtmak için toplam XP yi bir çarpanla çarpar.',
  },
  {
    question: 'Bunu karışık canavar grupları için kullanabilir miyim?',
    answer: 'Aynı tür canavarlar için hızlı bir tahmin olarak kullanın. Karışık gruplarda her yaratığın XP sini toplayıp çarpanı uygulayın.',
  },
  {
    question: 'Ölümcül sonuç grubun öleceği anlamına mı gelir?',
    answer: 'Hayır. Ölümcül, ayarlanmış XP nin ölümcül eşiğe ulaştığını gösterir. Arazi, taktikler ve büyüler sonucu değiştirebilir.',
  },
  {
    question: 'Grup büyüklüğü çarpanı neden değiştirir?',
    answer: 'Temel Kurallar, üçten az karaktere sahip gruplar için çarpanı artırmayı, altı veya daha fazla karakter için azaltmayı önerir.',
  },
];

const howTo = [
  {
    name: 'Grup seviyesini ayarlayın',
    text: 'Gruptaki karakterlerin ortalama seviyesini seçin.',
  },
  {
    name: 'Grup büyüklüğünü belirleyin',
    text: 'Savaşa katılacak karakter sayısını girin.',
  },
  {
    name: 'Tehdidi tanımlayın',
    text: 'Meydan okuma derecesini (CR) ve canavar sayısını seçin.',
  },
  {
    name: 'Baskıyı inceleyin',
    text: 'Ayarlanmış XP yi resmi zorluk eşikleriyle karşılaştırın.',
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
  name: 'D&D 5e Karşılaşma Zorluğu Hesaplayıcı',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Seviye, grup büyüklüğü, canavar CR, sayı ve resmi eşiklere göre D&D 5e 2014 karşılaşma zorluğunu hesaplayın.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'D&D 5e karşılaşma zorluğu nasıl hesaplanır',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-karsilasma-zorlugu-hesaplayici',
  title: 'D&D 5e Karşılaşma Zorluğu Hesaplayıcı',
  description: 'Grup seviyesi, büyüklük, canavar CR, ayarlanmış XP ve resmi eşikler ile D&D 5e 2014 karşılaşma baskısını tahmin edin.',
  ui,
  seo: [
    { type: 'title', text: 'İnisiyatif zarı atılmadan önce savaş zorluğunu değerlendirin', level: 2 },
    { type: 'paragraph', html: 'Bir D&D karşılaşması bir canavarın yanında yazan sayıdan ibaret değildir. Bu hesaplayıcı grup büyüklüğü, seviye, CR ve canavar sayısını D&D 5e 2014 kurallarındaki ayarlanmış XP değerine dönüştürür. Görsel sonuç, karşılaşmanın kolay, orta, zor ve ölümcül eşiklerine göre nerede durduğunu net bir şekilde gösterir.' },
    { type: 'title', text: 'D&D 5e karşılaşma formülü nasıl çalışır', level: 2 },
    { type: 'paragraph', html: 'Yöntem her zorluk seviyesi için her karakterin XP eşiğini toplar ve ardından toplam canavar XP sine çarpan uygular. Üçten az karaktere sahip gruplar bir üst çarpanı kullanırken, altı veya daha fazla karaktere sahip gruplar bir alt çarpanı kullanır.' },
    {
      type: 'table',
      headers: ['Sinyal', 'Masada ne kontrol edilmeli'],
      rows: [
        ['Kolay altı', 'Karşılaşma bir ısınma veya hafif kaynak harcama sahnesidir.'],
        ['Kolay', 'Grup genellikle fazla kaynak harcamadan kazanır.'],
        ['Orta', 'Belirli bir baskı ve kaynak kullanımı konusunda anlamlı seçimler bekleyin.'],
        ['Zor', 'Can puanı ve büyü yuvası kaybı planlayın.'],
        ['Ölümcül', 'Taktikleri, araziyi ve kaçış yollarını kontrol edin.'],
      ],
    },
    { type: 'title', text: 'Canavar sayısı neden önemlidir', level: 2 },
    { type: 'paragraph', html: 'Birden fazla canavar aynı turda daha fazla saldırı ve reaksiyon yapabildiği için temel XP lerinin gösterdiğinden daha büyük tehlike yaratır. Bu nedenle bir çift yaratık, aynı birleşik XP ye sahip tek bir yaratıktan daha yüksek bir çarpan kullanır.' },
    { type: 'tip', title: 'Yüksek CR değerini özel bir uyarı olarak görün', html: 'Grup seviyesinin üzerinde CR ye sahip bir canavar bir karakteri tek bir güçlü eylemle saf dışı bırakabilir. Yalnızca zorluk etiketine güvenmek yerine hasarı ve kontrol etkilerini doğrudan inceleyin.' },
    { type: 'title', text: 'Sonucu bir hazırlık aracı olarak kullanın', level: 2 },
    { type: 'paragraph', html: 'Zor veya ölümcül bir karşılaşma hazırlamadan önce ortamı, sürprizi ve grubun genel durumunu değerlendirin. Dar odalar, siperler, tuzaklar ve konsantrasyon büyüleri masadaki gerçek tehlikeyi önemli ölçüde değiştirebilir.' },
    { type: 'tip', title: 'Karışık canavar grupları', html: 'Her yaratığın temel XP sini toplayın ve toplam canavar sayısına karşılık gelen çarpanı uygulayın.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
