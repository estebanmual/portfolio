import React from "react";
import style from "./AboutMe.module.css";
import { TagSphere } from "react-tag-sphere";

function AboutMe() {
  const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "Redux",
    "jQuery",
    "Ruby",
    "Rails",
    "Node js",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    'Bootstrap',
    'Tailwind',
    'Sass'
  ];

  return (
    <section className={style.aboutMeSection} id="aboutMeSection">
      <div className={style.header}>
        <h2 className={style.title}>About Me</h2>
        <hr className={style.hr} />
      </div>
        <p className={style.description}>
          Hi, I'm Esteban, <strong>full-stack developer</strong> passionate
          about the frontend. I enjoy solving problems with clean scalable
          solutions. <br /><br />
          At the moment, I'm studying <strong>systems engineering</strong> at
          college. I am also dedicate my time to learn new things and adapt to
          the new technologies out there. <br /><br />
          I love JavaScript, and right now I'm working with <strong>React</strong> and <strong>Ruby on Rails</strong> to develop my projects.
        </p>
      <TagSphere 
        tags={skills}
        style={{
          fontSize: "3.75vw",
          fontFamily: "poppins",
          "zIndex": "0",
        }}
        radius={150}
        blur={false}
      />
    </section>
  );
}

export default AboutMe;
