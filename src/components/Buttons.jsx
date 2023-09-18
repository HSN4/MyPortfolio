import React from "react";
import { Button } from "flowbite-react";

const Buttons = ({ Text, href, type, width, target }) => {
  return (
    <a target={target} href={href} className="w-[100%]">
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
