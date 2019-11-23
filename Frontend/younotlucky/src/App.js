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
        <TopTabRight>
          <p>test luck</p>
        </TopTabRight>
        <ContactTabRight>
          <p>contact</p>
        </ContactTabRight>
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
  margin-top: 56px;
  margin-bottom: 32px;
  padding: 32px;
  box-sizing: border-box;
  min-height: 80vh;
  background: white;
  position: relative;
`;

const TopTabRight = styled.div`
  position: absolute;
  top: -32px;
  right: 0;
  width: 120px;
  height: 32px;
  background: white;
  border-top-right-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 14px;
    margin: 0 auto;
    padding: 0;
    color: #401722;
    font-style: italic;
  }

  :hover {
    background: #401722;
    p {
      color: white;
    }
  }
`;

const ContactTabRight = styled.div`
  position: absolute;
  top: -32px;
  right: 120px;
  width: 120px;
  height: 32px;
  background: white;
  border-top-left-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid #eaeaea;

  p {
    font-size: 14px;
    margin: 0 auto;
    padding: 0;
    color: #401722;
    font-style: italic;
  }

  :hover {
    background: #401722;
    p {
      color: white;
    }
`;
