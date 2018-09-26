import React, { Component } from "react";
import { connect } from "react-redux";
import {
  revealButton,
  updateCode,
  pickKeyUp,
  setKeyDown,
  animateFallingKey,
  animateOpeningBox,
  hideAllButtons
} from "../actions";

import { KeyVectors } from "../resources/key-svg-markup.js";
import keyhole from "../resources/keyhole-img-svgrepocom.svg";

class TreasureChest extends Component {
  render() {
    console.log("Rendering the treaure chest with ");
    return (
      <div className={this.props.boxState === "CLOSED" ? "TreasureChest" : this.props.boxState === "OPENING" ? "TreasureChest TreasureChest--opening" : null}>
        <div
          className={
            this.props.boxState === "OPENING"
              ? "TreasureChest__TopHalf TreasureChest__TopHalf--opening"
              : "TreasureChest__TopHalf"
          }
        >
          {this.props.buttons.map(button => {
            switch (button.visibility) {
              case "HIDDEN":
                return (
                  <div
                    key={button.id}
                    onClick={() => this.props.revealButton(button.id)}
                    className="TreasureChest__Button TreasureChest__Button--hidden"
                  />
                );
              case "REVEALING":
                return (
                  <div
                    key={button.id}
                    className="TreasureChest__Button TreasureChest__Button--flipping"
                  />
                );
              case "HIDING":
                return (
                  <div
                    key={button.id}
                    className="TreasureChest__Button TreasureChest__Button--unflipping"
                  >
                    {button.char}
                  </div>
                );
              case "SOLVED":
                return (
                  <div
                    key={button.id}
                    className="TreasureChest__Button TreasureChest__Button--hidden"
                  >
                    {button.char}
                  </div>
                );
              case "REVEALED":
                return (
                  <div
                    key={button.id}
                    onClick={() => {
                      this.props.updateCode(button.id);
                      if (
                        this.props.buttons[0].char === "L" &&
                        this.props.buttons[1].char === "E" &&
                        this.props.buttons[2].char === "O" &&
                        this.props.buttons[3].char === "N" &&
                        this.props.keyState !== "REVEALED"
                      ) {
                        this.props.animateFallingKey();
                        this.props.hideAllButtons();
                      }
                    }}
                    className="TreasureChest__Button TreasureChest__Button--revealed"
                  >
                    <div className="TreasureChest__ButtonCode">
                      {button.char}
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        <div
          className={
            this.props.boxState === "OPENING"
              ? "TreasureChest__BottomHalf TreasureChest__BottomHalf--opening"
              : "TreasureChest__BottomHalf"
          }
        />
        <div
          className={
            this.props.boxState === "OPENING" || this.props.boxState === "OPEN"
              ? "TreasureChest__Lock TreasureChest__Lock--solved"
              : "TreasureChest__Lock"
          }
        >
          <object
            onDragOver={() => this.props.animateOpeningBox()}
            type="image/svg+xml"
            data={keyhole}
            className="Keyhole"
          >
            Something goes here...
          </object>
        </div>
        <div
          draggable="true"
          onDrag={this.props.pickKeyUp}
          onDragEnd={this.props.setKeyDown}
        >
          {this.props.keyState === "REVEALED" ? (
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="200px"
              height="100px"
              viewBox="0 0 400 400"
            >
              <g>{KeyVectors}</g>
            </svg>
          ) : this.props.keyState === "FALLING" ? (
            <svg
              className="OldKey OldKey--falling"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="200px"
              height="100px"
              viewBox="0 0 400 400"
            >
              <g>{KeyVectors}</g>
            </svg>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    "This is the app state at time of render for TreasureChest component."
  );
  return {
    buttons: state.landingPuzzle.buttons,
    keyState: state.landingPuzzle.key,
    boxState: state.landingPuzzle.box
  };
};

export default connect(
  mapStateToProps,
  {
    revealButton,
    updateCode,
    pickKeyUp,
    setKeyDown,
    animateFallingKey,
    animateOpeningBox,
    hideAllButtons
  }
)(TreasureChest);
