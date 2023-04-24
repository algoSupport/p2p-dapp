import React from "react";
import Content from "../../layout/content/Content";
import Profile from "./ProfileSettings";
import Settings from "./UserSettings";
import Notifications from "./UserNotifications";
import Banking from "./BankingDetails";
import { Route, Switch, Link } from "react-router-dom";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../components/Component";
import { Card } from "reactstrap";

const UserProfileLayout = () => {
  return (
    <React.Fragment>
      <Content>
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle page tag="h3">
              My Profile
            </BlockTitle>
            <BlockDes>Profile, security and notification settings</BlockDes>
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <Card className="card-bordered">
            <ul className="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
              <li
                className={`nav-item ${
                  window.location.pathname === `${process.env.PUBLIC_URL}/profile/details` ? "active current-page" : ""
                } `}
              >
                <Link
                  to={`${process.env.PUBLIC_URL}/profile/details`}
                  className={`nav-link
                    ${window.location.pathname === `${process.env.PUBLIC_URL}/profile/details` ? "active" : ""}
                  `}
                >
                  <Icon name="user-fill-c"></Icon>
                  <span>Personal</span>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  window.location.pathname === `${process.env.PUBLIC_URL}/profile/notifications` ? "active" : ""
                }`}
              >
                <Link
                  to={`${process.env.PUBLIC_URL}/profile/notifications`}
                  className={`nav-link ${
                    window.location.pathname === `${process.env.PUBLIC_URL}/profile/notifications` ? "active" : ""
                  }`}
                >
                  <Icon name="bell-fill"></Icon>
                  <span>Notifications</span>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  window.location.pathname === `${process.env.PUBLIC_URL}/profile/settings` ? "active" : ""
                }`}
              >
                <Link
                  to={`${process.env.PUBLIC_URL}/profile/settings`}
                  className={`nav-link ${
                    window.location.pathname === `${process.env.PUBLIC_URL}/profile/settings` ? "active" : ""
                  }`}
                >
                  <Icon name="lock-alt-fill"></Icon>
                  <span>Security Settings</span>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  window.location.pathname === `${process.env.PUBLIC_URL}/profile/banking` ? "active" : ""
                }`}
              >
                <Link
                  to={`${process.env.PUBLIC_URL}/profile/banking`}
                  className={`nav-link ${
                    window.location.pathname === `${process.env.PUBLIC_URL}/profile/banking` ? "active" : ""
                  }`}
                >
                  <Icon name="building-fill"></Icon>
                  <span>Banking Details</span>
                </Link>
              </li>
            </ul>

            <div className="card-inner">
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/profile/details`} render={() => <Profile />}></Route>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/profile/notifications`}
                  render={() => <Notifications />}
                ></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/profile/settings`} render={() => <Settings />}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/profile/banking`} render={() => <Banking />}></Route>
              </Switch>
            </div>
          </Card>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default UserProfileLayout;
