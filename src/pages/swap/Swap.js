import React from "react";
import { Card, CardBody, CardTitle, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { useEffect, useState } from "react";
import classNames from "classnames";
import TokenInput from "../../components/swap/TokenInput";
import Content from "../../layout/content/Content";
import styles from "./swap.module.scss";
import { Currencies, TokenList } from "../../components/swap/TokenSelect";
import Head from "../../layout/head/Head";
import {
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  PreviewAltCard,
  Block,
  Row,
} from "../../components/Component";
import SalesOverview from "../../components/partials/default/sales-overview/SalesOverview";

const SwapPage = () => {
  const [activeTab, setActiveTab] = useState("swap");
  const [token1, setToken1] = useState(TokenList[0]);
  const [token2, setToken2] = useState();

  const [buyToken1, setBuyToken1] = useState(Currencies[0]);
  const [buyToken2, setBuyToken2] = useState();
  const [tokenClicked, setTokenClicked] = useState(0);

  const toggle = (tabId) => {
    setActiveTab(tabId);
  };

  const onSwitch = () => {
    const t1 = token1;
    setToken1(token2);
    setToken2(t1);
  };

  useEffect(() => {
    if (!token1 || !token2) return;
    if (token1.symbol === token2.symbol) {
      if (tokenClicked === 1) {
        setToken2();
      } else if (tokenClicked === 2) {
        setToken1();
      }
    }
  }, [tokenClicked, token1, token2]);

  return (
    <React.Fragment>
      <Head title="Express" />
      <Content>
        <div className="h-100">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Express
              </BlockTitle>
              <BlockDes>Swap, buy and sell tokens instantly. </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col size="6">
              <Card className="card-bordered">
                <CardBody className="card-inner pt-2">
                  <CardTitle tag="h5">
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          tag="a"
                          href="#swap"
                          className={classNames({ active: activeTab === "swap" })}
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggle("swap");
                          }}
                        >
                          Swap
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag="a"
                          href="#buy"
                          className={classNames({ active: activeTab === "buy" })}
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggle("buy");
                          }}
                        >
                          Buy
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardTitle>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="swap">
                      <div className="d-flex flex-column" style={{ gap: "3px", position: "relative" }}>
                        <TokenInput token={token1} setToken={setToken1} setTokenClicked={() => setTokenClicked(1)} />
                        <TokenInput token={token2} setToken={setToken2} setTokenClicked={() => setTokenClicked(2)} />
                        <div className={styles.switch} onClick={() => onSwitch()}>
                          <img src="/images/switch.svg" alt="switch"></img>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="buy">
                      <div className="d-flex flex-column" style={{ gap: "3px", position: "relative" }}>
                        <TokenInput
                          token={buyToken1}
                          setToken={setBuyToken1}
                          setTokenClicked={() => setTokenClicked(1)}
                          isBuy={true}
                        />
                        <TokenInput
                          token={buyToken2}
                          setToken={setBuyToken2}
                          setTokenClicked={() => setTokenClicked(2)}
                        />
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col size="6">
              <Block>
                <PreviewAltCard>
                  <SalesOverview />
                </PreviewAltCard>
              </Block>
            </Col>
          </Row>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default SwapPage;
