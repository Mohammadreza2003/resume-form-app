import React from "react";

const HeaderFactors = ({ numberFactors, titelFactors, maxValue, jsValue }) => {
  return (
    <>
      <div className=" flex border-2 border-[#2b6519] mb-[10px]">
        <div className="flex bg-[#2b6519]  w-[140px]  text-white text-center justify-center items-center">
          {numberFactors}
        </div>
        <div className=" flex bg-[#f1f1f1]  w-[900px] justify-start items-center">
          <p className="mr-2">{titelFactors}</p>
        </div>
        <div className=" bg-[#f1f1f1] w-[45px] border-r-2 border-[#2b6519]">
          <div className="border-b-2 border-[#2b6519] ">max</div>
          <div>{maxValue}</div>
        </div>
        <div className=" bg-[#f1f1f1]  w-[45px] border-r-2 border-[#2b6519]">
          <div className="  border-b-2 border-[#2b6519]">js</div>
          <div className="bg-[#2b6519] text-white">{jsValue}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderFactors;
