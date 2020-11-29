import './App.css';
import {useHistory} from "react-router";
import React from "react";
import sputnik from "./imgs/sputnik.jpg"

function Time50() {

    let history = useHistory();

    function clickBack() {
        history.push("/intro");
    }

    return (
        <div className="page">
            <a href={"#1958"} className="year">1958</a>
            <label>   </label>
            <a href={"#1959"} className="year">1959</a>
            <p className="Title">1957</p>
            <p className="Information">
                Sputnik was launched on October 4, 1957 by the USSR, which eventually caused the entire space race.
                This was the first satellite that was launched into space
            </p>
            <img
                alt={"Sputnik"}
                src={sputnik}
                style={{ width: "50%", height: "{50%", margin: "10px" }}
            />
            <header className = "App-header" id={"1958"}>1958</header>
            <p>
                NASA was created on July 29, 1958 by President Eisenhower in response to the launch of Sputnik
                NASA had 8 main goals:
            </p>
            <p>
                1. Expansion of Human Knowledge
            </p>
            <p>
                2. Improvement of Usefulness and efficiency of aeronautical and space vehicles
            </p>
            <p>
                3.asfdasfdsfad
            </p>
            <p>
                4.asfdasfdsfad
            </p>
            <p>
                5.asfdasfdsfad
            </p>
            <p>
                6.asfdasfdsfad
            </p>
            <p>
                7.asfdasfdsfad
            </p>
            <p>
                8.asfdasfdsfad
            </p>


            <header className = "App-header" id={"1959"}>1959</header>
            <p>
                NASA was created
            </p>
            <button onClick = {clickBack}>Go Back</button>
        </div>
    );
}

export default Time50;
