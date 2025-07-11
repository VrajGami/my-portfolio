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

export const aboutContent = "I'm a curious soul who thrives at the crossroads of code and adventure. By day, I'm a computer scientist and software developer, crafting digital solutions with logic and creativity. Beyond the screen, you'll find me exploring nature's trails, chasing sunsets, or diving into a new sport with a grin. I'm a passionate traveler, always chasing the next story from a far-off corner of the world. And when I'm not building or wandering, I'm giving back through volunteering, connecting with communities, and making a difference one step at a time. I'm here to create, explore, and inspire join me on the journey!";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Full Stack Developer",
    company_name: "Business Intelligence Research Group",
    icon: unbc,
    iconBg: "#383E56",
    date: "Jul. 2024 - Present",
    points: [
            "Developed and maintained cross-platform mobile applications using Flutter (for both Android and iOS), responsive web applications using Angular, and scalable backend services with .NET Core and SQL Server.",
      "Deployed production-ready applications to AWS using various PaaS services, ensuring secure, maintainable, and high-performance cloud architecture.",
      "Worked across multiple domains including healthcare, campus accessibility, and academic operations such as faculty scheduling and reporting.",
      "In the healthcare domain, contributed to building an intelligent application that assists caregivers and physicians with patient assessments and generates personalized care plans using integrated machine learning capabilities.",
      "In the accessibility domain, developed web components and interfaces aimed at improving the inclusiveness and usability of university campus for all users.",
      "In academic operations, engineered a tool to streamline the management of faculty workloads, supporting efficient allocation and reporting of teaching assignments.",
    ],
  },


  {
     title: "Part-Time Associate",
    company_name: "TJX Canada",
    icon: tjx, 
    iconBg: "#E6DEDD",
    date: "Oct. 2022 - Mar. 2025", 
    points: [
      "Awarded Employee of the Month for exceptional customer service. ",
      "Managed product placements and efficiently handled cashier operations at Winners, Marshalls, and HomeSense. ",
      "Contributed to increased store sales through strategic and intelligent product management."
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
{
  name: "AI vs. Human Text Classification Model",
  description:
    "Built a machine learning classifier to distinguish between human-written and AI-generated text using advanced NLP and deep learning techniques, including LSTM and CNN models developed in PyTorch.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "PyTorch", color: "green-text-gradient" },
    { name: "TensorFlow", color: "pink-text-gradient" },
  ],
  image: aivshuman,
  source_code_link: "https://github.com/VrajGami/Ai-vs-Human-Text-classification.git",
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

];

export { technologies, experiences, projects };
