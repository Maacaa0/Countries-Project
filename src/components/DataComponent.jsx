/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

// components
import Countries from "./Countries";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function DataComponent() {
  const [region, setRegion] = useState("all");
  const [regionData, setRegionData] = useState([]);
  const [results, setResults] = useState([]);
  const [allRegions, setAllRegions] = useState([
    "all",
    "africa",
    "america",
    "asia",
    "europe",
    "oceania",
  ]);

  useEffect(() => {
    fetch(
      region === "all"
        ? `https://restcountries.com/v3.1/${region}`
        : `https://restcountries.com/v3.1/region/${region}`
    )
      .then((response) => response.json())
      .then((data) => setRegionData(data))
      .catch((error) => console.log(error));
  }, [region]);

  function filterRegion(e) {
    setRegion(e.target.value);
  }

  const btns = allRegions.map((region) => (
    <option key={region} value={region}>
      {region}
    </option>
  ));

  const countries = regionData.map((country, index) => (
    <Countries
      key={country.name.common + index}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
      flag={country.flags.svg}
    />
    // console.log(country.name.official)
  ));


  const [showResults, setShowResults] = useState(results.length > 0)

  const resultsContainer = useRef(null)

  useEffect(()=> {
    setShowResults(results.length > 0)
  },[results])

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
    <>
      <nav>
        <div className="search_container" ref={resultsContainer}>
        <SearchBar setResults={setResults} regionData={regionData}/>
        {showResults && <SearchResults results={results}/>}
        </div>
        <select onChange={filterRegion} value={region} name="regions" id="">
          {btns}
        </select>
      </nav>
      <section>
        {countries}
      </section>
    </>
  );
}

export default DataComponent;
