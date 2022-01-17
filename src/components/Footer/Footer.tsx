import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  
  return (
    <div className={styles.footer}>
      <div><a target="_blank" href="https://icons8.com/icon/XjvSEojgirxP/rotation">Rotation</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
      <div><a target="_blank" href="https://icons8.com/icon/gyH3K97oAVko/accuracy">Accuracy</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
      <a href="https://www.flaticon.com/free-icons/optimization" title="optimization icons">Optimization icons created by JunGSa - Flaticon</a>
      <div>
        <p>&#169; {new Date().getFullYear()} Andrey Kolesnikov</p> 
      </div>

    </div>
  )
}

export default Footer