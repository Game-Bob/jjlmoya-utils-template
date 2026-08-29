import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'zar-atma-ve-olasilik-simulatoru',
  title: 'Zar Atma & Olasılık Simülatörü',
  description: 'Sanal çok yüzlü zarlar atın (D4, D6, D8, D10, D12, D20, D100), modifikasyonlar ekleyin ve masaüstü ve kutu oyunları için canlı istatistikleri ve atış olasılıklarını görüntüleyin.',
  ui: {
    title: 'Zar Atma & Olasılık Simülatörü',
    rollButton: 'Zarları At',
    clearButton: 'Geçmişi Temizle',
    historyTitle: 'Atış Geçmişi',
    noHistory: 'Henüz kaydedilen atış yok. Başlamak için zarları ekleyin ve Zarları At butonuna tıklayın.',
    totalRolls: 'Toplam Atış',
    averageRoll: 'Ortalama Sonuç',
    lastRoll: 'Son Toplam',
    modifierLabel: 'Değiştirici (+/-)',
    probabilityTitle: 'Olasılık Analizi',
    selectDice: 'Atılacak Zarları Seçin',
  },
  seo: [
    { type: 'title', text: 'Masaüstü Oyun İhtiyacını Yönetmek: Çok Yüzlü Zarların Olasılığı Oyununuzu Nasıl Şekillendirir', level: 2 },
    { type: 'paragraph', html: 'Çok yüzlü zarlar, masaüstü rol yapma oyunlarının ve modern kutu oyunlarının kalbidir. Dungeons & Dragons\'da yüksek bir kurtarma atışı yapmayı hedeflerken veya kaynak üretimi için zar atarken, sonuç matematiksel olasılıklar tarafından yönetilir. Farklı zar türlerinin kombinasyonunun şansınızı nasıl etkilediğini anlamak, oyun sırasında taktiksel kararlar almak için hayati önem taşır.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Doğal 20 Şansı' },
        { value: '10.5', label: 'Ortalama 3d6 Atışı' },
        { value: '9.75%', label: 'Avantajlı Doğal 20' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Birden Fazla Zarın Matematiği: Neden 3d6, 1d20\'den Daha Güvenlidir', level: 2 },
    { type: 'paragraph', html: 'Tek bir D20 attığınızda, 1\'den 20\'ye kadar her sonucun eşit %5 şansı vardır ve bu da düz bir olasılık dağılımı sağlar. Ancak 3d6 gibi birden fazla zar attığınızda, sonuçlar 10.5 ortalama değeri etrafında kümelenir. Bu çan eğrisi, uç değerler yerine orta düzey bir sonuç atma olasılığınızın çok daha yüksek olduğu anlamına gelir, tutarlılık sağlar ve tek zarın kararsız yapısını azaltır.' },
    { type: 'title', text: 'D20 Olasılıkları Açıklandı: Kritik Vuruşlar, Pifialar ve Değiştirici Etkisi', level: 2 },
    { type: 'paragraph', html: 'Artı iki gibi basit bir değiştirici, başarı olasılığını büyük ölçüde değiştirebilir, zor görevleri yönetilebilir zorluklara dönüştürebilir. Birçok oyun sisteminde doğal bir 20 otomatik kritik vuruşu (%5 şans) temsil ederken, doğal bir 1 kritik bir hatayı (pifia) temsil eder. Bu sonuçları görselleştirmek, rastgeleliği anlamaya yardımcı olur ve taktiksel hamlelerinizi istatistiksel destekle planlamanıza olanak tanır.' },
    {
      type: 'title',
      text: 'Standart Çok Yüzlü Zarlar Referans Tablosu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Zar Türü', 'Minimum Atış', 'Maksimum Atış', 'Ortalama Sonuç', 'Masaüstü RPG\'lerdeki Temel Rolü'],
      rows: [
        ['D4', '1', '4', '2.5', 'Sihirli füzeler, hançerler, küçük tehlikeler'],
        ['D6', '1', '6', '3.5', 'Ateş topları, standart kılıçlar, özellik kontrolleri'],
        ['D8', '1', '8', '4.5', 'Uzun kılıçlar, iyileştirme büyüleri, orta boy silahlar'],
        ['D10', '1', '10', '5.5', 'Kargılar, temel büyüler, yüzdelik zarlar'],
        ['D12', '1', '12', '6.5', 'Çift elli baltalar, barbar can puanları'],
        ['D20', '1', '20', '10.5', 'Kurtarma atışları, saldırı atışları, yetenek kontrolleri'],
        ['D100', '1', '100', '50.5', 'Yüzdelik tablolar, vahşi sihir dalgalanmaları'],
      ],
    },
    {
      type: 'tip',
      title: 'Zar Ortalamalarını Zihinden Hesaplama',
      html: 'Herhangi bir tekli zarın ortalamasını bulmak için minimum (1) ve maksimum değerleri toplayın, ardından 2\'ye bölün. Örneğin, bir D6 ortalaması (1 + 6) / 2 = 3.5\'tir. Birden fazla zar için, tekil ortalamayı zar sayısıyla çarpın (örneğin, 3d6 ortalaması 3 * 3.5 = 10.5\'tir). Düz bir değiştirici eklemek, bu ortalamaya eklenir (örneğin, 3d6 + 4 ortalama 14.5\'tir).',
    },
    {
      type: 'title',
      text: 'Düz ve Eğri Zar Sistemlerinin Karşılaştırılması',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'D20 Sistemi vs. 3d6 Çan Eğrisi Sistemi',
      items: [
        {
          pro: 'D20 sistemlerinin hesaplanması hızlıdır ve kritik vuruşlar ile hatalar için sabit %5 şansa sahiptir.',
          con: 'D20 sonuçları oldukça değişkendir ve karakter becerisini zar şansından daha az etkili kılar.',
        },
        {
          pro: '3d6 çan eğrileri ortalama atışları önceliklendirir, yüksek becerili karakterlerin basit görevlerde nadiren başarısız olmasını sağlar.',
          con: '3d6 sistemleri üç zarı toplamayı gerektirir ve mükemmel 18\'leri (kritik) son derece nadir hale getirir (%0.46).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Olasılık Mekaniğini Anlamak',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'D20 Sistemi (Doğrusal)',
          description: 'Eylemler için tek bir 20 yüzlü zar kullanır, burada her sonucun eşit %5 şansı vardır. Yüksek varyans heyecan yaratır ancak tutarlılığı azaltır.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Sonuç başına düz %5 şans',
            'Yüksek varyans ve dalgalanmalar',
            'Değiştiriciler başarıyı doğrusal olarak artırır',
          ],
        },
        {
          title: '3d6 Sistemi (Çan Eğrisi)',
          description: 'Üç adet 6 yüzlü zarı toplayarak 10.5 merkezli bir normal dağılım oluşturur. Sonuçlar oldukça tutarlıdır.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Ortalama sonuçların çıkma olasılığı yüksek',
            'Uç sonuçlar son derece nadir',
            'Değiştiricilerin doğrusal olmayan bir etkisi vardır',
          ],
        },
        {
          title: 'Yüzdelik Sistem (Altında Atma)',
          description: '1 ile 100 arasında bir sayı elde etmek için iki adet 10 yüzlü zar kullanır. Amaç karakter değerinin altında atmaktır, bu da şansı anında netleştirir.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Doğrudan yüzdelik başarı oranı',
            'Bir bakışta kolayca anlaşılır',
            'Beceri ilerlemesi matematiksel olarak nettir',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kumarbazın Yanılgısı: Zarların Neden Hafızası Yoktur',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Masaüstü oyunlarında yaygın bir hata, geçmiş atışların gelecekteki sonuçları etkilediği inancıdır. D20\'de arka arkaya üç kez "1" atarsanız, yüksek bir atışın "zamanının geldiğini" hissedebilirsiniz. Gerçekte, her atış bağımsız bir olaydır. Bir sonraki atışta 20 atma olasılığı hala tam olarak %5\'tir. Bunu bilmek, oyuncuların nesnel taktiksel seçimler yapmasına yardımcı olur.',
    },
    {
      type: 'title',
      text: 'Zarlar & Masaüstü Olasılık Terimleri Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Avantaj & Dezavantaj',
          definition: 'Bir oyuncunun iki D20 atıp daha yüksek (Avantaj) veya daha düşük (Dezavantaj) sonucu aldığı bir mekanik. Avantaj, ortalama atışı 10.5\'ten 13.8\'e yükseltir.',
        },
        {
          term: 'Çan Eğrisi (Normal Dağılım)',
          definition: 'Sonuçların merkezi ortalama etrafında kümelendiği çan şeklinde bir olasılık dağılımı. Birden fazla zar toplandığında (3d6 veya 2d10 gibi) oluşur.',
        },
        {
          term: 'Kritik Vuruş',
          definition: 'Genellikle zarda maksimum değerin elde edilmesiyle (D20\'de doğal 20) sağlanan otomatik başarı, sıklıkla ekstra hasar veya özel efektleri tetikler.',
        },
        {
          term: 'Kritik Hata',
          definition: 'D20\'de 1 atılarak tetiklenen, otomatik ve genellikle komik veya yıkıcı sonuçları olan başarısızlık.',
        },
        {
          term: 'Beklenen Değer',
          definition: 'Atışlarınızın uzun vadeli ortalama sonucu. Tek bir D6 için beklenen değer 3.5; tek bir D20 için ise 10.5\'tir.',
        },
        {
          term: 'Yüzdelik Zarlar',
          definition: '1 ile 100 arasında bir sayı elde etmek için birlikte atılan bir çift D10 zarı (biri onlar basamağını, diğeri birler basamağını temsil eder).',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Olasılık simülatörü nasıl çalışır?',
      answer: 'Matematiksel kombinasyonları kullanarak seçilen zar kombinasyonu ve değiştirici için tam olasılık dağılımını hesaplar, böylece hedef değerlerin üzerinde veya altında atma şansınızı görmenizi sağlar.',
    },
    {
      question: 'Hangi zarlar destekleniyor?',
      answer: 'Masaüstü RPG\'lerde ve kutu oyunlarında yaygın olarak kullanılan D4, D6, D8, D10, D12, D20 ve D100 dahil olmak üzere tüm çok yüzlü zarlar desteklenir.',
    },
    {
      question: 'Değiştiriciler nedir ve nasıl çalışır?',
      answer: 'Değiştiriciler, karakter becerilerini, bonusları veya cezaları temsil etmek için toplam zar toplamınıza eklediğiniz veya çıkardığınız sabit değerlerdir (+1, -2 vb.).',
    },
    {
      question: 'Avantaj veya Dezavantajlı zar atmak ne anlama gelir?',
      answer: 'Avantajlı zar atmak, iki D20 zarı atıp daha yüksek olan sonucu seçmek anlamına gelir. Dezavantajlı zar atmak ise iki D20 zarı atıp daha düşük olan sonucu seçmektir. Bu, masaüstü RPG\'lerde yaygın bir mekaniktir.',
    },
    {
      question: 'Kritik vuruşlar ve kritik hatalar nelerdir?',
      answer: 'Kritik vuruş, bir zarın maksimum değerine ulaştığında (D20\'de doğal 20 gibi) gerçekleşen ve genellikle otomatik başarı veya iki kat hasar veren olaydır. Kritik hata ise 1 atıldığında gerçekleşir ve otomatik, genellikle talihsiz bir başarısızlıkla sonuçlanır.',
    },
    {
      question: 'Simülatör zar atma olasılıklarını nasıl hesaplar?',
      answer: 'Simülatör, seçtiğiniz zar havuzu ve değiştiricinin olası her sonucunu matematiksel olarak analiz eder. Ardından her bir toplam sonucu elde etme olasılığınızı yüzde olarak sunar.',
    },
    {
      question: 'Neden 3d6 atmak tek bir D20 atmaktan daha tutarlıdır?',
      answer: 'Tek bir D20 atmak her sayı için eşit %5 şans verir. 3d6 atmak, sonuçların 10.5 ortalaması etrafında kümelendiği bir çan eğrisi oluşturarak aşırı yüksek veya düşük sonuçların nadir olmasını sağlar.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Zar Ekle',
      text: 'Aktif zar havuzunuza eklemek için zar butonlarına tıklayın.',
    },
    {
      name: 'Değiştirici Ekle',
      text: 'Toplamınıza eklemek için pozitif veya negatif bir değiştirici değeri girin.',
    },
    {
      name: 'At ve İstatistikleri Gör',
      text: 'Görsel sonuçları, geçmişi ve olasılık analizini görmek için Zarları At butonuna tıklayın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Zar Atma & Olasılık Simülatörü',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Olasılık simülatörü nasıl çalışır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Matematiksel kombinasyonları kullanarak seçilen zar kombinasyonu ve değiştirici için tam olasılık dağılımını hesaplar, böylece hedef değerlerin üzerinde veya altında atma şansınızı görmenizi sağlar.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hangi zarlar destekleniyor?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Masaüstü RPG\'lerde ve kutu oyunlarında yaygın olarak kullanılan D4, D6, D8, D10, D12, D20 ve D100 dahil olmak üzere tüm çok yüzlü zarlar desteklenir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Değiştiriciler nedir ve nasıl çalışır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Değiştiriciler, karakter becerilerini, bonusları veya cezaları temsil etmek için toplam zar toplamınıza eklediğiniz veya çıkardığınız sabit değerlerdir (+1, -2 vb.).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Avantaj veya Dezavantajlı zar atmak ne anlama gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Avantajlı zar atmak, iki D20 zarı atıp daha yüksek olan sonucu seçmek anlamına gelir. Dezavantajlı zar atmak ise iki D20 zarı atıp daha düşük olan sonucu seçmektir. Bu, masaüstü RPG\'lerde yaygın bir mekaniktir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kritik vuruşlar ve kritik hatalar nelerdir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kritik vuruş, bir zarın maksimum değerine ulaştığında (D20\'de doğal 20 gibi) gerçekleşen ve genellikle otomatik başarı veya iki kat hasar veren olaydır. Kritik hata ise 1 atıldığında gerçekleşir ve otomatik, genellikle talihsiz bir başarısızlıkla sonuçlanır.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Simülatör zar atma olasılıklarını nasıl hesaplar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Simülatör, seçtiğiniz zar havuzu ve değiştiricinin olası her sonucunu matematiksel olarak analiz eder. Ardından her bir toplam sonucu elde etme olasılığınızı yüzde olarak sunar.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Neden 3d6 atmak tek bir D20 atmaktan daha tutarlıdır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tek bir D20 atmak her sayı için eşit %5 şans verir. 3d6 atmak, sonuçların 10.5 ortalaması etrafında kümelendiği bir çan eğrisi oluşturarak aşırı yüksek veya düşük sonuçların nadir olmasını sağlar.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Zar Ekle',
          'text': 'Aktif zar havuzunuza eklemek için zar butonlarına tıklayın.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Değiştirici Ekle',
          'text': 'Toplamınıza eklemek için pozitif veya negatif bir değiştirici değeri girin.'
        },
        {
          '@type': 'HowToStep',
          'name': 'At ve İstatistikleri Gör',
          'text': 'Görsel sonuçları, geçmişi ve olasılık analizini görmek için Zarları At butonuna tıklayın.'
        }
      ]
    }
  ],
};
