import React from "react";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.intro}>
        <span className={styles.hello}>Hello</span>
        <br /> I am
        <br />
        <span className={styles.name}>
          Andrew
          <br /> Kolesnikov
        </span>
      </div>
    </div>
  );
};

export default Header;
