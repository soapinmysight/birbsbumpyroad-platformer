import { Actor, Engine, Vector, Random, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Floor extends Actor {
    constructor() {
        super({
            width: Resources.Floor.width,
            height: Resources.Floor.height,
            //collisionType: CollisionType.Fixed
        })
    }
    onInitialize() {
        this.pos = new Vector(400, 550)
        this.graphics.add(Resources.Floor.toSprite())
        // this.collisionType = CollisionType.Fixed
        this.body.useGravity = true
        this.CollisionType = CollisionType.Active
    }

}