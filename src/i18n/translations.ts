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
    viewOnGithub: string;
    items: {
      title: string;
      description: string;
      github: string;
      project_url?: string;
    }[];
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
            company:
              "<a href='https://www.fastretailing.com/en/' target='_blank' style='color: brown;'>Fast Retailing Co., Ltd.</a> 👕",
            period: "Mar 2025 ~ Apr 2025",
            description: `Maybe I will do:<br>
          - Examining challenges in the current network configuration and benefits of new technologies<br>
          - Identifying communication improvement points through interaction with IT departments in various countries<br>
          - Designing cloud infrastructure and architecture<br>
          - Driving work style reform for 130,000 employees globally using technologies such as generative AI<br>
          - Designing Zero Trust architecture based on authentication, authorization, and device management technologies`,
          },
          {
            role: "Backend Engineer",
            company:
              "<a href='https://corp.moneyforward.com/en/' target='_blank' style='color: brown;'>Money Forward, Inc.</a> 💰",
            period: "Feb 2025 ~ Mar 2025",
            description: "To be held at ERP Development Department",
          },
          {
            role: "Frontend Engineer",
            company:
              "<a href='https://www.yagish.jp/' target='_blank' style='color: brown;'>Yagish Inc.</a> 🌿",
            period: "Oct 2024 ~ Nov 2024",
            description:
              "Implemented frontend features for a personal inquiry form in a resume automation service.<br>Work Product is <a href='https://rirekisho.yagish.jp/contact' target='_blank' style='color: green;'>Click Here !</a>",
          },
          {
            role: "Backend Engineer",
            company:
              "<a href='https://www.mynavi.jp/eng/' target='_blank' style='color: brown;'>Mynavi Corporation</a> 💼",
            period: "Sep 2024",
            description:
              "Implemented bookmark functionality on the backend and developed an API to retrieve a list of articles bookmarked by users. - App Division 1st Place 🥇",
          },
          {
            role: "Engineer",
            company:
              "<a href='https://churadata.okinawa/' target='_blank' style='color: brown;'>Chura Data Inc.</a> 🌞",
            period: "Aug 2024",
            description:
              "During the internship, developed a search application utilizing RAG (Retrieval-Augmented Generation). Additionally, built infrastructure using AWS, Snowflake, Terraform, and dbt, and visualized data using Snowsight.",
          },
          {
            role: "Data Analyst",
            company:
              "<a href='https://www.simpleform.co.jp/' target='_blank' style='color: brown;'>Simple Form Inc.</a> 🏦",
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
      viewOnGithub: "GitHub",
      items: [
        {
          title: "File Management",
          description:
            "This is a simple file management system that allows you to split downloaded files into folders based on their file extension.",
          github:
            "https://github.com/soso0024/python-projects/tree/main/file-manage",
        },
        {
          title: "Time Management",
          description:
            "This is a simple time management system that allows you to track the time you spend on different tasks. And it also allows you to set a plan by using API of google calender. By using sqlite3, it can store the data of time you spend on different tasks.",
          github:
            "https://github.com/soso0024/python-projects/tree/main/time-manage",
        },
        {
          title: "Transcription",
          description:
            "Audio file transcription service created to help with French listening assignments",
          github:
            "https://github.com/soso0024/python-projects/tree/main/transcription",
        },
        {
          title: "Slack Reminder Creator",
          description:
            "A tool that allows you to easily create Slack reminders on a GUI",
          github: "https://github.com/soso0024/slack-reminder-creator",
          project_url: "https://slack-reminder-creator.vercel.app/",
        },
        {
          title: "Maze",
          description: "Maze search using the A* algorithm",
          github: "https://github.com/soso0024/cpp-assignment/tree/main/maze",
        },
        {
          title: "Treasure Hunt",
          description: "Treasure hunt game using the A* algorithm",
          github:
            "https://github.com/soso0024/cpp-assignment/tree/main/treasure_hunt",
        },
      ],
    },
    skills: {
      title: "Skills",
      backend: {
        title: "Backend",
        skills: ["Python", "Django", "Flask", "Ruby", "Ruby on Rails"],
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
        skills: ["GitHub", "VSCode", "Cursor", "Windsurf"],
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
            "Verify the performance of the generated AI code using test cases obtained using cosine similarity before the user uses it",
          period: "October 2024 - Present",
          github: "https://github.com/soso0024/pj-aidev-research-mockup",
        },
        {
          title: "Mapping of Robotics Laboratory using Turtlebot3",
          description:
            "Implementing laboratory mapping using SLAM technology and Turtlebot3",
          period: "January 2024 - July 2024",
          github:
            "https://github.com/RonaldoCD/2D-SLAM-SlamToolbox-TurtleBot3-ECN",
        },
        {
          title:
            "Evaluating Performance and Cost-effectiveness of Amazon EC2 in Video Encoding",
          description:
            "Verifying if video encoding using spot instances can maintain performance while reducing costs across different regions",
          period: "May 2023 - March 2024",
          github: "https://github.com/soso0024/python-video-encoding",
          conference:
            "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202302252571992899",
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
        "テクノロジーの力を使って多くの人をハッピーにすること，チームで協力して目標を達成することに魅力を感じます 🫶",
      experience: {
        title: "経験",
        items: [
          {
            role: "インフラエンジニア",
            company:
              "<a href='https://www.fastretailing.com/jp/' target='_blank' style='color: brown;'>株式会社ファーストリテイリング</a> 👕",
            period: "2025年3月 ~ 4月", // 開始時期のみなので「〜」を使う
            description: `主な職務内容（予定）は下記の通りです。<br>
        - 現状ネットワーク構成の課題や新技術導入のメリットを検討<br>
        - 各国ITとのやりとりを通してコミュニケーション改善点を見つける<br>
        - クラウドインフラ、アーキテクチャの設計<br>
        - 生成AIなどの技術をドライバーにグローバル13万人の働き方改革<br>
        - 認証・認可・デバイス管理などの技術を基礎にゼロトラストアーキテクチャのデザイン`,
          },
          {
            role: "バックエンドエンジニア",
            company:
              "<a href='https://corp.moneyforward.com/' target='_blank' style='color: brown;'>株式会社マネーフォワード</a> 💰",
            period: "2025年2月 ~ 3月",
            description: "ERP開発本部にて実施",
          },
          {
            role: "フロントエンドエンジニア",
            company:
              "<a href='https://www.yagish.jp/' target='_blank' style='color: brown;'>株式会社Yagish</a> 🌿",
            period: "2024年10月 ~ 11月",
            description:
              "履歴書自動化サービスにおける，個人向けのお問い合わせフォームのフロントエンド機能の実装を行いました。<br>制作物は<a href='https://rirekisho.yagish.jp/contact' target='_blank' style='color: green;'>ここをクリック!</a>",
          },
          {
            role: "バックエンドエンジニア",
            company:
              "<a href='https://www.mynavi.jp/' target='_blank' style='color: brown;'>マイナビ株式会社</a> 💼",
            period: "2024年9月",
            description:
              "バックエンドでのBookmark機能の実装と、ユーザーがBookmarkした記事の一覧を取得するAPIの開発を担当しました。 - アプリ部門1位 🥇",
          },
          {
            role: "エンジニア",
            company:
              "<a href='https://churadata.okinawa/' target='_blank' style='color: brown;'>ちゅらデータ株式会社</a> 🌞",
            period: "2024年8月",
            description:
              "インターンシップでは、RAG（Retrieval-Augmented Generation）を活用して検索アプリケーションを開発しました。さらに、AWS、Snowflake、Terraform、dbtを使用してインフラを構築し、Snowsightを使ってデータの可視化を行いました。",
          },
          {
            role: "データ分析",
            company:
              "<a href='https://www.simpleform.co.jp/' target='_blank' style='color: brown;'>シンプルフォーム株式会社</a> 🏦",
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
          description: "同志社大学から情報系優秀学生賞を受賞 🏆",
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
      viewOnGithub: "GitHub",
      items: [
        {
          title: "ファイル管理",
          description:
            "ダウンロードしたファイルを拡張子に基づいてフォルダに分割することができるシンプルなファイル管理システムです。",
          github:
            "https://github.com/soso0024/python-projects/tree/main/file-manage",
        },
        {
          title: "時間管理",
          description:
            "さまざまなタスクに費やした時間を追跡できるシンプルな時間管理システムです。また、GoogleカレンダーのAPIを使用して計画を設定することもできます。sqlite3を使用することで、さまざまなタスクに費やした時間のデータを保存できます。",
          github:
            "https://github.com/soso0024/python-projects/tree/main/time-manage",
        },
        {
          title: "文字起こし",
          description:
            "フランス語のリスニング課題をサポートするための音声ファイル文字起こしサービス",
          github:
            "https://github.com/soso0024/python-projects/tree/main/transcription",
        },
        {
          title: "Slackリマインダー作成",
          description: "SlackリマインダーをGUI上で簡単に作成できるツール",
          github: "https://github.com/soso0024/slack-reminder-creator",
          project_url: "https://slack-reminder-creator.vercel.app/",
        },
        {
          title: "迷路",
          description: "A*アルゴリズムを用いた迷路探索",
          github: "https://github.com/soso0024/cpp-assignment/tree/main/maze",
        },
        {
          title: "宝探し",
          description: "A*アルゴリズムを用いた宝探しゲーム",
          github:
            "https://github.com/soso0024/cpp-assignment/tree/main/treasure_hunt",
        },
      ],
    },
    skills: {
      title: "スキル",
      backend: {
        title: "バックエンド",
        skills: ["Python", "Django", "Flask", "Ruby", "Ruby on Rails"],
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
            "生成AIが出力したコードをユーザが使用する前に，コサイン類似度を用いて取得したテストケースを用いて性能を検証",
          period: "2024年10月 - 現在",
          github: "https://github.com/soso0024/pj-aidev-research-mockup",
        },
        {
          title: "Turtlebot3 を用いたロボティクス研究室のマッピング",
          description:
            "SLAM 技術と Turtlebot3 を活用し、研究室のマッピングを実装",
          period: "2024年1月 - 2024年7月",
          github:
            "https://github.com/RonaldoCD/2D-SLAM-SlamToolbox-TurtleBot3-ECN",
        },
        {
          title: "ビデオエンコードにおける Amazon EC2 の性能と費用対効果の評価",
          description:
            "スポットインスタンスを用いたビデオエンコードが、異なるリージョンでも性能を維持したまま費用削減を実現できるか検証",
          period: "2023年5月 - 2024年3月",
          github: "https://github.com/soso0024/python-video-encoding",
          conference:
            "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202302252571992899",
        },
      ],
    },
  },
};
