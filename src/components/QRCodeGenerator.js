import React, { Fragment, useState } from "react";
import QRCode from "react-qr-code";
import classes from "./QRCodeGenerator.module.css"

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <div>
        <QRCode 
        value={text}
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        viewBox={`0 0 256 256`}
        />
      </div>
      <form>
      <input
        type="text"
        value={text}
        placeholder="Type Here..."
        onChange={(e) => {
          changeHandler(e);
        }}
        className={classes}
      />
      </form>
    </>
  );
};

export default QRCodeGenerator;
