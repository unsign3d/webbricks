import * as PIXI from 'pixi.js'
import Paddle from './objects/paddle'
import {default as Brick, brickColors} from './objects/brick'

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

let brick = null
let colorCounter = 0
for(let row = 0; row < 8; ++row) {
  for(let col = 0; col < 6; ++col) {
    brick = new Brick(app, brickColors[++colorCounter % brickColors.length])
    brick.initialize(brick.width * col + 11, brick.height * row)
    app.stage.addChild(brick.sprite);
  }
}


// create a new Sprite from an image path
const paddle = new Paddle(app)
paddle.initialize()

app.stage.addChild(paddle.sprite);
// Listen for animate update
app.ticker.add(function(delta) {
  paddle.loop(delta)
});