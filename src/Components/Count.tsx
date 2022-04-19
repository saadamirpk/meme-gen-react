import React from "react";
import "../Css/counter.css";

export default function Count(props: { num: number }) {
    return <div className="counterBall">{props.num}</div>;
}
