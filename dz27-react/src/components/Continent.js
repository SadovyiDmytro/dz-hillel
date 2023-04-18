const Continent = ({ continent, onContinentClick }) => {
  return (
    <div className="continent" onClick={() => onContinentClick(continent)}>
      <h2>{continent}</h2>
    </div>
  );
};

export default Continent;