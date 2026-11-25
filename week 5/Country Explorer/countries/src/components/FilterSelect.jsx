import React from "react";

const FilterSelect = ({ region, setRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return <select  className="select"   value={region} onChange={(e)=>setRegion(e.target.value)}
>
    <option value="">Filter by region</option>
    {regions.map((reg)=>(
        <option key={reg} value={reg}>{reg}</option>
    ))}
  </select>;
};

export default FilterSelect;
