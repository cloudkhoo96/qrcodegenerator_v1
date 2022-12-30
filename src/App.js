import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");
  const [showQr, setShowQr] = useState(false);

  function changeHandler(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="App">
        <h1>QR Code Generator</h1>
        <div>
          <QRCode value={text} />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type Here..."
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div>
        <footer>@CloudKhoo 2022</footer>
      </div>
    </>
  );
}

export default App;
