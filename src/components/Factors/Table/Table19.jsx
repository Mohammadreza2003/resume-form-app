import React from "react";
import Row from "../Row";
import Column from "../Column";
const Table19 = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
          illo ea aliquid? Quo voluptatum asperiores iure, reiciendis, nemo
          natus iusto neque facere inventore tenetur, harum optio id aliquid
          dolorem.
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
          illo ea aliquid? Quo voluptatum asperiores iure, reiciendis, nemo
          natus iusto neque facere inventore tenetur, harum optio id aliquid
          dolorem.
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
          illo ea aliquid? Quo voluptatum asperiores iure, reiciendis, nemo
          natus iusto neque facere inventore tenetur, harum optio id aliquid
          dolorem.
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
          illo ea aliquid? Quo voluptatum asperiores iure, reiciendis, nemo
          natus iusto neque facere inventore tenetur, harum optio id aliquid
          dolorem.
        </Column>
        <Column>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
          illo ea aliquid? Quo voluptatum asperiores iure, reiciendis, nemo
          natus iusto neque facere inventore tenetur, harum optio id aliquid
          dolorem.
        </Column>
      </Row>
      <Row>
        <Column>10</Column>
        <Column>30</Column>
        <Column>40</Column>
        <Column isActive={true}>48</Column>
        <Column>80</Column>
      </Row>
    </>
  );
};

export default Table19;
