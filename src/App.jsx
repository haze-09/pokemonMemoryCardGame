import "./styles/App.css";
import pokeMemoryImg from "./assets/Poke-Memory.png";
import { useState, useEffect } from "react";
import { fetchPokeData } from "./api";
import Game from "./game";

function App() {
  const [data, setData] = useState(null);

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

  const selectDifficulty = async (noOfIDs) => {
    closeDifficultyModal();

    let pokeData = await fetchPokeData(noOfIDs);
    setData(pokeData);  
  };

  console.log("Rendering App, current data:", data);

  return (
    <>
      <header>
        <img
          src={pokeMemoryImg}
          alt="Poke-Memory"
          className="glass pixel-corners"
        />
      </header>
      <button id="newGame" onClick={openDifficultyModal}>
        New Game
      </button>
      {data && <Game data={data} />}

      <dialog id="difficulty">
        <h2>Choose Difficulty: </h2>
        <button onClick={closeDifficultyModal}>x</button>
        <div>
          <button className="easy" onClick={() => selectDifficulty(5)}>
            Easy
          </button>
          <button className="medium" onClick={() => selectDifficulty(10)}>
            Medium
          </button>
          <button className="hard" onClick={() => selectDifficulty(15)}>
            Hard
          </button>
        </div>
      </dialog>
    </>
  );
}

export default App;
