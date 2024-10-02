import "./styles/App.css";
import pokeMemoryImg from "./assets/Poke-Memory.png";
import loadingImg from "./assets/loading.png";
import { useState } from "react";
import { fetchPokeData } from "./api";
import Game from "./game";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gameData, setGameData] = useState({
    clicked: [],
    win: null,
    best: { easy: 0, medium: 0, hard: 0 },
    mode: null,
  });

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

  const selectDifficulty = async (noOfIDs, mode) => {
    closeDifficultyModal();

    setGameData({ ...gameData, clicked: [], win: null, mode: mode });
    setLoading(true);

    let pokeData = await fetchPokeData(noOfIDs);
    setData(pokeData);
    setLoading(false);
  };

  const shuffle = () => {
    let array = data;
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setData([...array]);
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
      <button id="newGame" onClick={openDifficultyModal}>
        New Game
      </button>
      {loading ? (
        <div id="loading">
          <img src={loadingImg} alt="Pokeball spinning" />
          <p>loading...</p>
        </div>
      ) : data ? (
        <Game
          data={data}
          gameData={gameData}
          setGameData={setGameData}
          shuffle={shuffle}
        />
      ) : (
        <div id="rules">
          <p>
            Welcome to Poke-Memory! <br />
            click on New Game and select a Difficulty.
            <br />
            You will be given a bunch of cards. <br />
            The goal is to click through all the cards.
            <br />
            You can click each card only once and the cards get shuffled on each
            click.
            <br />
            Good luck !!!
          </p>
        </div>
      )}

      <dialog id="difficulty">
        <h2>Choose Difficulty: </h2>
        <button onClick={closeDifficultyModal}>x</button>
        <div>
          <button className="easy" onClick={() => selectDifficulty(5, "easy")}>
            Easy
          </button>
          <button
            className="medium"
            onClick={() => selectDifficulty(10, "medium")}
          >
            Medium
          </button>
          <button className="hard" onClick={() => selectDifficulty(15, "hard")}>
            Hard
          </button>
        </div>
      </dialog>
    </>
  );
}

export default App;
