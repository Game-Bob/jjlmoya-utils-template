import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Fantastik Rün Çevirici',
  inputPlaceholder: 'Çevirmek için bir kelime veya isim yazın...',
  alphabetLabel: 'Rün Alfabesi',
  elderFuthark: 'Elder Futhark',
  angloSaxon: 'Anglo-Sakson',
  fantasy: 'Fantastik Yazı',
  theban: 'Theban',
  enochian: 'Enochian',
  daemonic: 'Demonik',
  ogham: 'Ogham',
  translate: 'Çevir',
  clear: 'Temizle',
  copy: 'Metni Kopyala',
  copied: 'Kopyalandı!',
  runeName: 'İsim',
  runeMeaning: 'Anlam',
  runePhonetic: 'Fonetik',
  clickHint: 'Detayları görmek için bir rüne tıklayın',
  outputLabel: 'Rün Çıktısı',
  noInput: 'Rünlere çevirmek için yukarıya metin girin',
  unknownChar: '?',
  gmMode: 'OY Modu',
  exitGmMode: 'Çıkış',
  gmHint: 'Bunu oyuncularınıza gösterin',
  seedLabel: 'Tohum',
  seedPlaceholder: 'İsteğe Bağlı',
  seedApplied: 'Kilitli',
  shuffleSeed: 'Karıştır',
};

const faq = [
  {
    question: 'Elder Futhark nedir?',
    answer: 'Elder Futhark, MS 2. yüzyıldan 8. yüzyıla kadar Cermen kabileleri tarafından kullanılan runik alfabelerin en eski biçimidir. Aettir adı verilen sekizli üç gruba ayrılmış 24 ründen oluşur. Her rünün fonetik bir değeri ve doğal veya mitolojik kavramları temsil eden sembolik bir adı vardır.',
  },
  {
    question: 'Elder Futhark ile Anglo-Sakson rünleri arasındaki fark nedir?',
    answer: 'Anglo-Sakson Futhorc, İngiltere\'de geliştirilen Elder Futhark\'ın genişletilmiş bir versiyonudur. Eski İngilizceye özgü sesleri temsil etmek için ek rünler ekleyerek 24 karakterden 33 karaktere çıkar. Anlamlar ve fonetik değerler de zamanla değişmiştir.',
  },
  {
    question: 'Bu çevirici kelimeleri mükemmel bir şekilde dönüştürüyor mu?',
    answer: 'Bu araç, rün sembollerine harf harf çeviri yazı sağlar. Tarihsel rün kullanımı, birebir harf yerine fonetikti, bu nedenle sonuç modern bir yorumdur. Fantastik Yazı seçeneği, masaüstü RPG havası için yaratıcı bir kurgusal alfabe sunar.',
  },
  {
    question: 'Bu rünleri masaüstü RPG kampanyalarımda kullanabilir miyim?',
    answer: 'Evet! Oyun yöneticileri ve oyuncular, çeviriciyi runik yazıtlar, büyülü yazılar, gizli mesajlar veya karakterler ve yerler için dekoratif isimler oluşturmak için kullanabilir. Fantastik Yazı seçeneği özellikle fantezi rol yapma ortamları için tasarlanmıştır.',
  },
  {
    question: 'Bu araç yazdığım metinleri saklıyor mu?',
    answer: 'Hayır. Her şey tarayıcınızda yerel olarak çalışır. Hiçbir metin, çeviri veya seçim asla herhangi bir sunucuya gönderilmez. Yaratıcı çalışmanız tamamen gizli kalır.',
  },
  {
    question: 'Bir rüne tıkladığımda ne olur?',
    answer: 'Herhangi bir rün kartına tıklamak, geleneksel adını, sembolik anlamını ve fonetik değerini gösterir. Bu, rünleri öğrenmenize ve RPG ihtiyaçlarınız için doğru sembolü seçmenize yardımcı olur.',
  },
];

