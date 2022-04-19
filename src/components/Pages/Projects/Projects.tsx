import React from 'react'
import Project from '../../common/ProjectCard/Project'
import styles from './Projects.module.scss'
import DemoSoc from '../../../images/demo-soc.png'
import FetchTable from '../../../images/fetchTable.png'
import FormValidation from '../../../images/formValidation.png'
export function Projects() {
  
  
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>

      <Project description='A videogames store, where user can watch, buy and rate videogames. Was made using Free-to-Play Games Database By Digiwalls Media' name="Videogames store" techs='Axios, SCSS, React JS, Redux' githubLink='https://github.com/KolesnikovAndrew/gamesStoreProject' demo='https://kolesnikovandrew.github.io/gamesStoreProject/'/>
      <Project image={DemoSoc} description='This is a demo version of the social network. It is my first project written in React. For the API I used social-network.samuraijs.com free version. For state management I used Redux.' name="Demo Social Network" techs='React JS, Redux, CSS, HTML, JS' githubLink="https://github.com/KolesnikovAndrew/demo-social-network"/>
      <Project image={FormValidation} description='The user is obliged to fill in the field with the correct e-mail and check the box that he agrees with the tos. Otherwise, the user receives an error message. If the form is filled in correctly, the user receives a message about the successful completion of the form. ' name="Validation of the form" techs='React JS, CSS, HTML, React Hook Form' githubLink='https://github.com/KolesnikovAndrew/magebit-test-task'/>
      <Project image={FetchTable} description='The front-end makes an axios request to the nodejs API, which is connected to the Postgresql database and receives data, which is then displayed in the table. ' name="Table with fetched from API data" techs='Axios, Node JS, SCSS, HTML, PostgreSQL' githubLink='https://github.com/KolesnikovAndrew/welbex-test'/>
   
      
      
    </div>
  )
}
export default Projects