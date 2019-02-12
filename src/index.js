import * as PIXI from 'pixi.js'
import Paddle from './objects/paddle'


var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
const paddle = new Paddle(app)
paddle.initialize()

app.stage.addChild(paddle.sprite);
// Listen for animate update
app.ticker.add(function(delta) {
  paddle.loop(delta)
});