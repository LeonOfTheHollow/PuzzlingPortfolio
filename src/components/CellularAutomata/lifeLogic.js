const ALIVE = 1;
const DEAD = 0;

function Array2D(width, height) {
  let a = new Array(height);
  for (let i = 0; i < height; i++) {
    a[i] = new Array(height);
  }
  return a;
}

class Life {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBufferIndex = 0;
    this.buffer = [Array2D(width, height), Array2D(width, height)];
    this.fieldAverage = 100;
    this.clear();
  }
  getCells() {
    return this.buffer[this.currentBufferIndex];
  }
  clear() {
    for (let rowToClear = 0; rowToClear < this.height; rowToClear++) {
      this.buffer[this.currentBufferIndex][rowToClear].fill(DEAD);
    }
  }
  randomize() {
    let buffer = this.buffer[this.currentBufferIndex];
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        const sign = Math.random() >= 0.5 ? 1 : -1;
        const randomCharge = Math.random();
        buffer[row][column] = randomCharge * sign;
      }
    }
  }
  step() {
    let backBufferIndex = this.currentBufferIndex ? 0 : 1;
    let currentBuffer = this.buffer[this.currentBufferIndex];
    let backBuffer = this.buffer[backBufferIndex];

    const countCharge = (col, row) => {
      // This code is a little confusing at first glance, with all these loops! What we're doing is iterating over all of a cell's neighbors -
      // that's why we offset the indices by one in each direction.
      // Of course, we also have to do a bunch of edge-casing: `continue`ing to the next neighbor whenever we hit the edge of the map, as well
      // as skipping the actual pixel we are considering (it isn't its own neighbor).
      // If we were so inclined, we could approach this logic in other ways.
      let neighbors = 0;
      let totalCharge = 0;

      for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        let placeInRow = row + rowOffset;

        if (placeInRow === -1) {
          placeInRow = this.height - 1;
        } else if (placeInRow === this.height) {
          placeInRow = 0;
        }

        for (let colOffset = -1; colOffset <= 1; colOffset++) {
          let placeInColumn = col + colOffset;

          if (placeInColumn === -1) {
            placeInColumn = this.width - 1;
          } else if (placeInColumn === this.width) {
            placeInColumn = 0;
          }

          if (!colOffset && !rowOffset) {
            continue;
          }

          // if (currentBuffer[placeInRow][placeInColumn] === ALIVE) neighbors++;
          totalCharge += currentBuffer[placeInRow][placeInColumn];
        }
      }
      // console.log("Got this many neighbors: ", neighbors)
      return totalCharge / 8;
    };

    let totalCharge = 0;
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        let averageCharge = countCharge(col, row);
        let thisCell = currentBuffer[row][col];
        totalCharge += averageCharge;
        backBuffer[row][col] = averageCharge;
      }
    }
    this.currentBufferIndex = !this.currentBufferIndex ? 1 : 0;
    this.fieldAverage = totalCharge / (this.width * this.height);
  }
}

export default Life;
