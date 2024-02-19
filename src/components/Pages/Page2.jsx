import Page from "../Page";
import React from "react";
import HeaderFactors from "../Factors/HeaderFactors";
import ExplainFactorSpecialTableThree from "../Factors/Table/ExplainFactorSpecialTableThree";
import ExplainFactor from "../Factors/ExplainFactor";
import Table3 from "../Factors/Table/Table3";
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
        <ExplainFactorSpecialTableThree
          text="مجموعه معلومات لازم جهت تصدی و انجام وظایف هر شغل که از طریق دوره های
          آموزشی فرد در مدارس و دانشگاه ها بدست می آید."
        />
        <Table3
          tableTitle1="سرپرستی مستقیم"
          tableTitle2="سطوح "
          tableTitle3="امتیاز هر نفر"
          tableTitle4="تعداد افراد تحد سرپرستی"
          tableTitle5="امتیاز کسب شده"
          factorScore="25"
          writtenScore="64"
          pointsApplied="25"
        />

        <Table4
          tableTitle1="سرپرستی غیر مستقیم"
          tableTitle2="سطوح "
          tableTitle3="امتیاز هر نفر"
          tableTitle4="تعداد افراد تحد سرپرستی"
          tableTitle5="امتیاز کسب شده"
          factorScore="25"
          writtenScore="64"
          pointsApplied="25"
        />
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
        <Table5/>
      </Page>
    </>
  );
};

export default Page2;
