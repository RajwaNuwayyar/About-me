import imgMan2Surakarta from '../assets/images/MAN.PNG';
import imgBnspTkj from '../assets/images/certificate1.jpg';
import imgPklBosse from '../assets/images/PKL BOSSE.jpg';

import imgCert1 from '../assets/images/img20260910_01272890.jpg';
import imgCert2 from '../assets/images/img20260910_01321870.jpg';

import imgServiceUIUX from '../assets/images/spenso.jpg';
import imgServiceFrontend from '../assets/images/bloomcare.jpg';
import imgServiceWeb from '../assets/images/MAN DASH.PNG';
import imgServiceIT from '../assets/images/IMG_20230113_195835.jpg';

import imgSraten from '../assets/images/Sraten 02.webp';
import imgKartasura from '../assets/images/SMPN 3 Kartasura.jpg';
import imgSawit from '../assets/images/1 sawit.jpg';
import imgUDB from '../assets/images/UDB.jpg';

export const portfolioDataId = {
  personal: {
    name: "Rajwa Nuwayyar Saif Lawahidz",
    role: "Pengembang Perangkat Lunak & Spesialis TI",
    badge: "UI/UX × Rekayasa Perangkat Lunak",
    availability: "Tersedia untuk proyek ambisius",
    location: "Global / Jarak Jauh",
    tagline: "Merancang solusi digital yang mencakup rekayasa perangkat lunak, desain UI/UX, inovasi robotika, hingga sistem komputer dan jaringan.",
    bio: "Saya adalah seorang pengembang perangkat lunak dan spesialis TI multi-disiplin. Saya memiliki keahlian dalam membangun aplikasi web yang reaktif dan visualnya memukau, serta menghubungkannya dengan perangkat keras fisik—mulai dari desain UI/UX, pengembangan frontend, hingga pemecahan masalah perangkat keras, jaringan, dan robotika.",
    stats: [
      { label: "Tahun di TI", value: "3+" },
      { label: "Aplikasi Web", value: "10+" },
      { label: "Sistem Hardware & TI", value: "20+" },
      { label: "Sertifikasi", value: "BNSP/LSP" }
    ],
    socials: {
      github: "https://github.com/RajwaNuwayyar",
      linkedin: "https://www.linkedin.com/in/rajwa-nuwayyar-saif-lawahidz-3840b442b/",
      twitter: "https://twitter.com",
      discord: "https://discord.com",
      email: "rajwa1904@gmail.com",
      instagram: "https://www.instagram.com/rajwa_nxl/",
      whatsapp: "https://api.whatsapp.com/send/?phone=6285729959997&text&type=phone_number&app_absent=0",
      tiktok: "https://www.tiktok.com/@rajwa_nxl?_r=1&_t=ZS-990VGof8GLX",
      facebook: "https://www.facebook.com/share/1C8vztQ2y2/"
    }
  },

  skillsCategories: [
    {
      id: "ui_ux",
      title: "Desain UI/UX",
      icon: "Globe",
      image: imgServiceUIUX,
      desc: "Merancang antarmuka yang jelas, intuitif, dan terukur untuk dasbor, aplikasi seluler, dan situs web berkonversi tinggi.",
      skills: [
        { name: "Riset Pengguna & Wireframing", level: 95, desc: "Pembuatan Prototipe Interaktif" },
        { name: "Prototipe Fidelitas Tinggi", level: 92, desc: "Figma & Adobe XD" },
        { name: "Sistem Desain", level: 90, desc: "Pustaka Komponen" },
        { name: "Optimasi Tingkat Konversi", level: 88, desc: "A/B Testing & Analitik" }
      ]
    },
    {
      id: "frontend",
      title: "Pengembang Front End",
      icon: "Terminal",
      image: imgServiceFrontend,
      desc: "Menerjemahkan mockup desain menjadi antarmuka pengguna berkinerja tinggi, responsif, dan sempurna (pixel-perfect) menggunakan teknologi web modern.",
      skills: [
        { name: "HTML5 & CSS3", level: 95, desc: "Tata Letak Responsif" },
        { name: "JavaScript Modern", level: 90, desc: "Interaktivitas & Logika" },
        { name: "Kompatibilitas Lintas Peramban", level: 92, desc: "Pengalaman yang Konsisten" },
        { name: "Arsitektur Bersih", level: 88, desc: "Basis Kode yang Mudah Dikelola" }
      ]
    },
    {
      id: "web_software",
      title: "Dev Website & Perangkat Lunak",
      icon: "Globe",
      image: imgServiceWeb,
      desc: "Membangun aplikasi web modern, responsif, dan berkinerja tinggi menggunakan Python Flask, HTML5, CSS3, dan JavaScript.",
      skills: [
        { name: "Python Flask", level: 85, desc: "Pengembangan Web Kustom" },
        { name: "Mobile-First Layouts", level: 92, desc: "Aplikasi Responsif Penuh" },
        { name: "Animasi CSS & JS", level: 90, desc: "UI Gerakan Mulus" },
        { name: "Optimasi SEO", level: 88, desc: "Pemuatan Cepat & Peringkat" }
      ]
    },
    {
      id: "it_support",
      title: "Teknisi Dukungan TI",
      icon: "Cpu",
      image: imgServiceIT,
      desc: "Menyediakan layanan pemecahan masalah perangkat keras profesional, perbaikan komputer, pengaturan jaringan, dan pemeliharaan teknis.",
      skills: [
        { name: "Pemecahan Masalah Hardware", level: 95, desc: "Perbaikan Komputer & Laptop" },
        { name: "Pengaturan LAN & Wi-Fi", level: 90, desc: "Konfigurasi Jaringan" },
        { name: "Instalasi CCTV", level: 85, desc: "Pemeliharaan & Pemantauan" },
        { name: "Dukungan Teknis TI", level: 92, desc: "Diagnostik Sistem yang Andal" }
      ]
    }
  ],

  projects: [
    {
      id: "man2surakarta",
      category: "web",
      featured: true,
      title: "MAN 2 Surakarta",
      subtitle: "Sistem Manajemen Surat Menyurat Sekolah",
      image: imgMan2Surakarta,
      description: "Platform manajemen persuratan sekolah digital komprehensif untuk merampingkan tugas administratif dan pengarsipan.",
      extendedDescription: "Mengembangkan aplikasi web aman dan responsif yang dirancang untuk MAN 2 Surakarta agar dapat mendigitalkan surat masuk dan keluar mereka. Sistem ini dilengkapi kontrol akses multi-level, tanda tangan digital, pelacakan waktu nyata, dan pengarsipan otomatis, sepenuhnya menggantikan proses manual berbasis kertas.",
      tags: ["CMS Sekolah", "Landing Page", "Web App", "UI/UX"],
      metrics: {
        platform: "Berbasis Web",
        tipe: "CMS Sekolah",
        database: "MySQL",
        keamanan: "Akses Multi-Level"
      },
      status: "Proyek Nyata",
      links: {
        github: "https://github.com/RajwaNuwayyar/Sistem_Manajemen_persuratan_MAN_2_Surakarta"
      },
      gradient: "from-cyan to-blue"
    },
    {
      id: "bnsp-tkj",
      category: "sertifikat",
      featured: true,
      title: "Sertifikasi BNSP",
      subtitle: "Teknik Komputer dan Jaringan",
      image: imgBnspTkj,
      description: "Sertifikasi kompetensi standar nasional dari BNSP untuk teknisi komputer dan rekayasa jaringan.",
      extendedDescription: "Berhasil mendemonstrasikan kompetensi tingkat tinggi dalam perakitan, pemecahan masalah, dan perbaikan perangkat keras komputer. Mengonfigurasi jaringan area lokal (LAN) yang kuat, routing, dan switching. Disertifikasi oleh Badan Nasional Sertifikasi Profesi (BNSP/LSP).",
      tags: ["Sertifikasi Nasional", "BNSP / LSP", "Jaringan", "Hardware"],
      metrics: {
        status: "Tersertifikasi",
        tingkat: "Nasional (BNSP)",
        validitas: "Aktif",
        nilai: "Kompeten"
      },
      status: "Tersertifikasi",
      links: {
        cert1: imgCert1,
        cert2: imgCert2
      },
      gradient: "from-emerald to-cyan"
    },
    {
      id: "pkl-bosse",
      category: "eksplorasi",
      featured: true,
      title: "PKL BOSSE COM",
      subtitle: "Eksplorasi Teknik Komputer dan Jaringan",
      image: imgPklBosse,
      description: "Pengalaman lapangan yang luas dalam perbaikan perangkat keras, jaringan, dan pemecahan masalah sistem.",
      extendedDescription: "Melakukan eksplorasi teknis mendalam dan implementasi dunia nyata selama pelatihan industri di BOSSE COM. Tugas meliputi diagnosis dan perbaikan masalah motherboard laptop yang kompleks, optimalisasi sistem operasi, serta penerapan infrastruktur jaringan bisnis kecil hingga menengah.",
      tags: ["Perbaikan Hardware", "Jaringan", "Troubleshooting"],
      metrics: {
        durasi: "6 Bulan",
        cakupan: "Layanan Penuh",
        fokus: "Hardware & Jaringan",
        hasil: "Selesai"
      },
      status: "Selesai",
      links: {},
      gradient: "from-amber to-orange"
    }
  ],

  timeline: [
    {
      year: "2023 - SEKARANG",
      role: "Sistem Informasi",
      company: "Universitas Duta Bangsa",
      image: imgUDB,
      description: "Menempuh pendidikan tinggi di bidang Sistem Informasi, mendalami pengetahuan arsitektur perangkat lunak, proses bisnis, dan teknologi web lanjutan."
    },
    {
      year: "2020 - 2023",
      role: "Teknik Komputer dan Jaringan",
      company: "SMK Negeri 1 Sawit",
      image: imgSawit,
      description: "Mempelajari dasar-dasar TI inti termasuk perakitan perangkat keras, topologi jaringan, administrasi server, dan pemrograman dasar."
    },
    {
      year: "2017 - 2020",
      role: "Belajar selama 3 tahun",
      company: "SMP Negeri 3 Kartasura",
      image: imgKartasura,
      description: "Mengembangkan minat awal terhadap teknologi dan pemecahan masalah."
    },
    {
      year: "2011 - 2017",
      role: "Belajar selama 6 tahun",
      company: "SD Negeri 02 Sraten",
      image: imgSraten,
      description: "Pendidikan dasar yang meletakkan landasan untuk pemikiran analitis."
    }
  ],

  terminalHelp: [
    { command: "help", desc: "Daftar semua perintah terminal yang tersedia" },
    { command: "whoami", desc: "Tampilkan bio dan spesialisasi inti" },
    { command: "skills", desc: "Daftar kemampuan teknis meliputi Web, TI & Aplikasi" },
    { command: "projects", desc: "Tampilkan katalog proyek unggulan" },
    { command: "robot status", desc: "Kueri telemetri langsung dari simulasi lengan 6-DOF" },
    { command: "contact", desc: "Tampilkan jalur kontak dan komunikasi langsung" },
    { command: "theme <cyan|amber|violet|emerald>", desc: "Ubah aksen tema siber secara dinamis" },
    { command: "lang <en|id>", desc: "Ganti bahasa antarmuka (Inggris / Indonesia)" },
    { command: "clear", desc: "Bersihkan layar output terminal" }
  ],

  sections: {
    hero: { greeting: "HALO DUNIA", start: "MULAI JELAJAHI", connect: "HUBUNGI SAYA" },
    robotLab: {
      label: "Laboratorium Robotika Interaktif",
      title1: "Simulasi ",
      title2: "Robotika Interaktif",
      subtitle: "Uji kinematika terbalik lengan robot 6-DOF dan berinteraksi dengan simulasi fisika waktu-nyata langsung di browser Anda."
    },
    projects: {
      label: "Sistem Rekayasa",
      title1: "Proyek ",
      title2: "Unggulan",
      subtitle: "Katalog portofolio perangkat keras, sistem perangkat lunak berkinerja tinggi, dan aplikasi web responsif.",
      filters: {
        all: "Semua", robotics: "Robotika & Hardware", web: "Web & Fullstack", apps: "Aplikasi & Alat", certificate: "Sertifikat", exploration: "Eksplorasi"
      }
    },
    skills: {
      label: "Arsitektur Teknis",
      title1: "Keahlian & ",
      title2: "Kompetensi",
      subtitle: "Rincian kemampuan teknis meliputi pengembangan perangkat lunak, dukungan TI, sistem jaringan, dan desain UI/UX."
    },
    experience: {
      label: "Perjalanan Profesional",
      title1: "Pengalaman & ",
      title2: "Pendidikan",
      subtitle: "Garis waktu akademis dan pencapaian eksplorasi teknis."
    },
    contact: {
      label: "Protokol Transmisi",
      title1: "Mulai ",
      title2: "Kontak",
      subtitle: "Jalur aman terbuka. Baik untuk pertanyaan proyek, konsultasi teknis, atau sekadar menyapa—kirimkan transmisi."
    }
  }
};
