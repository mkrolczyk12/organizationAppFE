import React from "react";
import Radium from "radium";

const styles = {
  button: {
    border: "none",
    ":focus": {
      outline: "none",
      outlineOffset: "none",
      border: "none",
      boxShadow: "none",
    },
  },
};
class SideBarMenu extends React.Component {
  render() {
    return (
      <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        onClick={this.props.handleSideBarMenuDisplay}
        style={styles.button}
      >
        <i
          key="sideBarMenuButton"
          className="navbar-toggler-icon"
          style={styles.button}
        ></i>
      </button>
    );
  }
}
export default Radium(SideBarMenu);
