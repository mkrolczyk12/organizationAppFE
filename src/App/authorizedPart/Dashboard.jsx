import React, { Component } from "react";
import Keycloak from "keycloak-js";

import Navbar from "./Navbar/Navbar";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import MainContent from "./MainContent/MainContent";

class Dashboard extends Component {
  state = {
    keycloak: null,
    authenticated: false,
    showSideBarMenu: false,
  };

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    keycloak
      .init({ onLoad: "login-required", promiseType: "native" })
      .then((authenticated) => {
        this.setState({ keycloak: keycloak, authenticated: authenticated });
      });
  }

  handleSideBarMenuDisplay = () => {
    this.setState({
      showSideBarMenu: !this.state.showSideBarMenu,
    });
  };

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <>
            <div
              className={
                this.state.showSideBarMenu
                  ? "sb-nav-fixed sb-sidenav-toggled"
                  : "sb-nav-fixed"
              }
            >
              <Navbar
                handleSideBarMenuDisplay={this.handleSideBarMenuDisplay}
              />
              <div id="layoutSidenav">
                {/* <SideBarMenu
                  username={this.state.keycloak
                    .loadUserInfo()
                    .then((userInfo) =>
                      console.log(userInfo.preferred_username)
                    )}
                /> */}
                <SideBarMenu />
                <MainContent />
              </div>
            </div>
          </>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Loading page...</div>;
  }
}
export default Dashboard;
