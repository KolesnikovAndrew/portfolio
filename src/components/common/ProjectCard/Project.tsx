import { url } from 'inspector'
import React, {FC} from 'react'
import styles from './Project.module.scss'
import {AiFillGithub} from 'react-icons/ai'
import DemoButton from '../DemoButton/DemoButton'
 
export interface ProjectProps {
  image?: string;
  description: string;
  name: string;
  techs: string;
  githubLink: string;
  demo?:string;
}


export const Project: FC<ProjectProps> = ({image, description, name, techs, githubLink, demo}) => {

  const divStyle = {
    backgroundImage: 'url(' + image + ')'
  }
  return (
    <div className={styles.project}>
       <div >
         <div className={styles.projectImage} style={divStyle}>
          
         </div>    
       </div>
       <div className={styles.info}>
          <div className={styles.name}>
            <p>{name}</p>
          </div>
        <div className={styles.projectDescription}>
            <p>{description}</p>
        </div>
        <hr/>
        <div className={styles.techs}>
            <p>Technologies used in this project: {techs}</p>
        </div>
        <a className={styles.githubLinkContainer} href={githubLink}>
            <div className={styles.gitIcon}><AiFillGithub/></div>
            <p>Check out the code!</p>
        </a>
        <div>
          {demo && <DemoButton demo={demo}/> || ""}
        </div>
       </div>
       
    </div>
  )
}

export default Project
