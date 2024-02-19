import React from "react";

const Table10 = ({
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
  score1,
  score2,
  score3,
  score4,
  score5,
  scoreWoork,
}) => {
  return (
    <>
      <div className="flex  mb-1 ">
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

      <div className="flex mb-1">
        <div className=" bg-[#9ecbdb] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableValueScore1}
        </div>
        <div className=" bg-[#9ecbdb] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableValueScore2}
        </div>
        <div className=" bg-[#9ecbdb] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableValueScore3}
        </div>
        <div className=" bg-[#9ecbdb] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableValueScore4}
        </div>
        <div className=" bg-[#9ecbdb] ml-[2px] w-[185px] flex  items-center justify-center h-[30px] text-[0.90rem]">
          {tableValueScore5}
        </div>
      </div>
      <div className="flex mb-1 ">
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {score1}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {score2}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {score3}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center justify-center">
          {score4}
        </div>
        <div className="bg-[#ecebe0]  ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {score5}
        </div>
      </div>
      <div className="flex mb-[100px]">
        <div className=" bg-[#9ecbdb] ml-[2px] w-[730px] mt-[1px] flex  items-center  justify-center">
          امتیاز شغل:
        </div>
        <div className=" bg-[#2b6519] text-white ml-[2px] w-[185px] mt-[1px] flex  items-center  justify-center">
          {scoreWoork}
        </div>
      </div>
    </>
  );
};

export default Table10;
