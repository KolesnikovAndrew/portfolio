import React, {FC} from 'react'
import styles from './SkillCard.module.scss'
export interface SkillCardProps {
  icon: object;
  text: string;
}


export const SkillCard: FC<SkillCardProps> = ({icon, text}) => {
  return (
    <div className={styles.skillCard}>
       {icon}
       <h1 className={styles.skillName}>{text}</h1>
    </div>
  )
}

export default SkillCard
