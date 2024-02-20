import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table2 = (
 ) => {
  return (
    <>
      <Row type={1}>
        <Column>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Column>
        <Column>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Column>
        <Column>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Column>
        <Column>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Column> 
        <Column>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Column>
      </Row>
      <Row>
        <Column>100</Column>
        <Column>100 </Column>
        <Column>120</Column>
        <Column isActive={true}> 140</Column>
        <Column>160</Column>
      </Row>
    </>
  );
};

export default Table2;
