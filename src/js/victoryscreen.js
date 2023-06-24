import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Nest } from './nest'
import { Button } from './button'
import { level1 } from './level1'
import { BackgroundRepeat } from './repeatingBackground'
import { Startbutton } from './startbutton.js'


export class Victoryscreen extends ex.Scene {

    engine
    victory

    constructor() {
        super();
    }

    onActivate(data) {
        this.victory.text = `VICTORY!!! \n Click on the button to play again. \n SCORE: ${data.data}`
    }

    onInitialize(engine) {
 
        this.engine = engine

        this.background2 = new BackgroundRepeat()
        // Adding the bg to the game
        this.add(this.background2)

        this.victory = new ex.Label({
            pos: new ex.Vector(200, 200),
            text: "VICTROY!!!!!!!!!!!!!!!!! \n CLICK ON THE BUTTON TO PLAY AGAIN",
            scale: new ex.Vector(2,2)
        })
        this.add(this.victory)

        let startbutton = new Startbutton(100, 300)
        startbutton.on('pointerup', () => {
            engine.goToScene('level1')
        })
        this.add(startbutton)
    }
}