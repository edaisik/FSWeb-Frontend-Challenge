import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Skills() {
  const textData = useContext(TextContext);
  const { lang, darkMode } = useContext(ModeLangContext);

  const componentTexts = textData[lang].skills;
  const skills = componentTexts.skillicons;

  return (
    <div className="Skills component relative z-0 w-full dark:text-dark-ornamentgray dark:bg-dark-bggray2">
      <div className="w-4/5 mx-auto">
        <h2>{componentTexts.title} </h2>
        <div
          id="skill-icons"
          className="text-light-textlightgray w-4/5 mx-auto mt-8 flex flex-wrap justify-between sm:justify-center sm:items-center sm:gap-4"
        >
          {skills.map((skill, i) => {
            return (
              <div
                className="skill-icon flex flex-col items-center text-center gap-3"
                key={i}
              >
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <svg
        className="ornament absolute -z-[1] -top-[60px] right-[15rem] sm:hidden"
        width="121"
        height="121"
        viewBox="0 0 121 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60.5"
          cy="60.5"
          r="50"
          stroke={darkMode ? "#D9D9D9" : "#525252"}
          strokeWidth="21"
        />
      </svg>
    </div>
  );
}

export default Skills;
