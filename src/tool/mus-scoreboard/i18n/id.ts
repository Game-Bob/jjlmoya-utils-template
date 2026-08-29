import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Beri nama kedua pasangan pemain, atur aturan meja, lalu ketuk batu saat setiap putaran dihitung.',
  pairOneLabel: 'Pasangan satu',
  pairTwoLabel: 'Pasangan dua',
  pairOneDefault: 'Meja Utara',
  pairTwoDefault: 'Meja Selatan',
  targetPointsLabel: 'Target poin per permainan',
  targetPointsHint: 'Pilih batas poin untuk setiap permainan (30, 40, atau 50 poin).',
  gamesToWinLabel: 'Permainan untuk memenangkan vaca',
  gamesToWinHint: 'Pasangan pertama yang mencapai jumlah ini memenangkan seluruh pertandingan.',
  deckLabel: 'Dek kartu meja',
  deckHint: 'Dek kartu Spanyol (Baraja española) adalah pilihan tradisional. Jika menggunakan dek Prancis, buang kartu 8, 9, dan 10.',
  spanishDeck: 'Baraja española (Dek Spanyol)',
  frenchDeck: 'Dek Prancis',
  frenchDeckNotice: 'Jangan lupa membuang kartu 8, 9, dan 10 dari dek Prancis agar bermain dengan 40 kartu. Jack adalah Sota, Queen adalah Caballo, dan King adalah Rey.',
  pointsOption30: '30 poin',
  pointsOption40: '40 poin',
  pointsOption50: '50 poin',
  gamesOption1: '1 permainan',
  gamesOption2: '2 permainan',
  gamesOption3: '3 permainan',
  startMatch: 'Buka papan skor',
  matchSettings: 'Atur pasangan dan aturan',
  liveMatch: 'Pertandingan berlangsung',
  targetLabel: 'poin per permainan',
  gameLabel: 'permainan',
  gamePlural: 'permainan',
  vacaLabel: 'permainan untuk menang',
  scoreLabel: 'Batu saat ini',
  handLabel: 'Pilih pasangan mana yang memegang hand (Mano)',
  handSelected: 'memegang hand (Mano).',
  stonesLabel: 'Pencatat poin',
  stoneSingular: 'batu (piedra)',
  stonePlural: 'batu (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'poin menuju target',
  addStone: 'batu',
  addAmarraco: 'amarraco',
  closeGame: 'Tutup permainan',
  closeGamePrompt: 'Konfirmasi bahwa pasangan ini memenangkan permainan dan mulai permainan berikutnya?',
  confirmationTitle: 'Konfirmasi tindakan meja',
  confirmAction: 'Konfirmasi',
  cancelAction: 'Lanjutkan bermain',
  undo: 'Batal',
  resetMatch: 'Reset pertandingan',
  resetMatchPrompt: 'Reset pertandingan saat ini dan hapus riwayat skor?',
  historyTitle: 'Catatan poin terbaru',
  noHistory: 'Belum ada catatan poin.',
  matchReady: 'Meja siap dimainkan.',
  closeGameHint: 'Pasangan telah mencapai target poin. Konfirmasi pemenang permainan.',
  waitingForScore: 'Lanjutkan perhitungan. Sisa poin untuk pemimpin:',
  gameWon: 'Permainan selesai.',
  vacaWon: 'Vaca dimenangkan! Mulai pertandingan baru saat meja siap.',
  gameClosed: 'menutup permainan.',
  pointsAdded: 'mendapatkan',
  matchSaved: 'Skor disimpan di perangkat ini.',
  lastAction: 'Tindakan terakhir',
  settingsApplied: 'Aturan baru diterapkan. Pertandingan direset.',
  pairNameRequired: 'Beri nama kedua pasangan sebelum membuka papan skor.',
  visualScoreLabel: 'Papan skor digital Mus dengan batu, amarracos, dan permainan',
};

const faq = [
  {
    question: 'Apa saja yang dicatat oleh papan skor Mus online ini?',
    answer: 'Papan skor ini mencatat dua pasangan pemain, batu (poin tunggal), amarracos (blok 5 poin), permainan yang dimenangkan (chicos), kemenangan vaca, pemegang hand (Mano), serta riwayat perolehan poin.',
  },
  {
    question: 'Mengapa batu dan amarracos ditampilkan secara terpisah?',
    answer: 'Satu batu (Piedra) bernilai 1 poin dan satu Amarraco bernilai 5 batu. Tampilan terpisah memudahkan pencocokan dengan penanda fisik seperti biji-bijian atau koin di meja permainan.',
  },
  {
    question: 'Apakah bisa bermain dengan target 30, 40, atau 50 poin?',
    answer: 'Ya. Anda dapat memilih target 30, 40, atau 50 poin per permainan sebelum membuka papan skor. Perhitungan otomatis menyesuaikan target yang dipilih.',
  },
  {
    question: 'Bagaimana cara menyelesaikan permainan yang sudah mencapai target?',
    answer: 'Saat pasangan mencapai target poin, tombol tutup permainan akan aktif. Setelah dikonfirmasi, 1 nilai permainan akan ditambahkan dan jumlah batu direset ke nol.',
  },
  {
    question: 'Apakah data pertandingan akan tersimpan jika halaman disegarkan?',
    answer: 'Ya. Pengaturan pertandingan, nama pasangan, jumlah batu, dan riwayat skor tersimpan secara lokal di peramban perangkat Anda.',
  },
  {
    question: 'Apakah papan skor ini memaksakan aturan daerah tertentu?',
    answer: 'Tidak. Permainan Mus memiliki berbagai variasi lokal. Papan skor digital ini berfokus mencatat skor secara presisi dan menyerahkan aturan Isyarat kepada para pemain.',
  },
  {
    question: 'Bagaimana menyesuaikan dek kartu Prancis untuk permainan Mus?',
    answer: 'Keluarkan kartu 8, 9, dan 10 agar dek tersisa 40 kartu. Kartu Jack berfungsi sebagai Sota, Queen sebagai Caballo, dan King sebagai Rey.',
  },
];

