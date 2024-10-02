import Cards from "./cards";
import "./styles/game.css";

function Game({ data, gameData, setGameData, shuffle }) {
  function addClicked(name) {
    if (gameData.clicked.includes(name)) {
      if (gameData.clicked.length > gameData.best[gameData.mode]) {
        setGameData({
          ...gameData,
          best: { ...gameData.best, [gameData.mode]: gameData.clicked.length },
          win: false,
        });
      }else{
        setGameData({
          ...gameData,
          win: false,
        });
      }
    } else {
      if (gameData.clicked.length === data.length - 1) {
        setGameData({
          ...gameData,
          clicked: [...gameData.clicked, name],
          best: {
            ...gameData.best,
            [gameData.mode]: gameData.clicked.length + 1,
          },
          win: true,
        });
      } else {
        setGameData({
          ...gameData,
          clicked: [...gameData.clicked, name],
        });
      }
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
      {gameData.win && <p>You won </p>}
      {gameData.win === false && <p>You lost. Try again.</p>}
      {gameData.win === null && (
        <Cards data={data} shuffle={shuffle} addClicked={addClicked} />
      )}
    </div>
  );
}

export default Game;
