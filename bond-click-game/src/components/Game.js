import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../assets/styles/Game.css";
let { cards } = require("../assets/cards");


// const shuffleImages = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   cards = shuffleImages(cards);

  export default function Game({ updateScore, score }) {
    const [reset, setReset] = useState(false);
    const [didWin, setDidWin] = useState(false);
  
  
    useEffect(() => {
      if (reset && !didWin) {
        document
          .querySelector("#message")
          .animate([{ color: "white" }, { color: "red" }], 300);
      } else if (reset && didWin) {
        document
          .querySelector("#message")
          .animate([{ color: "white" }, { color: "green" }], 300);
      }
      setDidWin(false);
      setReset(false);
    }, [reset, didWin]);
  
    useEffect(() => {
      if (score === 16) {
        updateScore(false, true);
        setReset(true);
        setDidWin(true);
      }
    }, [score, updateScore]);

    const handleClick = wasClicked => {
      if (wasClicked) setReset(true);
      updateScore(wasClicked, false);
    };
  
    const shuffleImages = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    
    cards = shuffleImages(cards);
  
    return (
      <main className="container">
        {cards.map(card => {
          return (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              handleClick={handleClick}
              reset={reset}
            />
          );
        })}
      </main>
    );
  }