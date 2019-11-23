import React, { useState, useEffect } from "react";
import db from "../db.json";

import Checkbox from "@material-ui/core/Checkbox";

function SearchMonsters(props) {
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
      <h3>Search the OSRS Bestiary</h3>
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
            <div
              style={{
                display: "flex"
              }}
              key={result.key}
            >
              <Checkbox
                checked={
                  props.selectedMonster.name === result.name ? true : false
                }
                onChange={() => {
                  props.setSelectedMonster(result);
                }}
              />
              <p>{result.key}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchMonsters;
