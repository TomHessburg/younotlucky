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
      <NavBar>{/* <p>younolucky</p> */}</NavBar>
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
      {/* <SearchMonsters
        selectedMonster={selectedMonster}
        setSelectedMonster={setSelectedMonster}
      /> */}
    </div>
  );
}

export default App;

const NavBar = styled.div`
  display: flex;
  align-items: start;
  padding: 8px 24px;
  width: 100%;
  height: 48px;
  background: #401722;
  margin-bottom: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  p {
    color: white;
  }
`;
