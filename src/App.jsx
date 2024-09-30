import "./styles/App.css";
import { fetchPokeData } from "./api";


function App() {
  console.log(fetchPokeData(3));
  return (
    <>
      <p>hi</p>
    </>
  );
}

export default App;
