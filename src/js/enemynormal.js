import * as ex from "excalibur";
import { Resources } from "./resources.js";
import { Gameoverscreen } from "./gameoverscreen.js";

export class Enemy extends ex.Actor {
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
        const enemyNormal = Resources.Enemynormal.toSprite()
        enemyNormal.width = 100
        enemyNormal.height = 110
        //adding graphics
        this.graphics.add(enemyNormal)
        this.speed = 300
        // Set the scale of the object
        this.scale = new ex.Vector(1.1, 1.1)
        // adding movement and setting the actions of the enemy to repeat forever
        this.actions.repeatForever((repeatCtx) => {
            // Moving the enemy to a specified position (610, 580) over a duration of 100 milliseconds
            repeatCtx.moveBy(620, 580, 100)
            // Moving the enemy to another specified position (1000, 580) over a duration of 100 milliseconds
            repeatCtx.moveBy(900, 580, 100)
        })
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        // Set the collision type of the 'Enemy' object to Active
        this.body.collisionType = ex.CollisionType.Active
    }

}
