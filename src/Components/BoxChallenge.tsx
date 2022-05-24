import React, { useEffect, useState } from "react";
import BoxData from "../Data/BoxData";
import "../Css/box.css";
import Box from "./Box";

export default function BoxChallenge() {
  const [boxes, setBoxes] = useState(BoxData);
  const [msgs, setMsgs] = useState<string[]>([]);

  useEffect(() => {
    let msgs: string[] = [];
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].on) {
        msgs.push(`Box ${i + 1}`);
      }
    }
    setMsgs([...msgs]);
  }, boxes);

  function toggleOn(bid: number) {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((square) => {
        return square.id === bid ? { ...square, on: !square.on } : square;
      });
    });
  }

  const boxesDisplay = boxes.map((box) => (
    <Box key={box.id} toggle={() => toggleOn(box.id)} on={box.on} />
  ));
  return (
    <div>
      <div className="box-container">{boxesDisplay}</div>
      <h2>
        {msgs.length > 0
          ? "You have " +
            msgs.length +
            " unread " +
            (msgs.length == 1 ? "message" : "messages")
          : "You're all caught up"}
      </h2>
    </div>
  );
}
