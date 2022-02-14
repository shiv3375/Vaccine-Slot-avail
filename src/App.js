import "./App.css";
import State from "./compoents/state";
import React, { useState } from "react";
import Districts from "./compoents/Districts";

function App() {
  let [currStateId, setCurrStateId] = useState("");

  return (
    <div className="App container">
      <div className="row">
        <State
          className="col-3"
          currStateId={currStateId}
          setCurrStateId={setCurrStateId}
        />
        <Districts className="col-3" currStateId={currStateId} />
      </div>
    </div>
  );
}

export default App;
