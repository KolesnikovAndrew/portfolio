import React from "react";
import styles from "./About.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiTypescript, SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript, DiReact } from "react-icons/di";
import SkillCard from "../../components/common/SkillCard/SkillCard";
import Feature from "../../components/common/Feature/Feature";
import Responsive from "../../images/icons8-rotation.gif";
import ReactLogo from "../../images/react.png";
import Accuracy from "../../images/icons8-accuracy.gif";
import Optimization from "../../images/optimization.png";
export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.aboutMe}>About Me!</h1>
        <div className={styles.features}>
          <Feature image={Responsive} text="Fully responsive" />
          <div className={styles.newestTechs}>
            <div className={styles.reactSpin}>
              <Feature image={ReactLogo} text="" />
            </div>
            <label>Newest technologies</label>
          </div>
          <label className={styles.optimization}>
            <Feature image={Optimization} text="Optimized" />
          </label>

          <Feature image={Accuracy} text="Pixel Perfect" />
        </div>
        <div className={styles.bio}>
          <p>
            {" "}
            My name is Andrew, and I am a{" "}
            <span className={styles.specialText}>front-end developer.</span>
            <br />
            <br />
          </p>
          <p>
            I am 23 years old. Back in school, I realized that I wanted to
            become a programmer, because I really liked the python classes. I
            fell in love with it.
            <br />
            <br />
            I can speak English and Russian fluently. I know Latvian well, and
            French at a basic level. TSI university student.
            <br />
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <h1>My Skills</h1>

        <div className={styles.skillList}>
          <SkillCard icon={<AiFillHtml5 />} text="HTML5" />
          <SkillCard icon={<SiCss3 />} text="CSS3" />
          <SkillCard icon={<DiJavascript />} text="JS" />
          <SkillCard icon={<SiTypescript />} text="TS" />
          <SkillCard icon={<DiReact />} text="React" />
          <SkillCard icon={<SiRedux />} text="Redux" />
          <SkillCard icon={<SiTailwindcss />} text="TailwindCSS" />
        </div>
      </div>
    </div>
  );
}
export default About;
