import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Penerjemah Rune Fantasi',
  inputPlaceholder: 'Ketik kata atau nama untuk diterjemahkan...',
  alphabetLabel: 'Alfabet Rune',
  elderFuthark: 'Elder Futhark',
  angloSaxon: 'Anglo-Saxon',
  fantasy: 'Skrip Fantasi',
  theban: 'Theban',
  enochian: 'Henokian',
  daemonic: 'Daemonik',
  ogham: 'Ogham',
  translate: 'Terjemahkan',
  clear: 'Hapus',
  copy: 'Salin Teks',
  copied: 'Tersalin!',
  runeName: 'Nama',
  runeMeaning: 'Makna',
  runePhonetic: 'Fonetik',
  clickHint: 'Klik rune untuk melihat detailnya',
  outputLabel: 'Hasil Rune',
  noInput: 'Masukkan teks di atas untuk diterjemahkan ke dalam rune',
  unknownChar: '?',
  gmMode: 'Mode GM',
  exitGmMode: 'Keluar',
  gmHint: 'Tampilkan ini kepada pemain Anda',
  seedLabel: 'Bibit',
  seedPlaceholder: 'Opsional',
  seedApplied: 'Terkunci',
  shuffleSeed: 'Acak',
};

const faq = [
  {
    question: 'Apa itu Elder Futhark?',
    answer: 'Elder Futhark adalah bentuk tertua dari alfabet rune, digunakan oleh suku-suku Jermanik dari abad ke-2 hingga ke-8. Terdiri dari 24 rune yang dibagi menjadi tiga kelompok delapan yang disebut aettir. Setiap rune memiliki nilai fonetik dan nama simbolis yang mewakili konsep alam atau mitologi.',
  },
  {
    question: 'Apa perbedaan antara Elder Futhark dan rune Anglo-Saxon?',
    answer: 'Futhorc Anglo-Saxon adalah versi lanjutan dari Elder Futhark yang dikembangkan di Inggris. Ini menambahkan rune tambahan untuk mewakili suara khusus bahasa Inggris Kuno, berkembang dari 24 hingga 33 karakter. Makna dan nilai fonetik juga berubah seiring waktu.',
  },
  {
    question: 'Apakah penerjemah ini mengonversi kata dengan sempurna?',
    answer: 'Alat ini menyediakan transliterasi huruf-per-huruf ke dalam simbol rune. Penggunaan rune historis bersifat fonetik, bukan harfiah huruf-per-huruf, sehingga hasilnya adalah interpretasi modern. Opsi Skrip Fantasi menawarkan alfabet fiksi kreatif untuk nuansa RPG meja.',
  },
  {
    question: 'Bisakah saya menggunakan rune ini dalam kampanye RPG meja saya?',
    answer: 'Ya! Game master dan pemain dapat menggunakan penerjemah untuk membuat prasasti rune, tulisan magis, pesan rahasia, atau nama dekoratif untuk karakter dan lokasi. Opsi Skrip Fantasi dirancang khusus untuk pengaturan roleplaying fantasi.',
  },
  {
    question: 'Apakah alat ini menyimpan teks yang saya ketik?',
    answer: 'Tidak. Semuanya berjalan secara lokal di browser Anda. Tidak ada teks, terjemahan, atau pilihan yang pernah dikirim ke server mana pun. Karya kreatif Anda tetap sepenuhnya pribadi.',
  },
  {
    question: 'Apa yang terjadi saat saya mengklik rune?',
    answer: 'Mengklik kartu rune mana pun akan menampilkan nama tradisional, makna simbolis, dan nilai fonetiknya. Ini membantu Anda mempelajari rune dan memilih simbol yang tepat untuk kebutuhan RPG Anda.',
  },
];

