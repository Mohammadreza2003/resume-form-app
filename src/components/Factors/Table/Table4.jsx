import React from "react";
import Row from "../Row";
import Column from "../Column";
import RotateRow from "../RotateRow";

const Table4 = () => {
  return (
    <>
      <div className="mt-[95px]">
        <RotateRow>سرپرستی مستقیم</RotateRow>
      </div>
      <div className="mt-[-113px] mb-[110px]">
        <Row type={1}>
          <Column>سطوح</Column>
          <Column>امتیاز هر نفر</Column>
          <Column>تعداد افراد تحد سرپرستی</Column>
          <Column>متیاز کسب شده</Column>
        </Row>
        <Row>
          <Column>کارمند و کارگر</Column>
          <Column>2 </Column>
          <Column>1</Column>
          <Column>2</Column>
        </Row>
        <Row>
          <Column>کارمند و کارگر</Column>
          <Column>2 </Column>
          <Column>1</Column>
          <Column>2</Column>
        </Row>
        <Row>
          <Column>کارمند و کارگر</Column>
          <Column>2 </Column>
          <Column>1</Column>
          <Column>2</Column>
        </Row>
        <Row>
          <Column>کارمند و کارگر</Column>
          <Column>2 </Column>
          <Column>1</Column>
          <Column>2</Column>
        </Row>
        <Row>
          <Column>کارمند و کارگر</Column>
          <Column>2 </Column>
          <Column>1</Column>
          <Column>2</Column>
        </Row>
        <Row type={2}>
          <Column size={4} h={1}>
            {" "}
            حداکثر امتیاز عامل :
          </Column>
          <Column h={1}>امتیاز مکتوب :</Column>
          <Column h={1}> امتیاز اعمال شده:</Column>
          <Column isActive={true} size={3} h={1}>
            25
          </Column>
        </Row>
      </div>
    </>
  );
};

export default Table4;
