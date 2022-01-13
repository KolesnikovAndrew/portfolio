import React, {FC} from 'react'
import styles from './Project.module.scss'
export interface ProjectProps {
  image: string;
  description: string;
  name: string;
  techs: string;
}


export const Project: FC<ProjectProps> = ({image, description, name, techs}) => {
  return (
    <div className={styles.project}>
       <div >
         <div className={styles.projectImage}>

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
       </div>
       
    </div>
  )
}

export default Project
