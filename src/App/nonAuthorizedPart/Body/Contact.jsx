import React from "react";
import { Image } from "react-bootstrap";
import phone from "./phone.png";
import email from "./email.png";
import skype from "./skype.png";

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

const Options = () => {
  return (
    <div className="col-12 d-md-flex flex-grow-1">
      {options.map((each, index) => {
        return (
          <div
            key={index}
            className="border border-white col-12 col-md-4 m-2 mb-5 h-auto"
          >
            <div>
              <Image src={each.img} alt="" />
              {each.header}
            </div>
            <div>{each.content}</div>
          </div>
        );
      })}
    </div>
  );
};

const Contact = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{ minHeight: "inherit", backgroundColor: "pink" }}
    >
      <div
        className="row h-100 text-center align-middle"
        style={{ minHeight: "inherit" }}
      >
        <div className="col-12 mb-3 text-center">
          <h1>Kontakt dla klientów</h1>
          <p>Masz pytania dotyczące aplikacji? Skontaktuj się ze mną!</p>
        </div>
        <Options />
      </div>
    </div>
  );
};

export default Contact;
