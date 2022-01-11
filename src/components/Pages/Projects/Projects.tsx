import React from 'react'
import Project from '../../common/ProjectCard/Project'
import styles from './Projects.module.scss'
export function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <Project image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfo-hightech.fr%2Fwp-content%2Fuploads%2F2020%2F11%2Fgoogle-amp-fast-speed-travel-ss-1920.jpg&f=1&nofb=1" description='This is a demo version of the social network. This is my first project written in React. This project has a working login form that uses the real API.' name="Demo Social Network" techs='React JS, Redux, CSS, HTML, JS'/>
      <Project image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfo-hightech.fr%2Fwp-content%2Fuploads%2F2020%2F11%2Fgoogle-amp-fast-speed-travel-ss-1920.jpg&f=1&nofb=1" description='This is a demo version of the social network. This is my first project written in React. This project has a working login form that uses the real API.' name="Subscribtion service" techs='React JS, CSS, HTML'/>
      <Project image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfo-hightech.fr%2Fwp-content%2Fuploads%2F2020%2F11%2Fgoogle-amp-fast-speed-travel-ss-1920.jpg&f=1&nofb=1" description='This is a demo version of the social network. This is my first project written in React. This project has a working login form that uses the real API.' name="Table with fetched from API data" techs='React JS, Axios, Node JS, SCSS, HTML'/>
      
      
    </div>
  )
}
export default Projects