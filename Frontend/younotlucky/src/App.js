import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./db.json";

function App() {
  const [monster, setMonster] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (monster.length > 1) {
      // e.preventDefault();
      const keys = Object.keys(db);
      const refinedResults = [];
      for (let i = 0; i < keys.length; i++) {
        const curMonster = db[keys[i]];
        if (curMonster.name.toLowerCase().includes(monster.toLowerCase())) {
          refinedResults.push(curMonster);
        }
      }
      setResults(refinedResults);
    } else {
      setResults([]);
    }
  }, [monster]);

  return (
    <div className="App">
      <h1>hi</h1>
      <form>
        <input
          type="text"
          placeholder="monster name..."
          value={monster}
          onChange={e => {
            setMonster(e.target.value);
          }}
        />
      </form>
      <div
        style={{
          width: "350px",
          margin: "auto",
          textAlign: "left"
        }}
      >
        {results.map(result => {
          return (
            <div key={result.key}>
              <p>{result.key}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
