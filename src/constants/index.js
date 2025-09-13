import {
aivshuman,
cribbage,
powerbiproject,
rasbarrypi,
Qlearning,
Colab,
gds,
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
} from "../assets";

export const aboutContent = 
  "Hi, I’m a Computer Science student at UNBC who loves turning complex problems into simple, impactful solutions. I approach technology like a puzzle: breaking it apart, finding patterns, and building systems that are not just efficient but meaningful. Whether I’m developing scalable cloud apps, designing intuitive UIs, or experimenting with AI, my focus is always on creating tech that makes a difference practical, purposeful, and a little bit bold.";
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
 
   {
      name: "Angular",
    icon: angular,
  },
  {
      name: "Flutter",
    icon: flutter,
  },
   {
      name: ".Net Core",
    icon: dotnet,
  },
  {
      name: "SSMS",
    icon: ssms,
  },
  {
      name: "AWS",
    icon: aws,
  },
   {
      name: "Google Colab",
    icon: Colab,
  },
    {
      name: "Power BI",
    icon: powerbi,
  },  
  {
    name: "React JS",
    icon: reactjs,
  }, 
   {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },


];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Business Intelligence Research Group (BIRG) Lab, UNBC",
    icon: unbc,
    iconBg: "#a2d2ff",
    date: "Jul. 2024 - Present",
    points: [
      "Researching and evaluating AWS for deploying scalable, cost-optimized cloud architectures for full-stack research applications.",
      "Developing advanced Angular front-ends with .NET Core APIs, featuring map integration, geospatial visualizations, and data dashboards.",
      "Building and publishing cross-platform Flutter apps (iOS/Android) with multilingual, offline, and cloud-sync capabilities.",
      "Designing and maintaining MSSQL databases while performing system administration, documentation, and stakeholder coordination.",
      "Delivering domain-specific solutions in healthcare (Geriatric Assessment tool), campus accessibility, and education (faculty assignment system).",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Department of Computer Science, UNBC",
    icon: unbc,
    iconBg: "#fbc3bc",
    date: "Jul. 2025 - Oct. 2025",
    points: [
      "Engineered a sophisticated ETL pipeline to process province-scale hierarchical XML, transforming it into normalized CSVs and a consolidated SQLite database.",
      "Developed a critical auditing and validation module that generates detailed reports to verify data integrity and ensure a fully traceable, reproducible workflow.",
      "Implemented metadata reporting to provide users with clear summaries of source file contents, significantly improving the system's transparency and usability.",
    ],
  },
  {
    title: "Part-Time Associate",
    company_name: "TJX Canada",
    icon: tjx,
    iconBg: "#E6DEDD",
    date: "Oct. 2022 - Mar. 2025",
    points: [
      "Awarded 'Employee of the Month' for consistently delivering high-quality customer service and improving customer satisfaction.",
      "Managed product merchandising and inventory across multiple departments to ensure planogram compliance and optimal stock availability.",
      "Trained and mentored new staff on company procedures and job responsibilities.",
    ],
  },
];

export const projectDiscription = "A curated collection of projects demonstrating a strong foundation in software engineering, machine learning, and data analytics. These projects highlight my ability to bridge theoretical concepts and practical application across diverse technology stacks.";

const projects = [
 {
    name: "GDS Mobile Application",
    description:
      "A cross-platform Flutter app that lets older adults self-administer the Geriatric Depression Scale (GDS) questionnaire. Users answer 15 yes/no items, and the app instantly calculates their depression score, displays personalized insights, and highlights areas of concern. Historical results are charted over time so users (and their caregivers) can track mood trends. An admin portal offers secure user management, aggregate reporting, PDF export of individual assessments, and role-based access to monitor overall program effectiveness.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "SSMS", color: "pink-text-gradient" },
    ],
    image: gds,
    source_code_link: "https://github.com/VrajGami/gdsapplication.git",
  },
  {
  name: "Healthcare BI Dashboard",
  description:
    "Created a dynamic business intelligence dashboard to visualize and analyze healthcare datasets, enabling data-driven decision-making through interactive Power BI visualizations and metrics.",
  tags: [
    { name: "Power BI", color: "blue-text-gradient" },
  ],
  image: powerbiproject,
  source_code_link: "https://github.com/VrajGami/Healthcare-Dashboard.git",
},
  {
  name: "Pathfinding Algorithm with Q-Learning",
  description:
    "Implemented a reinforcement learning solution for path optimization using Q-Learning. The project focuses on concurrent algorithm design, efficient exploration, and convergence strategies for dynamic environments.",
  tags: [
    { name: "Java", color: "blue-text-gradient" },
    { name: "GIT", color: "green-text-gradient" },
  ],
  image: Qlearning,
  source_code_link: "https://github.com/VrajGami/Machine-Learning-QLearning.git",
},
{
  name: "AI vs. Human Text Classification Model",
  description:
    "Built a machine learning classifier to distinguish between human-written and AI-generated text using advanced NLP and deep learning techniques, including LSTM and CNN models developed in PyTorch.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Google Colab", color: "green-text-gradient" },
    { name: "Kaggle", color: "pink-text-gradient" },
  ],
  image: aivshuman,
  source_code_link: "https://github.com/VrajGami/Ai-vs-Human-Text-classification.git",
},
{
  name: "Bad USB with Raspberry Pi Pico",
  description:
    "Engineered a stealthy USB-based cybersecurity tool using Raspberry Pi Pico and CircuitPython to inject payloads, perform reconnaissance on Windows systems, and log sensitive data — all mimicking keyboard input behavior.",
  tags: [
    { name: "Ducky Script", color: "blue-text-gradient" },
    { name: "PowerShell", color: "green-text-gradient" },
    { name: "Python", color: "pink-text-gradient" },
  ],
  image: rasbarrypi,
  source_code_link: "https://github.com/VrajGami/Bad-USB",
},
{
  name: "Cribbage Game (Java GUI)",
  description:
    "Developed a complete Cribbage card game with a user-friendly graphical interface using Java Swing. Demonstrates strong object-oriented programming principles and user interaction handling in desktop applications.",
  tags: [
    { name: "Java", color: "blue-text-gradient" },
    { name: "Java GUI", color: "green-text-gradient" },
    { name: "GIT", color: "pink-text-gradient" },
  ],
  image: cribbage,
  source_code_link: "https://github.com/Skyring100/Need-More-Caffeine-Cribbage.git",
},

];

export { technologies, experiences, projects };
