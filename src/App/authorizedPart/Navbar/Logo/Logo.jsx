import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="navbar-brand flex-grow-1 flex-md-grow-0" to="/dashboard">
      <h3>MoneyApp</h3>
    </Link>
  );
};

export default Logo;
