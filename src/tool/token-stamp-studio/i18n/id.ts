import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Pilih bingkai',
  frameHint: 'Pilih siluet yang menunjukkan siapa karakter ini sebelum orang lain membaca namanya.',
  randomFrame: 'Bingkai acak',
  surfaceLegend: 'Warnai token',
  backgroundLabel: 'Latar belakang',
  borderLabel: 'Bingkai',
  textLabel: 'Teks',
  overlayLabel: 'Warna lapisan',
  randomColors: 'Warna acak',
  borderWidthLabel: 'Ketebalan bingkai',
  opacityLabel: 'Opasitas bingkai',
  overlayOpacityLabel: 'Opasitas potret',
  stageLabel: 'Arena pembuat token',
  chooseImage: 'Pilih potret',
  positionHint: 'Geser potret atau label langsung di atas token.',
  markerName: 'Nama penanda',
  markerNamePlaceholder: 'Beri nama penanda ini',
  textLegend: 'Tambah detail yang mudah dibaca',
  textHint: 'Gunakan label singkat seperti nama, level, peran, atau kondisi. Geser label ke posisi yang pas.',
  textPlaceholder: 'Nama karakter atau peran',
  addText: 'Tambah label',
  removeText: 'Hapus label',
  textSizeLabel: 'Ukuran huruf',
  alignmentLabel: 'Rataan label',
  alignLeft: 'Rata kiri',
  alignCenter: 'Rata tengah',
  alignRight: 'Rata kanan',
  imageLegend: 'Atur potret',
  imageZoomLabel: 'Zoom potret',
  scaleLabel: 'Skala ekspor',
  savedMarkers: 'Penanda tersimpan',
  noSavedMarkers: 'Penanda tersimpan akan muncul di sini untuk dibuka kembali dan diedit kapan saja.',
  reuseMarker: 'Pilih penanda untuk membukanya kembali.',
  deleteMarker: 'Hapus penanda',
  newMarker: 'Penanda baru',
  download: 'Unduh PNG',
  copy: 'Salin PNG',
  downloadBatch: 'Unduh masal',
  batchLabel: 'Ekspor masal lanjutan',
  batchHint: 'Opsional: ekspor beberapa potret sekaligus dengan bingkai dan warna saat ini.',
  chooseBatch: 'Pilih potret masal',
  batchReady: '{count} potret siap dibuat.',
  noImage: 'Belum ada potret yang dimuat',
  noText: 'Belum ada label. Tambahkan detail yang dibutuhkan kelompok Anda.',
  tokenDetails: 'Kontrol token karakter',
  exportHint: 'Gambar PNG transparan di luar siluet pilihan Anda, siap digunakan di VTT atau cetakan.',
};

const faq = [
  {
    question: 'Kriteria potret yang bagus untuk token karakter?',
    answer: 'Pilih gambar dengan wajah yang jelas dan kontras yang cukup terhadap bingkai. Potongan kepala dan bahu biasanya tetap mudah dibaca saat token berukuran kecil di meja virtual.',
  },
  {
    question: 'Bagaimana cara mengatur posisi potret di dalam bingkai?',
    answer: 'Masukkan gambar lalu geser langsung di atas token. Gunakan zoom potret untuk memperbesar wajah tanpa mengubah bingkai atau label.',
  },
  {
    question: 'Bisakah saya menambahkan nama dan level karakter?',
    answer: 'Bisa. Tambahkan beberapa label singkat, atur ukuran serta ratapannya, lalu geser ke posisi yang mudah dibaca.',
  },
  {
    question: 'Apakah PNG hasil ekspor mempertahankan latar belakang transparan?',
    answer: 'Ya. Latar belakang di luar siluet pilihan tetap transparan sehingga mudah diletakkan di atas peta permainan.',
  },
  {
    question: 'Bisakah saya membuat token untuk seluruh anggota tim sekaligus?',
    answer: 'Bisa. Gunakan fitur ekspor masal untuk memproses beberapa potret sekaligus dengan gaya bingkai yang sama.',
  },
  {
    question: 'Di mana penanda tersimpan saya disimpan?',
    answer: 'Penanda disimpan secara lokal di memori peramban perangkat Anda dan tidak diunggah ke server luar.',
  },
];

