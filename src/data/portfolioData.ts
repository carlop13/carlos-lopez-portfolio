export const portfolioData = {
  personalInfo: {
    name: "Carlos Guadalupe López Trejo",
    role: "Software Engineer | Backend & Mobile Specialist",
    location: "San Miguel de Allende, Guanajuato, México",
    email: "carlosguadalupelt13@gmail.com",
    phone: "+52 442 353 5507",
    github: "https://github.com/carlop13",
    linkedin: "https://www.linkedin.com/in/carlos-guadalupe-l%C3%B3pez-trejo-380947234/",
    about: "I'm a Software Engineer passionate about building scalable systems, secure backend architectures, and cross-platform mobile applications. I enjoy solving real-world problems through clean architecture, scalable APIs, and modern technologies, working across the entire stack—from database design to cloud infrastructure and DevOps.",
  },
  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "PHP", "SQL", "Kotlin", "Dart"],
    backend: ["Node.js", "Express.js", "Spring Boot", "CodeIgniter", "Prisma ORM", "RESTful APIs", "JWT", "Socket.IO"],
    mobile: ["React Native", "Expo", "Flutter"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    infrastructure: ["AWS (S3, EC2, RDS)", "Docker", "Linux", "Nginx"],
  },
  projects: [
    {
      id: "easy-place",
      title: "Easy Place — PropTech + LegalTech Platform",
      description: "A complete platform that digitalizes the rental process through KYC identity verification, legal document management, digital signatures (NOM-151), secure payments via Stripe, and real-time communication.",
      technologies: ["Node.js", "React Native", "PostgreSQL", "Prisma", "AWS S3", "Socket.IO", "Weetrust", "Stripe"],
      links: {
        adminPanel: "https://easy-place-admin.vercel.app/",
        apiDocs: "https://documenter.getpostman.com/view/24519066/2sBY4TqJPR",
        apk: "https://drive.google.com/file/d/1Qo0MMeSwry0YX9LuSY6vvzusPOZdLsgE/view?usp=sharing",
      },
      featured: true,
      details: {
        features: [
          "Property marketplace", "Real-time chat with Socket.IO", "Rental applications",
          "KYC identity verification (WeeTrust / Mifiel)", "Secure document management",
          "Digital contracts", "Electronic signatures (NOM-151)", "Stripe payment processing",
          "Multi-language support", "Multi-currency support", "Offline cache with AsyncStorage",
          "Role-based access control", "Administrative dashboard"
        ],
        architecture: {
          mobile: ["React Native", "Expo", "Expo Router", "Context API", "Axios Interceptors", "Socket.IO Client", "AsyncStorage", "SecureStore", "React Native Maps", "Expo Location"],
          backend: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT Authentication", "Refresh Token Rotation", "Zod Validation", "Bcrypt", "Socket.IO", "REST API"],
          infrastructure: ["Docker", "AWS S3", "Render", "Linux", "Nginx", "Plesk"]
        },
        database: [
          "PostgreSQL + Prisma ORM", "State Machine with ENUMs", "Transactional workflows",
          "Soft deletes", "Audit logs", "JSONB fields", "Optimized indexes", "Foreign key integrity"
        ],
        security: [
          "JWT + Refresh Tokens", "RBAC (Role-Based Access Control)", "Signed URLs for documents",
          "Password hashing (Bcrypt)", "Rate limiting", "Helmet protection", "Secure file storage", "KYC verification"
        ]
      }
    },
    {
      id: "snapcocodrilo",
      title: "SnapCocodrilo (YouTube Downloader)",
      description: "A robust mobile application to download media, built with cross-platform technologies.",
      technologies: ["React Native", "Expo", "Express.js"],
      links: {
        repo: "https://github.com/carlop13/youtube-downloader-app",
        apk: "https://drive.google.com/file/d/1QZW-0jir1n9K06GQUMHT9KS3fbL-NyLC/view",
      },
      featured: false,
    },
    {
      id: "safe-alert-mobile",
      title: "Safe Alert Mobile",
      description: "Mobile application for emergency alerts featuring real-time geolocation tracking.",
      technologies: ["React Native", "Expo", "Node.js", "Firebase"],
      links: {
        repo: "https://github.com/carlop13/safe-alert-movil",
        video: "https://drive.google.com/file/d/1jv-PbZjp6U8OzKFMkk3R-5vo06cS06s7/view",
      },
      featured: false,
    },
    {
      id: "safe-alert-watch",
      title: "Safe Alert Smartwatch",
      description: "Wearable integration for the Safe Alert ecosystem, allowing rapid emergency signaling.",
      technologies: ["Android Wear OS", "Kotlin"],
      links: {
        repo: "https://github.com/carlop13/safe-alert-smart-watch",
        video: "https://drive.google.com/file/d/1ji49PWVQtyMoFKS5ixg1I0_eXoKCKkgt/view",
      },
      featured: false,
    },
    {
      id: "le-rochelle",
      title: "Le Rochelle Real Estate",
      description: "Real estate management platform tailored for property listings and client interactions.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "TailwindCSS", "jQuery"],
      links: {
        repo: "https://github.com/carlop13/le-rochelle",
        live: "https://lerochelle.kesug.com/",
      },
      featured: false,
    },
    {
      id: "la-pulga",
      title: "La Pulga E-Commerce",
      description: "E-commerce platform featuring a complete product catalog, automated invoicing, and geolocation.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "Jquery"],
      links: {
        repo: "https://github.com/carlop13/la-pulga",
        live: "https://lapulga.kesug.com/",
      },
      featured: false,
    },
        {
      id: "agricultura-inteligente",
      title: "Agricultura Inteligente - Smart Irrigation System",
      description: "IoT-based smart irrigation mobile application built to optimize water usage. Winner at UTEQ.",
      technologies: ["Kotlin", "PHP", "Firebase", "Arduino", "ESP32"],
      links: {
        repo: "https://github.com/carlop13/agricultura-inteligente",
        video: "https://www.youtube.com/shorts/Qu7RhS2lDTw",
        docs: "https://drive.google.com/file/d/1c03cZ84FM6ImIAKnkYTmsywKvJhaVCj8/view?usp=sharing",
      },
      featured: true,
    },
    {
      id: "taskconnect",
      title: "TaskConnect",
      description: "A task management and connectivity platform designed to streamline workflow and improve productivity.",
      technologies: ["React", "TypeScript", "Vite", "Node.js", "MongoDB"],
      links: {
        repo: "https://github.com/carlop13/taskconnect",
        live: "https://taskconnect.vercel.app/",
      },
      featured: true,
    }
  ],
  certifications: [
    {
      title: "Back End Developer Core",
      issuer: "Universidad Tecmilenio / Credly",
      link: "https://www.credly.com/badges/f929c909-ad02-44e4-8bc2-5e51b23f73ed",
    },
    {
      title: "Introduction to Packet Tracer",
      issuer: "Cisco / Credly",
      link: "https://www.credly.com/badges/f762ec64-f5e1-477b-b324-1e136d7302fc",
    },
    {
      title: "Microsoft Productivity Tools (ECE239)",
      issuer: "CONOCER",
      link: "https://drive.google.com/file/d/1jphcIriI8Dcxqp6OaLkFRV2HpRToZpV4/view?usp=sharing", // Add link when available
    },
    {
      title: "Mendix Certification",
      issuer: "Mendix",
      link: "https://drive.google.com/file/d/1E3mTENBVvkSFeMVL58W0hKAY4bh3fbTG/view?usp=sharing", // We will handle this image render in the UI components
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Easy Place",
      period: "2026",
      description: "Designed and developed a PropTech and LegalTech platform. Implemented digital signatures, secure payments, real-time chat, and a full administrative panel.",
      technologies: ["React Native", "Expo", "Node.js", "PostgreSQL", "Socket.IO", "Docker", "Stripe"],
      logo: "/logo_easy_place.png"
    },
    {
      role: "Tech Bootcamp Scholar",
      company: "Bécalos TechnoReady In-México (Monterrey)",
      period: "2025",
      description: "Developed backend, frontend, and data-driven systems in SCRUM environments. Built REST APIs, e-commerce platforms, and automated testing systems.",
      technologies: ["Java", "Spring Boot", "Git", "MongoDB", "JUnit", "MySQL"],
      logo: "/techno.svg"
    },
    {
      role: "Data Analysis Intern",
      company: "Industrias Michelin",
      period: "2025",
      description: "Created KPI dashboards and transformed raw data for business decision-making. Integrated BI tools with Oracle databases.",
      technologies: ["PI-Vision", "MicroStrategy", "Oracle SQL", "SQL Server", "Power BI"],
      logo: "/logo-Michelin.png"
    },
    {
      role: "Software Developer Intern",
      company: "Flashback",
      period: "2024",
      description: "Developed and maintained interactive web interfaces and components.",
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "Vite"],
      logo: "/fls_logo.png"
    },
    {
      role: "Full-Stack Intern",
      company: "Le Rochelle Real Estate",
      period: "2023",
      description: "Built MVC web applications tailored for property management with modern UI design.",
      technologies: ["PHP", "MySQL", "Tailwind CSS", "CodeIgniter", "jQuery"],
      logo: "/lerochelle.ico"
    }
  ],
  education: [
    {
      degree: "B.Eng. in Software Development and Management Engineering",
      institution: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "2021 – 2025",
      logo: "/logo_uteq.jpeg"
    },
    {
      degree: "Technical High School Diploma",
      institution: "Centro de Bachillerato Tecnológico Agropecuario No. 34 (CBTA)",
      period: "2018 – 2021",
      logo: "/logo_cbta.jpeg"
    }
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 - High Intermediate", certificate: "https://app.voxy.com/certificates/proficiency-test/6a3ee8c3f562ffe3bfcd0dbd/" },
    { name: "French", level: "A2" }
  ]
};