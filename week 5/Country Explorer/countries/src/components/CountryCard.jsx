import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard = ({country}) => {
  return (
    <div>
      <img src={country.flags.svg} alt={country.name} />
      <div className="text">
        <p>{country.population.toLocaleString()}</p>
        <p>{country.capital}</p>
        <p>{country.region}</p>
        <Link to={`/country/${country.alpha3Code}`}>details</Link>
      </div>
    </div>
  )
}

export default CountryCard
