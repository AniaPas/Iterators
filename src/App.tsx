import React from "react";
import "./App.css";
import Excercises from "./excercises/Excercises";
import Excercise3 from "./excercises/Excercise3";
import { Component1 } from "./excercises/Excercise4/Component1";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Excercises />
        <Excercise3 />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
