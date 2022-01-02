import React from "react";

import styles from "./Navbar.module.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <BrowserRouter>
      <div className={styles.navbar}>
        <Link to="/about">
          <button className={styles.button}>ABOUT ME</button>
        </Link>  
        <Link to="/projects">
          <button className={styles.button}>PROJECTS</button>
        </Link>  
        <Link to="/contacts">
          <button className={styles.button}>CONTACTS</button>
        </Link>  
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
