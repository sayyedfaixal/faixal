import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Faisal Sayed",
  initials: "",
  url: "https://www.linkedin.com/in/sayyedfaisal/",
  location: "Mumbai, India",
  locationLink: "",
  description:
    "An Engineer who loves building things and experimenting with AI.",
  summary:
    "Analyst Developer @ FNZ. Thrilled to share that my research paper has been accepted at EMNLP 2025 🥳. Before pursuing my M.Tech, I worked as a full-stack software engineer with two years of experience. Also participated in 3 hackathons.",
  avatarUrl: "/me.jpg",

  skills: [
    "C/C++",
    "Python",
    "JavaScript",
    "SQL",
    "HTML/CSS",
    "React",
    "MUI",
    "TailwindCSS",
    "Pandas",
    "Numpy",
    "Git/GitHub",
    "Dialogflow",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
  ],

  contact: {
    email: "faisalsayed.cse@gmail.com",
    tel: "+91 703******3",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sayyedfaixal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayyedfaisal/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sayyedfaixal",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "FNZ",
      href: "https://www.fnz.com/",
      badges: [],
      location: "Gurugram, India",
      title: "Analyst Developer",
      logoUrl:
        "http://upload.wikimedia.org/wikipedia/commons/f/f1/FNZ_Logo.svg",
      start: "Jun 2025",
      end: "Present",
      description:
        "Working on FNZ’s core platform, contributing to foundational technology powering global fintech solutions.",
    },
    {
      company: "ABB",
      href: "https://www.abb.com/global/en",
      badges: [],
      location: "Bangalore, India",
      title: "R&D Engineer Intern",
      logoUrl: "https://global.abb/content/dam/abb-etc/commons/abb-logo.svg",
      start: "Jan 2025",
      end: "Apr 2025",
      description:
        "Developed AI-driven code generation workflows using LLaMA, Qwen, and Gemma models. Modernized legacy Flow_Xpert by migrating it to .NET MAUI, improving performance and multi-platform compatibility. Integrated 300+ C++ modules and optimised computation across Windows, Android, iOS, and macOS.",
    },
    {
      company: "Guidewire",
      href: "https://www.guidewire.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Software Engineer Intern",
      logoUrl:
        "https://edge.sitecorecloud.io/guidewiresodb06-guidewire0f2e-productioncd91-5186/media/project/guidewire/guidewire/header/logo.svg?h=49&iar=0&w=308",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Improved performance of Salesforce systems using LWC, Apex, and SOQL, reducing API response time by 30% for 500+ daily users. Refactored test classes and implemented mock data strategies, increasing code coverage from 65% to 100% and reducing deployment failures by 40%. Automated user access workflows with Apex triggers to enhance security.",
    },
    {
      company: "Vyas AI",
      href: "https://vyasai.in/",
      badges: [],
      location: "IIT Jammu, India",
      title: "Data Scientist Intern",
      logoUrl: "/vyasai.png",
      start: "Mar 2024",
      end: "Feb 2025",
      description:
        "Performed EDA and optimized data pipelines using Pandas and NumPy, reducing data inconsistencies by 30% and improving model training efficiency by 25%. Engineered features and tuned hyperparameters to achieve a 15% boost in predictive performance. Delivered dashboards using Matplotlib and Seaborn for faster decision-making. Also contributed as a full-stack developer.",
    },
    {
      company: "Teach For India",
      href: "https://www.teachforindia.org/",
      badges: [],
      location: "Mumbai, India",
      title: "Full Stack Developer (Part Time)",
      logoUrl:
        "https://cdn.prod.website-files.com/62f24893562f47d8766501aa/62f24ef3fde2c2f124a46baf_teachforindia_logo.svg",
      start: "Mar 2023",
      end: "Aug 2023",
      description:
        "Maintained and enhanced Teach For India’s application portal used by ~60k teachers nationwide. Implemented updates with the MERN stack and MUI, and supported new feature rollouts.",
    },
    {
      company: "MITR Learning & Media",
      href: "https://www.mitrmedia.com/",
      badges: [],
      location: "Mumbai, India",
      title: "Software Developer",
      logoUrl: "https://www.mitrmedia.com/wp-content/uploads/2023/11/Logo.svg",
      start: "Jun 2021",
      end: "Aug 2022",
      description:
        "Eliminated manual data entry by building Excel-integrated React components, doubling content update efficiency. Replaced paid editors with open-source alternatives, saving $450 annually. Improved reliability of legacy code and boosted app performance by 30% through workflow optimizations.",
    },
    {
      company: "Capriconics Infotech LLP",
      href: "https://capriconics.com/",
      badges: [],
      location: "Mumbai, India",
      title: "Software Developer Intern",
      logoUrl:
        "https://capriconics.com/wp-content/uploads/2022/01/cap-logo-tm.png",
      start: "May 2021",
      end: "Jun 2021",
      description:
        "Completed training in SDLC, software testing, and digital marketing during the internship.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology, Jammu (IIT Jammu)",
      href: "https://www.iitjammu.ac.in/",
      degree: "M.Tech in Computer Science and Engineering",
      logoUrl: "https://www.iitjammu.ac.in/assets/front/images/logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "M.H Saboo Siddik College of Engineering (University of Mumbai)",
      href: "https://www.mhssce.ac.in/",
      degree: "B.E in Computer Science and Engineering",
      logoUrl: "https://www.mhssce.ac.in/images/logo.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "R.J College",
      href: "https://www.rjcollege.edu.in/",
      degree: "HSC Science",
      logoUrl:
        "https://rjcollegemainwebsitedata.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/11/College-Logo-2023-pink.png",
      start: "2014",
      end: "2016",
    },
    {
      school: "K.V.K Ghatkopar Sarvajanik High School",
      href: "https://kvkghatkopar.in/",
      degree: "SSC",
      logoUrl: "https://kvkghatkopar.in/assets/images/logo/kvk_logo.png",
      start: "2002",
      end: "2014",
    },
  ],

  projects: [
    {
      title: "Movie Recommendation System",
      href: "https://faixal-movie.streamlit.app/",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "Built a content-based Movie Recommendation System using a dataset of 5000 TMDB movies. The Streamlit app provides an interactive interface powered by Python and Scikit-Learn.",
      technologies: ["Numpy", "Pandas", "Scikit-Learn", "Streamlit"],
      links: [
        {
          type: "Project Demo",
          href: "https://faixal-movie.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sayyedfaixal/move-recommendation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/movies.jpg",
      video: "",
    },
    {
      title: "MIRNet Image Processing",
      href: "https://quicksell-omega-orpin.vercel.app/",
      dates: "Aug 2024 - Oct 2024",
      active: true,
      description:
        "Implemented the MIRNet model for image restoration as part of an M.Tech project. Added a custom sharpening module to enhance texture and detail beyond the original architecture.",
      technologies: ["Numpy", "Pandas", "Keras", "TensorFlow"],
      links: [
        {
          type: "Code",
          href: "https://github.com/sayyedfaixal/Image_Processing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MIRNet.png",
      video: "",
    },
    {
      title: "Credit Card Anomaly Detection",
      href: "https://github.com/sayyedfaixal/credit-card-anomaly",
      dates: "Aug 2024",
      active: true,
      description:
        "Developed an anomaly detection system using the Kaggle Credit Card Fraud dataset. Handled extreme class imbalance (0.172% fraud) using ML techniques and visual analytics.",
      technologies: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "Matplotlib",
        "Seaborn",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/sayyedfaixal/credit-card-anomaly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CreditCard.jpg",
      video: "",
    },
    {
      title: "Cricket Score Predictor",
      href: "https://github.com/sayyedfaixal/cricket-score-predictor",
      dates: "Jun 2024",
      active: true,
      description:
        "Built an ML-based T20 Cricket Score Predictor using historical World Cup data. Considers runs, wickets, overs, teams, and venue to estimate final scores.",
      technologies: [
        "Python",
        "Streamlit",
        "XGBoost",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Pickle",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/sayyedfaixal/cricket-score-predictor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Ipl.jpg",
      video: "",
    },
    {
      title: "Airline Data Analysis Dashboard",
      href: "https://github.com/sayyedfaixal/airline-data-analysis",
      dates: "Jul 2024",
      active: true,
      description:
        "Built a Streamlit dashboard to explore airline data from SQLite databases. Users can upload DB files, explore tables, and visualize insights interactively.",
      technologies: [
        "Python",
        "Streamlit",
        "SQLite",
        "Pandas",
        "Seaborn",
        "Matplotlib",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/sayyedfaixal/airline-data-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/airplane.jpg",
      video: "",
    },
    {
      title: "QuickSell Kanban",
      href: "https://quicksell-omega-orpin.vercel.app/",
      dates: "Sep 2024",
      active: true,
      description:
        "Assignment for QuickSell: A Kanban Board built using React + Vite. Supports task grouping, sorting, and fetching data from an external API.",
      technologies: ["React.js", "Vite", "HTML/CSS", "Firebase"],
      links: [
        {
          type: "Project Demo",
          href: "https://quicksell-omega-orpin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sayyedfaixal/Quicksell",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Kanban.svg",
      video: "",
    },
    {
      title: "Vyas AI",
      href: "https://vyasai.in/",
      dates: "Mar 2024 - Aug 2024",
      active: true,
      description:
        "Kickstarted the VyasAI platform—from UI suggestions and theme planning to feature development. Contributed both as a Data Scientist Intern and as a full-stack developer supporting intern teams.",
      technologies: ["React.js", "HTMLCanvas", "TailwindCSS", "Firebase"],
      links: [
        {
          type: "Project Demo",
          href: "https://vyasai.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vyasai.png",
      video: "",
    },
    {
      title: "Teach For India",
      href: "https://teachforindia.netlify.app/",
      dates: "Mar 2022 - Apr 2022",
      active: true,
      description:
        "Built a React + Firebase application for Teach For India to manage volunteer registrations and classroom allocations. Developed as part of a pre-work assignment.",
      technologies: ["React.js", "ReactBootstrap", "ReactToast", "Firebase"],
      links: [
        {
          type: "Project Demo",
          href: "https://teachforindia.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/teachforindia_logo.svg",
      video: "",
    },
    {
      title: "Mutual Fund Chatbot",
      href: "https://bot.dialogflow.com/19719ab7-c51b-4cfd-a171-b05810891d3e",
      dates: "Dec 2018 - Mar 2019",
      active: true,
      description:
        "Built a multilingual chatbot for KGiSL Mutual Fund using Dialogflow, Flask, and MySQL. Integrated with WhatsApp, Telegram, Google Assistant, and external call APIs.",
      technologies: ["Python", "Flask", "MySQL", "DialogFlow", "HTML/CSS"],
      links: [
        {
          type: "Project Demo",
          href: "https://bot.dialogflow.com/19719ab7-c51b-4cfd-a171-b05810891d3e",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mutual_fund_bot_logo.jpg",
      video: "",
    },
    {
      title: "Medicare Chatbot",
      href: "https://bot.dialogflow.com/ee8686ac-01e2-4f1b-a108-942044cdc0ee",
      dates: "Jan 2020 - Mar 2020",
      active: true,
      description:
        "Developed a healthcare chatbot for the Smart India Hackathon internal round. Integrated across WhatsApp, Telegram, Google Assistant, and external APIs.",
      technologies: ["Python", "Flask", "MySQL", "DialogFlow", "HTML/CSS"],
      links: [
        {
          type: "Project Demo",
          href: "https://bot.dialogflow.com/ee8686ac-01e2-4f1b-a108-942044cdc0ee",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://bot.dialogflow.com/ee8686ac-01e2-4f1b-a108-942044cdc0ee",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medicare_bot_logo.jpg",
      video: "",
    },
    {
      title: "Tech News",
      href: "https://technewsapi.netlify.app/",
      dates: "Feb 2023 - Mar 2023",
      active: true,
      description:
        "Built a simple React-based project to understand pagination and API integration.",
      technologies: ["React.js", "HTML/CSS"],
      links: [
        {
          type: "Project Demo",
          href: "https://technewsapi.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tech_news_logo.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Airbus Aerothon 3.0",
      dates: "Apr 2021 - May 2021",
      location: "M.H Saboo Siddik, India",
      description: "Reached the final round among 185 teams across India.",
      image:
        "https://media.hackerearth.com/media/hackathon/airbus-aerothon-30/images/5c1b4a489e-Aerothon_3_-_HE_BG_1.jpg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "Jan 2020 - Feb 2020",
      location: "M.H Saboo Siddik, India",
      description:
        "Participated in the Internal Smart India Hackathon and received a certificate of appreciation.",
      image:
        "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/27/76205-2k19.jpg?itok=SoLxwejU",
      links: [],
    },
    {
      title: "Winner — Smart India Hackathon (Grand Finale)",
      dates: "Feb 2019 - Mar 2019",
      location: "IIT Roorkee, India",
      description:
        "Won the Smart India Hackathon 2019 Grand Finale at IIT Roorkee for building an ML-enabled chatbot for mutual funds. Awarded trophy and cash prize.",
      image:
        "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/27/76205-2k19.jpg?itok=SoLxwejU",
      links: [],
    },
  ],

  teaching: [
    {
      title: "Python",
      dates: "Apr 2023 - December 2023",
      location: "IIT Jammu",
      description:
        "Teaching Python programming to first-year B.Tech students. Tutorials for the exercise questions, evaluated assignments, quizzes & and exams..",
      image:
        "https://uxdt.nic.in/wp-content/uploads/2024/06/iit-jammu-01.jpg?x79383",
      links: [],
    },
    {
      title: "Data Structure and Algorithms",
      dates: "Jan 2024 - May 2024",
      location: "IIT Jammu",
      description:
        "Taught Data Structure and Algorithms to BTech students of IIT Jammu.",
      image:
        "https://uxdt.nic.in/wp-content/uploads/2024/06/iit-jammu-01.jpg?x79383",
      links: [],
    },
    {
      title: "Software Tools",
      dates: "Aug 2024 - Dec 2024",
      location: "IIT Jammu",
      description:
        "Teaching various programming languages, libraries and technologies such as Python, Numpy, Pandas, Matplotlib, LateX, Virtualization, Git & Github, Deployment etc . to M.Tech(1st yeat) and Ph.D (1st year students) of IIT Jammu",
      image:
        "https://uxdt.nic.in/wp-content/uploads/2024/06/iit-jammu-01.jpg?x79383",
      links: [],
    },
  ],
};
