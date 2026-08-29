import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Bir tohum (seed) seçin, ızgarayı ayarlayın ve mimari stili belirleyin. Notlarınız, baskı veya sanal masaüstünüz (VTT) için bağlantılı bir harita oluşturun.',
  seedLabel: 'Harita Tohumu (Seed)',
  seedHint: 'Aynı haritayı tekrar oluşturmak için aynı ayarlarla aynı tohumu kullanın.',
  randomSeed: 'Yeni tohum',
  sizeLabel: 'Keşif Boyutu',
  sizeCompact: 'Tek oturumluk (One-shot)',
  sizeSession: 'Standart oturum',
  sizeStronghold: 'Büyük kale',
  fineTuneGrid: 'Izgara ve yoğunluk hassas ayarı',
  columnsLabel: 'Sütunlar',
  rowsLabel: 'Satırlar',
  densityLabel: 'Oda Yoğunluğu',
  densityHint: 'Daha yüksek yoğunluk daha fazla oda ve kullanılabilir zemin ekler.',
  styleLabel: 'Harita Mimarisi',
  dungeonStyle: 'Zindan (Dungeon)',
  dungeonStyleHint: 'Tek genişlikte koridorlara sahip taş odalar.',
  cavernStyle: 'Mağara (Cavern)',
  cavernStyleHint: 'Yumuşatılmış kenarlı düzensiz doğal odalar.',
  scifiStyle: 'Bilim Kurgu (Sci-Fi)',
  scifiStyleHint: 'Çift genişlikte geçitlere sahip geniş modüller.',
  generate: 'Haritayı Çiz',
  mapRegionLabel: 'Oluşturulan zindan haritası ve dışa aktarma kontrolleri',
  connectedBadge: 'Tüm odalar bağlantılı',
  roomsLabel: 'Odalar',
  doorsLabel: 'Kapılar',
  floorLabel: 'Zemin Kaplaması',
  legendFloor: 'Yürünebilir zemin',
  legendWall: 'Dolu duvar',
  legendDoor: 'Kapı veya hava kilidi',
  editHint: 'Düzenlemek için bir hücreye sağ tıklayın',
  editCell: 'Bu hücreyi düzenle',
  paintFloor: 'Zemin',
  paintWall: 'Duvar',
  paintDoor: 'Kapı',
  mapData: 'Harita Verileri',
  copyLink: 'Harita bağlantısını kopyala',
  linkCopied: 'Bağlantı kopyalandı',
  exportPng: 'PNG İndir',
  exportSvg: 'SVG İndir',
  exportJson: 'JSON Kaydet',
  importJson: 'JSON Aç',
  importError: 'Bu dosya geçerli bir zindan haritası yapılandırması içermiyor.',
  compactMap: 'Gergin Keşif',
  balancedMap: 'Dengeli Keşif',
  sprawlingMap: 'Açık Kale',
  compactHint: 'Daha uzun koridorlar odalar arasında daha fazla bilinmeyen alan bırakır.',
  balancedHint: 'Odalar ve koridorlar alanı dengeli şekilde paylaşır.',
  sprawlingHint: 'Geniş zemin alanı çatışmaları ve hızlı hareketi kolaylaştırır.',
  mapReady: 'Harita Göstergesi',
  dimensionsUnit: 'ızgara hücresi',
};

const faq = [
  {
    question: 'Aynı tohum her zaman aynı zindan haritasını mı oluşturur?',
    answer: 'Evet. Tohum, ızgara boyutları, yoğunluk ve stil deterministik bir yapılandırma oluşturur. Aynı ayarları kullanmak birebir aynı haritayı üretir.',
  },
  {
    question: 'Oluşturulan tüm odalar birbirine bağlı mıdır?',
    answer: 'Evet. Odalar yerleştirildikten sonra bir ana rota ile birbirine bağlanır, böylece tüm yürünebilir alan tek bir harita oluşturur.',
  },
  {
    question: 'Zindan, mağara ve Sci-Fi stilleri arasındaki fark nedir?',
    answer: 'Zindan stili düzenli taş odalar kullanır. Mağaralar yuvarlatılmış doğal odalar oluşturur. Sci-Fi stili geniş modüller ve çift kapılar kullanır.',
  },
  {
    question: 'Sanal masaüstü (VTT) için hangi formatı dışa aktarmalıyım?',
    answer: 'PNG çoğu VTT için en basit seçenektir. SVG her ölçekte keskin kalır ve vektör yazılımlarında kolayca düzenlenir.',
  },
  {
    question: 'Başka biri benim haritamı tekrar üretebilir mi?',
    answer: 'Evet. Harita bağlantısını kopyalayın veya JSON dosyasını gönderin. Alıcı aynı haritayı anında yükleyebilir.',
  },
  {
    question: 'Bu oluşturucu canavar, tuzak veya hazine ekler mi?',
    answer: 'Hayır. Herhangi bir oyun kuralına göre içini doldurabilmeniz için tarafsız bir mimari kat planı oluşturur.',
  },
];

