import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "komplo-tahtasi-olusturucu",
  title: "Komplo Tahtası Oluşturucu: Online Dedektif RPG İpucu & İlişki Haritası",
  description: "Etkileşimli komplo tahtaları ve RPG araştırma haritaları tasarlayın. Şüphelileri, ipuçlarını ve konumları renkli iplerle bağlayın.",
  ui: {
  "title": "Komplo Tahtası Oluşturucu",
  "addCard": "Kart Ekle",
  "searchPlaceholder": "Kartları isim veya ipucuna göre ara",
  "filterAll": "Tüm Kategoriler",
  "filterCharacter": "Karakterler",
  "filterClue": "İpuçları",
  "filterLocation": "Konumlar",
  "filterItem": "Eşyalar",
  "cardName": "Kart Adı",
  "cardCategory": "Kategori",
  "cardDescription": "Açıklama",
  "cardNotes": "Özel Notlar",
  "cardTags": "Virgülle ayrılmış etiketler",
  "cardColor": "Kart Vurgu Rengi",
  "save": "Değişiklikleri Kaydet",
  "delete": "Sil",
  "cancel": "İptal",
  "clearBoard": "Tahtayı Temizle",
  "connectionsTitle": "İlişki Haritası",
  "addConnection": "Bağlantı Ekle",
  "connectionLabel": "İlişki Etiketi",
  "connectionColor": "Çizgi Rengi",
  "sourceCard": "Başlangıç Kartı",
  "targetCard": "Hedef Kart",
  "close": "Kapat",
  "character": "Karakter",
  "clue": "İpucu",
  "location": "Konum",
  "item": "Eşya",
  "custom": "Özel",
  "immersive": "Tam Ekran"
},
  seo: [
    { type: 'title', text: "Online Komplo Tahtası Oluşturucu: Dedektif RPG İpuçlarını ve İlişkileri Düzenleyin", level: 2 },
    { type: 'paragraph', html: "Karmaşık yalanlar ağını çözmek, şüphelilerin alibilerini takip etmek ve olay yeri delillerini birleştirmek her türlü dedektif RPG grubunu yorabilir. İster Call of Cthulhu kampanyası, ister Cyberpunk cinayet gizemi, ister D&D dedektiflik görevi yürütüyor veya bir gerilim romanı yazıyor olun - çevrimiçi komplo tahtası oluşturucumuz en iyi araçtır. Sınırsız dijital mantar panoda ipuçlarını, NPC'leri ve fiziksel kanıtları sürükleyin, bırakın, kategorize edin ve bağlayın. Şüphelilerin olay yerleriyle, alibilerle ve gizli nedenlerle nasıl bağlantılı olduğunu anında görmek için renk kodlu ilişki iplerini kullanın." },
    {
      type: 'stats',
      items: [
        { value: "Sınırsız", label: "Düğüm Tahtası" },
        { value: "4", label: "Kategoriler" },
        { value: "Sürükle-Bırak", label: "Arayüz" }
      ],
      columns: 3
    },
    { type: 'title', text: "Dedektif RPG Araştırma Tahtanızı Yapılandırmak İçin İpuçları", level: 2 },
    { type: 'tip', title: "Üç İpucu Kuralı", html: "Oyuncuların ulaşmasını istediğiniz her sonuç veya çıkarım için araştırma tahtasına en az üç farklı ipucu ekleyin. Alternatif akıl yürütme yollarını göstermek için bunları özel renkli iplerle bağlayın. Şüpheliler için Karakter kartlarını, olay yerleri için Konum kartlarını ve fiziksel kanıtlar veya belgeler için Eşya kartlarını kullanın. Notları güncel tutun." },
    { type: 'title', text: "Dijital Komplo Tahtaları ve Fiziksel Mantar Panolar", level: 2 },
    {
      type: 'proscons',
      title: "Dijital Komplo Tahtaları ve Fiziksel Mantar Panolar",
      items: [
        { pro: "Alan sınırı olmadan gerektiği kadar ipucu, şüpheli ve karakter ilişkisi eklemek için sınırsız tahta boyutu.", con: "Masa başı oyun seansı sırasında bir ekran, tablet veya dijital cihaz gerektirir." },
        { pro: "Oyun seansları sırasında belirli tanıkları veya ipuçlarını anında bulmak için hızlı arama ve kategori filtreleri.", con: "Gerçek bir duvarda gerçek kırmızı ipliğin ve raptiyelerin fiziksel dokunma hissi eksiktir." },
        { pro: "Haritaları oyun geceleri arasında fiziksel yer kaplamadan dijital olarak kaydedin, yükleyin ve paylaşın.", con: "Tahta durumunu kaydetmek için internet erişimi veya tarayıcının yerel depolama alanı gerekir." }
      ]
    },
    { type: 'title', text: "Gizem Haritanız İçin Kart Kategorilerini Seçme", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Karakter Düğümleri",
          description: "NPC'leri, şüphelileri, tanıkları veya örgütleri temsil eder. İlişkileri renkli çizgilerle vurgulayın.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Şüpheli alibilerini ve güdülerini takip edin",
            "Aile ve gizli örgüt bağlarını ilişkilendirin",
            "Tanık ifadelerinin ayrıntılarını kaydedin"
          ]
        },
        {
          title: "İpucu Düğümleri",
          description: "Oyuncuların kampanya sırasında keşfettiği fiziksel kanıtları, otopsi raporlarını, alibileri veya söylentileri temsil eder.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Otopsi raporları ve adli tıp analizleri",
            "Olay yerlerinde bulunan fiziksel nesneler",
            "Kulaktan dolma söylentiler ve sızdırılmış sırlar"
          ]
        },
        {
          title: "Konum Düğümleri",
          description: "Olay yerleri, şüpheli evleri, gizli sığınaklar veya şehirler.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Olay yeri fotoğrafları ve krokiler",
            "Önemli NPC'lerin ikametgahları",
            "Gizli sığınaklar ve boyut kapıları"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Komplo Haritalama Terimleri Sözlüğü", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Araştırma Düğümü", definition: "Tuval üzerindeki kişi, konum, ipucu veya eşyayı temsil eden herhangi bir kart." },
        { term: "İlişki İpi", definition: "İki kartı birbirine bağlayan ve ilişkilerini gösteren renkli bir çizgi (örneğin: Şüpheli, Alibi, Sahibi)." },
        { term: "Sarmal Mod", definition: "Mobil veya tabletlerde tuval çalışma alanını en üst düzeye çıkarmak için kontrol panellerini gizleyen tam ekran düzeni." },
        { term: "Vurgu Yolu", definition: "Seçilen bir kartın yalnızca bağlı düğümlerini ve çizgilerini gösteren, tahtanın geri kalanını karartan görsel bir efekt." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Mobil Cihazlar İçin Performans İpucu",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Eski tabletlerde düğümleri sürüklemek yavaş geliyorsa, menüleri gizlemek için tam ekran modunu açın. Minimum çabayla tahtayı düzenli tutmak için ızgaraya hizalamanın etkin olduğundan (kartlar her 15 pikselde bir hizalanır) emin olun."
    }
  ],
  faq: [
    { question: "Bağlantı çizgilerini nasıl eklerim?", answer: "Kontrol panelinde Bağlantı Ekle'ye tıklayın veya bir karttaki bağlantı simgesine tıklayıp hedef kartı seçin." },
    { question: "Mobilde kartları sürükleyebilir miyim?", answer: "Evet, tahta akıllı telefonlarda ve tabletlerde kartları sorunsuz bir şekilde sürükleyip taşımak için dokunmatik hareketleri destekler." },
    { question: "Özel kart renkleri kullanabilir miyim?", answer: "Evet. Bir karta çift tıklayın, Kategori altında Özel seçeneğini belirleyin ve bir vurgu rengi seçin." },
    { question: "Tahta çalışmamı kaydediyor mu?", answer: "Evet. İlerlemeniz, mevcut tahta adı altında tarayıcınızın yerel depolama alanına otomatik olarak kaydedilir." },
    { question: "Tahtayı nasıl yakınlaştırıp uzaklaştırırım ve hareket ettiririm?", answer: "Yakınlaştırmak ve uzaklaştırmak için sıkıştırma hareketlerini veya fare tekerleğini kullanın. Tuval üzerinde gezinmek için arka planı sürükleyin." }
  ],
  bibliography,
  howTo: [
    { name: "Araştırma Kartları Ekle", text: "NPC'leri, ipuçlarını, olay yerlerini veya eşyaları temsil eden kartlar oluşturun." },
    { name: "İlişkileri Bağla", text: "İpuçlarının nasıl ilişkili olduğunu göstermek için kartlar arasında bağlantı çizgileri oluşturun." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Komplo Tahtası Oluşturucu: Online Dedektif RPG İpucu & İlişki Haritası",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Bağlantı çizgilerini nasıl eklerim?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Kontrol panelinde Bağlantı Ekle'ye tıklayın veya bir karttaki bağlantı simgesine tıklayıp hedef kartı seçin."
          }
        },
        {
          '@type': 'Question',
          'name': "Mobilde kartları sürükleyebilir miyim?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Evet, tahta akıllı telefonlarda ve tabletlerde kartları sorunsuz bir şekilde sürükleyip taşımak için dokunmatik hareketleri destekler."
          }
        },
        {
          '@type': 'Question',
          'name': "Özel kart renkleri kullanabilir miyim?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Evet. Bir karta çift tıklayın, Kategori altında Özel seçeneğini belirleyin ve bir vurgu rengi seçin."
          }
        },
        {
          '@type': 'Question',
          'name': "Tahta çalışmamı kaydediyor mu?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Evet. İlerlemeniz, mevcut tahta adı altında tarayıcınızın yerel depolama alanına otomatik olarak kaydedilir."
          }
        },
        {
          '@type': 'Question',
          'name': "Tahtayı nasıl yakınlaştırıp uzaklaştırırım ve hareket ettiririm?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Yakınlaştırmak ve uzaklaştırmak için sıkıştırma hareketlerini veya fare tekerleğini kullanın. Tuval üzerinde gezinmek için arka planı sürükleyin."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Komplo Tahtası Oluşturucu Nasıl Kullanılır",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Araştırma Kartları Ekle",
          'text': "NPC'leri, ipuçlarını, olay yerlerini veya eşyaları temsil eden kartlar oluşturun."
        },
        {
          '@type': 'HowToStep',
          'name': "İlişkileri Bağla",
          'text': "İpuçlarının nasıl ilişkili olduğunu göstermek için kartlar arasında bağlantı çizgileri oluşturun."
        }
      ]
    }
  ]
};
