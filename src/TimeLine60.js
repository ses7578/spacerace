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
            <label>   </label>
            <a href={"#1961"} className="year">1961</a>
            <label>   </label>
            <a href={"#1962"} className="year">1962</a>
            <label>   </label>
            <a href={"#1963"} className="year">1963</a>
            <label>   </label>
            <a href={"#1964"} className="year">1964</a>
            <label>   </label>
            <a href={"#1965"} className="year">1965</a>
            <label>   </label>
            <a href={"#1966"} className="year">1966</a>
            <label>   </label>
            <a href={"#1967"} className="year">1967</a>
            <label>   </label>
            <a href={"#1968"} className="year">1968</a>
            <label>   </label>
            <a href={"#1969"} className="year">1969</a>
            <header className="App-header" id={"1960"}>1960</header>
            <p>
                Sputnik was launched
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
        </div>
    );
}

export default Time60;
