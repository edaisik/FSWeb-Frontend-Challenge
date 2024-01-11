import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Footer() {
  const textData = useContext(TextContext);
  const { lang, darkMode } = useContext(ModeLangContext);

  const componentTexts = textData[lang].footer;

  return (
    <div className="Footer component dark:bg-dark-bggray2">
      <footer className="relative z-0 mx-auto pt-12 pb-24 flex items-center justify-between sm:flex-col sm:w-3/4">
        <h1 className="text-right sm:text-center">{componentTexts.title}</h1>
        <div
          id="footer-links"
          className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:mt-8"
        >
          <a
            className="text-light-cerulean dark:text-dark-ornamentblue"
            href="https://github.com/edaisik"
          >
            {componentTexts.links.git}{" "}
          </a>
          <a href="#">
            {componentTexts.links.blog}{" "}
          </a>
          <a
            className="text-light-blue dark:text-dark-turquoise"
            href="https://www.linkedin.com/in/eda-isik/"
          >
            {componentTexts.links.linkedin}{" "}
          </a>
          <a
            className="text-light-textdarkpink dark:text-dark-textdarkpink"
            href="mailto:eda.isik95@hotmail.com"
          >
            {componentTexts.links.email}{" "}
          </a>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;
