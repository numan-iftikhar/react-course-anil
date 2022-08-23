import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const sayHello = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={sayHello}>Count</button>
    </div>
  );
}

export default App;
