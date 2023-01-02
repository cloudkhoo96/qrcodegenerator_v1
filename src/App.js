import "./App.css";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
 
  return (
    <>
      <div className="App">
       <Header />
        <QRCodeGenerator />
        </div>
        <Footer />
    </>
  );
}

export default App;
