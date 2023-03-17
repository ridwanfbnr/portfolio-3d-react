import {
  frontend,
  backend,
  design,
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
  threejs,
  luxspace,
  meetup,
  weather,
} from "../assets";

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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Design",
    icon: design,
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
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Example Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda unde dolorem impedit, vitae quisquam tenetur adipisci.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aut.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam dignissimos aliquam ad.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Example Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda unde dolorem impedit, vitae quisquam tenetur adipisci.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aut.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam dignissimos aliquam ad.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Example Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda unde dolorem impedit, vitae quisquam tenetur adipisci.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aut.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam dignissimos aliquam ad.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia rem sed vel ducimus natus amet similique, libero tempore earum.",
    name: "Name",
    designation: "CFO",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore repellendus aliquid vero, excepturi quisquam quis tempore.",
    name: "Name",
    designation: "COO",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis laboriosam id quisquam quo asperiores autem distinctio impedit.",
    name: "Name",
    designation: "CTO",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LuxSpace",
    description:
      "Web-based platform that allows users to search for and order household equipment, providing convenient and efficient solutions for household equipment needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postman",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: luxspace,
    source_code_link: "https://github.com/ridwanfbnr/bwa-luxspace-react",
  },
  {
    name: "Meetups",
    description:
      "Web application that allows users to make an appointment with someone we want to meet",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: meetup,
    source_code_link:
      "https://github.com/ridwanfbnr/react-app-meetups-academind",
  },
  {
    name: "Weather App",
    description:
      "Weather web application platform that allows users to check current weather patterns around the world.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ridwanfbnr/weather-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
