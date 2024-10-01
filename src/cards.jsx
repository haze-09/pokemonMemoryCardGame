import pokeCardImg from "./assets/card.png";
import "./styles/cards.css";

function flipAllCards() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.add("flipped"));
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("flipped"));
  }, 700);
}

function Card({ name, sprite }) {
  return (
    <div className="card" onClick={flipAllCards}>
      <div className="front">
        <img src={sprite} alt={`An Image of ${name}`} />
        <p>{name}</p>
      </div>
      <div className="back">
        <img src={pokeCardImg} alt="pokemon card back side" />
      </div>
    </div>
  );
}

function Cards({ data }) {
  return (
    <div className="cards-container">
      {data.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} />
      ))}
    </div>
  );
}

export default Cards;
