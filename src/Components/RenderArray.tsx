import React, { useState } from "react";

export default function RenderArray() {
    const [itemsArray, setItemsArray] = useState(["item1", "item2"]);
    const itemsDisplay = itemsArray.map((item) => <p key={item}>{item}</p>);

    function addItemBtnPress() {
        setItemsArray((prevArray) => {
            return [...prevArray, "item" + (itemsArray.length + 1)];
        });
    }

    return (
        <div>
            <button onClick={addItemBtnPress} className="addBtn">
                Add Item
            </button>
            {itemsDisplay}
        </div>
    );
}
