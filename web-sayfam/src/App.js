import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ModeLangContext } from "./context/ModeLangProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { data } from "./data/data";
import { TextContext } from "./context/TextContext";
import Header from "./layout/Header";
import Introduction from "./layout/Introduction";
import Skills from "./layout/Skills";
import Profile from "./layout/Profile";
import Projects from "./layout/Projects";
import Footer from "./layout/Footer";

import "./App.css";

function App() {
  const { darkMode } = useContext(ModeLangContext);
  const [textData, setTextData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        setTextData({ ...response.data });
        setLoaded(true);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }, []);

  return (
    <div className={darkMode ? "App" : "App dark"}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoaded && (
        <TextContext.Provider value={textData}>
          <div className="dark:text-dark-white">
            <Header />
            <Introduction />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </div>
        </TextContext.Provider>
      )}
    </div>
  );
}

export default App;
