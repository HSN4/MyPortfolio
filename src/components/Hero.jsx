import { useTypewriter, Cursor } from "react-simple-typewriter";
import Textspan from "./Textspan";
import Buttons from "./Buttons";
import Reveal from "./Reveal";

const Hero = () => {
  const sentens = "HUSSEIN".split("");
  const sentens2 = "Hello I’m".split("");
  const [text] = useTypewriter({
    words: ["UI/UX Designer", "Frontend Developer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  return (
    <>
      <section
        id="home"
        className={`h-[100vh]   flex  sm:flex-row flex-col-reverse  ss:justify-between justify-center items-center `}
      >
        <div className="  sm:block flex relative flex-col justify-center items-center">
          <Reveal>
            {
              <p className="ss:text-[40px]  text-[20px]   font-medium dark:text-whitecolor text-secondary ">
                {sentens2.map((letter, index) => (
                  <Textspan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </Textspan>
                ))}
              </p>
            }
          </Reveal>

          <Reveal>
            {
              <h1 className="text-primary inline-block  lg:text-[90px]  text-[40px] font-extrabold">
                {sentens.map((letter, index) => (
                  <Textspan key={index}>{letter}</Textspan>
                ))}
              </h1>
            }
          </Reveal>
          <Reveal>
            {
              <h2 className=" font-medium ss:text-[26px] text-[22px] mb-3 ml-2">
                <span className="text-primary dark:text-whitecolor">
                  {text}
                </span>
                <Cursor className="bg-black" />
              </h2>
            }
          </Reveal>
          <Reveal>
            {
              <p className="max-w-[360px] sm:text-start text-center dark:text-whitecolor text-secondary font-[400] ml-2 text-[16px]">
                My passion lies in creating visually appealing and user-friendly
                interfaces that enhance the overall experience of users.
              </p>
            }
          </Reveal>

          <Reveal>
            {
              <div className="ml-2 mt-4 ">
                <Buttons
                  href={"#contactme"}
                  Text={"CONTACT ME"}
                  width={"w-[150px]"}
                />
              </div>
            }
          </Reveal>
        </div>
        <div className="sm:h-[500px] h-[330px] mt-[30px]">
          <iframe
            src="https://my.spline.design/noisedisplacecopy-2617893339df9b20eb9fb2f527d0bdc1/"
            className="md:w-[500px] w-[400px] md:h-[500px] h-[400px] ss:scale-100 scale-[0.70] "
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Hero;