const howTo = [
  {
    name: 'Masukkan Teks',
    text: 'Ketik kata, nama, atau frasa bahasa Inggris apa pun ke dalam kolom input. Penerjemah berfungsi paling baik dengan satu kata atau frasa pendek.',
  },
  {
    name: 'Pilih Alfabet',
    text: 'Pilih antara Elder Futhark (Jermanik kuno), Anglo-Saxon (Inggris abad pertengahan), atau Skrip Fantasi (gaya RPG meja).',
  },
  {
    name: 'Terjemahkan dan Jelajahi',
    text: 'Klik Terjemahkan untuk mengonversi teks Anda. Setiap rune muncul sebagai kartu. Klik rune mana pun untuk mempelajari nama, makna, dan bunyinya. Gunakan tombol Salin untuk menyimpan teks rune ke clipboard Anda.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'penerjemah-rune-fantasi',
  title: 'Penerjemah Rune Fantasi / Konverter Rune Elder Futhark, Theban, Henokian and Daemonik',
  description: 'Terjemahkan teks ke dalam aksara Elder Futhark, Anglo-Saxon Futhorc, Theban, Henokian, Daemonik, Ogham, atau Fantasi. Sempurna untuk teka-teki RPG meja, kampanye, gulungan penyihir, dan rune mistis.',
  ui,
  seo: [
    { type: 'title', text: 'Alfabet Runik dan Aksara Mistis untuk Worldbuilding RPG Meja', level: 2 },
    { type: 'paragraph', html: 'Alfabet runik mistis, simbol kuno, dan aksara rahasia menghadirkan imersi tak tertandingi ke dalam permainan roleplaying fantasi meja seperti D&D, Pathfinder, dan Warhammer. Baik Anda membuat reruntuhan kurcaci tersembunyi yang diukir dengan Elder Futhark, mendesain buku sihir arkana berisi aksara bahasa malaikat Henokian, menyebarkan petunjuk sihir menggunakan alfabet Theban, atau menulis pesan daemonik terlarang, generator rune kami mengubah teks bahasa Inggris biasa menjadi simbol bergaya secara waktu nyata. Picu rasa ingin tahu pemain dengan properti fisik, sandi misteri, dan ukiran batu kuno.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Alfabet Rune' },
        { value: '150+', label: 'Variasi Simbol' },
        { value: 'Instan', label: 'Transliterasi Visual' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Elder Futhark & Anglo-Saxon Futhorc: Rune Jermanik dan Nordik Kuno', level: 2 },
    { type: 'paragraph', html: 'Berawal dari abad ke-2, Elder Futhark adalah sistem runik tertua, terdiri dari 24 karakter yang mewakili kekuatan dasar alam. Anglo-Saxon Futhorc memperluas sistem ini hingga 33 karakter untuk fonetika bahasa Inggris Kuno. Simbol historis ini sempurna untuk mewakili klan kurcaci, budaya yang terinspirasi mitologi Nordik, ukiran Viking, dan lambang klan barbar dalam pengaturan kampanye RPG Anda.' },
    { type: 'title', text: 'Theban & Ogham: Alfabet Sihir Abad Pertengahan dan Pohon Celtic', level: 2 },
    { type: 'paragraph', html: 'Sering disebut sebagai Rune Honorius atau Alfabet Penyihir, aksara Theban adalah sandi abad pertengahan yang populer dalam tradisi okultisme dan Wicca. Ogham, alfabet abad pertengahan awal, menggunakan goresan linier yang diukir di sepanjang tepi, terkenal terkait dengan cerita rakyat Celtic dan sihir pohon druid. Gunakan aksara ini untuk menghias tempat suci druid, hutan elf, altar pagan, atau pesan tersembunyi dari koven penyihir rahasia.' },
    { type: 'title', text: 'Aksara Henokian & Daemonik: Bahasa Malaikat dan Jurang Maut', level: 2 },
    { type: 'paragraph', html: 'Pertama kali dicatat oleh John Dee dan Edward Kelley pada abad ke-16, Henokian adalah bahasa buatan terperinci yang diyakini sebagai bahasa para malaikat. Aksara Daemonik mewakili glyph jurang, pakta gelap, dan tanda infernal. Tingkatkan taruhan naratif kampanye Anda dengan meninggalkan kontrak iblis yang dapat diuraikan, ukiran kultus gelap, dan peninggalan malaikat untuk diselidiki oleh penyihir, paladin, dan pendeta Anda.' },
    { type: 'title', text: 'Skrip Fantasi Kustom: Alfabet Kreatif Siap Roleplay', level: 2 },
    { type: 'paragraph', html: 'Untuk dunia yang melampaui sejarah nyata, Skrip Fantasi kustom kami menawarkan serangkaian rune fiksi yang dirancang khusus untuk membangkitkan estetika fantasi tinggi klasik. Setiap rune dirancang untuk menonjol di cetakan game master, peta digital, dan token pemain kustom. Padukan dengan pengacakan berbasis bibit untuk membuat bahasa rahasia yang unik untuk faksi, bangsa, atau dewa kuno yang berbeda.' },
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
      'name': 'Penerjemah Rune Fantasi',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menggunakan Penerjemah Rune Fantasi',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
