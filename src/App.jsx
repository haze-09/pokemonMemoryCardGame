import "./styles/App.css";
import pokeMemoryImg from "./assets/Poke-Memory.png";
import { useState, useEffect } from "react";

function App() {

  const openDifficultyModal = () => {
    document.querySelector("#difficulty").showModal();
  };

  const closeDifficultyModal = () => {
    document.querySelector("#difficulty").close();
  };

  useEffect(() => {
    openDifficultyModal();
  }, []);

  const selectDifficulty = (noOfIDs) =>{



  }

 

  return (
    <>
      <header>
        <img src={pokeMemoryImg} alt="Poke-Memory" />
      </header>
      <dialog id="difficulty">
        <h2>Choose Difficulty: </h2>
        <button onClick={closeDifficultyModal}>X</button>
        <button onClick={() => selectDifficulty(5)}>Easy</button>
        <button onClick={() => selectDifficulty(10)}>Medium</button>
        <button onClick={() => selectDifficulty(15)}>Hard</button>
      </dialog>
    </>
  );
}

export default App;
