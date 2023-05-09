import { useContext } from "react";
import { Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Button, Col } from "../../../components/Component";
import { OfferContext } from "../../user/OfferContext";

export const filterStatus = [
  { value: "fixedPrice", label: "Fixed Price" },
  { value: "percent", label: "Percent" },
];
const Payment = (props) => {
  const { contextData } = useContext(OfferContext);
  const [data, setData] = contextData;

  const onFormSubmit = (submitData) => {
    if (submitData.minAmount > submitData.maxAmount) {
      setError("minAmount", { message: "Min amount should be smaller than Max amount" });
      return;
    }

    setData({
      ...data,
      ...submitData,
    });
    props.next();
  };

  const { errors, setError, register, handleSubmit } = useForm();

  return (
    <div className="p-2">
      <div className="mt-4">
        <Form className="row gy-4" noValidate onSubmit={handleSubmit(onFormSubmit)}>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Min Amount</label>
              <input
                className="form-control"
                type="number"
                name="minAmount"
                defaultValue={data.minAmount}
                placeholder="Min Amount"
                ref={register({ required: "This field is required" })}
              />
              {errors.minAmount && <span className="invalid">{errors.minAmount.message}</span>}
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Max Amount </label>
              <input
                className="form-control"
                type="number"
                name="maxAmount"
                defaultValue={data.maxAmount}
                placeholder="Max Amount"
                ref={register({ required: "This field is required" })}
              />
              {errors.maxAmount && <span className="invalid">{errors.maxAmount.message}</span>}
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
                <Button color="primary" className="btn" type="submit">
                  Proceed
                </Button>
              </li>
            </ul>
          </Col>
        </Form>
      </div>
    </div>
  );
};
export default Payment;
