import React, { useEffect, useState } from "react";
import api from "../../services/api";
import PokemonList from "../../components/PokemonList";
import Input from "../../components/Input";
import Select from "../../components/Select";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      const response = await api.get(`pokemons.json`);
      setPokemons(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedPokemons = [...pokemons].sort((a, b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "national_number") {
      return a.national_number - b.national_number;
    }
    return 0;
  });

  const filteredPokemons = sortedPokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.national_number.toString().includes(searchTerm)
  );

  const options = [
    { value: 'name', label: 'Nome' },
    { value: 'national_number', label: 'Menor número primeiro' }
  ];

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="Search by name or national number"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <Select
          id="sortOrder"
          value={sortOrder}
          options={options}
          onChange={handleSortChange}
          className="seu-classe-css-aqui"
        />
      </div>
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
