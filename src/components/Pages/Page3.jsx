import Page from "../Page";
import React from "react";
import Factor6 from "../Factors/Factor6";
import Factor7 from "../Factors/Factor7";

const Page3 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor6 />
        <br />
        <br />
        <br />
        <Factor7 />
        
      </Page>
    </>
  );
};

export default Page3;
