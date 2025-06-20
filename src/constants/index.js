import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
powerbi,
  tailwind,

flutter,
angular,
  git,
  figma,
dotnet,
aws,
unbc,
tjx,


  threejs,
} from "../assets";

export const aboutContent = "Small intro or first impression";


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

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud",
    icon: creator,
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
  }, {
      name: "AWS",
    icon: aws,
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
  //   {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },

];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Business Intelligence Research Group, UNBC",
    icon: unbc, // Placeholder, ideally a custom icon for UNBC or research
    iconBg: "#383E56",
    date: "Jul. 2024 - Present", 
    points: [
      "Collaborated with a cross-functional team to develop the D-CGA@Home & Hero Home Care application, assisting caregivers and physicians in geriatric assessments. ",
      "Contributed to the design and implementation of a multi-language mobile app (Flutter), a web app (Angular), and a .NET backend service with optimal AWS cloud deployment. ",
      "Integrated machine learning to generate personalized care plans for elderly patients. ",
      "Developed web components and managed cloud deployment for 'Accessible UNBC', a university-wide initiative to enhance campus accessibility and user experience. ",
      "Engineered a robust tool for managing and assigning faculty workloads, efficiently allocating assignment responsibilities. ",
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
    ],
  },
 
];


export const projectDiscription = " Some Discriptions";

const projects = [
  {
   name: "Cribbage Game (Java GUI)",
    description:
      "Developed a fully functional cribbage game utilizing a Java GUI, showcasing object-oriented programming and user interface design. ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java GUI",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
    ],
    image: unbc,
    source_code_link: "https://github.com/",
  },
  {
   name: "Airline Operations Database System",
    description:
      "An end-to-end database system built for managing and optimizing airline operations, demonstrating proficiency in database management principles and practical application. ",
    tags: [
      {
        name: "SSMS",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    
    ],
    image: unbc,
    source_code_link: "https://github.com/",
  },
  {
  name: "AI vs. Human Text Classification Model",
    description:
      "A machine learning model developed to classify text as either AI-generated or human-written, leveraging advanced ML and NLP techniques. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "pyTourch",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image:  unbc,
    source_code_link: "https://github.com/",
  },
   {
name: "Path Finding Algorithm with Q-Learning",
    description:
      "Developed a concurrent algorithm to optimize path planning, showcasing expertise in advanced algorithmic design and reinforcement learning. ",
      tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "GIT",
        color: "green-text-gradient",
      },
  
    ],
    image: unbc,
    source_code_link: "https://github.com/",
  },   {
 name: "Healthcare BI Dashboard",
    description:
      "Designed a comprehensive business intelligence dashboard using Power BI to visualize and analyze healthcare data, providing actionable insights. ",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
    
    ],
    image: unbc,
    source_code_link: "https://github.com/",
  },
   {
 name: "Bad USB with Raspberry Pi Pico",
    description:
      "Engineered a hardware hacking tool using Raspberry Pi Pico, showcasing practical skills in cybersecurity and embedded systems. ",
  tags: [
      {
        name: "Ducky Script",
        color: "blue-text-gradient",
      },
      {
        name: "Power Shell",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: unbc,
    source_code_link: "https://github.com/",
  },  
];

export { services, technologies, experiences, projects };
