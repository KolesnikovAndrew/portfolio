import React from 'react'
import styles from './About.module.scss'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {SiCss3, SiTypescript, SiRedux} from 'react-icons/si'
import {DiJavascript, DiReact, } from 'react-icons/di'
import SkillCard from '../../common/SkillCard/SkillCard'
export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        

        <div className={styles.bio}>

        <h1>About Me!</h1>
        
        <p> My name is Andrew, and I am a <span className={styles.specialText}>front-end developer.</span> 
        <br/><br/>
        </p> 
        <p>
          Born in 2000 in the Riga.

          Back in school, I realized that I wanted to become a programmer, I really liked the python lessons.
          <br/><br/>
          I am junior front-end developer with ambition and although I don't have much experience in development yet, I really want to get it.
          <br/><br/>
          I can speak English and Russian fluently. I know Latvian well, and French at a basic level.  My favorite band is Rammstein. 
          <br/><br/>
          I have skills that can be useful in any company, am quick to learn and can understand complex concepts. I like to deconstruct a complex problem into smaller ones and solve them. 
          <br/>

        </p>
      </div> 
      </div>
      <div >
        <img className={styles.cityImg} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjerulita.lt%2Fwp-content%2Fuploads%2F2020%2F01%2Fstock-photo-view-from-tower-of-saint-peters-church-on-riga-cathedral-and-roofs-of-old-houses-in-old-city-of-425887390.jpg&f=1&nofb=1" alt="riga" />
      </div>
      <div className={styles.skills}>
        <h1>
          My Skills
        </h1>

        <div className={styles.skillList}>
          <SkillCard icon={<AiFillHtml5/>} text='HTML5'/>
          <SkillCard icon={<SiCss3/>} text='CSS3'/>
          <SkillCard icon={<DiJavascript/>} text='JS'/>
          <SkillCard icon={<SiTypescript/>} text='TS'/>
          <SkillCard icon={<DiReact/>} text='React'/>
          <SkillCard icon={<SiRedux/>} text='Redux'/>
          <SkillCard icon={<AiFillGithub/>} text='GitHub'/>
          
        </div>
      </div>
    </div>
  )
}
export default About