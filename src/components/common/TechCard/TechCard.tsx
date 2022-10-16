import React, { FC, useState } from "react";
import styles from "./TechCard.module.scss";

export interface TechCardProps {
  icon: object;
  text: string;
}

export const TechCard: FC<TechCardProps> = ({ icon, text }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={active ? styles.techCardActive : styles.techCard}
      onClick={() => setActive(!active)}
    >
      <span className={styles.icon}>{icon}</span>
      <h5 className={styles.skillName}>{text}</h5>
    </div>
  );
};

export default TechCard;