const howTo = [
  {
    name: 'Metin Girin',
    text: 'Giriş alanına herhangi bir İngilizce kelime, isim veya ifade yazın. Çevirici, tek kelimeler veya kısa ifadelerle en iyi şekilde çalışır.',
  },
  {
    name: 'Bir Alfabe Seçin',
    text: 'Elder Futhark (antik Cermen), Anglo-Sakson (ortaçağ İngilizcesi) veya Fantastik Yazı (masaüstü RPG stili) arasında seçim yapın.',
  },
  {
    name: 'Çevirin ve Keşfedin',
    text: 'Metninizi dönüştürmek için Çevir\'e tıklayın. Her rün bir kart olarak görünür. Adını, anlamını ve sesini öğrenmek için herhangi bir rüne tıklayın. Rün metnini panonuza kaydetmek için Kopyala düğmesini kullanın.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantastik-run-cevirmeni',
  title: 'Fantastik Rün Çevirici / Elder Futhark, Theban, Enochian ve Demonik Rün Dönüştürücü',
  description: 'Metni Elder Futhark, Anglo-Sakson Futhorc, Theban, Enochian, Demonik, Ogham veya Fantastik yazılara çevirin. Masaüstü RPG bulmacaları, kampanyalar, büyücü parşömenleri ve mistik rünler için mükemmel.',
  ui,
  seo: [
    { type: 'title', text: 'Masaüstü RPG Dünya İnşası için Runik Alfabeler ve Mistik Yazılar', level: 2 },
    { type: 'paragraph', html: 'Mistik runik alfabeler, antik semboller ve gizli yazılar, D&D, Pathfinder ve Warhammer gibi fantezi masaüstü rol yapma oyunlarına eşsiz bir sürükleyicilik katar. İster Elder Futhark ile yazılmış gizli cüce harabeleri yaratıyor, ister Enochian melek-dili yazıları içeren gizemli bir büyü kitabı tasarlıyor, ister Theban alfabesini kullanarak cadı ipuçları serpiştiriyor, ister yasak demonik mesajlar yazıyor olun, rün üreteçimiz sıradan İngilizce metni gerçek zamanlı olarak stilize sembollere dönüştürür. Fiziksel aksesuarlar, gizem şifreleri ve antik taş oymalarla oyuncuların merakını uyandırın.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Rün Alfabesi' },
        { value: '150+', label: 'Sembol Çeşidi' },
        { value: 'Anında', label: 'Görsel Çeviri Yazı' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Elder Futhark ve Anglo-Sakson Futhorc: Antik Cermen ve İskandinav Rünleri', level: 2 },
    { type: 'paragraph', html: '2. yüzyıla kadar uzanan Elder Futhark, doğanın temel güçlerini temsil eden 24 karakterden oluşan en eski runik sistemdir. Anglo-Sakson Futhorc, bu sistemi Eski İngilizce fonetiği için 33 karaktere kadar genişletmiştir. Bu tarihi semboller, RPG kampanya ortamlarınızda cüce klanlarını, İskandinav mitolojisinden ilham alan kültürleri, Viking oymalarını ve barbar klan nişanlarını temsil etmek için mükemmeldir.' },
    { type: 'title', text: 'Theban ve Ogham: Ortaçağ Cadılık ve Kelt Ağaç Alfabeleri', level: 2 },
    { type: 'paragraph', html: 'Genellikle Honorius Rünleri veya Cadı Alfabesi olarak anılan Theban yazısı, okült geleneklerde ve Wicca\'da kullanılan tarihsel olarak popüler bir ortaçağ şifresidir. Ogham, kenarlar boyunca oyulmuş doğrusal çizgiler kullanan erken bir ortaçağ alfabesidir ve ünlü olarak Kelt folkloru ve druidik ağaç büyüsüyle bağlantılıdır. Bu yazıları druid tapınaklarını, elf ormanlarını, pagan sunaklarını veya gizli cadı topluluklarından gelen gizli mesajları süslemek için kullanın.' },
    { type: 'title', text: 'Enochian ve Demonik Yazılar: Gizemli Melek ve Uçurum Dilleri', level: 2 },
    { type: 'paragraph', html: 'İlk olarak 16. yüzyılda John Dee ve Edward Kelley tarafından kaydedilen Enochian, meleklerin dili olduğuna inanılan ayrıntılı bir yapılandırılmış dildir. Demonik yazılar, uçurum gliflerini, karanlık anlaşmaları ve cehennemi işaretleri temsil eder. Büyücülerinizin, paladinlerinizin ve din adamlarınızın araştırması için deşifre edilebilir şeytani sözleşmeler, karanlık kült oymaları ve meleksi kalıntılar bırakarak kampanyanızın anlatısal önemini artırın.' },
    { type: 'title', text: 'Özel Fantastik Yazı: Roleplay için Hazır Yaratıcı Alfabeler', level: 2 },
    { type: 'paragraph', html: 'Gerçek dünya tarihinin ötesine geçen dünyalar için, özel Fantastik Yazımız, klasik yüksek fantezi estetiğini uyandırmak için özel olarak oluşturulmuş kurgusal bir rün seti sunar. Her rün, oyun yöneticisi çıktılarında, dijital haritalarda ve özel oyuncu tokenlerinde öne çıkacak şekilde tasarlanmıştır. Farklı gruplara, uluslara veya antik tanrılara özgü gizli diller oluşturmak için tohum tabanlı rastgeleleştirmelerle eşleştirin.' },
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
      'name': 'Fantastik Rün Çevirici',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Fantastik Rün Çevirici Nasıl Kullanılır',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
