"use client";
import Link from "next/link";

const LinkButton = ({ text, link, type, handleClick, marginTop }) => {
  return (
    <>
      <Link onClick={handleClick} href={`${link}`}>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${marginTop}`}
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default LinkButton;
