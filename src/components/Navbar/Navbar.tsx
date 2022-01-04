import React from "react";

import styles from "./Navbar.module.scss";
import {  NavLink } from "react-router-dom";

export const Navbar = () => {
  return (

      <div className={styles.navbar}>
    
        <NavLink to="/about">
          <button className={styles.button}>ABOUT ME</button>
        </NavLink>  
        <NavLink to="/projects">
          <button className={styles.button}>PROJECTS</button>
        </NavLink>  
        <NavLink to="/contacts">
          <button className={styles.button}>CONTACTS</button>
        </NavLink>  
      
      </div>
    
  );
};

export default Navbar;
