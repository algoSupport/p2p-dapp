import React, { useState } from "react";
import Icon from "../../../icon/Icon";
import { DoubleBar } from "../../charts/default/Charts";
import { Row, Col } from "../../../grid/Grid";

const OrderOverview = () => {
  const [orderOverview] = useState("");
  return (
    <React.Fragment>
      <div className="nk-order-ovwg">
        <Row className="g-4 align-end">
          <Col xxl="8">
            <div className="nk-order-ovwg-ck">
              <DoubleBar state={orderOverview} />
            </div>
          </Col>
          <Col xxl="4">
            <Row className="g-4">
              <Col xxl="12" sm="6">
                <div className="nk-order-ovwg-data buy">
                  <div className="amount">
                    {orderOverview === "set2" ? "12,495" : "8,051"} <small className="currenct currency-usd">USD</small>
                  </div>
                  <div className="info">
                    Last {orderOverview === "set2" ? "30" : "15"} days{" "}
                    <strong>
                      {orderOverview === "set2" ? "39,000" : "14,050"}{" "}
                      <span className="currenct currency-usd">USD</span>
                    </strong>
                  </div>
                  <div className="title">
                    <Icon name="arrow-down-left"></Icon> Buy Orders
                  </div>
                </div>
              </Col>
              <Col xxl="12" sm="6">
                <div className="nk-order-ovwg-data sell">
                  <div className="amount">
                    {orderOverview === "set2" ? "18,920" : "10,820"}{" "}
                    <small className="currenct currency-usd">USD</small>
                  </div>
                  <div className="info">
                    Last {orderOverview === "set2" ? "30" : "15"} days{" "}
                    <strong>
                      {orderOverview === "set2" ? "39,258" : "18,365"}{" "}
                      <span className="currenct currency-usd">USD</span>
                    </strong>
                  </div>
                  <div className="title">
                    <Icon name="arrow-up-left"></Icon> Sell Orders
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default OrderOverview;
