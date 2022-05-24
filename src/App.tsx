import React from "react";
import "./App.css";
import Greeting from "./Components/Greeting";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import RenderArray from "./Components/RenderArray";
import Counter from "./Components/Counter";
import RenderObject from "./Components/RenderObject";
import BoxChallenge from "./Components/BoxChallenge";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Meme />}></Route>
            <Route path="/greet" element={<Greeting />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/object" element={<RenderObject />}></Route>
            <Route path="/array" element={<RenderArray />}></Route>
            <Route path="/box" element={<BoxChallenge />}></Route>
            <Route path="/form" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
