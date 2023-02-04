import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Excercises from "./excercises/Excercises";
import Excercise3 from "./excercises/Excercise3";
import { Component1 } from "./excercises/Excercise4/Component1";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Excercises />
        <Excercise3 />
        <Component1 />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
