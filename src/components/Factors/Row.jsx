import React from "react";

const Row = ({ children, type }) => {
  return (
    <>
      <div
        className={`flex justify-between  my-[1px]   ${
          type === 1
            ? "bg-[#d7d7d7]"
            : type === 2
            ? "bg-[#f6d5b6]"
            : type === 3
            ? "bg-[#9ecbdb]"
            : type === 4
            ? "bg-[#bccce1]"
            : type === 5
            ? "bg-[#bedce8]"
            : "bg-[#ecebe0]"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Row;
