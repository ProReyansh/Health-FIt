import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import Symptoms from "./components/symptoms";
import Vitals from "./components/vitals";
import Examination from "./components/examination";
import MedHistory from "./components/med-history";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Symptoms />
        <Vitals />
        <Examination />
        <MedHistory />
        <Footer />
      </div>
    </div>
  );
}

export default App;
