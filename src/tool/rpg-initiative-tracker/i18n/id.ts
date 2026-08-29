import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Pelacak Inisiatif',
  addCombatant: 'Tambah Petarung',
  removeCombatant: 'Hapus',
  playerLabel: 'Pemain',
  npcLabel: 'NPC',
  initiativeLabel: 'Inisiatif',
  modifierLabel: 'Modifier',
  namePlaceholder: 'Nama karakter',
  initiativePlaceholder: 'Inisiatif',
  modifierPlaceholder: 'Modifier',
  addButton: 'Tambah',
  startCombat: 'Mulai Combat',
  endCombat: 'Akhiri Combat',
  nextTurn: 'Giliran Berikutnya',
  prevTurn: 'Giliran Sebelumnya',
  roundLabel: 'Ronel',
  turnLabel: 'Giliran',
  noCombatants: 'Belum ada petarung. Tambahkan karakter untuk memulai.',
  statusInput: 'Status',
  combatStarted: 'Combat Dimulai!',
  combatEnded: 'Combat Berakhir',
  yourTurn: 'Giliran',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'pelacak-inisiatif',
  title: 'Pelacak Inisiatif RPG: Pengatur Giliran Combat & Inisiatif',
  description: 'Lacak urutan inisiatif untuk RPG meja apa pun. Tambahkan petarung, lempar inisiatif, kelola efek status, dan navigasi giliran dalam combat.',
  ui,
  seo: [
    { type: 'title', text: 'Bagaimana Inisiatif Bekerja di D&D dan RPG Meja Lainnya', level: 2 },
    { type: 'paragraph', html: 'Inisiatif menentukan urutan aksi dalam combat. Setiap peserta melakukan lemparan Dexterity di awal pertarungan, dan urutan giliran berjalan dari tertinggi ke terendah. Pelacak inisiatif digital mengotomatiskan pengurutan, menyorot petarung aktif, melacak efek status yang sedang berlangsung, dan memberi tahu seluruh meja tentang siapa yang mendapat giliran berikutnya. Ini sangat berguna bagi Dungeon Master yang menjalankan pertemuan rumit dengan banyak tipe musuh dan karakter pemain.' },
    {
      type: 'stats',
      items: [
        { value: 'Tak Terbatas', label: 'Petarung Didukung' },
        { value: 'Urut Otomatis', label: 'Berdasarkan Lemparan Inisiatif' },
        { value: 'Real Time', label: 'Pelacakan Giliran' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Aturan Inisiatif Standar untuk D&D 5e', level: 2 },
    { type: 'paragraph', html: 'Di D&D Edisi ke-5, setiap peserta melakukan lemparan Dexterity di awal combat. Pemain melempar secara individu. Dungeon Master melempar sekali untuk setiap kelompok monster identik. Urutan giliran berjalan dari tertinggi ke terendah, lalu kembali ke atas untuk ronde berikutnya. Hasil seri diputuskan oleh skor Dexterity, atau DM yang memutuskan. Pelacak digital menangani semua ini secara otomatis dan menampilkan urutan giliran lengkap secara sekilas.' },
    {
      type: 'table',
      headers: ['Fitur', 'Pelacakan Manual', 'Pelacak Digital'],
      rows: [
        ['Pengurutan', 'Tulis ulang daftar saat inisiatif berubah', 'Urut ulang instan otomatis'],
        ['Giliran Saat Ini', 'Harus dilacak secara lisan atau dengan token', 'Disorot dengan cahaya hijau'],
        ['Efek Status', 'Catatan terpisah atau dadu di dekat mini', 'Klik untuk mengaktifkan pada setiap petarung'],
        ['Penghitungan Ronel', 'Catat di kepala atau kertas coretan', 'Ditampilkan secara otomatis'],
        ['Menambah Saat Combat', 'Hapus dan tulis ulang urutan', 'Disisipkan di posisi yang benar'],
      ],
    },
    {
      type: 'tip',
      title: 'Tips Menjalankan Inisiatif di Meja',
      html: 'Lemparkan inisiatif untuk semua monster sebelum sesi dimulai untuk menghemat waktu selama combat. Tambahkan efek status umum seperti Stunned atau Poisoned ke petarung segera setelah diterapkan. Ini mencegah lupa tentang kondisi saat giliran karakter yang terkena tiba. Gunakan tombol Giliran Sebelumnya untuk meninjau apa yang terjadi jika Anda perlu memeriksa keputusan dari awal ronde.',
    },
    {
      type: 'title',
      text: 'Efek Status yang Biasa Digunakan dalam Combat',
      level: 3,
    },
    { type: 'paragraph', html: 'Melacak kondisi selama combat adalah salah satu tugas yang paling sering terlewatkan. Efek status dapat mengubah efektivitas karakter secara total, dan lupa menghapusnya dapat mengubah keseimbangan pertemuan. Pelacak inisiatif memungkinkan Anda menerapkan dan menghapus kondisi dengan satu klik sehingga tetap terlihat di samping nama petarung.' },
    {
      type: 'proscons',
      title: 'Menangani Efek Status secara Digital vs Manual',
      items: [
        {
          pro: 'Kondisi terlihat tepat di samping nama karakter sehingga tidak ada yang lupa efek yang aktif.',
          con: 'Perlu mengingat untuk mengaktifkan dan menonaktifkan status saat diterapkan dan dihapus.',
        },
        {
          pro: 'Beberapa status dapat aktif pada petarung yang sama dan semuanya ditampilkan bersama.',
          con: 'Pelacak tidak menerapkan efek aturan secara otomatis, DM tetap menerapkannya.',
        },
        {
          pro: 'Status dapat ditambahkan di tengah combat tanpa berhenti untuk menulis di lembar karakter.',
          con: 'Hanya tag status yang telah ditentukan yang tersedia secara bawaan.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sistem Inisiatif Alternatif',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Inisiatif Standar',
          description: 'Setiap petarung melempar sekali di awal. Urutan yang sama berulang setiap ronde. Sederhana dan dapat diprediksi, tetapi urutan tetap setelah lemparan pertama. Berfungsi baik untuk sebagian besar grup dan ukuran pertemuan.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Mudah dipelajari dan diajarkan', 'Urutan giliran tetap setiap ronde', 'Berfungsi untuk ukuran grup apa pun'],
        },
        {
          title: 'Inisiatif Sisi',
          description: 'Semua karakter pemain bertindak bersama, lalu semua musuh bertindak bersama. Umum di edisi lama dan game OSR. Mempercepat combat dengan mengurangi pelacakan individual tetapi mengurangi nuansa taktis.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Resolusi combat tercepat', 'Mendorong koordinasi kelompok', 'Variasi giliran individu lebih sedikit'],
        },
        {
          title: 'Varian Faktor Kecepatan',
          description: 'Setiap ronde peserta menyatakan aksi terlebih dahulu, kemudian melempar inisiatif yang dimodifikasi oleh aksi yang dipilih. Digunakan dalam aturan opsional. Menciptakan urutan giliran yang tidak terduga tetapi menambah kedalaman pengambilan keputusan.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Urutan berbeda setiap ronde', 'Pilihan aksi memengaruhi waktu', 'Lebih banyak keputusan taktis per giliran'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glosarium Pelacak Combat',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Inisiatif',
          definition: 'Lemparan Dexterity yang dilakukan di awal combat untuk menentukan urutan giliran. Setiap peserta melempar dan bertindak dalam urutan menurun.',
        },
        {
          term: 'Ronel',
          definition: 'Siklus lengkap di mana setiap petarung mengambil satu giliran. Setelah petarung terakhir bertindak, ronde berakhir dan ronde baru dimulai dari atas urutan.',
        },
        {
          term: 'Efek Status',
          definition: 'Kondisi sementara yang mengubah kemampuan karakter. Contohnya termasuk Stunned (tidak bisa bertindak), Poisoned (kerugian pada lemparan), dan Blinded (serangan memiliki kerugian).',
        },
        {
          term: 'NPC',
          definition: 'Karakter Non-Pemain yang dikendalikan oleh Dungeon Master. Dalam pelacakan inisiatif, NPC biasanya adalah musuh atau makhluk netral dalam pertemuan.',
        },
        {
          term: 'PC',
          definition: 'Karakter Pemain yang dikendalikan oleh salah satu pemain di meja. PC dibedakan dari NPC di pelacak untuk membantu DM mengidentifikasi target ramah.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kapan Harus Melempar Ulang Inisiatif Setiap Ronde',
      icon: 'mdi:information-outline',
      badge: 'TIP DM',
      html: 'Beberapa DM lebih suka melempar ulang inisiatif setiap ronde untuk ketidakpastian, sementara kebanyakan mempertahankan urutan yang sama untuk kesederhanaan. Jika petarung baru bergabung di tengah pertarungan, lempar inisiatif mereka dan masukkan ke posisi saat ini. Pelacak menangani ini secara otomatis. Untuk pertemuan bos, pertimbangkan memberi penjahat inisiatif tetap pada hitungan tertentu untuk membuat pertarungan terasa lebih terstruktur.',
    },
  ],
  faq: [
    {
      question: 'Bagaimana cara menambahkan petarung ke urutan inisiatif?',
      answer: 'Masukkan nama karakter, lemparan inisiatif, dan modifier inisiatif, lalu klik Tambah. Beralih antara tipe Pemain dan NPC untuk membedakan anggota party dari musuh dalam daftar secara visual.',
    },
    {
      question: 'Apa yang terjadi saat saya mengklik Mulai Combat?',
      answer: 'Semua petarung diurutkan berdasarkan inisiatif dari tertinggi ke terendah. Urutan giliran dimulai dari atas, penghitung ronde mulai dari 1, dan petarung aktif disorot dengan cahaya hijau.',
    },
    {
      question: 'Bagaimana cara melacak efek status selama combat?',
      answer: 'Klik tag status (Stunned, Poisoned, Blinded, dll.) untuk mengaktifkan atau menonaktifkannya pada petarung yang dipilih. Status aktif muncul di samping nama karakter. Ini mengingatkan semua orang tentang efek yang berlangsung saat giliran petarung tersebut tiba.',
    },
    {
      question: 'Apakah data combat saya tetap ada jika saya menyegarkan halaman?',
      answer: 'Ya. Pelacak inisiatif menyimpan status combat ke penyimpanan lokal browser Anda. Petarung, urutan giliran, dan efek status Anda tetap ada setelah halaman dimuat ulang. Data dihapus saat Anda mengklik Akhiri Combat.',
    },
    {
      question: 'Bisakah saya kembali ke giliran sebelumnya?',
      answer: 'Ya. Tombol Giliran Sebelumnya memungkinkan Anda menavigasi mundur melalui urutan giliran. Ini berguna untuk meninjau apa yang terjadi sebelumnya dalam ronde atau memperbaiki kesalahan.',
    },
    {
      question: 'Bisakah saya menambah atau menghapus petarung selama combat?',
      answer: 'Ya. Petarung baru dapat ditambahkan kapan saja dan secara otomatis dimasukkan ke posisi yang benar berdasarkan lemparan inisiatif mereka. Petarung yang ada dapat dihapus jika mereka meninggalkan pertemuan.',
    },
    {
      question: 'Apakah ini berfungsi dengan sistem RPG apa pun?',
      answer: 'Ya. Pelacak berfungsi dengan RPG meja apa pun yang menggunakan urutan giliran berbasis inisiatif. Masukkan nilai inisiatif apa pun yang digunakan sistem Anda, apakah itu lemparan d20 plus Dex untuk D&D atau mekanik berbeda untuk game lain.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Tambahkan Petarung Sebelum Combat',
      text: 'Masukkan nama setiap karakter, lemparan inisiatif mereka, dan modifier. Tandai sebagai Pemain atau NPC. Tambahkan petarung sebanyak yang dibutuhkan pertemuan Anda.',
    },
    {
      name: 'Mulai Combat untuk Mengunci Urutan',
      text: 'Klik Mulai Combat untuk mengurutkan semua orang berdasarkan inisiatif dan mulai melacak giliran. Petarung pertama dalam urutan disorot.',
    },
    {
      name: 'Navigasi Giliran dan Lacak Kondisi',
      text: 'Gunakan Giliran Berikutnya dan Giliran Sebelumnya untuk bergerak melalui urutan. Terapkan efek status dengan mengklik tag status untuk melacak kondisi selama pertarungan.',
    },
    {
      name: 'Akhiri Combat Setelah Selesai',
      text: 'Klik Akhiri Combat untuk menghentikan pelacakan giliran. Ini membersihkan status aktif dan mereset penghitung ronde sambil mempertahankan daftar petarung untuk pertemuan berikutnya.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pelacak Inisiatif RPG',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bagaimana cara menambahkan petarung?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Masukkan nama karakter, lemparan inisiatif, dan modifier inisiatif, lalu klik Tambah. Pemain dan NPC dapat dialihkan untuk membantu membedakannya dalam daftar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa yang terjadi saat saya mengklik Mulai Combat?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Semua petarung diurutkan berdasarkan inisiatif (tertinggi pertama). Urutan giliran dimulai dengan petarung pertama dan penghitung ronde mulai dari 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menggunakan Pelacak Inisiatif',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Tambahkan Petarung',
          'text': 'Masukkan detail karakter termasuk nama, lemparan inisiatif, dan modifier. Beralih antara tipe Pemain dan NPC sebelum menambahkan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Mulai Combat',
          'text': 'Klik Mulai Combat untuk mengurutkan semua petarung berdasarkan inisiatif dan mulai pelacakan urutan giliran.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kelola Giliran',
          'text': 'Gunakan Giliran Berikutnya dan Giliran Sebelumnya untuk menavigasi urutan giliran. Petarung aktif disorot dengan cahaya hijau.',
        },
      ],
    },
  ],
};
