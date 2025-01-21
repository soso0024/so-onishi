interface Translation {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  research: {
    title: string;
    items: {
      title: string;
      description: string;
      period: string;
      github?: string;
      conference?: string;
    }[];
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
    fileManagement: {
      title: string;
      description: string;
      viewOnGithub: string;
    };
    timeManagement: {
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
    frontend: {
      title: string;
      skills: string[];
    };
    database: {
      title: string;
      skills: string[];
    };
    robotics: {
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
        "I'm fascinated by the idea of ​​using the power of technology to make people happy and working together as a team to achieve goals 🫶",
      experience: {
        title: "Experience",
        items: [
          {
            role: "Infrastructure Engineer",
            company: "Fast Retailing Co., Ltd. 👕",
            period: "Mar 2025 - Apr 2025",
            description: `Maybe I will do:<br>
          - Examining challenges in the current network configuration and benefits of new technologies<br>
          - Identifying communication improvement points through interaction with IT departments in various countries<br>
          - Designing cloud infrastructure and architecture<br>
          - Driving work style reform for 130,000 employees globally using technologies such as generative AI<br>
          - Designing Zero Trust architecture based on authentication, authorization, and device management technologies`,
          },
          {
            role: "Frontend Engineer",
            company: "Yagish Inc. 🌿",
            period: "Oct 2024 ~ Nov 2024",
            description:
              "Implemented frontend features for a personal inquiry form in a resume automation service.",
          },
          {
            role: "Backend Engineer",
            company: "Mynavi Corporation 💼",
            period: "Sep 2024",
            description:
              "Implemented bookmark functionality on the backend and developed an API to retrieve a list of articles bookmarked by users. - App Division 1st Place 🥇",
          },
          {
            role: "Infrastructure Engineer",
            company: "Chura Data Inc. 🌞",
            period: "Aug 2024",
            description:
              "During the internship, developed a search application utilizing RAG (Retrieval-Augmented Generation). Additionally, built infrastructure using AWS, Snowflake, Terraform, and dbt, and visualized data using Snowsight.",
          },
          {
            role: "Data Analyst",
            company: "Simple Form Inc. 🏦",
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
        viewOnGithub: "GitHub",
      },
      fileManagement: {
        title: "File Management",
        description:
          "This is a simple file management system that allows you to split downloaded files into folders based on their file extension.",
        viewOnGithub: "GitHub",
      },
      timeManagement: {
        title: "Time Management",
        description:
          "This is a simple time management system that allows you to track the time you spend on different tasks. And it also allows you to set a plan by using API of google calender. By using sqlite3, it can store the data of time you spend on different tasks.",
        viewOnGithub: "GitHub",
      },
    },
    skills: {
      title: "Skills",
      backend: {
        title: "Backend",
        skills: ["Python", "Django", "Flask"],
      },
      frontend: {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React"],
      },
      database: {
        title: "Database",
        skills: ["SQLite", "Supabase"],
      },
      robotics: {
        title: "Robotics",
        skills: ["C", "C++", "ROS2"],
      },
      tools: {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Cursor"],
      },
      cloud: {
        title: "Cloud",
        skills: ["AWS", "GCP", "Terraform", "LocalStack"],
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
    research: {
      title: "Research",
      items: [
        {
          title: "Utilizing Cosine Similarity in Testing Code Generation AI",
          description:
            "Conducting research to improve human-robot interaction through natural language processing and gesture recognition.",
          period: "October 2024 - Present",
        },
        {
          title: "Mapping of Robotics Laboratory using Turtlebot3",
          description:
            "Implementing laboratory mapping using SLAM technology and Turtlebot3",
          period: "January 2024 - July 2024",
          conference: "https://example.com/robotics-conference-2024",
        },
        {
          title:
            "Evaluating Performance and Cost-effectiveness of Amazon EC2 in Video Encoding",
          description:
            "Verifying if video encoding using spot instances can maintain performance while reducing costs across different regions",
          period: "May 2023 - March 2024",
        },
      ],
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
        "テクノロジーの力を使って周りをハッピーにすること，チームで協力して目標を達成することに魅力を感じます 🫶",
      experience: {
        title: "経験",
        items: [
          {
            role: "インフラエンジニア",
            company: "株式会社ファーストリテイリング 👕",
            period: "2025年3月 ~ 4月", // 開始時期のみなので「〜」を使う
            description: `主な職務内容（予定）は下記の通りです。<br>
        - 現状ネットワーク構成の課題や新技術導入のメリットを検討<br>
        - 各国ITとのやりとりを通してコミュニケーション改善点を見つける<br>
        - クラウドインフラ、アーキテクチャの設計<br>
        - 生成AIなどの技術をドライバーにグローバル13万人の働き方改革<br>
        - 認証・認可・デバイス管理などの技術を基礎にゼロトラストアーキテクチャのデザイン`,
          },
          {
            role: "フロントエンドエンジニア",
            company: "株式会社Yagish 🌿",
            period: "2024年10月 ~ 11月",
            description:
              "履歴書自動化サービスにおける，個人向けのお問い合わせフォームのフロントエンド機能の実装を行いました。",
          },
          {
            role: "バックエンドエンジニア",
            company: "マイナビ株式会社 💼",
            period: "2024年9月",
            description:
              "バックエンドでのBookmark機能の実装と、ユーザーがBookmarkした記事の一覧を取得するAPIの開発を担当しました。 - アプリ部門1位 🥇",
          },
          {
            role: "インフラエンジニア",
            company: "ちゅらデータ株式会社 🌞",
            period: "2024年8月",
            description:
              "インターンシップでは、RAG（Retrieval-Augmented Generation）を活用して検索アプリケーションを開発しました。さらに、AWS、Snowflake、Terraform、dbtを使用してインフラを構築し、Snowsightを使ってデータの可視化を行いました。",
          },
          {
            role: "データ分析",
            company: "シンプルフォーム株式会社 🏦",
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
      title: "プロジェクト",
      transcription: {
        title: "文字起こし",
        description:
          "フランス語のリスニング課題をサポートするための音声ファイル文字起こしサービス",
        viewOnGithub: "GitHub",
      },
      fileManagement: {
        title: "ファイル管理",
        description:
          "ダウンロードしたファイルを拡張子に基づいてフォルダに分割することができるシンプルなファイル管理システムです。",
        viewOnGithub: "GitHub",
      },
      timeManagement: {
        title: "時間管理",
        description:
          "さまざまなタスクに費やした時間を追跡できるシンプルな時間管理システムです。また、GoogleカレンダーのAPIを使用して計画を設定することもできます。sqlite3を使用することで、さまざまなタスクに費やした時間のデータを保存できます。",
        viewOnGithub: "GitHub",
      },
    },
    skills: {
      title: "スキル",
      backend: {
        title: "バックエンド",
        skills: ["Python", "Django", "Flask"],
      },
      frontend: {
        title: "フロントエンド",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React"],
      },
      database: {
        title: "データベース",
        skills: ["SQLite", "Supabase"],
      },
      robotics: {
        title: "ロボティクス",
        skills: ["C", "C++", "ROS2"],
      },
      tools: {
        title: "ツール",
        skills: ["Git", "GitHub", "VS Code", "Cursor"],
      },
      cloud: {
        title: "クラウド",
        skills: ["AWS", "GCP", "Terraform", "LocalStack"],
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
    research: {
      title: "研究",
      items: [
        {
          title: "コード生成AIのテストにおけるコサイン類似度の活用",
          description:
            "自然言語処理とジェスチャー認識を通じて、人間とロボットの相互作用を改善する研究を行っています。",
          period: "2024年10月 - 現在",
          github: "https://github.com/soso0024/pj-aidev-research-mockup",
        },
        {
          title: "Turtlebot3 を用いたロボティクス研究室のマッピング",
          description:
            "SLAM 技術と Turtlebot3 を活用し、研究室のマッピングを実装",
          period: "2024年1月 - 2024年7月",
          conference: "https://example.com/robotics-conference-2024",
        },
        {
          title: "ビデオエンコードにおける Amazon EC2 の性能と費用対効果の評価",
          description:
            "スポットインスタンスを用いたビデオエンコードが、異なるリージョンでも性能を維持したまま費用削減を実現できるか検証",
          period: "2023年5月 - 2024年3月",
        },
      ],
    },
  },
};
