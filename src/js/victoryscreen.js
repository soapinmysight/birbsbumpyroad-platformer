import { Vector, Scene, Label } from "excalibur";
import { BackgroundRepeat } from './repeatingBackground'
import { Startbutton } from './startbutton.js'


export class Victoryscreen extends Scene {

    //global variables
    engine
    victory

    constructor() {
        super();
    }

    onActivate(data) {
        // Updates the text of the 'victory' label with the victory message and the score
        this.victory.text = `VICTORY!!! \n Click on the button to play again. \n SCORE: ${data.data}`
    }

    onInitialize(engine) {
 
        this.engine = engine

        // Creates a new instance of 'BackgroundRepeat' and assigns it to the 'background2' property
        this.background2 = new BackgroundRepeat()
        // Adding the bg to the game
        this.add(this.background2)

        this.victory = new Label({
            pos: new ex.Vector(200, 200),
            text: "VICTROY!!!!!!!!!!!!!!!!! \n CLICK ON THE BUTTON TO PLAY AGAIN",
            scale: new Vector(2,2)
        })
        this.add(this.victory)

        let startbutton = new Startbutton(100, 300)
        startbutton.on('pointerup', () => {
            engine.goToScene('level1')
        })
        this.add(startbutton)
    }
}