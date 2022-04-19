import React, { useEffect, useState } from "react";
import "../Css/Meme.css";

export default function Meme() {
    const defimg =
        "https://laker.io/wp-content/uploads/2021/06/futurama-shut-up-and-take-my-money.jpeg";

    const [meme, setMeme] = useState({
        image: defimg,
        topText: "Shut up",
        bottomText: "And Take My Money",
    });

    const [allMeme, setAllMeme] = useState([
        {
            url: "https://laker.io/wp-content/uploads/2021/06/futurama-shut-up-and-take-my-money.jpeg",
        },
    ]);

    useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMeme(data.data.memes));
    }, []);

    function handleForm(event: any) {
        setMeme((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            };
        });
    }

    function getMemeBtnClick(e: any) {
        e.preventDefault();
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                image: allMeme[Math.floor(Math.random() * allMeme.length)].url,
            };
        });
    }

    return (
        <main>
            <form className="myform" action="">
                <div className="flex-box">
                    <input
                        className="inp"
                        type="text"
                        onChange={handleForm}
                        value={meme.topText}
                        name="topText"
                        placeholder="Top Text"
                    />
                    <input
                        className="inp"
                        type="text"
                        onChange={handleForm}
                        value={meme.bottomText}
                        name="bottomText"
                        placeholder="Bottom Text"
                    />
                </div>
                <button
                    className="btn"
                    onClick={(e) => {
                        getMemeBtnClick(e);
                    }}
                >
                    Get a new meme image 🖼️
                </button>
            </form>
            <div className="meme">
                <img className="meme-img" src={meme.image} alt="Meme Image" />
                <p className="top-text txt">{meme.topText}</p>
                <p className="bottom-text txt">{meme.bottomText}</p>
            </div>
        </main>
    );
}
