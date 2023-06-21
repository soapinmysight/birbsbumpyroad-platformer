import * as ex from 'excalibur';
import { Resources } from './resources';
import { Mainplayer } from './player';

export class Worm extends ex.Actor {

    //global variable
    score

    constructor(x, y, width, height, score) {
        super({
            pos: new ex.Vector(x, y),
            width,
            height,
            //set anchor to 0
            anchor: ex.Vector.Zero,
            //add collisiontype fixed
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('worm'),
        });
        // Use the 'Worm' sprite from the 'Resources' module
        this.graphics.use(Resources.Worm.toSprite());
        // Set the scale of the 'Worm' object
        this.scale = new ex.Vector(0.15, 0.15)
        // Store the 'score' passed to the constructor
        this.score = score

    }

    onInitialize() {
        // Register a collision event listener for 'collisionstart'
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    // Event handler for the 'collisionstart' event
    onCollisionStart(evt) {
        // Check if the collided object is an instance of 'Mainplayer'
        if (evt.other instanceof Mainplayer) {
            // Increment the score
            this.score.incrementScore()
            // Remove the 'Worm' object from the scene
            this.kill()
        }

    }
}