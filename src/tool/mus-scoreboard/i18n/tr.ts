import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'İki çiftin adını yazın, masa kurallarını belirleyin ve puanlar sayıldıkça taşlara dokunun.',
  pairOneLabel: 'Birinci çift',
  pairTwoLabel: 'İkinci çift',
  pairOneDefault: 'Kuzey Masası',
  pairTwoDefault: 'Güney Masası',
  targetPointsLabel: 'Oyun başına hedef puan',
  targetPointsHint: 'Her oyun için bitiş çizgisini seçin (30, 40 veya 50 puan).',
  gamesToWinLabel: 'Vaca kazanmak için gereken oyun',
  gamesToWinHint: 'Bu sayıya ilk ulaşan çift maçı kazanır.',
  deckLabel: 'Masa destesi',
  deckHint: '40 kartlık İspanyol destesi (Baraja española) Mus için geleneksel seçimdir. Fransız destesi için 8, 9 ve 10\'ları çıkarın.',
  spanishDeck: 'Baraja española (İspanyol destesi)',
  frenchDeck: 'Fransız destesi (Standart)',
  frenchDeckNotice: '40 kartla oynamak için Fransız destesinden 8, 9 ve 10\'ları çıkarmayı unutmayın. Vale Sota, Kız Caballo ve Papaz Rey yerine geçer.',
  pointsOption30: '30 puan',
  pointsOption40: '40 puan',
  pointsOption50: '50 puan',
  gamesOption1: '1 oyun',
  gamesOption2: '2 oyun',
  gamesOption3: '3 oyun',
  startMatch: 'Skor tahtasını aç',
  matchSettings: 'Çiftleri ve kuralları ayarla',
  liveMatch: 'Canlı maç',
  targetLabel: 'puanlık oyun',
  gameLabel: 'oyun',
  gamePlural: 'oyun',
  vacaLabel: 'oyun kazanan galip',
  scoreLabel: 'Mevcut taşlar',
  handLabel: 'Hangi çiftin el sahibi (Mano) olduğunu seçin',
  handSelected: 'el sahibi (Mano).',
  stonesLabel: 'Puan sayacı',
  stoneSingular: 'taş (piedra)',
  stonePlural: 'taş (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'puan kaldı',
  addStone: 'taş',
  addAmarraco: 'amarraco',
  closeGame: 'Oyunu kapat',
  closeGamePrompt: 'Bu çiftin oyunu kazandığını onaylayıp sonrakine geçilsin mi?',
  confirmationTitle: 'Masa işlemini onayla',
  confirmAction: 'Onayla',
  cancelAction: 'Oynamaya devam et',
  undo: 'Geri al',
  resetMatch: 'Maçı sıfırla',
  resetMatchPrompt: 'Mevcut maçı sıfırlayıp skor geçmişini temizlemek istiyor musunuz?',
  historyTitle: 'Son sayımlar',
  noHistory: 'Henüz sayı girilmedi.',
  matchReady: 'Masa hazır.',
  closeGameHint: 'Bir çift hedef puana ulaştı. Oyun kazananını onaylayın.',
  waitingForScore: 'Saymaya devam edin. Liderin kalan puanı:',
  gameWon: 'Oyun kapatıldı.',
  vacaWon: 'Vaca kazanıldı! Masa hazır olduğunda yeni bir maç başlatın.',
  gameClosed: 'oyunu kapattı.',
  pointsAdded: 'skor elde etti:',
  matchSaved: 'Skor bu cihaza kaydedildi.',
  lastAction: 'Son işlem',
  settingsApplied: 'Yeni kurallar uygulandı. Maç sıfırlandı.',
  pairNameRequired: 'Skor tahtasını açmadan önce her iki çifte de bir isim verin.',
  visualScoreLabel: 'Mus masa oyunları için taşlı ve amarracolu dijital skor tahtası',
};

const faq = [
  {
    question: 'Bu çevrimiçi Mus skor tahtası neleri takip eder?',
    answer: 'İki çifti, taşları (tekli puanlar), amarracoları (5 puanlık bloklar), kazanılan oyunları (chicos), vaca galibiyetini, el sahipliğini (Mano) ve skor geçmişini takip eder.',
  },
  {
    question: 'Taşlar ve amarracolar neden ayrı gösterilir?',
    answer: 'Bir taş (Piedra) 1 puan, Amarraco ise 5 taş değerindedir. Ayrı gösterim masadaki gerçek pullar veya fasulyelerle kolayca eşleşmesini sağlar.',
  },
  {
    question: '30, 40 veya 50 puanlık oyun oynanabilir mi?',
    answer: 'Evet. Skor tahtasını açmadan önce oyun başına 30, 40 veya 50 puan hedefini seçebilirsiniz.',
  },
  {
    question: 'Tamamlanan oyun nasıl kapatılır?',
    answer: 'Bir çift hedef puana ulaştığında oyunu kapat düğmesi etkinleşir. Onaylandıktan sonra 1 oyun eklenir ve taşlar sıfırlanır.',
  },
  {
    question: 'Sayfa yenilendiğinde maç verileri korunur mu?',
    answer: 'Evet. Çift isimleri, taşlar ve kazanılan oyunlar cihazınızın tarayıcısında yerel olarak saklanır.',
  },
  {
    question: 'Bu skor tahtası bölgesel Mus kurallarını zorunlu kılar mı?',
    answer: 'Hayır. Mus oyununun birçok bölgesel kuralı vardır. Bu skor tahtası masadaki puanları doğru şekilde kaydetmeye odaklanır.',
  },
  {
    question: 'Fransız destesi Mus için nasıl uyarlanır?',
    answer: '8, 9 ve 10 numaralı kartları çıkararak 40 kart bırakın. Vale Sota, Kız Caballo, Papaz ise Rey olarak kabul edilir.',
  },
];

