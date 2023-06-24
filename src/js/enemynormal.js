import { Vector, Actor, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Enemy extends Actor {

    constructor(x, y) {
        super({
            width: 700,
            height: 650,
            pos: new Vector(x, y)
        });
        // Create a sprite for the normal state of the enemy using the 'Enemynormal' resource
        const enemyNormal = Resources.Enemynormal.toSprite()
        //adding graphics
        this.graphics.add(enemyNormal)
        // Set the scale of the object
        this.scale = new Vector(0.2, 0.2)

        this.body.collisionType = CollisionType.Active

        // adding movement and setting the actions of the enemy to repeat forever
        this.actions.repeatForever((repeatCtx) => {
            // Moving the enemy to a specified position (610, 580) over a duration of 100 milliseconds
            repeatCtx.moveBy(620, 580, 100)
            // Moving the enemy to another specified position (1000, 580) over a duration of 100 milliseconds
            repeatCtx.moveBy(900, 580, 100)
        })
    }
}
