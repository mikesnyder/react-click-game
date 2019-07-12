import React, { useState, useEffect } from "react";
import "../assets/styles/Card.css";

export default function Card({ image, reset, handleClick }) {
  const [clicked, setClicked] = useState(false);

  const wasClicked = () => {
    clicked ? handleClick(true) : handleClick(false);
    setClicked(true);
  };

  useEffect(() => {
    if (reset) setClicked(false);
  }, [reset]);

  return (
    <div
      className="card"
      onClick= {wasClicked}
      style= {{
        backgroundImage: `url(${image})`
      }}
    />
  );
}


