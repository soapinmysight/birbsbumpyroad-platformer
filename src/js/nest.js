import * as ex from 'excalibur';
import { Resources } from './resources';

export class Nest extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: 200,
            height: 800,
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('nest'),
        });
        this.graphics.use(Resources.Nest.toSprite());
        this.scale = new ex.Vector(0.2, 0.2)

    }
}