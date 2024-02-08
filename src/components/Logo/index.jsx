import logo from "./pokeball.svg";

const Logo = ({className}) => {
  return (
      <div className="logo">
        <img src={logo} alt="pokedex"  id="pokedex" className={`img-responsive ${className}`} />
      </div>
  );
}

export default Logo;
