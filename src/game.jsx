import Cards from "./cards";
import "./styles/game.css";

function Game({ data, gameData, setGameData, shuffle }) {
  function addClicked(name) {
    if (gameData.clicked.includes(name)) {
      setGameData({
        ...gameData,
        best: { ...gameData.best, [gameData.mode]: gameData.clicked.length },
        win: false,
      });
    } else {
      const newWin = gameData.clicked.length === data.length;
      setGameData({
        ...gameData,
        clicked: [...gameData.clicked, name],
        win: newWin,
      });
    }
  }

  return (
    <div className="game">
      <div id="score">
        {console.log("best:" + gameData.best)}
        <div>
          <h1>Score: </h1>
          <p>{gameData.clicked.length}</p>
        </div>
        <div>
          <h1>Best: </h1>
          <p>{gameData.best[gameData.mode]}</p>
        </div>
        <div>
          <h1>Mode: </h1>
          <p>{gameData.mode}</p>
        </div>
      </div>
      <Cards data={data} shuffle={shuffle} addClicked={addClicked} />
    </div>
  );
}

export default Game;
