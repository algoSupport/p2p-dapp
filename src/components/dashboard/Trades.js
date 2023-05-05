import React, { useState } from "react";
import { CardTitle } from "reactstrap";
import { Button, DataTableBody, DataTableHead, DataTableItem, DataTableRow, Icon } from "../Component";

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

const Trades = () => {
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
              <span className="me-2">Recent Trades</span>{" "}
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
            <span>Time</span>
          </DataTableRow>
          <DataTableRow>
            <span>Asset</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Amount</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Status</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Rating</span>
          </DataTableRow>
        </DataTableHead>

        <DataTableItem></DataTableItem>
      </DataTableBody>
      <div className="text-gray fs-6 py-2 px-4">You have no recent trades on Cilistia.</div>
    </React.Fragment>
  );
};
export default Trades;
