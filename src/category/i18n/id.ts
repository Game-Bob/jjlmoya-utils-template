import type { CategoryLocaleContent } from '../../types';

const slug = 'permainan-papan';
const title = 'Utilitas & Alat untuk Permainan Papan';
const description = 'Alat gratis untuk permainan papan dan RPG: lempar dadu virtual dengan statistik langsung, kelola waktu giliran dengan timer multipemain, dan banyak lagi. Berfungsi di browser, tanpa pendaftaran, 100% pribadi.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Alat Permainan Papan | Lempar Dadu Online dan Timer Giliran', level: 2 },
    { type: 'paragraph', html: 'Malam bermain seharusnya menyenangkan, bukan berburu dadu yang hilang atau menunggu seseorang menjumlahkan hasil. Perpustakaan utilitas ini memberimu dan grupmu alat yang cepat dan dirancang dengan baik yang langsung berfungsi, tanpa meminta imbalan apa pun. Baik kamu seorang dungeon master yang mengatur seribu hal atau pemain yang hanya ingin melempar dadu tanpa ribet, alat ini dibuat untukmu.' },
    { type: 'title', text: 'Lempar Dadu Virtual dengan Statistik Waktu Nyata', level: 2 },
    { type: 'paragraph', html: 'Lelah mencari dadu di bawah meja atau menunggu seseorang menjumlahkan hasil? Pelempar dadu virtual memungkinkanmu melempar kombinasi dadu polihedral apa pun secara instan dengan modifier, advantage, disadvantage, dan riwayat lengkap. Penganalisis probabilitas bawaan menunjukkan peluang sukses nyatamu sebelum melempar. Sempurna untuk Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun, atau permainan apa pun yang mengandalkan keberuntungan.' },
    { type: 'title', text: 'Jaga Kecepatan Permainan dengan Timer Giliran Pintar', level: 2 },
    { type: 'paragraph', html: 'Kita semua tahu pemain yang butuh waktu lama di setiap giliran. Timer permainan memungkinkanmu menetapkan batas waktu yang adil dan menyenangkan dengan mode yang sesuai dengan setiap gaya bermain - dari hitung mundur bersama yang sederhana hingga sistem catur dengan increment Fischer or delay Bronstein. Berfungsi untuk duel dua pemain dengan layar terbagi atau grup hingga delapan pemain dengan kontrol giliran terpusat. Setelah permainan selesai, lihat statistik terperinci tentang waktu dan ritme bermain.' },
    { type: 'title', text: 'Privasi Utama: Datamu Tetap di Perangkatmu', level: 2 },
    { type: 'paragraph', html: 'Salah satu keunggulan besar perpustakaan ini adalah semua pemrosesan terjadi di browsermu. Tidak ada data yang dikirim ke server, tidak ada cookie pelacakan, tidak perlu email atau pendaftaran. Gunakan alat secara offline, bagikan layar dengan meja permainan, atau proyeksikan ke TV - tidak ada yang perlu dikhawatirkan selain permainan itu sendiri. Dan lebih banyak alat akan segera hadir, selalu dirancang untuk memudahkan hidup para pemain permainan papan.' },
    { type: 'stats', items: [
      { label: 'Alat', value: '2+', icon: 'mdi:tools' },
      { label: 'Pemain', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Bahasa', value: '15', icon: 'mdi:translate' },
      { label: 'Privasi', value: '100% Lokal', icon: 'mdi:shield-check' },
    ] },
  ],
};
