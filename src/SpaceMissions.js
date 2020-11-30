import './App.css';
import {useHistory} from "react-router";
import React from "react";
function Missions() {

    let history = useHistory();

    function clickBack() {
        history.push("/intro");
    }

    return (
        <div className="page">
            <a href={"#Sputnik"} className="year">Sputnik</a>
            <a href={"#Luna"} className="year">Luna</a>
            <a href={"#MercuryRedstone"} className="year">Mercury-Redstone</a>
            <a href={"#Gemini"} className={"year"}>Gemini</a>
            <a href={"#Apollo"} className={"year"}>Apollo</a>
            <p/>
            <p className="Title" id={"Sputnik"}>Sputnik</p>
            <p className="Information">
                Sputnik 1 was launched on October 4, 1957<sup><a href={"#1"} className={"reference"}>1</a></sup> by the
                USSR, it would end up being the first of 5 different missions of the same name.  The mission of Sputnik 1 was
                to retrieve information about the the Earth's atmosphere and to retrieve information that would help
                in future missions by other satellites.
            </p>
            <p/>
            <p className={"Information"}>
                Sputnik 2 is one of the most famous space missions in the world, it was the space mission that involved
                Laika the dog, the first creature to be launched into space<sup><a href={"#2"} className={"reference"}>2</a></sup>.
                This mission was to retrieve information about how long a living creature could live in space.
                It was believed that Laika would live in space for 10 days and then return but an
                unfortunate circumstance caused her to die approximately 2 days into the mission due to a temperature
                issue.  This temperature issue was caused when some of the thermal insulation was torn loose,
                causing the cabin Laika was in to heat up to over 100 degrees.
            </p>
            <p className={"Information"}>
                Sputnik 5 was the final successful and valuable Sputnik Mission.  It occurred in 1960<sup><a href={"#3"} className={"reference"}>3</a></sup>
                and it was the first mission that successfully launched animals into space and they returned alive and
                healthy.  The dogs Strelka and Belka were launched into space and returned, alive, one day later proving
                that living creatures could go into space and return safely.
            </p>
            <p className = "Title" id={"Luna"}>Luna</p>
            <p className={"Information"}>
                Luna 1 was the first spacecraft that reached the moon.  It was launched on January 2 1959<
                sup><a href={"#4"} className={"reference"}>4</a></sup>.  Its primary mission was to measure the
                pressures that the inside of the spacecraft would feel to help to determine if life would be able to
                take to space and to study the gasses that existed in space.  Luna 1 determined that the Moon had no
                magnetic field and the Earth did.  It also observed the first solar winds from space. Luna 1 eventually
                went into orbit around the sun, also becoming the first spacecraft to orbit the sun, between the orbits
                of the Earth and the moon.  It is assumed that Luna 1 was meant to crash into Earth but it did not,
                that did not occur until Luna 2 later in 1959.
            </p>
            <p className={"Information"}>
                Luna 2 was the first spacecraft to land on the moon, on September 14, 1959<sup><a href={"#5"} className={"reference"}>5</a></sup>
                . Luna 2 landed near the Aristides, Archimedes, and Autolycus craters.  This mission confirmed the
                conclusion drawn from Luna 1 that the moon had no magnetic field and also determined that the moon
                had no evidence of radiation belts in the moon.  It also ran experiments about the behaviors of gas
                in space as it released clouds of colored sodium gasses that allowed for the tracking of the
                spacecraft from earth.
            </p>
            <p className = "Title" id={"MercuryRedstone"}>Mercury Redstone</p>
            <p>
                NASA was created
            </p>
            <p className = "Title" id={"Gemini"}>Gemini</p>
            <p>
                NASA was created
            </p>
            <p className = "Title" id={"Apollo"}>Apollo</p>
            <p>
                NASA was created
            </p>
            <button onClick = {clickBack}>Go Back</button>
            <p id={"references"}>
                <a
                    href={"https://www.nasa.gov/multimedia/imagegallery/image_feature_924.html"}
                    className={"link"}
                    id={"1"}
                    target={"blank"}>
                    Sputnik 1
                </a>
                <a
                    href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1957-002A"}
                    className={"link"}
                    id={"2"}
                    target={"blank"}>
                    Sputnik 2
                </a>
                <a
                    href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1960-011A"}
                    className={"link"}
                    id={"3"}
                    target={"blank"}>
                    Sputnik 5
                </a>
                <a
                    href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-012A"}
                    className={"link"}
                    id={"4"}
                    target={"blank"}>
                    LUNA 1
                </a>
                <a
                    href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-014A"}
                    className={"link"}
                    id={"5"}
                    target={"blank"}>
                    Luna 2
                </a>
            </p>
        </div>
    );
}

export default Missions;
