import React, { Component } from 'react';
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return(
      <div className={this.props.boxState === "CLOSED" ? "AppHeader" : "AppHeader AppHeader--hiding"}>
        <h1>
          {this.props.banner}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    banner: state.landingPuzzle.banner,
    boxState: state.landingPuzzle.box,
  }
}

export default connect(mapStateToProps)(Header);