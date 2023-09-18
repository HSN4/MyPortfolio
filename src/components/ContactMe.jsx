import Form from "./Form";
import style from "../style";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import Reveal from "./Reveal";

const ContactMe = () => {
  return (
    <>
      <div
        id="contactme"
        className={`${style.paddingY} flex md:justify-between justify-center gap-12 items-center mt-[60px] flex-wrap `}
      >
        <Form />
        <Reveal>
          {
            <div className="flex flex-col justify-between items-center  bg-gradient-to-r from-[#06b6d4] to-[#7E3AF2] text-white p-11 rounded-[6px] ">
              <div>
                <h2 className="text-[26px] pb-[12px] font-medium">
                  Contact information
                </h2>
                <div className="flex flex-col items-center mb-5 hover:text-[#ffffff] text-[#e8e8e8]  ">
                  <BiSolidPhone className="text-[26px] " />
                  <a href="tel:00966564395648 " className="tracking-[2px]">
                    0564305648
                  </a>
                </div>
                <div className="flex flex-col items-center hover:text-[#ffffff] text-[#e3e3e3] ">
                  <MdEmail className="text-[26px]" />
                  <a
                    href="mailto:huseinalhamed1@gmail.com"
                    className="tracking-[0.6px]"
                  >
                    huseinalhamed1@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-[90px]">
                <h3 className="text-[26px] font-medium pb-4 text-center">
                  Follow me
                </h3>
                <div className="flex gap-6 ">
                  <a href="https://github.com/HSN4 " target="_blank">
                    <AiFillGithub className="text-[34px]" />
                  </a>
                  <a href="https://twitter.com/79ein1" target="_blank">
                    <AiOutlineTwitter className="text-[34px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hussein-alhamed-b81060217/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-[34px]" />
                  </a>
                  <a
                    href="https://www.behance.net/7ussein7ussein"
                    target="_blank"
                  >
                    <BsBehance className="text-[34px]" />
                  </a>
                </div>
              </div>
            </div>
          }
        </Reveal>
      </div>
    </>
  );
};

export default ContactMe;
