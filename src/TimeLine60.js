import './App.css';
import React from "react";

function Time60() {

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
            <a href={"#1970"} className={"year"}>1970</a>
            <p/>
            <p className="Title" id={"1960"}>1960</p>
            <p className={"Information"}>
                <a href={"/missions#Sputnik"} className={"mission"}>Sputnik 5</a> was launched on August 19, 1960 by the
                USSR. This was the first mission that was launched into space<sup><a href={"#1"} className={"reference"}>1</a></sup>
                carrying animals that were returned successfully
            </p>
            <p className="Title" id={"1961"}>1961</p>
            <p className={"Information"}>
                <a href={"/missions#MercuryRedstone"} className={"mission"}>Mercury-Redstone 2</a> was launched on
                January 21 1961 by the US. This was the first mission that was launched into space
                <sup><a href={"#2"} className={"reference"}>2</a></sup> with humanoids, chimpanzees.
            </p>
            <p className={"Information"}>
                <a href={"/missions#Vostok"} className={"mission"}>Vostok 1</a> was launched on April 12, 1961 by the
                USSR. This was the first mission that was launched into space with humans.
                <sup><a href={"#3"} className={"reference"}>3</a></sup>
            </p>
            <p className="Title" id={"1962"}>1962</p>
            <p className={"Information"}>
                No major space missions occurred trying to get to the moon
            </p>
            <p className="Title" id={"1963"}>1963</p>
            <p className={"Information"}>
                Minor Vostok missions brought women into space, along with longer space missions.
            </p>
            <p className="Title" id={"1964"}>1964</p>
            <p className={"Information"}>
                A minor space mission by the USSR brought the first crew of astronauts into space instead of a
                single astronaut.
            </p>
            <p className="Title" id={"1965"}>1965</p>
            <p className={"Information"}>
                The United States launched the Gemini Program which brought a large amount of space craft with humans
                into space.
            </p>
            <p className="Title" id={"1966"}>1966</p>
            <p className={"Information"}>
                No major space missions occurred in the progress of getting humans to the moon.
            </p>
            <p className="Title" id={"1967"}>1967</p>
            <p className={"Information"}>
                No major space missions occurred in the progress of getting humans to the moon.
            </p>
            <p className="Title" id={"1968"}>1968</p>
            <p className={"Information"}>
                <a href={"/missions#Apollo"} className={"mission"}>Apollo 8</a> was launched on December 21, 1968 by the
                US. This was the first mission involving humans that orbited the moon.  They broadcasted back to Earth
                on Christmas Day.
                <sup><a href={"#4"} className={"reference"}>4</a></sup>
            </p>
            <p className="Title" id={"1969"}>1969</p>
            <p className={"Information"}>
                <a href={"/missions#Apollo"} className={"mission"}>Apollo 11</a> was launched on July 16, 1969 by the
                US. This was the first time humans landed on the moon.  This is one of the most famous space missions of
                the spacerace.
                <sup><a href={"#5"} className={"reference"}>5</a></sup>
            </p>
            <p className={"Title"} id={"1970"}>1970</p>
            <p className={"Information"}>
                <a href={"/missions#Apollo"} className={"mission"}>Apollo 13</a> was launched on July 16, 1969 by the
                US. This was the first time humans landed on the moon.  This is one of the most famous space missions of
                the spacerace.
                <sup><a href={"#6"} className={"reference"}>6</a></sup>
            </p>
            <a href={"/intro"} className={"year"}>Go Back</a>
            <p id={"references"}>
                <p className={"Information"}>References</p>
                <a
                    href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1960-011A"}
                    className={"link"}
                    id={"1"}
                    target={"blank"}>
                    1. Sputnik 5
                </a>
                <p/>
                <a
                    href={"https://californiasciencecenter.org/exhibits/air-space/humans-in-space/mercury-redstone-2"}
                    className={"link"}
                    id={"2"}
                    target={"blank"}>
                    2. Mercury-Redstone 2
                </a>
                <p/>
                <a
                    href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1961-012A"}
                    className={"link"}
                    id={"3"}
                    target={"blank"}>
                    3. Vostok 1
                </a>
                <p/>
                <a
                    href={"https://www.nasa.gov/mission_pages/apollo/missions/apollo8.html"}
                    className={"link"}
                    id={"4"}
                    target={"blank"}>
                    4. Apollo 8
                </a>
                <a
                    href={"https://airandspace.si.edu/explore-and-learn/topics/apollo/apollo-program/landing-missions/apollo11.cfm"}
                    className={"link"}
                    id={"5"}
                    target={"blank"}>
                    5. Apollo 11
                </a>
                <a
                    href={"https://airandspace.si.edu/explore-and-learn/topics/apollo/apollo-program/landing-missions/apollo13.cfm"}
                    className={"link"}
                    id={"6"}
                    target={"blank"}>
                    6. Apollo 13
                </a>
            </p>
        </div>
    );
}

export default Time60;
