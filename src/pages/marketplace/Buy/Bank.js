import { useContext, useEffect, useState } from "react";
import { Form } from "reactstrap";
import { UserContext } from "../../user/UserContext";
import { useForm } from "react-hook-form";
import { Button, Col, RSelect } from "../../../components/Component";
import { filterStatus } from "../../user/UserData";

const Bank = (props) => {
  console.log({ props });
  const { contextData } = useContext(UserContext);
  const [data, setData] = contextData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    balance: "",
    phone: "",
    status: "Active",
  });

  //   // unselects the data on mount
  //   useEffect(() => {
  //     let newData;
  //     newData = userData.map((item) => {
  //       item.checked = false;
  //       return item;
  //     });
  //     setData([...newData]);
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // function to reset the form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      balance: "",
      phone: "",
      status: "Active",
    });
  };

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { name, email, balance, phone } = submitData;
    let submittedData = {
      id: data.length + 1,
      avatarBg: "purple",
      name: name,
      role: "Customer",
      email: email,
      balance: balance,
      phone: phone,
      emailStatus: "success",
      kycStatus: "alert",
      lastLogin: "10 Feb 2020",
      status: formData.status,
      country: "Bangladesh",
    };
    setData([submittedData, ...data]);
    resetForm();
    props.next();
    // setModal({ edit: false }, { add: false });
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <div className="p-2">
      Bank
      <div className="mt-4">
        <Form className="row gy-4" noValidate onSubmit={handleSubmit(onFormSubmit)}>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Bank</label>
              <input
                className="form-control"
                type="text"
                name="name"
                defaultValue={formData.name}
                placeholder="Enter name"
                ref={register({ required: "This field is required" })}
              />
              {errors.name && <span className="invalid">{errors.name.message}</span>}
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Email </label>
              <input
                className="form-control"
                type="text"
                name="email"
                defaultValue={formData.email}
                placeholder="Enter email"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && <span className="invalid">{errors.email.message}</span>}
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Balance</label>
              <input
                className="form-control"
                type="number"
                name="balance"
                defaultValue={formData.balance}
                placeholder="Balance"
                ref={register({ required: "This field is required" })}
              />
              {errors.balance && <span className="invalid">{errors.balance.message}</span>}
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                defaultValue={formData.phone}
                ref={register({ required: "This field is required" })}
              />
              {errors.phone && <span className="invalid">{errors.phone.message}</span>}
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <label className="form-label">Status</label>
              <div className="form-control-wrap">
                <RSelect
                  options={filterStatus}
                  defaultValue={{ value: "Active", label: "Active" }}
                  onChange={(e) => setFormData({ ...formData, status: e.value })}
                />
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
export default Bank;
