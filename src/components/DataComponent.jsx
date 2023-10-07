import PropTypes from "prop-types";

// components
import Countries from "./Countries";

DataComponent.propTypes = {
  results: PropTypes.array,
};

function DataComponent({ results }) {
  return (
    <section>
      {results.map((country, index) => (
        <Countries
          key={country.name.common + index}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.svg}
        />
      ))}
    </section>
  );
}

export default DataComponent;
