import * as ex from 'excalibur'
import { Resources } from './resources'

// Define a class named "Button" that extends the "ex.ScreenElement" class
//ScreenElement is an excalibur class similar to an actor class
export class Button extends ex.ScreenElement {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y), // Set the position of the button using the provided x and y coordinates
            width: 500,
            height: 500,
            anchor: ex.Vector.Zero,// Set the anchor point of the button to (0, 0)
        });

        // Set the graphics of the button to use the sprite from "Resources" 
        this.graphics.use(Resources.Startbutton.toSprite());
        // Set the scale of the button using a vector with x and y scale factors of 0.8
        this.scale = new ex.Vector(0.7, 0.7)

    }
}