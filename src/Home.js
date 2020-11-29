import logo from './spaceRaceLogo.jpg';
import { useHistory } from "react-router";
import './App.css';
import React from "react";

function Home() {
    let history = useHistory();

    function clickInfo() {
        history.push("/intro");
    }

    return (
        <div className="page">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is the home page
                </p>
                <button onClick = {clickInfo}>Click To Enter</button>
            </header>
        </div>
    );
}

export default Home;
