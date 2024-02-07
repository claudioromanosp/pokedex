import React, { useEffect, useState } from "react";
import api from "../../services/api";
import PokemonList from "../../components/PokemonList";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Image from "../../components/Image";
import Button from "../../components/Button";
import Heart from "../../assets/images/empty-heart.png";
import HeartFavorite from "../../assets/images/red-heart.png";
import { Container, Grid, GridItem, Nav, ButtonTag } from "../../components/Styles";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");
  const [filterType, setFilterType] = useState(null);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [heart, setHeart] = useState(Heart);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      const response = await api.get(`pokemons.json`);
      setPokemons(response.data.results);
      console.log(response.data.results)
      // Extrair tipos únicos de todos os Pokémon e definir como opções de filtro
      const types = response.data.results.flatMap(pokemon => pokemon.type);
      const uniqueTypes = [...new Set(types)];
      setAvailableTypes(uniqueTypes);
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

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const sortedPokemons = [...pokemons].sort((a, b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "national_number") {
      return a.national_number - b.national_number;
    }
    return 0;
  });

  const filteredPokemons = sortedPokemons.filter((pokemon) => {
    const matchesSearchTerm =
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.national_number.toString().includes(searchTerm);
    const matchesFilter = !filterType || pokemon.type.includes(filterType);
    return matchesSearchTerm && matchesFilter;
  });

  const options = [
    { value: "name", label: "Nome" },
    { value: "national_number", label: "Menor número primeiro" },
  ];

  const onHeartClick = (pokemonName) => {
    // Verifica se o Pokémon já está nos favoritos
    const isFavorite = favorites.includes(pokemonName);

    // Se já estiver nos favoritos, remove
    if (isFavorite) {
      const updatedFavorites = favorites.filter(name => name !== pokemonName);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      setHeart(Heart);
    } else {
      // Senão, adiciona aos favoritos
      const updatedFavorites = [...favorites, pokemonName];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      setHeart(HeartFavorite);
    }
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="Pesquisar por nome ou número nacional"
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
          className="select"
        />
      </div>

      <Container>
        <Nav>
          {availableTypes.map((type, index) => (
            <ButtonTag key={index} onClick={() => handleFilterChange(type)}>
              {type}
            </ButtonTag>
          ))}
          <ButtonTag onClick={() => handleFilterChange(null)}>Limpar filtro</ButtonTag>
        </Nav>

        <Grid>
          {filteredPokemons.map((pokemon, index) => (
            <GridItem key={index} className="pokemon-container">
              <PokemonList
                name={pokemon.name}
                national={pokemon.national_number}
                types={pokemon.type}
                image={pokemon.sprites.large}
              />
              <Button className={`pokemon-heart ${favorites.includes(pokemon.name) ? "favorite" : ""}`}
                onClick={() => onHeartClick(pokemon.name)}>
                <Image src={favorites.includes(pokemon.name) ? HeartFavorite : Heart} />
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Container>
      
    </div>
  );
};

export default Home;
