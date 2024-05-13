import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(evt) => setTextInput(evt.target.value)} />
      <p>{textInput}</p>
    </div>
  );
}

export default App;
