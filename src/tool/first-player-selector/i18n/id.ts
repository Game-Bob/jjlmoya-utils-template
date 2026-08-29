import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Pemilih Pemain Pertama',
  instructions: 'Letakkan jari Anda di layar atau klik untuk menambahkan pin',
  tapToSelect: 'Ketuk untuk Memilih',
  winner: 'Pemenang terpilih!',
  reset: 'Atur Ulang',
  start: 'Mulai Pemilihan',
  setupTitle: 'Pengaturan Pemilih',
  clearPlayers: 'Hapus Semua Pin',
  fingerMode: 'Mode Jari',
  wheelMode: 'Mode Roulette',
  presetsTitle: 'Opsi',
  soundOn: 'Suara Nyala',
  soundOff: 'Suara Mati',
  playerCountLabel: 'Pin / Jari',
};

const faq = [
  {
    question: 'Bagaimana cara kerja Mode Jari?',
    answer: 'Dalam Mode Jari, setiap pemain meletakkan satu jari di layar seluler. Alat ini mendeteksi semua titik sentuh, menampilkan lingkaran berwarna bercahaya di sekitarnya, dan secara otomatis memulai hitung mundur pendek. Setelah hitung mundur selesai, satu pemain disorot sebagai pemenang sementara yang lain memudar, disertai dengan ledakan partikel.',
  },
  {
    question: 'Bisakah saya menggunakan alat ini di komputer desktop?',
    answer: 'Ya! Jika Anda menggunakan perangkat tanpa layar sentuh, alat ini secara otomatis beralih ke Mode Roulette. Anda dapat mengklik kanvas untuk menempatkan pin berwarna yang mewakili pemain, lalu klik tombol Mulai Pemilihan untuk memutar roda pemilih.',
  },
  {
    question: 'Berapa banyak pemain yang dapat berpartisipasi?',
    answer: 'Alat ini mendukung hingga 10 pemain secara bersamaan. Dalam Mode Jari, hingga 10 jari dapat dideteksi sekaligus. Dalam Mode Roulette, Anda dapat menempatkan hingga 10 pin berwarna di kanvas dengan mengklik.',
  },
  {
    question: 'Apakah pemilihannya benar-benar acak?',
    answer: 'Ya. Algoritme pemilihan menggunakan Math.random() tingkat kriptografi JavaScript untuk memastikan hasil yang tidak bias. Dalam Mode Jari, pemenang dipilih secara seragam dan acak di antara semua titik sentuh yang terdeteksi. Dalam Mode Roulette, roda melambat secara realistis menggunakan fisika gesekan, dan sudut akhir menentukan pemenang secara matematis.',
  },
  {
    question: 'Bagaimana cara menghapus pin pemain dalam Mode Roulette?',
    answer: 'Cukup klik pada pin yang ada untuk menghapusnya. Alat ini mendeteksi klik dalam jarak 30 piksel dari pin yang ditempatkan dan menghapusnya, memungkinkan Anda menyesuaikan susunan pemain sebelum memicu putaran.',
  },
  {
    question: 'Apakah alat ini mengumpulkan atau mengirimkan data apa pun?',
    answer: 'Tidak sama sekali. Semuanya berjalan secara lokal di peramban Anda. Tidak ada data jari, posisi sentuhan, atau hasil pemilihan yang pernah dikirim ke server mana pun. Malam permainan Anda tetap sepenuhnya pribadi.',
  },
  {
    question: 'Apakah ini berfungsi di proyektor atau layar eksternal?',
    answer: 'Ya. Mode Roulette berfungsi dengan baik di layar besar dan proyektor untuk sesi permainan meja. Visual neon dengan kontras tinggi dan timer hitung mundur besar dirancang agar terlihat dari seberang ruangan.',
  },
  {
    question: 'Mengapa hitung mundur diatur ulang ketika seseorang mengangkat jarinya?',
    answer: 'Ini disengaja. Dalam Mode Jari, hitung mundur hanya berjalan selama semua pemain menjaga jari mereka tetap stabil di layar. Jika ada yang mengangkat atau menggeser, timer akan diatur ulang untuk memastikan semua orang berkomitmen sebelum pemilihan berjalan. Ini mencegah pemicuan yang tidak disengaja.',
  },
  {
    question: 'Bisakah saya mengubah suara atau mematikannya?',
    answer: 'Ya. Klik ikon speaker di pojok kanan atas untuk mengaktifkan atau menonaktifkan suara. Alat ini memainkan suara detak selama hitung mundur dan fanfare ketika pemenang terpilih.',
  },
  {
    question: 'Apa yang terjadi jika hanya ada satu pemain?',
    answer: 'Dalam kedua mode, setidaknya dua pemain diperlukan untuk melakukan pemilihan. Dalam Mode Jari, hitung mundur tidak akan dimulai sampai setidaknya dua jari terdeteksi. Dalam Mode Roulette, tombol Mulai Pemilihan tetap dinonaktifkan sampai Anda menempatkan setidaknya dua pin.',
  },
];

