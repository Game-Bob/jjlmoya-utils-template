import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'İlk Oyuncu Seçici',
  instructions: 'Parmaklarınızı ekrana koyun veya iğne eklemek için tıklayın',
  tapToSelect: 'Seçmek için Dokun',
  winner: 'Kazanan seçildi!',
  reset: 'Sıfırla',
  start: 'Seçimi Başlat',
  setupTitle: 'Seçici Ayarları',
  clearPlayers: 'Tüm İğneleri Temizle',
  fingerMode: 'Parmak Modu',
  wheelMode: 'Rulet Modu',
  presetsTitle: 'Seçenekler',
  soundOn: 'Ses Açık',
  soundOff: 'Ses Kapalı',
  playerCountLabel: 'İğne / Parmak',
};

const faq = [
  {
    question: 'Parmak Modu nasıl çalışır?',
    answer: 'Parmak Modunda, her oyuncu mobil ekrana bir parmak koyar. Araç tüm dokunma noktalarını algılar, etraflarında parlayan renkli halkalar görüntüler ve otomatik olarak kısa bir geri sayım başlatır. Geri sayım bittiğinde, bir oyuncu kazanan olarak vurgulanırken diğerleri solar ve bir parçacık patlaması eşlik eder.',
  },
  {
    question: 'Bu aracı masaüstü bilgisayarda kullanabilir miyim?',
    answer: 'Evet! Dokunmatik olmayan bir cihazdaysanız, araç otomatik olarak Rulet Moduna geçer. Oyuncuları temsil eden renkli iğneler yerleştirmek için tuvale tıklayabilir, ardından seçici çarkı döndürmek için Seçimi Başlat düğmesine tıklayabilirsiniz.',
  },
  {
    question: 'Kaç oyuncu katılabilir?',
    answer: 'Araç, aynı anda en fazla 10 oyuncuyu destekler. Parmak Modunda, aynı anda en fazla 10 parmak algılanabilir. Rulet Modunda, tıklayarak tuval üzerine en fazla 10 renkli iğne yerleştirebilirsiniz.',
  },
  {
    question: 'Seçim gerçekten rastgele mi?',
    answer: 'Evet. Seçim algoritması, tarafsız sonuçlar sağlamak için JavaScript\'in kriptografik düzeydeki Math.random() işlevini kullanır. Parmak Modunda, kazanan algılanan tüm dokunma noktaları arasından eşit olasılıkla rastgele seçilir. Rulet Modunda, çark sürtünme fiziği kullanarak gerçekçi bir şekilde yavaşlar ve nihai açı kazananı matematiksel olarak belirler.',
  },
  {
    question: 'Rulet Modunda bir oyuncu iğnesini nasıl kaldırırım?',
    answer: 'Mevcut bir iğneye tıklamanız yeterlidir. Araç, yerleştirilmiş herhangi bir iğnenin 30 piksel yakınındaki tıklamaları algılar ve siler, böylece döndürmeyi tetiklemeden önce oyuncu sıralamasını ayarlayabilirsiniz.',
  },
  {
    question: 'Bu araç herhangi bir veri toplar veya iletir mi?',
    answer: 'Hiçbir şekilde. Her şey tarayıcınızda yerel olarak çalışır. Hiçbir parmak verisi, dokunma konumu veya seçim sonucu herhangi bir sunucuya gönderilmez. Oyun geceniz tamamen özel kalır.',
  },
  {
    question: 'Projektörlerde veya harici ekranlarda çalışır mı?',
    answer: 'Evet. Rulet Modu, masaüstü oturumları için büyük ekranlarda ve projektörlerde harika çalışır. Yüksek kontrastlı neon görseller ve büyük geri sayım zamanlayıcısı, odanın diğer tarafından görülebilecek şekilde tasarlanmıştır.',
  },
  {
    question: 'Biri parmağını kaldırdığında geri sayım neden sıfırlanıyor?',
    answer: 'Bu kasıtlıdır. Parmak Modunda, geri sayım yalnızca tüm oyuncular parmaklarını ekranda sabit tutarken devam eder. Birisi kaldırır veya kaydırırsa, seçim çalışmadan önce herkesin kararlı olduğundan emin olmak için zamanlayıcı sıfırlanır. Bu, kazara tetiklenmeleri önler.',
  },
  {
    question: 'Sesi değiştirebilir veya kapatabilir miyim?',
    answer: 'Evet. Sağ üst köşedeki hoparlör simgesine tıklayarak sesi açıp kapatabilirsiniz. Araç, geri sayım sırasında bir tik sesi ve bir kazanan seçildiğinde bir fanfar çalar.',
  },
  {
    question: 'Sadece bir oyuncu varsa ne olur?',
    answer: 'Her iki modda da seçim yapmak için en az iki oyuncu gereklidir. Parmak Modunda, en az iki parmak algılanana kadar geri sayım başlamaz. Rulet Modunda, en az iki iğne yerleştirene kadar Seçimi Başlat düğmesi devre dışı kalır.',
  },
];

