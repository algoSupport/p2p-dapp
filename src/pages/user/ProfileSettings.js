import React, { useState } from "react";
import Head from "../../layout/head/Head";
import { Block, Icon } from "../../components/Component";
import {} from "../../utils/Utils";

const Profile = () => {
  const [setModal] = useState(false);

  return (
    <React.Fragment>
      <Head title="Profile"></Head>

      <Block>
        <div className="nk-data data-list data-list-s2 is-compact">
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Name</span>
              <span className="data-value"></span>
            </div>
            <div className="data-col data-col-end"></div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Display Name</span>
              <span className="data-value"></span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Country</span>
              <span className="data-value"></span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
        </div>
        <div className="nk-data data-list data-list-s2 is-compact">
          <div className="data-head">
            <h6 className="overline-title">Preferences</h6>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Language</span>
              <span className="data-value"></span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#language"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
                className="link link-primary"
              >
                Change Language
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Date Format</span>
              <span className="data-value"></span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#link"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Timezone</span>
              <span className="data-value"></span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#link"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
        </div>
      </Block>
    </React.Fragment>
  );
};
export default Profile;
