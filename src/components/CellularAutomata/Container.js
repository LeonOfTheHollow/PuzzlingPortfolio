import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar";
import LifeCanvas from "./life";

class CellularAutomataPage extends Component {
  render() {
    return (
      <div className="CellularAutomataPage">
        <NavBar />
        <div className="CellularAutomataPage__Container">
          <LifeCanvas width={800} height={600}/>
        </div>
      </div>
    );
  }
}

export default CellularAutomataPage;