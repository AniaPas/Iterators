import React from "react";
import "./App.css";
import Excercises from "./excercises/Excercises";
import Excercise3 from "./excercises/Excercise3";
import { Component1 } from "./excercises/Excercise4/Component1";
import { Component2 } from "./excercises/Excercise4/Component2";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Excercises />
        <Excercise3 />
        <div className='separator'>Ex4. Component1:</div>
        <Component1 />
        <div className='separator'>Ex4. Component2:</div>
        <Component2 />
      </header>
    </div>
  );
}

export default App;
