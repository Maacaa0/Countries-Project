import PropTypes from "prop-types";

// components
import SearchBar from "./SearchBar";
import Countries from "./Countries";
import Loading from "./Loading"; // Changed to import Loading directly
import NoResults from "./NoResults";

function DataComponent({
  results,
  region,
  setRegion,
  setResults,
  regionData,
  setInput,
  input,
  isLoading, // Added a comma here to correctly destructure props
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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="countries_container">
          {results.length === 0 ? (
            <NoResults />
          ) : (
            results.map((country, index) => (
              <Countries
                key={country.name.common + index}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
                code={country.cca3}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
}

DataComponent.propTypes = {
  results: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  regionData: PropTypes.array.isRequired,
  setInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  isLoading: PropTypes.bool, // Added PropTypes validation for isLoading
};

export default DataComponent;
