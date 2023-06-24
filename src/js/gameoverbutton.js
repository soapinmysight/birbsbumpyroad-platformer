import { Resources } from './resources.js'
import { Button } from './button';

export class Gameoverbutton extends Button {

    constructor(x, y) {
        super(x, y)
    }

    onInitialize() {
        //adding visual
        this.graphics.use(Resources.Gameoverbutton.toSprite())
    }
}