import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'roda-keputusan',
  title: 'Roda Keputusan: Pemilih Acak dan Generator Pilihan',
  description: 'Putar roda keputusan yang dapat disesuaikan untuk permainan papan. Tambahkan segmen dengan bobot untuk menentukan hasil secara acak.',
  ui: {
    title: 'Roda Keputusan',
    spinButton: 'Putar Roda',
    clearHistory: 'Hapus Riwayat',
    resultHeading: 'Hasil',
    historyTitle: 'Riwayat Putaran',
    noHistory: 'Belum ada putaran. Klik Putar Roda untuk memulai.',
    addSegmentLabel: 'Tambah Segmen',
    removeSegmentLabel: 'Hapus',
    segmentLabelPlaceholder: 'Label',
    presetLabel: 'Prasetel',
    presetYesNo: 'Ya atau Tidak',
    presetNumbers: 'Angka 1-6',
    presetActions: 'Tindakan',
    presetCustom: 'Kustom',
    presetD20: 'D20',
    presetAlignment: 'Penjajaran',
    presetLoot: 'Kelangkaan Loot',
    weightLabel: 'Bobot',
    spinAgain: 'Putar Lagi',
    noSegments: 'Tambahkan segmen ke roda sebelum memutar.',
  },
  seo: [
    { type: 'title', text: 'Roda Keputusan untuk Permainan Papan and Aktivitas Kelompok', level: 2 },
    { type: 'paragraph', html: 'Roda keputusan adalah alat digital serbaguna untuk permainan papan, RPG tabletop, dan aktivitas kelompok. Alat ini memungkinkan Anda menentukan pilihan acak secara cepat, adil, dan tanpa prasangka. Setiap segmen dapat disesuaikan dengan nama kustom, warna, dan bobot probabilitas yang dapat diatur sesuai kebutuhan permainan Anda.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Tambah Segmen' },
        { value: '7', label: 'Prasetel' },
        { value: '10', label: 'Riwayat Putaran' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Cara Menggunakan Roda Keputusan', level: 2 },
    { type: 'paragraph', html: 'Pilih salah satu prasetel siap pakai seperti Ya/Tidak, D20, Aliansi, atau Kelangkaan Jarahan, atau buat daftar kustom Anda sendiri. Atur bobot dari 1 hingga 5 untuk menentukan frekuensi kemunculan setiap opsi. Mesin simulasi fisik memberikan sensasi putaran yang realistis saat roda berputar.' },
    { type: 'title', text: 'Skenario tambahan', level: 3 },
    { type: 'paragraph', html: 'Gunakan roda acak ini untuk voting kelompok dengan cepat, menentukan pertemuan acak dalam permainan peran (RPG), membagikan giliran pemain, atau memilih tantangan seru secara adil.' },
    { type: 'title', text: 'Preset permainan meja', level: 3 },
    { type: 'paragraph', html: 'Prasetel bawaan memungkinkan Anda memuat keputusan umum dalam hitungan detik, menghemat waktu persiapan permainan dan menghindari perdebatan antar pemain.' },
    { type: 'title', text: 'Mengatur bobot hasil', level: 3 },
    { type: 'paragraph', html: 'Fitur bobot memungkinkan Anda menyesuaikan peluang setiap segmen. Menambah bobot akan memperbesar area segmen pada roda, meningkatkan probabilitas segmen tersebut terpilih saat roda berhenti.' },
    { type: 'title', text: 'Meninjau riwayat', level: 3 },
    { type: 'paragraph', html: 'Panel riwayat menyimpan sepuluh putaran terakhir secara transparan agar seluruh pemain dapat memverifikasi hasil-hasil sebelumnya selama sesi permainan berlangsung.' },
  ],
  faq: [
    {
      question: 'Bagaimana cara kerja roda keputusan?',
      answer: 'Pilih prasetel atau buat opsi Anda sendiri, tentukan bobot untuk probabilitas pilihan, dan klik Putar Roda.',
    },
    {
      question: 'Apakah saya bisa mengubah warna dan nama?',
      answer: 'Ya, Anda bebas menambah segmen, mengubah teks label, memilih warna, dan mengubah bobot dari 1 hingga 5.',
    },
    {
      question: "Bisakah peluang diubah?",
      answer: "Bisa, ubah bobot segmen.",
    },
    {
      question: "Berapa banyak segmen yang tersedia?",
      answer: "Hingga 16 segmen dapat digunakan dan minimal dua diperlukan.",
    },
    {
      question: "Preset apa yang tersedia?",
      answer: "Ya atau Tidak, Angka, Aksi, pilihan sendiri, D20, Keselarasan, dan Jarahan.",
    },
    {
      question: "Apakah putaran sebelumnya terlihat?",
      answer: "Ya, browser menampilkan sepuluh hasil terakhir.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Buat Segmen Pilihan',
      text: 'Pilih prasetel cepat atau buat opsi kustom Anda sendiri dengan label, warna, dan bobot.',
    },
    {
      name: 'Putar Roda Keputusan',
      text: 'Klik tombol putar untuk melihat animasi putaran dengan deselerasi fisik yang realistis.',
    },
    {
      name: "Periksa hasil",
      text: "Setelah roda berhenti, periksa segmen pemenang dan riwayat putaran.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Roda Keputusan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Bagaimana cara kerja roda keputusan?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pilih prasetel atau buat opsi Anda sendiri, tentukan bobot untuk probabilitas pilihan, dan klik Putar Roda.' } },
        { '@type': 'Question', 'name': 'Apakah saya bisa mengubah warna dan nama?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ya, Anda bebas menambah segmen, mengubah teks label, memilih warna, dan mengubah bobot dari 1 hingga 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Buat Segmen Pilihan', 'text': 'Pilih prasetel cepat atau buat opsi kustom Anda sendiri dengan label, warna, dan bobot.' },
        { '@type': 'HowToStep', 'name': 'Putar Roda Keputusan', 'text': 'Klik tombol putar untuk melihat animasi putaran dengan deselerasi fisik yang realistis.' },
      ],
    },
  ],
};
