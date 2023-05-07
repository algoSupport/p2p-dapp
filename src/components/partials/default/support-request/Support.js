import React from "react";
import UserAvatar from "../../../user/UserAvatar";
import { supportData } from "./SupportData";
import { CardTitle, Badge, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Messages</h6>
          </CardTitle>
          <div className="card-tools">
            <Link to={`${process.env.PUBLIC_URL}/dashboard`} className="link">
              View All
            </Link>
          </div>
        </div>
      </div>
      <ul className="nk-activity">
        <div className="d-flex justify-center py-4 text-base">You have no new messages.</div>
      </ul>
    </React.Fragment>
  );
};
export default Support;
