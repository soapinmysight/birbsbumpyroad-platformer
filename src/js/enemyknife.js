import { Vector, Actor, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Enemyknife extends Actor {

    constructor(x, y) {
        super({
            width: 700,
            height: 650,
            pos: new Vector(x, y)
        });
        // Create a sprite for the normal state of the enemy using the 'Enemynormal' resource
        const enemyKnife = Resources.Enemyknife.toSprite()
        //adding graphics
        this.graphics.add(enemyKnife)
        // Set the scale of the object
        this.scale = new Vector(0.2, 0.2)

        this.body.collisionType = CollisionType.Active

        // putting movement and setting the actions of the enemy to repeat forever
        this.actions.repeatForever((repeatCtx) => {
            // Moving the enemy to a specified position
            repeatCtx.moveBy(1400, 580, 90)
            // Moving the enemy to another specified position
            repeatCtx.moveBy(1700, 580, 90)
        })

    }
}
