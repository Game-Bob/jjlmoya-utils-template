import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Pengatur Waktu Permainan Papan',
  setupTitle: 'Pengaturan Permainan',
  playerNamePlaceholder: 'Nama pemain',
  addPlayer: 'Tambah Pemain',
  removePlayer: 'Hapus',
  startGame: 'Mulai Game',
  pauseGame: 'Jeda',
  resumeGame: 'Lanjutkan',
  resetGame: 'Atur Ulang',
  nextTurn: 'Akhiri Giliran',
  addTime: '+30d',
  removeTime: '-30d',
  playerLabel: 'Pemain',
  minutesLabel: 'mnt',
  secondsLabel: 'dtk',
  expiredLabel: 'WAKTU HABIS',
  overtimeLabel: 'Waktu Tambahan',
  turnIndicator: 'Giliran Anda',
  warningLowTime: 'Waktu Sedikit',
  pausedOverlay: 'Game Dijeda',
  roundLabel: 'Ronde',
  settingsTitle: 'Pengaturan',
  baseTimeLabel: 'Waktu Dasar',
  incrementLabel: 'Inkremen/Penundaan',
  warningTimeLabel: 'Ambang Peringatan',
  confirmLabel: 'Konfirmasi',
  cancelLabel: 'Batal',
  noPlayersHint: 'Tambahkan minimal 2 pemain untuk memulai',
  addPlayerHint: 'Masukkan nama pemain',
  timeUpLabel: 'Waktu habis!',
  presetsTitle: 'Preset',
  timeControlTitle: 'Kontrol Waktu',
  modeLabel: 'Mode',
  modeNormal: 'Hitung Mundur Normal',
  modeFischer: 'Fischer (Inkremen)',
  modeBronstein: 'Bronstein (Penundaan)',
  modeHourglass: 'Jam Pasir',
  modeTurn: 'Atur Ulang Giliran',
  audioTitle: 'Peringatan Audio',
  soundAlerts: 'Efek Suara',
  playersTitle: 'Pemain',
  playersAdded: 'Pemain Ditambahkan',
  statsTitle: 'Statistik Permainan',
  totalGameTime: 'Total Waktu',
  totalRounds: 'Total Ronde',
  slowestPlayer: 'Pemain Terlambat',
  playerPerformance: 'Analisis Waktu Pemain',
  playAgain: 'Game Baru',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'pengatur-waktu-permainan-papan-catur',
  title: 'Pengatur Waktu Permainan Papan: Jam Catur Duel & Pengelola Giliran',
  description: 'Pantau giliran dan kelola waktu dalam sesi permainan papan Anda dengan pengatur waktu profesional. Mendukung mode jam catur duel, tata letak multipemain, inkremen Fischer, penundaan Bronstein, dan statistik.',
  ui,
  seo: [
    { type: 'title', text: 'Menguasai Tempo Permainan: Bagaimana Kontrol Waktu Profesional Meningkatkan Permainan Papan', level: 2 },
    { type: 'paragraph', html: 'Manajemen waktu adalah komponen penting dalam permainan papan modern. Baik Anda sedang bersaing dalam game pesta yang cepat atau terlibat dalam game strategi yang mendalam, mengatur waktu berpikir memastikan semua peserta memiliki waktu bermain yang adil. Menggunakan metode pengukur waktu profesional seperti inkremen Fischer, penundaan Bronstein, atau mode jam pasir dapat menghilangkan kelumpuhan analisis, menjamin konsistensi tempo permainan, dan menambah dimensi strategis baru di atas papan.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Dukungan Pemain' },
        { value: '5 Mode', label: 'Konfigurasi Waktu' },
        { value: '100ms', label: 'Presisi Mesin' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein, dan Jam Pasir: Penjelasan Kontrol Waktu Tingkat Lanjut', level: 2 },
    { type: 'paragraph', html: 'Pengatur waktu permainan papan profesional kami mendukung beberapa opsi pengaturan waktu yang terinspirasi oleh turnamen kompetitif, menjaga sesi permainan tetap lancar:' },
    {
      type: 'table',
      headers: ['Mode', 'Cara Kerja', 'Paling Cocok Untuk'],
      rows: [
        ['Hitung Mundur Normal', 'Waktu hitung mundur global standar yang dijeda pada akhir giliran.', 'Permainan papan santai dengan cadangan waktu bersama'],
        ['Fischer (Inkremen)', 'Menambahkan sejumlah detik ke jam Anda setelah menyelesaikan giliran.', 'Game strategi berat di mana giliran cepat dapat membangun cadangan waktu'],
        ['Bronstein (Penundaan)', 'Menyediakan jeda waktu sebelum penghitung waktu utama mulai berkurang.', 'Game taktis kompleks di mana giliran administratif singkat bebas biaya waktu'],
        ['Jam Pasir', 'Waktu Anda berkurang sementara waktu lawan bertambah secara waktu nyata.', 'Duel dua pemain yang kompetitif dan pertandingan catur yang intens'],
        ['Atur Ulang Giliran', 'Hitung mundur tetap yang diatur ulang sepenuhnya pada setiap giliran.', 'Game pesta yang cepat, tantangan trivia, dan ronde kilat'],
      ],
    },
    {
      type: 'tip',
      title: 'Menemukan Konfigurasi Waktu yang Ideal',
      html: 'Titik awal yang disarankan adalah mengalokasikan 30-45 detik untuk game pesta ringan, 1-2 menit dengan penundaan Bronstein 5 detik untuk game strategi menengah, dan 30-45 menit dengan inkremen Fischer 10 detik untuk wargame berat atau kampanye taktis.',
    },
    {
      type: 'title',
      text: 'Optimalisasi Visual: Duel Layar Terbagi vs Tombol Giliran Multipemain Tengah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk duel tatap muka, aplikasi secara otomatis menampilkan tata letak jam catur layar terbagi. Tampilan ini memungkinkan pemain memutar belahan layar mereka sebesar 180 derajat untuk kenyamanan melihat dari sisi meja yang berlawanan. Untuk permainan dengan 3 pemain atau lebih, antarmuka berubah menjadi kisi multipemain dengan sorotan pemain aktif, penyesuaian kartu individu, dan tombol besar Akhiri Giliran di tengah area permainan yang bertindak sebagai bel fisik bersama.',
    },
    {
      type: 'proscons',
      title: 'Membandingkan Inkremen Fischer vs Penundaan Bronstein',
      items: [
        {
          pro: 'Inkremen Fischer menghargai permainan cepat dengan menumpuk waktu cadangan untuk giliran berikutnya.',
          con: 'Total waktu permainan bisa menjadi lebih lama jika pemain terus-menerus bermain dengan sangat cepat.',
        },
        {
          pro: 'Penundaan Bronstein mencegah kehilangan waktu pada giliran administrasi singkat tanpa menumpuk cadangan besar.',
          con: 'Memerlukan konfigurasi ambang batas penundaan yang sesuai dengan waktu fisik yang dibutuhkan permainan.',
        },
        {
          pro: 'Mode jam pasir menciptakan ketegangan langsung dalam duel kompetitif dengan menyedot waktu Anda untuk diberikan kepada lawan.',
          con: 'Menjadi rumit secara matematis dan kurang strategis untuk permainan dengan lebih dari dua pemain.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Genre Permainan Papan yang Memanfaatkan Pengatur Waktu Giliran',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Eurogame Strategis',
          description: 'Game penempatan pekerja dan pengelolaan sumber daya di mana kompleksitas giliran bervariasi. Inkremen Fischer membantu pemain mengambil keputusan penting di akhir game tanpa memperlambat ronde awal.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Mengurangi kelumpuhan analisis',
            'Dukungan kompleksitas giliran variabel',
            'Waktu menjadi sumber daya aktif',
          ],
        },
        {
          title: 'Game Pesta & Trivia',
          description: 'Game dengan energi tinggi di mana berpikir cepat adalah bagian dari kesenangan. Pengatur waktu giliran tetap menjaga energi tetap tinggi dan mencegah satu pemain menghentikan alur.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Hitung mundur tetap yang pendek',
            'Menjaga momentum pesta',
            'Memaksa tindakan langsung',
          ],
        },
        {
          title: 'Pertandingan Duel Turnamen',
          description: 'Duel jam catur yang ketat membutuhkan tata letak yang presisi dan dapat diputar untuk memastikan integritas kompetitif di semua ronde turnamen.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            'Rotasi layar 180 derajat',
            'Pelacakan interval 100ms yang akurat',
            'Kondisi sudden death/lembur',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Inkremen Fischer',
          definition: 'Metode kontrol waktu di mana sejumlah detik yang ditentukan ditambahkan ke sisa waktu pemain setelah setiap giliran diselesaikan.',
        },
        {
          term: 'Penundaan Bronstein',
          definition: 'Metode kontrol waktu di mana hitung mundur ditunda selama periode tertentu di awal giliran, mencegah pengurangan waktu jika giliran selesai dengan cepat.',
        },
        {
          term: 'Mode Jam Pasir',
          definition: 'Sistem pengaturan waktu dinamis di mana waktu yang berkurang dari jam seorang pemain langsung ditransfer ke lawan secara waktu nyata.',
        },
        {
          term: 'Kelumpuhan Analisis',
          definition: 'Kondisi terlalu banyak berpikir di mana pemain merasa kewalahan oleh pilihan, menghambat alur permainan dan memengaruhi pemain lain.',
        },
        {
          term: 'Analisis Permainan',
          definition: 'Metrik kinerja pasca-game yang merangkum total ronde yang dilalui, kecepatan berpikir rata-rata, durasi giliran maksimum, dan peringkat giliran terlambat.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Bagaimana cara kerja tata letak mode Duel?',
      answer: 'Saat memulai permainan 2 pemain, antarmuka menampilkan jam catur layar terbagi. Setiap sisi mewakili seorang pemain, dan mengetuk bagian mereka akan mengakhiri giliran. Tampilan dapat diputar 180 derajat untuk pemain yang duduk berhadapan.',
    },
    {
      question: 'Apa perbedaan antara mode Fischer dan Bronstein?',
      answer: 'Mode Fischer menambahkan detik tambahan setelah giliran berakhir, memungkinkan pemain mengumpulkan cadangan waktu. Mode Bronstein memberikan penundaan di awal giliran; jika giliran selesai dalam masa penundaan, tidak ada waktu yang dikurangi.',
    },
    {
      question: 'Apakah aplikasi melacak statistik giliran?',
      answer: 'Ya! Setelah permainan selesai atau waktu habis, modal statistik menampilkan total durasi game, total ronde, waktu rata-rata giliran, waktu giliran maksimum, dan peringkat kecepatan berpikir pemain.',
    },
    {
      question: 'Apakah data pemain disimpan saat halaman dimuat ulang?',
      answer: 'Ya, konfigurasi pemain dan pilihan warna disimpan secara otomatis di penyimpanan lokal browser, memulihkan daftar pemain saat Anda kembali ke halaman.',
    },
    {
      question: 'Dapatkah saya menambah atau mengurangi waktu selama game berlangsung?',
      answer: 'Ya! Dalam mode multipemain, kartu pemain memiliki tombol aksi +30d dan -30d khusus untuk menyesuaikan sisa waktu secara langsung.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Konfigurasikan Pengaturan Game',
      text: 'Pilih preset (Casual, Blitz, Strategis, Jam Pasir) atau tentukan parameter kustom: durasi dasar, inkremen/penundaan, dan batas peringatan.',
    },
    {
      name: 'Kumpulkan dan Simpan Pemain',
      text: 'Masukkan nama pemain dan pilih warna identifikasi. Atur urutan giliran menggunakan kontrol panah; detail disimpan secara otomatis.',
    },
    {
      name: 'Mulai dan Lewati Giliran',
      text: 'Mulai permainan. Dalam mode Duel, ketuk setengah layar Anda untuk mengakhiri giliran. Dalam mode Multipemain, klik tombol besar Akhiri Giliran di tengah.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pengatur Waktu Permainan Papan & Pengelola Giliran',
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
          'name': 'Bagaimana cara kerja tata letak mode Duel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Saat memulai permainan 2 pemain, antarmuka menampilkan jam catur layar terbagi. Setiap sisi mewakili seorang pemain, dan mengetuk bagian mereka akan mengakhiri giliran. Tampilan dapat diputar 180 derajat untuk pemain yang duduk berhadapan.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apa perbedaan antara mode Fischer dan Bronstein?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mode Fischer menambahkan detik tambahan setelah giliran berakhir, memungkinkan pemain mengumpulkan cadangan waktu. Mode Bronstein memberikan penundaan di awal giliran; jika giliran selesai dalam masa penundaan, tidak ada waktu yang dikurangi.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apakah aplikasi melacak statistik giliran?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya! Setelah permainan selesai o waktu habis, modal statistik menampilkan total durasi game, total ronde, waktu rata-rata giliran, waktu giliran maksimum, dan peringkat kecepatan berpikir pemain.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apakah data pemain disimpan saat halaman dimuat ulang?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya, konfigurasi pemain dan pilihan warna disimpan secara otomatis di penyimpanan lokal browser, memulihkan daftar pemain saat Anda kembali ke halaman.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Dapatkah saya menambah atau mengurangi waktu selama game berlangsung?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya! Dalam mode multipemain, kartu pemain memiliki tombol aksi +30d dan -30d khusus untuk menyesuaikan sisa waktu secara langsung.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menggunakan Pengatur Waktu Permainan Papan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Konfigurasikan Pengaturan Game',
          'text': 'Pilih preset (Casual, Blitz, Strategis, Jam Pasir) atau tentukan parameter kustom: durasi dasar, inkremen/penundaan, dan batas peringatan.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Kumpulkan dan Simpan Pemain',
          'text': 'Masukkan nama pemain dan pilih warna identifikasi. Atur urutan giliran menggunakan kontrol panah; detail disimpan secara otomatis.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Mulai dan Lewati Giliran',
          'text': 'Mulai permainan. Dalam mode Duel, ketuk setengah layar Anda untuk mengakhiri giliran. Dalam mode Multipemain, klik tombol besar Akhiri Giliran di tengah.'
        }
      ]
    }
  ],
};
