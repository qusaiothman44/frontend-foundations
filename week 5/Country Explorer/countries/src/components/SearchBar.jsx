import React from "react";

const SearchBar = ({ searchterm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchterm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
