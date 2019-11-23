import React, { useState } from "react";
import "./App.css";
import SearchMonsters from "./components/SearchMonsters";
import LandingHeader from "./components/LandingHeader";

import { Route } from "react-router-dom";

import styled from "styled-components";

function App() {
  const [selectedMonster, setSelectedMonster] = useState({ name: "" });

  return (
    <div className="App">
      <NavBar />
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
      {/* <SearchMonsters
        selectedMonster={selectedMonster}
        setSelectedMonster={setSelectedMonster}
      /> */}
    </div>
  );
}

export default App;

const NavBar = styled.div`
  width: 100%;
  height: 48px;
  background: #401722;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
