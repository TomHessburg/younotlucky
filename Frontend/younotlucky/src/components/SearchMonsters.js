import React, { useState, useEffect } from "react";
import db from "../db.json";

import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

import styled from "styled-components";

function SearchMonsters(props) {
  const [monster, setMonster] = useState("");
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    props.setTabActive("test");
  });

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
    <Wrapper className="App">
      <h2>Search the OSRS Bestiary</h2>
      <form>
        <MainInput
          type="text"
          placeholder="monster name..."
          value={monster}
          onChange={e => {
            setMonster(e.target.value);
          }}
        />
        <br />
        <Button
          onClick={e => {
            props.history.push("/choose_item");
          }}
          size="medium"
          variant="contained"
          color="secondary"
        >
          select monster
        </Button>
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
                  props.selectedMonster.key === result.key ? true : false
                }
                onChange={() => {
                  props.setSelectedMonster(result);
                  setMonster(result.name);
                }}
              />
              <p>{result.key}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default withRouter(SearchMonsters);

const Wrapper = styled.div`
  max-width: 600px;
  min-width: 300px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 48px;
  padding: 16px;

  form {
    margin-bottom: 40px;
  }
`;

const MainInput = styled.input`
  width: 240px;
  margin: auto;
  padding: 8px;
  margin-bottom: 16px;
`;
