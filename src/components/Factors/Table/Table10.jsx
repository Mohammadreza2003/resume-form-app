import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table10 = () => {
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
        <Column>کم </Column>
        <Column>- </Column>
        <Column>- </Column>
        <Column>- </Column>
        <Column>- </Column>
      </Row>
      <Row type={5}>
        <Column> امتیاز شغل:</Column>
        <Column isActive={true} size={2}>
          80
        </Column>
      </Row>
      
    </>
  );
};

export default Table10;
