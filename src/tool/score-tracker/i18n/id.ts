import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Pelacak Skor',
  addPlayer: 'Tambah Pemain',
  removePlayer: 'Hapus',
  renamePlayer: 'Ubah Nama',
  startRound: 'Mulai Ronde 1',
  nextRound: 'Ronde Berikutnya',
  resetGame: 'Atur Ulang Permainan',
  undoRound: 'Batalkan Ronde Terakhir',
  playerLabel: 'Pemain',
  scoreLabel: 'Skor',
  roundLabel: 'Ronde',
  totalLabel: 'Total',
  rankLabel: 'Peringkat',
  leaderboardTitle: 'Papan Peringkat',
  historyTitle: 'Riwayat Skor',
  noPlayersHint: 'Tambahkan pemain untuk mulai mencatat skor',
  playerNamePlaceholder: 'Nama pemain',
  confirmLabel: 'Konfirmasi',
  cancelLabel: 'Batal',
  deleteRoundConfirm: 'Hapus ronde terakhir?',
  playerAdded: 'Pemain ditambahkan',
  playerRemoved: 'Pemain dihapus',
  roundStarted: 'Ronde dimulai',
  gameReset: 'Permainan telah diatur ulang',
  noRoundsYet: 'Belum ada ronde yang tercatat',
  currentRoundLabel: 'Ronde Saat Ini',
  scoringTitle: 'Penilaian Ronde',
  resetAllLabel: 'Atur Ulang Semua',
  confirmResetAll: 'Ini akan menghapus semua pemain dan skor. Apakah Anda yakin?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'pelacak-skor',
  title: 'Pelacak Skor: Pencatat Skor Multipemain dan Manajer Papan Peringkat',
  description: 'Lacak skor untuk permainan meja apa pun. Tambahkan pemain, catat skor ronde demi ronde, dan saksikan papan peringkat diperbarui secara real-time dengan peringkat otomatis.',
  ui,
  seo: [
    { type: 'title', text: 'Pencatatan Skor Permainan Papan: Cara Melacak Skor Tanpa Kesalahan', level: 2 },
    { type: 'paragraph', html: 'Mencatat skor dalam permainan papan tampak sederhana sampai Anda memasuki ronde kelima dan seseorang menyadari ada kesalahan hitung. Baik Anda bermain Wingspan, Terraforming Mars, Catan, atau permainan poin kemenangan lainnya, pencatatan skor yang akurat adalah pembeda antara permainan yang adil dan pertengkaran. Pelacak skor digital menghilangkan kesalahan aritmetika, menampilkan peringkat langsung, dan menyimpan riwayat lengkap setiap ronde sehingga Anda dapat memverifikasi perhitungan akhir.' },
    {
      type: 'stats',
      items: [
        { value: 'Tak Terbatas', label: 'Pemain Didukung' },
        { value: 'Real-Time', label: 'Pembaruan Papan Peringkat' },
        { value: 'Tak Terbatas', label: 'Ronde Tercatat' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Kesalahan Pencatatan Skor Umum dan Cara Menghindarinya', level: 2 },
    { type: 'paragraph', html: 'Kesalahan paling sering adalah lupa menambahkan bonus akhir ronde atau salah menjumlahkan kolom angka. Saat Anda melacak skor secara digital, total berjalan diperbarui secara otomatis setelah setiap entri. Ini berarti Anda dapat menangkap kesalahan saat angka terlihat janggal, daripada menemukannya di akhir permainan ketika tidak ada yang ingat nilai yang benar. Fitur riwayat ronde memungkinkan Anda memeriksa ronde sebelumnya dan memperbaiki kesalahan tanpa memulai ulang seluruh permainan.' },
    {
      type: 'tip',
      title: 'Tips Cepat Pencatatan Skor',
      html: 'Masukkan skor segera setelah setiap ronde berakhir selagi semua orang masih ingat hasilnya. Gunakan label pemain deskriptif seperti warna atau nama faksi, bukan nama asli, untuk permainan dengan peran tersembunyi. Saat bermain dengan anak-anak, biarkan mereka menekan tombol sendiri agar tetap terlibat dalam proses pencatatan skor.',
    },
    {
      type: 'title',
      text: 'Penilaian Per Ronde vs Total Akhir Saja',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Skor Per Ronde vs Hanya Skor Akhir',
      items: [
        {
          pro: 'Anda dapat melihat siapa yang memimpin di setiap tahap permainan dan bagaimana momentum berubah.',
          con: 'Memerlukan entri data setelah setiap ronde, bukan sekali di akhir.',
        },
        {
          pro: 'Kesalahan mudah ditemukan karena Anda dapat memeriksa entri ronde individu berdasarkan ingatan.',
          con: 'Membutuhkan sedikit lebih banyak waktu selama sesi permainan.',
        },
        {
          pro: 'Pemain dapat memverifikasi skor ronde mereka sendiri, mengurangi perselisihan dan membangun kepercayaan.',
          con: 'Berfungsi paling baik jika satu orang mengelola perangkat atau pemain bergiliran.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Permainan dengan Sistem Skor yang Tidak Biasa',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Permainan Poin Kemenangan',
          description: 'Sebagian besar eurogame menggunakan poin kemenangan yang diberikan sepanjang permainan. Tantangannya adalah melacak berbagai sumber VP: sumber daya, pencapaian, bonus akhir permainan. Pelacak digital memungkinkan Anda memasukkan poin saat diperoleh dan melihat total berjalan.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Lacak beberapa kategori skor',
            'Perhitungan bonus akhir permainan',
            'Penyelesaian seri instan',
          ],
        },
        {
          title: 'Permainan dengan Skor Negatif',
          description: 'Beberapa permainan menghukum pemain dengan poin negatif untuk tindakan tertentu. Pencatat skor digital menangani nilai negatif secara alami, mewarnainya merah sehingga hukumannya langsung terlihat. Ini sangat berguna dalam permainan trik atau permainan deduksi dengan mekanisme penalti.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Penanganan negatif otomatis',
            'Indikator penalti visual',
            'Total kumulatif yang akurat',
          ],
        },
        {
          title: 'Permainan Kampanye',
          description: 'Permainan legacy dan kampanye membawa skor melintasi beberapa sesi. Tanpa pelacak, Anda perlu menyimpan catatan kertas di antara malam permainan. Alat digital menjaga skor kampanye Anda tetap terorganisir dan memungkinkan Anda meninjau bagaimana keputusan memengaruhi peringkat keseluruhan.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Pelacakan kampanye persisten',
            'Perbandingan antar sesi',
            'Rincian sesi per sesi',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glosarium Pencatatan Skor',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Poin Kemenangan (VP)',
          definition: 'Unit skor standar di sebagian besar permainan papan modern. Pemain memperoleh VP melalui tindakan, dan siapa pun yang memiliki VP terbanyak saat permainan berakhir, menang.',
        },
        {
          term: 'Penilaian Per Ronde',
          definition: 'Mencatat skor di akhir setiap ronde, bukan hanya di akhir permainan. Ini menciptakan riwayat terperinci dan memudahkan pemeriksaan kesalahan.',
        },
        {
          term: 'Papan Peringkat',
          definition: 'Peringkat langsung yang menunjukkan posisi setiap pemain berdasarkan skor total. Papan peringkat mengurut ulang secara otomatis saat skor baru dimasukkan.',
        },
        {
          term: 'Skor Negatif',
          definition: 'Sistem skor di mana pemain bisa kehilangan poin melalui penalti atau tindakan gagal, menghasilkan total negatif. Pelacak digital menangani ini tanpa kesalahan pengurangan manual.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cara Menangani Skor yang Disengketakan',
      icon: 'mdi:information-outline',
      badge: 'TIPS PERMAINAN',
      html: 'Ketika seorang pemain mempertanyakan skor, jangan mengubahnya segera. Pertama periksa riwayat ronde untuk mengonfirmasi apa yang dimasukkan. Jika entri salah, gunakan tombol +/- untuk memperbaikinya dan total akan diperbarui secara otomatis. Jika entri ronde benar tetapi pemain tidak setuju, riwayat memberikan catatan objektif yang dapat ditinjau bersama oleh semua orang.',
    },
  ],
  faq: [
    {
      question: 'Berapa banyak pemain yang bisa saya lacak?',
      answer: 'Tidak ada batasan. Tambahkan pemain sebanyak yang didukung permainan Anda, dan ubah nama mereka kapan saja selama sesi.',
    },
    {
      question: 'Bisakah saya membatalkan kesalahan?',
      answer: 'Ya. Gunakan tombol Batalkan Ronde Terakhir untuk menghapus ronde skor terbaru, yang secara otomatis akan menghitung ulang semua total dan peringkat.',
    },
    {
      question: 'Apakah pelacak skor menyimpan data saya?',
      answer: 'Pelacak skor berjalan sepenuhnya di peramban Anda. Data bertahan selama sesi saat ini. Menyegarkan halaman akan mengatur ulang semua skor.',
    },
    {
      question: 'Bagaimana cara kerja papan peringkat?',
      answer: 'Papan peringkat mengurutkan pemain berdasarkan skor total secara menurun. Peringkat diperbarui secara otomatis saat Anda memasukkan atau mengubah skor di setiap ronde.',
    },
    {
      question: 'Bisakah saya melacak skor negatif?',
      answer: 'Ya. Tombol +/- memungkinkan penyesuaian positif dan negatif, membuatnya cocok untuk permainan dengan poin penalti atau mekanisme pengurangan.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Tambahkan Pemain',
      text: 'Masukkan nama pemain menggunakan input Tambah Pemain. Anda dapat menambah atau menghapus pemain kapan saja selama permainan.',
    },
    {
      name: 'Mulai Penilaian',
      text: 'Klik Mulai Ronde untuk memulai ronde penilaian baru. Gunakan tombol +/- untuk menyesuaikan skor setiap pemain untuk ronde tersebut.',
    },
    {
      name: 'Lihat Peringkat',
      text: 'Papan peringkat diperbarui secara otomatis. Jelajahi tab Riwayat Skor untuk meninjau entri ronde sebelumnya.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pelacak Skor & Pencatat Skor',
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
          'name': 'Berapa banyak pemain yang bisa saya lacak?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tidak ada batasan. Tambahkan pemain sebanyak yang didukung permainan Anda, dan ubah nama mereka kapan saja selama sesi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bisakah saya membatalkan kesalahan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya. Gunakan tombol Batalkan Ronde Terakhir untuk menghapus ronde skor terbaru, yang secara otomatis akan menghitung ulang semua total dan peringkat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apakah pelacak skor menyimpan data saya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pelacak skor berjalan sepenuhnya di peramban Anda. Data bertahan selama sesi saat ini. Menyegarkan halaman akan mengatur ulang semua skor.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana cara kerja papan peringkat?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Papan peringkat mengurutkan pemain berdasarkan skor total secara menurun. Peringkat diperbarui secara otomatis saat Anda memasukkan atau mengubah skor di setiap ronde.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bisakah saya melacak skor negatif?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya. Tombol +/- memungkinkan penyesuaian positif dan negatif, membuatnya cocok untuk permainan dengan poin penalti atau mekanisme pengurangan.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menggunakan Pelacak Skor',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Tambahkan Pemain',
          'text': 'Masukkan nama pemain menggunakan input Tambah Pemain. Anda dapat menambah atau menghapus pemain kapan saja selama permainan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Mulai Penilaian',
          'text': 'Klik Mulai Ronde untuk memulai ronde penilaian baru. Gunakan tombol +/- untuk menyesuaikan skor setiap pemain untuk ronde tersebut.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lihat Peringkat',
          'text': 'Papan peringkat diperbarui secara otomatis. Jelajahi tab Riwayat Skor untuk meninjau entri ronde sebelumnya.',
        },
      ],
    },
  ],
};
