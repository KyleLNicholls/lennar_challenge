import React from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { StartTrial } from "./StartTrial";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="notice">
        <span className="noticePill">WE'RE HIRING</span>
        <a href="/careers">Visit our careers page &gt;</a>
      </div>
      <div className="pageContent">
        <StartTrial />
      </div>
    </div>
  );
}

export default App;
