import React from "react";
import logoImg from "./assets/logo.svg";
import "./App.css";

const descriptions = ["Fundamental", "Core", "Amazing"];

function getRandomDescription() {
  const randomIndex =
    Math.floor((Math.random() * 1000) % descriptions.length) + 1;
  return descriptions[randomIndex];
}

function Header() {
  const description = getRandomDescription();

  return (
    <header>
      <img src={logoImg} className="App-logo" alt="logo" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>Lets do this.</main>
    </div>
  );
}

export default App;
