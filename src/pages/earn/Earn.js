import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Badge, Button } from "reactstrap";
import {
  BlockBetween,
  BlockDes,
  Block,
  BlockContent,
  BlockHead,
  BlockTitle,
  Col,
  Row,
  PreviewAltCard,
} from "../../components/Component";
import { Card } from "reactstrap";
import { pricingTableDataV1, pricingTableDataV2 } from "./EarnData";
import SalesOverview from "../../components/partials/default/sales-overview/SalesOverview";

const Earn = () => {
  return (
    <React.Fragment>
      <Head title="Pricing Table"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween className="g-3">
            <BlockContent>
              <BlockTitle>Stake & Earn</BlockTitle>
              <BlockDes className="text-soft">
                <p>Cilistia shares up to 100% of its revenue with token and NFT stakers.</p>
              </BlockDes>
            </BlockContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col size="12">
              <PreviewAltCard>
                <SalesOverview />
              </PreviewAltCard>
            </Col>
          </Row>
        </Block>
        <Block>
          <Row className="g-gs">
            {pricingTableDataV1.map((item) => {
              return (
                <Col md={6} key={item.id}>
                  <Card className={`card-bordered pricing ${item.tags ? "recommend" : ""}`}>
                    {item.tags && (
                      <Badge color="primary" className="pricing-badge">
                        Recommend
                      </Badge>
                    )}
                    <div className="pricing-head">
                      <div className="pricing-title">
                        <h4 className="card-title title">{item.title}</h4>
                        <p className="sub-text">{item.caption}</p>
                      </div>
                      <div className="card-text">
                        <Row>
                          <Col size={6}>
                            <span className="h4 fw-500">{item.interest}%</span>
                            <span className="sub-text">Daily Interest</span>
                          </Col>
                          <Col size={6}>
                            <span className="h4 fw-500">{item.return}</span>
                            <span className="sub-text">Term Days</span>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="pricing-features">
                        <li>
                          <span className="w-50">Min Deposit</span> -{" "}
                          <span className="ms-auto">${item.minDeposit}</span>
                        </li>
                        <li>
                          <span className="w-50">Max Deposit</span> -{" "}
                          <span className="ms-auto">${item.maxDeposit}</span>
                        </li>
                        <li>
                          <span className="w-50">Deposit Return</span> - <span className="ms-auto">{item.return}</span>
                        </li>
                        <li>
                          <span className="w-50">Total Return</span> -{" "}
                          <span className="ms-auto">{item.totalReturn}%</span>
                        </li>
                      </ul>
                      <div className="pricing-action">
                        <Button color="light" outline>
                          Choose this plan
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Earn;
