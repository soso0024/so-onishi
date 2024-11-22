interface Translation {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    description: string;
  };
  about: {
    title: string;
    passion: string;
    experience: {
      title: string;
      role: string;
      description: string;
    };
  };
  news: {
    title: string;
  };
  projects: {
    title: string;
    transcription: {
      title: string;
      description: string;
      viewOnGithub: string;
    };
  };
  skills: {
    title: string;
    backend: {
      title: string;
      skills: string[];
    };
    tools: {
      title: string;
      skills: string[];
    };
    cloud: {
      title: string;
      skills: string[];
    };
  };
  contact: {
    title: string;
    github: {
      title: string;
      description: string;
    };
    zenn: {
      title: string;
      description: string;
    };
    linkedin: {
      title: string;
      description: string;
    };
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      description: "I am a graduate student at Doshisha University and currently enrolled in a Double Degree Program with École Centrale de Nantes, where I am studying Advanced Robotics. I completed my undergraduate degree in Information Systems Design from the Faculty of Science and Engineering at Doshisha University.",
    },
    about: {
      title: "About Me",
      passion: "I'm passionate about AI and technology, with a focus on solving real-world problems through programming.",
      experience: {
        title: "Experience",
        role: "Backend Engineer - Mynavi Corporation",
        description: "Implemented Bookmark-related API functionality during a hackathon",
      },
    },
    news: {
      title: "News",
    },
    projects: {
      title: "Projects",
      transcription: {
        title: "Transcription",
        description: "Audio file transcription service created to help with French listening assignments",
        viewOnGithub: "View on GitHub →",
      },
    },
    skills: {
      title: "Skills",
      backend: {
        title: "Backend",
        skills: ["Python", "API Development", "Database Design"],
      },
      tools: {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code"],
      },
      cloud: {
        title: "Cloud",
        skills: ["AWS", "Cloud Infrastructure"],
      },
    },
    contact: {
      title: "Connect with Me",
      github: {
        title: "GitHub",
        description: "View my projects",
      },
      zenn: {
        title: "Zenn",
        description: "Read my articles",
      },
      linkedin: {
        title: "LinkedIn",
        description: "Connect with me",
      },
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      projects: "プロジェクト",
      skills: "スキル",
      contact: "連絡先",
    },
    hero: {
      description: "同志社大学の大学院生で、現在エコールサントラル・ナント校とのダブルディグリープログラムで先端ロボット工学を学んでいます。同志社大学理工学部情報システムデザイン学科を卒業しました。",
    },
    about: {
      title: "自己紹介",
      passion: "AIとテクノロジーに情熱を持ち、プログラミングを通じて実世界の問題解決に取り組んでいます。",
      experience: {
        title: "経験",
        role: "バックエンドエンジニア - マイナビ株式会社",
        description: "ハッカソンでブックマーク関連のAPI機能を実装",
      },
    },
    news: {
      title: "ニュース",
    },
    projects: {
      title: "プロジェクト",
      transcription: {
        title: "文字起こし",
        description: "フランス語のリスニング課題をサポートするための音声ファイル文字起こしサービス",
        viewOnGithub: "GitHubで見る →",
      },
    },
    skills: {
      title: "スキル",
      backend: {
        title: "バックエンド",
        skills: ["Python", "API開発", "データベース設計"],
      },
      tools: {
        title: "ツール",
        skills: ["Git", "GitHub", "VS Code"],
      },
      cloud: {
        title: "クラウド",
        skills: ["AWS", "クラウドインフラ"],
      },
    },
    contact: {
      title: "コンタクト",
      github: {
        title: "GitHub",
        description: "プロジェクトを見る",
      },
      zenn: {
        title: "Zenn",
        description: "記事を読む",
      },
      linkedin: {
        title: "LinkedIn",
        description: "つながる",
      },
    },
  },
};
