import React, { Component } from 'react';
import TreasureChest from './TreasureChest';
import Header from './Header';
import { connect } from "react-redux";
import LandingPage from "./LandingPage";

class LandingPuzzle extends Component {
  render() {
    return (
      <div className="LandingPuzzle">
        {this.props.boxState === "OPEN" ? null : <Header />}
        {this.props.boxState === "OPEN" ? <LandingPage /> : <TreasureChest />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boxState: state.landingPuzzle.box,
  }
}

export default connect(mapStateToProps)(LandingPuzzle);
