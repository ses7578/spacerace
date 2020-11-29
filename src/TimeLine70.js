import './App.css';
import {useHistory} from "react-router";
import React from "react";

function Time70() {
    let history = useHistory();

    function clickBack() {
        history.push("/intro");
    }

    return (
        <div className="page">
            <a href={"#1970"} className="year">1970</a>
            <label>   </label>
            <a href={"#1971"} className="year">1971</a>
            <label>   </label>
            <a href={"#1972"} className="year">1972</a>
            <label>   </label>
            <a href={"#1973"} className="year">1973</a>
            <label>   </label>
            <a href={"#1974"} className="year">1974</a>
            <label>   </label>
            <a href={"#1975"} className="year">1975</a>
            <label>   </label>
            <a href={"#1976"} className="year">1976</a>
            <label>   </label>
            <a href={"#1977"} className="year">1977</a>
            <label>   </label>
            <a href={"#1978"} className="year">1978</a>
            <label>   </label>
            <a href={"#1979"} className="year">1979</a>
            <header className="App-header" id={"1970"}>1970</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1971"}>1971</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1972"}>1972</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1973"}>1973</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1974"}>1974</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1975"}>1975</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1976"}>1976</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1977"}>1977</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1978"}>1978</header>
            <p>
                Sputnik was launched
            </p>
            <header className="App-header" id={"1979"}>1979</header>
            <p>
                Sputnik was launched
            </p>
            <button onClick = {clickBack}>Go Back</button>
        </div>
    );
}

export default Time70;
