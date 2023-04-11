import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameBanner from "../GameBanner/GameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  let status = "running";
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) status = "lost";
  if (guesses.includes(answer)) status = "won";

  function handleAddGuess(tentativeGuess) {
    setGuesses((prevGuesses) => [...prevGuesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} status={status} />
      <GameBanner
        status={status}
        numOfGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
