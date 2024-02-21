import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import Table12 from "../Factors/Table/Table12";
import Table13 from "../Factors/Table/Table13";
import SpaceBetweenTables from "../Factors/SpaceBetweenTables";
const Page4 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل هشتم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table12 />
        <SpaceBetweenTables />
        <HeaderFactors
          numberFactors="عامل نهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table13 />
      </Page>
    </>
  );
};

export default Page4;
