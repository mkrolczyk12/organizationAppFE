import React from "react";

/* eslint-disable react/react-in-jsx-scope */
const Footer = () => {
  return (
    <>
      <div
        className="m-0 p-0 pt-2 text-center bg-light"
        style={{
          minHeight: "20vh",
          borderTop: "2px double #000",
          borderTopWidth: "medium",
          top: "80%",
        }}
      >
        <p>Company © MK. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
