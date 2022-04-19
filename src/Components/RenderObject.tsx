import React, { useState } from "react";
import Star from "./Star";
import "../Css/person.css";

export default function RenderObject() {
    const [person, setPerson] = useState({
        firstname: "John",
        lastname: "Doe",
        phone: "+92 (422) 121-4212",
        email: "myemail@mail.com",
        isFavourite: false,
    });

    function toggleIcon() {
        setPerson((prevPerson) => {
            const fav = prevPerson.isFavourite ? false : true;
            return {
                ...prevPerson,
                isFavourite: fav,
            };
        });
    }

    return (
        <div className="person-holder">
            <img
                className="avatar"
                src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                alt="avatar-person"
            />
            <h1>
                <span>
                    <Star
                        filled={person.isFavourite}
                        handleToggle={toggleIcon}
                    />
                </span>
                {person.firstname + " " + person.lastname}
            </h1>
            <h2>{person.phone}</h2>
            <h2>{person.email}</h2>
        </div>
    );
}
