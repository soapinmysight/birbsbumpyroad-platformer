// Get all the important stuff from excalibur
import { ScreenElement, Vector } from "excalibur";

// Screenelement is like an actor class however it is not affected by physics or collisions and it is drawn above all other actors, making it the perfect UI element
export class Button extends ScreenElement {
    constructor(x, y) {
        super({
            pos: new Vector(x, y), // Set the position of the button using the provided x and y coordinates
            width: 500,
            height: 500,
            anchor: new Vector(0,0),// Set the anchor point of the button to (0, 0)
        });

        // Set the scale of the button using a vector with x and y scale factors of 0.8
        this.scale = new Vector(0.7, 0.7)

    }
}