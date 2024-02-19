import React from "react";

const Table2 = ({
  tableTitle1,
  tableTitle2,
  tableTitle3,
  tableTitle4,
  tableTitle5,
  tableValue1,
  tableValue2,
  tableValue3,
  tableValue4,
  tableValue5,
}) => {
  return (
    <>
      <div className="flex   ">
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[100px] text-[0.90rem]">
          {tableTitle1}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[100px] text-[0.90rem]">
          {tableTitle2}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[100px] text-[0.90rem]">
          {tableTitle3}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[100px]text-[0.90rem]">
          {tableTitle4}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[100px] text-[0.90rem]">
          {tableTitle5}
        </div>
      </div>
      <div className="flex mb-[100px] ">
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValue1}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValue2}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValue3}
        </div>
        <div className=" bg-[#2b6519]   text-white ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center justify-center">
          {tableValue4}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValue5}
        </div>
      </div>
    </>
  );
};

export default Table2;
