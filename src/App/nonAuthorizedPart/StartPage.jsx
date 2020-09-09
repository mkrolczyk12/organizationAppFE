import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer";

class StartPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main style={{ backgroundColor: "orange", minHeight: "80vh" }}>
          <div>StartPage</div>
          <div>temporary</div>
        </main>
        <Footer />
      </>
    );
  }
}

export default StartPage;
