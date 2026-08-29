import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Bir çerçeve seçin',
  frameHint: 'Kimse ismi okumadan önce bu karakterin kim olduğunu masaya gösteren silüeti seçin.',
  randomFrame: 'Rastgele çerçeve',
  surfaceLegend: 'Pulu renklendirin',
  backgroundLabel: 'Arka plan',
  borderLabel: 'Çerçeve',
  textLabel: 'Yazı',
  overlayLabel: 'Ton',
  randomColors: 'Rastgele renkler',
  borderWidthLabel: 'Çerçeve kalınlığı',
  opacityLabel: 'Çerçeve saydamlığı',
  overlayOpacityLabel: 'Portre tonu',
  stageLabel: 'Canlı pul atölyesi',
  chooseImage: 'Portre seçin',
  positionHint: 'Portreyi veya etiketleri doğrudan pulun üzerine sürükleyin.',
  markerName: 'İşaretçi adı',
  markerNamePlaceholder: 'Bu işaretçiyi adlandırın',
  textLegend: 'Okunabilir detaylar ekleyin',
  textHint: 'İsim, seviye, rol gibi kısa etiketler kullanın. Her birini pulun üzerine sürükleyin.',
  textPlaceholder: 'Karakter adı veya rolü',
  addText: 'Etiket ekle',
  removeText: 'Etiketi kaldır',
  textSizeLabel: 'Yazı boyutu',
  alignmentLabel: 'Yazı hizalaması',
  alignLeft: 'Sola hizala',
  alignCenter: 'Ortala',
  alignRight: 'Sağa hizala',
  imageLegend: 'Portreyi ayarlayın',
  imageZoomLabel: 'Portre yakınlaştırma',
  scaleLabel: 'Dışa aktarma ölçeği',
  savedMarkers: 'Kaydedilen işaretçiler',
  noSavedMarkers: 'Kaydedilen işaretçiler yeniden açıp düzenlemeniz için burada görünecektir.',
  reuseMarker: 'Yeniden açmak için bir işaretçi seçin.',
  deleteMarker: 'İşaretçiyi sil',
  newMarker: 'Yeni işaretçi',
  download: 'PNG indir',
  copy: 'PNG kopyala',
  downloadBatch: 'Toplu indir',
  batchLabel: 'Gelişmiş toplu dışa aktarma',
  batchHint: 'İsteğe bağlı: Mevcut çerçeve ve renk ayarlarıyla birden fazla portreyi dışa aktarın.',
  chooseBatch: 'Portreleri seçin',
  batchReady: '{count} portre hazırlanmaya hazır.',
  noImage: 'Portre yüklenmedi',
  noText: 'Henüz etiket yok. Grubunuzun ihtiyaç duyduğu detayları ekleyin.',
  tokenDetails: 'Karakter pulu kontrolleri',
  exportHint: 'PNG dosyası seçilen silüetin dışında şeffaftır, sanal masaüstü veya baskı için hazırdır.',
};

const faq = [
  {
    question: 'İyi bir karakter pulu portresi nasıl olmalıdır?',
    answer: 'Net bir yüze ve çerçeveye göre yeterli kontrasta sahip bir görsel seçin. Baş ve omuz kesimi sanal masaüstünde pul küçüldüğünde bile okunabilir kalır.',
  },
  {
    question: 'Portreyi çerçeve içine en iyi şekilde nasıl yerleştiririm?',
    answer: 'Görseli yükleyin ve yüzü ortalamak için doğrudan pul üzerine sürükleyin. Çerçeveyi değiştirmeden yüzü büyütmek için portre yakınlaştırmayı kullanın.',
  },
  {
    question: 'Karakter adı ve seviyesini ekleyebilir miyim?',
    answer: 'Evet. İstediğiniz kadar kısa etiket ekleyin, boyutunu ve hizalamasını ayarlayın ve pul üzerinde okunabilir bir yere sürükleyin.',
  },
  {
    question: 'PNG dosyası çerçevenin dışında şeffaflığı korur mu?',
    answer: 'Evet. Dışa aktarılan görsel seçilen silüetin dışını şeffaf tutar, bu da haritalar üzerine yerleştirmeyi kolaylaştırır.',
  },
  {
    question: 'Tüm grup için tek seferde pul oluşturabilir miyim?',
    answer: 'Evet. Toplu dışa aktarmayı kullanarak birden fazla portre yükleyin ve her biri için şeffaf bir PNG indirin.',
  },
  {
    question: 'Kaydedilen işaretçilerim nerede saklanır?',
    answer: 'İşaretçiler tarayıcınızın yerel depolama alanında saklanır. Hiçbir görsel harici sunuculara yüklenmez.',
  },
];

