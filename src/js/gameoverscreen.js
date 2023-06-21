import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Background } from './background.js'
import { Nest } from './nest'
import { Button } from './button'
import { level1 } from './level1'
import { Gameoverbutton } from './gameoverbutton'

// Define a class named "Gameoverscreen" that extends the "ex.Scene" class
export class Gameoverscreen extends ex.Scene {
    //declare variables
    game
    score
    gameover
    scoreLabel

    constructor(score) {
        super();
        // Set the score property of the instance to the provided score
        this.score = score
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine // Set the game property of the instance to the provided engine
        // Create a new label for displaying the score
        this.scoreLabel = new ex.Label({
            text: `Score: 0`,
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
            this.game.goToScene('level1')
        })
        this.add(restartbutton)
    }
    onActivate(_context) {
        super.onActivate(_context);
        // this.startScene()
    }

    // Update the text of the score label with the current score value
    onPreUpdate() {
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
    }
}
