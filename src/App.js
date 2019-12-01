import React, { useState, useEffect } from "react";

import Confetti from "react-dom-confetti";

import "./App.css";

const comment = [
  "Click for Confetti",
  "Fun huh?",
  "Still going?",
  "You that bored?",
  "Oh you THAT bored!",
  "Fine! lets get crazy!",
  "OK keep pressing but I am out of creativity..."
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 45,
  elementCount: 200,
  dragFriction: 0.1,
  duration: 2000,
  stagger: 0,
  width: "10px",
  height: "20px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function App() {
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);
  const [crazy, setCrazy] = useState(config);

  useEffect(() => {
    setIsClick(false);
  }, [isClick]);

  const getCrazy = () => {
    return count < 10
      ? {
          angle: getRandomInt(1, 360),
          spread: 360,
          startVelocity: 45,
          elementCount: 200,
          dragFriction: 0.1,
          duration: 2000,
          stagger: 0,
          width: "10px",
          height: "20px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        }
      : count < 20
      ? {
          angle: getRandomInt(1, 360),
          spread: getRandomInt(1, 360),
          startVelocity: 45,
          elementCount: 200,
          dragFriction: 0.1,
          duration: 2000,
          stagger: 0,
          width: "10px",
          height: "20px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        }
      : count < 30
      ? {
          angle: getRandomInt(1, 360),
          spread: getRandomInt(1, 360),
          startVelocity: getRandomInt(1, 100),
          elementCount: 200,
          dragFriction: 0.1,
          duration: 2000,
          stagger: 0,
          width: "10px",
          height: "20px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        }
      : count < 40
      ? {
          angle: getRandomInt(1, 360),
          spread: getRandomInt(1, 360),
          startVelocity: getRandomInt(1, 100),
          elementCount: getRandomInt(1, 200),
          dragFriction: 0.1,
          duration: 2000,
          stagger: 0,
          width: "10px",
          height: "20px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        }
      : count < 50
      ? {
          angle: getRandomInt(1, 360),
          spread: getRandomInt(1, 360),
          startVelocity: getRandomInt(1, 100),
          elementCount: getRandomInt(1, 200),
          dragFriction: getRandomInt(0.1, 0.6),
          duration: 2000,
          stagger: 0,
          width: "10px",
          height: "20px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        }
      : {
          angle: getRandomInt(1, 360),
          spread: getRandomInt(1, 360),
          startVelocity: getRandomInt(1, 100),
          elementCount: getRandomInt(1, 200),
          dragFriction: getRandomInt(0.1, 0.6),
          duration: getRandomInt(1000, 4000),
          stagger: getRandomInt(0, 50),
          width: "10px",
          height: "20px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        };
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setIsClick(true);
            setCount(() => count + 1);
            setCrazy(getCrazy());
          }}
          className="App-button"
        >
          <strong>
            {count < 10
              ? comment[0]
              : count < 20
              ? comment[1]
              : count < 30
              ? comment[2]
              : count < 40
              ? comment[3]
              : count < 50
              ? comment[4]
              : count < 50
              ? comment[5]
              : comment[6]}{" "}
            {count}
          </strong>
        </button>
        <Confetti active={isClick} config={crazy} />
      </header>
    </div>
  );
}

export default App;
