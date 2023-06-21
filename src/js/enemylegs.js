import * as ex from "excalibur";
import { Resources } from "./resources.js";
import { Gameoverscreen } from "./gameoverscreen.js";

export class Enemylegs extends ex.Actor {
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
        const enemyLegs = Resources.Enemylegs.toSprite()
        enemyLegs.width = 100
        enemyLegs.height = 110
        //adding graphics
        this.graphics.add(enemyLegs)
        this.speed = 300
        // Set the scale of the object
        this.scale = new ex.Vector(1.1, 1.1)

    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        // Set the collision type of the 'Enemylegs' object to Active
        this.body.collisionType = ex.CollisionType.Active
    }

}
