import "./App.css";
import { useEffect, useState } from "react";

  // Components
  import DataComponent from "./components/DataComponent";
  import Header from "./components/Header";
  import SearchBar from "./components/SearchBar";
  
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
  
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [region, setRegion] = useState("all");
  const [regionData, setRegionData] = useState([]);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    fetchData(region, setRegionData, setResults);
  }, [region]);

  return (
    <main>
      <Header setDarkMode={()=>setDarkMode(!darkMode)} 
              darkMode={darkMode}
      />

      <SearchBar
            region={region}
            setRegion={setRegion}
            results={results}
            setResults={setResults}
            regionData={regionData}
            setInput={setInput}
            input={input}
          />

      <DataComponent results={results}/>
    </main>
  );
}

export default App;
