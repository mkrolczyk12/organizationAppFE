import React from "react";

class SideBarMenu extends React.Component {
  render() {
    return (
      <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        onClick={this.props.handleSideBarMenuDisplay}
        href="#"
      >
        <i className="navbar-toggler-icon"></i>
      </button>
    );
  }
}
export default SideBarMenu;
