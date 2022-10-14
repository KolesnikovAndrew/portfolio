import React from "react";
import Project from "../../components/common/ProjectCard/Project";
import styles from "./Projects.module.scss";

import ProjectList from "../../data/projects.json";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiCss3, SiTypescript, SiRedux } from "react-icons/si";
import { DiJavascript, DiReact } from "react-icons/di";
import TechCard from "./../../components/common/TechCard/TechCard";
export function Projects() {
  return (
    <section className={styles.projects}>
      <section className={styles.bgTriangle}>
        <div className={styles.bgTriangleLeft}>
          <h3> Sort by tec</h3>

          <section className={styles.techs}>
            <TechCard icon={<AiFillHtml5 />} text="HTML5" />
            <TechCard icon={<SiCss3 />} text="CSS3" />
            <TechCard icon={<DiJavascript />} text="JS" />
            <TechCard icon={<SiTypescript />} text="TS" />
          </section>
        </div>

        <div className={styles.bgTriangleRight}>
          <h3>hnologies</h3>
          <section className={styles.techs}>
            <TechCard icon={<DiReact />} text="React" />
            <TechCard icon={<SiRedux />} text="Redux" />
            <TechCard icon={<AiFillGithub />} text="Git/GitHub" />
          </section>
        </div>
      </section>

      <h1>Projects</h1>
      <section className={styles.projectList}>
        {ProjectList.map((project) => {
          return (
            <Project
              image={project.image}
              description={project.description}
              name={project.name}
              techs={project.techs.join(", ")}
              githubLink={project.githubLink}
              demo={project.demo ? project.demo : ""}
            />
          );
        })}
      </section>
    </section>
  );
}
export default Projects;
