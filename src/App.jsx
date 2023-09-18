import style from "./style";
import {
  Navpar,
  Hero,
  Skills,
  Portfoilo,
  ContactMe,
  Footer,
} from "./components";
import DotLoader from "react-spinners/DotLoader";

import { useState, useEffect } from "react";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoaded ? (
        <div className="flex justify-center items-center h-[100vh]">
          <DotLoader
            color={"var(--primary-color)"}
            loading={isLoaded}
            size={50}
          />
        </div>
      ) : (
        <div className="w-full dark:bg-dark dark:text-white ">
          <div
            className={`${style.paddingX} shadow-md w-full dark:bg-dark bg-white fixed z-[100] `}
          >
            <div className={`${style.boxWidth} `}>
              <Navpar />
            </div>
          </div>
          <div className={`${style.paddingX} dark:bg-dark dark:text-white `}>
            <div className={`${style.boxWidth}`}>
              <Hero />
            </div>
          </div>
          <div className={`${style.paddingX} dark:bg-dark dark:text-white`}>
            <div className={`${style.boxWidth}`}>
              <Skills /> <Portfoilo /> <ContactMe /> <Footer />{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
