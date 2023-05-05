import { useContext } from "react";
import { Alert, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Button, Col, Icon } from "../../../components/Component";
import { OfferContext } from "../../user/OfferContext";
import { useHistory } from "react-router-dom";

export const filterStatus = [
  { value: "fixedPrice", label: "Fixed Price" },
  { value: "percent", label: "Percent" },
];
const Terms = (props) => {
  const { contextData } = useContext(OfferContext);
  const [data, setData] = contextData;
  const history = useHistory();

  const onFormSubmit = (submitData) => {
    console.log(errors);
    setData({
      ...data,
      ...submitData,
    });
    history.goBack();
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <div className="p-2">
      <div className="mt-4">
        <Form className="row gy-4" noValidate onSubmit={handleSubmit(onFormSubmit)}>
          <Col md="12">
            <div className="form-group">
              <label className="form-label">Instruction</label>
              <textarea
                className="form-control"
                type="number"
                name="instruction"
                defaultValue={data.instruction}
                placeholder="This will be displayed to the counterparty."
                ref={register({ required: "This field is required" })}
              />
              {errors.instruction && <span className="invalid">{errors.instruction.message}</span>}
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <label className="form-label">Auto reply(optional) </label>
              <textarea
                className="form-control"
                type="number"
                name="autoReply"
                defaultValue={data.autoReply}
                placeholder="This message will be sent to the counterparty once the trade has started."
                ref={register()}
              />
              {/* {errors.autoReply && <span className="invalid">{errors.autoReply.message}</span>} */}
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <label className="form-label">Requirements </label>

              <Alert className="alert-icon" color="warning">
                <Icon name="alert-circle" />
                Adding requirements will reduce the exposure of your Ad.
              </Alert>
            </div>
          </Col>

          <Col md="12">
            <div className="form-group">
              <div className="g">
                <div className="custom-control custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="kyc"
                    name="kyc"
                    ref={register({ required: "This field is required" })}
                  />
                  <label className="custom-control-label" htmlFor="kyc">
                    Completed KYC
                  </label>
                  {errors.kyc && <span className="invalid">{errors.kyc.message}</span>}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="g">
                <div className="custom-control custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="longTerm"
                    name="longTerm"
                    ref={register({ required: "This field is required" })}
                  />
                  <label className="custom-control-label" htmlFor="longTerm">
                    Long term users
                  </label>
                  {errors.longTerm && <span className="invalid">{errors.longTerm.message}</span>}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="g">
                <div className="custom-control custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="follower"
                    name="follower"
                    ref={register({ required: "This field is required" })}
                  />
                  <label className="custom-control-label" htmlFor="follower">
                    Must be a follower
                  </label>
                  {errors.follower && <span className="invalid">{errors.follower.message}</span>}
                </div>
              </div>
            </div>
          </Col>

          <Col size="12">
            <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
              <li>
                <a
                  href="#cancel"
                  onClick={(ev) => {
                    ev.preventDefault();
                    props.prev();
                  }}
                  className="link link-light"
                >
                  Back
                </a>
              </li>
              <li>
                <Button color="outline-primary" className="btn-dim" type="submit">
                  Submit
                </Button>
              </li>
            </ul>
          </Col>
        </Form>
      </div>
    </div>
  );
};
export default Terms;
