import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard = ({country}) => {
  return (
    <div>
      <img src={country.flags.svg} alt={country.name} />
      <div className="text">
        <p>{country.population.toLocaleString()}</p>
        <p>{country.capital?.[0]}</p>
        <Link to={`/country/${country.name}`}></Link>
      </div>
    </div>
  )
}

export default CountryCard
