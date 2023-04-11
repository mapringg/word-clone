import React from "react";

function GuessInput({ handleAddGuess, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleInputChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitted form with value:", tentativeGuess);
    handleAddGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== "running"}
        title="5 letters word"
        pattern="\w{5,5}"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default GuessInput;
