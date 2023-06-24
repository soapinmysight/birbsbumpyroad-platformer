import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Nest } from './nest'
import { Button } from './button'
import { level1 } from './level1'
import { Gameoverbutton } from './gameoverbutton'
import { BackgroundRepeat } from './repeatingBackground'

// Define a class named "Gameoverscreen" that extends the "ex.Scene" class
export class Gameoverscreen extends ex.Scene {
    //declare variables
    engine
    score
    gameover
    scoreLabel

    constructor() {
        super();
        // Set the score property of the instance to the provided score
    }

    onActivate(data) {
        console.log(data.data)
        this.score = data.data
        this.changeText()
    }
    onInitialize(engine) {
        super.onInitialize(engine);
        this.engine = engine 

        this.background2 = new BackgroundRepeat()
        // Adding the bg to the game
        this.add(this.background2)

        // Create a new label for displaying the score
        this.scoreLabel = new ex.Label({
            text: `Score: ${this.score}`,
            pos: new ex.Vector(100, 100),
            font: new ex.Font({
                unit: ex.FontUnit.Px,
                size: 20,
            })
        })
        this.add(this.scoreLabel)

        // Create a restart button with position (100, 100) and size (20, 20),
        let restartbutton = new Gameoverbutton(100, 100, 20, 20)
        //add pointerup eventlistener
        restartbutton.on('pointerup', () => {
            // Go to the "level1" scene when the button is clicked
            this.engine.goToScene('level1')
        })
        this.add(restartbutton)
    }

    changeText() {
        this.scoreLabel.text = `Score: ${this.score}`
    }

}