const howTo = [
  {
    name: 'Parmakları veya İğneleri Yerleştirin',
    text: 'Parmak Modunda, tüm oyuncular ekrana bir parmak koyar. Rulet Modunda, oyuncu iğneleri yerleştirmek için tuvalin herhangi bir yerine tıklayın.',
  },
  {
    name: 'Seçimi Tetikleyin',
    text: 'Parmak Modunda, seçim birkaç saniye bekledikten sonra otomatik olarak başlar. Rulet Modunda, döndürmek için Seçimi Başlat düğmesine tıklayın.',
  },
  {
    name: 'Kazananı Görün',
    text: 'Kazanan, nabız efekti, parçacık patlaması ve ses fanfarı ile vurgulanır. Sıfırla düğmesine tıklayın veya tekrar denemek için tüm parmakları kaldırın.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'ilk-oyuncu-secici',
  title: 'İlk Oyuncu Seçici: Parmak Seçici & Sıra Ruleti',
  description: 'Bu muhteşem parmak seçici ve interaktif sıra ruleti ile masa oyunlarınızda kimin ilk başlayacağını seçin.',
  ui,
  seo: [
    { type: 'title', text: 'Adalet ve Strateji: Masa Oyunlarında İlk Oyuncu Avantajını Çözmek', level: 2 },
    { type: 'paragraph', html: 'Masaüstü oturumlarında başlangıç oyuncusunu belirlemek oyun dinamiklerini büyük ölçüde etkileyebilir. Oyun teorisinde, İlk Oyuncu Avantajı (FPA), ilk sırayı alan oyuncunun rakiplerine karşı sahip olduğu istatistiksel üstünlüğü ifade eder. Stratejik satranç maçlarında, savaş oyunlarında ve Agricola veya Puerto Rico gibi modern Euro oyunlarında, ilk hamleyi yapmak bir oyuncunun rakipleri tepki veremeden kritik kaynakları güvence altına almasını veya taşları yerleştirmesini sağlar. FPA\'yı azaltmak ve dengeli bir oyun alanı garanti etmek için güvenilir, tarafsız bir seçim yöntemi esastır. Dijital başlangıç oyuncusu seçicimiz mutlak rastgelelik garantisi vererek oyun gruplarının anında sıra düzeni oluşturmasına ve doğrudan oyuna başlamasına olanak tanır.' },
    {
      type: 'stats',
      items: [
        { value: '%100 Rastgele', label: 'Tarafsız Seçim' },
        { value: '2 Saniye', label: 'Geri Sayım Tetikleyicisi' },
        { value: 'Çoklu Dokunma', label: 'Mobil Uyumlu' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Masa Oyunu Kuralları vs. Dijital Rastgeleleştiriciler: Dokunma Devrimi', level: 2 },
    { type: 'paragraph', html: 'Birçok modern masa oyunu kural kitabı, "en genç oyuncu başlasın", "bir çiftliği en son ziyaret eden kişi başlasın" veya "en uzun oyuncu başlasın" gibi tematik başlangıç oyuncusu kuralları içerir. İlk oyunlarda eğlenceli olsa da, bu kuraller düzenli oyun grupları için hızla tekrarlayıcı, statik ve adaletsiz hale gelir. Zar atma veya kart çekme gibi fiziksel rastgeleleştiriciler hazırlık süresini artırır ve insan yanlılığına veya kötü karıştırmaya yatkındır. Parmak seçici mekaniği, ekstra kart veya zar gerektirmeden saniyeler içinde bir başlangıç oyuncusu seçen hızlı, dokun-ve-tut rastgeleleştirici sunarak bu sorunu çözer.' },
    {
      type: 'table',
      headers: ['Seçim Yöntemi', 'Hız ve Kurulum', 'Rastgelelik Kalitesi', 'En Uygun Olduğu Yer'],
      rows: [
        ['Keyfi Kural Kitabı Kuralları', 'Anlık, ancak tekrarlayıcı', 'İlk oyundan sonra sıfır rastgelelik', 'Aile oyunları ve parti oyunları'],
        ['Zar Atışları', 'Zar bulma ve atma gerektirir, beraberliğe yatkın', 'Yüksek rastgelelik, ancak büyük gruplar için sıkıcı', 'Savaş oyunları ve RPG\'ler'],
        ['Kart Çekme', 'Karıştırma ve dağıtma gerektirir', 'İyi rastgelelik, ancak fiziksel kart gerektirir', 'Deste kurucular ve kart oyunları'],
        ['Dokunmatik Parmak Seçici', 'Anlık, sıfır kurulum, görsel animasyonlar', 'Mutlak algoritmik rastgelelik', 'Tüm masa ve tahta oyunları'],
      ],
    },
    {
      type: 'tip',
      title: 'Çoklu Dokunma Seçicinizi Optimize Etme',
      html: 'Parmak Modunda en iyi deneyim için tabletinizi veya akıllı telefonunuzu masanın ortasına düz bir şekilde yerleştirin. Tüm oyuncuların tuval üzerine net bir şekilde tek bir parmak koymasını sağlayın. Bir oyuncu parmağını kaldırır veya kaydırırsa geri sayım sıfırlanır, bu da kazara tetiklenmeleri önler ve seçici çalışmadan önce mutlak fikir birliği sağlar.',
    },
    {
      type: 'title',
      text: 'Aracınızı Seçme: Dokunmatik Parmak Seçici vs. Döndürme Ruleti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Donanım kurulumunuza ve ortamınıza bağlı olarak, ekran alanını ve erişilebilirliği en üst düzeye çıkarmak için tasarlanmış iki farklı düzen modu arasında geçiş yapabilirsiniz:' },
    {
      type: 'proscons',
      title: 'Seçim Modlarını Karşılaştırma',
      items: [
        {
          pro: 'Parmak Modu, 10 oyuncuya kadar aynı anda parmak yerleştirmeye izin veren inanılmaz derecede hızlı ve dokunsal bir deneyim sunar.',
          con: 'Akıllı telefon veya tablet gibi dokunmatik ekran gerektirir.',
        },
        {
          pro: 'Rulet Modu her dizüstü bilgisayar, masaüstü veya projektör ekranında çalışarak sanal oturumlar ve uzaktan oyun geceleri için idealdir.',
          con: 'Döndürmeyi tetiklemeden önce manuel olarak iğne yerleştirmek için tıklama gerektirir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Görsel Optimizasyon: Çoklu Dokunma Ağları vs. Yavaşlayan Çarklar',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Çoklu Dokunma Seçici',
          description: 'Ekrandaki birden çok farklı dokunma noktasını izler. Her parmağın etrafında neon bağlantı ağları ve küçülen geri sayım halkaları çizer ve bir kutlama patlamasıyla doruğa ulaşır.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Eşzamanlı dokunma takibi',
            'Dokunsal tut-ve-bırak kontrolleri',
            'Muhteşem parçacık patlamaları',
          ],
        },
        {
          title: 'Döndürme Rulet Çarkı',
          description: 'Matematiksel bir merkez etrafında renkli oyuncu iğneleri yerleştirir. Kazananı belirlemeden önce simüle edilmiş sürtünme kullanarak doğal olarak yavaşlayan renkli bir sektör çarkı döndürür.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Merkez tabanlı hizalama',
            'Sürtünme tabanlı yavaşlama fiziği',
            'Evrensel masaüstü fare desteği',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'İlk Oyuncu Avantajı (FPA)',
          definition: 'Başlangıç oyuncusunun eylem seçimi veya kaynak kontrolünde istatistiksel olarak anlamlı bir avantaj elde ettiği tahta oyunlarındaki sıra düzeni yanlılığı.',
        },
        {
          term: 'Dokunma Seçim Protokolü',
          definition: 'Tüm katılımcıların, tek bir kazanan rastgele vurgulanana kadar parmaklarını dokunmatik ekranda tuttukları bir dokun-ve-tut etkileşimi.',
        },
        {
          term: 'Yavaşlama Fiziği',
          definition: 'Doğal ataleti simüle etmek ve heyecanı artırmak için dönen bir çarka sürtünme çarpanları uygulayan matematiksel bir animasyon rutini.',
        },
        {
          term: 'Merkez Hesaplama',
          definition: 'Rulet çarkı grafikleri için dönüş ekseni olarak kullanılan, dağınık bir koordinat iğne kümesinin hesaplanmış merkez noktası.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'İlk Oyuncu Seçici ve Parmak Seçici',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the First Player Selector',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
