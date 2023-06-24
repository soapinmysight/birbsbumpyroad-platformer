import * as ex from 'excalibur';
import { Resources } from './resources';

export class platform extends ex.Actor {
    constructor(x, y, width, height, image) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'),
        });
        console.log(image)
        if (image !== undefined) {
            const sprite = new ex.Sprite(image);
            this.graphics.use(sprite);
        }
        this.scale = new ex.Vector(0.2, 0.2)    }
}