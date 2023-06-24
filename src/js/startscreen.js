import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Background, BackgroundRepeat } from './background.js'
import { Nest } from './nest'
import { Button } from './button'
import { level1 } from './level1'

export class Startscreen extends ex.Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startScene()
    }
    startScene() {
        this.background2 = new BackgroundRepeat()
        // Adding the bg to the game
        this.add(this.background2)

        let startbutton = new Button(300, 250)
        startbutton.on('pointerup', () => {
            this.game.goToScene('level1')
        })
        this.add(startbutton)

    }
}