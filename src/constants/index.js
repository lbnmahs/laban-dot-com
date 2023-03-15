import {
  backend,
  mobile,
  web,
  css,
  flutter,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  python,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  uiux,
  mellow,
  seavents,
  teremsha,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  }
]

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
    name: "flutter",
    icon: flutter,
  },
  {
    name: "python",
    icon: python,
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Laban proved me wrong.",
    name: "Mwara Njambi",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Laban does.",
    name: "Burton Mandela",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    testimonial:
      "After Laban optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Paradise Odinga",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
];

const projects = [
  {
    name: "Mellow AI",
    description:
      "It is a chatbot that can produces AI generated responses from the user input. It uses the Codex model from OpenAI's API to generate the responses. The frontend is built using Vite.js and Tailwind CSS.",
    tags: [
      {
        name: "openaiAPI",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mellow,
    source_code_link: "https://github.com/lbnmahs/Mellow",
  },
  {
    name: "Seavents Event Planner",
    description:
      "Web application that enables users to plan events and share them with their friends and family. It is built using the MERN stack. It also uses the Google Maps API to suggest a location of the event.",
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
        name: "mernstack",
        color: "pink-text-gradient",
      },
    ],
    image: seavents,
    source_code_link: "https://github.com/lbnmahs/project-seavents",
  },
  {
    name: "Teremsha Liquor Store",
    description:
      "This is an online liquor store built using Next.js and Sanity.io. Users can browse through the store's products, add them to their cart, and checkout. The store owner can add, edit, and delete products from the store",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanityio",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: teremsha,
    source_code_link: "https://github.com/lbnmahs/teremsha-liquor-store",
  },
];

export { services, technologies, testimonials, projects }