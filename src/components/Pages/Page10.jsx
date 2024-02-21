import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import SpaceBetweenTables from "../Factors/SpaceBetweenTables";
import Table20 from "../Factors/Table/Table7";
const Page10 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل بیستم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <SpaceBetweenTables />
        <Table20 />
      </Page>
    </>
  );
};

export default Page10;
