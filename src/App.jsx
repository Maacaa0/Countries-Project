import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import DataComponent from "./components/DataComponent";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

function fetchData(region, setRegionData, setResults) {
  fetch(
    region === "all"
      ? `https://restcountries.com/v3.1/${region}`
      : `https://restcountries.com/v3.1/region/${region}`
  )
    .then((response) => response.json())
    .then((data) => {
      setRegionData(data);
      setResults(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// ADD FUNCTIONALITY TO SEARCH RESULTS
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [region, setRegion] = useState("all");
  const [regionData, setRegionData] = useState([]);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetchData(region, setRegionData, setResults);
  }, [region]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main>
      <Header setDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <DataComponent
              region={region}
              setRegion={setRegion}
              results={results}
              setResults={setResults}
              regionData={regionData}
              setInput={setInput}
              input={input}
            />
          }
        />
        <Route path="/:code" element={<CountryDetail allCountries={allCountries} />} />
      </Routes>
    </main>
  );
}

export default App;
