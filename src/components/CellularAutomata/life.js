import React, { Component } from 'react';
import Life from "./lifeLogic";

class LifeCanvas extends Component {
  constructor(props) {
    super(props);
    this.life = new Life(props.width, props.height);
    this.life.randomize();
  }

  componentDidMount() {
    requestAnimationFrame(() => this.animFrame());
  }

  animFrame() {
    let width = this.props.width;
    let height = this.props.height;
    let cells = this.life.getCells();
    let canvas = this.refs.canvas;
    if (!canvas) return;
    // This exit condition stops the animation loop when we leave the page.
    let ctx = canvas.getContext("2d");

    let imageData = ctx.getImageData(0, 0, width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let index = (y * width + x) * 4;
        let charge = cells[y][x] + 1;
        let color = charge < 1 ? "black" : "purple";
        
        if (color === "black") {
          imageData.data[index + 0] = 0x00;
          imageData.data[index + 1] = 0x00;
          imageData.data[index + 2] = 0x00;
          imageData.data[index + 3] = 0xff;
        }
        
        if (color === "purple") {
          imageData.data[index + 0] = 0x80;
          imageData.data[index + 1] = 0x00;
          imageData.data[index + 2] = 0x80;
          imageData.data[index + 3] = 0xff;
        }

        if (charge > 0.999 && charge < 1.001) {
          imageData.data[index + 0] = 0xff;
          imageData.data[index + 1] = 0xd7;
          imageData.data[index + 2] = 0x00;
          imageData.data[index + 3] = 0xff;
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
    this.life.step();
    requestAnimationFrame(() => this.animFrame());
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={this.props.width} height={this.props.height} />
        <p>{this.life.fieldAverage}</p>
      </div>
    )
  }
}

export default LifeCanvas;