const howTo = [
  {
    name: 'Masukkan nama pasangan',
    text: 'Isi nama kedua pasangan pemain agar mudah dikenali di meja pertandingan.',
  },
  {
    name: 'Atur target poin dan vaca',
    text: 'Pilih 30, 40, atau 50 poin per permainan serta jumlah permainan yang dibutuhkan untuk memenangkan vaca.',
  },
  {
    name: 'Hitung batu dan amarracos',
    text: 'Tekan batu (+1) atau amarraco (+5) setiap kali poin dimenangkan pada ronde pertandingan.',
  },
  {
    name: 'Konfirmasi pemenang permainan',
    text: 'Saat target poin tercapai, konfirmasi pemenang untuk mencatat kemenangan permainan dan mereset batu.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Papan Skor Mus Online',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Papan skor digital cepat untuk mencatat batu, amarracos, dan permainan dalam kartu Mus Spanyol.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara mencatat skor dalam permainan kartu Mus',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'papan-skor-mus-online',
  title: 'Papan Skor Mus Online untuk Pertandingan Langsung',
  description: 'Papan skor digital langsung untuk permainan kartu Spanyol Mus. Catat batu, amarracos, permainan, dan vaca dengan cepat di meja Anda.',
  ui,
  seo: [
    { type: 'title', text: 'Pencatatan Skor Mus yang Jelas dan Praktis di Meja', level: 2 },
    { type: 'paragraph', html: 'Mus adalah permainan kartu tradisional Spanyol yang penuh dinamika dan gertakan. Karena poin dihitung dengan cepat pada setiap babak, papan skor digital ini membantu mencegah kesalahan pencatatan di meja.' },
    { type: 'title', text: 'Tentukan Target Poin Sebelum Pembagian Kartu', level: 2 },
    { type: 'paragraph', html: 'Meskipun standar umum menggunakan 40 poin, beberapa pertandingan dimainkan dengan target 30 atau 50 poin. Atur target terlebih dahulu agar perhitungan di layar selaras dengan aturan meja Anda.' },
    {
      type: 'table',
      headers: ['Pengaturan', 'Fungsi', 'Rekomendasi Penggunaan'],
      rows: [
        ['30 poin', 'Permainan singkat', 'Pertandingan cepat atau turnamen kilat'],
        ['40 poin', 'Permainan standar', 'Format tradisional santai bersama teman'],
        ['50 poin', 'Permainan panjang', 'Pertandingan penuh strategi dan jangkauan poin lebih luas'],
      ],
    },
    { type: 'tip', title: 'Sepakati Aturan Meja Secara Jelas', html: 'Sebelum mengocok kartu, pastikan seluruh pemain menyepakati aturan 8 King dan 8 Ace serta siapa yang memegang penanda fisik.' },
    { type: 'title', text: 'Penyesuaian Kartu Dek Spanyol dan Prancis', level: 2 },
    { type: 'paragraph', html: 'Dek Spanyol tradisional (40 kartu) adalah standar asli Mus. Jika menggunakan dek Prancis, buang kartu 8, 9, dan 10. Kartu Jack menjadi Sota, Queen menjadi Caballo, dan King menjadi Rey.' },
    { type: 'title', text: 'Pencatatan Poin Digital Langsung di Sisi Meja', level: 2 },
    { type: 'paragraph', html: 'Tampilan utama memperlihatkan total poin secara jelas. Baris di bawahnya otomatis mengonversi angka tersebut ke dalam bentuk amarracos dan batu tunggal untuk pemeriksaan cepat.' },
    { type: 'list', items: ['<strong>Batu (Piedra):</strong> 1 poin tunggal.', '<strong>Amarraco:</strong> Penanda bernilai 5 batu.', '<strong>Permainan (Chico):</strong> Putaran yang dimenangkan saat mencapai target poin.', '<strong>Vaca:</strong> Kemenangan akhir pertandingan setelah mencapai jumlah permainan yang ditentukan.'] },
    { type: 'title', text: 'Penutupan Permainan dan Pembatalan Kesalahan', level: 2 },
    { type: 'paragraph', html: 'Ketika target poin tercapai, tombol penutupan permainan aktif. Jika terjadi kesalahan saat memasukkan poin, gunakan tombol Batal untuk mengembalikan kondisi skor sebelumnya.' },
    { type: 'tip', title: 'Gunakan Tombol Batal Saat Salah Catat', html: 'Jika poin salah dimasukkan ke pasangan lawan, segera tekan tombol Batal untuk mengembalikan skor tanpa mengganggu jalannya pertandingan.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
