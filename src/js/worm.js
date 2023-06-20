import * as ex from 'excalibur';
import { Resources } from './resources';
import { Mainplayer } from './player';

export class Worm extends ex.Actor {
    score
    constructor(x, y, width, height, score) {
        super({
            pos: new ex.Vector(x, y),
            width,
            height,
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('worm'),
        });
        this.graphics.use(Resources.Worm.toSprite());
        this.scale = new ex.Vector(0.15, 0.15)
        this.score = score

    }

    onInitialize() {
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    onCollisionStart(evt) {
        if (evt.other instanceof Mainplayer) {
            this.score.incrementScore()
            this.kill()
        }

    }
}