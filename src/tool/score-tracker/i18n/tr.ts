import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Puan Takipçisi',
  addPlayer: 'Oyuncu Ekle',
  removePlayer: 'Kaldır',
  renamePlayer: 'Yeniden Adlandir',
  startRound: 'Tur 1 i Başlat',
  nextRound: 'Sonraki Tur',
  resetGame: 'Oyunu Sıfırla',
  undoRound: 'Son Turu Geri Al',
  playerLabel: 'Oyuncu',
  scoreLabel: 'Puan',
  roundLabel: 'Tur',
  totalLabel: 'Toplam',
  rankLabel: 'Sira',
  leaderboardTitle: 'Sıralam',
  historyTitle: 'Puan Geçmişi',
  noPlayersHint: 'Puani baslatmak için oyuncu ekleyin',
  playerNamePlaceholder: 'Oyuncu adi',
  confirmLabel: 'Onayla',
  cancelLabel: 'Iptal',
  deleteRoundConfirm: 'Son tur silinsin mi?',
  playerAdded: 'Oyuncu eklendi',
  playerRemoved: 'Oyuncu kaldırildi',
  roundStarted: 'Tur başladı',
  gameReset: 'Oyun sıfırlandi',
  noRoundsYet: 'Henuz kaydedilmis tur yok',
  currentRoundLabel: 'Mevcut Tur',
  scoringTitle: 'Tur Puani',
  resetAllLabel: 'Hepsini Sıfırla',
  confirmResetAll: 'Bu tum oyunculari ve puanlari silecek. Emin misiniz?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'puan-takipcisi',
  title: 'Puan Takipçisi: Cok Oyunculu Skor Tutucu ve Sıralama Yoneticisi',
  description: 'Herhangi bir masa oyunu için puanlari takip edin. Oyuncu ekleyin, tur tur puanlari kaydedin ve otomatik sıralama ile sıralamanin gerçek zamanli olarak güncellenmesini izleyin.',
  ui,
  seo: [
    { type: 'title', text: 'Masa Oyunu Puani Tutma: Puanlarin Hatasiz Nasil Takip Edilir', level: 2 },
    { type: 'paragraph', html: 'Masa oyunlarinda puanı tutmak basit gorunur, taa ki oyunun besinci turunda birinin yanlis saydigini fark edene kadar. Ister Wingspan, Terraforming Mars, Catan, ister zafer puanı oyunu oynayin, doğru puantaj adil bir oyun ile tartisma arasindaki farki oluşturur. Dijital bir puan takipcisi aritmetik hatalari ortadan kaldırir, canli sıralamalari gösterir ve her turun tam bir kaydini tutar, böylece nihai toplamı doğrulayabilirsiniz.' },
    {
      type: 'stats',
      items: [
        { value: 'Sinirsiz', label: 'Desteklenen Oyuncu' },
        { value: 'Gerçek Zamanli', label: 'Sıralama Güncellemeleri' },
        { value: 'Sinirsiz', label: 'Kaydedilen Tur' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Yaygin Puantaj Hatalari ve Bunlardan Kacinma Yollari', level: 2 },
    { type: 'paragraph', html: 'En sik yapilan hata, tur sonu bonuslarini eklemeyi unutmak veya bir sayi sutununu yanlis toplamaktir. Puanlari dijital olarak takip ettiginizde, güncel toplam her giristen sonra otomatik olarak güncellenir. Yani bir sayi yanlis gorundugu anda hatayi yakalayabilir, kimsenin doğru degeri hatırlamadığı oyun sonunda kesfetmek zorunda kalmazsiniz. Tur geçmişi özelliği, onceki herhangi bir turu denetlemenize ve tum oyunu yeniden baslatmadan hatalari duzeltmenize olanak tanir.' },
    {
      type: 'tip',
      title: 'Hizli Puantaj Ipuclari',
      html: 'Her tur biter bitmez, herkes sonuclari henuz hatırlarken puanlari girin. Gizli rolleri olan oyunlarda gerçek isimler yerine renkler veya hizip adlari gibi tanimlayici oyuncu etiketleri kullanin. Cocuklarla oynarken, puantaj surecine dahil olmalari için dugmelere kendilerinin basmasina izin verin.',
    },
    {
      type: 'title',
      text: 'Tur Bazli Puanlama vs Sadece Toplam',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Tur Basina Puan vs Sadece Son Puan',
      items: [
        {
          pro: 'Oyunun her asamasinda kimin onde oldugünu ve momentumin nasil değiştiğini görebilirsiniz.',
          con: 'Sonda bir kez yerine her turdan sonra veri girisi gerektirir.',
        },
        {
          pro: 'Hatalari bulmak kolaydir cunku bireysel tur girilerini hafizanizla karşılaştırabilirsiniz.',
          con: 'Oyun sırasında biraz daha fazla zaman alir.',
        },
        {
          pro: 'Oyuncular kendi tur puanlarını doğrulayabilir, anlasmazliklari azaltir ve guven oluşturur.',
          con: 'Bir kişinin cihazi yonettigi veya oyuncularin sırayla yaptigi durumlarda en iyi sekilde calisir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alisilmadik Puanlama Sistemlerine Sahip Oyunlar',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Zafer Puani Oyunlari',
          description: 'Cogu euro-oyunu, oyun boyunca verilen zafer puanlarını kullanir. Zorluk, birden fazla ZP kaynagini takip etmektir: kaynaklar, basarilar, oyun sonu bonuslari. Dijital bir takipci, puanlari geldikce girmenizi ve güncel toplamı gormenizi saglar.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Birden cok puan kategorisini takip etme',
            'Oyun sonu bonus hesaplamalari',
            'Aninda esitlik cozumu',
          ],
        },
        {
          title: 'Eksi Puanli Oyunlar',
          description: 'Bazi oyunlar belirli eylemler için oyunculari eksi puanla cezalandirir. Dijital bir puantaj, eksi degerleri dogal bir sekilde ele alir ve cezayi hemen gorunur kilmak için onlari kirmizi renklendirir. Bu, özellikle el alma oyunlarinda veya ceza mekanigi olan cikarim oyunlarinda kullanışlıdir.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Otomatik eksi deger yonetimi',
            'Gorsel ceza göstergeleri',
            'Dogru birikimli toplamlar',
          ],
        },
        {
          title: 'Kampanya Oyunlari',
          description: 'Legacy ve kampanya oyunlari, puanlari birden cok oturuma tasir. Bir takipci olmadan, oyun geceleri arasinda kagit notlar tutmaniz gerekir. Dijital bir arac, kampanya puanlarınızi duzenli tutar ve kararlarinizin genel sıralamayi nasil etkiledigini gozden gecirmenize olanak tanir.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Kampanya takibinin kaliciligi',
            'Oturumlar arasi karşılaştırma',
            'Oturum bazli detaylandirma',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Puantaj Sozlugu',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Zafer Puani (ZP)',
          definition: 'Modern masa oyunlarinin cogünda standart puanlama birimi. Oyuncular eylemlerle ZP kazanir ve oyun sonunda en cok ZP ye sahip olan kazanir.',
        },
        {
          term: 'Tur Bazli Puanlama',
          definition: 'Puanlari sadece oyun sonunda değil, her turun sonunda kaydetme. Bu, ayrintili bir geçmiş oluşturur ve hata kontrolunu kolaylastirir.',
        },
        {
          term: 'Sıralama',
          definition: 'Toplam puana göre her oyuncunun konumunu gösteren canli bir sıralama. Yeni puanlar girildikce sıralama otomatik olarak yeniden duzenlenir.',
        },
        {
          term: 'Eksi Puanlama',
          definition: 'Oyuncularin cezalar veya basarisiz eylemler nedeniyle puan kaybederek eksi toplamlara ulaştığı bir puanlama sistemi. Dijital bir takipci, manuel cikarma hatalari olmadan bunu halleder.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tartismali Puanlarla Nasil Basa Cikilir',
      icon: 'mdi:information-outline',
      badge: 'OYUN IPUCU',
      html: 'Bir oyuncu puanı sorguladiginda, hemen değiştirmeyin. Once ne girildigini onaylamak için tur geçmişini kontrol edin. Giris yanlissa, duzeltmek için +/- düğmelerini kullanin ve toplam otomatik olarak güncellenir. Tur girisi doğru ancak oyuncu ayni fikirde değilse, geçmiş herkesin birlikte inceleyebilecegi objektif bir kayit saglar.',
    },
  ],
  faq: [
    {
      question: 'Kac oyuncuyu takip edebilirim?',
      answer: 'Herhangi bir sinir yok. Oyununuzun destekledigi kadar oyuncu ekleyin ve oturum sırasında dilediginiz zaman yeniden adlandirin.',
    },
    {
      question: 'Bir hatayi geri alabilir miyim?',
      answer: 'Evet. Son Turu Geri Al düğmesini kullanarak en son puan turunu kaldırin, bu tum toplamları ve sıralamalari otomatik olarak yeniden hesaplayacaktir.',
    },
    {
      question: 'Puan takipcisi verilerimi kaydediyor mu?',
      answer: 'Puan takipcisi tamamen tarayiçinizda calisir. Veriler mevcut oturum boyunca kalicidir. Sayfayi yenilemek tum puanlari sıfırlayacaktir.',
    },
    {
      question: 'Sıralama nasil calisir?',
      answer: 'Sıralama, oyunculari toplam puana göre azalan sırada sıralar. Her turda puan girdikce veya değiştirdikçe sıralamalar otomatik olarak güncellenir.',
    },
    {
      question: 'Eksi puanlari takip edebilir miyim?',
      answer: 'Evet. +/- düğmeleri hem pozitif hem de negatif ayarlamalara izin verir, bu da onu ceza puanı veya indirim mekanigine sahip oyunlar için uygün hale getirir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Oyuncu Ekleme',
      text: 'Oyuncu Ekle girisine oyuncu adlarini girin. Oyun sırasında dilediginiz zaman oyuncu ekleyebilir veya kaldırabilirsiniz.',
    },
    {
      name: 'Puanlamaya Baslama',
      text: 'Yeni bir puan turu baslatmak için Turu Başlat a tiklayin. Bu turdaki her oyuncunun puanıni ayarlamak için +/- düğmelerini kullanin.',
    },
    {
      name: 'Sıralamalari Gorme',
      text: 'Sıralama otomatik olarak güncellenir. Onceki tur girilerini incelemek için Puan Geçmişi sekmesine goz atin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Puan Takipçisi & Skor Tutucu',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Kac oyuncuyu takip edebilirim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Herhangi bir sinir yok. Oyununuzun destekledigi kadar oyuncu ekleyin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir hatayi geri alabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. Son Turu Geri Al düğmesini kullanarak en son puan turunu kaldırin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puan takipcisi verilerimi kaydediyor mu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Puan takipcisi tarayiçinizda calisir. Veriler mevcut oturum boyunca kalicidir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sıralama nasil calisir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sıralama, oyunculari toplam puana göre azalan sırada sıralar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Eksi puanlari takip edebilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. +/- düğmeleri hem pozitif hem de negatif ayarlamalara izin verir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Puan Takipçisi Nasil Kullanilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Oyuncu Ekleme',
          'text': 'Oyuncu Ekle girisine oyuncu adlarini girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Puanlamaya Baslama',
          'text': 'Turu Başlat a tiklayin ve +/- düğmelerini kullanin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sıralamalari Gorme',
          'text': 'Sıralama otomatik olarak güncellenir.',
        },
      ],
    },
  ],
};
