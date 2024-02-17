import React from "react";

const Factor1 = () => {
  return (
    <>
      <div className=" flex border-2 border-[#2b6519]">
        <div className="flex bg-[#2b6519]  w-[140px]  text-white text-center justify-center items-center">
          عامل اول:
        </div>
        <div className=" flex bg-[#f1f1f1]  w-[900px] justify-start items-center">
          <p className="mr-2">تحصیلات</p>
        </div>
        <div className=" bg-[#f1f1f1] w-[45px] border-r-2 border-[#2b6519]">
          <div className="border-b-2 border-[#2b6519] ">max</div>
          <div>200</div>
        </div>
        <div className=" bg-[#f1f1f1]  w-[45px] border-r-2 border-[#2b6519]">
          <div className="  border-b-2 border-[#2b6519]">js</div>
          <div className="bg-[#2b6519] text-white">160</div>
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
      <div className=" flex">
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">ابتدایی</div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">سیکل</div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">دیپلم</div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">فوق دیپلم</div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">لیسانس</div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">فوق لیسانس</div>
        <div className=" bg-[#d7d7d7] ml-[2px] w-[130px]">دکتری</div>
      </div>
      <div className=" flex">
        <div className=" bg-[#ecebe0] ml-[2px] w-[130px] mt-[1px]">60</div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[130px] mt-[1px]">80</div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[130px] mt-[1px]">100</div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[130px] mt-[1px]">120</div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[130px] mt-[1px]">140</div>
        <div className=" bg-[#2b6519] ml-[2px] w-[130px] mt-[1px] text-white">
          160
        </div>
        <div className=" bg-[#ecebe0] ml-[2px] w-[130px] mt-[1px] ">200</div>
      </div>
    </>
  );
};

export default Factor1;
