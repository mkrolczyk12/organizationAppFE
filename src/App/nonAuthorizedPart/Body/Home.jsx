import React from "react";
import Radium from "radium";

import { Image } from "react-bootstrap";

import panel from "./images/panel.png";

const styles = {
  section1: {
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  section2: {
    backgroundColor: "#212529",
    color: "#929d9e",
    minHeight: "100vh",
  },
  sectionTitle: {
    fontSize: 60,
    "@media (max-width: 430px)": {
      fontSize: 50,
    },
  },
};

const Home = () => {
  return (
    <>
      <AdjustedFirstSection />
      <AdjustedSecondSection />
    </>
  );
};
export default Home;

const FirstSection = () => {
  return (
    <section className="p-0 m-0" id="AppPresentation" style={styles.section1}>
      <div className="row mr-0 p-0 pt-5 w-100 h-100">
        <div className="col-12 col-xl-4 p-5">
          <h1 style={{ fontWeight: "900" }}>
            Czym jest
            <p style={styles.sectionTitle}>MoneyApp?</p>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="d-none d-sm-block col-12 col-xl-8 w-75 h-75 m-auto pl-5 pb-5 p-xl-0">
          <Image
            src={panel}
            className="img-fluid w-100 h-100"
            alt="Panel page"
          />
        </div>
      </div>
    </section>
  );
};
const AdjustedFirstSection = Radium(FirstSection);

const SecondSection = () => {
  return (
    <section className="p-0 m-0" id="AppPresentation" style={styles.section2}>
      <div className="row mr-0 p-0 pt-5">
        <div className="col-12 p-5">
          <h1 style={{ color: "#fff", fontWeight: "900" }}>
            Jakie daje nam
            <p style={styles.sectionTitle}>Korzyści?</p>
          </h1>
          <div className="row">
            <div className="col-12 col-md-6 p-0 m-0">
              <p className="text-left m-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="col-12 col-md-6 p-0 m-0">
              <p className="text-left m-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const AdjustedSecondSection = Radium(SecondSection);
