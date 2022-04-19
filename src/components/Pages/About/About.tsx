import React from 'react'
import styles from './About.module.scss'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {SiCss3, SiTypescript, SiRedux} from 'react-icons/si'
import {DiJavascript, DiReact, } from 'react-icons/di'
import SkillCard from '../../common/SkillCard/SkillCard'
import Feature from '../../common/Feature/Feature'
import Responsive from '../../../images/icons8-rotation.gif'
import ReactLogo from '../../../images/react.png'
import Accuracy from '../../../images/icons8-accuracy.gif'
import Optimization from '../../../images/optimization.png'
export function About() {
  return (
    <div className={styles.about}>
     
      <div className={styles.content}>
        <h1 className={styles.aboutMe}>About Me!</h1>
        <div className={styles.features}>
          <Feature image={Responsive} text="Fully responsive"/>
          <div className={styles.newestTechs}>
            <div className={styles.reactSpin}>
              <Feature image={ReactLogo} text=""/>
            </div>
            <label>Newest technologies</label>
          </div>
          <div className={styles.optimization}>
            <Feature image={Optimization} text="Optimized"/>
          </div>
          
          <Feature image={Accuracy} text="Pixel Perfect"/>
         
        </div>
        <div className={styles.bio}>      
          <p> My name is Andrew, and I am a <span className={styles.specialText}>front-end developer.</span> 
          <br/><br/>
          </p> 
          <p>
            Born in 2000 in the Riga.

            Back in school, I realized that I wanted to become a programmer, I really liked the python lessons.
            <br/><br/>
            
            I can speak English and Russian fluently. I know Latvian well, and French at a basic level.  My favorite band is Rammstein. 
            <br/><br/>
            I have skills that can be useful in any company, am quick to learn and can understand complex concepts. I like to deconstruct a complex problem into smaller ones and solve them. 
            <br/><br/>
            I like minimalist designs, with little bits of animation. 
          </p>
      </div> 
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
          <SkillCard icon={<AiFillGithub/>} text='Git/GitHub'/>
          
        </div>
      </div>
      
    </div>
  )
}
export default About