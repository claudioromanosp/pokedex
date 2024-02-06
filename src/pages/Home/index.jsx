import { useEffect, useState } from "react";
import api from "../../services/api";
import PokemonList from "../../components/PokemonList"

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);
  

  const getPokemon = async () => {
    try {
      const response = await api.get(`pokemons.json`);
        setPokemons(response.data.results);
        console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <PokemonList
              name={pokemon.name}
              national={pokemon.national_number}
              type={pokemon.type}
              image={pokemon.sprites.normal}
            />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
