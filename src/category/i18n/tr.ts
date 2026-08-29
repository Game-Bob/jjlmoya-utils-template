import type { CategoryLocaleContent } from '../../types';

const slug = 'masa-oyunlari';
const title = 'Masa Oyunu Araçları ve Yardımcı Programları';
const description = 'Masa oyunları ve RPG için ücretsiz araçlar: canlı istatistiklerle sanal zar atma, çok oyunculu süreölçer ile tur sürelerini yönetme ve daha fazlası. Tarayıcıda çalışır, kayıt gerekmez, %100 gizli.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Masa Oyunu Araçları | Çevrimiçi Zar Atma ve Tur Zamanlayıcısı', level: 2 },
    { type: 'paragraph', html: 'Oyun geceleri eğlence içindir, kayıp zar aramak ya da birinin sonuçları toplamasını beklemek için değil. Bu yardımcı program kütüphanesi, sana ve grubuna anında çalışan hızlı, iyi tasarlanmış araçlar sunar, karşılığında hiçbir şey istemez. İster bin bir şeyle uğraşan bir zindan efendisi ol, ister sadece zahmetsizce zar atmak isteyen bir oyuncu, bu araçlar senin için yapıldı.' },
    { type: 'title', text: 'Gerçek Zamanlı İstatistiklerle Sanal Zar Atma', level: 2 },
    { type: 'paragraph', html: 'Masanın altında zar aramaktan ya da birinin sonuçları toplamasını beklemekten bıktın mı? Sanal zar atıcı, değiştiriciler, avantaj, dezavantaj ve tam geçmişle birlikte herhangi bir çokyüzlü zar kombinasyonunu anında atmanı sağlar. Dahili olasılık analizörü, atmadan önce gerçek başarı şansını gösterir. Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun veya şansa dayalı herhangi bir oyun için mükemmel.' },
    { type: 'title', text: 'Akıllı Tur Zamanlayıcısı ile Oyunun Temposunu Koru', level: 2 },
    { type: 'paragraph', html: 'Her turda sonsuz zaman harcayan o oyuncuyu hepimiz biliriz. Oyun zamanlayıcısı, her oyun stiline uygun modlarla adil ve eğlenceli zaman sınırları belirlemeni sağlar - basit bir ortak geri sayımdan Fischer artırımı veya Bronstein gecikmeli satranç sistemlerine kadar. Bölünmüş ekranlı iki oyunculu düellolar veya merkezi kontrollü sekiz oyuncuya kadar gruplar için çalışır. Oyun bittiğinde, zaman ve oyun temposu hakkında ayrıntılı istatistikleri görüntüleyebilirsin.' },
    { type: 'title', text: 'Gizlilik Önceliklidir: Tüm Verilerin Cihazında Kalır', level: 2 },
    { type: 'paragraph', html: 'Bu kütüphanenin en büyük avantajlarından biri, tüm işlemenin tarayıcında gerçekleşmesidir. Hiçbir veri sunucuya gönderilmez, izleme çerezi yoktur, e-posta veya kayıt gerekmez. Araçları çevrimdışı kullan, ekranını masayla paylaş veya bir televizyona yansıt - oyunun kendisi dışında endişelenecek bir şey yok. Ve masa oyuncularının hayatını kolaylaştırmak için her zaman tasarlanmış daha fazla araç yolda.' },
    { type: 'stats', items: [
      { label: 'Araçlar', value: '2+', icon: 'mdi:tools' },
      { label: 'Oyuncular', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Diller', value: '15', icon: 'mdi:translate' },
      { label: 'Gizlilik', value: '%100 Yerel', icon: 'mdi:shield-check' },
    ] },
  ],
};
