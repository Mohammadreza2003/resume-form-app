import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table1 = () => {
  return (
    <>
      <Row type={1}>
        <Column>ابتدایی</Column>
        <Column>سیکل</Column>
        <Column>دیپلم</Column>
        <Column>فوق دیپلم</Column>
        <Column>لیسانس</Column>
        <Column>فوق لیسانس</Column>
        <Column>دکتری</Column>
      </Row>
      <Row>
        <Column>60</Column>
        <Column>80</Column>
        <Column>100</Column>
        <Column>100 </Column>
        <Column>120</Column>
        <Column> 140</Column>
        <Column isActive={true}>160</Column>
      </Row>
    </>
  );
};

export default Table1;
