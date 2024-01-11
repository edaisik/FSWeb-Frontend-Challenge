import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Header() {
  const textData = useContext(TextContext);
  const { darkMode, setDarkMode, lang, setLang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].header;

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLang = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };

  return (
    <div className="Header component relative z-0 w-full pt-12 text-light-textlightgray bg-light-bggray dark:bg-dark-bggray1">
      <header className="w-4/5 mx-auto flex justify-end sm:flex-col sm:items-end">
        <label
          id="mode-toggler"
          className="relative inline-flex items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value={darkMode}
            onChange={changeDarkMode}
            className="sr-only peer"
          />
          <div className="w-8 h-3 rounded-full peer dark:bg-dark-black peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[25%] after:left-[4px] after:bg-light-amber after:border-light-amber after:border after:rounded-full after:h-2 after:w-2 after:transition-all peer-checked:bg-light-primary"></div>
          <span className="ml-1">
            {darkMode ? componentTexts.darkmode : componentTexts.lightmode}
          </span>
        </label>

        <span className="ml-2 sm:hidden"> | </span>

        {lang === "en" && (
          <span className="ml-2" onClick={changeLang}>
            <span className="text-light-primary cursor-pointer">
              {" "}
              {componentTexts.language}
            </span>
            {componentTexts.languagetxt}
          </span>
        )}
        {lang === "tr" && (
          <span className="ml-2" onClick={changeLang}>
            {componentTexts.languagetxt}
            <span className="text-light-primary cursor-pointer">
              {" "}
              {componentTexts.language}
            </span>
          </span>
        )}
      </header>

      <svg
        className="ornament absolute -z-[1] top-0 left-[33%]"
        width="111"
        height="66"
        viewBox="0 0 111 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="55.5"
          cy="10.5"
          r="55.5"
          fill={darkMode ? "#D9D9D9" : "#525252"}
        />
      </svg>
    </div>
  );
}

export default Header;
