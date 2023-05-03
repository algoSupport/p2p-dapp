import { useContext, useState } from "react";
import { Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Button, Col, RSelect } from "../../../components/Component";
import { OfferContext } from "../../user/OfferContext";
import TokenSelect, { Currencies } from "../../../components/swap/TokenSelect";
import { TokenList } from "../../../components/swap/TokenSelect";

export const filterStatus = [
  { value: "fixed_price", label: "Fixed Price" },
  { value: "percent", label: "Percent" },
];
const Price = (props) => {
  const { contextData } = useContext(OfferContext);
  const [data, setData] = contextData;
  const [token, setToken] = useState(TokenList[0]);
  const [currency, setCurrency] = useState(Currencies[0]);
  const [formData, setFormData] = useState(data);

  const onFormSubmit = (submitData) => {
    setData({
      price: submitData.price,
      token: token.symbol,
      currency: currency.symbol,
      type: formData.type,
    });
    props.next();
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <div className="p-2">
      <div className="mt-4">
        <Form className="row gy-4" noValidate onSubmit={handleSubmit(onFormSubmit)}>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Asset</label>
              <TokenSelect selectedToken={token} setSelectedToken={setToken} setTokenClicked={() => {}} isBuy={false} />
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Currency </label>
              <TokenSelect
                selectedToken={currency}
                setSelectedToken={setCurrency}
                setTokenClicked={() => {}}
                isBuy={true}
              />
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Type</label>
              <div className="form-control-wrap">
                <RSelect
                  options={filterStatus}
                  defaultValue={filterStatus[0]}
                  onChange={(e) => setFormData({ ...formData, type: e.value })}
                />
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Price</label>
              <input
                className="form-control"
                type="number"
                name="price"
                defaultValue={formData.price}
                placeholder="Balance"
                ref={register({ required: "This field is required" })}
              />
              {errors.price && <span className="invalid">{errors.price.message}</span>}
            </div>
          </Col>

          <Col size="12">
            <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
              <li>
                <Button color="primary" size="md" type="submit">
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
export default Price;
