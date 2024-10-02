import pokeCardImg from "./assets/card.png";
import "./styles/cards.css";

function flipAllCards(shuffle) {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.add("flipped"));
  
  setTimeout(()=>{
    shuffle();
  },500)
 
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("flipped"));
  }, 700);
}

function Card({ name, sprite,shuffle }) {
  return (
    <div className="card" onClick={()=>flipAllCards(shuffle)}>
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

function Cards({ data, shuffle }) {

  return (
    <div className="cards-container">
      {data.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} shuffle={shuffle} />
      ))}
    </div>
  );
}

export default Cards;
