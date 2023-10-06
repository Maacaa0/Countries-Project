/* eslint-disable react/prop-types */
function Countries(props) {
  return (
    <div className="country">
      <div className="image_container">
        {props.flag && <img
          className="country_flag"
          src={props.flag}
          alt={props.name + "flag"}
          loading="lazy"
        />}
      </div>
      <div className="information_container">
        <h2 className="country_name">{props.name}</h2>
        <p className="country_population"><strong>Population: </strong>{props.population.toLocaleString()}</p>
        <p className="country_region"><strong>Region: </strong>{props.region}</p>
        <p className="country_capital"><strong>Capital: </strong>{props.capital}</p>
      </div>
    </div>
  );
}

export default Countries;
