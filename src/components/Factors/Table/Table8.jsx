import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table8 = () => {
  return (
    <>
      <Row type={1}>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
        <Column>سطح 1</Column>
      </Row>
      <Row type={2}>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
          voluptas in enim quis? Non, sequi es
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
          voluptas in enim quis? Non, sequi es
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
          voluptas in enim quis? Non, sequi es
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
          voluptas in enim quis? Non, sequi es
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
          voluptas in enim quis? Non, sequi es
        </Column>
      </Row>
      <Row type={3}>
        <Column>زیاد</Column>
        <Column>زیاد</Column>
        <Column>زیاد</Column>
        <Column>زیاد</Column>
        <Column>زیاد</Column>
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

export default Table8;
