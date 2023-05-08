import React, { useEffect, useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Card, Modal, ModalBody, ModalHeader } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
  BlockBetween,
} from "../../components/Component";
import SalesOverview from "../../components/partials/default/sales-overview/SalesOverview";
import OrderActivity from "../../components/partials/order-activity/OrderActivity";

const Wallets = () => {
  const [modalZoom, setModalZoom] = useState(false);
  const toggleZoom = () => setModalZoom(!modalZoom);
  const [sm, updateSm] = useState(false);

  return (
    <React.Fragment>
      <Head title="Wallets" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Wallets
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Deposit, withdraw & manage your assets</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <Modal isOpen={modalZoom} toggle={toggleZoom} modalClassName="zoom">
                  <ModalHeader
                    toggle={toggleZoom}
                    close={
                      <button className="close" onClick={toggleZoom}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Add a wallet
                  </ModalHeader>
                  <ModalBody>
                    <p>Adding wallets is not yet available on this preview. Please check back later.</p>
                  </ModalBody>
                </Modal>

                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <button onClick={toggleZoom} className="dropdown-toggle btn btn-primary">
                        <Icon className="d-none d-sm-inline" name="plus" />
                        <span>Add a wallet</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
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
            <Col size="12">
              <Card className="card-bordered card-full">
                <OrderActivity />
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Wallets;
