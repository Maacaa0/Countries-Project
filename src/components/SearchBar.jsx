import { useState } from "react";
import PropTypes from "prop-types";

SearchBar.propTypes = {
    regionData: PropTypes.array.isRequired,
    setResults: PropTypes.func // Assuming regionData is an array
  };

function SearchBar({ regionData, setResults }) {
  const [input, setInput] = useState("");
  

  const showResults = (value) => {
    const results = regionData.filter((result) => {
      return result.name.common.toLowerCase().includes(value.toLowerCase());
    });
    return setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    showResults(value);
  };

  return (
    <>
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