import React, { useState } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import ActiveSubscription from "../../components/partials/default/active-subscription/ActiveSubscription";
import AvgSubscription from "../../components/partials/default/avg-subscription/AvgSubscription";
import RecentActivity from "../../components/partials/default/recent-activity/Activity";
import Support from "../../components/partials/default/support-request/Support";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
  PreviewAltCard,
  BlockBetween,
} from "../../components/Component";
import { useAccount } from "wagmi";
import { shortenAddress } from "../../utils/Utils";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Trades from "../../components/dashboard/Trades";

const Homepage = () => {
  const [sm] = useState(false);
  const { address, isConnected } = useAccount();
  const history = useHistory();

  useEffect(() => {
    if (!isConnected) {
      history.push("/marketplace/buy");
    }
  }, [history, isConnected]);
  return (
    <React.Fragment>
      <Head title="Dashboard"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Dashboard
              </BlockTitle>
              <BlockDes className="text-soft">
                {/* Wallet Address here */}
                <p>{`Welcome back ${shortenAddress(address)}`}</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-secondary btn-dim">
                          <Icon className="d-none d-sm-inline" name="calender-date" />
                          <span>Last 30 Days</span>
                        </DropdownToggle>
                        <DropdownMenu end>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#!"
                              >
                                <span>Last 30 days</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 6 months</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 3 weeks</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li>
                      <Link to="/marketplace/buy" className="btn btn-primary">
                        <Icon name="users-fill" />
                        <span>Marketplace</span>
                        <Icon name="chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col md="6">
              <PreviewAltCard>
                <ActiveSubscription />
              </PreviewAltCard>
            </Col>
            <Col md="6">
              <PreviewAltCard>
                <AvgSubscription />
              </PreviewAltCard>
            </Col>

            <Col size="12">
              <Card className="card-bordered card-full">
                <Trades />
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-bordered card-full">
                <RecentActivity />
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-bordered h-100">
                <Support />
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
