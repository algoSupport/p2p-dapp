import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { dataTableColumns2, userData } from "../../components/table/TableData";
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
  ReactDataTable,
} from "../../../components/Component";

const ProjectListPage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Swap History" />
      <Content>
        <BlockHead size="sm">
          <div className="nk-block-between">
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                History
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Your swap transaction history</p>
              </BlockDes>
            </BlockHeadContent>
          </div>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col size="12">
              <ReactDataTable
                data={userData}
                columns={dataTableColumns2}
                pagination
                className="nk-tb-list"
                selectableRows
              />
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ProjectListPage;
