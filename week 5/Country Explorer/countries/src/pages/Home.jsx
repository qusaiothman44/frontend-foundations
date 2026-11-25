import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import UseFetch from "../UseFetch";
const Home = () => {
    const {countries,error}= UseFetch("https://countries.dev/countries?fields=name,alpha3Code,capital,region,population,flag,flags&sort=name")
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
console.log(countries);

 if(error){
  return <h1>Somthing wrong</h1>
 }
  return (
    <div>
        <div>
               <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterSelect region={region} setRegion={setRegion} />
        </div>
   <div>
    {countries.map((country)=>(
        <CountryCard key={country.alpha3Code
} country={country}/>
    ))}
   </div>
    </div>
  );
};

export default Home;
