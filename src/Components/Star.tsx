import React from "react";

export default function Star(props: { filled: boolean; handleToggle: any }) {
    return (
        <img
            onClick={props.handleToggle}
            className="icon"
            src={
                props.filled
                    ? "https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png"
                    : "https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star-empty.png"
            }
            alt="star-icon"
        />
    );
}
