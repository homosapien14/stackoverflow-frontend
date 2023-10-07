import React from "react";

const Button = ({ text, selected, onClick }) => {
  const buttonClasses = `hover:bg-blue-700 text-white font-bold py-2 px-4 border focus:outline-none focus:shadow-outline ${
    selected === text
  } ? "is-selected" : ""`;

  return (
    <button className={buttonClasses} style={{ margin: "0" }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
