import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Sapma Yönü Seçici',
  setupTitle: 'Sapma Ayarları',
  sectorsLabel: 'Pusula Sektörleri',
  sectors8: '8 Yön',
  sectors12: '12 Yön (Saat)',
  diceLabel: 'Sapma Mesafesi Zarı',
  diceD6: '1D6 İnç',
  dice2D6: '2D6 İnç',
  diceD10: '1D10 İnç',
  diceCustom: 'Özel Aralık',
  customMaxLabel: 'Maksimum Mesafe',
  hitChanceLabel: 'Doğrudan İsabet Olasılığı (%)',
  rollButton: 'Sapma Atışı Yap',
  hitResult: 'Doğrudan İsabet!',
  scatterResult: 'Sapma!',
  distanceLabel: 'Mesafe',
  angleLabel: 'Açı',
  dragHint: 'Rüzgar yönünü elle ayarlamak için pusulayı sürükleyin',
  historyTitle: 'Son Atışlar',
  clearHistory: 'Geçmişi Temizle',
  presetTitle: 'Savaş Oyunu Hazır Ayarları',
  soundOn: 'Ses Açık',
  soundOff: 'Ses Kapalı',
  guideStep1: 'Pusulayı masa yönünüze uyacak şekilde sürükleyin',
  guideStep2: 'Sektörleri, zarları ve doğrudan isabet şansını seçin',
  guideStep3: 'Merkez = hedefiniz. Yeşil parlama tam isabet anlamına gelir',
  guideStep3Scatter: 'Ok = sapma yönü. Atışı merkezden o kadar inç ok yönünde hareket ettirin',
  scatterModeLabel: 'Sapma Yönü',
  scatterModeRandom: 'Rastgele',
  scatterModeWind: 'Rüzgar Sürüklenmesi',
  scatterModeWindHint: 'Ok her zaman pusulayı takip eder - yalnızca mesafe rastgeledir',
};

const faq = [
  {
    question: 'Sapma Yönü Seçici nasıl çalışır?',
    answer: 'Seçilen zar yapılandırmasına göre rastgele bir açı (0-359 derece) ve mesafe hesaplar. Ayrıca bir sapma zarını simüle ederek doğrudan isabetleri kontrol eder.',
  },
  {
    question: 'Sektör formatını değiştirebilir miyim?',
    answer: 'Evet, 8 yönlü ana yön sektörleri ile 12 yönlü saat kadranı sektörleri arasında geçiş yapabilirsiniz.',
  },
  {
    question: 'Doğrudan isabet olasılığı nedir?',
    answer: 'Merminin hedeflenen noktaya herhangi bir sapma olmadan tam olarak düşme şansını temsil eder ve standart bir sapma zarında "İsabet" sonucunu simüle eder.',
  },
  {
    question: 'Bu araç Warhammer veya Bolt Action ile uyumlu mu?',
    answer: 'Evet, çoğu taktik savaş oyunu ve minyatür kural setinde kullanılan standart 8 yönlü şablonları ve 12 yönlü saat hizalamalarını destekler.',
  },
  {
    question: 'Sapma mesafesi görsel olarak nasıl gösterilir?',
    answer: 'İnç cinsinden mesafe, çarpma noktasında sapma yönü boyunca konumlanmış bir etiket olarak görünür. Kırmızı pusula oku da hızlı şablon hizalaması için son açıya kilitlenir.',
  },
  {
    question: 'Daha hızlı sonuç almak için animasyonu devre dışı bırakabilir miyim?',
    answer: 'Animasyon yaklaşık iki saniye sürer, ardından nihai sonuç merkezde görüntülenir ve pusula oku kilitlenir. Şu anda atlama seçeneği yoktur, ancak gecikme fiziksel zar atma temposuna uyacak şekilde tasarlanmıştır.',
  },
  { question: 'Saçılma yönü nasıl belirlenir?', answer: 'Araç, seçilen sektör sistemini zar atışı ve ayarlanan sapma mesafesiyle birleştirir.' },
  { question: 'Rüzgâr modunu kullanabilir miyim?', answer: 'Evet, rüzgâr modu pusulanın açısını izler ve mesafeyi rastgele bırakır.' },
];

