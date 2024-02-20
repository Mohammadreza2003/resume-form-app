import React from "react";

const Column = ({ children, isActive, size, h }) => {
  return (
    <>
      <div
        className={`flex  justify-center items-center  border border-solid border-white w-full ${
          isActive ? "bg-[#2b6519] text-white" : ""
        } ${
          size === 1
            ? "w-[226px]"
            : size === 2
            ? "w-[604px]"
            : size === 3
            ? "w-[250px]"
            : size === 4
            ? "w-[1244px]"
            : size === 5
            ? "w-[557px]"
            : size === 6
            ? "w-[1000px]"
            : ""
        } ${h === 1 ? "h-[42px]" : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default Column;
