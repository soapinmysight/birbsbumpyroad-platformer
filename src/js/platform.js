import { Actor, Vector, CollisionType, Sprite } from "excalibur"
import { Resources } from './resources';

export class platform extends Actor {
    constructor(x, y, width, height, image) {
        super({
            pos: new Vector(x, y),
            width: width,
            height: height,
            anchor: new Vector(0,0),
            collisionType: CollisionType.Fixed,
        });
        if (image !== undefined) {
            const sprite = new Sprite(image);
            this.graphics.use(sprite);
        }
        this.scale = new Vector(0.2, 0.2)    
    }
}