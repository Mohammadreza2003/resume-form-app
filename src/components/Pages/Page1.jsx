import Page from "../Page";
import React from "react";
import Factor1 from "../Factors/Factor1";
import Factor2 from "../Factors/Factor2";
import Factor3 from "../Factors/Factor3";

const Page1 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor1 />
        <br />
        <br />
        <br />
        <Factor2 />
        <br />
        <br />
        <br />
        <Factor3 />
      </Page>
    </>
  );
};

export default Page1;
