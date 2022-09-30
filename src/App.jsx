import pokeball from "./assets/poke.svg";
import "./App.css";

function App() {
  function clickHandler() {
    //pokemonAPI URL https://pokeapi.co/api/v2/pokemon?limit=151

    console.log("gotta catch em all");
  }

  return (
    <div className="App">
      <div>
        <button onClick={clickHandler}>
          <img src={pokeball} className="logo poke" alt="PokeBall" />
        </button>
      </div>
      <p>Click The Pokeball to load pokemon</p>
    </div>
  );
}

export default App;
