import Cards from "./cards";
import "./styles/game.css";

function Game({ data, mode, shuffle }) {

  return (
    <div className="game">
      <div id="score">
        <div>
          <h1>Score: </h1>
        </div>
        <div>
          <h1>Best: </h1>
        </div>
        <div>
          <h1>Mode: </h1>
          <p>{mode}</p>
        </div>
      </div>
      <Cards data={data} shuffle={shuffle} />
    </div>
  );
}

export default Game;
