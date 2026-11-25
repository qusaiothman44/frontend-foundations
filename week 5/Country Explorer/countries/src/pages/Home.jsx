import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import CountryCard from "../components/CountryCard";
import UseFetch from "../UseFetch";
const Home = () => {
  const { countries, error } = UseFetch(
    "https://countries.dev/countries?fields=name,alpha3Code,capital,region,population,flag,flags&sort=name",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState(localStorage.getItem("region") || "");

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || "",
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, region]);
  useEffect(() => {
    localStorage.setItem("region", region);
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm, region]);
  const filteredCountries = countries.filter((country) => {
    return (
       country.name.toLowerCase() !== "israel" &&
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
    );
  });

  const itemsPerPage = 24;

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentCountries = filteredCountries.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  function goToNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function goToPrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function goToSpecificPage(pageNumber) {
    setCurrentPage(pageNumber);
  }
  if (error) {
    return <h1>Somthing wrong</h1>;
  }
  return (
    <div>
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterSelect region={region} setRegion={setRegion} />
      </div>
      <div className="coutries">
        {currentCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToSpecificPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>{" "}
    </div>
  );
};

export default Home;
