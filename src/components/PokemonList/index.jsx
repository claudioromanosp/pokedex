import Image from "../../components/Image";

  import {SubtitleH2, SubtitleH3,CardImage } from "../../components/Styles";
const PokemonList = ({ name, national, types, image }) => {
  const mapTypeToClass = (type) => {
    switch (type) {
      case 'Fire':
        return 'fire';
      case 'Water':
        return 'water';
      case 'Grass':
        return 'grass';
      case 'Ice':
        return 'ice';
      case 'Psychic':
        return 'psychic';
      case 'Dark':
        return 'dark';
        case 'Bug':
        return 'bug';
        case 'Ice':
        return 'ice';
      case 'Steel':
        return 'steel';
      case 'Ghost':
        return 'ghost';
      case 'Fire':
        return 'fire';
      case 'Dragon':
        return 'dragon';
      case 'Flying':
        return 'flying';
      case 'Ghost':
        return 'ghost';
      case 'Electric':
        return 'electric';
      case 'Ghost':
        return 'ghost';
      case 'Ground':
        return 'ground';
      case 'Fairy':
        return 'fairy';
      case 'Fighting':
        return 'fighting';
      case 'Rock':
        return 'rock';
      default:
        return 'default';
    }
  };

  return (
    <div className="pokemon">
      <CardImage>
      <Image src={image} alt={name} className="img-responsive" />
      </CardImage>
      <SubtitleH3>{national}</SubtitleH3>
      <SubtitleH2>{name}</SubtitleH2>
      <div className="types">
        {types.map((type, index) => (
          <span key={index} className={`type-${mapTypeToClass(type)}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