const howTo = [
  {
    name: 'Çift isimlerini girin',
    text: 'Masadaki iki tarafın kolayca tanınması için oyuncu çiftlerinin isimlerini yazın.',
  },
  {
    name: 'Hedef puanı ve vacayı belirleyin',
    text: 'Oyun başına 30, 40 veya 50 puan ile vaca için gereken oyun sayısını seçin.',
  },
  {
    name: 'Taş ve amarracoları sayın',
    text: 'El sonlarında puanlar belirlendikçe taş (+1) veya amarraco (+5) ekleyin.',
  },
  {
    name: 'Oyunu kapatın ve skoru güncelleyin',
    text: 'Hedef puana ulaşıldığında kazananı onaylayarak oyunu kaydedin ve taşları sıfırlayın.',
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
  name: 'Çevrimiçi Mus Skor Tahtası',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Geleneksel İspanyol kart oyunu Mus için dijital canlı skor tahtası.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Mus iskambil oyununda skor nasıl tutulur',
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
  slug: 'cevrimici-mus-skor-tahtasi',
  title: 'Canlı Maçlar İçin Çevrimiçi Mus Skor Tahtası',
  description: 'Geleneksel İspanyol kart oyunu Mus için taşları, amarracoları ve vacaları canlı takip edin. 30, 40 ve 50 puan seçenekleriyle.',
  ui,
  seo: [
    { type: 'title', text: 'Mus Masanız İçin Net ve Hızlı Skor Takibi', level: 2 },
    { type: 'paragraph', html: 'Mus, İspanya\'nın en popüler ve köklü geleneksel iskambil oyunlarından biridir. Oyun dinamik, stratejik, heyecanlı ve blöf doludur. Her elde puanlar (Grande, Chica, Pares, Juego veya Punto) hızlıca sayıldığı için bu dijital sayaç masadaki anlaşmazlıkları ve karışıklıkları tamamen önler.' },
    { type: 'title', text: 'İlk Elden Önce Bitiş Çizgisini Belirleyin', level: 2 },
    { type: 'paragraph', html: 'Standart geleneksel oyun 40 puan olsa da, 30 veya 50 puanlık oyunlar da arkadaş grupları arasında sıkça tercih edilir. Dağıtımdan önce hedef puanı ayarlayın, böylece sayaç ve oyunu kapatma düğmeleri masanızın kurallarıyla tam olarak eşleşir.' },
    {
      type: 'table',
      headers: ['Ayar', 'İşlev', 'Kullanım Önerisi'],
      rows: [
        ['30 puan', 'Kısa oyun', 'Hızlı maçlar, turnuva ön elemeleri veya yerel ev kuralları'],
        ['40 puan', 'Standart oyun', 'Arkadaş ortamının geleneksel ve klasik kuralı'],
        ['50 puan', 'Uzun oyun', 'Daha fazla strateji alanı ve oyun derinliği sunan maçlar'],
      ],
    },
    { type: 'tip', title: 'Yerel Kuralları Bastan Konuşun', html: 'Kartları dağıtmadan önce 3\'lerin Papaz, 2\'lerin As sayıldığı 8 Papaz kuralının geçerli olup olmadığını ve masadaki fiziki pulları kimin tutacağını netleştirin.' },
    { type: 'title', text: 'İspanyol ve Fransız Destesi Uyarlaması', level: 2 },
    { type: 'paragraph', html: '40 kartlık geleneksel İspanyol destesi (Oros, Copas, Espadas, Bastos) oyunun aslıdır. Fransız destesinde 8, 9 ve 10\'lar çıkarılarak 40 kartla kolayca oynanabilir. Vale Sota, Kız Caballo ve Papaz Rey yerine geçer.' },
    { type: 'title', text: 'Masa Kenarında Canlı Dijital Skor Takibi', level: 2 },
    { type: 'paragraph', html: 'Büyük sayı toplam puanı anlaşılır bir şekilde gösterir. Altındaki satır bu rakamı otomatik olarak amarracolara (5\'lik bloklar) ve tekli taşlara dönüştürerek masadaki pullarla anında eşleştirir.' },
    { type: 'list', items: ['<strong>Taş (Piedra):</strong> Maç sayımında 1 puanlık birim.', '<strong>Amarraco:</strong> 5 taşa denk gelen sayma pulu veya bloğu.', '<strong>Oyun (Chico):</strong> Hedef puana ulaşılarak kazanılan tur.', '<strong>Vaca:</strong> Belirlenen oyun sayısına ulaşıldığında alınan nihai maç galibiyeti.'] },
    { type: 'title', text: 'Oyunu Kapatma ve Hata Düzeltme', level: 2 },
    { type: 'paragraph', html: 'Hedef puana ulaşıldığında oyunu kapat düğmesi onay uyarısıyla birlikte aktif olur. Yanlış bir puan girilirse Geri al düğmesi ile son işlem anında geri alınabilir.' },
    { type: 'tip', title: 'Hatalarda Geri Al Düğmesini Kullanın', html: 'Yanlış çifte puan eklendiğinde maç geçmişini bozmadan skoru düzeltmek için Geri al düğmesini kullanın.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
