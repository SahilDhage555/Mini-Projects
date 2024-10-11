import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const API = "https://pokeapi.co/api/v2/pokemon?limit=624";

  const fetchPoke = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data)

      const detailPokemon = data.results.map(async (curPoke) => {
        // console.log(curPoke.url)
        const res = await fetch(curPoke.url);
        const data = await res.json();
        return data;
      });
      console.log(detailPokemon);

      const detailResponse = await Promise.all(detailPokemon);
      console.log(detailResponse);

      setPokemon(detailResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search)
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="loading-text">Loading...</h1>
      </div>
    );
  }
  
  

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((curPoke) => {
              return <PokemonCards key={curPoke.id} pokemonData={curPoke} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