const howTo = [
  { name: 'Karakter silüetini seçin', text: 'Role uygun bir çerçeve seçin: kahramanlar için daire, taktik savaşlar için altıgen veya patronlar için yıldız.' },
  { name: 'Portreyi yükleyin ve ortalayın', text: 'Görseli seçin, pula sürükleyin ve yüz ortalanacak şekilde yakınlaştırmayı ayarlayın.' },
  { name: 'Önemli bilgileri ekleyin', text: 'Görseli kapatmayacak şekilde kısa bir isim veya durum bilgisi ekleyin.' },
  { name: 'Şeffaf PNG olarak dışa aktarın', text: 'Sanal masaüstünüzde (VTT) veya baskıda kullanmak üzere şeffaf PNG dosyasını indirin.' },
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
  description: 'Masaüstü RPG oyunları için özel çerçeveli, etiketli, şeffaf ve toplu PNG indirmeli karakter pulları (tokens) oluşturun.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Masaüstü RPG karakter pulu nasıl yapılır',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'rpg-karakter-pulu-olusturucu-masaustu',
  title: 'Masaüstü RPG Karakter Pulu Oluşturucu (Tokens)',
  description: 'Masaüstü RPG oyunları için özel çerçeveli, etiketli, şeffaf ve toplu PNG indirmeli karakter pulları (tokens) oluşturun.',
  ui,
  seo: [
    { type: 'title', text: 'Oyun haritanızda son derece net görünen karakter pulları tasarlayın', level: 2 },
    { type: 'paragraph', html: 'Bir pul, oyun masasındaki en önemli görsel iletişim araçlarından biridir. Silüeti, tüm gruba henüz haritayı yakınlaştırmadan önce bir kahramanla mı, tehlikeli bir canavarla mı yoksa kilit bir müttefikle mi karşı karşıya olduklarını anında gösterir. Doğru çerçeveyi seçin ve sanal masaüstü platformunuzun kullandığı ölçekte hem görselin hem de yazıların mükemmel bir okunabilirlikte kalmasını sağlayın.' },
    { type: 'title', text: 'Karakter tipine ve rolüne en uygun çerçeveyi seçin', level: 2 },
    { type: 'list', items: ['<strong>Daire veya halka:</strong> oyuncu karakterleri ve sürekli müttefikler için standart ve güvenilir bir seçim.', '<strong>Altıgen veya sekizgen:</strong> çok birimli taktik savaşlarda birimleri birbirinden kolayca ayırmak için harikadır.', '<strong>Yıldız:</strong> patronlar, şampiyonlar veya hemen dikkat çekmesi gereken önemli hedefler için mükemmeldir.', '<strong>Bulut:</strong> ruhlar, büyülü yaratıklar ve mistik varlıklar için yumuşak bir form.'] },
    { type: 'tip', title: 'Her zaman aslında oynayacağınız en küçük boyutu hedefleyerek tasarlayın', html: 'Haritayı pul yalnızca birkaç düzine piksel genişliğinde kalana kadar uzaklaştırın. Yüz, çerçeve ve yazı hala net bir şekilde birbirinden ayrılabiliyorsa, pulunuz yoğun savaş anlarında harika çalışacaktır.' },
    { type: 'title', text: 'Oyun sırasında kısa ve kullanışlı etiketler kullanın', level: 2 },
    { type: 'paragraph', html: 'Bir pul asla eksiksiz bir karakter kağıdının yerini almaz. Yalnızca masanın sürekli ihtiyaç duyduğu en önemli bilgileri ekleyin: kısa bir isim, seviye veya sersemlemiş gibi bir durum bilgisi. Çok uzun cümleler yalnızca görsel kirlilik yaratır ve portrenin önüne geçer.' },
    { type: 'title', text: 'Tüm ekibin pullarını kimliklerini kaybetmeden tek seferde hazırlayın', level: 2 },
    { type: 'paragraph', html: 'Toplu dışa aktarma, her portrenin özgünlüğünü ve benzersizliğini korurken grubun genel stilini birleştirmenize olanak tanır. Tutarlı bir çerçeveleme ekibe görsel bir bütünlük katar.' },
    { type: 'tip', title: 'Cihazınızda otomatik yerel kaydetme kolaylığı', html: 'Aktif işaretçiniz tarayıcınızda otomatik olarak saklanır, böylece karakter seviye atladığında kolayca yeniden açıp düzenleyebilirsiniz.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
