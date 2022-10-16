import React, { useEffect, useState } from "react";
import Project from "../../components/common/ProjectCard/Project";
import styles from "./Projects.module.scss";

import ProjectList from "../../data/projects.json";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiTypescript, SiRedux } from "react-icons/si";
import { DiJavascript, DiReact } from "react-icons/di";
import TechCard from "./../../components/common/TechCard/TechCard";

export function Projects() {
  const [sorted, setSorted] = useState(false);
  const [sortList, setSortList] = useState({
    HTML5: false,
    CSS3: false,
    JS: false,
    React: false,
    Redux: false,
    TS: false,
  });

  useEffect(() => {
    Object.values(sortList).every((tech) => tech === false)
      ? setSorted(false)
      : setSorted(true);
  }, [sortList]);

  const handleSortInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    const techName = event.currentTarget.id;
    event.preventDefault();
    Object.values(sortList).every((tech) => tech === false) && setSorted(true);
    setSortList({
      ...sortList,
      [techName]: !sortList[techName as keyof typeof sortList],
    });
  };
  return (
    <section className={styles.projects}>
      <section className={styles.bgTriangle}>
        <div className={styles.bgTriangleLeft}>
          <h3> Sort by tec</h3>

          <section className={styles.techs}>
            <button onClick={handleSortInput} id="HTML5">
              <TechCard icon={<AiFillHtml5 />} text="HTML5" />
            </button>
            <button onClick={handleSortInput} id="CSS3">
              <TechCard icon={<SiCss3 />} text="CSS3" />
            </button>
            <button onClick={handleSortInput} id="JS">
              <TechCard icon={<DiJavascript />} text="JS" />
            </button>
          </section>
        </div>

        <div className={styles.bgTriangleRight}>
          <h3>hnologies</h3>
          <section className={styles.techs}>
            <button onClick={handleSortInput} id="React">
              <TechCard icon={<DiReact />} text="React" />
            </button>

            <button onClick={handleSortInput} id="Redux">
              <TechCard icon={<SiRedux />} text="Redux" />
            </button>
            <button onClick={handleSortInput} id="TS">
              <TechCard icon={<SiTypescript />} text="TS" />
            </button>
          </section>
        </div>
      </section>

      <h1>Projects</h1>
      <section className={styles.projectList}>
        {sorted
          ? ProjectList.map((project) => {
              let sortListKeys = Object.keys(sortList);
              let sortListTrueValues = sortListKeys.filter((sortListKeys) => {
                return sortList[sortListKeys as keyof typeof sortList];
              });
              if (
                project.techs.some(
                  (tech) => sortListTrueValues.indexOf(tech) >= 0
                )
              ) {
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
              }
            })
          : ProjectList.map((project) => {
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
