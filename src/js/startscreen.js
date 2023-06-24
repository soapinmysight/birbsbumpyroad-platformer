import * as ex from "excalibur"
import { BackgroundRepeat } from './repeatingBackground'
import { Startbutton } from './startbutton'

// Creating a Startscreen class that extends from scene
export class Startscreen extends ex.Scene {

    // call the upperconstructor by typing super()
    constructor() {
        super();
    }

    // When the scene is loaded in we initialize all the things needed to be added to the scene
    onInitialize(engine) {
        // Create a new repeating background to make the background look dynamic
        let background = new BackgroundRepeat()
        this.add(background)

        // Create a new Startbutton so that when pressed on we can switch to the level1 scene
        let startbutton = new Startbutton(100, 100)
        // Whenever the startbutton is clicked upon we go to the level1 scene
        startbutton.on('pointerup', () => {
            engine.goToScene('level1')
        })
        this.add(startbutton)
    }
}