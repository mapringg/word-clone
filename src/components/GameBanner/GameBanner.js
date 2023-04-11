import React from "react";

function GameBanner({ status, numOfGuesses, answer }) {
  if (status === "won") {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            &nbsp;{numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  }

  if (status === "lost") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return <div />;
}

export default GameBanner;
