import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project({ project }) {
  return (
    <div className="Project w-[47%] sm:w-full">
      <h3 className="px-10 pt-11">{project.title}</h3>
      <div className="h-full flex flex-col justify-between gap-8 text-justify">
        <p className="px-10">{project.p1}</p>
        <div id="tags" className="flex flex-wrap gap-[9px] px-10">
          {project.tags.map((tag, i) => {
            return (
              <span
                className="tag bg-light-white dark:bg-dark-ornamentdarkgray"
                key={i}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div id="links" className="flex justify-between px-10">
          <a href="https://github.com/edaisik/FSWeb-Frontend-Challenge">
            {project.links.git}
          </a>
          <a
            href="https://fsweb-s7-challenge-pizza-one-nu.vercel.app/"
            className="flex items-center gap-1"
          >
            <p>{project.links.redirect}</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-light-black dark:text-dark-white"
            />
          </a>
        </div>
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}

export default Project;
