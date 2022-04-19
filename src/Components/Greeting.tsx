import React, { useState } from "react";

export default function Greeting() {
    const nameArray = ["Bob", "Alice", "Maryam"];
    const [person, setPerson] = useState("Bob");

    function changePersonBtnPress() {
        setPerson(nameArray[Math.floor(Math.random() * 3)]);
    }

    function greeting(name: string) {
        const date = new Date();
        const hours = date.getHours();
        let say = "";
        if (hours >= 4 && hours < 12) {
            say = "morning";
        } else if (hours >= 12 && hours < 17) {
            say = "afternoon";
        } else if (hours >= 17 && hours < 20) {
            say = "evening";
        } else if (hours >= 20 || hours < 4) {
            say = "night";
        }
        return "Good " + say + " " + name + "!";
    }
    return (
        <div>
            <button onClick={changePersonBtnPress}> Change </button>
            {greeting(person)}
        </div>
    );
}
