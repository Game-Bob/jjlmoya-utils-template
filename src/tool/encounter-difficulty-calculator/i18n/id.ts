import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Atur grup dan ancaman. Kalkulator mengukur pertarungan terhadap ambang batas D&D 5e 2014.',
  partySection: 'Grup',
  partyLevel: 'Tingkat karakter',
  partyLevelHint: 'Gunakan tingkat rata-rata untuk grup dengan karakter berlevel serupa.',
  partySize: 'Karakter',
  partySizeHint: 'Aturan menyesuaikan pengganda monster untuk grup sangat kecil atau besar.',
  threatSection: 'Ancaman',
  monsterCr: 'Peringkat tantangan monster (CR)',
  monsterCrHint: 'Pilih CR dari satu monster yang sejenis. Grup campuran memerlukan perhitungan terpisah.',
  moreCr: 'Tampilkan CR lebih tinggi',
  lessCr: 'Tampilkan lebih sedikit CR',
  monsterCount: 'Jumlah monster',
  monsterCountHint: 'Lebih banyak makhluk meningkatkan tekanan aksi meskipun XP dasar rendah.',
  presets: 'Mulai dengan adegan',
  presetClassic: 'Patroli klasik',
  presetBoss: 'Bos tunggal',
  presetSwarm: 'Kawanan anak buah',
  resultSection: 'Tekanan pertarungan',
  belowEasyHint: 'Adegan ringan untuk menghemat sumber daya sebelum tantangan berikutnya.',
  easyHint: 'Adegan yang mudah dikelola dengan sedikit tekanan pada grup.',
  mediumHint: 'Ujian berarti yang dapat menghabiskan poin HP atau sumber daya.',
  hardHint: 'Adegan berbahaya di mana taktik dan pilihan sumber daya sangat penting.',
  deadlyHint: 'Sinyal tekanan mematikan. Periksa rute melarikan diri dan medan.',
  adjustedXp: 'XP Disesuaikan',
  baseXp: 'XP Dasar',
  multiplier: 'Pengganda grup',
  partyThreshold: 'Ambang Menengah',
  belowEasy: 'Di bawah mudah',
  easy: 'Mudah',
  medium: 'Menengah',
  hard: 'Sulit',
  deadly: 'Mematikan',
  warning: 'Perhatian',
  partyAdjustment: 'Pengganda telah disesuaikan karena grup memiliki kurang dari tiga atau lebih dari lima karakter.',
  highCr: 'Monster dengan CR di atas tingkat grup dapat menjatuhkan karakter dengan cepat.',
  manyMonsters: 'Sebelas monster atau lebih membuat pertarungan jauh lebih rumit untuk dikelola.',
  rulesNote: 'Perkiraan sesuai aturan D&D 5e 2014. Tidak memperhitungkan medan atau taktik.',
  rulesLinkLabel: 'Baca aturan sumber',
  reset: 'Atur ulang ke contoh',
  xpUnit: 'XP',
  sceneLabel: 'Tampilan visual tekanan pertarungan',
  partyMarker: 'Grup',
  threatMarker: 'Ancaman',
};

const faq = [
  {
    question: 'Aturan apa yang digunakan kalkulator kesulitan pertarungan ini?',
    answer: 'Alat ini menggunakan metode resmi D&D 5e 2014 dari Aturan Dasar, membandingkan ambang batas grup dengan XP monster yang disesuaikan.',
  },
  {
    question: 'Mengapa XP yang disesuaikan berbeda dari XP imbalan monster?',
    answer: 'Aturan mengalikan total XP monster untuk mencerminkan bahaya beberapa makhluk yang bertindak dalam putaran yang sama.',
  },
  {
    question: 'Bisakah saya menggunakannya untuk grup monster campuran?',
    answer: 'Gunakan sebagai perkiraan cepat untuk monster sejenis. Untuk grup campuran, jumlahkan XP setiap makhluk dan terapkan pengganda.',
  },
  {
    question: 'Apakah hasil mematikan berarti grup pasti akan mati?',
    answer: 'Tidak. Mematikan berarti XP yang disesuaikan mencapai ambang mematikan. Medan, taktik, dan mantra dapat mengubah hasil sebenarnya.',
  },
  {
    question: 'Mengapa ukuran grup mengubah pengganda?',
    answer: 'Aturan Dasar menyarankan peningkatan pengganda untuk grup kurang dari tiga karakter dan pengurangannya untuk enam karakter atau lebih.',
  },
];

