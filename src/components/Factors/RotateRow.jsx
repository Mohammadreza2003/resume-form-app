import React from "react";

const RotateRow = ({ children }) => {
  return (
    <>
      <div className="justify-between my-[1px] bg-[#2b6519] text-white rotate-90 w-[199px] mr-[-86px]">
        {children}
      </div>
    </>
  );
};

export default RotateRow;
