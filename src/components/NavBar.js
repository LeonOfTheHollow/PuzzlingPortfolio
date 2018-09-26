import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link className="NavBar__Link" to="/automata">
          L
        </Link>
        <Link className="NavBar__Link" to="/">
          E
        </Link>
        <Link className="NavBar__Link" to="/">
          O
        </Link>
        <Link className="NavBar__Link" to="/">
          N
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default NavBar;