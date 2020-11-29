import './App.css';
import {useHistory} from "react-router";
import React from "react";

function Time60() {
    let history = useHistory();

    function clickBack() {
        history.push("/info");
    }

    return (
        <div className="page">
            <header className="App-header">
                <p>
                    This is the 1960s page
                </p>
            </header>
            <button onClick = {clickBack}>Go Back</button>
        </div>
    );
}

export default Time60;
