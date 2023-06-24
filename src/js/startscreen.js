import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Background } from './background.js'
import { Nest } from './nest'
import { Button } from './button'
import { level1 } from './level1'
import { BackgroundRepeat } from './repeatingBackground'
import { Startbutton } from './startbutton'

export class Startscreen extends ex.Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {
        this.background2 = new BackgroundRepeat()
        // Adding the bg to the game
        this.add(this.background2)

        let startbutton = new Startbutton(100, 100)
        startbutton.on('pointerup', () => {
            engine.goToScene('level1')
        })
        this.add(startbutton)
    }
}