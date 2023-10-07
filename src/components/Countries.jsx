import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Countries.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.array,
  population: PropTypes.number,
  code: PropTypes.string
};

function Countries({ flag, name, region, capital, population, code }) {
  return (
    <Link to={`/${code}`} className="country">
      
        <div className="image_container">
          <img
            className="country_flag"
            src={flag}
            alt={name + "flag"}
            loading="lazy"
            onError={(e) => {
              e.target.src = "./images/error-image.png";
              console.log("Image was possibly blocked by your addblocker.");
            }}
          />
        </div>
        <div className="information_container">
          <h2 className="country_name">{name}</h2>
          <p className="country_population">
            <strong>Population: </strong>
            {population.toLocaleString()}
          </p>
          <p className="country_region">
            <strong>Region: </strong>
            {region}
          </p>
          <p className="country_capital">
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      
    </Link>
  );
}

export default Countries;
