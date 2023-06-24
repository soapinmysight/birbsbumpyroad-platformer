import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources';

export class Nest extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 200,
            height: 800,
            anchor: new Vector(0,0),
            collisionType: CollisionType.Fixed,
        });
        this.graphics.use(Resources.Nest.toSprite());
        this.scale = new Vector(0.2, 0.2)
    }
}