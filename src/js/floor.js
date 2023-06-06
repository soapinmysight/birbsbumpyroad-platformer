import { Actor, Engine, Vector, Random, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Floor extends Actor {
    constructor() {
        super({
            width: Resources.Floor.width,
            height: Resources.Floor.height
        })
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Fixed;
        this.graphics.add(Resources.Floor.toSprite());
        this.pos = new Vector(0, 1200)
    }
}