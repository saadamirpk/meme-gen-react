import React, { useState } from "react";
import "../Css/signup.css";

export default function SignUp() {
    const [hover, setHover] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        c_password: "",
        level: "",
        domain: "",
        newsletter: false,
    });

    function hoverToggle() {
        setHover((prev) => !prev);
    }

    function handleChange(event: any) {
        const { name, type, checked, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        if (formData.password === formData.c_password) {
            console.log("Succesfully Signed Up");
            formData.newsletter &&
                console.log("Thanks for signing up for our newsletter!");
        } else {
            console.log("Passwords Do Not Match");
        }
    }

    return (
        <div className="container">
            <h1 className="title">Sign Up</h1>
            <form className="my-form" onSubmit={handleSubmit}>
                <input
                    className="field-space"
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="field-space"
                    required
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    className="field-space"
                    required
                    type="password"
                    name="c_password"
                    placeholder="Confirm Password"
                    value={formData.c_password}
                    onChange={handleChange}
                />

                <label className="labeltitle" htmlFor="radio">
                    Level
                </label>
                <div>
                    <input
                        id="radio_beginner"
                        required
                        type="radio"
                        name="level"
                        value="beginner"
                        checked={formData.level === "beginner"}
                        onChange={handleChange}
                    />

                    <label htmlFor="radio_beginner">Beginner</label>
                </div>
                <div>
                    <input
                        id="radio_intermediate"
                        type="radio"
                        name="level"
                        value="intermediate"
                        checked={formData.level === "intermediate"}
                        onChange={handleChange}
                    />

                    <label htmlFor="radio_intermediate">Intermediate</label>
                </div>
                <div>
                    <input
                        id="radio_advance"
                        type="radio"
                        name="level"
                        value="advance"
                        checked={formData.level === "advance"}
                        onChange={handleChange}
                    />
                    <label htmlFor="radio_advance">Advance</label>
                </div>
                <label className="labeltitle" htmlFor="select_domain">
                    Domain
                </label>
                <select
                    id="select_domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                >
                    <option value="">-- Choose --</option>
                    <option value="technical">Technical</option>
                    <option value="medical">Medical</option>
                    <option value="electrical">Electrical</option>
                </select>

                <div>
                    <input
                        className="check-space"
                        id="check_newsletter"
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="check_newsletter">
                        I want to join the Newsletter
                    </label>
                </div>
                <button
                    onMouseEnter={hoverToggle}
                    onMouseLeave={hoverToggle}
                    className={"sub " + (hover && "sub-hover")}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
