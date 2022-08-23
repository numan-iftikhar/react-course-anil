import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <h1 style={{ height: "3rem" }}>{toggle ? "hello" : null}</h1>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
