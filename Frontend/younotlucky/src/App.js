import React, { useState } from "react";
import "./App.css";
import SearchMonsters from "./components/SearchMonsters";
import LandingHeader from "./components/LandingHeader";
import ChooseItem from "./components/ChooseItem";
import CalculateLuck from "./components/CalculateLuck";
import Contact from "./components/Contact";

import { Route, withRouter } from "react-router-dom";

import styled from "styled-components";

function App(props) {
  const [selectedMonster, setSelectedMonster] = useState({
    name: "",
    drops: []
  });

  const [tabActive, setTabActive] = useState("home");

  const [selectedItem, setSelectedItem] = useState({ rarity: "1/1", name: "" });

  return (
    <div className="App">
      <LogoHeader>
        <h2>YOU NO LUCKY</h2>
      </LogoHeader>
      <MainWrapper>
        <TopTabRight
          onClick={() => {
            props.history.push("/find_monster");
          }}
          tabActive={tabActive}
        >
          <p>test luck</p>
        </TopTabRight>
        <ContactTabRight
          onClick={e => {
            props.history.push("/contact");
          }}
          tabActive={tabActive}
        >
          <p>contact/info</p>
        </ContactTabRight>
        <HomeTabLeft
          onClick={e => {
            props.history.push("/");
          }}
          tabActive={tabActive}
        >
          <p>home</p>
        </HomeTabLeft>
        <Route
          exact
          path="/"
          render={props => (
            <LandingHeader {...props} setTabActive={setTabActive} />
          )}
        />
        <Route
          exact
          path="/contact"
          render={props => <Contact {...props} setTabActive={setTabActive} />}
        />

        <Route
          exact
          path="/find_monster"
          render={props => (
            <SearchMonsters
              {...props}
              setTabActive={setTabActive}
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
              setTabActive={setTabActive}
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
              setTabActive={setTabActive}
              selectedMonster={selectedMonster}
              selectedItem={selectedItem}
            />
          )}
        />
      </MainWrapper>
    </div>
  );
}

export default withRouter(App);

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
  background: ${props => (props.tabActive === "test" ? "white" : "#401722")};
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
    color: ${props => (props.tabActive === "test" ? "#401722" : "white")};
    font-style: italic;
  }

  :hover {
    background: white;
    p {
      color: #401722;
    }
  }
`;

const ContactTabRight = styled.div`
  position: absolute;
  top: -32px;
  right: 120px;
  width: 120px;
  height: 32px;
  background: ${props => (props.tabActive === "contact" ? "white" : "#401722")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 14px;
    margin: 0 auto;
    padding: 0;
    color: ${props => (props.tabActive === "contact" ? "#401722" : "white")};;
    font-style: italic; 
  }

  :hover {
    background: white;
    p {
      color: #401722;
    }
`;

const HomeTabLeft = styled.div`
  position: absolute;
  top: -32px;
  right: 240px;
  width: 120px;
  height: 32px;
  background: ${props => (props.tabActive === "home" ? "white" : "#401722")};
  border-top-left-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 14px;
    margin: 0 auto;
    padding: 0;
    color: ${props => (props.tabActive === "home" ? "#401722" : "white")};;
    font-style: italic; 
  }

  :hover {
    background: white;
    p {
      color: #401722;
    }
`;

const LogoHeader = styled.div`
  width: 90vw;
  margin: auto;
  padding: 0 32px;
  h2 {
    margin: 0;
    margin-top: 16px;
    font-family: "VT323", monospace;
    font-size: 32px;
    text-align: left;
    color: #ea8f1e;
  }
`;
