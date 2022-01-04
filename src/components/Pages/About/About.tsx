import React from 'react'
import styles from './About.module.scss'
export function About() {
  return (
    <div>
      <div className={styles.content}>
        <h1>About Me!</h1>
        <p> My name is Andrew, and I am a <span className={styles.specialText}>front-end developer.</span> 
        </p>  
      </div>
      <div className={styles.reactLogo}>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoder.clothing%2Fimages%2Fstories%2Fvirtuemart%2Fproduct%2Freactjs-logo-sticker.jpg&f=1&nofb=1" alt="reactLogo" />
      </div>
    </div>
  )
}
export default About