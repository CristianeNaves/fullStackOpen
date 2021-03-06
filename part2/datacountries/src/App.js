import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ReducedCountry = ({country}) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      <li><p>{country.name}<button onClick={() => setShowInfo(!showInfo)}>show</button></p></li>
      {
        showInfo &&
        <Country country={country}/>
      }
    </div>
  )
}

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((l,i) => <li key={i}>{l.name}</li>)}
      </ul>
      <img src={country.flag} alt={`${country.name} flag`}/>
    </div>
  )
}

function App() {

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const filterCountries = (event) => {
    let value = event.target.value.toLowerCase()
    const newCountries = countries.filter(country => country.name.toLowerCase().includes(value))
    setFilteredCountries(newCountries)
    console.log(filteredCountries[0])
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(countries.concat(response.data))
    });
  }, []);

  return (
   <div>
      find countries <input onChange={filterCountries}/>
      {
      filteredCountries.length === 1?
        <Country country={filteredCountries[0]}/>
      :
      filteredCountries.length > 10?
        <p>Too many matches, specify another filter</p>
      :
        filteredCountries.map(country => <ReducedCountry key={country.name} country={country}/>)
      }
   </div>
  );
}

export default App;