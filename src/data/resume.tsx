import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Faisal Sayed",
  initials: "",
  url: "https://www.linkedin.com/in/sayyedfaisal/",
  location: "Mumbai, India",
  locationLink: "",
  description:
    "A Software Engineer who Love building things and getting his hands dirty in AI.",
  summary:
    "Currently pursuing, [M.Tech CSE @IIT Jammu](/#education). Working on my Research topic [Multitask learning for sentiment and emotion analysis in Marathi language.](/). Prior joining my M.Tech [I worked as a full-stack software engineer with two years of development experience](/#work).  [Participated in 3 hackathons](/#hackathons).",
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
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      company: "ABB",
      href: "https://www.guidewire.com/",
      badges: [],
      location: "Bangalore, India",
      title: "R&D Engineer Intern",
      logoUrl: "	https://global.abb/content/dam/abb-etc/commons/abb-logo.svg",
      start: "Jan 2025",
      end: "Apr 2024",
      description:
        "Led AI-driven R&D on code generation using LLama, Qwen, and Gemma models, accelerating automation in multi-language engineering workflows. Modernized the legacy Flow_Xpert codebase by migrating to .NET MAUI C#, enhancing performance and maintainability for deployment across platforms. Integrated 300+ C++ modules and conducted software R&D to ensure efficient cross-platform computation on Windows, Android, iOS, and macOS.",
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
        "Tasked with improving the performance of existing Salesforce applications, implemented modules using LWC, Apex, and SOQL, which enhanced API response time by 30% for 500+ daily users.  Refactored outdated test classes and integrated mock data strategies, elevating code coverage from 65% to 100% and reducing deployment failures by 40%. Automated user access configurations with Apex triggers, minimizing unauthorized access incidents and simplifying profile management",
    },
    {
      company: "Vyas AI",
      href: "https://vyasai.in/",
      badges: [],
      location: "IIT Jammu, India",
      title: "Data Scientist Intern",
      logoUrl: "/vyasai.png",
      start: "Mar 2024",
      end: "Aug 2024",
      description:
        " Faced with inconsistent large-scale datasets, led efforts to perform EDA and streamline data pipelines using Pandas and NumPy, which resulted in a 30% reduction in data inconsistencies and 25% improvement in model training efficiency. Engineered relevant features and collaborated with the team to optimize model hyperparameters, leading to a 15% boost in predictive performance. Produced visual dashboards using Matplotlib and Seaborn that helped to quickly interpret data insights and improve strategic decisions.",
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
        "Established and maintained Teach For India's application portal, serving approximately 60k teachers across India. Applied MERN stack, MUI, and supporting tech to update app portal based on new wireframe.Advocate for Teach For India's mission and educational equity through internal and external communication.",
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
        "Identified inefficiencies in manual data entry and developed Excel-integrated React components, eliminating manual input and improving content update efficiency by 100%. Integrated open-source WYSIWYG editors to replace paid alternatives, which improved usability and saved $450 annually in licensing costs. Enhanced the performance and reliability of legacy code by optimizing workflows and fixing critical bugs, resulting in a 30% boost in overall application speed.",
    },
    {
      company: " Capriconics Infotech LLP",
      href: "https://capriconics.com/",
      badges: [],
      location: "Mumbai, India",
      title: "Software Developer Intern",
      logoUrl:
        "https://capriconics.com/wp-content/uploads/2022/01/cap-logo-tm.png",
      start: "May 2021",
      end: "Jun 2021",
      description:
        "Pursued and Internship at Capriconics Infotech LLP where we were trained Software Development Lifecycle, Software Testing and Digital Marketing.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Jammu (IIT Jammu)",
      href: "https://www.iitjammu.ac.in/",
      degree: "M.Tech Computer Science and Engineering - Masters",
      logoUrl: "https://www.iitjammu.ac.in/assets/front/images/logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "M.H Saboo Siddik College of Engineering (University of Mumbai)",
      href: "https://www.mhssce.ac.in/",
      degree: "B.E Computer Science and Engineering - Bachelors",
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
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "I have kickstarted the work of VyasAI. Suggesting the UI design, theme and other feature on the website. Also partially contributing and helping the interns that were working on this project.",
      technologies: ["React.js", "HTMLCanvas", "TailwindCSS", "Firebase"],
      links: [
        {
          type: "Project Demo",
          href: "https://faixal-movie.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vyasAI_logo.png",
      video: "",
    },
    {
      title: "Vyas AI",
      href: "https://vyasai.in/",
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "I have kickstarted the work of VyasAI. Suggesting the UI design, theme and other feature on the website. Also partially contributing and helping the interns that were working on this project.",
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
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "Developed a web application using React, ReactBootstrap, and Firebase for Teach For India to manage volunteer registrations and classroom allocations. This was a Prework Assessment.",
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
      dates: "December 2018 - Mar 2019",
      active: true,
      description:
        "Created and deployed a chatbot for handling customer queries at [KGiSL Mutual Fund](https://www.kgisl.com/). Integrated the Chatbot with multiple platforms, including WhatsApp, Telegram, Google Assistant, and external call APIs, to optimize accessibility and reach.",
      technologies: ["Python", "HTML/CSS", "Flask", "MySQL", "DialogFlow"],
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
        "Chatbot a was a solution for the problem statement at Internal Smart India Hackathon  [SIH](https://www.sih.gov.in/). Chatbot provide healthcare information through a range of communication channels. Integrated the Chatbot with multiple platforms, including WhatsApp, Telegram, Google Assistant, and external call APIs, to optimize accessibility and reach.",
      technologies: ["Python", "HTML/CSS", "Flask", "MySQL", "DialogFlow"],
      links: [
        {
          type: "Project Demo",
          href: "https://bot.dialogflow.com/ee8686ac-01e2-4f1b-a108-942044cdc0ee",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/medicare_bot_logo.jpg",
      video: "",
    },
    {
      title: "Tech News",
      href: "https://technewsapi.netlify.app/",
      dates: "Mar 2024 - Present",
      active: true,
      description: "Created to gain knowledge on pagination in React.",
      technologies: ["React.Js", "HTML/CSS"],
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
      description:
        "Reached up to the final round competing with 185 teams across India.",
      image:
        "https://media.hackerearth.com/media/hackathon/airbus-aerothon-30/images/5c1b4a489e-Aerothon_3_-_HE_BG_1.jpg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "Jan 2020 - February 2020",
      location: "M.H Saboo Siddik, India",
      description:
        "Participated in the Interal Smart India Hackathon. Awarded with the certificate for the same.",
      image:
        "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/27/76205-2k19.jpg?itok=SoLxwejU",
      links: [],
    },
    {
      title: "Winner of World's Largest Hackathon",
      dates: "February 2019 - Mar 2019",
      location: "IIT Roorkee, India",
      description:
        "Won the Smart India Hackathon 2019 Grand Finale held at IIT Roorkee. Awarded cash prize and a trophy for solving the problem statement of building a machine learning enabled chatbot for mutual funds.",
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
      dates: "Aug 2024 - Present",
      location: "IIT Jammu",
      description:
        "Teaching various programming languages, libraries and technologies such as Python, Numpy, Pandas, Matplotlib, LateX, Virtualization, Git & Github, Deployment etc . to M.Tech(1st yeat) and Ph.D (1st year students) of IIT Jammu",
      image:
        "https://uxdt.nic.in/wp-content/uploads/2024/06/iit-jammu-01.jpg?x79383",
      links: [],
    },
  ],
} as const;
