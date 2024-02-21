import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import SpaceBetweenTables from "../Factors/SpaceBetweenTables";
import Table8 from "../Factors/Table/Table8";
import Table9 from "../Factors/Table/Table9";
const Page8 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل شانزدهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table8 />
        <SpaceBetweenTables />
        <HeaderFactors
          numberFactors="عامل هفدهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table9 />
      </Page>
    </>
  );
};

export default Page8;
