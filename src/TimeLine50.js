import './App.css';
import React from "react";
import sputnik from "./imgs/sputnik.jpg"
import nasa from "./imgs/nasa.png"
import luna1 from "./imgs/luna1.jpg"

function Time50() {

    return (
        <div className="page">
            <a href={"#1958"} className="year">1958</a>
            <a href={"#1959"} className="year">1959</a>
            <p/>
            <p className="Title">1957</p>
            <img
                alt={"Sputnik"}
                src={sputnik}
                style={{ width: "25%", height: "{25%", margin: "10px" }}
            />
            <p className="Information">
                <a href={"/missions#Sputnik"} className={"mission"}>Sputnik 1</a> was launched on October 4, 1957 by the USSR,
                which eventually caused the entire space race. This was the first satellite that was launched into
                space<sup><a href={"#1"} className={"reference"}>1</a></sup>
            </p>
            <p className = "Title" id={"1958"}>1958</p>
            <img
                alt={"NASA logo"}
                src={nasa}
                style={{ width: "50%", height: "{50%", margin: "10px" }}
            />
            <p className={"Information"}>
                NASA was created on July 29, 1958 by President Eisenhower in response to the launch of Sputnik
                NASA had 8 main goals <sup><a href={"#2"} className={"reference"}>2</a></sup>:
            </p>
            <div className={"text-container"}>
                <p>
                    1. The expansion of human knowledge of phenomena in the atmosphere and space;
                </p>
                <p>
                    2. The improvement of the usefulness, performance, speed, safety, and efficiency of aeronautical and
                    space vehicles;
                </p>
                <p>
                    3. The development and operation of vehicles capable of carrying instruments, equipment, supplies, and
                    living organisms through space;
                </p>
                <p>
                    4. The establishment of long-range studies of the potential benefits to be gained from, the
                    opportunities for, and the problems involved in the utilization of aeronautical and space activities
                    for peaceful and scientific purposes;
                </p>
                <p>
                    5. The preservation of the role of the United States as a leader in aeronautical and space science
                    and technology and in the application thereof to the conduct of peaceful activities within and
                    outside the atmosphere;
                </p>
                <p>
                    6. The making available to agencies directly concerned with national defense of discoveries that
                    have military value or significance, and the furnishing by such agencies, to the civilian agency
                    established to direct and control nonmilitary aeronautical and space activities, of information as
                    to discoveries which have value or significance to that agency;
                </p>
                <p>
                    7. Cooperation by the United States with other nations and groups of nations in work done pursuant
                    to this Act and in the peaceful application of the results thereof;
                </p>
                <p>
                    8. The most effective utilization of the scientific and engineering resources of the United States,
                    with close cooperation among all interested agencies of the United States in order to avoid unnecessary
                    duplication of effort, facilities and equipment
                </p>
            </div>
            <p className={"Information"}>
                NASA became operational on October 1st 1958<sup><a href={"#3"} className={"reference"}>3</a></sup> and
                it became part of the National Advisory Committee for Aeronautics, taking over the employees and the budget.
                The first high profile cases that it took over were Project Mercury and Project Gemini which occurred in 1961
                and 1965 respectively.
            </p>

            <p className = "Title" id={"1959"}>1959</p>
            <img
                alt={"Luna1"}
                src={luna1}
                style={{ width: "25%", height: "{25%", margin: "10px" }}
            />
            <p className={"Information"}>
                <a href={"/missions#Luna"} className={"mission"}>Luna 1</a> became the first spacecraft to reach the moon
                <sup><a href={"#4"} className={"reference"}>4</a></sup>, the first spacecraft to observe gasses in space,
                the first spacecraft to observe magnetic fields, and the first spacecraft to orbit the sun.
            </p>
            <p className={"Information"}>
                <a href={"/missions#Luna"} className={"mission"}>Luna 2</a> became the first spacecraft to land on the moon
            </p>
            <a href={"/intro"} className={"year"}>Go Back</a>
            <p id={"references"}>
                <p className={"Information"}>References</p>
                <a href={"https://www.history.com/topics/cold-war/space-race"} className={"link"} id={"1"} target={"blank"}>Cold War</a>
                <a href={"https://www.nasa.gov/exploration/whyweexplore/Why_We_29.html"} id={"2"} className={"link"} target={"blank"}>NASA</a>
                <a href={"https://history.nasa.gov/factsheet.htm"} id={"3"} className={"link"} target={"blank"}>NASA Creation</a>
                <a href={"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-012A"} id={"3"} className={"link"} target={"blank"}>LUNA 1</a>
            </p>
        </div>
    );
}

export default Time50;