const howTo = [
  {
    name: 'Kuralları Yapılandırın',
    text: 'Pusula sektörlerini seçin, bir mesafe zarı ön ayarı belirleyin ve doğrudan isabet şansını ayarlayın.',
  },
  {
    name: 'Atın veya Sürükleyin',
    text: 'Sapmayı simüle etmek için Sapma Atışı Yap düğmesine tıklayın veya yönü elle ayarlamak için pusula çarkını sürükleyin.',
  },
  {
    name: 'Sonucu Okuyun',
    text: 'Merkez ekranı ve vektör okunu kontrol ederek sapmanın tam mesafesini, açısını ve yönünü bulun.',
  },
  {
    name: 'Yörüngeyi İzleyin',
    text: 'Atıştan sonra animasyonlu merminin pusula üzerinde hareket etmesini izleyin. Kesik çizgi sapma yolunu gösterir ve çarpma noktası mesafeyi inç cinsinden görüntüler.',
  },
  {
    name: 'Sonucu Yorumlayın',
    text: '"DIRECT HIT" yazısıyla birlikte yeşil bir darbe sıfır sapma anlamına gelir. Mesafe etiketiyle birlikte kırmızı bir patlama, atışın saptığı anlamına gelir - şablonunuzu hedeften bu kadar inç uzağa, ok yönünde yerleştirin.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'sapma-yonu-secici',
  title: 'Sapma Yönü Seçici: Minyatür Savaş Oyunları için Pusula',
  description: 'Minyatür savaş oyunları için 3B dokunsal bir pusula kullanarak rastgele sapmaları, rüzgar sürüklenmesini ve dağılım yönlerini belirleyin.',
  ui,
  seo: [
    { type: 'title', text: 'Gerçek Zamanlı Mermi Animasyonlu Etkileşimli Sapma Pusulası', level: 2 },
    { type: 'paragraph', html: 'Sapma Yönü Seçici, statik sayı üretiminin ötesine geçerek pusula katmanı üzerinde animasyonlu bir mermi yörüngesi oluşturur. Sapma Atışı Yap düğmesine tıkladığınızda, parlayan bir mermi merkezden sapma açısı boyunca ilerler, kesik bir iz bırakır ve çarpma noktasında parçacıklara ayrılır. Bu, masaüstü savaş oyunlarında hedefi ıskalayan atışların görsel çözümlemesini büyük ölçüde kolaylaştırır ve oyunu hızlandırır.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sektör Sistemi', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Zar Hazır Ayarları', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'İsabet Olasılığı Aralığı', icon: 'mdi:target' },
      { value: '10', label: 'Son Atış Geçmişi', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Yörünge Animasyonu Savaş Oyunu Kararlarını Nasıl İyileştirir', level: 3 },
    { type: 'paragraph', html: 'Geleneksel sapma araçları sayısal bir açı ve mesafe görüntüleyerek oyuncuların masadaki kaymayı zihinsel olarak canlandırmasını zorunlu kılar. Animasyonlu yörünge, nişan noktasından sapma iniş bölgesine kadar tam uçuş yolunu çizerek bu boşluğu kapatır. Oyun temposunu hızlandırır ve patlama şablonlarını yerleştirirken anlaşmazlıkları tamamen ortadan kaldırır.' },
    { type: 'diagnostic', variant: 'success', title: 'Doğrudan İsabet', html: 'Atış isabet olasılığını geçtiğinde, pusula merkezi titreşen yeşil halkalar ve "DIRECT HIT" metin animasyonu ile aydınlanır. Mermi merkeze dönerek sıfır sapma ile mükemmel isabeti onaylar.' },
    { type: 'diagnostic', variant: 'error', title: 'Sapma', html: 'Sapma sonucunda mermi, iniş noktasına kadar kesik bir yörünge izler. Bir parçacık patlaması, parlayan bir işaret ve inç cinsinden kesin mesafe (örn. <strong>5"</strong>) anında ölçüm için çarpma noktasında belirir.' },
    { type: 'tip', title: 'İpucu: Rüzgar Sürüklenmesi Modunu Kullanma', html: 'Sapma yönünü elle döndürdüğünüz pusula açısına kilitlemek için Rüzgar Sürüklenmesini açın. Bu, baskın bir rüzgarı veya sabit bir yer değiştirme vektörünü simüle eder  -  güdümsüz roketler, gaz bulutları, alan etkili büyüler veya başarısız teleportasyonlar için idealdir.' },
    { type: 'title', text: 'Masaüstü savaş oyunlarında saçılmayı çözmek', level: 2 },
    { type: 'paragraph', html: 'Birçok savaş oyunu ve taktik RPG, topçu ateşini, havan atışlarını, gaz sürüklenmesini veya başarısız ışınlanmaları gerçekçi ve öngörülemez bir şekilde simüle etmek için sapma kullanır. Esnek zar seçenekleriyle (1D6, 2D6, 1D10) bu dijital pusula her kural kitabına uyum sağlar.' },
    { type: 'table', headers: ['Oyun Senaryosu', 'Zar Yapılandırması', 'Sapma Modu', 'Taktiksel Etki'], rows: [['Topçu ve Havanlar', '2D6 inç', '8 Sektör + İsabet %', 'Hedef etrafında rastgele dağılım'], ['Gaz Bulutları ve Rüzgar', '1D6 inç', 'Rüzgar Sürüklenmesi (Sabit Açı)', 'Yalnızca rüzgar yönünde kayma'], ['Işınlanma Hataları', '1D10 inç', '12 Sektör Saat', 'Herhangi bir yönde dairesel sapma']] },
    { type: 'title', text: 'Rüzgâr ve sapmayı yönetmek', level: 2 },
    { type: 'paragraph', html: 'Uygun bir isabet olasılığı ayarlamak, mürettebatın eğitim seviyesini yansıtmaya olanak tanır ve atış aşamasında masadaki ölçüm süresini önemli ölçüde kısaltır.' },
    { type: 'comparative', items: [{ title: 'Masaüstü savaş oyunlarında saçılmayı çözmek', description: 'Birçok savaş oyunu topçu ateşini, rüzgârı ve başarısız ışınlanmayı sapma ile simüle eder. Bu dijital pusula, zarların masadaki araziyi kaza ile kaydırmasını önler.', icon: 'mdi:compass-outline', highlight: true, points: ['Rüzgâr ve sapmayı yönetmek', 'Hızlı ve sorunsuz ölçüm', 'Hassas vektör görselleştirmesi'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Rüzgâr ve sapmayı yönetmek', definition: 'İsabet olasılığı birimin güvenilirliğini değerlendirmeye ve oyun sırasında ölçümleri hızlandırmaya yardımcı olur.' }] },
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
      'name': 'Sapma Yönü Seçici',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Sapma Yönü Seçici nasıl kullanılır',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
