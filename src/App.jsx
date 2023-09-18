import style from "./style";
import {
  Navpar,
  Hero,
  Skills,
  Portfoilo,
  ContactMe,
  Footer,
} from "./components";
const App = () => {
  return (
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
  );
};

export default App;
