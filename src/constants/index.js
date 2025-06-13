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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const aboutContent = "I'm a passionate and results-driven Computer Science undergraduate with a strong foundation in full-stack development, machine learning, and data management. I thrive on collaborating with cross-functional teams to engineer innovative solutions that address real-world challenges, from enhancing campus accessibility to developing advanced healthcare applications. My commitment to continuous learning and problem-solving drives me to create efficient, scalable, and user-centric software experiences.";


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
    title: "ML/AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Business Intelligence Research Group, UNBC",
    icon: meta, // Placeholder, ideally a custom icon for UNBC or research
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
    icon: starbucks, // Placeholder, ideally a custom icon for TJX Canada
    iconBg: "#E6DEDD",
    date: "Oct. 2022 - Mar. 2025", 
    points: [
      "Awarded Employee of the Month for exceptional customer service. ",
      "Managed product placements and efficiently handled cashier operations at Winners, Marshalls, and HomeSense. ",
    ],
  },
 
];


export const projectDiscription = "My projects showcase my diverse skill set and hands-on experience in solving complex problems. Each entry provides a glimpse into my development process, highlighting the technologies used and the impact of the solution. These examples reflect my commitment to practical application and innovation in software development.";

const projects = [
  {
   name: "Cribbage Game (Java GUI)",
    description:
      "Developed a fully functional cribbage game utilizing a Java GUI, showcasing object-oriented programming and user interface design. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
   name: "Airline Operations Database System",
    description:
      "An end-to-end database system built for managing and optimizing airline operations, demonstrating proficiency in database management principles and practical application. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
  name: "AI vs. Human Text Classification Model",
    description:
      "A machine learning model developed to classify text as either AI-generated or human-written, leveraging advanced ML and NLP techniques. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
   {
name: "Path Finding Algorithm with Q-Learning",
    description:
      "Developed a concurrent algorithm to optimize path planning, showcasing expertise in advanced algorithmic design and reinforcement learning. ",
      tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },   {
 name: "Healthcare BI Dashboard",
    description:
      "Designed a comprehensive business intelligence dashboard using Power BI to visualize and analyze healthcare data, providing actionable insights. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
   {
 name: "Bad USB with Raspberry Pi Pico",
    description:
      "Engineered a hardware hacking tool using Raspberry Pi Pico, showcasing practical skills in cybersecurity and embedded systems. ",
  tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },  
];

export { services, technologies, experiences, projects };
