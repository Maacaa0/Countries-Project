import { useState } from "react";
import PropTypes from "prop-types";

SearchBar.propTypes = {
    regionData: PropTypes.array.isRequired,
    setResults: PropTypes.func,
    setSearchedData: PropTypes.func,
    region: PropTypes.string
  };

function SearchBar({ setSearchedData, regionData, setResults, region }) {
  const [input, setInput] = useState("");
  

  const showResults = (value) => {
    const results = regionData.filter((result) => {
      return result.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setResults(results);
    setSearchedData(results)
  };

  const handleChange = (value) => {
    setInput(value);
    showResults(value);
  };

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <>
      {region !== "all" && <small className="searching">searching in {capitalize(region)}</small>}
      <input
        placeholder={"Search for a country..."}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={input}
      />
      
    </>
  );
}

export default SearchBar;