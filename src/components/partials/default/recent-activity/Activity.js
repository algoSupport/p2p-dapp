import React, { useState } from "react";
import UserAvatar from "../../../user/UserAvatar";
import { activityData } from "./ActivityData";
import { CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const RecentActivity = () => {
  const [recentUser] = useState("");
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Recent Reviews</h6>
          </CardTitle>
          <div className="card-tools">
            <Link to={`${process.env.PUBLIC_URL}/app-messages`} className="link">
              View All
            </Link>
          </div>
        </div>
      </div>
      <ul className="nk-activity">
        {recentUser === "Cancel"
          ? activityData.slice(0, 3).map((item) => {
              return (
                <li className="nk-activity-item" key={item.name}>
                  <UserAvatar
                    className="nk-activity-media"
                    theme={item.theme}
                    image={item.img}
                    text={item.initial}
                  ></UserAvatar>
                  <div className="nk-activity-data">
                    <div className="label">{item.name}</div>
                    <span className="time">{item.time}</span>
                  </div>
                </li>
              );
            })
          : activityData.map((item) => {
              return (
                <li className="nk-activity-item" key={item.name}>
                  <UserAvatar
                    className="nk-activity-media"
                    theme={item.theme}
                    image={item.img}
                    text={item.initial}
                  ></UserAvatar>
                  <div className="nk-activity-data">
                    <div className="label">{item.name}</div>
                    <span className="time">{item.time}</span>
                  </div>
                </li>
              );
            })}
      </ul>
    </React.Fragment>
  );
};
export default RecentActivity;
