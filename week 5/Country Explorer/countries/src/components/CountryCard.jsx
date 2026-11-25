import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard = ({country}) => {
  return (
    <div className='card'>
      <img src={country.flags.svg} alt={country.name}  className="cardImg"/>
      <div className="text">
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Capital: {country.capital}</p>
        <p>region: {country.region}</p>
        <Link to={`/country/${country.alpha3Code}`} className='btn'>details</Link>
      </div>
    </div>
  )
}

export default CountryCard
