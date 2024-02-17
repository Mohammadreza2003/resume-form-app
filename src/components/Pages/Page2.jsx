import Page from "../Page";
import React from "react";
import Factor4 from "../Factors/Factor4";
import Factor5 from "../Factors/Factor5";

const Page2 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor4 />
        <br />
        <br />
        <br />
        <Factor5 />
        
      </Page>
    </>
  );
};

export default Page2;
