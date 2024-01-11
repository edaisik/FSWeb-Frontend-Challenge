import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";
import Project from "../components/Project";

function Projects() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].projects;

  return (
    <div className="Projects component dark:bg-dark-bggray2">
      <div className="w-4/5 mx-auto">
        <h2>{componentTexts.title}</h2>
        <div
          id="project-card-container"
          className="flex justify-between sm:flex-col sm:gap-y-8"
        >
          {componentTexts.projectarray.map((pNo) => {
            return (
              <Project project={componentTexts[`project${pNo}`]} key={pNo} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
