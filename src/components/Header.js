import React, { Component } from 'react';
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return(
      <div className="AppHeader">
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
  }
}

export default connect(mapStateToProps)(Header);