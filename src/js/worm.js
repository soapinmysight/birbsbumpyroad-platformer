// Get all the important stuff from excalibur
import { Actor, Vector, CollisionType } from "excalibur"
// Get all the classes which we wrote
import { Resources } from './resources';
import { Mainplayer } from './player';

export class Worm extends Actor {

    //global variable
    engine;

    constructor(x, y) {
        super({
            // setting our pos to the passed in x, y, anchor to (0,0) and collision type to fixed because we dont wanna move
            pos: new Vector(x, y),
            width: 600,
            height: 400,
            anchor: new Vector(0,0),
            collisionType: CollisionType.Fixed,
        });
        // Set the worm's sprite and initialize other properties
        this.graphics.use(Resources.Worm.toSprite());
        this.scale = new Vector(0.15, 0.15)
    }

    onInitialize(engine) {
        this.engine = engine;
        // Whenever there is a collision happening we call the this.onCollisionStart method (function)
        this.on('collisionstart', (e) => this.onCollisionStart(e))
    }

    // Whenever we collide with something this method (function) is called
    onCollisionStart(e) {
        // checks wether we collided with the player and if we did we would increment the score by one and kill ourselves
        if (e.other instanceof Mainplayer) {
            // Increment the score
            this.engine.currentScene.updateScore(1)
            // kill ourselves
            this.kill()
        }

    }
}