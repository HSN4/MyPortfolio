import Cards from "./Cards";
import style from "../style";
import { cards } from "../constants";
import { useState } from "react";
import Category from "./Category";
import Reveal from "./Reveal";

const Portfoilo = () => {
  const [item, setitems] = useState(cards);
  const menuItems = [...new Set(cards.map((card) => card.cate))];
  const filterItems = (cat) => {
    const newItems = cards.filter((newval) => newval.cate === cat);
    setitems(newItems);
  };
  return (
    <>
      <div
        id="portfolio"
        className={`flex justify-center items-center text-center mt-[140px] ${style.paddingY} `}
      >
        <Reveal>
          {<h1 className="  font-normal text-[38px]">My Portfolio</h1>}
        </Reveal>
      </div>
      <Category
        menuItems={menuItems}
        filterItems={filterItems}
        setitems={setitems}
      />
      <Cards item={item} />
    </>
  );
};

export default Portfoilo;
