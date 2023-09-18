import { mySkills } from "../constants";
import style from "../style";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div
          className={`flex justify-center items-center mt-[140px] ${style.paddingY}`}
        >
          <Reveal>
            {<h1 className="  font-normal text-[38px] header">My skills</h1>}
          </Reveal>
        </div>

        <div
          id="skills"
          className={`${style.paddingY} flex justify-between items-center flex-wrap gap-2 `}
        >
          {mySkills.map((skill) => (
            <Reveal key={skill.id}>
              {
                <div className=" ss:w-[120px] w-[80px] ss:h-[140px] h-[100px]   flex justify-between items-center flex-col   py-4">
                  <img
                    src={skill.icon}
                    className="ss:w-[64px] w-[30px] ss:h-[66px] h-[33px]  transition duration-300  hover:scale-125 "
                    alt=""
                  />
                  <h2 className="ss:text-[18px] text-[12px]">{skill.title}</h2>
                </div>
              }
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
