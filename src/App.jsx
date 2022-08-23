import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0)
  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <div className="App">
      <h1 style={{height: '3rem'}}>{data}</h1>
      <input onChange={handleChange} type="text"/>
    </div>
  );
}

export default App;
