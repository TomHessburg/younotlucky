import React, { useState } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

import styled from "styled-components";

function ChooseItem(props) {
  const { drops } = props.selectedMonster;

  const [filteredSearch, setFilteredSearch] = useState("");

  return (
    <Wrapper className="App">
      <h2>Choose an Item that this NPC Drops</h2>
      <form>
        <MainInput
          type="text"
          placeholder="item name..."
          value={filteredSearch}
          onChange={e => {
            setFilteredSearch(e.target.value);
          }}
        />
        <br />
        <Button
          onClick={e => {
            props.history.push("/calculate_luck");
          }}
          size="medium"
          variant="contained"
          color="secondary"
        >
          select item
        </Button>
      </form>
      <div
        style={{
          width: "350px",
          margin: "auto",
          textAlign: "left"
        }}
      >
        {drops
          .filter(drop =>
            drop.name.toLowerCase().includes(filteredSearch.toLowerCase())
          )
          .map(drop => {
            const { id, name, rarity } = drop;
            return (
              <div
                key={id}
                style={{
                  display: "flex"
                }}
              >
                <Checkbox
                  checked={props.selectedItem === drop ? true : false}
                  onChange={() => {
                    props.setSelectedItem(drop);
                  }}
                />
                <p>
                  <Name>{name}:</Name> {rarity} drop rate
                </p>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
}

export default withRouter(ChooseItem);

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

const Name = styled.span`
  font-weight: 600;
`;

const MainInput = styled.input`
  width: 240px;
  margin: auto;
  padding: 8px;
  margin-bottom: 16px;
`;
