import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Jad from "../imgs/TzTok-Jad.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import styled from "styled-components";

export default function LandingHeader() {
  return (
    <div>
      <Wrapper>
        <h1>YOU NO LUCKY, JalYt!</h1>
        <img style={{ width: "240px" }} src={Jad} alt="Jad" />
      </Wrapper>
      <StyledPs>
        You ever wonder exactly HOW unlucky you are going 3x drop rate for that
        pet?
      </StyledPs>
      <StyledPs>Welp, lets find out EXACTLY HOW unlucky you are :D</StyledPs>
      <Link
        to="/find_monster"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button
          size="large"
          variant="contained"
          color="secondary"
          style={{ marginBottom: "64px" }}
        >
          Check Your Luck <ArrowForwardIcon style={{ marginLeft: "12px" }} />
        </Button>
      </Link>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  width: 100%;
  heigh: 100vh;
  background: #eaeaea;
  margin-bottom: 64px;
  h1 {
    margin-top: 0;
  }
`;

const StyledPs = styled.p`
  color: #0c0c0c;
  font-size: 24px;
`;
