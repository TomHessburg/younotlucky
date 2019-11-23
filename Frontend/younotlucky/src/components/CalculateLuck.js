import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import styled from "styled-components";

function CalculateLuck(props) {
  const { selectedMonster, selectedItem } = props;

  const [trials, setTrials] = useState(0);
  const [successes, setSuccesses] = useState(1);

  const calculateLuck = () => {
    // get drop rate in decimal
    const splitRate = selectedItem.rarity.split("/");
    const numerator = Number(splitRate[0]);
    const denomenator = Number(splitRate[1]);
    const chanceInDecimal = Number(numerator / denomenator);

    const calculatedDropChange = 1 - Math.pow(1 - chanceInDecimal, trials);

    alert(`${calculatedDropChange * 100} %`);
  };

  return (
    <Wrapper className="App">
      <h2>Give Us Some Info</h2>
      <i>
        You've got a {selectedItem.rarity} chance of recieving{" "}
        {selectedItem.name} from a {selectedMonster.name}
      </i>
      <form>
        <label># of kills</label>
        <br />
        <MainInput
          type="number"
          value={trials}
          onChange={e => {
            setTrials(Number(e.target.value));
          }}
        />
        <br />
        {/* <label># of successes (probably 0 if youre here)</label>
        <br />
        <MainInput
          type="number"
          id="successes"
          value={successes}
          onChange={e => {
            setSuccesses(Number(e.target.value));
          }}
        /> */}
        <br />
        <Button
          onClick={calculateLuck}
          size="medium"
          variant="contained"
          color="secondary"
        >
          calculate luck
        </Button>
      </form>
      <div
        style={{
          width: "350px",
          margin: "auto",
          textAlign: "left"
        }}
      >
        {/* <p>
          You've got a {selectedItem.rarity} chance of recieving{" "}
          {selectedItem.name} from a {selectedMonster.name}
        </p> */}
      </div>
    </Wrapper>
  );
}

export default CalculateLuck;

const Wrapper = styled.div`
  width: 400px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 16px;

  i {
    margin-bottom: 16px;
    font-size: 14px;
  }

  form {
    margin-bottom: 40px;
    label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const MainInput = styled.input`
  width: 240px;
  margin: auto;
  padding: 8px;
  margin-bottom: 16px;
`;
