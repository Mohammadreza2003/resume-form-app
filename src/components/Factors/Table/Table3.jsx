import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table = () => {
  return (
    <>
      <Row type={1}>
        <Column>Lorem, ipsum dolor sit amet consectetur.</Column>
        <Column>Lorem, ipsum dolor sit amet consectetur.</Column>
        <Column>Lorem, ipsum dolor sit amet consectetur.</Column>
        <Column>Lorem, ipsum dolor sit amet consectetur.</Column>
        <Column>Lorem, ipsum dolor sit amet consectetur.</Column>
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

export default Table;
