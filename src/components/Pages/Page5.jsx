import Page from "../Page";
import React from "react";
import Factor10 from "../Factors/Factor10";
import Factor11 from "../Factors/Factor11";
const Page5 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor10 />
        <br />
        <br />
        <br />
        <Factor11 />
        
      </Page>
    </>
  );
};

export default Page5;
