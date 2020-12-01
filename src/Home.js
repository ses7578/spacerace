import logo from './spaceRaceLogo.jpg';
import './App.css';
import React from "react";

function Home() {

    return (
        <div className="page">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p/>
                <a href={"/intro"} className={"year"}>Click to Enter</a>
            </header>
        </div>
    );
}

export default Home;
