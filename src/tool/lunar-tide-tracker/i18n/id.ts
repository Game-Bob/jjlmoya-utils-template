import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'pelacak-fase-bulan',
  title: 'Kalkulator Fase Bulan untuk TTRPG: Lacak Bulan Fantasi dan Siklus Pasang Surut',
  description: 'Hitung fase bulan untuk dunia fantasi apa pun dengan periode orbital kustom. Lacak hingga tiga bulan sekaligus, lihat ramalan 10 hari, dan dapatkan tingkat pasang surut gabungan untuk sistem sihir dan cuaca di D&D, Pathfinder, atau TTRPG lainnya.',
  ui: {
    title: 'Pelacak Fase Bulan dan Pasang Surut Mistis',
    moonsTitle: 'Konfigurasi bulan',
    addMoon: 'Tambah bulan',
    removeMoon: 'Hapus bulan',
    moonName: 'Nama bulan',
    orbitalPeriod: 'Periode orbital (hari)',
    startingOffset: 'Offset awal (hari)',
    timelineTitle: 'Kontrol waktu',
    currentDay: 'Hari kampanye saat ini',
    tideTitle: 'Status Pasang Surut Mistis',
    tideLevel: 'Tingkat energi pasang surut',
    magicModifier: 'Efek sihir pasang surut',
    forecastTitle: 'Ramalan fase bulan dan pasang surut',
    dayLabel: 'Hari',
    resetButton: 'Reset ke hari 0',
    presetTitle: 'Preset kampanye',
    presetSingle: 'Bulan klasik',
    presetDouble: 'Bulan kembar sihir',
    presetTriple: 'Alam gerhana tiga',
    newMoon: 'Bulan baru',
    waxingCrescent: 'Sabit awal',
    firstQuarter: 'Kuartal pertama',
    waxingGibbous: 'Gibbous awal',
    fullMoon: 'Bulan purnama',
    waningGibbous: 'Gibbous akhir',
    lastQuarter: 'Kuartal terakhir',
    waningCrescent: 'Sabit akhir',
  },
  seo: [
    { type: 'title', text: 'Cara Melacak Fase Bulan dalam Kampanye TTRPG Fantasi', level: 2 },
    { type: 'paragraph', html: 'Sebagian besar dunia fantasi memiliki bulan dengan periode orbital yang berbeda dari siklus bulan nyata selama 29,5 hari. Bidang <strong>Periode Orbital</strong> menentukan berapa hari game yang dibutuhkan satu bulan untuk menyelesaikan satu siklus penuh. Setel ini sesuai lore dunia Anda atau pilih angka antara 5 hingga 60 hari.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Bulan sekaligus' },
        { value: '10', label: 'Hari ramalan' },
        { value: '5', label: 'Status pasang surut' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Fungsi Bidang Offset Awal', level: 2 },
    { type: 'paragraph', html: 'Bidang <strong>Offset Awal</strong> menggeser posisi awal fase bulan pada hari ke-0 kampanye. Offset 0 berarti mulai dari bulan baru. Offset setengah periode orbital berarti mulai dari bulan purnama. Gunakan ini untuk mencocokkan fase yang digambarkan dalam adegan pembuka kampanye Anda.' },
    { type: 'title', text: 'Arti Tingkat Pasang Surut dalam Permainan', level: 2 },
    { type: 'paragraph', html: 'Tingkat pasang surut menggabungkan gaya tarik gravitasi semua bulan aktif berdasarkan fase saat ini. <strong>Pasang purnama</strong> (di atas 75%) terjadi ketika bulan hampir sejajar. <strong>Pasang perbani</strong> (di bawah 30%) terjadi ketika bulan berada di fase yang berlawanan. Kaitkan ini dengan mekanik apa pun: bonus DC mantra, ambang transformasi manusia serigala, atau tingkat keparahan badai.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Bulan tunggal',
          description: 'Ideal untuk setting yang mirip dunia nyata atau dengan satu bulan dominan. Siklus 8 fase yang sederhana.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Forgotten Realms (Selune, 30 hari)',
            'Kampanye manusia serigala dan licantropi',
            'Sesi horor yang terkait bulan purnama'
          ]
        },
        {
          title: 'Bulan kembar',
          description: 'Umum dalam high fantasy. Menciptakan keselarasan parsial yang sering dan pasang surut menarik di tengah siklus.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28h + Aryth 12h)',
            'Musim gerhana yang dapat diprediksi',
            'Cocok untuk sistem sihir druidik'
          ]
        },
        {
          title: 'Tiga bulan',
          description: 'Keselarasan tiga bulan yang langka menciptakan lonjakan tak terduga. Berguna secara dramatis untuk peristiwa sihir liar.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Tabel sihir liar saat keselarasan',
            'Kompleksitas gaya Golarion Pathfinder',
            'Siklus periode panjang untuk kampanye epik'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Periode Orbital Umum untuk Dunia Fantasi', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: 'Periode orbital 30 hari, bulan tunggal. Gunakan offset 15 untuk memulai dari bulan purnama pada sesi pertama.' },
        { term: 'Bulan Eberron', definition: 'Eberron memiliki 12 bulan dengan periode 9 hingga 28 hari. Gunakan dua bulan yang paling relevan dengan plot sebagai instansi terpisah.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion memiliki satu bulan, Somal, dengan siklus 29 hari. Bulan kedua berperiode pendek dapat memodelkan peristiwa Permadani Gelap.' },
        { term: 'Dunia kustom', definition: 'Bulan 15 hari menghasilkan 24 bulan purnama per tahun game. Bulan 45 hari menghasilkan sekitar 8. Siklus lebih pendek berarti lebih banyak peristiwa tetapi bobotnya lebih ringan.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tips: Mengatur Fase Tertentu untuk Sesi 1',
      icon: 'mdi:information-outline',
      badge: 'TIPS PENGATURAN',
      html: 'Jika kampanye Anda dimulai dengan sabit bulan, atur offset sekitar 20% dari periode orbital. Untuk bulan purnama, gunakan 50% periode sebagai offset. Contoh: bulan 28 hari yang dimulai purnama menggunakan offset 14. Majukan penghitung hari ke hari kampanye saat ini dan ramalan akan menampilkan 10 hari berikutnya secara otomatis.'
    }
  ],
  faq: [
    { question: 'Periode orbital apa yang harus digunakan untuk dunia fantasi saya?', answer: 'Jika setting Anda tidak menentukannya, 28 hingga 30 hari cocok untuk bulan tunggal. Untuk beberapa bulan, pilih periode yang bukan kelipatan sederhana satu sama lain agar keselarasan tidak terlalu sering terjadi.' },
    { question: 'Bagaimana cara membuat dua bulan sejajar pada momen tertentu dalam kampanye?', answer: 'Atur kedua bulan dengan nilai offset yang sama. Mereka akan sejajar kembali pada setiap kelipatan persekutuan dari dua periode tersebut. Untuk memisahkan posisi awalnya, beri bulan kedua offset setengah periode orbitalnya.' },
    { question: 'Apa arti pasang purnama dalam mekanik permainan?', answer: 'Pasang purnama berarti semua bulan aktif menghasilkan energi pasang surut maksimum. Gunakan ini untuk memicu lonjakan sihir liar, meningkatkan jangkauan mantra penyembuhan, atau menandainya sebagai malam sakral bagi faksi keagamaan.' },
    { question: 'Apa arti pasang perbani dalam mekanik permainan?', answer: 'Pasang perbani terjadi ketika bulan saling menetralkan sebagian. Cocok untuk efek antimagis, ketenangan total di laut, atau antagonis yang membutuhkan penekanan sihir yang dapat diprediksi.' },
    { question: 'Bisakah ini digunakan untuk Call of Cthulhu atau kampanye horor?', answer: 'Ya. Gunakan bulan 29 hari dan atur offset agar bulan purnama jatuh pada klimaks sesi. Pelacak pasang surut dapat mewakili pengaruh Mythos atau puncak kepekaan psikis.' },
    { question: 'Bagaimana cara kerja ramalan 10 hari?', answer: 'Ramalan menampilkan fase bulan setiap bulan aktif sebagai titik berwarna untuk masing-masing dari 10 hari kampanye berikutnya. Persentase yang ditampilkan adalah tingkat pasang surut gabungan.' },
    { question: 'Bisakah saya melacak bulan dengan siklus sangat pendek, seperti 7 hari?', answer: 'Ya. Atur periode orbital ke 7. Bulan akan menyelesaikan satu siklus penuh setiap minggu waktu game. Berguna untuk dunia di mana sihir lunar direset mingguan.' },
    { question: 'Bagaimana cara mencocokkan fase bulan dari modul petualangan yang diterbitkan?', answer: 'Tentukan pada hari ke berapa dalam siklus fase yang digambarkan berada, bagi dengan periode orbital, dan gunakan hasilnya sebagai offset. Contoh: kuartal pertama pada hari ke-0 dari siklus 28 hari berarti offset 7.' }
  ],
  bibliography,
  howTo: [
    { name: 'Atur periode orbital', text: 'Masukkan jumlah hari game yang dibutuhkan bulan Anda untuk menyelesaikan satu siklus penuh sesuai lore dunia.' },
    { name: 'Atur offset awal', text: 'Geser fase awal dengan nilai offset dalam hari. Setengah periode orbital setara dengan bulan purnama di hari 0.' },
    { name: 'Majukan penghitung hari', text: 'Gunakan tombol langkah atau slider untuk mencapai hari kampanye saat ini dan baca fase serta tingkat pasang surut.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Fase Bulan untuk TTRPG: Lacak Bulan Fantasi dan Siklus Pasang Surut',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Periode orbital apa yang harus digunakan?', 'acceptedAnswer': { '@type': 'Answer', 'text': '28 hingga 30 hari cocok untuk bulan tunggal. Untuk beberapa bulan, pilih periode yang bukan kelipatan sederhana satu sama lain.' } },
        { '@type': 'Question', 'name': 'Apa arti pasang purnama dalam permainan?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pasang purnama menghasilkan energi maksimum. Gunakan untuk lonjakan sihir liar atau malam sakral bagi faksi keagamaan.' } }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Melacak Fase Bulan dalam Kampanye TTRPG',
      'step': [
        { '@type': 'HowToStep', 'name': 'Atur periode orbital', 'text': 'Masukkan jumlah hari game untuk satu siklus penuh.' },
        { '@type': 'HowToStep', 'name': 'Atur offset awal', 'text': 'Setengah periode orbital setara bulan purnama di hari 0.' },
        { '@type': 'HowToStep', 'name': 'Majukan penghitung', 'text': 'Gunakan slider untuk mencapai hari kampanye saat ini.' }
      ]
    }
  ]
};
export default content;
