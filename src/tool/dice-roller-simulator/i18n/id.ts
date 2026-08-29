import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'simulasi-lempar-dadu-probabilitas',
  title: 'Simulasi Lempar Dadu & Kalkulator Probabilitas',
  description: 'Lempar dadu polihedral virtual (D4, D6, D8, D10, D12, D20, D100), tambahkan modifikasi, dan lihat statistik serta probabilitas lemparan langsung untuk game meja dan papan.',
  ui: {
    title: 'Simulasi Lempar Dadu & Kalkulator Probabilitas',
    rollButton: 'Lempar Dadu',
    clearButton: 'Hapus Riwayat',
    historyTitle: 'Riwayat Lemparan',
    noHistory: 'Belum ada lemparan yang dicatat. Tambahkan dadu dan klik Lempar untuk memulai.',
    totalRolls: 'Total Lemparan',
    averageRoll: 'Rata-rata Hasil',
    lastRoll: 'Total Terakhir',
    modifierLabel: 'Modifikasi (+/-)',
    probabilityTitle: 'Analisis Probabilitas',
    selectDice: 'Pilih Dadu untuk Dilempar',
  },
  seo: [
    { type: 'title', text: 'Menguasai Peluang Game Meja: Bagaimana Probabilitas Dadu Memengaruhi Permainan Anda', level: 2 },
    { type: 'paragraph', html: 'Dadu polihedral adalah jantung dari game roleplaying meja dan game papan modern. Baik Anda mengincar lemparan penyelamat yang tinggi di Dungeons & Dragons atau melempar untuk produksi sumber daya, hasilnya diatur oleh probabilitas matematika. Memahami bagaimana kombinasi berbagai jenis dadu memengaruhi peluang Anda sangat penting untuk pengambilan keputusan taktis selama gameplay.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Peluang 20 Alami' },
        { value: '10.5', label: 'Rata-rata Lemparan 3d6' },
        { value: '9.75%', label: '20 Alami dengan Keuntungan' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Matematika di Balik Banyak Dadu: Mengapa 3d6 Lebih Aman Daripada 1d20', level: 2 },
    { type: 'paragraph', html: 'Saat Anda melempar satu D20, setiap hasil dari 1 hingga 20 memiliki peluang 5% yang sama untuk terjadi, menghasilkan distribusi probabilitas yang datar. Namun, saat melempar banyak dadu seperti 3d6, hasilnya berkumpul di sekitar nilai rata-rata 10.5. Kurva lonceng ini berarti Anda jauh lebih mungkin mendapatkan hasil moderat daripada nilai ekstrem, memberikan konsistensi dan mengurangi sifat tidak menentu dari lemparan dadu tunggal.' },
    { type: 'title', text: 'Probabilitas D20 Dijelaskan: Kritis, Pifia, dan Dampak Modifikasi', level: 2 },
    { type: 'paragraph', html: 'Modifikasi sederhana plus dua dapat secara dramatis mengubah probabilitas keberhasilan, mengubah tugas-tugas sulit menjadi tantangan yang dapat dikelola. Di banyak sistem game, 20 alami mewakili serangan kritis otomatis (peluang 5%), sedangkan 1 alami adalah kegagalan kritis (pifia). Memvisualisasikan hasil ini membantu mengungkap keacakan dan memungkinkan Anda merencanakan langkah taktis dengan dukungan statistik.' },
    {
      type: 'title',
      text: 'Tabel Referensi Dadu Polihedral Standar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Jenis Dadu', 'Lemparan Minimum', 'Lemparan Maksimum', 'Hasil Rata-rata', 'Peran Utama dalam RPG Meja'],
      rows: [
        ['D4', '1', '4', '2.5', 'Rudal ajaib, belati, bahaya minor'],
        ['D6', '1', '6', '3.5', 'Bola api, pedang standar, pemeriksaan atribut'],
        ['D8', '1', '8', '4.5', 'Pedang panjang, mantra penyembuhan, senjata sedang'],
        ['D10', '1', '10', '5.5', 'Halberd, cantrip, puluhan persentil'],
        ['D12', '1', '12', '6.5', 'Greataxe, poin hit barbarian'],
        ['D20', '1', '20', '10.5', 'Lemparan penyelamat, lemparan serangan, pemeriksaan keahlian'],
        ['D100', '1', '100', '50.5', 'Tabel persentil, lonjakan sihir liar'],
      ],
    },
    {
      type: 'tip',
      title: 'Menghitung Nilai Rata Rata Dadu Secara Mental',
      html: 'Untuk menemukan rata-rata lemparan dadu tunggal, tambahkan nilai minimum (1) dan maksimum bersama-sama, lalu bagi dengan 2. Misalnya, rata-rata D6 adalah (1 + 6) / 2 = 3.5. Untuk banyak dadu, cukup kalikan rata-rata tunggal dengan jumlah dadu (misalnya, rata-rata 3d6 adalah 3 * 3.5 = 10.5). Menambahkan modifikasi datar cukup menambahkan ke rata-rata ini (misalnya, 3d6 + 4 rata-rata 14.5).',
    },
    {
      type: 'title',
      text: 'Membandingkan Sistem Dadu Datar vs. Melengkung',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Sistem D20 vs. Sistem Kurva Lonceng 3d6',
      items: [
        {
          pro: 'Sistem D20 cepat dihitung dan memiliki peluang 5% konstan untuk kritis dan kegagalan.',
          con: 'Hasil D20 sangat fluktuatif, membuat keahlian karakter terasa kurang berdampak daripada lemparan.',
        },
        {
          pro: 'Kurva lonceng 3d6 memprioritaskan lemparan rata-rata, memastikan karakter berkeahlian tinggi jarang gagal dalam tugas-tugas sederhana.',
          con: 'Sistem 3d6 memerlukan penjumlahan tiga dadu dan membuat serangan kritis (angka 18 sempurna) sangat langka (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Memahami Mekanika Probabilitas',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sistem D20 (Linear)',
          description: 'Menggunakan dadu 20 sisi tunggal untuk tindakan, di mana setiap hasil memiliki peluang 5% yang sama. Variabilitas tinggi dan ketidakpastian menciptakan ketegangan tetapi mengurangi konsistensi.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Peluang datar 5% per hasil',
            'Variasi dan fluktuasi tinggi',
            'Modifikasi meningkatkan keberhasilan secara linear',
          ],
        },
        {
          title: 'Sistem 3d6 (Kurva Lonceng)',
          description: 'Menjumlahkan tiga dadu 6 sisi, menciptakan distribusi normal yang berpusat pada 10.5. Hasilnya sangat konsisten, membuat penyimpangan ekstrem jarang terjadi.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Hasil rata-rata sangat mungkin terjadi',
            'Hasil ekstrem sangat jarang terjadi',
            'Modifikasi memiliki dampak non-linear',
          ],
        },
        {
          title: 'Sistem Persentil (Lemparan di Bawah)',
          description: 'Menggunakan dua dadu 10 sisi untuk menghasilkan angka antara 1 dan 100. Tujuannya adalah melempar di bawah nilai karakter Anda, membuat peluang keberhasilan langsung terlihat.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Tingkat keberhasilan persentase langsung',
            'Mudah dipahami sekilas',
            'Kemajuan keahlian jelas secara matematis',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kekeliruan Penjudi: Mengapa Dadu Tidak Memiliki Memori',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'A kesalahan umum dalam game meja adalah keyakinan bahwa lemparan masa lalu memengaruhi hasil di masa depan. Jika Anda melempar angka "1" tiga kali berturut-turut pada D20, Anda mungkin merasa bahwa lemparan tinggi "seharusnya" keluar. Kenyataannya, setiap lemparan adalah peristiwa independen. Probabilitas melempar angka 20 pada lemparan berikutnya tetap persis 5%. Mengetahui hal ini membantu pemain mempertahankan pilihan taktis yang objektif.',
    },
    {
      type: 'title',
      text: 'Glosarium Dadu & Probabilitas Meja',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Keuntungan & Kerugian',
          definition: 'Mekankan di mana pemain melempar dua D20 dan mengambil hasil yang lebih tinggi (Keuntungan) atau hasil yang lebih rendah (Kerugian). Keuntungan menggeser rata-rata lemparan dari 10.5 menjadi 13.8.',
        },
        {
          term: 'Kurva Lonceng (Distribusi Normal)',
          definition: 'Distribusi probabilitas berbentuk lonceng, di mana hasil berkumpul di sekitar rata-rata pusat. Ini terjadi ketika menjumlahkan beberapa dadu (seperti 3d6 atau 2d10).',
        },
        {
          term: 'Serangan Kritis',
          definition: 'Keberhasilan otomatis, biasanya dicapai dengan melempar nilai maksimum pada dadu (20 alami pada D20), yang sering kali memicu bonus kerusakan oder efek khusus.',
        },
        {
          term: 'Kegagalan Kritis',
          definition: 'Kegagalan otomatis yang membawa malapetaka atau lucu, dipicu oleh lemparan angka 1 pada D20.',
        },
        {
          term: 'Nilai yang Diharapkan',
          definition: 'Rata-rata hasil jangka panjang dari lemparan Anda. Untuk D6 tunggal, nilai yang diharapkan adalah 3.5; untuk D20 tunggal, itu adalah 10.5.',
        },
        {
          term: 'Dadu Persentil',
          definition: 'Sepasang D10 (satu mewakili puluhan, satu mewakili satuan) dilempar bersama untuk menghasilkan angka dari 1 hingga 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Bagaimana fungsi simulador probabilitas?',
      answer: 'Ini menghitung distribusi probabilitas yang tepat untuk kombinasi dadu dan pengubah yang dipilih menggunakan kombinasi matematika, memungkinkan Anda melihat peluang Anda berada di atas atau di bawah nilai target.',
    },
    {
      question: 'Dadu apa saja yang didukung?',
      answer: 'Dadu polihedral yang umum digunakan dalam game RPG meja dan game papan, termasuk D4, D6, D8, D10, D12, D20, dan D100.',
    },
    {
      question: 'Apa itu pengubah dan bagaimana fungsinya?',
      answer: 'Pengubah adalah nilai datar (+1, -2, dll.) yang Anda tambahkan atau kurangi dari total lemparan Anda untuk mewakili keterampilan karakter, bonus, atau penalti.',
    },
    {
      question: 'Apa arti melempar dengan Keuntungan atau Kerugian?',
      answer: 'Melempar dengan Keuntungan berarti melempar dua dadu D20 dan mengambil hasil yang lebih tinggi. Melempar dengan Kerugian berarti melempar dua dan mengambil yang lebih rendah. Ini adalah mekanik umum di RPG meja.',
    },
    {
      question: 'Apa itu Serangan Kritis dan Kegagalan Kritis?',
      answer: 'Serangan Kritis terjadi ketika dadu mencapai nilai maksimumnya (seperti 20 alami pada D20), biasanya menghasilkan kesuksesan otomatis atau kerusakan ganda. Kegagalan Kritis terjadi ketika dadu menghasilkan angka 1, menghasilkan kegagalan otomatis yang sering kali kacau.',
    },
    {
      question: 'Bagaimana simulator menghitung probabilitas lemparan?',
      answer: 'Simulator menganalisis secara matematis setiap hasil yang mungkin dari kumpulan dadu dan pengubah yang Anda pilih. Kemudian menyajikan rincian persentase yang menunjukkan seberapa besar kemungkinan Anda mendapatkan total tertentu.',
    },
    {
      question: 'Mengapa lemparan 3d6 lebih konsisten daripada melempar satu D20?',
      answer: 'Melempar satu D20 memberikan peluang 5% yang sama untuk setiap angka. Melempar 3d6 menghasilkan kurva lonceng di mana hasilnya cenderung berkumpul di sekitar rata-rata 10.5, membuat hasil yang sangat tinggi atau rendah menjadi langka.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Tambahkan Dadu',
      text: 'Klik pada tombol dadu untuk menambahkannya ke kumpulan dadu aktif Anda.',
    },
    {
      name: 'Tambahkan Pengubah',
      text: 'Masukkan nilai pengubah positif atau negatif untuk ditambahkan ke total Anda.',
    },
    {
      name: 'Lempar dan Lihat Statistik',
      text: 'Klik tombol Lempar untuk melihat hasil visual, riwayat, dan analisis probabilitas.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Simulasi Lempar Dadu & Kalkulator Probabilitas',
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
          'name': 'Bagaimana fungsi simulador probabilitas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ini menghitung distribusi probabilitas yang tepat untuk kombinasi dadu dan pengubah yang dipilih menggunakan kombinasi matematika, memungkinkan Anda melihat peluang Anda berada di atas or di bawah nilai target.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Dadu apa saja yang didukung?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Dadu polihedral yang umum digunakan dalam game RPG meja dan game papan, termasuk D4, D6, D8, D10, D12, D20, dan D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apa itu pengubah dan bagaimana fungsinya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pengubah adalah nilai datar (+1, -2, dll.) yang Anda tambahkan atau kurangi dari total lemparan Anda untuk mewakili keterampilan karakter, bonus, atau penalti.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apa arti melempar dengan Keuntungan atau Kerugian?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Melempar dengan Keuntungan berarti melempar dua dadu D20 dan mengambil hasil yang lebih tinggi. Melempar dengan Kerugian berarti melempar dua dan mengambil yang lebih rendah. Ini adalah mekanik umum di RPG meja.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apa itu Serangan Kritis dan Kegagalan Kritis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Serangan Kritis terjadi ketika dadu mencapai nilai maksimumnya (seperti 20 alami pada D20), biasanya menghasilkan kesuksesan otomatis atau kerusakan ganda. Kegagalan Kritis terjadi ketika dadu menghasilkan angka 1, menghasilkan kegagalan otomatis yang sering kali kacau.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana simulator menghitung probabilitas lemparan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Simulator menganalisis secara matematis setiap hasil yang mungkin dari kumpulan dadu dan pengubah yang Anda pilih. Kemudian menyajikan rincian persentase yang menunjukkan seberapa besar kemungkinan Anda mendapatkan total tertentu.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Mengapa lemparan 3d6 lebih konsisten daripada melempar satu D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Melempar satu D20 memberikan peluang 5% yang sama untuk setiap angka. Melempar 3d6 menghasilkan kurva lonceng di mana hasilnya cenderung berkumpul di sekitar rata-rata 10.5, membuat hasil yang sangat tinggi atau rendah menjadi langka.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Tambahkan Dadu',
          'text': 'Klik pada tombol dadu untuk menambahkannya ke kumpulan dadu aktif Anda.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Tambahkan Pengubah',
          'text': 'Masukkan nilai pengubah positif atau negatif untuk ditambahkan ke total Anda.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lempar dan Lihat Statistik',
          'text': 'Klik tombol Lempar untuk melihat hasil visual, riwayat, dan analisis probabilitas.'
        }
      ]
    }
  ],
};
