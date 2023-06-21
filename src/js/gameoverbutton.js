import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Button } from './button';

export class Gameoverbutton extends Button {

    onInitialize() {
        this.graphics.use(Resources.Gameoverbutton.toSprite())

    }
}