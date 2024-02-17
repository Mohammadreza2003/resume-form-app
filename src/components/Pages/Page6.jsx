import Page from "../Page";
import React from "react";
import Factor12 from "../Factors/Factor12";
import Factor13 from "../Factors/Factor13";
const Page6 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor12 />
        <br />
        <br />
        <br />
        <Factor13 />
        
      </Page>
    </>
  );
};

export default Page6;
