import Buttons from "./Buttons";
import { AiFillGithub } from "react-icons/ai";
import { BsBehance } from "react-icons/bs";
import Upcard from "./Upcard";

const Cards = ({ item }) => {
  return (
    <div className="flex flex-wrap lg:justify-center  justify-center items-center gap-12 ">
      {item.map((card) => (
        <Upcard key={card.id}>
          {
            <div className="w-[340px] h-[376px] overflow-hidden  rounded-t-[12px]  mb-[40px] pb-8  border-solid border-b-2 border-[#8585855f]  card  ">
              <div className="h-[210px] overflow-hidden">
                <img
                  src={card.image}
                  alt="image"
                  className="h-[210px] w-[100%]  hover:scale-[1.2] scale-110  transition duration-300  "
                />
              </div>
              <div className=" py-2">
                <h1 className=" font-medium text-[18px]">{card.title}</h1>
                <p className="text-[14px] font-[500] tracking-[0.6px] text-[#737373] ">
                  {card.dis}
                </p>
              </div>
              <div className="flex justify-between items-center  pt-4">
                <Buttons Text={"View"} href={card.url} />
                <a href={card.code}>
                  {card.cate === "frontend" ? (
                    <AiFillGithub className="text-[34px]" />
                  ) : (
                    <BsBehance className="text-[34px]" />
                  )}
                </a>
              </div>
            </div>
          }
        </Upcard>
      ))}
    </div>
  );
};

export default Cards;
