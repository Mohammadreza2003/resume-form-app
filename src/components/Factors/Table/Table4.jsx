import React from "react";
import Tablehous from "./Tablehous";

const Table4 = ({
  tableTitle1,
  tableTitle2,
  tableTitle3,
  tableTitle4,
  tableTitle5,
  factorScore,
  writtenScore,
  pointsApplied
}) => {
  return (
    <>
      <div className="mr-[-48px]">
        <div className="flex">
          <div className="  bg-[#2b6519] text-white rotate-90 flex items-center justify-center mr-[-47px] w-[214px]">
            {tableTitle1}
          </div>
        </div>
        <div className="flex mt-[-119.12px]">
          <div className=" bg-[#d7d7d7] ml-[2px] mr-[73px] w-[227px] h-[38px]">
            {tableTitle2}
          </div>
          <div className=" bg-[#d7d7d7] ml-[2px] w-[227px]">{tableTitle3}</div>
          <div className=" bg-[#d7d7d7] ml-[2px] w-[227px]">{tableTitle4}</div>
          <div className=" bg-[#d7d7d7] ml-[2px] w-[227px]"> {tableTitle5}</div>
        </div>
        <Tablehous
          tableValue1="50"
          tableValue2="60"
          tableValue3="70"
          tableValue4="95"
        />
        <Tablehous
          tableValue1="50"
          tableValue2="60"
          tableValue3="70"
          tableValue4="95"
        />
        <Tablehous
          tableValue1="50"
          tableValue2="60"
          tableValue3="70"
          tableValue4="95"
        />
        <Tablehous
          tableValue1="50"
          tableValue2="60"
          tableValue3="70"
          tableValue4="95"
        />
        <Tablehous
          tableValue1="50"
          tableValue2="60"
          tableValue3="70"
          tableValue4="95"
        />

        <div className="flex   mb-[130px] ">
          <div className=" bg-[#f6d5b6] ml-[2px] w-[355px] mr-[73px] mt-[1px] flex  items-center  justify-center h-[35px]">
            حداکثر امتیاز عامل : {factorScore}
          </div>
          <div className=" bg-[#f6d5b6] ml-[2px] w-[227px] mt-[1px] flex  items-center  justify-center">
            امتیاز مکتوب : {writtenScore}
          </div>
          <div className=" bg-[#f6d5b6] ml-[2px] w-[227px] mt-[1px] flex  items-center  justify-center">
            امتیاز اعمال شده:
          </div>
          <div className=" bg-[#2b6519]   text-white ml-[2px] w-[68px] mt-[1px] flex  items-center  justify-center justify-center">
            {pointsApplied}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table4;
