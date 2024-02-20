import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import Table7 from "../Factors/Table/Table7";
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
        <Table7
          tableTitle1="سطح 1"
          tableTitle2="سطح 1"
          tableTitle3="سطح 1"
          tableTitle4="سطح 1"
          tableTitle5="سطح 1"
          tableValue1="انجام وظایف هر شغل"
          tableValue2="انجام وظایف هر شغل"
          tableValue3="انجام وظایف هر شغل"
          tableValue4="انجام وظایف هر شغل"
          tableValue5="انجام وظایف هر شغل"
          tableValueScore1="80"
          tableValueScore2="90"
          tableValueScore3="100"
          tableValueScore4="150"
          tableValueScore5="200"
        />
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
        <Table7
          tableTitle1="سطح 1"
          tableTitle2="سطح 1"
          tableTitle3="سطح 1"
          tableTitle4="سطح 1"
          tableTitle5="سطح 1"
          tableValue1="انجام وظایف هر شغل"
          tableValue2="انجام وظایف هر شغل"
          tableValue3="انجام وظایف هر شغل"
          tableValue4="انجام وظایف هر شغل"
          tableValue5="انجام وظایف هر شغل"
          tableValueScore1="80"
          tableValueScore2="90"
          tableValueScore3="100"
          tableValueScore4="150"
          tableValueScore5="200"
        />
      </Page>
    </>
  );
};

export default Page4;
