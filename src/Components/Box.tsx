import { AnyMxRecord } from "dns";
import React, { useState } from "react";
import "../Css/box.css";

export default function Box(props: { on: boolean; toggle: any }) {
    return (
        <div
            onClick={props.toggle}
            className={"box " + (props.on ? "fill" : "border")}
        ></div>
    );
}
