import { Label, ScreenElement} from "excalibur";
import { Resources } from './resources.js';

// Define a class named "UI" that extends the "ScreenElement" class
export class UI extends ScreenElement {

    //global variables
    engine;         // Reference to the game engine
    pointsText;     // Label for displaying the points

    constructor() {
        // set the initial position of the 'UI' object
        super({
            x: 10,
            y: 10 
        })
    }

    // Initialize the 'UI' object
    onInitialize(engine) {
        // Set the engine reference for the 'UI' object
        this.engine = engine

        // Create a label for displaying the points
        this.pointsText = new Label({
            text: `Score: 0`
        })

        // Add the points label as a child to the 'UI' object
        this.addChild(this.pointsText)
    }

    // Update the displayed points with the provided score
    updatePoints(score) {
        this.pointsText.text = `Score: ${score}`
    }

    // Execute before the update cycle of the 'UI' object
    onPreUpdate() {
        // Update the x position of the points label based on the camera position
        this.pointsText.pos.x = this.engine.currentScene.camera.x + 100
    }
}