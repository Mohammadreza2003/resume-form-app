import React from "react";

const Table7 = ({
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
  tableValueScore1,
  tableValueScore2,
  tableValueScore3,
  tableValueScore4,
  tableValueScore5,
}) => {
  return (
    <>
      <div className="flex mb-1  ">
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem] ">
          {tableTitle1}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableTitle2}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableTitle3}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[30px]text-[0.90rem]">
          {tableTitle4}
        </div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableTitle5}
        </div>
      </div>
      <div className="flex mb-1">
        <div className=" bg-[#f6d5b6] ml-[2px] w-[185px] flex  items-center justify-center h-[300px] text-[0.90rem]">
          {tableValue1}
        </div>
        <div className=" bg-[#f6d5b6] ml-[2px] w-[185px] flex  items-center justify-center h-[300px] text-[0.90rem]">
          {tableValue2}
        </div>
        <div className=" bg-[#f6d5b6] ml-[2px] w-[185px] flex  items-center justify-center h-[300px] text-[0.90rem]">
          {tableValue3}
        </div>
        <div className=" bg-[#f6d5b6] ml-[2px] w-[185px] flex  items-center justify-center h-[300px] text-[0.90rem]">
          {tableValue4}
        </div>
        <div className=" bg-[#f6d5b6] ml-[2px] w-[185px] flex  items-center justify-center h-[300px] text-[0.90rem]">
          {tableValue5}
        </div>
      </div>
      <div className="flex mb-[100px]  ">
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center ">
          {tableValueScore1}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValueScore2}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValueScore3}
        </div>
        <div className=" bg-[#2b6519] text-white  ml-[2px] w-[185px] mt-[1px] flex  items-center justify-center justify-center">
          {tableValueScore4}
        </div>
        <div className="bg-[#ecebe0]  ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {tableValueScore5}
        </div>
      </div>
    </>
  );
};

export default Table7;
