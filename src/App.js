import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="container">
        <h1>Menu</h1>
        <div className="underline"></div>
      </div>
      <Menu />
    </>
  );
}

export default App;
