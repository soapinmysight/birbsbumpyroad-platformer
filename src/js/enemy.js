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
            height: 100,
            pos: new ex.Vector(x, y)
        });
        const enemyNormal = Resources.Enemynormal.toSprite()
        enemyNormal.width = 120
        enemyNormal.height = 100
        this.graphics.add(enemyNormal)
        this.speed = 300
        this.scale = new ex.Vector(0.8, 0.8)

    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = ex.CollisionType.Active
    }

}
