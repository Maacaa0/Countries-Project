import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

SearchBar.propTypes = {
  regionData: PropTypes.array.isRequired,
  setResults: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  setRegion: PropTypes.func.isRequired
};


function SearchBar(props) {
  const {
    setInput,
    input,
    regionData,
    setRegion,
    setResults,
    region,
    results
  } = props;
  
  const [searchTimeout, setSearchTimeout] = useState(null);

  const allRegions = ["all", "africa", "america", "asia", "europe", "oceania"];

  // buttons for select tag
  const btns = allRegions.map((region) => (
    <option className="text" key={region} value={region}>
      {region}
    </option>
  ));


// Might use useCallback
  const searchResults = (value) => {
    const results = regionData.filter((result) => {
      return result.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setResults(results);
  };

  
// Might use useCallback
  const handleChange = (value) => {
    setInput(value);
    // Clear the previous timeout if it exists
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    // Set a new timeout to fetch data after a delay (e.g., 500 milliseconds)
    const newTimeout = setTimeout(() => {
      searchResults(value);
    }, 300);

    setSearchTimeout(newTimeout);
  };

  function filterRegion(e) {
    setRegion(e.target.value);
    setInput("");
  }

  const filteredResults = results.map((result, index) => (
    <Link to={`/${result.cca3}`}
      key={index}
      className="search_result"
    >
      {result.name.common}
    </Link>
  ));

  const [showResults, setShowResults] = useState(false);

  const resultsContainer = useRef(null);

  useEffect(() => {
    setShowResults(input !== "")
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultsContainer.current && e.target !== resultsContainer.current) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  

  return (
    <nav>
      <div className="search_container">
        {region !== "all" && (
          <small className="searching text">
            searching in <p className="capitalize">{region}</p>
          </small>
        )}
        <input className="text"
          placeholder={"Search for a country..."}
          type="search"
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />

        {showResults && (
          <div className="results_container text" ref={resultsContainer}>
            {filteredResults}
          </div>
        )}
      </div>
      <select  className="text" onChange={filterRegion} value={region} name="regions">
        {btns}
      </select>
    </nav>
  );
}

export default SearchBar;
