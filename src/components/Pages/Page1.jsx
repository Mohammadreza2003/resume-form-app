import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactor from "../Factors/ExplainFactor";
import Table1 from "../Factors/Table/Table1";
import Table2 from "../Factors/Table/Table2";
const Page1 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <HeaderFactors
          numberFactors="عامل اول"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table1 />
        <HeaderFactors
          numberFactors="عامل دوم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table2
          tableTitle1="2 سال تجربه مفید و مرتبط"
          tableTitle2="2 سال تجربه مفید و مرتبط"
          tableTitle3="2 سال تجربه مفید و مرتبط"
          tableTitle4="2 سال تجربه مفید و مرتبط"
          tableTitle5="2 سال تجربه مفید و مرتبط"
          tableValue1="25"
          tableValue2="50"
          tableValue3="75"
          tableValue4="100"
          tableValue5="120"
        />
        <HeaderFactors
          numberFactors="عامل سوم"
          titelFactors="تحصیلات"
          maxValue="160"
          jsValue="200"
        />
        <ExplainFactor
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table2
          tableTitle1="2 سال تجربه مفید و مرتبط"
          tableTitle2="2 سال تجربه مفید و مرتبط"
          tableTitle3="2 سال تجربه مفید و مرتبط"
          tableTitle4="2 سال تجربه مفید و مرتبط"
          tableTitle5="2 سال تجربه مفید و مرتبط"
          tableValue1="25"
          tableValue2="50"
          tableValue3="75"
          tableValue4="100"
          tableValue5="120"
        />
      </Page>
    </>
  );
};

export default Page1;
