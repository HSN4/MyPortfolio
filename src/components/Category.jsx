import React, { useState } from "react";
import { cards } from "../constants";
import Reveal from "./Reveal";

const Category = ({ menuItems, filterItems, setitems }) => {
  const [active, setActive] = useState(null);
  const allCards = () => {
    setitems(cards);
    setActive(null);
  };
  return (
    <div className="flex gap-8 justify-center mb-[60px] allbut">
      <Reveal>
        {
          <a
            onClick={() => allCards()}
            className={`${
              active === null && "active"
            } text-[24px] cursor-pointer relative top-[3px]`}
          >
            All
          </a>
        }
      </Reveal>

      {menuItems.map((card) => (
        <Reveal key={card}>
          {
            <button onClick={() => filterItems(card)}>
              <a
                onClick={() => setActive(card)}
                className={`${
                  active == card && "active"
                } text-[24px] relative top-[3px]`}
              >
                {card}
              </a>
            </button>
          }
        </Reveal>
      ))}
    </div>
  );
};

export default Category;
