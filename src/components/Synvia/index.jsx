import synvia from "./synvia-A.svg";

const Synvia = ({className}) => {
  return (
      <div className="synvia">
        <img src={synvia} alt="synvia"  id="synvia" className={`img-responsive ${className}`} />
      </div>
  );
}

export default Synvia;
