import "./App.css";
import { useState } from "react";

  // Components
import DataComponent from "./components/DataComponent";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main>
      <Header setDarkMode={()=>setDarkMode(!darkMode)} 
              darkMode={darkMode}
      />

      <DataComponent />
    </main>
  );
}

export default App;
