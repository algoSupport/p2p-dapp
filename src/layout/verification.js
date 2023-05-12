import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Col, Form } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  PreviewCard,
} from "../components/Component";
import Head from "./head/Head";
import { utils } from "ethers";
import { verify } from "../utils/Utils";
import { toast } from "react-toastify";

const Verification = () => {
  const onFormSubmit = async (submitData) => {
    if (await verify(submitData.code)) {
      localStorage.setItem("secret", utils.keccak256(new TextEncoder().encode(submitData.code)));
    } else {
      // setError("code", { message: "Invalid code" });
      toast.error("Invalid code");
    }
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Verify the code"></Head>
      <div className="d-flex justify-center align-center flex-column " style={{ width: "100vw", height: "100vh" }}>
        <div style={{ width: "300px" }}>
          {/* <BlockHead size="sm">
            <BlockContent>
              <BlockHeadContent>
                <BlockTitle tag="h3" page className="text-center">
                  Verify the code
                </BlockTitle>
                <BlockDes className="text-soft">
                  <p></p>
                </BlockDes>
              </BlockHeadContent>
            </BlockContent>
          </BlockHead> */}

          <Block size="lg">
            <PreviewCard>
              <Form className="row gy-4" noValidate onSubmit={handleSubmit(onFormSubmit)}>
                <Col md="12">
                  <div className="form-group">
                    <BlockTitle tag="h3" page className="text-center mb-3">
                      Input the verification code
                    </BlockTitle>
                    {/* <label className="form-label">Verification Code</label> */}
                    <input
                      className="form-control"
                      type="number"
                      name="code"
                      placeholder="code"
                      ref={register({ required: "This field is required" })}
                    />
                    {errors.code && <span className="invalid">{errors.code.message}</span>}
                  </div>
                </Col>

                <Col size="12">
                  <ul className="align-center justify-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" type="submit">
                        Verify
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Form>
            </PreviewCard>
          </Block>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Verification;
