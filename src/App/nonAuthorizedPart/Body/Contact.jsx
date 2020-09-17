import React from "react";
import { Image } from "react-bootstrap";
import phone from "./images/phone.png";
import email from "./images/email.png";
import skype from "./images/skype.png";

const Contact = () => {
  return (
    <div
      className="row m-0 p-5 text-center"
      style={{ minHeight: "100vh", backgroundColor: "pink" }}
    >
      <div className="col-12 mb-1 mt-5">
        <h1>Kontakt dla klientów</h1>
        <p>Masz pytania dotyczące aplikacji? Skontaktuj się ze mną!</p>
      </div>
      <Options />
    </div>
  );
};
export default Contact;

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
    <div className="col-12 d-md-flex mb-5 flex-grow-1">
      {options.map((each, index) => {
        return (
          <div
            key={index}
            className="border border-white col-12 col-md-4 m-2 mb-5 p-5"
          >
            <div className="">
              <Image src={each.img} alt="" className="p-1 mb-1" />
              {each.header}
            </div>
            <p>
              <b>{each.content}</b>
            </p>
          </div>
        );
      })}
    </div>
  );
};
