import React from "react";
import LogoLight2x from "../../images/logo2x.svg";
import LogoDark2x from "../../images/logo-dark2x.svg";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/dashboard`} className="logo-link">
      <img className="logo-light logo-img h-8 me-2" src={LogoLight2x} alt="logo" />
      <img className="logo-dark logo-img h-8 me-2" src={LogoDark2x} alt="logo" />
      <Badge color="secondary" className="badge-dim">
        Testnet
      </Badge>
    </Link>
  );
};

export default Logo;
