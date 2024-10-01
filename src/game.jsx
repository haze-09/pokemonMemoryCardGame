import Cards from "./cards";
import "./styles/game.css";

function Game({ data }) {
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
          <h1>mode: </h1>
        </div>
      </div>
      <Cards data={data} />
    </div>
  );
}

export default Game;
