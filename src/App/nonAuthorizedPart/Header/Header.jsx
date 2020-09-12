import React from "react";
import NavigationBar from "./Navbar/NavigationBar";

class Header extends React.Component {
  state = {
    sideMenu: false,
  };

  manageSideMenu = () => {
    console.log(this.state.sideMenu);
    this.setState({
      sideMenu: !this.state.sideMenu,
    });
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <header>
        <NavigationBar
          showSideMenu={this.manageSideMenu}
          sideMenu={this.state.sideMenu}
        />
        <div></div>
      </header>
    );
  }
}

export default Header;
