import React from 'react'
import Project from '../../common/ProjectCard/Project'
import styles from './Projects.module.scss'
import DemoSoc from '../../../images/demo-soc.png'
export function Projects() {
  console.log(typeof DemoSoc);
  
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <Project image={DemoSoc} description='This is a demo version of the social network. It is my first project written in React. For the API I used social-network.samuraijs.com free version. For state management I used Redux.' name="Demo Social Network" techs='React JS, Redux, CSS, HTML, JS'/>
      <Project image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfo-hightech.fr%2Fwp-content%2Fuploads%2F2020%2F11%2Fgoogle-amp-fast-speed-travel-ss-1920.jpg&f=1&nofb=1" description='The user is obliged to fill in the field with the correct e-mail and check the box that he agrees with the tos. Otherwise, the user receives an error message. If the form is filled in correctly, the user receives a message about the successful completion of the form. ' name="Validation of the form" techs='React JS, CSS, HTML, React Hook Form'/>
      <Project image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfo-hightech.fr%2Fwp-content%2Fuploads%2F2020%2F11%2Fgoogle-amp-fast-speed-travel-ss-1920.jpg&f=1&nofb=1" description='The front-end makes an axios request to the nodejs API, which is connected to the Postgresql database and receives data, which is then displayed in the table. ' name="Table with fetched from API data" techs='React JS, Axios, Node JS, SCSS, HTML, PostgreSQL'/>
      
      
    </div>
  )
}
export default Projects