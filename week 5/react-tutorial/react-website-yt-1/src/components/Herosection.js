import React from "react";
import { Button } from "./Button";
import "./Herosection.css";
import "../App.css";
function Herosection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>what are u waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          White TRAILER <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
