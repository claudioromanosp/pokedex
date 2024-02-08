import React, { useEffect, useState } from "react";
import api from "../../services/api";
import PokemonList from "../../components/PokemonList";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Heart from "../../assets/images/empty-heart.png";
import HeartFavorite from "../../assets/images/red-heart.png";
import {  ButtonTag, SearchInput, SubtitleH3 } from "../../components/Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faToggleOn, faToggleOff, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ContainerFluid from "../../components/Layout/ContainerFluid";
import Container from "../../components/Layout/Container";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";
import Grid from "../../components/Layout/Grid";
import Aside from "../../components/Layout/Aside";
import "./styles.css";


const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");
  const [filterType, setFilterType] = useState(null);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [heart, setHeart] = useState(Heart);
  const [filteredTag, setFilteredTag] = useState({});
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);
  
  const getPokemon = async () => {
    try {
      setLoading(true);
      const response = await api.get(`pokemons.json`);
      setPokemons(response.data.results);
      setLoading(false);
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
    setLoading(true);
    if (type === filterType) {
      console.log('2');
      setFilterType(null);
      setLoading(true);
      setFilteredTag(prevState => ({
        ...prevState,
        [type]: false
      }));
    } else {
      setLoading(true);
      setFilterType(type);
      setFilteredTag(prevState => ({
        ...prevState,
        [type]: true
      }));
    }
    setLoading(false);
  };

  const handleShowFavorites = () => {
    setLoading(true);
    setShowFavoritesOnly(true);
    setLoading(false);
  };

  const handleClearFavoritesFilter = () => {
    setShowFavoritesOnly(false);
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
    return matchesSearchTerm && matchesFilter && (!showFavoritesOnly || favorites.includes(pokemon.name));
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
  
      {loading && <Loading />}
    <section className="filters">   
      <ContainerFluid>
        <Container>
          <Row>
              <Col className="col-50" id="col-left">
                <div className="search">
                <SearchInput
                  type="text"
                  placeholder="Pesquisar por nome ou número nacional"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  />
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </Col>
              <Col className="col-50" id="col-right">
                <div className="select-filter">
                  <label htmlFor="sortOrder">Ordenar por </label>
                  <Select
                    id="sortOrder"
                    value={sortOrder}
                    options={options}
                    onChange={handleSortChange}
                    className="select"
                    />
                </div>
            </Col>
            </Row>
        </Container>
     </ContainerFluid> 
    </section>
      
      <ContainerFluid>
        <Container>
          <Aside  className="aside-left">
            <Row>
              <section>
                <SubtitleH3>Filtrar por Tipo</SubtitleH3>
              {availableTypes.map((type, index) => (
                <ButtonTag 
                  key={index} 
                  onClick={() => handleFilterChange(type)}
                  className={filteredTag[type] ? 'filtered-tag' : ''}
                >
                  {type}
                </ButtonTag>
              ))}
              </section>
              <section>
                <SubtitleH3>Filtrar Favoritos</SubtitleH3>
              {showFavoritesOnly ?
                <FontAwesomeIcon 
                icon={faToggleOn} 
                style={{ "color": "#E2350D", "--fa-secondary-color": "#E2350D" }}
                size="2x" 
                onClick={handleClearFavoritesFilter} 
                />
                :
                <FontAwesomeIcon 
                icon={faToggleOff} 
                style={{ "color": "#828282", "--fa-secondary-color": "#828282" }}  
                size="2x" 
                onClick={handleShowFavorites} 
                />
              }
             </section>
            </Row>
          </Aside>
          <Aside  className="aside-right">
            <Row>
                <Grid>
              {filteredPokemons.map((pokemon, index) => (
                  <div className="pokemon-container" key={index}>
                    <Button 
                      className={`pokemon-heart ${favorites.includes(pokemon.name) ? "favorite" : ""}`}
                      onClick={() => onHeartClick(pokemon.name)}
                      >
                      <FontAwesomeIcon icon={faHeart} src={favorites.includes(pokemon.name) ? HeartFavorite : Heart} size="2x" />
                    </Button>

                    <PokemonList
                      name={pokemon.name}
                      national={pokemon.national_number}
                      types={pokemon.type}
                      image={pokemon.sprites.normal}
                    />
                  </div>
              ))}
                </Grid>
            </Row>
          </Aside>
        </Container>
        </ContainerFluid>
    </div>
  );
};

export default Home;
