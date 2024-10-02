import "./styles/App.css";
import pokeMemoryImg from "./assets/Poke-Memory.png";
import { useState, useEffect } from "react";
import { fetchPokeData } from "./api";
import Game from "./game";

function App() {
  const [data, setData] = useState(null);
  const [mode,setMode] = useState(null);

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

  const selectDifficulty = async (noOfIDs, mode) => {
    closeDifficultyModal();

    setMode(mode);

    let pokeData = await fetchPokeData(noOfIDs);
    setData(pokeData);  
  };

  const shuffle = () => {
    let array = data;
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setData([...array]);
    console.log('shuffled');
  }
  

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
      {data && <Game data={data} mode={mode} shuffle={shuffle} />}

      <dialog id="difficulty">
        <h2>Choose Difficulty: </h2>
        <button onClick={closeDifficultyModal}>x</button>
        <div>
          <button className="easy" onClick={() => selectDifficulty(5,'easy')}>
            Easy
          </button>
          <button className="medium" onClick={() => selectDifficulty(10,'medium')}>
            Medium
          </button>
          <button className="hard" onClick={() => selectDifficulty(15,'hard')}>
            Hard
          </button>
        </div>
      </dialog>
    </>
  );
}

export default App;
