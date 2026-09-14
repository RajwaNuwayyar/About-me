export const portfolioDataId = {
  personal: {
    name: "Rajwa Nuwayyar",
    role: "Pengembang Web & Spesialis Jaringan TI",
    badge: "AKTIF",
    tagline: "Merancang Sistem Berkinerja Tinggi & Solusi Web Cerdas.",
    bio: "Seorang Pengembang Web penuh semangat dengan sertifikasi BNSP dalam pengoperasian komputer dan jaringan TI. Spesialis dalam arsitektur sistem berbasis React, backend Node.js, dan solusi jaringan yang skalabel. Memadukan pengalaman praktis di laboratorium industri dengan keahlian web terkini untuk membangun ekosistem digital yang tangguh.",
    socials: {
      github: "https://github.com/RajwaNuwayyar",
      linkedin: "https://linkedin.com/in/rajwanuwayyar",
      instagram: "https://instagram.com/rajwa_nxl",
      whatsapp: "https://wa.me/6282110594371",
      tiktok: "https://tiktok.com/@rajwa_nxl",
      facebook: "https://facebook.com/rajwanuwayyar",
      email: "rajwa1904@gmail.com"
    }
  },

  skillsCategories: [
    {
      id: "web",
      title: "Pengembangan Web",
      icon: "Globe",
      skills: [
        { name: "React.js / Next.js", level: 95 },
        { name: "Node.js & Express", level: 90 },
        { name: "UI/UX & TailwindCSS", level: 92 },
        { name: "REST API & GraphQL", level: 88 }
      ]
    },
    {
      id: "network",
      title: "Infrastruktur TI & Jaringan",
      icon: "Terminal",
      skills: [
        { name: "Desain Jaringan (LAN/WAN)", level: 85 },
        { name: "Administrasi Sistem", level: 80 },
        { name: "Dukungan Teknis & Perangkat Keras", level: 95 }
      ]
    },
    {
      id: "tools",
      title: "Alat & Arsitektur",
      icon: "Wrench",
      skills: [
        { name: "Git & Kontrol Versi", level: 95 },
        { name: "Figma & Wireframing", level: 88 },
        { name: "Manajemen Basis Data (SQL/NoSQL)", level: 85 },
        { name: "Penyebaran Cloud", level: 80 }
      ]
    }
  ],

  projects: [
    {
      id: "manajemen-surat",
      title: "Sistem Manajemen Persuratan",
      category: "web",
      image: "img20260910_01321870.jpg",
      description: "Aplikasi web komprehensif untuk mendigitalkan dan mengelola alur kerja persuratan internal di MAN 2 Surakarta. Fitur termasuk pelacakan dokumen, kontrol akses pengguna, dan penyimpanan arsip terpusat untuk menggantikan proses manual.",
      tech: ["PHP", "MySQL", "Bootstrap", "Web Architecture"],
      links: {
        github: "https://github.com/RajwaNuwayyar/Sistem_Manajemen_persuratan_MAN_2_Surakarta"
      }
    },
    {
      id: "bnsp-cert",
      title: "Sertifikasi Profesional BNSP",
      category: "certificate",
      image: "img20260910_01272890.jpg",
      description: "Kualifikasi resmi dari Badan Nasional Sertifikasi Profesi (BNSP). Memvalidasi kompetensi dalam Operasi Komputer tingkat lanjut, instalasi perangkat keras, diagnostik sistem, dan pemecahan masalah jaringan TI sesuai standar industri.",
      tech: ["IT Operations", "Hardware Diagnostics", "Networking", "System Administration"],
      links: {
        demo: "/src/assets/images/img20260910_01272890.jpg"
      }
    },
    {
      id: "portfolio-v1",
      title: "Terminal Siber Interaktif",
      category: "web",
      image: "img20260910_01321870.jpg",
      description: "Portofolio generasi berikutnya dengan antarmuka yang sangat interaktif dan terinspirasi dari fiksi ilmiah. Mencakup CLI emulator terminal kustom, efek partikel, dukungan multi-bahasa dinamis (EN/ID), dan widget widget waktu-nyata.",
      tech: ["React 18", "Vite", "Context API", "Lucide Icons", "CSS Animations"],
      links: {
        github: "https://github.com/RajwaNuwayyar/portfolio"
      }
    },
    {
      id: "hardware-lab",
      title: "Pusat Diagnostik Perangkat Keras",
      category: "exploration",
      image: "img20260910_01272890.jpg",
      description: "Eksplorasi berkelanjutan mengenai rakitan perangkat keras tingkat rendah, pemeliharaan sistem, dan topologi jaringan lokal. Merakit workstation kustom dan mengonfigurasi jaringan untuk alur kerja pengembangan.",
      tech: ["PC Building", "LAN/WLAN", "Troubleshooting", "System Optimization"],
      links: {
        demo: "#"
      }
    }
  ],

  timeline: [
    {
      year: "2024",
      title: "Sertifikasi BNSP & Spesialisasi TI",
      company: "Badan Nasional Sertifikasi Profesi",
      description: "Secara resmi disertifikasi dalam Pengoperasian Komputer dan Perangkat Keras Jaringan. Membuktikan kompetensi inti dalam dukungan TI, administrasi jaringan lokal, dan pemecahan masalah sistem tingkat lanjut.",
      icon: "CheckCircle2",
      color: "emerald"
    },
    {
      year: "2023 - 2024",
      title: "Pengembangan Sistem Manajemen Persuratan",
      company: "MAN 2 Surakarta",
      description: "Merancang, mengembangkan, dan menerapkan Sistem Manajemen Persuratan (Sistem_Manajemen_persuratan_MAN_2_Surakarta). Mendigitalkan pengarsipan dokumen, mengurangi hilangnya data, dan mempercepat efisiensi alur kerja sekolah.",
      icon: "Code2",
      color: "cyan"
    },
    {
      year: "2022 - 2023",
      title: "Fokus Pengembangan Web & Desain UI",
      company: "Pembelajaran Mandiri & Proyek Lepas",
      description: "Memperluas keahlian ke arah rekayasa perangkat lunak. Membangun aplikasi web yang responsif dengan React. Menguasai prinsip-prinsip desain UI/UX melalui Figma dan mengimplementasikan sistem desain modern.",
      icon: "Palette",
      color: "violet"
    }
  ],

  terminalHelp: [
    { command: "help", desc: "Tampilkan manual bantuan ini" },
    { command: "whoami", desc: "Tampilkan identitas & misi insinyur" },
    { command: "skills", desc: "Rangkum keahlian web & sistem TI" },
    { command: "projects", desc: "Cari katalog artefak portofolio" },
    { command: "robot status", desc: "Cari kinematika lengan robot 6-DOF yang disimulasikan" },
    { command: "contact", desc: "Buka saluran kontak dan tautan komunikasi langsung" },
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
