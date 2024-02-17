import Page from "../Page";
import React from "react";
import Factor8 from "../Factors/Factor8";
import Factor9 from "../Factors/Factor9";
const Page4 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor8 />
        <br />
        <br />
        <br />
        <Factor9 />
       
      </Page>
    </>
  );
};

export default Page4;
