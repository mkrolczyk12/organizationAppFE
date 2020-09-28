import React from "react";
import Radium from "radium";

import { Link } from "react-router-dom";

const styles = {
  logo: {
    color: "#3eb650",
  },
};
const Logo = () => {
  return (
    <Link className="navbar-brand flex-grow-1 flex-md-grow-0" to="/dashboard">
      <h3 style={styles.logo}>MoneyApp</h3>
    </Link>
  );
};

export default Radium(Logo);
