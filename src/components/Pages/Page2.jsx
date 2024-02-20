import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import SpaceBetweenTables from "../Factors/SpaceBetweenTables";
import Table11 from "../Factors/Table/Table11";
import Table4 from "../Factors/Table/Table4";
import Table5 from "../Factors/Table/Table5";

const Page2 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل چهارم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table4 />
        <SpaceBetweenTables />
        <Table11 />
        <SpaceBetweenTables />
        <HeaderFactors
          numberFactors="عامل پنجم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table5 />
      </Page>
    </>
  );
};

export default Page2;
