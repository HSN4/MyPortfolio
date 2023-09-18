import React from "react";
import { Button } from "flowbite-react";

const Buttons = ({ Text, href, type, width }) => {
  return (
    <a target="_blank" href={href} className="w-[100%]">
      <Button
        className={`${width}`}
        type={type}
        gradientDuoTone="purpleToBlue"
        outline
      >
        {Text}
      </Button>
    </a>
  );
};

export default Buttons;
