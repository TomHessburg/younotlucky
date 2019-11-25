import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Jad from "../imgs/TzTok-Jad.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import styled from "styled-components";

export default function LandingHeader(props) {
  React.useEffect(() => {
    props.setTabActive("home");
  });

  return (
    <div>
      {/* <Wrapper>
        <img style={{ width: "120px" }} src={Jad} alt="Jad" />
      </Wrapper> */}
      <h1>Find out how ridiculous that OSRS dry streak really is.</h1>
      <Wrapper>
        <img style={{ width: "200px" }} src={Jad} alt="Jad" />
      </Wrapper>
      <BottomContainerWrappers>
        <ParagraphContainer>
          <p>
            You ever wonder exactly HOW unlucky you are going 3x drop rate for
            that pet? Welp, lets find out EXACTLY how unlucky you are :D
          </p>
          <Link
            to="/find_monster"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => {
              props.setTabActive("test");
            }}
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
            onClick={e => {
              props.history.push("/contact");
            }}
          >
            Contact Me <ArrowForwardIcon style={{ marginLeft: "12px" }} />
          </Button>
        </ParagraphContainer>
      </BottomContainerWrappers>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 16px 0;
  width: 100%;
  margin: 0 auto;
`;

const ParagraphContainer = styled.div`
  max-width: 450px;
  min-height: 350px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: 100%;
  }

  p {
    font-size: 20px;
    color: #0c0c0c;
    max-width: 600px;
    text-align: left;
  }

  @media (max-width: 900px) {
    min-height: 150px;
    max-width: 600px;
  }
`;

const BottomContainerWrappers = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  align-items: baseline;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
