import React, { useEffect, useState } from "react";
import Project from "../../components/common/ProjectCard/Project";
import styles from "./Projects.module.scss";
import ProjectList from "../../data/projects.json";

import TechButton from "../../components/common/TechButton/TechButton";

export interface SortList {
  HTML5: boolean;
  CSS3: boolean;
  JS: boolean;
  React: boolean;
  Redux: boolean;
  TS: boolean;
}

export function Projects() {
  const [sorted, setSorted] = useState(false);
  const [sortList, setSortList] = useState<SortList>({
    HTML5: false,
    CSS3: false,
    JS: false,
    React: false,
    Redux: false,
    TS: false,
  });

  useEffect(() => {
    const areAllTechsFalse = Object.values(sortList).every((tech) => !tech);
    setSorted(!areAllTechsFalse);
  }, [sortList]);

  const handleSortInput = (techName: keyof SortList) => {
    setSortList((prevSortList) => ({
      ...prevSortList,
      [techName]: !prevSortList[techName],
    }));
  };

  const renderProjects = (projects: any) => {
    return projects.map((project: any) => (
      <Project
        key={project.name}
        image={project.image}
        description={project.description}
        name={project.name}
        techs={project.techs.join(", ")}
        githubLink={project.githubLink}
        demo={project.demo || ""}
      />
    ));
  };

  const filteredProjects = () => {
    const selectedTechs = Object.entries(sortList)
      .filter(([_, isSelected]) => isSelected)
      .map(([tech]) => tech as keyof SortList);

    return ProjectList.filter((project) =>
      project.techs.some((tech) =>
        selectedTechs.includes(tech as keyof SortList)
      )
    );
  };

  return (
    <section className={styles.projects}>
      <section className={styles.sortProjects}>
        <h3>Sort by technologies</h3>
        <section className={styles.techs}>
          <TechButton techName="React" handleSortInput={handleSortInput} />
          <TechButton techName="Redux" handleSortInput={handleSortInput} />
          <TechButton techName="TS" handleSortInput={handleSortInput} />
        </section>
      </section>

      <h1>Projects</h1>
      <section className={styles.projectList}>
        {sorted
          ? renderProjects(filteredProjects())
          : renderProjects(ProjectList)}
      </section>
    </section>
  );
}

export default Projects;
