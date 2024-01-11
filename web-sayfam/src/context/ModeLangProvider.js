import { createContext } from "react";
import useLocalStorage from "../localstorage/useLocalStorage";

export const ModeLangContext = createContext();

const ModeLangProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("gece-modu", true);
  const [lang, setLang] = useLocalStorage(
    "language",
    navigator.language.split("-")[0]
  );

  return (
    <ModeLangContext.Provider value={{ darkMode, setDarkMode, lang, setLang }}>
      {children}
    </ModeLangContext.Provider>
  );
};

export default ModeLangProvider;
