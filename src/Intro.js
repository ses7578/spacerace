import './App.css';
import React from "react";

function Intro() {

    return (
        <div className="page">
            <p/>
            <p className="Information">
                The Space Race occurred from the 1950s to the 1970s.
                The main involved parties was the USSR and the US.
            </p>
            <p className="Information">
                While it is hard to determine a hard start and end date, I have decided to go with 1957 for a start
                as that is when the USSR launched Sputnik into space which is what started the process of both America
                and the USSR racing to get into space.  I have also decided to go with 1970 as an end date as this was
                the last major event that occurred in the race to the moon.
            </p>
            <p/>
            <a href={"/timeline50"} className={"year"}>1957-1959</a>
            <p/>
            <a href={"/timeline60"} className={"year"}>1960-1970</a>
            <p/>
            <a href={"/missions"} className={"year"}>Space Missions</a>
        </div>
    );
}

export default Intro;
