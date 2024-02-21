import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import Table6 from "../Factors/Table/Table6";
import Table7 from "../Factors/Table/Table7";
import SpaceBetweenTables from "../Factors/SpaceBetweenTables";
const Page3 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل ششم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table6 />
        <SpaceBetweenTables />
        <HeaderFactors
          numberFactors="عامل هفتم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table7 />
      </Page>
    </>
  );
};

export default Page3;
