import Page from "../Page";
import React from "react";
import Factor18 from "../Factors/Factor18";
import Factor19 from "../Factors/Factor19";

const Page9 = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <Factor18 />
        <br />
        <br />
        <br />
        <Factor19 />
      </Page>
    </>
  );
};

export default Page9;
