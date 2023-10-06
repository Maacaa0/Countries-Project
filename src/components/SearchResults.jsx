import PropTypes from "prop-types";

function SearchResults({ results }) {
  const filteredResults = results.map((result, index) => (
    <p
      key={index}
      to={`/country/${result.altSpellings}`}
      className="search_result"
      onClick={() => console.log(result.altSpellings[0])}
    >
      {result.name.common}
    </p>
  ));
console.log(results)
  return <div className="results_container">{filteredResults}</div>;
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
