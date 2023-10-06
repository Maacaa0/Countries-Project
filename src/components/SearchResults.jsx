import PropTypes from "prop-types";

function SearchResults({ results }) {
  const filteredResults = results.map((result, index) => (
    <p
      key={index}
      className="search_result"
      onClick={() => alert(`You selected: ${result.name.common}`)}
    >
      {result.name.common}
    </p>
  ));
  return <div className="results_container">{filteredResults}</div>;
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
