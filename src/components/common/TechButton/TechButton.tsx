import React from "react";
import { SiTypescript, SiRedux } from "react-icons/si";
import { DiReact } from "react-icons/di";
import TechCard from "../TechCard/TechCard";
import { SortList } from "./../../../Pages/Projects/Projects";
import styles from "./TechButton.module.scss";
interface TechButtonProps {
  techName: keyof SortList;
  handleSortInput: (techName: keyof SortList) => void;
}

const icons: Record<keyof SortList, React.ReactNode> = {
  HTML5: null,
  CSS3: null,
  JS: null,
  React: <DiReact />,
  Redux: <SiRedux />,
  TS: <SiTypescript />,
};

const TechButton: React.FC<TechButtonProps> = ({
  techName,
  handleSortInput,
}) => {
  return (
    <button
      onClick={() => handleSortInput(techName)}
      id={techName as string}
      className={styles.techButton}
    >
      <TechCard icon={icons[techName]} text={techName} />
    </button>
  );
};

export default TechButton;
