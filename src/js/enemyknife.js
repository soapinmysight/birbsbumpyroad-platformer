import * as ex from "excalibur";
import { Resources } from "./resources.js";
import { Gameoverscreen } from "./gameoverscreen.js";

export class Enemyknife extends ex.Actor {
    x
    y
    speed
    constructor(x, y) {
        super({
            width: 100,
            height: 110,
            pos: new ex.Vector(x, y)
        });
        // Create a sprite for the normal state of the enemy using the 'Enemynormal' resource
        const enemyKnife = Resources.Enemyknife.toSprite()
        enemyKnife.width = 100
        enemyKnife.height = 110
        //adding graphics
        this.graphics.add(enemyKnife)
        this.speed = 300
        // Set the scale of the object
        this.scale = new ex.Vector(1.1, 1.1)
        // putting movement and setting the actions of the enemy to repeat forever
        this.actions.repeatForever((repeatCtx) => {
            // Moving the enemy to a specified position
            repeatCtx.moveTo(1400, 580, 90)
            // Moving the enemy to another specified position
            repeatCtx.moveTo(1700, 580, 90)
        })

    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        // Set the collision type of the 'Enemyknife' object to Active
        this.body.collisionType = ex.CollisionType.Active
    }

}
