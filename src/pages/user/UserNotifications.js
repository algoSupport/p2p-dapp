import React from "react";
import Head from "../../layout/head/Head";
import {
  BlockBetween,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  InputSwitch,
} from "../../components/Component";

const UserProfileNotificationPage = () => {
  return (
    <React.Fragment>
      <Head title="Notifications"></Head>

      <BlockHead size="sm">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h6">Alerts</BlockTitle>
            <BlockDes>
              <p>You will be notified via browser if you have opted in to receive notifications.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <BlockContent>
        <div className="gy-3">
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="custom-switch" checked label="Notify me when someone opens a trade" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="custom-switch2" label="Notify me when someone sends me a message" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="custom-switch3" checked label="Notify me when someone opens a dispute" />
            </div>
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};
export default UserProfileNotificationPage;
