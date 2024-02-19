import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";

import Table10 from "../Factors/Table/Table10";
const Page9 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل هجدهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table10
          tableTitle1="سطح 1"
          tableTitle2="سطح 1"
          tableTitle3="سطح 1"
          tableTitle4="سطح 1"
          tableTitle5="سطح 1"
          tableValue1="معلومات لازم جهت تصدس"
          tableValue2="معلومات لازم جهت تصدس"
          tableValue3="معلومات لازم جهت تصدس"
          tableValue4="معلومات لازم جهت تصدس"
          tableValue5="معلومات لازم جهت تصدس"
          tableValueScore1="کم"
          tableValueScore2="-"
          tableValueScore3="-"
          tableValueScore4="-"
          tableValueScore5="-"
          score1="40"
          score2="30"
          score3="60"
          score4="90"
          score5="100"
          scoreWoork="25"
        />
        <HeaderFactors
          numberFactors="عامل نوزدهم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table10
          tableTitle1="سطح 1"
          tableTitle2="سطح 1"
          tableTitle3="سطح 1"
          tableTitle4="سطح 1"
          tableTitle5="سطح 1"
          tableValue1="معلومات لازم جهت تصدس"
          tableValue2="معلومات لازم جهت تصدس"
          tableValue3="معلومات لازم جهت تصدس"
          tableValue4="معلومات لازم جهت تصدس"
          tableValue5="معلومات لازم جهت تصدس"
          tableValueScore1="کم"
          tableValueScore2="-"
          tableValueScore3="-"
          tableValueScore4="-"
          tableValueScore5="-"
          score1="40"
          score2="30"
          score3="60"
          score4="90"
          score5="100"
          scoreWoork="25"
        />
      </Page>
    </>
  );
};

export default Page9;
