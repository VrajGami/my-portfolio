import {
  aivshuman,
  cribbage,
  powerbiproject,
  rasbarrypi,
  Qlearning,
  Colab,
  gds,
  dart,
  java,
  python,
  reactjs,
  powerbi,
  flutter,
  angular,
  git,
  ssms,
  figma,
  dotnet,
  aws,
  unbc,
  tjx,
  docker,
  javascript,
  typescript,
} from "../assets";

export const aboutContent = 
  "I am a Computer Science student at UNBC with hands-on experience in research, software engineering, and data analytics. My work spans building scalable cloud applications, developing cross-platform mobile apps, and designing business intelligence dashboards. I thrive on solving real-world problems through technology, with a focus on practical impact, collaboration, and continuous learning. My recent projects include cloud-based healthcare tools, advanced ETL pipelines, and machine learning models for text classification. I am passionate about leveraging technology to drive innovation and make a meaningful difference.";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },

{
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "volunteering",
    title: "Volunteering",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificate",
    title: "Certificate",
  },
    {
    id: "contact",
    title: "Contact",
  },
];


const technologies = [
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Python", icon: python },
  { name: "C#", icon: dotnet },
  { name: "Java", icon: java },
  { name: "Dart", icon: dart },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: ".NET Core", icon: dotnet },
  { name: "Flutter", icon: flutter },
  { name: "Angular", icon: angular },
  { name: "React", icon: reactjs },
  { name: "Git", icon: git },
  { name: "Power BI", icon: powerbi },
  { name: "Google Colab", icon: Colab },
  { name: "MSSQL", icon: ssms },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Business Intelligence Research Group (BIRG), UNBC",
    icon: unbc,
    iconBg: "#a2d2ff",
    date: "2024– Present",
    points: [
      "Implemented and supported multiple business and clinical information systems, including cross-platform web applications and mobile apps using Angular, Flutter, and .NET Core (C#).",
      "Provided technical leadership on system architecture, designing high-availability, geo-redundant, and cost-optimized platforms on AWS (15+ services) with hybrid deployments on IIS.",
      "Developed interactive reporting tools with map integration, geospatial visualizations, and real-time dashboards, enabling stakeholders to analyze and act on data effectively.",
      "Designed and administered MSSQL databases, including schema design, indexing, query optimization, and automated backup/recovery.",
      "Engineered ETL/synchronization pipelines to reconcile patient forms, IoT data streams, and clinical records across distributed systems.",
      "Automated secure deployments with CI/CD pipelines, Infrastructure-as-Code (CloudFormation), and Git, with automated testing, staged rollouts, and compliance-focused security reviews.",
      "Delivered production-ready solutions: geriatric assessment tools, campus accessibility systems, faculty workload reporting platforms, and biobank/sample loaning applications with audit trails and access controls."
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Department of Computer Science, UNBC",
    icon: unbc,
    iconBg: "#fbc3bc",
    date: "2025– Present",
    points: [
      "Designed and maintained a high-performance ETL pipeline transforming over 150 GB of hierarchical XML data into normalized relational databases and reporting-ready datasets.",
      "Improved performance by reducing processing time by over 75% (from 4 hours to <1 hour) using streaming parsers and parallel processing.",
      "Built fault-tolerant workflows with automated validation, retries, and telemetry, ensuring data integrity, reproducibility, and reliable decision support.",
      "Authored detailed onboarding documentation, runbooks, and administrative guides to support maintenance, auditing, and cross-team knowledge transfer."
    ],
  },
  {
    title: "Part-Time Associate",
    company_name: "TJX Canada",
    icon: tjx,
    iconBg: "#E6DEDD",
    date: "2022– 2024",
    points: [
      "Awarded Employee of the Month; collaborated with team members to improve operational reliability, support staff training, and streamline business processes."
    ],
  },
];

export const projectDiscription = "A curated collection of projects demonstrating a strong foundation in software engineering, machine learning, and data analytics. These projects highlight my ability to bridge theoretical concepts and practical application across diverse technology stacks.";

const projects = [
  // Personal Projects
  {
    name: "Geriatric Assessment App",
    description: "Flutter, .NET, SQL Server | Cross-platform prototype with secure data capture, offline sync, and real-time reporting, later adopted in a live research project.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
    ],
    image: gds,
    source_code_link: "https://github.com/VrajGami/gdsapplication.git",
  },
  {
    name: "Healthcare Dashboard",
    description: "Power BI, DAX | Interactive dashboard integrating multi-source datasets with KPI tracking, trend analysis, and automated reporting.",
    tags: [
      { name: "Power BI", color: "blue-text-gradient" },
      { name: "DAX", color: "green-text-gradient" },
    ],
    image: powerbiproject,
    source_code_link: "https://github.com/VrajGami/Healthcare-Dashboard.git",
  },
  {
    name: "USBSecurity Research",
    description: "Raspberry Pi Pico, Python | HID emulation tool for ethical penetration testing and endpoint security awareness.",
    tags: [
      { name: "Raspberry Pi Pico", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
    ],
    image: rasbarrypi,
    source_code_link: "https://github.com/VrajGami/Bad-USB",
  },
  {
    name: "AI vs. Human Classification",
    description: "Data Mining, NLP | Model distinguishing AI vs. human-written text with high accuracy.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
    ],
    image: aivshuman,
    source_code_link: "https://github.com/VrajGami/Ai-vs-Human-Text-classification.git",
  },
  // Coursework Projects

  {
    name: "Q-Learning Pathfinding",
    description: "Java, Multithreading | Reinforcement learning algorithm for real-time, optimized pathfinding with concurrent processing.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Multithreading", color: "green-text-gradient" },
    ],
    image: Qlearning,
    source_code_link: "https://github.com/VrajGami/Machine-Learning-QLearning.git",
  },
  {
    name: "Intelligent Cribbage Game",
    description: "Java | GUI-based card game with AI opponent using strategic gameplay algorithms.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "GUI", color: "green-text-gradient" },
    ],
    image: cribbage,
    source_code_link: "https://github.com/Skyring100/Need-More-Caffeine-Cribbage.git",
  },
];

export { technologies, experiences, projects };
