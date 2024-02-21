import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import Table16 from "../Factors/Table/Table16";
import Table17 from "../Factors/Table/Table17";
import SpaceBetweenTables from "../Factors/SpaceBetweenTables";

const Page6 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل دوازدهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table16 />
        <SpaceBetweenTables />
        <HeaderFactors
          numberFactors="عامل سیزدهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table17 />
      </Page>
    </>
  );
};

export default Page6;
