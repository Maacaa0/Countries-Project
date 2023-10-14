import PropTypes from "prop-types";

// components
import SearchBar from "./SearchBar";
import Countries from "./Countries";

DataComponent.propTypes = {
  results: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  regionData: PropTypes.array.isRequired,
  setInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};
function DataComponent({
  results,
  region,
  setRegion,
  setResults,
  regionData,
  setInput,
  input, isLoading
}) {
  
  return (
    <section>
      <SearchBar
        region={region}
        setRegion={setRegion}
        results={results}
        setResults={setResults}
        regionData={regionData}
        setInput={setInput}
        input={input}
      />
      {isLoading && <div className="loading">loading...</div>}
      <div className="countries_container">
        {results.map((country, index) => (
          <Countries
            key={country.name.common + index}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
            code={country.cca3}
          />
        ))}
      </div>
    </section>
  );
}

export default DataComponent;
