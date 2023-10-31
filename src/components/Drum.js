import React, { Component } from "react";
import PropTypes from "prop-types";

class Drum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click a button to play!",
    };
  }

  componentDidMount() {
    // Add an event listener to the document to handle keypress events
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  play = (str) => {
    let text;
    if (str === "q" || str === "Q") {
      text = "Heater 1!";
    } else if (str === "w" || str === "W") {
      text = "Heater 2!";
    } else if (str === "e" || str === "E") {
      text = "Heater 3!";
    } else if (str === "a" || str === "A") {
      text = "Heater 4!";
    } else if (str === "s" || str === "S") {
      text = "Clap!";
    } else if (str === "d" || str === "D") {
      text = "Open HH!";
    } else if (str === "z" || str === "Z") {
      text = "Kick n' Hat!";
    } else if (str === "x" || str === "X") {
      text = "Kick!";
    } else if (str === "c" || str === "C") {
      text = "Closed HH!";
    }
    var audio = document.getElementById(str);
    audio.play();

    this.setState({
      display: text,
    });
  };

  handleKeyPress = (e) => {
    let key = e.key;
    if (key === "q" || key === "Q") {
      this.play("Q");
    } else if (key === "w" || key === "W") {
      this.play("W");
    } else if (key === "e" || key === "E") {
      this.play("E");
    } else if (key === "a" || key === "A") {
      this.play("A");
    } else if (key === "s" || key === "S") {
      this.play("S");
    } else if (key === "d" || key === "D") {
      this.play("D");
    } else if (key === "z" || key === "Z") {
      this.play("Z");
    } else if (key === "x" || key === "X") {
      this.play("X");
    } else if (key === "c" || key === "C") {
      this.play("C");
    }
  };

  render() {
    return (
      <div className="container" id="drum-machine">
        <h1 className="text-center">A Drum Machine</h1>
        <div className="card my-3">
          <div className="card-body">
            <div className="text-center" id="display">
              {this.state.display}
            </div>
          </div>
        </div>
        <div className="align-items-center text-center">
          <button
            className="drum-pad btn col-3 btn-dark"
            id="drum-0"
            onClick={() => this.play("Q")}
          >
            Q
            <audio src="./assets/Heater-1.mp3" className="clip" id="Q" />
          </button>
          <button
            className="drum-pad btn col-3 btn-primary"
            id="drum-1"
            onClick={() => this.play("W")}
          >
            W
            <audio src="./assets/Heater-2.mp3" className="clip" id="W" />
          </button>
          <button
            className="drum-pad btn col-3 btn-dark"
            id="drum-2"
            onClick={() => this.play("E")}
          >
            E
            <audio src="./assets/Heater-3.mp3" className="clip" id="E" />
          </button>
        </div>
        <br />

        <div className="text-center">
          <button
            className="drum-pad btn col-3 btn-primary"
            id="drum-3"
            onClick={() => this.play("A")}
          >
            A
            <audio src="./assets/Heater-4_1.mp3" className="clip" id="A" />
          </button>
          <button
            className="drum-pad btn col-3 btn-dark"
            id="drum-4"
            onClick={() => this.play("S")}
          >
            S
            <audio src="./assets/Heater-6.mp3" className="clip" id="S" />
          </button>
          <button
            className="drum-pad btn col-3 btn-primary"
            id="drum-5"
            onClick={() => this.play("D")}
          >
            D
            <audio src="./assets/Dsc_Oh.mp3" className="clip" id="D" />
          </button>
        </div>
        <br />

        <div className="text-center">
          <button
            className="drum-pad btn col-3 btn-dark"
            id="drum-6"
            onClick={() => this.play("Z")}
          >
            Z
            <audio src="./assets/Kick_n_Hat.mp3" className="clip" id="Z" />
          </button>
          <button
            className="drum-pad btn col-3 btn-primary"
            id="drum-7"
            onClick={() => this.play("X")}
          >
            X
            <audio src="./assets/RP4_KICK_1.mp3" className="clip" id="X" />
          </button>
          <button
            className="drum-pad btn col-3 btn-dark"
            id="drum-8"
            onClick={() => this.play("C")}
          >
            C
            <audio src="./assets/Cev_H2.mp3" className="clip" id="C" />
          </button>
        </div>
      </div>
    );
  }
}

Drum.propTypes = {};

export default Drum;
