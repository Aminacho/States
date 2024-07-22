import "./App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Persones from "./components/Persones";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Button onClick={() => setShow(!show)} variant="outline-primary">{show? "Hide" :"Show"} Profiles</Button>
      {show && <Persones />}
    </div>
  );
}

export default App;
