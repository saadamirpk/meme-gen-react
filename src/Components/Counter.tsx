import React, { useState } from "react";
import "../Css/counter.css";
import Count from "./Count";

export default function Counter() {
    const [currentNum, setCurrentNum] = useState(0);
    const [hoverPlus, setHoverPlus] = useState(false);
    const [hoverMinus, setHoverMinus] = useState(false);

    const changeMinus = () => {
        setHoverMinus((prev) => !prev);
    };

    const changePlus = () => {
        setHoverPlus((prev) => !prev);
    };

    function decreaseNum() {
        setCurrentNum(currentNum - 1);
    }
    function increaseNum() {
        setCurrentNum(currentNum + 1);
    }
    return (
        <div className="holder noselect">
            <div
                onClick={decreaseNum}
                onMouseOver={changeMinus}
                onMouseOut={changeMinus}
                className={
                    "minus Btn " + (hoverMinus ? "hoverBtn" : "normalBtn")
                }
            >
                -
            </div>
            <Count num={currentNum} />
            <div
                onClick={increaseNum}
                onMouseOver={changePlus}
                onMouseOut={changePlus}
                className={"plus Btn " + (hoverPlus ? "hoverBtn" : "normalBtn")}
            >
                +
            </div>
        </div>
    );
}
