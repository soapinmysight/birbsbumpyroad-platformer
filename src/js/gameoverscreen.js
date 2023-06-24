import { Vector, Scene, Font, FontUnit, Label } from "excalibur";
import { Gameoverbutton } from './gameoverbutton'
import { BackgroundRepeat } from './repeatingBackground'

// Define a class named "Gameoverscreen" that extends the "ex.Scene" class
export class Gameoverscreen extends Scene {
    //declare variables
    score
    scoreLabel

    constructor() {
        super();
    }

    onActivate(data) {
        // Logs the data value to the console
        console.log(data.data)
         // Assigns the data value to the 'score' property
        this.score = data.data
        // Calls the 'changeText' function
        this.changeText()
    }
    
    onInitialize(engine) {


        this.background2 = new BackgroundRepeat()
        // Adding the bg to the game
        this.add(this.background2)

        // Create a new label for displaying the score
        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                unit: FontUnit.Px,
                size: 20,
            })
        })
        this.add(this.scoreLabel)

        // Create a restart button with position (100, 100) and size (20, 20),
        let restartbutton = new Gameoverbutton(100, 100, 20, 20)
        //add pointerup eventlistener
        restartbutton.on('pointerup', () => {
            // Go to the "level1" scene when the button is clicked
            engine.goToScene('level1')
        })
        this.add(restartbutton)
    }

    changeText() {
        this.scoreLabel.text = `Score: ${this.score}`
    }

}
