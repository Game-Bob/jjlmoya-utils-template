import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Masaüstü Oyun Zamanlayıcı',
  setupTitle: 'Oyun Kurulumu',
  playerNamePlaceholder: 'Oyuncu adı',
  addPlayer: 'Oyuncu Ekle',
  removePlayer: 'Kaldır',
  startGame: 'Oyunu Başlat',
  pauseGame: 'Duraklat',
  resumeGame: 'Devam Et',
  resetGame: 'Sıfırla',
  nextTurn: 'Sırayı Bitir',
  addTime: '+30sn',
  removeTime: '-30sn',
  playerLabel: 'Oyuncu',
  minutesLabel: 'dk',
  secondsLabel: 'sn',
  expiredLabel: 'SÜRE BİTTİ',
  overtimeLabel: 'Uzatma Süresi',
  turnIndicator: 'Senin Sıran',
  warningLowTime: 'Düşük Süre',
  pausedOverlay: 'Oyun Duraklatıldı',
  roundLabel: 'Tur',
  settingsTitle: 'Ayarlar',
  baseTimeLabel: 'Ana Süre',
  incrementLabel: 'Artış/Gecikme',
  warningTimeLabel: 'Uyarı Eşiği',
  confirmLabel: 'Onayla',
  cancelLabel: 'İptal',
  noPlayersHint: 'Başlamak için en az 2 oyuncu ekleyin',
  addPlayerHint: 'Oyuncu adı girin',
  timeUpLabel: 'Süre doldu!',
  presetsTitle: 'Hazır Ayarlar',
  timeControlTitle: 'Süre Kontrolü',
  modeLabel: 'Mod',
  modeNormal: 'Normal Geri Sayım',
  modeFischer: 'Fischer (Artış)',
  modeBronstein: 'Bronstein (Gecikme)',
  modeHourglass: 'Kum Saati',
  modeTurn: 'Sıra Sıfırlama',
  audioTitle: 'Sesli Uyarılar',
  soundAlerts: 'Ses Efektleri',
  playersTitle: 'Oyuncular',
  playersAdded: 'Eklenen Oyuncular',
  statsTitle: 'Oyun İstatistikleri',
  totalGameTime: 'Toplam Süre',
  totalRounds: 'Toplam Tur',
  slowestPlayer: 'En Yavaş Oyuncu',
  playerPerformance: 'Oyuncu Süre Analizi',
  playAgain: 'Yeni Oyun',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'masa-ustu-oyun-zamanlayici-saat',
  title: 'Masaüstü Oyun Zamanlayıcı: Düello Satranç Saati ve Sıra Yöneticisi',
  description: 'Profesyonel bir masaüstü oyun zamanlayıcı ile sıraları takip edin ve süreyi yönetin. Satranç saati düello modunu, çok oyunculu düzenleri, Fischer artışını ve Bronstein gecikmesini destekler.',
  ui,
  seo: [
    { type: 'title', text: 'Masa Başında Tempoyu Yönetmek: Profesyonel Süre Kontrolleri Oyun Deneyimini Nasıl Geliştirir', level: 2 },
    { type: 'paragraph', html: 'Zaman yönetimi, modern masaüstü kutu oyunlarında hayati bir bileşendir. İster hızlı tempolu bir parti oyununda yarışın ister derin bir strateji oyunu oynayın; düşünme süresini sınırlamak, tüm katılımcıların adil bir şekilde ilgi odağı olmasını sağlar. Fischer artışı, Bronstein gecikmesi veya Kum Saati modu gibi profesyonel zamanlama yöntemlerinin kullanılması, analiz felcini ortadan kaldırır, oyun temposunun tutarlılığını garanti eder ve oyun tahtasına ekstra bir stratejik karar verme katmanı ekler.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Desteklenen Oyuncu' },
        { value: '5 Mod', label: 'Süre Yapılandırması' },
        { value: '100ms', label: 'Motor Hassasiyeti' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein ve Kum Saati: Gelişmiş Süre Kontrolleri Açıklandı', level: 2 },
    { type: 'paragraph', html: 'Masaüstü oyun zamanlayıcımız, rekabetçi turnuva oyunlarından ilham alan ve oyun seanslarınızın sorunsuz çalışmasını sağlayan birden fazla zamanlama seçeneğini destekler:' },
    {
      type: 'table',
      headers: ['Mod', 'Nasıl Çalışır', 'En Uygun Oyun Türü'],
      rows: [
        ['Normal Geri Sayım', 'Sıra bittiğinde duraklayan standart bir genel geri sayım saati.', 'Genel bir düşünme süresi havuzuna sahip gündelik masa oyunları'],
        ['Fischer (Artış)', 'Sıranızı bitirdikten sonra saatinize belirli bir saniye ekler.', 'Hızlı sıraların bir zaman tamponu oluşturduğu stratejik euro oyunları ve wargame\'ler'],
        ['Bronstein (Gecikme)', 'Ana zamanlayıcınızın geri saymadığı bir gecikme penceresi sağlar.', 'Kısa yönetimsel sıraların ücretsiz olması gereken karmaşık taktik oyunları'],
        ['Kum Saati', 'Sizin süreniz azalırken rakibinizin süresi gerçek zamanlı olarak artar.', 'Yoğun iki oyunculu rekabetçi düellolar ve satranç maçları'],
        ['Sıra Sıfırlama', 'Her sırada tamamen sıfırlanan sabit, taze bir geri sayım zamanlayıcısı.', 'Hızlı tempolu parti oyunları, bilgi yarışmaları ve hızlı turlar'],
      ],
    },
    {
      type: 'tip',
      title: 'İdeal Süre Yapılandırmasını Bulma',
      html: 'Önerilen başlangıç noktası hafif parti oyunları için 30-45 saniye, orta ağırlıktaki euro oyunları için 5 saniyelik Bronstein gecikmesiyle 1-2 dakika ve ağır wargame\'ler veya stratejik masaüstü kampanyaları için 10 saniyelik Fischer artışıyla 30-45 dakikadır.',
    },
    {
      type: 'title',
      text: 'Görsel Optimizasyon: Düellolar için Bölünmüş Ekran vs Çok Oyunculu Merkez Sıra Butonu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Karşı karşıya yapılan düellolar için uygulama otomatik olarak bölünmüş ekran satranç saati düzeni sunar. Bu görünüm, oyuncuların ekran yarılarını 180 derece döndürmelerine olanak tanıyarak masanın karşı taraflarından rahatça izlenmesini sağlar. 3 veya daha fazla katılımcılı oyunlar için arayüz, aktif oyuncu parıltıları, bireysel kart ayarlamaları ve oyun alanının ortasında paylaşılan fiziksel bir zil görevi gören devasa bir merkez Sırayı Bitir düğmesi içeren çok oyunculu bir ızgaraya dönüşür.',
    },
    {
      type: 'proscons',
      title: 'Fischer Artışı ve Bronstein Gecikmesi Karşılaştırması',
      items: [
        {
          pro: 'Fischer artışları, gelecekteki sıralar için bir zaman tamponu biriktirerek hızlı karar vermeyi ödüllendirir.',
          con: 'Oyuncular sürekli olarak son derece hızlı sıralar yaparlarsa toplam oyun süresi daha uzun olabilir.',
        },
        {
          pro: 'Bronstein gecikmesi, büyük rezervler biriktirmeden kısa yönetimsel turlarda zaman kaybetmeyi önler.',
          con: 'Oyunun fiziksel yönetim süresine uygun bir gecikme eşiği yapılandırılmasını gerektirir.',
        },
        {
          pro: 'Kum saati modu, sürenizi aktif olarak tüketip rakibinizi besleyerek rekabetçi düellolarda doğrudan gerilim yaratır.',
          con: 'İkiden fazla oyunculu oyunlarda matematiksel olarak karmaşık ve daha az stratejik hale gelir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sıra Zamanlayıcılarından Yararlanan Yaygın Masaüstü Oyun Türleri',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Stratejik Euro Oyunları',
          description: 'Sıraların karmaşıklığının değişebileceği işçi yerleştirme ve kaynak yönetimi oyunları. Fischer artışları, oyuncuların ilk turları yavaşlatmadan kritik oyun sonu kararlarını yönetmelerine yardımcı olur.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Analiz felcini azaltır',
            'Değişken sıra karmaşıklığı desteği',
            'Zaman aktif bir kaynağa dönüşür',
          ],
        },
        {
          title: 'Parti & Bilgi Yarışması Oyunları',
          description: 'Hızlı düşünmenin eğlencenin bir parçası olduğu yüksek enerjili oyunlar. Sabit sıra sıfırlama saatleri enerjiyi yüksek tutar ve tek bir oyuncunun akışı durdurmasını önler.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Kısa sabit geri sayımlar',
            'Parti ivmesini korur',
            'Anında eylemleri zorunlu kılar',
          ],
        },
        {
          title: 'Turnuva Düello Oyunları',
          description: 'Sıkı satranç saati düelloları, tüm turnuva turlarında rekabet bütünlüğünü ve adil zamanlamayı sağlamak için hassas, döndürülebilir düzenler gerektirir.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '180 derece ekran döndürme',
            '100ms aralıklarla doğru zaman takibi',
            'Ani ölüm/uzatma durumları',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fischer Artışı',
          definition: 'Her sıra tamamlandıktan sonra oyuncunun kalan süresine belirlenen saniyenin eklendiği bir süre kontrol yöntemi.',
        },
        {
          term: 'Bronstein Gecikmesi',
          definition: 'Sıra başında geri sayımın belirlenen süre kadar geciktirildiği ve sıra hızlıca bittiğinde süreden düşme yapılmasını önleyen süre kontrol yöntemi.',
        },
        {
          term: 'Kum Saati Modu',
          definition: 'Bir oyuncudan düşen sürenin gerçek zamanlı olarak doğrudan rakibin süresine eklendiği dinamik bir zamanlama sistemi.',
        },
        {
          term: 'Analiz Felci',
          definition: 'Oyuncunun seçenekler karşısında bunalarak oyunu yavaşlattığı ve diğer oyuncuların deneyimini olumsuz etkilediği aşırı düşünme durumu.',
        },
        {
          term: 'Oyun Analitiği',
          definition: 'Geçen turları, ortalama düşünme hızını, maksimum sıra sürelerini ve en yavaş oyuncu sıralamalarını özetleyen oyun sonu performans metrikleri.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Düello modu düzeni nasıl çalışır?',
      answer: '2 oyunculu bir oyun başlatıldığında, arayüz bölünmüş ekran satranç saati görüntüler. Her iki taraf bir oyuncuyu temsil eder ve kendi yarılarına dokunmak sırayı bitirir. Ekranlar karşı karşıya oturan oyuncular için 180 derece döndürülebilir.',
    },
    {
      question: 'Fischer ve Bronstein modları arasındaki fark nedir?',
      answer: 'Fischer modu sırayı bitirdikten sonra oyuncunun süresine saniye ekleyerek zaman biriktirmesini sağlar. Bronstein modu sıra başında bir gecikme sağlar; sıra bu gecikme süresinde biterse süreden düşüş yapılmaz.',
    },
    {
      question: 'Uygulama sıra istatistiklerini takip ediyor mu?',
      answer: 'Evet! Oyun bittiğinde veya süre dolduğunda, istatistik penceresi toplam oyun süresini, tur sayılarını, ortalama sıra süresini, en uzun sırayı gösterir ve oyuncuları hıza göre sıralar.',
    },
    {
      question: 'Sayfayı yenilediğimde oyuncularım kaydedilir mi?',
      answer: 'Evet, oyuncu yapılandırması ve renk seçimleri tarayıcının yerel depolama alanına otomatik olarak kaydedilir ve sayfaya geri döndüğünüzde listenizi geri yükler.',
    },
    {
      question: 'Canlı bir oyun sırasında süre ekleyebilir veya çıkarabilir miyim?',
      answer: 'Evet! Çok oyunculu modda, oyuncu kartlarında kalan süreyi anında ayarlamak için özel +30sn ve -30sn butonları bulunur.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Oyun Kurulumunu Yapılandırın',
      text: 'Hazır bir ayar seçin (Casual, Blitz, Stratejik, Kum Saati) veya özel parametreler belirleyin: ana süre, artış/gecikme ve uyarı sınırları.',
    },
    {
      name: 'Oyuncuları Ekleyin ve Kaydedin',
      text: 'Oyuncu isimlerini girin ve renkleri seçin. Ok kontrollerini kullanarak sıra dizilimini değiştirin; detaylar otomatik olarak kaydedilir.',
    },
    {
      name: 'Başlatın ve Sıraları Geçin',
      text: 'Oyunu başlatın. Düello modunda sıranızı bitirmek için ekranınızın yarısına dokunun. Çok oyunculu modda ortadaki dev Sırayı Bitir düğmesine tıklayın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Masaüstü Oyun Zamanlayıcı & Sıra Yöneticisi',
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
          'name': 'Düello modu düzeni nasıl çalışır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '2 oyunculu bir oyun başlatıldığında, arayüz bölünmüş ekran satranç saati görüntüler. Her iki taraf bir oyuncuyu temsil eder ve kendi yarılarına dokunmak sırayı bitirir. Ekranlar karşı karşıya oturan oyuncular için 180 derece döndürülebilir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Fischer ve Bronstein modları arasındaki fark nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Fischer modu sırayı bitirdikten sonra oyuncunun süresine saniye ekleyerek zaman biriktirmesini sağlar. Bronstein modu sıra başında bir gecikme sağlar; sıra bu gecikme süresinde biterse süreden düşüş yapılmaz.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Uygulama sıra istatistiklerini takip ediyor mu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet! Oyun bittiğinde veya süre dolduğunda, istatistik penceresi toplam oyun süresini, tur sayılarını, ortalama sıra süresini, en uzun sırayı gösterir ve oyuncuları hıza göre sıralar.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Sayfayı yenilediğimde oyuncularım kaydedilir mi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet, oyuncu yapılandırması ve renk seçimleri tarayıcının yerel depolama alanına otomatik olarak kaydedilir ve sayfaya geri döndüğünüzde listenizi geri yükler.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Canlı bir oyun sırasında süre ekleyebilir veya çıkarabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet! Çok oyunculu modda, oyuncu kartlarında kalan süreyi anında ayarlamak için özel +30sn ve -30sn butonları bulunur.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Masaüstü Oyun Zamanlayıcı Nasıl Kullanılır',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Oyun Kurulumunu Yapılandırın',
          'text': 'Hazır bir ayar seçin (Casual, Blitz, Stratejik, Kum Saati) veya özel parametreler belirleyin: ana süre, artış/gecikme ve uyarı sınırları.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Oyuncuları Ekleyin ve Kaydedin',
          'text': 'Oyuncu isimlerini girin ve renkleri seçin. Ok kontrollerini kullanarak sıra dizilimini değiştirin; detaylar otomatik olarak kaydedilir.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Başlatın ve Sıraları Geçin',
          'text': 'Oyunu başlatın. Düello modunda sıranızı bitirmek için ekranınızın yarısına dokunun. Çok oyunculu modda ortadaki dev Sırayı Bitir düğmesine tıklayın.'
        }
      ]
    }
  ],
};
