import PropTypes from "prop-types";
import { useState } from "react";

SearchBar.propTypes = {
    regionData: PropTypes.array.isRequired,
    setResults: PropTypes.func,
    setSearchedData: PropTypes.func,
    region: PropTypes.string,
    setInput: PropTypes.func,
    input: PropTypes.string
  };

function SearchBar({ setInput, input, setSearchedData, regionData, setResults, region }) {
  
  const [searchTimeout, setSearchTimeout] = useState(null);

  const showResults = (value) => {
    const results = regionData.filter((result) => {
      return result.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setResults(results)
    setSearchedData(results)
  };

  const handleChange = (value) => {
    setInput(value);
    // Clear the previous timeout if it exists
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    // Set a new timeout to fetch data after a delay (e.g., 500 milliseconds)
    const newTimeout = setTimeout(() => {
      showResults(value);
    }, 500);

    setSearchTimeout(newTimeout);
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