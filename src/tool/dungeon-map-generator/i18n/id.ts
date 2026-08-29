import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Pilih seed, atur kisi, dan pilih gaya arsitektur. Buat peta yang terhubung untuk catatan, cetakan, atau meja virtual Anda.',
  seedLabel: 'Seed peta',
  seedHint: 'Gunakan seed yang sama dengan pengaturan serupa untuk membuat ulang peta yang persis sama.',
  randomSeed: 'Seed baru',
  sizeLabel: 'Ukuran ekspedisi',
  sizeCompact: 'Satu sesi (One-shot)',
  sizeSession: 'Sesi standar',
  sizeStronghold: 'Benteng besar',
  fineTuneGrid: 'Pengaturan kisi dan kepadatan',
  columnsLabel: 'Kolom',
  rowsLabel: 'Baris',
  densityLabel: 'Kepadatan ruangan',
  densityHint: 'Kepadatan lebih tinggi menambah lebih banyak ruang dan area lantai.',
  styleLabel: 'Arsitektur peta',
  dungeonStyle: 'Dungeon batu',
  dungeonStyleHint: 'Ruangan batu dengan koridor lebar tunggal.',
  cavernStyle: 'Gua alam',
  cavernStyleHint: 'Ruang tidak teratur dengan tepi melengkung.',
  scifiStyle: 'Sci-Fi',
  scifiStyleHint: 'Modul luas dengan koridor penghubung ganda.',
  generate: 'Buat peta ini',
  mapRegionLabel: 'Peta dungeon yang dihasilkan dan kontrol ekspor',
  connectedBadge: 'Semua ruangan terhubung',
  roomsLabel: 'Ruangan',
  doorsLabel: 'Pintu',
  floorLabel: 'Cakupan lantai',
  legendFloor: 'Lantai dapat dilalui',
  legendWall: 'Dinding padat',
  legendDoor: 'Pintu atau pintu kedap',
  editHint: 'Klik kanan sel untuk mengedit',
  editCell: 'Edit sel ini',
  paintFloor: 'Lantai',
  paintWall: 'Dinding',
  paintDoor: 'Pintu',
  mapData: 'Data peta',
  copyLink: 'Salin tautan peta',
  linkCopied: 'Tautan disalin',
  exportPng: 'Unduh PNG',
  exportSvg: 'Unduh SVG',
  exportJson: 'Simpan JSON',
  importJson: 'Buka JSON',
  importError: 'Berkas ini tidak berisi konfigurasi peta dungeon yang valid.',
  compactMap: 'Eksplorasi tegang',
  balancedMap: 'Ekspedisi seimbang',
  sprawlingMap: 'Benteng terbuka',
  compactHint: 'Jalur transisi lebih panjang menyisakan lebih banyak area tak diketahui.',
  balancedHint: 'Ruangan dan koridor berbagi tata letak dengan seimbang.',
  sprawlingHint: 'Cakupan lantai luas mendukung pertempuran dan pergerakan cepat.',
  mapReady: 'Legenda peta',
  dimensionsUnit: 'sel kisi',
};

const faq = [
  {
    question: 'Apakah seed yang sama selalu menghasilkan peta dungeon yang sama?',
    answer: 'Ya. Seed, dimensi kisi, kepadatan, dan gaya arsitektur membentuk konfigurasi deterministik. Menggunakan kembali keempat pengaturan akan merekonstruksi ruangan dan pintu yang persis sama.',
  },
  {
    question: 'Apakah semua ruangan yang dihasilkan dapat dijangkau?',
    answer: 'Ya. Ruangan dihubungkan melalui rute utama setelah penempatan, memastikan setiap area lantai yang dapat dilalui terhubung dalam satu peta.',
  },
  {
    question: 'Apa perbedaan antara gaya dungeon, gua, dan Sci-Fi?',
    answer: 'Gaya dungeon menggunakan ruangan batu teratur. Gua membentuk ruang alami yang tidak teratur. Gaya Sci-Fi mengutamakan modul luas dengan koridor penghubung ganda.',
  },
  {
    question: 'Format apa yang sebaiknya diekspor untuk meja virtual (VTT)?',
    answer: 'PNG adalah pilihan paling sederhana untuk sebagian besar VTT. SVG tetap tajam pada skala apa pun dan mudah diedit di perangkat lunak vektor.',
  },
  {
    question: 'Bisakah orang lain membuat ulang peta dungeon acak saya?',
    answer: 'Ya. Salin tautan peta atau kirim berkas JSON. Penerima dapat langsung memuat konfigurasi yang sama tanpa akun.',
  },
  {
    question: 'Apakah generator ini menambahkan monster, jebakan, atau harta karun?',
    answer: 'Tidak. Generator ini membuat denah arsitektur netral agar Anda dapat mengisinya sesuai aturan permainan masing-masing.',
  },
];

