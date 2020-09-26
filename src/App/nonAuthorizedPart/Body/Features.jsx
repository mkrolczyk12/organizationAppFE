import React from "react";
import Radium from "radium";

const styles = {
  section1: {
    backgroundColor: "#fff",
    color: "rgba(0,0,0,.9)",
    minHeight: "100vh",
  },
  section2: {
    backgroundColor: "#212529",
    color: "#fff",
    minHeight: "100vh",
  },
  sectionMainTitle: {
    fontWeight: "900",
  },
  feature: {
    width: "400px",
    height: "400px",
    color: "#fff",
    marginBottom: 10,
    overflowY: "auto",
    overflowX: "hidden",
    transition: "0.3s",
    ":hover": {
      borderRadius: 5,
      border: "1px solid #fff",
    },
    ":focus": {
      borderRadius: 5,
      border: "1px solid #fff",
    },
  },
  featureTitle: {
    color: "#3eb650",
    transition: "0.3s",
  },
};

const Features = () => {
  return (
    <div className="m-0 p-0" style={styles.container}>
      <section className="p-5 m-0" style={styles.section1}>
        <h1
          className="col-12 text-center p-0 p-md-3 mb-3 mb-md-1"
          style={styles.sectionMainTitle}
        >
          Innowacja w procesach płatności
        </h1>
        <p className="col-md-6 m-auto text-center font-italic justify-content-center">
          Protokół Bitcoin nie polega jedynie na przesyłaniu pieniędzy z A do B.
          Posiada wiele funkcji i otwiera mnóstwo możliwości wciąż odkrywanych
          przez społeczność. Oto niektóre z obecnie opracowywanych technologii -
          w niektórych przypadkach zostały one wdrożone w życie jako prawdziwy
          produkt bądź usługa. Najbardziej interesujące zastosowania Bitcoin
          prawdopodobnie nie zostały jeszcze odkryte.
        </p>
      </section>
      <section className="p-md-5 m-0 pb-5 pb-md-0" style={styles.section2}>
        <h1
          className="m-auto mb-1 mt-2 pt-5 pt-md-0 pb-4 pb-md-5 text-center"
          style={styles.sectionMainTitle}
        >
          Najważniejsze Funkcjonalności
        </h1>
        <div className="row container-fluid ml-auto mr-auto">
          {<AdjustedListOfFeatures />}
        </div>
      </section>
    </div>
  );
};
export default Radium(Features);

const features = [
  {
    title: "feature1",
    description:
      "finibus lacinia. Donec a lectus vulputate orci quis fringilla sem ac laoreet nunc. Nam velit enim, iaculis at bibendum tempus, cursus ultricies tortor. Phasellus quis laoreet odio, ac auctor ante. Sed lorem felis, volutpat ultricies massa vulputate, efficitur",
  },
  {
    title: "feature2",
    description:
      "There are many variations by injected humour, or randomised words going to use a sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, ",
  },
  {
    title: "feature3",
    description:
      "randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    title: "feature4",
    description:
      "Lorem Ipsum is simply dummy text of type  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "feature5",
    description:
      "professor at Hampden-Sydney College in Virginia, of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    title: "feature6",
    description:
      "randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model",
  },
];

const ListOfFeatures = () => {
  return features.map((feature, index) => {
    return (
      <div
        key={index}
        className="col-md-6 col-xl-4 p-2 ml-auto mr-auto"
        style={styles.feature}
      >
        <h1
          key={feature.title}
          className="m-auto text-center mb-2 font-italic"
          style={styles.featureTitle}
        >
          {feature.title}
        </h1>
        <p className="m-auto text-center p-3">{feature.description}</p>
      </div>
    );
  });
};
const AdjustedListOfFeatures = Radium(ListOfFeatures);
