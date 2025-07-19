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

export const aboutContent = "I'm a curious individual who thrives at the intersection of technology, creativity, and exploration. As a computer scientist and software developer, I enjoy crafting thoughtful, impactful digital solutions that blend logic with innovation. Outside of work, I find inspiration in nature, whether it’s hiking scenic trails, catching sunsets, or staying active through sports. Traveling fuels my perspective, as I seek out new cultures and stories from around the world. I’m also deeply committed to giving back through volunteering, building meaningful connections, and making a positive difference wherever I can. My journey is about creating, exploring, and inspiring and I'm always excited to see where it leads next.";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    id: "tech",
    title: "Tech",
  },{
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
    title: "Full Stack Developer",
    company_name: "Business Intelligence Research Group",
    icon: unbc,
    iconBg: "#383E56",
    date: "Jul. 2024 - Present",
    points: [
            "Actively building sophisticated Angular front-ends with advanced features like interactive map integration, and creating robust .NETCore APIs and deploying scalable full-stack applications on AWS using various PaaS services",
      "Building and publishing Flutter mobile apps for both iOS and Android, implementing complex functionalities such as dynamic multi-language support and offline data capabilities..",
      "Involvd in creating high-performance Microsoft SQL Server (MSSQL) databases, utilizing Internet Information Services (IIS) for local server hosting and testing.",
      "Managing the development and deployment pipeline to ensure application stability and performance.",
      "Applying full-stack skills to create solutions for the domains like healthcare, accessibility, and education.",
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
