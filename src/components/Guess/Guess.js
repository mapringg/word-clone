import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span
          key={index}
          className={["cell", result?.[index].status].join(" ")}
        >
          {value[index] ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