const howTo = [
  {
    name: 'Atur tingkat grup',
    text: 'Pilih tingkat rata-rata karakter dalam grup.',
  },
  {
    name: 'Atur ukuran grup',
    text: 'Masukkan jumlah karakter yang memasuki pertarungan.',
  },
  {
    name: 'Jelaskan ancaman',
    text: 'Pilih peringkat tantangan (CR) dan jumlah monster.',
  },
  {
    name: 'Baca tekanan',
    text: 'Bandingkan XP yang disesuaikan dengan rentang ambang resmi.',
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
  name: 'Kalkulator Kesulitan Pertarungan D&D 5e',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Hitung kesulitan pertarungan D&D 5e 2014 berdasarkan tingkat, ukuran grup, CR monster, jumlah, dan ambang batas resmi.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara menghitung kesulitan pertarungan D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'kalkulator-kesulitan-pertarungan-dnd-5e',
  title: 'Kalkulator Kesulitan Pertarungan D&D 5e',
  description: 'Estimasi tekanan pertarungan D&D 5e 2014 menggunakan tingkat grup, ukuran, CR monster, XP yang disesuaikan, dan ambang batas resmi.',
  ui,
  seo: [
    { type: 'title', text: 'Evaluasi kesulitan pertarungan sebelum inisiatif dimulai', level: 2 },
    { type: 'paragraph', html: 'Pertarungan D&D lebih dari sekadar angka di samping monster. Kalkulator ini mengubah ukuran grup, tingkat, CR, dan jumlah monster menjadi nilai XP yang disesuaikan menurut aturan D&D 5e 2014. Hasil visual memperlihatkan dengan jelas posisi pertarungan terhadap ambang batas mudah, sedang, sulit, dan mematikan.' },
    { type: 'title', text: 'Cara kerja rumus pertarungan D&D 5e', level: 2 },
    { type: 'paragraph', html: 'Metode ini menjumlahkan ambang XP setiap karakter untuk setiap tingkat kesulitan, lalu menerapkan pengganda pada total XP monster. Grup dengan kurang dari tiga karakter menggunakan pengganda satu tingkat lebih tinggi, sedangkan grup enam karakter atau lebih menggunakan pengganda satu tingkat lebih rendah.' },
    {
      type: 'table',
      headers: ['Sinyal', 'Hal yang perlu diperiksa di meja'],
      rows: [
        ['Di bawah mudah', 'Pertarungan berfungsi sebagai pemanasan atau penghematan sumber daya.'],
        ['Mudah', 'Grup biasanya menang tanpa menghabiskan banyak sumber daya.'],
        ['Menengah', 'Harapkan tekanan sedang dan setidaknya satu keputusan penting tentang sumber daya.'],
        ['Sulit', 'Rencanakan kehilangan poin HP dan slot mantra.'],
        ['Mematikan', 'Periksa taktik, medan, dan rute melarikan diri.'],
      ],
    },
    { type: 'title', text: 'Mengapa jumlah monster sangat penting', level: 2 },
    { type: 'paragraph', html: 'Beberapa monster menimbulkan bahaya lebih besar daripada XP dasar mereka karena melakukan lebih banyak serangan dan reaksi dalam satu putaran. Oleh karena itu sepasang makhluk menggunakan pengganda lebih tinggi dibanding satu makhluk dengan kombinasi XP sama.' },
    { type: 'tip', title: 'Anggap CR tinggi sebagai peringatan khusus', html: 'Monster dengan CR di atas tingkat grup dapat menjatuhkan karakter dalam satu aksi kuat. Periksa kerusakan dan efek kontrol ketimbang hanya mengandalkan label kesulitan.' },
    { type: 'title', text: 'Gunakan hasil sebagai bantuan persiapan', level: 2 },
    { type: 'paragraph', html: 'Sebelum menyiapkan pertarungan sulit atau mematikan, evaluasi lingkungan, kejutan, dan kondisi umum grup. Ruangan sempit, perlindungan, jebakan, dan mantra konsentrasi dapat menggeser bahaya sebenarnya di meja permainan.' },
    { type: 'tip', title: 'Grup monster campuran', html: 'Jumlahkan XP dasar setiap makhluk dan terapkan pengganda pada jumlah total monster.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
