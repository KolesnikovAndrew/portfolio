import React, {FC} from 'react'
import styles from './SkillCard.module.scss'
export interface SkillCardProps {
  icon: object;
  text: string;
}


export const SkillCard: FC<SkillCardProps> = ({icon, text}) => {
  return (
    <div className={styles.skillCard}>
       <span className={styles.icon}>{icon}</span>
       <h2 className={styles.skillName}>{text}</h2>
    </div>
  )
}

export default SkillCard
