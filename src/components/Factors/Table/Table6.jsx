import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table6 = () => {
  return (
    <>
      <Row type={2}>
        <Column> میزان خسارت و ضایعه وارده احتمالی</Column>
      </Row>
      <Row type={1}>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
      </Row>
      <Row>
        <Column>10</Column>
        <Column>30</Column>
        <Column>40</Column>
        <Column isActive={true}> 50</Column>
        <Column>80</Column>
      </Row>
    </>
  );
};

export default Table6;
