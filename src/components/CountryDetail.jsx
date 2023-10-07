import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { arrowIcon } from "../assets/icons";

CountryDetail.propTypes = {
  results: PropTypes.array.isRequired,
};

function CountryDetail({ results }) {
  const [countryData, setCountryData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${params.code}`)
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, [params.code]);

  return (
    <div className="detail_page">
      <Link className="back_btn" to="/"> {arrowIcon}Back</Link>

      {countryData.map((country) => (
        <div className="flex_container" key={country.name.common}>
          <div className="detail_page_image_container">
            <img
              className="detail_page_image"
              src={country.flags.svg}
              onError={(e) => {
                e.target.src = "./images/error-image.png";
                console.log("Image was possibly blocked by your addblocker.");
              }}
              alt={country.name.common + "flag"}
            />
          </div>
          <div className="detail_page_wrapper">
            <div className="detail_page_info_container">
                <h2 className="detail_page_title">{country.name.common}</h2>
                <div className="flex_container">
              <div className="detail_page_info_left">
                <p className="detail_page_info">
                  <strong>Native Name: </strong>
                  {country.altSpellings[1]}
                </p>
                <p className="detail_page_info">
                  <strong>Population: </strong>
                  {country.population.toLocaleString()}
                </p>
                <p className="detail_page_info">
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p className="detail_page_info">
                  <strong>Sub Region: </strong>
                  {country.subregion}
                </p>
                <p className="detail_page_info">
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </div>
              <div className="detail_page_info_right">
                <p className="detail_page_info">
                  <strong>Top Level Domain: </strong>
                  {country.tld}
                </p>
                <p className="detail_page_info">
                  <strong>Currencies: </strong>
                  {country.currencies[Object.keys(country.currencies)].name}
                </p>
                <p className="detail_page_info">
                  <strong>Languages: </strong>
                  {Object.values(country.languages).join(", ")}
                </p>
                </div>
              </div>
            </div>
            <div className="bordering_countries">
              <strong>
                Border Countries:
                </strong>
                {country.borders
                  ? country.borders.map((borderingCountry) => (
                      <Link
                        className="bordering_country"
                        key={borderingCountry}
                        to={`/${borderingCountry}`}
                      >
                        {results.map((result) =>
                          result.cca3 === borderingCountry
                            ? result.name.common
                            : ""
                        )}
                      </Link>
                    ))
                  : <p className="border_none">None</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryDetail;
