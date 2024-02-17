import React from "react";
import IndirectSupervision from "./IndirectSupervision"
import DirectSupervision from "./DirectSupervision";
const Factor2 = () => {
  return (
    <>
      <div className=" flex border-2 border-[#2b6519]">
        <div className="flex bg-[#2b6519]  w-[140px]  text-white text-center justify-center items-center">
          عامل چهارم:
        </div>
        <div className=" flex bg-[#f1f1f1]  w-[900px] justify-start items-center">
          <p className="mr-2">تجربیات</p>
        </div>
        <div className=" bg-[#f1f1f1] w-[45px] border-r-2 border-[#2b6519]">
          <div className="border-b-2 border-[#2b6519] ">max</div>
          <div>120</div>
        </div>
        <div className=" bg-[#f1f1f1]  w-[45px] border-r-2 border-[#2b6519]">
          <div className="  border-b-2 border-[#2b6519]">js</div>
          <div className="bg-[#2b6519] text-white">100</div>
        </div>
      </div>
      <br />
      <div>
        <p>
          مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DirectSupervision></DirectSupervision>
      <br />
      <br />
      <br />
      <br />
      <br />
      <IndirectSupervision></IndirectSupervision>
    </>
  );
};

export default Factor2;
