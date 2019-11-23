import React, { useState } from "react";
import "./App.css";
import SearchMonsters from "./components/SearchMonsters";
import LandingHeader from "./components/LandingHeader";
import ChooseItem from "./components/ChooseItem";
import CalculateLuck from "./components/CalculateLuck";

import { Route } from "react-router-dom";

import styled from "styled-components";

function App() {
  const [selectedMonster, setSelectedMonster] = useState({
    name: "",
    drops: []
  });

  const [selectedItem, setSelectedItem] = useState({ rarity: "1/1" });

  return (
    <div className="App">
      <MainWrapper>
        <Route exact path="/" component={LandingHeader} />

        <Route
          exact
          path="/find_monster"
          render={props => (
            <SearchMonsters
              {...props}
              selectedMonster={selectedMonster}
              setSelectedMonster={setSelectedMonster}
            />
          )}
        />

        <Route
          exact
          path="/choose_item"
          render={props => (
            <ChooseItem
              {...props}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              selectedMonster={selectedMonster}
            />
          )}
        />
        <Route
          exact
          path="/calculate_luck"
          render={props => (
            <CalculateLuck
              {...props}
              selectedMonster={selectedMonster}
              selectedItem={selectedItem}
            />
          )}
        />
      </MainWrapper>
    </div>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 90vw;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 32px;
  box-sizing: border-box;
  min-height: 80vh;
  background: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.18);
`;
