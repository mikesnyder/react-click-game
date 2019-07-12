import React, { useEffect } from "react";


export default function Header({ score, message }) {
    var keyframes = [
        {
            fontVariationSettings: `"wght" 100`
        },
        {
            fontVariationSettings: `"wght" 900`
        },
        {
            fontVariationSettings: `"wght" 100`
        }
    ];

    useEffect(() => {
        let node = document.querySelector("#message");
        node.animate(keyframes, 300);
    });

    return (
        <div className="header">
            <div className="header-items">
                <h3>
                    Bond Villan Click Game
                </h3>
                <div id="message" className="message">
                    {message}
                </div>
                <div className="score-container">
                    Score: {score}
                </div>
            </div>
        </div>
    );
}