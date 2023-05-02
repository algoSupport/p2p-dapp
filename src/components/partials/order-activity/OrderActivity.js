import React, { useEffect, useState } from "react";
import Icon from "../../icon/Icon";
import { CardTitle } from "reactstrap";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow } from "../../table/DataTable";
import { Link } from "react-router-dom";
import { Button } from "../../Component";

const orderActivityData = [
  {
    id: 1,
    icon: "sign-btc bg-btc-dim icon-circle",
    symbol: "BTC",
    total: "342,000",
    value: "$30,000",
    deposit: "3.50%",
  },
  {
    id: 2,
    icon: "sign-eth bg-eth-dim icon-circle",
    symbol: "ETH",
    total: "12342,000",
    value: "$1,830",
    deposit: "6.50%",
  },
];

const OrderActivity = () => {
  const [orderData, setOrderData] = useState(orderActivityData);
  const [orderActivity, setActivity] = useState("");
  // useEffect(() => {
  //   let data;
  //   if (orderActivity === "Buy") {
  //     data = orderActivityData.filter((item) => item.desc.split(" ")[0] === "Buy");
  //   } else if (orderActivity === "Sell") {
  //     data = orderActivityData.filter((item) => item.desc.split(" ")[0] === "Sell");
  //   } else {
  //     data = orderActivityData;
  //   }
  //   setOrderData(data);
  // }, [orderActivity]);
  return (
    <React.Fragment>
      <div className="card-inner">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">
              <span className="me-2">Wallets</span>{" "}
              {/* <Link to={`${process.env.PUBLIC_URL}/history-payment`} className="link d-none d-sm-inline">
                View all
              </Link> */}
            </h6>
          </CardTitle>
          {/* <div className="card-tools">
            <ul className="card-tools-nav">
              <li className={orderActivity === "Buy" ? "active" : ""} onClick={() => setActivity("Buy")}>
                <a
                  href="#buy"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Buy</span>
                </a>
              </li>
              <li className={orderActivity === "Sell" ? "active" : ""} onClick={() => setActivity("Sell")}>
                <a
                  href="#sell"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Sell</span>
                </a>
              </li>
              <li className={orderActivity === "" ? "active" : ""} onClick={() => setActivity("")}>
                <a
                  href="#all"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>All</span>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <DataTableBody className="border-top is-compact" bodyclass="nk-tb-orders" compact>
        <DataTableHead>
          <DataTableRow className="nk-tb-orders-type">
            <span>Asset</span>
          </DataTableRow>
          <DataTableRow>
            <span>Total</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Value</span>
          </DataTableRow>
          <DataTableRow size="xl">
            <span>Deposit</span>
            <span className="ms-1" style={{ color: "white", fontSize: "10px" }}>
              APR
            </span>
          </DataTableRow>
          <DataTableRow size="xxl"></DataTableRow>
        </DataTableHead>
        {orderData.map((item) => {
          return (
            <DataTableItem key={item.id}>
              <DataTableRow className="nk-tb-orders-type">
                <ul className="d-flex align-center  ">
                  <li>
                    <Icon name={item.icon}></Icon>
                  </li>
                  <li>
                    <span style={{ marginLeft: "5px" }}>{item.symbol}</span>
                  </li>
                </ul>
              </DataTableRow>
              <DataTableRow>
                <div className="d-flex align-center">
                  <span className="tb-sub">{item.total}</span>
                  <span className="tb-sub ms-1" style={{ color: "white", fontSize: "10px" }}>
                    {item.symbol}
                  </span>
                </div>
              </DataTableRow>
              <DataTableRow size="sm">
                <span className="tb-sub">{item.value}</span>
              </DataTableRow>
              <DataTableRow size="xl">
                <span className="tb-sub">{item.deposit}</span>
              </DataTableRow>

              <DataTableRow className="text-end me-2">
                <Button color="primary" size="sm">
                  Deposit
                </Button>
                <Button color="primary" size="sm" className="ms-3 btn-dim">
                  Withdraw
                </Button>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </DataTableBody>
    </React.Fragment>
  );
};
export default OrderActivity;
