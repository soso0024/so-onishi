interface Translation {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    name: string;
    description: string;
  };
  about: {
    title: string;
    passion: string;
    experience: {
      title: string;
      items: {
        role: string;
        company: string;
        period: string;
        description: string;
      }[];
    };
  };
  news: {
    title: string;
    items: {
      date: string;
      description: string;
    }[];
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
      name: "So Onishi",
      description:
        "I am a graduate student at Doshisha University and currently enrolled in a Double Degree Program with École Centrale de Nantes, where I am studying Advanced Robotics. I completed my undergraduate degree in Information Systems Design from the Faculty of Science and Engineering at Doshisha University.",
    },
    about: {
      title: "About Me",
      passion:
        "I'm passionate about AI and technology, with a focus on solving real-world problems through programming.",
      experience: {
        title: "Experience",
        items: [
          {
            role: "Frontend Engineer",
            company: "Yagish Inc.",
            period: "Oct 2024 ~ Nov 2024",
            description:
              "Implemented frontend features for a personal inquiry form in a resume automation service.",
          },
          {
            role: "Backend Engineer",
            company: "Mynavi Corporation",
            period: "Sep 2024",
            description:
              "Implemented bookmark functionality on the backend and developed an API to retrieve a list of articles bookmarked by users. - App Division 1st Place 🥇",
          },
          {
            role: "Infrastructure Engineer",
            company: "Chura Data Inc.",
            period: "Aug 2024",
            description:
              "During the internship, developed a search application utilizing RAG (Retrieval-Augmented Generation). Additionally, built infrastructure using AWS, Snowflake, Terraform, and dbt, and visualized data using Snowsight.",
          },
          {
            role: "Data Analyst",
            company: "Simple Form Inc.",
            period: "Aug 2024",
            description:
              "During the internship, primarily conducted data analysis using Python. Discussed necessary elements for data analysis within the team and reported the results to the manager to share outputs. Through this experience, learned the importance of communication and coordination within the team.",
          },
        ],
      },
    },
    news: {
      title: "News",
      items: [
        {
          date: "July 31, 2024",
          description:
            "Graduated from École Centrale de Nantes with Masters in Advanced Robotics 🦾",
        },
        {
          date: "April 2, 2024",
          description:
            "Started a Masters in Computer Science at Doshisha University ❤️‍🔥",
        },
        {
          date: "March 31, 2024",
          description:
            "Graduated from Doshisha University with BSc in Computer Science 🧑‍💻",
        },
        {
          date: "March 31, 2024",
          description:
            "Got the outstanding student award for information technology from Doshisha University 🏆",
        },
        {
          date: "Sep 1, 2023",
          description:
            "Started a Masters in Advanced Robotics at Centrale Nantes 🤖",
        },
        {
          date: "April 2, 2020",
          description:
            "Started a BSc in Computer Science at Doshisha University 🔥",
        },
      ],
    },
    projects: {
      title: "Projects",
      transcription: {
        title: "Transcription",
        description:
          "Audio file transcription service created to help with French listening assignments",
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
      name: "大西 創",
      description:
        "現在，同志社大学の大学院生です。エコールサントラル・ナント校とのダブルディグリープログラムでロボット工学の修士号を取得しました。同志社大学理工学部情報システムデザイン学科を卒業しました。",
    },
    about: {
      title: "自己紹介",
      passion:
        "AIとテクノロジーに情熱を持ち、プログラミングを通じて実世界の問題解決に取り組んでいます。",
      experience: {
        title: "経験",
        items: [
          {
            role: "フロントエンドエンジニア",
            company: "株式会社Yagish",
            period: "2024年10月 ~ 11月",
            description:
              "履歴書自動化サービスにおける，個人向けのお問い合わせフォームのフロントエンド機能の実装を行いました。",
          },
          {
            role: "バックエンドエンジニア",
            company: "マイナビ株式会社",
            period: "2024年9月",
            description:
              "バックエンドでのBookmark機能の実装と、ユーザーがBookmarkした記事の一覧を取得するAPIの開発を担当しました。 - アプリ部門1位 🥇",
          },
          {
            role: "インフラエンジニア",
            company: "ちゅらデータ株式会社",
            period: "2024年8月",
            description:
              "インターンシップでは、RAG（Retrieval-Augmented Generation）を活用して検索アプリケーションを開発しました。さらに、AWS、Snowflake、Terraform、dbtを使用してインフラを構築し、Snowsightを使ってデータの可視化を行いました。",
          },
          {
            role: "データ分析",
            company: "シンプルフォーム株式会社",
            period: "2024年8月",
            description:
              "インターンシップでは、主にPythonを用いたデータ分析を行いました。データ分析の過程で必要となる要素についてチーム内で議論し、その結果をManagerに報告することで、アウトプットを共有しました。この経験を通じて、チーム全体での意思疎通やコミュニケーションの重要性を学びました。",
          },
        ],
      },
    },
    news: {
      title: "ニュース",
      items: [
        {
          date: "2024年7月31日",
          description:
            "エコールサントラル・ナント校で先端ロボット工学の修士号を取得 🦾",
        },
        {
          date: "2024年4月2日",
          description:
            "同志社大学大学院でコンピュータサイエンスの修士課程を開始 ❤️‍🔥",
        },
        {
          date: "2024年3月31日",
          description: "同志社大学でコンピュータサイエンスの学士号を取得 🧑‍💻",
        },
        {
          date: "2024年3月31日",
          description: "同志社大学から情報技術の優秀学生賞を受賞 🏆",
        },
        {
          date: "2023年9月1日",
          description:
            "エコールサントラル・ナント校でロボット工学の修士課程を開始 🤖",
        },
        {
          date: "2020年4月2日",
          description: "同志社大学でコンピュータサイエンスの学士課程を開始 🔥",
        },
      ],
    },
    projects: {
      title: "プロジェクトあいう",
      transcription: {
        title: "文字起こし",
        description:
          "フランス語のリスニング課題をサポートするための音声ファイル文字起こしサービス",
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
