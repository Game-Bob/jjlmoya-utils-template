import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'İnisiyatif Takipçisi',
  addCombatant: 'Savaşçı Ekle',
  removeCombatant: 'Kaldır',
  playerLabel: 'Oyuncu',
  npcLabel: 'NPC',
  initiativeLabel: 'İnisiyatif',
  modifierLabel: 'Değiştirici',
  namePlaceholder: 'Karakter adı',
  initiativePlaceholder: 'İnisiyatif',
  modifierPlaceholder: 'Değiştirici',
  addButton: 'Ekle',
  startCombat: 'Savaşı Başlat',
  endCombat: 'Savaşı Bitir',
  nextTurn: 'Sonraki Tur',
  prevTurn: 'Önceki Tur',
  roundLabel: 'Raund',
  turnLabel: 'Tur',
  noCombatants: 'Henüz savaşçı yok. Başlamak için karakter ekleyin.',
  statusInput: 'Durum',
  combatStarted: 'Savaş Başladı!',
  combatEnded: 'Savaş Bitti',
  yourTurn: 'Tur',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'inisiyatif-takipcisi',
  title: 'RPG İnisiyatif Takipçisi: Savaş Tur Sırası ve İnisiyatif Yöneticisi',
  description: 'Herhangi bir masaüstü RPG için inisiyatif sırasını takip edin. Savaşçı ekleyin, inisiyatif atışı yapın, durum efektlerini yönetin ve savaşta turlar arasında gezinin.',
  ui,
  seo: [
    { type: 'title', text: 'D&D ve Diğer Masaüstü RPGlerde İnisiyatif Nasıl Çalışır', level: 2 },
    { type: 'paragraph', html: 'İnisiyatif, savaştaki eylem sırasını belirler. Her katılımcı, dövüşün başında bir Çeviklik kontrolü yapar ve tur sırası en yüksekten en düşüğe doğru gider. Dijital bir inisiyatif takipçisi sıralamayı otomatikleştirir, aktif savaşçıyı vurgular, devam eden durum efektlerini izler ve tüm masayı sıradaki turun kimde olduğu konusunda bilgilendirir. Bu, özellikle birden çok düşman türü ve oyuncu karakteriyle karmaşık karşılaşmalar yöneten Zindan Efendileri için kullanışlıdır.' },
    {
      type: 'stats',
      items: [
        { value: 'Sınırsız', label: 'Desteklenen Savaşçı' },
        { value: 'Otomatik Sıralama', label: 'İnisiyatif Atışına Göre' },
        { value: 'Gerçek Zamanlı', label: 'Tur Takibi' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'D&D 5e için Standart İnisiyatif Kuralları', level: 2 },
    { type: 'paragraph', html: 'D&D 5. Baskıda, her katılımcı savaşın başında bir Çeviklik kontrolü yapar. Oyuncular bireysel olarak atar. Zindan Efendisi, aynı türden canavar grupları için bir kez atar. Tur sırası en yüksekten en düşüğe doğru gider, ardından bir sonraki raund için başa döner. Beraberlikler Çeviklik puanına göre veya ZE kararıyla çözülür. Dijital bir takipçi tüm bunları otomatik olarak halleder ve tam tur sırasını bir bakışta gösterir.' },
    {
      type: 'table',
      headers: ['Özellik', 'Manuel Takip', 'Dijital Takipçi'],
      rows: [
        ['Sıralama', 'İnisiyatif değiştiğinde listeyi yeniden yazmak', 'Anında otomatik yeniden sıralama'],
        ['Mevcut Tur', 'Sözlü olarak veya bir jetonla takip edilmeli', 'Yeşil parıltıyla vurgulanır'],
        ['Durum Efektleri', 'Miniye yakın ayrı not defteri veya zar', 'Her savaşçıda aç/kapa tıklaması'],
        ['Raund Sayma', 'Kafanızda veya karalama kağıdında saymak', 'Otomatik olarak gösterilir'],
        ['Savaş Ortasında Ekleme', 'Sırayı silip yeniden yazmak', 'Doğru konuma eklenir'],
      ],
    },
    {
      type: 'tip',
      title: 'Masada İnisiyatif Yönetmek İçin İpuçları',
      html: 'Savaş sırasında zaman kazanmak için tüm canavarların inisiyatifini seans başlamadan önce atın. Sersemletme veya Zehirleme gibi yaygın durum efektlerini uygulanır uygulanmaz savaşçıya ekleyin. Bu, etkilenen karakterin turu geldiğinde bir durumu unutmayı önler. Önceki Tur düğmesini kullanarak raundun başlarında bir kararı kontrol etmeniz gerekiyorsa ne olduğunu gözden geçirin.',
    },
    {
      type: 'title',
      text: 'Savaşta Sık Kullanılan Durum Efektleri',
      level: 3,
    },
    { type: 'paragraph', html: 'Savaş sırasında durumları takip etmek en sık gözden kaçan görevlerden biridir. Bir durum efekti, bir karakterin etkinliğini tamamen değiştirebilir ve kaldırmayı unutmak bir karşılaşmanın dengesini bozabilir. İnisiyatif takipçisi, durumları tek bir tıklamayla uygulayıp kaldırmanıza olanak tanır, böylece savaşçı adının yanında görünür kalırlar.' },
    {
      type: 'proscons',
      title: 'Durum Efektlerini Dijital vs Manuel Yönetme',
      items: [
        {
          pro: 'Durumlar karakter adının hemen yanında görünür, böylece kimse aktif bir efekti unutmaz.',
          con: 'Durumları uygulandıkça ve kaldırıldıkça açıp kapatmayı hatırlamak gerekir.',
        },
        {
          pro: 'Aynı savaşçıda birden fazla durum aktif olabilir ve hepsi birlikte gösterilir.',
          con: 'Takipçi, kuralların efektlerini otomatik olarak uygulamaz, ZE bunları yine de uygulamalıdır.',
        },
        {
          pro: 'Durumlar, karakter kağıdına yazmak için duraklamadan savaş ortasında eklenebilir.',
          con: 'Varsayılan olarak yalnızca önceden tanımlanmış durum etiketleri mevcuttur.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alternatif İnisiyatif Sistemleri',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standart İnisiyatif',
          description: 'Her savaşçı başlangıçta bir kez atar. Aynı sıra her raund tekrarlanır. Basit ve öngörülebilir, ancak ilk atıştan sonra sıra sabitlenir. Çoğu grup ve karşılaşma boyutu için iyi çalışır.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Öğrenmesi ve öğretmesi kolay', 'Her raund sabit tur sırası', 'Her grup boyutu için çalışır'],
        },
        {
          title: 'Taraf İnisiyatifi',
          description: 'Tüm oyuncu karakterleri birlikte hareket eder, ardından tüm düşmanlar birlikte hareket eder. Eski baskılarda ve OSR oyunlarında yaygındır. Bireysel takibi azaltarak savaşı hızlandırır ancak taktiksel nüansı azaltır.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['En hızlı savaş çözümü', 'Parti koordinasyonunu teşvik eder', 'Daha az bireysel tur çeşitliliği'],
        },
        {
          title: 'Hız Faktörü Varyantı',
          description: 'Her raund katılımcılar önce eylemlerini bildirir, ardından seçtikleri eylemle değiştirilmiş inisiyatifi atar. Opsiyonel kural setlerinde kullanılır. Öngörülemeyen tur sırası oluşturur ancak karar vermeye derinlik katar.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Her raund farklı sıra', 'Eylem seçimi zamanlamayı etkiler', 'Tur başına daha fazla taktiksel karar'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Savaş Takipçisi Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'İnisiyatif',
          definition: 'Tur sırasını belirlemek için savaş başında atılan bir Çeviklik kontrolü. Her katılımcı atar ve azalan sırayla hareket eder.',
        },
        {
          term: 'Raund',
          definition: 'Her savaşçının bir tur attığı tam döngü. Son savaşçı hareket ettikten sonra raund biter ve sıranın başından yeni bir raund başlar.',
        },
        {
          term: 'Durum Efekti',
          definition: 'Bir karakterin yeteneklerini değiştiren geçici bir durum. Örnekler arasında Sersemletme (hareket edemez), Zehirleme (atışlarda dezavantaj) ve Kör Etme (saldırılarda dezavantaj) bulunur.',
        },
        {
          term: 'NPC',
          definition: 'Zindan Efendisi tarafından kontrol edilen Oyuncu Olmayan Karakter. İnisiyatif takibinde NPCler genellikle karşılaşmadaki düşmanlar veya tarafsız yaratıklardır.',
        },
        {
          term: 'PC',
          definition: 'Masadaki oyunculardan biri tarafından kontrol edilen Oyuncu Karakteri. PCler, ZEnin dost hedefleri belirlemesine yardımcı olmak için takipçide NPClerden ayrılır.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Her Raund İnisiyatif Ne Zaman Yeniden Atılmalı',
      icon: 'mdi:information-outline',
      badge: 'ZE İPUCU',
      html: 'Bazı ZEler öngörülemezlik için her raund inisiyatifi yeniden atmayı tercih ederken, çoğu basitlik için aynı sırayı korur. Yeni bir savaşçı savaşın ortasında katılırsa, inisiyatiflerini atın ve onları mevcut konuma ekleyin. Takipçi bunu otomatik olarak halleder. Patron karşılaşmaları için, kötü adama belirli bir sayıda sabit inisiyatif vermeyi düşünün, böylece dövüş daha yapılandırılmış hissettirir.',
    },
  ],
  faq: [
    {
      question: 'İnisiyatif sırasına nasıl savaşçı eklerim?',
      answer: 'Karakter adını, inisiyatif atışını ve inisiyatif değiştiricisini girin, ardından Ekleye tıklayın. Parti üyelerini listedeki düşmanlardan görsel olarak ayırt etmek için Oyuncu ve NPC türleri arasında geçiş yapın.',
    },
    {
      question: 'Savaşı Başlata tıkladığımda ne olur?',
      answer: 'Tüm savaşçılar inisiyatife göre en yüksekten en düşüğe sıralanır. Tur sırası en baştan başlar, raund sayacı 1den başlar ve aktif savaşçı yeşil bir parıltıyla vurgulanır.',
    },
    {
      question: 'Savaş sırasında durum efektlerini nasıl takip ederim?',
      answer: 'Seçili savaşçı için açmak veya kapatmak üzere bir durum etiketine (Sersemletme, Zehirleme, Kör Etme vb.) tıklayın. Aktif durumlar karakter adının yanında görünür. Bu, o savaşçının turu geldiğinde herkese devam eden efektleri hatırlatır.',
    },
    {
      question: 'Sayfayı yenilersem savaş verilerim kalıcı olur mu?',
      answer: 'Evet. İnisiyatif takipçisi savaş durumunu tarayıcınızın yerel depolamasına kaydeder. Savaşçılarınız, tur sıranız ve durum efektleriniz sayfa yenilemesinden sonra kalır. Savaşı Bitire tıkladığınızda veriler temizlenir.',
    },
    {
      question: 'Önceki tura geri dönebilir miyim?',
      answer: 'Evet. Önceki Tur düğmesi, tur sırasında geriye doğru gezinmenizi sağlar. Bu, raundda daha önce ne olduğunu gözden geçirmek veya bir hatayı düzeltmek için kullanışlıdır.',
    },
    {
      question: 'Savaş sırasında savaşçı ekleyebilir veya kaldırabilir miyim?',
      answer: 'Evet. Yeni savaşçılar herhangi bir zamanda eklenebilir ve inisiyatif atışlarına göre otomatik olarak doğru konuma yerleştirilir. Mevcut savaşçılar karşılaşmadan ayrılırlarsa kaldırılabilir.',
    },
    {
      question: 'Bu herhangi bir RPG sistemiyle çalışır mı?',
      answer: 'Evet. Takipçi, inisiyatif tabanlı tur sırası kullanan herhangi bir masaüstü RPG ile çalışır. Sisteminizin kullandığı inisiyatif değerlerini girin, ister D&D için d20 artı Çv atışı olsun, ister diğer oyunlar için farklı bir mekanik olsun.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Savaştan Önce Savaşçı Ekleyin',
      text: 'Her karakterin adını, inisiyatif atışını ve değiştiricisini girin. Onları Oyuncu veya NPC olarak işaretleyin. Karşılaşmanızın ihtiyaç duyduğu kadar savaşçı ekleyin.',
    },
    {
      name: 'Sırayı Kilitlemek İçin Savaşı Başlatın',
      text: 'Herkesi inisiyatife göre sıralamak ve turları takip etmeye başlamak için Savaşı Başlata tıklayın. Sıradaki ilk savaşçı vurgulanır.',
    },
    {
      name: 'Turlar Arasında Gezinin ve Durumları Takip Edin',
      text: 'Sırada gezinmek için Sonraki Tur ve Önceki Turu kullanın. Dövüş sırasında durumları takip etmek için durum etiketlerine tıklayarak durum efektlerini uygulayın.',
    },
    {
      name: 'İşiniz Bittiğinde Savaşı Bitirin',
      text: 'Tur takibini durdurmak için Savaşı Bitire tıklayın. Bu, aktif durumu temizler ve raund sayacını sıfırlarken savaşçı listesini bir sonraki karşılaşma için korur.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'RPG İnisiyatif Takipçisi',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Savaşçıları nasıl eklerim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Karakter adını, inisiyatif atışını ve inisiyatif değiştiricisini girin, ardından Ekleye tıklayın. Oyuncular ve NPCler, listede ayırt edilmelerine yardımcı olmak için değiştirilebilir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Savaşı Başlata tıkladığımda ne olur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tüm savaşçılar inisiyatife göre sıralanır (en yüksek ilk). Tur sırası ilk savaşçıyla başlar ve raund sayacı 1den başlar.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'İnisiyatif Takipçisi Nasıl Kullanılır',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Savaşçı Ekleme',
          'text': 'Karakter detaylarını, ad, inisiyatif atışı ve değiştirici dahil olmak üzere girin. Eklemeden önce Oyuncu ve NPC türleri arasında geçiş yapın.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Savaşı Başlatma',
          'text': 'Tüm savaşçıları inisiyatife göre sıralamak ve tur sırası takibini başlatmak için Savaşı Başlata tıklayın.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Turları Yönetme',
          'text': 'Tur sırasında gezinmek için Sonraki Tur ve Önceki Turu kullanın. Aktif savaşçı yeşil bir parıltıyla vurgulanır.',
        },
      ],
    },
  ],
};
