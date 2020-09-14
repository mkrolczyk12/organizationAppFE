import React from "react";
import { Image } from "react-bootstrap";
import panel from "./images/panel.png";

const Home = () => {
  const styles = {
    section1: {
      backgroundColor: "pink",
      minHeight: "inherit",
    },
    section2: {
      backgroundColor: "orange",
      minHeight: "inherit",
    },
  };
  return (
    <>
      <section className="p-0 m-0" id="AppPresentation" style={styles.section1}>
        <div className="row mr-0 p-0 pt-5 w-100 h-100">
          <div className="col-12 col-xl-4 p-5">
            <h1>
              Czym jest
              <p style={{ fontSize: 60 }}>MoneyApp?</p>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
      <section className="p-0 m-0" id="AppPresentation" style={styles.section2}>
        <div className="row mr-0 p-0 pt-5">
          <div className="col-12 p-5">
            <h1>
              Jakie daje nam
              <p style={{ fontSize: 60 }}>Korzyści?</p>
            </h1>
            <div className="row">
              <div className="col-12 col-md-6 p-0 m-0">
                <p className="text-left m-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="col-12 col-md-6 p-0 m-0">
                <p className="text-left m-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
