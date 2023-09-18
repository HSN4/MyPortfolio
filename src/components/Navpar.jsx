// import { navLinks } from "../constants";
import { navLinks } from "../constants";
import { moon, sun } from "../assets";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BiMenu } from "react-icons/bi";

const Navpar = () => {
  const [theme, setTheme] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const handeltheme = () => {
    if (theme) {
      setTheme(!theme);
      document.documentElement.classList.add("dark");
    } else {
      setTheme(!theme);
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex h-[80px]  justify-between items-center dark:text-whitecolor navbar	">
        <h1 className=" font-[800] text-[36px] ">H</h1>
        <div>
          <ul className=" gap-10 sm:flex hidden  justify-center items-center  ">
            {navLinks.map((link) => (
              <li key={link.id} className={`list-none text-[16px] relative   `}>
                <a
                  onClick={() => setActive(link.title)}
                  href={`#${link.id}`}
                  className={`h-[90px] font-medium  ${
                    active === link.title && "active"
                  }  `}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="h-[38px] w-[38px] shadow-sm rounded-full flex justify-center items-center ">
            <img
              src={theme ? moon : sun}
              alt="error"
              className="w-[28px] h-[28px] cursor-pointer"
              onClick={handeltheme}
            />
          </div>
          <div className="sm:hidden flex">
            <span onClick={() => setToggle(() => !toggle)}>
              {toggle ? (
                <IoMdClose className="w-[32px] h-[32px] dirk:text-white" />
              ) : (
                <BiMenu className="w-[32px] h-[32px] dirk:bg-white" />
              )}
            </span>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } px-6 py-10  absolute top-[60px] left-0 bg-white dark:bg-dark w-full my-2 shadow-md
           `}
            >
              <ul className=" flex flex-col  ">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`  cursor-pointer text-[16px] text-black ${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    } text-black dark:text-white `}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navpar;
