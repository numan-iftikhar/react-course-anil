import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [checked, setChecked] = useState(false);

  console.log([name, option, checked]);

  return (
    <div className="App">
      <h2>Please Fill the Form Below</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <select onChange={(e) => setOption(e.target.value)}>
        <option value="">Select Option</option>
        <option value="">hello</option>
        <option value="">mellow</option>
        <option value="">fellow</option>
      </select>
      <br />
      <br />
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <span>Terms and Conditions</span>
      <br />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;
