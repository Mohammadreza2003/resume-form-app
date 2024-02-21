import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table5 = () => {
  return (
    <>
      <Row type={2}>
        <Column> میزان خسارت و ضایعه وارده احتمالی</Column>
      </Row>
      <Row type={1}>
        <Column>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Column>
        <Column>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Column>
        <Column>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Column>
        <Column>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Column>
        <Column>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Column>
      </Row>
      <Row>
        <Column>10</Column>
        <Column>30</Column>
        <Column>40</Column>
        <Column> 50</Column>
        <Column isActive={true}>80</Column>
      </Row>
    </>
  );
};

export default Table5;
