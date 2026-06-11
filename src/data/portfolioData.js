export const personalInfo = {
  name: "Bushra Noor",
  greeting: "Hello there! 👋",
  greetingDark: "Hi there! 👋",
  titleHighlight: "Bushra Noor",  // The colored word in "I'm Bushra"
  titleRest: "",
  tagline: "I build clean, modern, and meaningful web experiences.",
  logoTextLight: "< Hello, I'm Kitty />",
  logoTextDark: "< Hello, I'm Kuromi />",
  email: "bushranoor0549@gmail.com",
  location: "Lahore, Pakistan",
  github: "https://github.com/bushra-noor",
  linkedin: "https://linkedin.com/in/Bushra-Noor",
  resumeFile: "/resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const services = [
  { icon: "FiDatabase", label: "Backend\nEngineering" },
  { icon: "FiCode", label: "FastAPI &\nPython" },
  { icon: "FiCpu", label: "AI /\nRAG Systems" },
  { icon: "FiLayout", label: "Frontend\nEngineering" },
];


export const aboutData = {
  description: `Dedicated Software Engineer with extensive experience in architecting high-performance, asynchronous RESTful APIs using Python and FastAPI. Proficient in building robust, scalable data layers with SQLAlchemy/MongoDB and integrating AI-driven solutions including production-grade RAG systems and deep learning models.`,
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "2+", label: "Projects Completed" },
    { value: "5+", label: "Technologies" },
  ],
};

export const skillsData = {
  languages: {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  webTech: {
    title: "Web Technologies",
    items: ["React", "Redux", "FastAPI", "Tailwind CSS", "RESTful APIs", "Web Scraping"],
  },
  aiMl: {
    title: "AI & Machine Learning",
    items: ["LangGraph", "Vector Databases", "Google Gemini API", "Deep Learning (U-Net)"],
  },
  databases: {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Motor", "Redis"],
  },
  infrastructure: {
    title: "Infrastructure",
    items: ["Docker", "Linux Administration", "CI/CD", "Git", "Prometheus", "Grafana"],
  },
  sqa: {
    title: "Software Quality Assurance",
    items: ["Playwright", "Manual Testing", "API Testing", "Automation Testing", "E2E Testing", "Bug Tracking"],
  },
};

export const projectsData = [
  {
    title: "AI-Resume-Analyzer",
    description: "An AI-powered FastAPI backend to parse PDF resumes and evaluate job-fit against specific job descriptions using Google Gemini.",
    bullets: [
      "Engineered persistent data layer with MongoDB for historical analysis",
      "Implemented user authentication and session management",
    ],
    tech: ["FastAPI", "Google Gemini", "MongoDB", "Python"],
    github: "#",
    live: null,
  },
  {
    title: "AI-Powered Inventory System",
    description: "Full-stack inventory management platform using FastAPI, PostgreSQL, and React with real-time operational insights.",
    bullets: [
      "Integrated AI-driven demand forecasting algorithms",
      "Developed responsive analytics dashboard with KPIs visualization",
    ],
    tech: ["FastAPI", "PostgreSQL", "React", "Tailwind CSS"],
    github: "#",
    live: null,
  },
];

export const experienceData = [
  {
    role: "Fullstack Development Intern",
    company: "KeepCoders",
    period: "July 2025 – Oct 2025",
    bullets: [
      "Architected and tested scalable RESTful API endpoints using FastAPI",
      "Integrated PostgreSQL databases with complex CRUD operations and query optimization",
      "Supported migration of legacy modules to modern React-based architecture",
      "Documented infrastructure setups and version control branching strategies",
    ],
  },
];

export const educationData = [
  {
    degree: "BS in Information Technology",
    institution: "Punjab University College of IT (PUCIT)",
    period: "2022 – 2026",
    coursework: ["Data Science", "Statistical Computing", "Distributed Systems", "Database Management", "Algorithms"],
  },
];
