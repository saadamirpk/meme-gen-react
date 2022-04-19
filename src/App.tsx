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

function App() {
    return (
        <React.Fragment>
            <Header />
            <Meme />
        </React.Fragment>
    );
}

export default App;
