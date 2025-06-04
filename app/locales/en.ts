import { Translations } from '../types/i18n';

export const en: Translations = {
  navigation: {
    about: 'About Me',
    skills: 'Skills',
    experience: 'Experience',
    workProjects: 'Work Projects',
    petProjects: 'Personal Projects',
  },
  about: {
    title: 'About Me...',
    name: 'Dmitriy Trofimov',
    role: 'Flutter (FullStack) Developer',
    yearsExperience: 'With over 3 years of experience',
    aboutEducation: 'About myself and education:',
    currentPosition: 'Current position:',
    itExperience: 'IT Experience:',
    personalProjects: 'Personal projects:',
    personalQualities: 'Personal qualities:',
    education: {
      university: 'ITMO University, St. Petersburg (2021) — Control Systems and Robotics, Instrumentation, Master of Engineering and Technology',
      college: 'Branch of the Institute of Management, Marketing and Finance, Lipetsk (2011) — Business Administration, Marketing',
      techSchool: 'Yelets Industrial and Economic College (2006) — Mechanical Engineering Technology, Technician-Technologist',
    },
    courses: {
      title: 'Courses and professional development:',
      esprit: 'ESPRIT Training (2013) — DP Technology Europe, St. Petersburg, CAM System Programmer',
      technologies: '"Development and implementation of new technologies for mechanical engineering" (2012) — "Scientific and Technical Testing Center "NEOTEST", Lipetsk',
    },
    currentWork: {
      description: 'Currently working as a Flutter developer at MTS Digital, where I develop mobile and web applications using Flutter, C#, and Rust. Previously worked at international product IT company Aventus IT in the Fintech sector.',
      responsibilities: [
        'Develop cross-platform applications using Flutter and Dart',
        'Work with Firebase, PostgreSQL, and various APIs to create full-featured applications',
        'Apply architectural patterns BLoC, Provider, GetIt to maintain clean and scalable code',
        'Integrate various payment systems and analytics tools',
      ],
    },
    experience: {
      years: 'Over 3 years of experience in Flutter development for Android and iOS',
      technologies: [
        'Backend development experience with Go, C#, and Rust basics',
        'REST API development and maintenance',
        'Database work: PostgreSQL, MongoDB, SQLite, Firebase',
        'Containerization with Docker and Kubernetes basics',
        'CI/CD and DevOps practices for development automation',
        'Git experience, including GitFlow and various branching strategies',
        'Experience publishing apps to Google Play and App Store',
        'English proficiency at B2 level (Upper-Intermediate)',
      ],
    },
    projects: {
      apps: 'Development of over 10 applications published on Google Play with total downloads exceeding 50,000',
      installations: 'over 50,000 downloads',
      technical: 'Creation of technical applications for mechanical engineering and engineering calculations',
      telegram: 'Development and maintenance of Telegram bot in Go',
      packages: 'Publishing libraries and packages on Pub.dev',
    },
    qualities: [
      'Constant drive for learning and mastering new technologies',
      'Attention to detail and focus on code quality',
      'Ability to quickly adapt to changing requirements',
      'Experience working in remote and distributed teams',
      'Ability to work independently and effectively manage time',
    ],
  },
  skills: {
    title: 'Professional Skills',
    categories: {
      mobile: 'Mobile Development',
      backend: 'Backend Development',
      frontend: 'Frontend Development',
      devops: 'DevOps',
      tools: 'Tools',
    },
  },
  experience: {
    title: 'Professional Experience',
    achievements: 'Key achievements:',
    mts: {
      company: 'MTS Digital',
      position: 'Flutter (FullStack) Developer',
      period: '2023 - Present',
      description: 'Working on key mobile and web projects for internal MTS company needs.',
      achievements: [
        'Participated in developing "My RTK" mobile application for MTS retail network employees',
        'Developed "OPERATOR+" mobile application for MTS support operators',
        'Created and maintained "RETAILIQA - Quality Control" web service for retail network auditing',
        'Implemented CI/CD using Kubernetes and Kustomize to optimize development process',
        'Developed microservice architecture using Rust and C#',
      ],
    },
    aventus: {
      company: 'Aventus IT',
      position: 'Flutter Developer',
      period: 'December 2021 - 2023',
      description: 'Working at international product IT company, developing mobile applications using Flutter (Android/iOS) in Fintech sector.',
      achievements: [
        'Worked at international product IT company on Flutter mobile applications',
        'Developed and maintained cross-platform financial applications for Android and iOS',
        'Integrated payment systems and analytics tools',
        'Implemented CI/CD processes for build and testing automation',
        'Applied architectural patterns BLoC, Provider, GetIt to maintain clean architecture',
        'Worked with REST API and WebSocket to ensure real-time data updates',
      ],
    },
    freelance: {
      company: 'Freelance Work',
      position: 'Android / Flutter Developer',
      period: 'October 2019 - December 2021',
      description: 'Development of mobile applications for Android and iOS using Flutter and native Android SDK.',
      achievements: [
        'Developed over 10 mobile applications for clients from various business sectors',
        'Created and published personal applications on Google Play and App Store',
        'Integrated with various APIs and third-party services',
        'Optimized application performance and improved user experience',
        'Implemented new technologies and best practices in development process',
      ],
    },
    engineering: {
      company: 'Mechanical Engineering Companies',
      position: 'Lead Engineer-Programmer',
      period: 'September 2011 - December 2021',
      description: 'Programming for mechanical engineering multi-axis equipment, controlling moving parts, analysis and verification of control programs.',
      achievements: [
        'Developed and optimized CNC equipment programs using G-code',
        'Created and maintained technical documentation and drawings',
        'Automated processes using Python scripts',
        'Implemented quality control system to reduce defects',
        'Trained personnel to work with new equipment and software',
      ],
    },
  },
  projects: {
    work: {
      title: 'Work Projects',
      disclaimer: 'Below are some of the corporate projects I worked on as part of my professional activities. In accordance with confidentiality policy, implementation details and complete technical specifications are not disclosed.',
      myRtk: {
        name: 'My RTK',
        description: 'Application for MTS retail network employees with notifications about personnel movements, work shift registration through WFM Verme, sales information and work schedule.',
      },
      operator: {
        name: 'OPERATOR+',
        description: 'Mobile application for MTS support operators to check their metrics, review SUZ updates, check work schedule and complete onboarding.',
      },
      retailiqa: {
        name: 'RETAILIQA - Quality Control',
        description: 'Web service for operational control and analysis of retail store network quality.',
      },
      fintech: {
        name: 'Fintech Platform',
        description: 'Cross-platform financial application for managing personal finances, investments and cryptocurrency assets.',
      },
      utm: {
        name: 'UTM Analytics',
        description: 'Go microservice for collecting, processing and analyzing marketing UTM tags in real-time.',
      },
      dashboard: {
        name: 'Corporate Dashboard System',
        description: 'Internal platform for monitoring and managing company projects with data integration from various sources.',
      },
      trading: {
        name: 'Trading View',
        description: 'Embeddable module for visualizing market data in real-time.',
      },
      auth: {
        name: 'Cross-platform Authorization',
        description: 'Single sign-on system for company financial application ecosystem.',
      },
      tracker: {
        name: 'Marketing Tracker',
        description: 'Service for tracking advertising campaign effectiveness with detailed conversion attribution.',
      },
    },
    personal: {
      title: 'Personal Projects',
      kidneySmart: {
        name: 'KidneySmart',
        description: 'Application for monitoring nutrition during dialysis and kidney problems',
      },
      gostThread: {
        name: 'GOST ISO Metric Thread',
        description: 'Application for mechanical engineering threading',
      },
      proxyBot: {
        name: 'ProxyFinderBot',
        description: 'Telegram bot that searches for proxies from public sources',
      },
      geometrical: {
        name: 'Geometric Tolerances',
        description: 'Reference guide for geometric tolerances in mechanical engineering. Based on GOST R 53442–2015',
      },
      cncCalc: {
        name: 'CncCalc',
        description: 'Calculator for CNC machines',
      },
      insertInfo: {
        name: 'InsertInfo',
        description: 'Wear guide for cutting inserts',
      },
      threadPro: {
        name: 'Thread UN/ISO/Tr',
        description: 'Parameter guide for various threads',
      },
      gThread: {
        name: 'G - Cylindrical Pipe Thread',
        description: 'Guide for pipe thread parameters',
      },
      triangleCalc: {
        name: 'TriangleCalc',
        description: 'Triangle parameter calculation calculator',
      },
      tolerances: {
        name: 'Grades and Tolerances',
        description: 'Reference guide for basic tolerances in mechanical engineering',
      },
      angleCalc: {
        name: 'Angle Calculation',
        description: 'Right triangle angle calculator',
      },
    },
  },
  footer: {
    role: 'Full Stack Developer',
    rights: 'All rights reserved.',
  },
  theme: {
    light: 'Switch to light theme',
    dark: 'Switch to dark theme',
  },
};