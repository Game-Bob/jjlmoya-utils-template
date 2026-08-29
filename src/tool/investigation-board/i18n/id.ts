import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "pembuat-papan-konspirasi",
  title: "Pembuat Papan Konspirasi: Peta Penyelidikan & Hubungan RPG Detektif Online",
  description: "Rancang papan konspirasi interaktif dan peta penyelidikan RPG. Hubungkan karakter, petunjuk, dan lokasi dengan benang hubungan berwarna.",
  ui: {
  "title": "Pembuat Papan Konspirasi",
  "addCard": "Tambah Kartu",
  "searchPlaceholder": "Cari kartu berdasarkan nama atau petunjuk",
  "filterAll": "Semua Kategori",
  "filterCharacter": "Karakter",
  "filterClue": "Petunjuk",
  "filterLocation": "Lokasi",
  "filterItem": "Item",
  "cardName": "Nama Kartu",
  "cardCategory": "Kategori",
  "cardDescription": "Deskripsi",
  "cardNotes": "Catatan Pribadi",
  "cardTags": "Tag dipisahkan dengan koma",
  "cardColor": "Warna Sorotan Kartu",
  "save": "Simpan Perubahan",
  "delete": "Hapus",
  "cancel": "Batal",
  "clearBoard": "Bersihkan Papan",
  "connectionsTitle": "Peta Hubungan",
  "addConnection": "Tambah Koneksi",
  "connectionLabel": "Label Hubungan",
  "connectionColor": "Warna Garis",
  "sourceCard": "Dari Kartu",
  "targetCard": "Ke Kartu",
  "close": "Tutup",
  "character": "Karakter",
  "clue": "Petunjuk",
  "location": "Lokasi",
  "item": "Item",
  "custom": "Kustom",
  "immersive": "Layar Penuh"
},
  seo: [
    { type: 'title', text: "Pembuat Papan Konspirasi Online: Atur Petunjuk RPG Detektif & Peta Hubungan", level: 2 },
    { type: 'paragraph', html: "Memecahkan jaringan kebohongan yang rumit, melacak alibi tersangka, dan menghubungkan bukti TKP dapat membingungkan kelompok RPG detektif. Baik Anda menjalankan kampanye Call of Cthulhu, misteri pembunuhan Cyberpunk, pencarian detektif D&D, atau menulis novel thriller, pembuat papan konspirasi online kami adalah alat terbaik. Seret, lepas, kategorikan, dan hubungkan petunjuk, NPC, dan bukti fisik di papan gabus digital tanpa batas. Gunakan benang hubungan berkode warna untuk langsung melihat bagaimana tersangka terkait dengan TKP, alibi, dan motif tersembunyi, menghilangkan catatan kertas yang berantakan dan membuat pemain tetap fokus." },
    {
      type: 'stats',
      items: [
        { value: "Tanpa Batas", label: "Papan Node" },
        { value: "4", label: "Kategori" },
        { value: "Seret dan Lepas", label: "Antarmuka" }
      ],
      columns: 3
    },
    { type: 'title', text: "Tips Menyusun Peta Penyelidikan RPG Detektif Anda", level: 2 },
    { type: 'tip', title: "Aturan Tiga Petunjuk", html: "Untuk setiap kesimpulan atau deduksi yang ingin dicapai pemain, tambahkan setidaknya tiga petunjuk berbeda ke papan penyelidikan. Hubungkan mereka menggunakan benang berwarna kustom untuk menunjukkan garis penalaran alternatif. Gunakan kartu Karakter untuk tersangka dan saksi, Lokasi untuk TKP, dan Item untuk bukti fisik atau dokumen. Perbarui catatan pribadi seiring penemuan pemain." },
    { type: 'title', text: "Papan Konspirasi Digital vs Papan Gabus Fisik", level: 2 },
    {
      type: 'proscons',
      title: "Papan Konspirasi Digital vs Papan Gabus Fisik",
      items: [
        { pro: "Ukuran papan tidak terbatas untuk menambahkan sebanyak mungkin petunjuk dan hubungan karakter tanpa batas ruang.", con: "Memerlukan layar, tablet, atau perangkat digital selama sesi permainan meja berlangsung." },
        { pro: "Pencarian cepat dan filter kategori untuk menemukan saksi atau petunjuk tertentu selama sesi berlangsung.", con: "Kehilangan sensasi fisik dari benang merah asli dan pin pada dinding nyata." },
        { pro: "Simpan, muat, dan bagikan peta secara digital tanpa memakan ruang fisik di antara malam permainan.", con: "Membutuhkan akses internet atau penyimpanan lokal browser untuk menyimpan status papan." }
      ]
    },
    { type: 'title', text: "Memilih Kategori Kartu untuk Peta Misteri Anda", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Node Karakter",
          description: "Mewakili NPC, tersangka, saksi, atau organisasi. Sorot hubungan dengan garis berwarna.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Lacak alibi tersangka dan motif",
            "Hubungkan hubungan keluarga dan faksi",
            "Catat detail kesaksian saksi"
          ]
        },
        {
          title: "Node Petunjuk",
          description: "Mewakili bukti fisik, laporan otopsi, alibi, atau rumor yang ditemukan pemain selama kampanye.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Laporan otopsi dan analisis forensik",
            "Barang fisik yang ditemukan di TKP",
            "Rumor yang didengar dan rahasia"
          ]
        },
        {
          title: "Node Lokasi",
          description: "Tempat kejadian perkara, rumah tersangka, tempat persembunyian, atau kota.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Foto tempat kejadian perkara dan denah",
            "Tempat tinggal karakter kunci",
            "Tempat persembunyian rahasia dan portal"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Glosarium Pemetaan Konspirasi", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Node Penyelidikan", definition: "Setiap kartu di kanvas yang mewakili orang, lokasi, petunjuk, atau item." },
        { term: "Benang Hubungan", definition: "Garis berwarna yang menghubungkan dua kartu, menunjukkan hubungan di antara keduanya (misalnya: Tersangka, Alibi, Pemilik)." },
        { term: "Mode Imersif", definition: "Tata letak layar penuh yang menyembunyikan panel kontrol untuk memaksimalkan ruang kerja pada seluler atau tablet." },
        { term: "Jalur Sorot", definition: "Jalur visual yang hanya menampilkan node dan garis yang terhubung dari kartu yang dipilih, meredupkan bagian papan lainnya." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Tips Kinerja untuk Perangkat Seluler",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Jika menyeret node terasa lambat pada tablet lama, aktifkan mode imersif untuk menyembunyikan menu. Pastikan grid snapping aktif (kartu menempel setiap 15px) agar papan tetap rapi dengan usaha minimal."
    }
  ],
  faq: [
    { question: "Bagaimana cara menambahkan garis koneksi?", answer: "Klik Tambah Koneksi di panel kontrol, atau klik ikon tautan pada kartu lalu pilih kartu target." },
    { question: "Bisakah saya menyeret kartu di seluler?", answer: "Ya, papan ini mendukung interaksi sentuh untuk menyeret dan memindahkan kartu dengan lancar di smartphone dan tablet." },
    { question: "Bisakah saya menggunakan warna kartu kustom?", answer: "Ya. Klik dua kali kartu, pilih Kustom di bawah Kategori, dan pilih warna sorotan." },
    { question: "Apakah papan menyimpan pekerjaan saya?", answer: "Ya. Kemajuan Anda disimpan secara otomatis di penyimpanan lokal browser Anda." },
    { question: "Bagaimana cara memperbesar dan menggeser papan?", answer: "Gunakan gerakan cubit untuk memperbesar atau roda mouse. Seret latar belakang untuk menggeser papan." }
  ],
  bibliography,
  howTo: [
    { name: "Tambah Kartu Penyelidikan", text: "Buat kartu yang mewakili NPC, petunjuk, TKP, atau item." },
    { name: "Tautkan Hubungan", text: "Buat garis koneksi antarkartu untuk menunjukkan hubungan petunjuk." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Pembuat Papan Konspirasi: Peta Penyelidikan & Hubungan RPG Detektif Online",
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
          'name': "Bagaimana cara menambahkan garis koneksi?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klik Tambah Koneksi di panel kontrol, atau klik ikon tautan pada kartu lalu pilih kartu target."
          }
        },
        {
          '@type': 'Question',
          'name': "Bisakah saya menyeret kartu di seluler?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ya, papan ini mendukung interaksi sentuh untuk menyeret dan memindahkan kartu dengan lancar di smartphone dan tablet."
          }
        },
        {
          '@type': 'Question',
          'name': "Bisakah saya menggunakan warna kartu kustom?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ya. Klik dua kali kartu, pilih Kustom di bawah Kategori, dan pilih warna sorotan."
          }
        },
        {
          '@type': 'Question',
          'name': "Apakah papan menyimpan pekerjaan saya?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ya. Kemajuan Anda disimpan secara otomatis di penyimpanan lokal browser Anda."
          }
        },
        {
          '@type': 'Question',
          'name': "Bagaimana cara memperbesar dan menggeser papan?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Gunakan gerakan cubit untuk memperbesar atau roda mouse. Seret latar belakang untuk menggeser papan."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Cara Menggunakan Pembuat Papan Konspirasi",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Tambah Kartu Penyelidikan",
          'text': "Buat kartu yang mewakili NPC, petunjuk, TKP, atau item."
        },
        {
          '@type': 'HowToStep',
          'name': "Tautkan Hubungan",
          'text': "Buat garis koneksi antarkartu untuk menunjukkan hubungan petunjuk."
        }
      ]
    }
  ]
};
