const PokemonList = ({ name, national, type, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{national}</h3>
      <h3>{type}</h3>
      <img src={image} alt={name} />
    </>
  );
};

export default PokemonList;
