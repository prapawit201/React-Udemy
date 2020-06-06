import React from "react";
import "./App.css";
import Person from "./Person/Person";
function App() {
  return (
    <div className="App">
      <h1>Hi! I'm a react app</h1>
      <Person name="Babe" age="21" birth="07-04-1999">
        I'm SIT KMUTT
      </Person>
    </div>
  );
}

export default App;
