import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'ay-fazi-gelgit-hesaplayici',
  title: 'Masaustu RPGler için Ay Fazi Hesaplayici: Özel Fantezi Aylarini ve Gelgit Dongulerini Takip Edin',
  description: 'Herhangi bir fantezi dunyasi için özel yörünge periyotlariyla ay fazlarini hesaplayin. Ayni anda birden fazla ayi takip edin, 10 günluk tahminleri gorun ve D&D, Pathfinder veya herhangi bir RPG\'deki büyü ve hava sistemleri için birleştirilmis gelgit seviyesini alin.',
  ui: {
    title: 'Ay Fazi ve Mistik Gelgit Takipçisi',
    moonsTitle: 'Ay Yapılandırmasi',
    addMoon: 'Özel Ay Ekle',
    removeMoon: 'Ayi Kaldır',
    moonName: 'Ay Adi',
    orbitalPeriod: 'Yörünge Periyodu (Gün)',
    startingOffset: 'Başlangıç Ofseti (Gün)',
    timelineTitle: 'Zaman Kontrolleri',
    currentDay: 'Mevcut Kampanya Günu',
    tideTitle: 'Mistik Gelgit Durumu',
    tideLevel: 'Gelgit Enerji Seviyesi',
    magicModifier: 'Buyu Gelgit Etkişi',
    forecastTitle: 'Ay Fazi ve Gelgit Tahmini',
    dayLabel: 'Gün',
    resetButton: '0. Güne Sıfırla',
    presetTitle: 'Kampanya Hazir Ayarlari',
    presetSingle: 'Klasik Ay',
    presetDouble: 'Buyunun Ikiz Aylari',
    presetTriple: 'Uclu Tutulma Diyari',
    newMoon: 'Yeni Ay',
    waxingCrescent: 'Hilal (Buyuyen)',
    firstQuarter: 'Ilk Dordun',
    waxingGibbous: 'Siskin Ay (Buyuyen)',
    fullMoon: 'Dolunay',
    waningGibbous: 'Siskin Ay (Kuculen)',
    lastQuarter: 'Son Dordun',
    waningCrescent: 'Hilal (Kuculen)',
  },
  seo: [
    { type: 'title', text: 'Bir Fantezi RPG Kampanyasinda Ay Fazlari Nasil Takip Edilir', level: 2 },
    { type: 'paragraph', html: 'Cogu fantezi evreninde aylarin yörünge periyotlari, gerçek dünyadaki 29,5 günluk ay döngüsunden farklidir. <strong>Yörünge Periyodu</strong> alani, bir ayin tam bir döngüyu tamamlamasi için kaç oyun ici gün gerektigini belirler. Dünya\'nin ayi 29 gün surer; Eberron evreni 28 gün kullanir; Tolkien\'in Orta Dünya\'sinda ay döngüsu 30\'a yakindir. Bunu dünyanızin anlatisina göre ayarlayin veya istediginiz tutulma sikligini uretecek 5 ila 60 gün arasinda herhangi bir sayi seçin.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Ayni anda takip edilen ay' },
        { value: '10', label: 'Günluk tahmin araligi' },
        { value: '5', label: 'Gelgit durumu (Durgün\'dan Kabarma\'ya)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Başlangıç Ofseti Alanini Anlamak', level: 2 },
    { type: 'paragraph', html: '<strong>Başlangıç Ofseti</strong>, bir ayin 0. kampanya günunde döngüsunun neresinde oldugünu kaydirir. 0 ofseti, ayin Yeni Ay\'da başladıgi anlamina gelir. Yörünge periyodunun yarisina esit bir ofset, onu Dolunay\'da baslatir. Bunu kampanyanizin acilis sahnesinde tanimlanan faza uyacak sekilde veya iki ayin her zaman ayni hizada olmamasi için farkli konumlarda baslamasini saglamak amaciyla kullanin.' },
    { type: 'title', text: 'Gelgit Seviyesinin Oyununuz İçin Anlami', level: 2 },
    { type: 'paragraph', html: 'Gelgit seviyesi, tum aktif aylarin mevcut fazlarina göre kutle cekim kuvvetini birleştirir. <strong>Kabarma Gelgiti</strong> (%75\'in uzerinde), aylar dolunay veya yeni ay evresinde neredeyse ayni hizaya geldiginde ve ayni yonde cekim yaptiginda olusur. <strong>Durgün Gelgit</strong> (%30\'un altinda), aylar zit evrelerde oldugünda ve birbirlerini kismen iptal ettiginde meydana gelir. Bunu doğrudan herhangi bir mekanik sisteme baglayabilirsiniz: büyü kurtarma sırası bonuslari, druid sekil değiştirme suresi, kurt adam donusum esikleri veya kiyi haritalarinda firtina siddeti.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Tek Ay',
          description: 'Gerçek dunyaya cok benzeyen veya tek bir baskin ayi olan evrenler için en iyisidir. 8 asamali basit döngü, referans olmadan takip etmesi kolay.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Forgotten Realms (Selune, 30 gün) için uygün',
            'Kurt adam ve likantrop kampanyalari',
            'Dolunay\'a bagli korku oturumlari'
          ]
        },
        {
          title: 'Ikiz Aylar',
          description: 'Yüksek fantezi evrenlerinde yaygindir. Sik sik kismi hizalanmalar ve ilginc orta döngü gelgitleri yaratir. Hizalanmalar kabaca her LCM(period1, period2) günde bir gerçeklesir.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28g + Aryth 12g)',
            'Onceden tahmin edilebilir tutulma mevsimleri yaratir',
            'Druidik veya element büyü sistemleri için uygün'
          ]
        },
        {
          title: 'Uclu Aylar',
          description: 'Nadir uclu hizalanmalar onceden tahmin edilemez dalgalanmalar yaratir. Birlestirilmis gelgit, bu arac olmadan kaotik ve tahmin etmesi zor hale gelir; bu da onu dramatik acidan kullanışlı kilar.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Hizalama sırasında vahsi büyü dalgalanma tablolari',
            'Pathfinder Golarion tarzi karmasiklik',
            'Destansi kampanyalar için uzun donemli döngüler'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Fantezi Dünyalari İçin Yaygin Yörünge Periyotlari', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: '30 günluk yörünge periyodu, tek ay. 1. oturumda dolunayda baslamak için 15 ofsetini kullanin.' },
        { term: 'Eberron Aylari', definition: 'Eberron\'un 9 ila 28 gün arasinda degisen periyotlarla 12 ayi vardir. Her birini ayri bir ay ornegi olarak calistirin veya hikayeyle en ilgili ikişini seçin.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion\'un Somal adinda 29 günluk döngüye sahip tek bir ayi vardir. Karanlik doku olaylari, ofset girimli ikinci bir dusuk periyotlu ay eklenerek modellenebilir.' },
        { term: 'Özel Dünya', definition: '15 günluk bir ay, yilda 24 dolunay uretir. 45 günluk bir ay kabaca 8 dolunay uretir. Daha kisa periyotlar daha sik tutulma olayi anlamina gelir ancak anlati agirligini azaltir.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ipucu: 1. Oturum İçin Belirli Bir Faz Ayarlama',
      icon: 'mdi:information-outline',
      badge: 'KURULUM IPUCU',
      html: 'Kampanyaniz hilal ayinda basliyorsa, ofseti yörünge periyodunun yaklasik %20\'sine ayarlayin. Dolunay başlangıçi için periyodun %50\'sini ofset olarak kullanin. Ornegin, 28 günluk bir ay dolunayda baslayacaksa 14 ofsetini kullanin. Gün sayacini mevcut kampanya günunuze ilerletin; tahmin, sonraki 10 günu otomatik olarak gösterecektir.'
    }
  ],
  faq: [
    { question: 'Fantezi dunyam için hangi yörünge periyodunu kullanmaliyim?', answer: 'Eger evreniniz belirtmiyorsa, tek bir ay için 28 ila 30 gün idealdir. Birden fazla ay için, birbirlerinin basit katlari olmayan periyotlar seçin (orn. 20 ve 27) ki hizalanmalar cok sik tekrarlanmasin. Daha kisa periyotlar (10 ila 15 gün), sik sik küçük gelgitler oluşturan ikincil aylar için iyi calisir.' },
    { question: 'Iki ayi belirli bir kampanya aninda nasil hizalarim?', answer: 'Her iki ayi da ayni ofset degerine ayarlayin. 0. Günde ayni fazda baslarlar ve iki periyotlarinin her ortak katinda tekrar hizalanirlar. Onlari sasirtmak için, ikinci aya yörünge periyodunun yarisina esit bir ofset verin, böylece zit konumlarda baslarlar.' },
    { question: 'Kabarma Gelgiti oyun terimleriyle ne anlama gelir?', answer: 'Kabarma Gelgiti, tum aktif aylarin ayni hizada cekim yaptigi ve maksimum gelgit enerjisi urettigi anlamina gelir. Bunu vahsi büyü dalgalanmalarini tetiklemek, iyilestirme büyüsu menzillerini artirmak, firtina siddetini kotulestirmek veya dünyanızdaki dini gruplar için kutsal bir gece olarak isaretlemek için kullanabilirsiniz.' },
    { question: 'Durgün Gelgit oyun terimleriyle ne anlama gelir?', answer: 'Durgün Gelgit, aylarin birbirini kismen iptal ettigi durumdur. Anti-büyü etkileri, denizde olu sakinlik veya onceden tahmin edilebilir büyü baskilamasi gerektiren kotu karakterlerin planlarini uygulamasi için iyi bir andir.' },
    { question: 'Bunu Call of Cthulhu veya korku kampanyalari için kullanabilir miyim?', answer: 'Evet. 29 günluk tek bir ay kullanin ve dolunayin oturumun zirvesine denk gelmesi için ofseti ayarlayin. Gelgit takipcisi, faz yuzdesiyle olceklendirilen Mitos etkişini veya psifik hassasiyet zirvelerini temsil edebilir.' },
    { question: '10 günluk tahmin nasil calisir?', answer: 'Tahmin, mevcut günden baslayarak sonraki 10 kampanya günunun her biri için her aktif ayin ay fazini renkli bir nokta olarak gösterir. Her gün sutununun altindaki yuzde, birleştirilmis gelgit seviyesidir. Yüksek yuzdeye sahip günler, büyü veya havayla baglantili dramatik karsilasmali günler için iyi adaylardir.' },
    { question: 'Cok kisa döngüye sahip bir ayi takip edebilir miyim, örneğin 7 gün?', answer: 'Evet. Yörünge periyodunu 7 olarak ayarlayin. Ay, oyun ici zamanin her haftasinda tam bir döngüyu tamamlayarak 8 fazin tamamindan gececektir. Bu, ay büyüsunun haftalik olarak sıfırlandigi kampanya dunyalari veya duzenli olarak gecen küçük kuyruklu yildiz benzeri bir cismi takip etmek için kullanışlıdir.' },
    { question: 'Yayinlanmis bir macera modulundeki ay fazini nasil eslestirebilirim?', answer: 'Maceradaki kampanya günune bakin ve belirtilen fazi not edin. Bunun döngüdeki kaçinci güne denk geldigini hesaplayin, yörünge periyoduna bolun ve bunu ofset olarak kullanin. Ornegin, 28 günluk bir döngünun 0. Günunde ilk dordun ayi, ofsetin 7 oldugu anlamina gelir (28\'in dorte biri).' }
  ],
  bibliography,
  howTo: [
    { name: 'Yörünge Periyodunu Ayarlayin', text: 'Ayinizin tam bir döngüyu tamamlamasi için gereken oyun ici gün sayısıni girin. Dünyanizin anlatisini kullanin veya 5 ile 60 arasinda bir deger seçin.' },
    { name: 'Başlangıç Ofsetini Ayarlayin', text: 'Bir gün ofseti girerek başlangıç fazini kaydirin. 0 ofseti Yeni Ay\'da baslatir. Yörünge periyodunun yarisi Dolunay\'da baslatir.' },
    { name: 'Gün Sayacini Ilerletin', text: 'Adim düğmelerini veya kaydiriciyi kullanarak mevcut kampanya günunuze gidin ve faz ile gelgit seviyesini gerçek zamanli olarak okuyun.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Masaustu RPG\'ler için Ay Fazi Hesaplayici: Özel Fantezi Aylarini ve Gelgit Dongulerini Takip Edin',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Fantezi dunyam için hangi yörünge periyodunu kullanmaliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eger evreniniz belirtmiyorsa, tek bir ay için 28 ila 30 gün idealdir. Birden fazla ay için, birbirlerinin basit katlari olmayan periyotlar seçin ki hizalanmalar cok sik tekrarlanmasin.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kabarma Gelgiti oyun terimleriyle ne anlama gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kabarma Gelgiti, tum aktif aylarin ayni hizada cekim yaptigi anlamina gelir. Bunu vahsi büyü dalgalanmalarini tetiklemek, iyilestirme büyüsu menzillerini artirmak, firtina siddetini kotulestirmek veya dini gruplar için kutsal bir gece olarak isaretlemek için kullanin.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Iki ayi belirli bir kampanya aninda nasil hizalarim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Her iki ayi da ayni ofset degerine ayarlayin. Iki yörünge periyotlarinin her ortak katinda tekrar hizalanirlar. Onlari sasirtmak için, ikinci aya yörünge periyodunun yarisina esit bir ofset verin.'
          }
        },
        {
          '@type': 'Question',
          'name': '10 günluk tahmin nasil calisir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tahmin, sonraki 10 kampanya günunun her biri için her aktif ayin ay fazini renkli bir nokta olarak gösterir. Gosterilen yuzde, birleştirilmis gelgit seviyesidir. Yüksek yuzdeye sahip günler, dramatik büyü veya hava karsilasmalari için adaylardir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Bunu Call of Cthulhu veya korku kampanyalari için kullanabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. 29 günluk tek bir ay kullanin ve dolunayin oturumun zirvesine denk gelmesi için ofseti ayarlayin. Gelgit takipcisi, faz yuzdesiyle olceklendirilen Mitos etkişini veya psifik hassasiyet zirvelerini temsil edebilir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Yayinlanmis bir macera modulundeki ay fazini nasil eslestirebilirim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Belirtilen fazi not edin ve bunun döngüdeki kaçinci güne denk geldigini hesaplayin. Yörünge periyoduna bolun ve bu orani ofset olarak kullanin. Ornegin, 28 günluk bir döngüde ilk dordun ayi, 7 ofseti anlamina gelir.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Bir Masaustu RPG Kampanyasinda Ay Fazlari Nasil Takip Edilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Yörünge Periyodunu Ayarlayin',
          'text': 'Ayinizin tam bir döngüyu tamamlamasi için gereken oyun ici gün sayısıni girin.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Başlangıç Ofsetini Ayarlayin',
          'text': 'Bir gün ofseti girerek başlangıç fazini kaydirin. Yörünge periyodunun yarisi Dolunay\'da baslatir.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Gün Sayacini Ilerletin',
          'text': 'Adim düğmelerini veya kaydiriciyi kullanarak mevcut kampanya günunuze gidin ve faz ile gelgit seviyesini gorun.'
        }
      ]
    }
  ]
};
export default content;
