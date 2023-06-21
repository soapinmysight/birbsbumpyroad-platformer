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

    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        // Set the collision type of the 'Enemy' object to Active
        this.body.collisionType = ex.CollisionType.Active
    }

}
