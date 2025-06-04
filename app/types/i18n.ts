export type Locale = 'ru' | 'en';

export interface Translations {
  navigation: {
    about: string;
    skills: string;
    experience: string;
    workProjects: string;
    petProjects: string;
  };
  about: {
    title: string;
    name: string;
    role: string;
    yearsExperience: string;
    aboutEducation: string;
    currentPosition: string;
    itExperience: string;
    personalProjects: string;
    personalQualities: string;
    education: {
      university: string;
      college: string;
      techSchool: string;
    };
    courses: {
      title: string;
      esprit: string;
      technologies: string;
    };
    currentWork: {
      description: string;
      responsibilities: string[];
    };
    experience: {
      years: string;
      technologies: string[];
    };
    projects: {
      apps: string;
      installations: string;
      technical: string;
      telegram: string;
      packages: string;
    };
    qualities: string[];
  };
  skills: {
    title: string;
    categories: {
      mobile: string;
      backend: string;
      frontend: string;
      devops: string;
      tools: string;
    };
  };
  experience: {
    title: string;
    achievements: string;
    mts: {
      company: string;
      position: string;
      period: string;
      description: string;
      achievements: string[];
    };
    aventus: {
      company: string;
      position: string;
      period: string;
      description: string;
      achievements: string[];
    };
    freelance: {
      company: string;
      position: string;
      period: string;
      description: string;
      achievements: string[];
    };
    engineering: {
      company: string;
      position: string;
      period: string;
      description: string;
      achievements: string[];
    };
  };
  projects: {
    work: {
      title: string;
      disclaimer: string;
      myRtk: {
        name: string;
        description: string;
      };
      operator: {
        name: string;
        description: string;
      };
      retailiqa: {
        name: string;
        description: string;
      };
      fintech: {
        name: string;
        description: string;
      };
      utm: {
        name: string;
        description: string;
      };
      dashboard: {
        name: string;
        description: string;
      };
      trading: {
        name: string;
        description: string;
      };
      auth: {
        name: string;
        description: string;
      };
      tracker: {
        name: string;
        description: string;
      };
    };
    personal: {
      title: string;
      kidneySmart: {
        name: string;
        description: string;
      };
      gostThread: {
        name: string;
        description: string;
      };
      proxyBot: {
        name: string;
        description: string;
      };
      geometrical: {
        name: string;
        description: string;
      };
      cncCalc: {
        name: string;
        description: string;
      };
      insertInfo: {
        name: string;
        description: string;
      };
      threadPro: {
        name: string;
        description: string;
      };
      gThread: {
        name: string;
        description: string;
      };
      triangleCalc: {
        name: string;
        description: string;
      };
      tolerances: {
        name: string;
        description: string;
      };
      angleCalc: {
        name: string;
        description: string;
      };
    };
  };
  footer: {
    role: string;
    rights: string;
  };
  theme: {
    light: string;
    dark: string;
  };
}
