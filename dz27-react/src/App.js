import React, { useState, useEffect } from 'react';
import Continent from './components/Continent';
import Country from './components/Country';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleContinentClick = continent => {
    setSelectedContinent(continent);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-panel">
        <div className="left-panel">
          <Continent continent="Europe" onContinentClick={handleContinentClick} />
          <Continent continent="Americas" onContinentClick={handleContinentClick} />
          <Continent continent="Asia" onContinentClick={handleContinentClick} />
          <Continent continent="Africa" onContinentClick={handleContinentClick} />
        </div>
        <div className="right-panel">
          <div className="continet-panel">
            {selectedContinent && (
              <h2>Countries in {selectedContinent}:</h2>
            )}
          </div>
          <div className="countries-panel">
            {countries.map(country => {
              if (selectedContinent === country.region) {
                return <Country key={country.name.common} country={country} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
