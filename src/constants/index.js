import { a } from "framer-motion/client";
import project1 from "../assets/projects/project5.jpg";
import project2 from "../assets/projects/project2_img.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project3_img.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Html,CSS,Php and TailWind CSS as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Library Management System",
    image: project1,
    description:
      "A partially functional library managemt system  where a user can login to our website. You can rent a book, buy a book and also sell your older books. ",
    technologies: ["HTML", "CSS", "Php"],
    link:[" https://rpatel847.github.io/LMS/"],
  },
  {
    title: "Tic-Tac-Toe Game",
    image: project2,
    description:
      "A fully functional tic-tac-toe gaming website where you can play the tic-tac-toe game.",
    technologies: ["HTML", "CSS", "Php"],
    link:["https://rpatel847.github.io/Tic-Tac-Toe/"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link:[" https://rpatel847.github.io/Portfolio/"],
  },
  {
    title: "Rock-Paper-Scissors Game",
    image: project4,
    description:
      "A fully functional gaming website where you can play a game like rock-paper-scissors agaisnt the computer.",
      
    technologies: ["HTML", "CSS", "Php"],
    link:["https://rpatel847.github.io/Rock-Paper-Scissors/"],
  },
];

export const CONTACT = {
  address: "Kanti Path, Buxar Road, Kochas, Bihar ",
  phoneNo: "+916200763373",
  email: "ranjeet23032001@gmail.com",
};
