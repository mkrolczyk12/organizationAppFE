import React from "react";
import "./styles.css";

const Features = () => {
  const styles = {
    section1: {
      backgroundColor: "grey",
      minHeight: "100vh",
    },
    section2: {
      backgroundColor: "pink",
      minHeight: "100vh",
    },
  };

  return (
    <div className="m-0 p-0" style={styles.container}>
      <section className="p-5 m-0" style={styles.section1}>
        <div className="row m-auto">
          <h1 className="col-12 text-center p-3">
            Innowacja w procesach płatności
          </h1>
          <p className="col-md-6 m-auto text-center font-italic justify-content-center">
            Protokół Bitcoin nie polega jedynie na przesyłaniu pieniędzy z A do
            B. Posiada wiele funkcji i otwiera mnóstwo możliwości wciąż
            odkrywanych przez społeczność. Oto niektóre z obecnie opracowywanych
            technologii - w niektórych przypadkach zostały one wdrożone w życie
            jako prawdziwy produkt bądź usługa. Najbardziej interesujące
            zastosowania Bitcoin prawdopodobnie nie zostały jeszcze odkryte.
          </p>
        </div>
      </section>
      <section className="p-md-5 m-0 pb-5 pb-md-0" style={styles.section2}>
        <div className="row m-0 p-0 m-auto">
          <div className="col-12 p-md-0">
            <h1 className="m-auto text-center">
              <p>Najważniejsze </p>
              <p style={{ fontSize: 60 }}>Funkcjonalności</p>
            </h1>
            <div className="row container-fluid m-auto">
              <ListOfFeatures />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "feature1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dapibus ligula, quis egestas dui. Sed pharetra finibus lacinia. Donec a lectus vulputate orci dapibus euismod sed ut nunc. Sed sollicitudin interdum lectus, quis fringilla sem efficitur non. Praesent ut consequat neque, ac laoreet nunc. Nam velit enim, iaculis at bibendum tempus, cursus ultricies tortor. Phasellus quis laoreet odio, ac auctor ante. Sed lorem felis, volutpat ultricies massa vulputate, efficitur",
  },
  {
    title: "feature2",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, ",
  },
  {
    title: "feature3",
    description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    title: "feature4",
    description:
      "Lorem Ipsum is simply dummy text of type  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "feature5",
    description:
      "professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
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
      <div key={index} className="feature col-md-6 col-xl-4 p-2 m-auto">
        <h1 className="m-auto text-center mb-2">{feature.title}</h1>
        <p className="m-auto text-center p-3">{feature.description}</p>
      </div>
    );
  });
};

export default Features;
