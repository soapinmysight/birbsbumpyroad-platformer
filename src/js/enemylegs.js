import { Vector, Actor, CollisionType } from "excalibur";
import { Resources } from "./resources.js";


export class Enemylegs extends Actor {

    constructor(x, y) {
        super({
            width: 600,
            height: 450,
            pos: new Vector(x, y)
        });
        // Create a sprite for the normal state of the enemy using the 'Enemynormal' resource
        const enemyLegs = Resources.Enemylegs.toSprite()
        //adding graphics
        this.graphics.add(enemyLegs)
        // Set the scale of the object
        this.scale = new Vector(0.2, 0.2)
        
        this.body.collisionType = CollisionType.Active

        //put the movement of the object
        this.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveBy(1000, 580, 110)
            repeatCtx.moveBy(1310, 580, 110)})

    }


}
