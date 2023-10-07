import React from "react";
import Button from "../button/button.molecule";

const ButtonGroup = ({ buttons, selected, setSelected, numberOfGrid }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-4 `}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button}
          selected={selected}
          onClick={() => setSelected(button)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
