import './App.css';
import {useHistory} from "react-router";
import React from "react";

function Intro() {

    let history = useHistory();

    function click50() {
        history.push("/timeline50");
    }

    function click60() {
        history.push("/timeline60");
    }
    function click70() {
        history.push("/timeline60");
    }

    return (
        <div className="page">
            <header className="App-header">
                <p>
                    The Space Race occurred from the 1950s to the 1970s
                    The main involved parties was the USSR and the US
                </p>
            </header>
            <p/>
            <button onClick = {click50}>1950s information</button>
            <p/>
            <button onClick = {click60}>1960s information</button>
            <p/>
            <button onClick = {click70}>1970s information</button>
        </div>
    );
}

export default Intro;
