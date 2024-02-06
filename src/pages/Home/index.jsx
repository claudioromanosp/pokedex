import { useEffect, useState } from "react";
import api from "../../services/api";
import PokemonList from "../../components/PokemonList";
import Input from "../../components/Input";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.national_number.toString().includes(searchTerm)
  );

  return (
    <div>
      <Input
        type="text"
        placeholder="Search by name or national number"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredPokemons.map((pokemon, index) => (
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
