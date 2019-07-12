import React, { useState } from "react";
import Game from "./components/Game";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Don't click the same picture twice!");

  const onUpdateScore = (playerLost, playerWon) => {

    if (playerLost) return resetGame();
    if (playerWon) return youWin();

    setScore(score + 1);
  };

  const resetGame = () => {
    setScore(0);
    setMessage("Villan already clicked!");
  };

  const youWin = () => {
    setScore(0);
    setMessage("You win!");
  };

  return (
    <div className="App">
      <Header score={score} message={message} />
      <Game updateScore={onUpdateScore} score={score} />
    </div>
  );
}