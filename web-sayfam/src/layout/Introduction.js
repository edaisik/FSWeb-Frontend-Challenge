import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Introduction() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].introduction;

  return (
    <div className="Introduction component relative z-0 bg-light-bggray dark:bg-dark-bggray1">
      <div className="w-4/5 mx-auto flex content-between gap-11 sm:flex-col sm:items-center sm:text-center">
        <div id="intro-left" className="w-max-3/5 sm:w-full">
          <div id="greeting">
            <p>{componentTexts.greeting}</p>
            <div className="relative z-[1] ">
              <h1>{componentTexts.p1}</h1>
              <h1>{componentTexts.p2}</h1>
            </div>
          </div>
          <div id="intro-footer">
            <div id="icons" className="flex gap-4 sm:justify-center">
              <a href="https://www.linkedin.com/in/eda-isik/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="text-light-textdarkgray dark:text-dark-ornamentgray"
                />
              </a>
              <a href="https://github.com/edaisik">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-light-textdarkgray dark:text-dark-ornamentgray"
                />
              </a>
            </div>
            <div id="intro-footer-text">
              <p>
                <span>{componentTexts.p31}</span>
                <span className="text-light-textdarkpink">
                  {componentTexts.colored1}
                </span>
                <span>{componentTexts.p32}</span>
                <span className="text-light-textdarkpink">
                  {componentTexts.colored2}
                </span>
                <span>{componentTexts.p33}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:flex-col">
                <p>{componentTexts.p4}</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-light-textdarkgray dark:text-dark-ornamentgray sm:hidden"
                />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-light-textdarkgray dark:text-dark-ornamentgray hidden sm:block"
                />
                <p className="text-light-textdarkpink underline">
                  {componentTexts.p5}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={componentTexts.image} alt="" />
      </div>
    </div>
  );
}

export default Introduction;
