import React from "react";
import Radium from "radium";

import { Image } from "react-bootstrap";

import phone from "./images/phone.png";
import email from "./images/email.png";
import skype from "./images/skype.png";

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#212529",
    color: "#fff",
  },
  contactOption: {
    border: "1px solid #3eb650",
    maxWidth: "500px",
    color: "#fff",
    ":hover": {
      backgroundColor: "#3eb650",
      color: "rgba(0,0,0,.8)",
    },
  },
  sectionMainTitle: {
    fontWeight: "900",
    fontSize: 60,
  },
};
const Contact = () => {
  return (
    <div className="row m-0 p-2 pb-1 p-md-5 text-center" style={styles.page}>
      <div className="col-12 mb-1 mt-5">
        <h1 style={styles.sectionMainTitle}>Kontakt dla klientów</h1>
        <p>Masz pytania dotyczące aplikacji? Skontaktuj się ze mną!</p>
      </div>
      <ContactOptions />
    </div>
  );
};
export default Radium(Contact);

const Options = () => {
  return (
    <div className="col-12 d-lg-flex flex-grow-1 position-relative p-4">
      {options.map((each, index) => {
        return (
          <div
            key={index}
            // className="border border-white m-auto col-12 col-lg-3 m-2 mb-5 p-5"
            className="col-12 col-lg-3 p-5 mb-5 mr-auto ml-auto text-center"
            style={styles.contactOption}
          >
            <Image src={each.img} alt="" className="p-1 mb-1" />
            {each.header}
            <p>
              <b>{each.content}</b>
            </p>
          </div>
        );
      })}
    </div>
  );
};
const ContactOptions = Radium(Options);

const options = [
  {
    img: phone,
    header: "Zadzwoń",
    content: "503 699 962",
  },
  {
    img: email,
    header: "Napisz wiadomość",
    content: "kontakt@MK.pl",
  },
  {
    img: skype,
    header: "Porozmawiajmy",
    content: "skype: mkrolczyk12",
  },
];
