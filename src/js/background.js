// Importing all exports from the 'excalibur' module and assigning it to the 'ex' variable
import * as ex from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'


export class Background extends ex.Actor {
    constructor(x, y, width, height, image) {
        super({
            pos: new ex.Vector(x, y),   // Set the position of the background using the provided x and y coordinates
            width: width,   // Set the width of the background using the provided width value
            height: height, // Set the width of the background using the provided width value
            anchor: ex.Vector.Zero, // Set the anchor point of the background to (0, 0)
        });

        // Create a new sprite using the provided image (provided in level1.js)
        const sprite = new ex.Sprite(image);
        // Set the graphics of the background to use the created sprite
        this.graphics.use(sprite);
        // Set the scale of the background
        this.scale = new ex.Vector(0.63, 0.63)

    }
}

// Defining a class named 'BackgroundOther' that extends the 'Actor' class
export class BackgroundRepeat extends ex.Actor {

    offset

    onInitialize(_engine) {
        // Converting the 'Background' resource to a sprite
        const Background2 = Resources.Background2.toSprite()
        // Setting the value of 'offset' to the width of the 'treeImage'
        this.offset = Background2.width

        // Creating a new graphics group
        const group = new GraphicsGroup({
            members: [
                {
                    // Setting the 'graphic' property to the 'treeImage' sprite
                    graphic: Background2,
                    //setting the position
                    pos: new Vector(0, 0),
                },
                {
                    // Setting the 'graphic' property to the 'treeImage' sprite
                    graphic: Background2,
                    //setting the position
                    pos: new Vector(Background2.width, 0),
                }
            ]
        })

        // Setting the anchor of the graphics to (0, 0)
        this.graphics.anchor = new Vector(0, 0)
        // Adding the graphics group to the actor's graphics
        this.graphics.add(group)
        // Setting the initial position of the actor to (0, 0)
        this.pos = new Vector(0, 0)
        // Setting the initial velocity (movement) of the actor to (-110, 0)
        this.vel = new Vector(-110, 0)
    }

    // Callback function called after the actor has been updated
    onPostUpdate(_engine, _delta) {
        // Checking if the x-coordinate of the position is less than the negative value of 'offset'
        if (this.pos.x < -this.offset) {
            // Setting the position of the actor to (0, 0)
            this.pos = new Vector(0, 0)
        }
    }
}