const howTo = [
  {
    name: 'Izgara boyutlarını ayarlayın',
    text: 'Notlarınıza veya VTT sahnenize uygun sütun ve satır sayısını seçin.',
  },
  {
    name: 'Mimariyi seçin',
    text: 'Zindan, mağara veya Sci-Fi seçin ve oda yoğunluğunu ayarlayın.',
  },
  {
    name: 'Oluşturun ve inceleyin',
    text: 'Bir tohum girin, haritayı çizin ve oda ile kapı özetini inceleyin.',
  },
  {
    name: 'Dışa aktarın veya paylaşın',
    text: 'Oynamak için PNG veya SVG indirin ya da bağlantı/JSON ile paylaşın.',
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
  name: 'Rastgele Zindan Haritası Oluşturucu',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Tüm odaları bağlantılı deterministik rastgele zindan haritası oluşturucu.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Bağlantılı bir zindan haritası nasıl oluşturulur',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'rastgele-zindan-haritasi-olusturucu',
  title: 'Masaüstü RPG için Rastgele Zindan Haritası Oluşturucu',
  description: 'Bağlantılı odalara, kapılara ve PNG/SVG dışa aktarımına sahip tekrar üretilebilir zindan haritaları oluşturun.',
  ui,
  seo: [
    { type: 'title', text: 'Tekrar Kullanılabilir Tohum ile Oynanabilir Zindan Haritası Oluşturun', level: 2 },
    { type: 'paragraph', html: 'Kullanışlı bir rastgele zindan haritası sadece rastgele görsel gürültüden fazlasını gerektirir. Her oda bağlantılı koridorlarla erişilebilir olmalı, ızgara oyun alanına uymalı ve sonuç istendiğinde her cihazda tekrar üretilebilmelidir. Bu oluşturucu tohumu ve ayarları kompakt ve deterministik bir harita spesifikasyonu olarak ele alır. Aynı tohumu, sütunları, satırları, yoğunluğu ve mimari stili koruduğunuzda aynı haritayı tekrar oluşturursunuz.' },
    { type: 'title', text: 'Baskı ve Sanal Masaüstü (VTT) için Izgara Boyutları', level: 2 },
    { type: 'paragraph', html: 'Izgara boyutunu ayarlamak bir oturumu planlarken ilk pratik adımdır. Küçük bir ızgarayı kağıda basmak kolaydır ve kısa maceralar veya tek mekanlar için idealdir, büyük bir harita ise karmaşık keşifler, taktiksel çatışmalar ve çoklu gruplar için geniş alan sunar. Dışa aktarılan görsel, sanal masaüstü (VTT) yazılımlarındaki ızgara ayarlarıyla mükemmel uyum sağlamak için kare hücreleri korur.' },
    {
      type: 'table',
      headers: ['Izgara boyutu', 'Tipik kullanım', 'Başlangıç yoğunluğu', 'Planlama notu'],
      rows: [
        ['20 x 16 hücre', 'Tek oturumluk (One-shot)', '35 - 45', 'Baskısı kolay ve kağıt üzerinde hızlı okunabilir'],
        ['36 x 26 hücre', 'Standart oturum', '45 - 55', 'Oda ve koridor ritmi dengeli'],
        ['52 x 38 hücre', 'Büyük kompleks', '50 - 65', 'Çoklu gruplar ve alternatif yollar için geniş alan'],
      ],
    },
    { type: 'tip', title: 'Haritayı Çatışma Ölçeğine Uyarlayın', html: 'Toplam boyutu seçmeden önce büyük çatışmalar için gereken hücre sayısını hesaplayın. Küçük odalara sahip büyük bir zindan basık hissettirir, geniş bir ana odaya sahip kompakt bir plan ise unutulmaz sahnelere imkan tanır.' },
    { type: 'title', text: 'Zemin Kaplamasını Oyun Temposu Olarak Değerlendirin', level: 2 },
    { type: 'paragraph', html: 'Zemin kaplaması dikdörtgen alanın yüzde kaçının yürünebilir olduğunu gösterir. Düşük yoğunluk odalar arasında gerilim, izolasyon ve bilinmezlik oluşturur. Orta yoğunluk istikrarlı bir keşif temposunu destekler. Yüksek yoğunluk ise çatışmaların ve devriyelerin yakındaki odalara hızla yayılabileceği bir kale kompleksi oluşturur.' },
    {
      type: 'list',
      items: [
        '<strong>Gergin keşif:</strong> gizli geçitleri ve izolasyonu hissettirmek için boş alanları kullanın.',
        '<strong>Dengeli keşif:</strong> araştırma odaları ile koridorları dengeli şekilde sıralayın.',
        '<strong>Açık kale:</strong> net görüş hatları, devriye rotaları ve birbirine bağlı karşılaşmalar hazırlayın.',
      ],
    },
    { type: 'title', text: 'Tarafsız Bir Kat Planını Macera Alanına Dönüştürün', level: 2 },
    { type: 'paragraph', html: 'Oluşturulan harita kasıtlı olarak sadece temel mimariyi sağlar. Her ana odaya anlatısal bir rol verin ve ipuçlarını, tuzakları, yaratıkları ve hazineleri bu amaca göre yerleştirin. Kapıları oyuncular için stratejik karar noktaları olarak kullanın.' },
    { type: 'tip', title: 'Not Eklemeden Önce Yapılandırmayı Kaydedin', html: 'Oyunculara Oyun Yöneticisi sırlarını ifşa etmeden temiz bir harita sunabilmek için karşılaşma notları eklemeden önce bağlantıyı kopyalayın veya JSON dosyasını kaydedin.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
