import Express from "./expressjs-icon.svg";
import Mongo from "./mongodb.svg";
import html from "./html.svg";
import css from "./css3.svg";
import react from "./react.svg";
import node from "./node.svg";
import postman from "./postman.svg";
import js from "./js.svg";
import photo from "./photosmlpng.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

//Template by https://github.com/rajshekhar26/cleanfolio

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/app3200",
  title: "APP.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  photo: { photo },
  name: "Aditya Prasad Pattanaik",
  role: "Full Stack Web Developer",
  description1:
    "Aspiring Full Stack Web Developer shaped by Masai School. Passionate about MERN stack, proficient in writing clean Back End, Data Structures & Algorithms.",
  description2:
    " Apart from web development, have  knowledge of Python, Technical Content Writing, and SEO. Interests in Electronic gadgets, Mobile gaming, and movies.",
  resume:
    "https://drive.google.com/file/d/15nIOtzcHTbViEIgPbNdKgUsd6bPh_Zqh/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/app3200",
    github: "https://github.com/app3200",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "The Body Shop",
    photo: project1,
    description: "Front-End clone of British Cosmetic and skin care company",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/mujhusain/theBodyshop.git",
    livePreview: "https://thebodyshop-clone.netlify.app/",
  },
  {
    name: "The Home Depot",
    photo: project2,
    description:
      "The Front end Clone of the popular american furniture and home improvement company",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    sourceCode: "https://github.com/Shyamal90/homeDepot_clone.git",
    livePreview: "https://shyamal90.github.io/homeDepot_clone/",
  },
  {
    name: "The Home Depot",
    photo: project2,
    description:
      "The Front and Back end clone of the popular american furniture and home imporovement company",
    stack: ["CSS", "JavaScript", "Express JS", "Mongo DB", "EJS"],
    sourceCode: "https://github.com/Shyamal90/homeDepot_Clone_.git",
    livePreview: "https://thehomedepot.herokuapp.com/",
  },
  {
    name: "Acko",
    photo: project3,
    description:
      "The Full Stack clone of private sector general insurance company in India.",
    stack: ["CSS", "JavaScript", "React", "Redux"],
    sourceCode: "https://github.com/app3200/Bike",
    livePreview: "https://acko-clone.netlify.app",
  },
];

const skills = [
  <img src={html} alt="Html" />,
  <img src={css} alt="Css" />,
  <img src={js} alt="JS" />,
  <img src={node} alt="NodeJS" />,
  <img src={postman} alt="Postman" />,
  <img src={Express} alt="Express" />,
  <img src={Mongo} alt="Mongo" />,
  <img src={react} alt="React" />,
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "appattanaik3200@gmail.com",
};

export { header, about, projects, skills, contact };
