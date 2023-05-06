import React from "react";
import { DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import { Icon } from "../../../Component";
import { LineChart } from "../../charts/default/Charts";

const SalesOverview = () => {
  return (
    <React.Fragment>
      <div className="card-title-group align-start gx-3 mb-3">
        <div className="card-title">
          <h6 className="title">Portfolio Overview</h6>
          <p>Total value of your assets on chain </p>
        </div>
      </div>
      <div className="nk-sale-data-group align-center justify-between gy-3 gx-5">
        <div className="nk-sale-data">
          <span className="amount">$0.00</span>
        </div>
      </div>
      <div className="nk-sales-ck pt-4">
        <LineChart />
      </div>
    </React.Fragment>
  );
};
export default SalesOverview;
