let walker;
let preference = [0, 0, 1, 2, 2, 3]

function setup() {
//Remember how p5.js works? setup() is executed once when the sketch starts.

  createCanvas(640, 240);
  walker = new Walker();
  background(255);
//Create the walker.

}
function draw() {
//Then draw() loops forever and ever (until you quit).

  walker.step();
  walker.show();
//Call functions on the walker.

}


let choice = Math.floor(Math.random(preference));

class Walker {
  constructor() {
    //Objects have a constructor where they are initialized.

    this.x = width / 2;
    this.y = height / 2;
    //Objects have data.

  }


  show() {
      stroke(0);
      point(this.x, this.y);
  }

// step() {
//     const choice = floor(random(preference));
//     if (choice === 0) {
//       this.x++;
//     } else if (choice === 1) {
//       this.x--;
//     } else if (choice === 2) {
//       this.y++;
//     } else {
//       this.y--;
//     }
  //     }
  
  step() {
    let r = random(1);
    if (r < 0.4) {
      this.x++;
//A 40% chance of moving to the right

    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }

  //or
//   step() {
//     let xstep = floor(random(3)) - 1;
//     let ystep = floor(random(3)) - 1;
// //Yields –1, 0, or 1

//     this.x += xstep;
//     this.y += ystep;
//   }

  //or
//   step() {
//     let xstep = random(-1, 1);
//     let ystep = random(-1, 1);
// //Any floating-point number from –1 to 1

//     this.x += xstep;
//     this.y += ystep;
//   }
}


