import { Sprite } from 'pixi.js'

const spriteHeight = 33
const spriteWidth = 128

export default class Brick {
  constructor (app, color) {
    this.app = app
    this.height = 32
    this.width = 128
    this.sprite = Sprite.fromImage(`assets/brick_${color}.png`)
  }
  initialize = (x,y) => {
    // center the sprite's anchor point
    this.sprite.anchor.set(0);

    // move the sprite to the center of the screen
    this.sprite.x = x
    this.sprite.y = y
  }


  loop = (delta) => {
  }
}

export const brickColors = ['red', 'white', 'yellow', 'green']
