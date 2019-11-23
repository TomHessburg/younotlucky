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
        <img style={{ width: "120px" }} src={Jad} alt="Jad" />
      </Wrapper>
      <h1>
        You No Lucky! Find out how ridiculous that OSRS dry streak really is.
      </h1>
      <BottomContainerWrappers>
        <ParagraphContainer>
          <p>
            You ever wonder exactly HOW unlucky you are going 3x drop rate for
            that pet? Welp, lets find out EXACTLY how unlucky you are :D
          </p>
          <Link
            to="/find_monster"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              style={{ marginBottom: "64px" }}
            >
              Check Your Luck{" "}
              <ArrowForwardIcon style={{ marginLeft: "12px" }} />
            </Button>
          </Link>
        </ParagraphContainer>
        <ParagraphContainer>
          <p>
            <strong>SO YOU KNOW</strong> I'm definitely not a statistics major
            or anything. Just figured i'd make this little tool that uses some
            basic binomial probability to give you some kind of an estimate of
            how ridiculously unlucky you are :) If you notice anything wrong,
            please lmk!
          </p>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            style={{ marginBottom: "64px" }}
          >
            Contact Me <ArrowForwardIcon style={{ marginLeft: "12px" }} />
          </Button>
        </ParagraphContainer>
      </BottomContainerWrappers>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 40px 0;
  width: 100%;
  heigh: 100vh;
  background: #eaeaea;
  margin-bottom: 64px;
  h1 {
    margin-top: 0;
  }
`;

const ParagraphContainer = styled.div`
  max-width: 450px;
  margin: auto;
  padding: 0 16px;

  p {
    font-size: 20px;
    color: #0c0c0c;
    max-width: 600px;
    text-align: left;
  }
`;

const BottomContainerWrappers = styled.div`
  display: flex;
  align-items: center;
  justify-conent: center:
  flex-wrap: nowrap;
  margin-top: 64px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