const howTo = [
  {
    name: 'Atur dimensi kisi',
    text: 'Pilih jumlah kolom dan baris yang sesuai dengan ruang catatan atau meja virtual Anda.',
  },
  {
    name: 'Pilih arsitektur',
    text: 'Pilih dungeon, gua, atau Sci-Fi, lalu sesuaikan kepadatan ruangan.',
  },
  {
    name: 'Buat dan periksa',
    text: 'Masukkan seed, buat peta, dan periksa ringkasan ruangan, pintu, dan cakupan lantai.',
  },
  {
    name: 'Ekspor atau bagikan',
    text: 'Unduh PNG atau SVG untuk dimainkan, atau simpan konfigurasi melalui tautan atau berkas JSON.',
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
  name: 'Pembuat Peta Dungeon Acak',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Pembuat peta dungeon acak deterministik dengan ruangan terhubung, pintu, dan ekspor lokal.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara membuat peta dungeon terhubung',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'pembuat-peta-dungeon-acak',
  title: 'Pembuat Peta Dungeon Acak untuk Game RPG Tabletop',
  description: 'Buat peta dungeon, gua, dan Sci-Fi yang dapat direproduksi dengan ruangan terhubung, pintu, dan ekspor PNG/SVG.',
  ui,
  seo: [
    { type: 'title', text: 'Buat Peta Dungeon Siap Pakai dengan Seed yang Dapat Digunakan Kembali', level: 2 },
    { type: 'paragraph', html: 'Peta dungeon acak yang berguna membutuhkan lebih dari sekadar elemen visual acak. Setiap ruangan harus dapat dijangkau, kisi harus sesuai dengan permukaan permainan, dan hasilnya harus dapat dipulihkan kapan saja. Pembuat peta ini memperlakukan seed dan kontrol sebagai spesifikasi peta deterministik ringkas.' },
    { type: 'title', text: 'Pilih Dimensi Kisi untuk Cetakan dan Meja Virtual', level: 2 },
    { type: 'paragraph', html: 'Menentukan ukuran kisi adalah langkah praktis pertama. Kisi kecil mudah dicetak di kertas untuk petualangan singkat, sedangkan peta besar memberikan ruang untuk eksplorasi kompleks dan banyak faksi. Gambar yang diekspor mempertahankan sel persegi sempurna untuk disesuaikan dengan kisi VTT.' },
    {
      type: 'table',
      headers: ['Ukuran kisi', 'Penggunaan umum', 'Kepadatan awal', 'Catatan perencanaan'],
      rows: [
        ['20 x 16 sel', 'Petualangan singkat (One-shot)', '35 hingga 45', 'Mudah dicetak dan dibaca dengan cepat'],
        ['36 x 26 sel', 'Dungeon sesi standar', '45 hingga 55', 'Ritme seimbang antara ruangan dan koridor'],
        ['52 x 38 sel', 'Kompleks multi-sesi', '50 hingga 65', 'Ruang luas untuk banyak faksi dan rute opsional'],
      ],
    },
    { type: 'tip', title: 'Sesuaikan Peta dengan Skala Pertempuran', html: 'Hitung sel yang dibutuhkan untuk pertempuran utama sebelum memilih ukuran total. Dungeon besar dengan ruangan kecil akan terasa sempit, sedangkan denah ringkas dengan satu ruangan utama yang luas akan menciptakan momen berkesan.' },
    { type: 'title', text: 'Pahami Cakupan Lantai sebagai Ritme Permainan', level: 2 },
    { type: 'paragraph', html: 'Cakupan lantai menunjukkan persentase area yang dapat dilalui. Cakupan rendah menekankan area tak diketahui dan ketegangan eksplorasi. Cakupan sedang memberikan eksplorasi yang lancar. Cakupan tinggi menciptakan kompleks benteng di mana pertempuran dapat meluas ke ruangan sekitar.' },
    {
      type: 'list',
      items: [
        '<strong>Eksplorasi tegang:</strong> manfaatkan ruang kosong untuk memberi kesan terisolasi atau jalan rahasia.',
        '<strong>Ekspedisi seimbang:</strong> selang-selingkan ruangan investigasi dengan koridor penghubung.',
        '<strong>Benteng terbuka:</strong> siapkan rute patroli dan pertempuran yang saling terhubung.',
      ],
    },
    { type: 'title', text: 'Ubah Denah Netral Menjadi Lokasi Petualangan', level: 2 },
    { type: 'paragraph', html: 'Peta yang dihasilkan hanya menyediakan arsitektur dasar. Berikan peran naratif pada setiap ruangan utama dan tempatkan petunjuk, jebakan, serta harta karun sesuai kebutuhan.' },
    { type: 'tip', title: 'Simpan Konfigurasi Sebelum Menambahkan Catatan', html: 'Salin tautan peta atau simpan berkas JSON sebelum mencatat pertempuran agar Anda memiliki salinan bersih untuk pemain tanpa membocorkan rahasia Game Master.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
