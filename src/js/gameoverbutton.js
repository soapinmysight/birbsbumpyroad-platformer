import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
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