import React, {FC} from 'react'
import styles from './Feature.module.scss'


export interface FeatureProps {
  text: string;
  image: string;
}

export const Feature: React.FC<FeatureProps> = ({text, image}) => {
  return (
    <div className={styles.feature}>
            <img className={styles.featureImage} src={image}></img>
            <label>{text}</label>
    </div>
  )
}

export default Feature