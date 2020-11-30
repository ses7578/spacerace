import './App.css';
import {useHistory} from "react-router";
import React from "react";

function Time60() {
    let history = useHistory();

    function clickBack() {
        history.push("/intro");
    }

    return (
        <div className="page">
            <a href={"#1960"} className="year">1960</a>
            <a href={"#1961"} className="year">1961</a>
            <a href={"#1962"} className="year">1962</a>
            <a href={"#1963"} className="year">1963</a>
            <a href={"#1964"} className="year">1964</a>
            <a href={"#1965"} className="year">1965</a>
            <a href={"#1966"} className="year">1966</a>
            <a href={"#1967"} className="year">1967</a>
            <a href={"#1968"} className="year">1968</a>
            <a href={"#1969"} className="year">1969</a>
            <p/>
            <p className="Title" id={"1960"}>1960</p>
            <p className={"Information"}>
                <a href={"/missions#Sputnik"} className={"mission"}>Sputnik 5</a> was launched on August 19, 1960 by the
                USSR. This was the first mission that was launched into space<sup><a href={"#1"} className={"reference"}>1</a></sup>
                carrying animals that were returned successfully
            </p>
            <header className="App-header" id={"1961"}>1961</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1962"}>1962</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1963"}>1963</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1964"}>1964</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1965"}>1965</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1966"}>1966</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1967"}>1967</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1968"}>1968</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1969"}>1969</header>
            <p>
                Sputnik was launched
            </p>
            <button onClick = {clickBack}>Go Back</button>
            <a
                href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1960-011A"}
                className={"link"}
                id={"1"}
                target={"blank"}>
                Sputnik 5
            </a>
        </div>
    );
}

export default Time60;
