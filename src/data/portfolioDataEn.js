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

export const portfolioData = {
  personal: {
    name: "Rajwa Nuwayyar Saif Lawahidz",
    role: "Software Developer & IT Specialist",
    badge: "UI/UX × Software Engineering",
    availability: "Available for ambitious ventures",
    location: "Global / Remote",
    tagline: "Crafting digital solutions across software engineering, UI/UX design & robotics innovation, to computer, laptop & network systems.",
    bio: "I am a multi-disciplinary software developer and IT specialist. I specialize in building reactive, visually stunning web applications and bridging them with physical hardware—from UI/UX design and frontend development to hardware troubleshooting, networking, and robotics.",
    stats: [
      { label: "Years in IT", value: "3+" },
      { label: "Deployed Web Apps", value: "10+" },
      { label: "Hardware & IT Systems", value: "20+" },
      { label: "Certifications", value: "BNSP/LSP" }
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
      title: "UI/UX Design",
      icon: "Globe",
      image: imgServiceUIUX,
      desc: "Designing clear, intuitive, and scalable interfaces for dashboards, mobile apps, and high-conversion websites.",
      skills: [
        { name: "User Research & Wireframing", level: 95, desc: "Interactive Prototyping" },
        { name: "High-Fidelity Prototypes", level: 92, desc: "Figma & Adobe XD" },
        { name: "Design Systems", level: 90, desc: "Component Libraries" },
        { name: "Conversion Rate Optimization", level: 88, desc: "A/B Testing & Analytics" }
      ]
    },
    {
      id: "frontend",
      title: "Front End Developer",
      icon: "Terminal",
      image: imgServiceFrontend,
      desc: "Translating design mockups into high-performance, responsive, and pixel-perfect user interfaces using modern web technologies.",
      skills: [
        { name: "HTML5 & CSS3", level: 95, desc: "Responsive Layouts" },
        { name: "Modern JavaScript", level: 90, desc: "Interactivity & Logic" },
        { name: "Cross-Browser Compatibility", level: 92, desc: "Consistent Experiences" },
        { name: "Clean Architecture", level: 88, desc: "Maintainable Codebases" }
      ]
    },
    {
      id: "web_software",
      title: "Website & Software Dev",
      icon: "Globe",
      image: imgServiceWeb,
      desc: "Building modern, responsive, and performant web applications using Python Flask, HTML5, CSS3, and JavaScript.",
      skills: [
        { name: "Python Flask", level: 85, desc: "Custom Web Development" },
        { name: "Mobile-First Layouts", level: 92, desc: "Fully Responsive Apps" },
        { name: "CSS & JS Animations", level: 90, desc: "Smooth Motion UI" },
        { name: "SEO Optimization", level: 88, desc: "Fast Page Load & Ranking" }
      ]
    },
    {
      id: "it_support",
      title: "IT Support Technician",
      icon: "Cpu",
      image: imgServiceIT,
      desc: "Providing professional hardware troubleshooting, computer repairs, network setups, and technical maintenance services.",
      skills: [
        { name: "Hardware Troubleshooting", level: 95, desc: "Computer & Laptop Repairs" },
        { name: "LAN & Wi-Fi Setup", level: 90, desc: "Network Configuration" },
        { name: "CCTV Installation", level: 85, desc: "Maintenance & Monitoring" },
        { name: "IT Technical Support", level: 92, desc: "Reliable System Diagnostics" }
      ]
    }
  ],

  projects: [
    {
      id: "man2surakarta",
      category: "web",
      featured: true,
      title: "MAN 2 Surakarta",
      subtitle: "School Correspondence Management System",
      image: imgMan2Surakarta,
      description: "A comprehensive digital school correspondence management platform to streamline administrative tasks and archiving.",
      extendedDescription: "Developed a secure and responsive web application designed for MAN 2 Surakarta to digitize their incoming and outgoing mail. The system features multi-level access control, digital signatures, real-time tracking, and automated archiving, completely replacing manual paper-based processes.",
      tags: ["SchoolCMS", "Landing Page", "Web App", "UI/UX"],
      metrics: {
        latency: "Optimized Load",
        degreesOfFreedom: "Web Based",
        payload: "School DB",
        accuracy: "High Security"
      },
      status: "Real Project",
      links: {
        demo: "https://github.com/RajwaNuwayyar/Sistem_Manajemen_persuratan_MAN_2_Surakarta",
        github: "https://github.com/RajwaNuwayyar/Sistem_Manajemen_persuratan_MAN_2_Surakarta",
        docs: "#"
      },
      gradient: "from-cyan to-blue"
    },
    {
      id: "bnsp-tkj",
      category: "certificate",
      featured: true,
      title: "BNSP Certification",
      subtitle: "Computer & Network Engineering",
      image: imgBnspTkj,
      description: "National standard competency certification from BNSP for computer technician and network engineering.",
      extendedDescription: "Successfully demonstrated high-level competency in assembling, troubleshooting, and repairing computer hardware. Configured robust local area networks (LAN), routing, and switching. Certified by the Indonesian Professional Certification Authority (BNSP/LSP).",
      tags: ["National Certification", "BNSP / LSP", "Networking", "Hardware"],
      metrics: {
        throughput: "Certified",
        rendering: "National Level",
        latency: "Active",
        uptime: "100%"
      },
      status: "Certified",
      links: {
        cert1: imgCert1,
        cert2: imgCert2,
        docs: "#"
      },
      gradient: "from-emerald to-cyan"
    },
    {
      id: "pkl-bosse",
      category: "exploration",
      featured: true,
      title: "PKL BOSSE COM",
      subtitle: "Computer and Network Engineering Exploration",
      image: imgPklBosse,
      description: "Extensive field experience in hardware repair, networking, and system troubleshooting.",
      extendedDescription: "Conducted deep technical exploration and real-world implementation during industrial training at BOSSE COM. Tasks involved diagnosing and repairing complex laptop motherboard issues, optimizing operating systems, and deploying small to medium business network infrastructures.",
      tags: ["Hardware Repair", "Networking", "Troubleshooting"],
      metrics: {
        maxSpeed: "High Efficiency",
        range: "Full Service",
        scanRate: "Diagnostics",
        batteryLife: "Repairs"
      },
      status: "Completed",
      links: {
        demo: "#",
        github: "https://github.com/RajwaNuwayyar",
        docs: "#"
      },
      gradient: "from-amber to-orange"
    }
  ],

  timeline: [
    {
      year: "2023 - NOW",
      role: "Information Systems",
      company: "Duta Bangsa University",
      image: imgUDB,
      description: "Pursuing higher education in Information Systems, deepening knowledge in software architecture, business processes, and advanced web technologies."
    },
    {
      year: "2020 - 2023",
      role: "Computer and Network Engineering",
      company: "Sawit 1 Public Vocational High School",
      image: imgSawit,
      description: "Learned core IT fundamentals including hardware assembly, network topologies, server administration, and basic programming."
    },
    {
      year: "2017 - 2020",
      role: "Study for 1 to 3 years",
      company: "Kartasura 3 Public Junior High School",
      image: imgKartasura,
      description: "Developed early interest in technology and problem-solving."
    },
    {
      year: "2011 - 2017",
      role: "Study for 1 to 6 years",
      company: "Sraten 02 Public Elementary School",
      image: imgSraten,
      description: "Primary education laying the foundation for analytical thinking."
    }
  ],

  terminalHelp: [
    { command: "help", desc: "List all available terminal commands" },
    { command: "whoami", desc: "Display bio and core specialization" },
    { command: "skills", desc: "List technical arsenal across Web, IT & Apps" },
    { command: "projects", desc: "Display featured technical projects" },
    { command: "robot status", desc: "Query live telemetry of the simulated 6-DOF arm" },
    { command: "contact", desc: "Reveal contact channels and direct communication links" },
    { command: "theme <cyan|amber|violet|emerald>", desc: "Dynamically switch accent cyber theme" },
    { command: "clear", desc: "Wipe terminal output screen" }
  ],

  sections: {
    hero: { greeting: "HELLO WORLD", start: "START EXPLORING", connect: "CONNECT WITH ME" },
    robotLab: {
      label: "Interactive Robotics Lab",
      title1: "Interactive ",
      title2: "Robotics Sandbox",
      subtitle: "Test 6-DOF robotic arm inverse kinematics and interact with the real-time physics simulation right in your browser."
    },
    projects: {
      label: "Engineered Systems",
      title1: "Featured ",
      title2: "Projects",
      subtitle: "A curated showcase of autonomous hardware, high-throughput cloud dashboards, and cross-platform desktop applications.",
      filters: {
        all: "All", robotics: "Robotics & Hardware", web: "Web & Fullstack", apps: "Apps & Tools", certificate: "Certificate", exploration: "Exploration"
      }
    },
    skills: {
      label: "Technical Architecture",
      title1: "Skills & ",
      title2: "Competencies",
      subtitle: "A breakdown of technical proficiencies across software development, hardware engineering, and industrial robotics."
    },
    experience: {
      label: "Engineering Track Record",
      title1: "Career & ",
      title2: "Milestones",
      subtitle: "A journey bridging software architecture, robotic automation, and hardware-software co-design."
    },
    contact: {
      label: "Secure Transmission Channel",
      title1: "Let's Build Something ",
      title2: "Extraordinary",
      subtitle: "Whether you need a high-performance web platform, an autonomous robotics solution, or low-level firmware engineering, my inbox is open."
    }
  }
};
