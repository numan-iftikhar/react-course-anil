import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const handleHide = () => {
    setToggle(false);
  };
  const handleShow = () => {
    setToggle(true);
  };

  return (
    <div className="App">
      <h1 style={{ height: "3rem" }}>{toggle ? "hello" : null}</h1>
      <button onClick={handleHide}>
        Hide
      </button>
      <button onClick={handleShow}>
        Show
      </button>
    </div>
  );
}

export default App;
