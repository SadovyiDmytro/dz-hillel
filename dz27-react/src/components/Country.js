import './Country.css';

const Country = ({ country }) => {
    const { name, population, capital } = country;
  
    return (
      <div className="country">
        <img className='flag-image' src={country.flags.png} alt={`${name} flag`} />
        <div className='info-card'>
          <h3 className='card-title'>{country.name.common}</h3>
          <p>Population: {population}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    );
  };
  
  export default Country;