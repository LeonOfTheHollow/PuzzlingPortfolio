import React, { Component } from "react";
import { connect } from "react-redux";
import { revealButton, updateCode } from "../actions";

import old_key from "../resources/key-img-svgrepocom.svg";
import keyhole from "../resources/keyhole-img-svgrepocom.svg";

class TreasureChest extends Component {
  render() {
    return (
      <div className="TreasureChest">
        <div className="TreasureChest__TopHalf">
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
              case "REVEALED":
                return (
                  <div
                    key={button.id}
                    onClick={() => this.props.updateCode(button.id)}
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
        <div className="TreasureChest__BottomHalf" />
        <div className="TreasureChest__Lock">
          <object type="image/svg+xml" data={keyhole} className="Keyhole">
            Something goes here...
          </object>
        </div>
        <div onClick={() => console.log("Clicked on the key.")}>
          <object
            draggable="true"
            type="image/svg+xml"
            data={old_key}
            className="OldKey"
          >
            An old key.
          </object>
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
    buttons: state.landingPuzzle.buttons
  };
};

export default connect(
  mapStateToProps,
  { revealButton, updateCode }
)(TreasureChest);
