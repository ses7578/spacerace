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
        history.push("/timeline70");
    }
    function clickMissions() {
        history.push("/missions");
    }

    return (
        <div className="page">
            <p className="Information">
                The Space Race occurred from the 1950s to the 1970s
                The main involved parties was the USSR and the US.

                While it is hard to determine a hard start and end date, I have decided to go with 1957 for a start
                as that is when the USSR launched Sputnik into space which is what started the process of both America
                and the USSR racing to get into space.
            </p>
            <p/>
            <button onClick = {click50}>1950s information</button>
            <p/>
            <button onClick = {click60}>1960s information</button>
            <p/>
            <button onClick = {click70}>1970s information</button>
            <p/>
            <button onClick = {clickMissions}>Space Missions</button>
        </div>
    );
}

export default Intro;
