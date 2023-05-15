import React from "react";
import { CardTitle } from "reactstrap";
import { Icon, TooltipComponent } from "../../../Component";
import { BarChart } from "../../charts/default/Charts";

const ActiveSubscription = () => {
  return (
    <React.Fragment>
      <div className="card-title-group align-start">
        <CardTitle>
          <h6 className="title">Successful Trades</h6>
        </CardTitle>
        <div className="card-tools">
          <TooltipComponent
            icon="help-fill"
            iconClass="card-hint"
            direction="left"
            id="Tooltip-2"
            text="Total successful trades"
          />
        </div>
      </div>
      <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
        <div className="nk-sale-data">
          <span className="amount mb-2">0</span>
          <span className="sub-title">
            <span className="change down text-danger">
              <Icon name="arrow-long-down" />
              0%
            </span>
            since last month
          </span>
        </div>
        <div className="nk-sales-ck">
          <BarChart />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ActiveSubscription;