const howTo = [
  {
    name: 'Letakkan Jari atau Pin',
    text: 'Dalam Mode Jari, minta semua pemain meletakkan satu jari di layar. Dalam Mode Roulette, klik di mana saja pada kanvas untuk menempatkan pin pemain.',
  },
  {
    name: 'Picu Pemilihan',
    text: 'Untuk Mode Jari, pemilihan dimulai secara otomatis setelah menahan selama beberapa detik. Untuk Mode Roulette, klik tombol Mulai Pemilihan untuk memutar.',
  },
  {
    name: 'Lihat Pemenang',
    text: 'Pemenang disorot dengan efek denyut, ledakan partikel, dan fanfare suara. Klik Atur Ulang atau angkat semua jari untuk mencoba lagi.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'pemilih-pemain-pertama',
  title: 'Pemilih Pemain Pertama: Pemilih Jari & Roulette Giliran',
  description: 'Pilih siapa yang pertama bermain dalam permainan papan Anda dengan pemilih jari spektakuler dan roulette giliran interaktif ini.',
  ui,
  seo: [
    { type: 'title', text: 'Keadilan dan Strategi: Mengatasi Keunggulan Pemain Pertama dalam Permainan Papan', level: 2 },
    { type: 'paragraph', html: 'Menentukan pemain awal dalam sesi permainan meja dapat sangat memengaruhi dinamika permainan. Dalam teori permainan, Keunggulan Pemain Pertama (First-Player Advantage/FPA) mengacu pada keunggulan statistik yang dimiliki pemain yang mengambil giliran pertama dibandingkan lawan-lawannya. Dalam pertandingan catur strategis, wargame, dan Eurogame modern seperti Agricola atau Puerto Rico, mengambil tindakan pertama memungkinkan seorang pemain mengamankan sumber daya kritis atau menempatkan bidak sebelum lawan dapat bereaksi. Untuk mengurangi FPA dan menjamin lapangan bermain yang seimbang, metode pemilihan yang andal dan tidak bias sangatlah penting. Pemilih pemain awal digital kami menjamin keacakan mutlak, memungkinkan grup permainan untuk menetapkan urutan giliran secara instan dan langsung bermain.' },
    {
      type: 'stats',
      items: [
        { value: '100% Acak', label: 'Pemilihan Tidak Bias' },
        { value: '2 Detik', label: 'Pemicu Hitung Mundur' },
        { value: 'Multisentuh', label: 'Kompatibel dengan Seluler' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Aturan Permainan Meja vs. Pengacak Digital: Revolusi Sentuhan', level: 2 },
    { type: 'paragraph', html: 'Banyak buku aturan permainan papan modern menyertakan aturan pemain awal tematik, seperti "pemain termuda bermain pertama," "orang terakhir yang mengunjungi peternakan bermain pertama," atau "pemain tertinggi bermain pertama." Meskipun menghibur selama permainan awal, aturan ini dengan cepat menjadi repetitif, statis, dan tidak adil bagi kelompok bermain reguler. Pengacak fisik seperti lemparan dadu atau pengambilan kartu menambah waktu persiapan dan rentan terhadap bias manusia atau pengocokan yang buruk. Mekanik pemilih jari memecahkan masalah ini dengan menawarkan pengacak cepat berbasis sentuhan-dan-tahan yang memilih pemain awal dalam hitungan detik tanpa memerlukan kartu atau dadu tambahan.' },
    {
      type: 'table',
      headers: ['Metode Pemilihan', 'Kecepatan dan Persiapan', 'Kualitas Keacakan', 'Paling Cocok Untuk'],
      rows: [
        ['Aturan Buku Panduan Sewenang-wenang', 'Instan, tetapi repetitif', 'Tidak ada keacakan setelah permainan pertama', 'Permainan keluarga dan pesta'],
        ['Lemparan Dadu', 'Perlu mencari dan melempar dadu, rawan seri', 'Keacakan tinggi, tetapi melelahkan untuk grup besar', 'Wargame dan RPG'],
        ['Pengambilan Kartu', 'Perlu mengocok dan membagikan', 'Keacakan baik, tetapi memerlukan kartu fisik', 'Deck-builder dan permainan kartu'],
        ['Pemilih Jari Sentuh', 'Instan, tanpa persiapan, animasi visual', 'Keacakan algoritmik absolut', 'Semua permainan meja dan papan'],
      ],
    },
    {
      type: 'tip',
      title: 'Mengoptimalkan Pengaturan Pemilih Multisentuh Anda',
      html: 'Untuk pengalaman terbaik dalam Mode Jari, letakkan tablet atau ponsel cerdas Anda secara datar di tengah meja. Minta semua pemain meletakkan satu jari dengan jelas di atas kanvas. Hitung mundur akan diatur ulang jika seorang pemain mengangkat atau menggeser jarinya, mencegah pemilihan yang tidak disengaja dan memastikan konsensus mutlak sebelum pemilih berjalan.',
    },
    {
      type: 'title',
      text: 'Memilih Alat Anda: Pemilih Jari Sentuh vs. Roulette Putar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tergantung pada pengaturan perangkat keras dan lingkungan Anda, Anda dapat beralih di antara dua mode tata letak yang berbeda yang dirancang untuk memaksimalkan ruang layar dan aksesibilitas:' },
    {
      type: 'proscons',
      title: 'Membandingkan Mode Pemilihan',
      items: [
        {
          pro: 'Mode Jari menawarkan pengalaman yang sangat cepat dan taktil, memungkinkan hingga 10 pemain meletakkan jari secara bersamaan.',
          con: 'Memerlukan layar yang mendukung sentuhan seperti ponsel cerdas atau tablet.',
        },
        {
          pro: 'Mode Roulette beroperasi di laptop, desktop, atau layar proyektor mana pun, menjadikannya ideal untuk sesi virtual dan malam permainan jarak jauh.',
          con: 'Memerlukan klik untuk menempatkan pin secara manual sebelum memicu putaran.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Optimasi Visual: Jaring Multisentuh vs. Roda yang Melambat',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pemilih Multisentuh',
          description: 'Melacak beberapa titik sentuh berbeda di layar. Menggambar jaring koneksi neon dan lingkaran hitung mundur yang menyusut di sekitar setiap jari, yang berpuncak pada ledakan perayaan.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Pelacakan sentuh simultan',
            'Pemeriksaan tahan-dan-lepaskan taktil',
            'Ledakan partikel spektakuler',
          ],
        },
        {
          title: 'Roda Roulette Putar',
          description: 'Menempatkan pin pemain berwarna di sekitar titik pusat matematis. Memutar roda sektor berwarna yang melambat secara alami menggunakan gesekan simulasi sebelum menunjuk pemenang.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Penyelarasan berbasis centroid',
            'Fisika perlambatan berbasis gesekan',
            'Dukungan mouse desktop universal',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Keunggulan Pemain Pertama (FPA)',
          definition: 'Bias urutan giliran dalam permainan papan di mana pemain awal mendapatkan keunggulan signifikan secara statistik dalam pemilihan tindakan atau kontrol sumber daya.',
        },
        {
          term: 'Protokol Pemilihan Sentuhan',
          definition: 'Interaksi sentuh-dan-tahan di mana semua peserta meletakkan jari mereka di layar sentuh sampai satu pemenang dipilih secara acak.',
        },
        {
          term: 'Fisika Perlambatan',
          definition: 'Rutinitas animasi matematis yang menerapkan pengali gesekan pada roda yang berputar untuk mensimulasikan inersia alami dan membangun antisipasi.',
        },
        {
          term: 'Perhitungan Centroid',
          definition: 'Titik pusat yang dihitung dari sekumpulan pin koordinat yang tersebar, digunakan sebagai poros rotasi untuk grafis roda roulette.',
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
      'name': 'Pemilih Pemain Pertama & Pemilih Jari',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menggunakan Pemilih Pemain Pertama',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
