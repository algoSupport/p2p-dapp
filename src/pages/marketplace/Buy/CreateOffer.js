import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
} from "../../../components/Component";

import { Step, Steps } from "react-step-builder";
import Price from "./Price";
import Payment from "./Bank";
import Terms from "./Terms";

const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? "first done" : "first"}>
          <a
            href="#wizard-01-h-0"
            onClick={(ev) => {
              props.next();
              ev.preventDefault();
            }}
          >
            <h5>Price</h5>
          </a>
        </li>
        <li className={props.current >= 2 ? "done" : ""}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <h5>Payment</h5>
          </a>
        </li>
        <li className={props.current >= 3 ? "done" : ""}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <h5>Terms</h5>
          </a>
        </li>
      </ul>
    </div>
  );
};

const config = {
  before: Header,
};

const CreateBuyOffer = () => {
  return (
    <React.Fragment>
      <Head title="Buy"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                Create an offer
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Create an offer to buy the assets</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block size="lg">
          <PreviewCard>
            <div className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
              <Steps config={config}>
                <Step component={Price} />
                <Step component={Payment} />
                <Step component={Terms} />
              </Steps>
            </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default CreateBuyOffer;
