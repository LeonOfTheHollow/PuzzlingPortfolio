import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <NavBar />
        <div className="LandingPage__ContentContainer">
          <div className="LandingPage__ArticleColumn">
            <p>
              Hi, nice to meet you! I'm Leon, a full-stack web developer, escape room prop builder, musician, and tabletop gaming enthusiast, and one way or another, you've found my page. It's half portfolio and half blog, with a dash of puzzle box. Expect new things to explore on a regular basis! 
            </p>
            <p>I got my start as a programmer writing C++ for custom props, but nowadays I mostly sling node.js, React, and other trendy JavaScript frameworks. If you're interested in my skillset and want to chat, find me at russell.l.bates@gmail.com.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
