import React from "react";
import SpinnerSVG from "@/assets/spinner";

import "./spinner.css";

const Spinner = ({ type, width, height }) => {
  return (
    <div className="spinner">
      <SpinnerSVG />
    </div>
  );
};

export default Spinner;
