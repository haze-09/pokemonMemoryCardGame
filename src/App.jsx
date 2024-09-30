import "./styles/App.css";
import pokeMemoryImg from "./assets/Poke-Memory.png";
import { useState, useEffect } from "react";

function App() {
  const openDifficultyModal = () => {
    const dialog = document.querySelector("#difficulty");
    dialog.classList.remove("dialog-close");
    dialog.classList.add("dialog-open");
    dialog.showModal();
  };

  const closeDifficultyModal = () => {
    const dialog = document.querySelector("#difficulty");
    dialog.classList.remove("dialog-open");
    dialog.classList.add("dialog-close");
    setTimeout(() => {
      dialog.close();
    }, 300);
  };

  useEffect(() => {
    openDifficultyModal();
  }, []);

  const selectDifficulty = (noOfIDs) => {
    closeDifficultyModal();
  };

  return (
    <>
      <header>
        <img
          src={pokeMemoryImg}
          alt="Poke-Memory"
          className="glass pixel-corners"
        />
      </header>
      <button onClick={openDifficultyModal}>New Game</button>

      <dialog id="difficulty">
        <h2>Choose Difficulty: </h2>
        <button onClick={closeDifficultyModal}>x</button>
        <div>
          <button className="easy" onClick={() => selectDifficulty(5)}>Easy</button>
          <button className="medium" onClick={() => selectDifficulty(10)}>Medium</button>
          <button className="hard" onClick={() => selectDifficulty(15)}>Hard</button>
        </div>
      </dialog>
    </>
  );
}

export default App;
