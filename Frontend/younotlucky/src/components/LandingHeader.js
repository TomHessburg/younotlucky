import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Jad from "../imgs/TzTok-Jad.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function LandingHeader() {
  return (
    <div>
      <h1>YOU NO LUCKY, JalYt!</h1>
      <img src={Jad} alt="Jad" />
      <p>
        You ever wonder exactly HOW unlucky you are going 3x drop rate for that
        pet?
      </p>
      <p>Welp, lets find out EXACTLY HOW unlucky you are :D</p>
      <Link
        to="/find_monster"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button size="large" variant="contained" color="primary">
          Click Here <ArrowForwardIcon style={{ marginLeft: "12px" }} />
        </Button>
      </Link>
    </div>
  );
}
