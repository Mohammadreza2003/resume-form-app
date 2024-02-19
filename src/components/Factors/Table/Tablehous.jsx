import React from 'react';

const Tablehous = ({tableValue1, tableValue2, tableValue3, tableValue4}) => {
  return (
    <>
      <div className="flex  ">
        <div className=" bg-[#ecebe0] ml-[2px] w-[227px] mr-[73px] mt-[1px] flex h-[27px]  items-center  justify-center">
          {tableValue1}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[227px] mt-[1px] flex  items-center  justify-center">
          {tableValue2}
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[227px] mt-[1px] flex  items-center  justify-center">
          {tableValue3}
        </div>
        <div className=" bg-[#2b6519]   text-white ml-[2px] w-[227px] mt-[1px] flex  items-center  justify-center justify-center">
          {tableValue4}
        </div>
      </div>
    </>
  );
};

export default Tablehous;