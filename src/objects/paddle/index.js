import { Sprite, utils } from 'pixi.js'
import keyboard from '../../utils/keyboard'

const spriteHeight = 33
const spriteWidth = 128

export default class Paddle {
  constructor (app) {
    this.app = app
    this.sprite = Sprite.fromImage('assets/paddle.png')
    this.leftArrow = keyboard("ArrowLeft")
    this.rightArrow = keyboard("ArrowRight")
  }
  initialize = () => {
    // center the sprite's anchor point
    this.sprite.anchor.set(0);

    // move the sprite to the center of the screen
    this.sprite.x = this.app.screen.width / 2 - spriteWidth / 2
    this.sprite.y = this.app.screen.height - spriteHeight * 3
    this.sprite.vx = 0
    this.sprite.vy = 0
  
    this.rightArrow.press = () => {
      this.sprite.vx = 5
    }

    this.rightArrow.release = () => {
      this.sprite.vx = 0
    }

    this.leftArrow.press = () => {
      this.sprite.vx = -5
    }

    this.leftArrow.release = () => {
      this.sprite.vx = 0
    }
  }


  loop = (delta) => {
    const tmpX = this.sprite.x + this.sprite.vx
    if (tmpX >= 0 && tmpX < (this.app.screen.width - spriteWidth)) {
      this.sprite.x += this.sprite.vx
    }
  }
}