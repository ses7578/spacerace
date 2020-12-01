import logo from './spaceRaceLogo.jpg';
import './App.css';
import React from "react";

function Home() {

    return (
        <div className="page">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p/>
                <a href={"/spacerace/intro"} className={"year"}>Click to Learn About the Space Race</a>
            </header>
        </div>
    );
}

export default Home;
