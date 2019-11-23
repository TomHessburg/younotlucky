import React, { useState, useEffect } from "react";
import "./App.css";
import SearchMonsters from "./components/SearchMonsters";

function App() {
  const [selectedMonster, setSelectedMonster] = useState({});

  return (
    <div className="App">
      <SearchMonsters
        selectedMonster={selectedMonster}
        setSelectedMonster={setSelectedMonster}
      />
    </div>
  );
}

export default App;
