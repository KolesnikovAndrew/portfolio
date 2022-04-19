import React, {FC} from "react";
import styles from "./DemoButton.module.scss";

 
export interface DemoButtonProps {
  demo?: string;
}



export const DemoButton: FC<DemoButtonProps> = ({ demo }) => {
  return (
    <>
      <a href={demo} className={styles.demoButton}>CHECK OUT THE DEMO </a>
    </>
  );
};




export default DemoButton;