const howTo = [
  { name: 'Pilih siluet karakter', text: 'Mulai dengan bingkai yang sesuai: lingkaran untuk pahlawan, segi enam untuk taktis, atau bintang untuk bos.' },
  { name: 'Masukkan dan atur potret', text: 'Pilih gambar lalu posisikan wajah agar pas di dalam bingkai dengan mengatur zoom.' },
  { name: 'Tambahkan label penting', text: 'Beri nama singkat, peran, atau kondisi karakter agar mudah dibaca di meja permainan.' },
  { name: 'Simpan dan ekspor ke PNG', text: 'Unduh file PNG transparan yang siap dipakai di aplikasi VTT atau dicetak.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'Buat token karakter RPG meja yang mudah dibaca dengan bingkai khusus, label, latar transparan, dan ekspor masal PNG.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara membuat token karakter RPG meja',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'pembuat-token-karakter-rpg-meja',
  title: 'Pembuat Token Karakter RPG Meja Online',
  description: 'Buat token karakter RPG meja yang mudah dibaca dengan bingkai khusus, label, latar transparan, dan ekspor masal PNG.',
  ui,
  seo: [
    { type: 'title', text: 'Buat token karakter yang jelas dan mudah dibaca di peta permainan', level: 2 },
    { type: 'paragraph', html: 'Token adalah alat komunikasi visual yang sangat penting di meja permainan RPG. Siluetnya memberi tahu seluruh kelompok apakah mereka sedang melihat pahlawan, monster, efek sihir, atau lokasi penting sebelum ada yang memperbesar layar. Mulailah dengan memilih bingkai yang sesuai dengan karakter, lalu pastikan potret dan label tetap mudah dibaca pada skala ukuran yang digunakan meja virtual Anda.' },
    { type: 'title', text: 'Pilih bingkai yang tepat sesuai peran dan jenis karakter', level: 2 },
    { type: 'list', items: ['<strong>Lingkaran atau cincin:</strong> pilihan standar yang andal untuk karakter pemain dan sekutu utama.', '<strong>Segi enam atau segi delapan:</strong> mudah dibedakan dalam pertempuran taktis yang melibatkan banyak unit.', '<strong>Bintang:</strong> sangat cocok untuk musuh utama, bos, atau karakter penting yang membutuhkan perhatian langsung.', '<strong>Awan:</strong> bentuk yang lebih lembut untuk roh, familiars, makhluk gaib, atau entitas mistis.'] },
    { type: 'tip', title: 'Desain untuk tampilan ukuran terkecil saat dimainkan', html: 'Perkecil peta permainan sampai token berukuran hanya beberapa puluh piksel. Jika wajah, bingkai, dan label masih dapat dibedakan dengan jelas, penanda Anda akan berfungsi dengan sangat baik selama pertempuran yang sibuk.' },
    { type: 'title', text: 'Gunakan label singkat dan berguna saat sesi permainan', level: 2 },
    { type: 'paragraph', html: 'Token pertempuran bukanlah pengganti lembar karakter lengkap. Cukup tambahkan satu atau dua fakta yang sering dibutuhkan kelompok: nama pendek, level, peran seperti penyembuh, atau kondisi seperti tertegun. Kalimat yang terlalu panjang hanya akan menjadi gangguan visual dan bersaing dengan gambar potret.' },
    { type: 'title', text: 'Siapkan token untuk seluruh kelompok tanpa kehilangan identitas', level: 2 },
    { type: 'paragraph', html: 'Fitur ekspor masal sangat berguna setelah sesi awal atau saat kelompok mendapatkan sekutu baru dalam kampanye. Pilih satu bingkai dan skema warna untuk seluruh kelompok, lalu biarkan setiap potret mempertahankan kepribadiannya. Bingkai yang konsisten membuat kelompok terasa menyatu sementara wajah setiap karakter tetap langsung dikenali.' },
    { type: 'tip', title: 'Penyimpanan otomatis langsung di perangkat Anda', html: 'Penyimpanan lokal menyimpan posisi pemotongan potret dan label pada perangkat ini. File PNG yang diekspor adalah salinan untuk dimainkan, sedangkan penanda yang tersimpan adalah versi yang dapat dibuka kembali saat karakter mengalami perkembangan.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
