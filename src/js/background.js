// Importing all exports from the 'excalibur' module and assigning it to the 'ex' variable
import * as ex from 'excalibur';
import { Actor, Vector, Sprite} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Background extends Actor {
    constructor(x, y, width, height, image) {
        super({
            pos: new Vector(x, y),   // Set the position of the background using the provided x and y coordinates
            width: width,   // Set the width of the background using the provided width value
            height: height, // Set the width of the background using the provided width value
            anchor: new Vector(0,0), // Set the anchor point of the background to (0, 0)
        });

        // Create a new sprite using the provided image (provided in level1.js)
        const sprite = new Sprite(image);
        // Set the graphics of the background to use the created sprite
        this.graphics.use(sprite);
        // Set the scale of the background
        this.scale = new Vector(0.63, 0.63)

    }
}