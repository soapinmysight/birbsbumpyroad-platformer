// Importing specific classes from the "excalibur" module
import { Actor, Engine, Vector, Random, CollisionType } from "excalibur"
// Importing specific classes from the "resources.js" file
import { Resources, ResourceLoader } from './resources.js'

export class Knight extends Actor {

    engine;

    constructor() {
        super({
            width: Resources.Knight.width,
            height: Resources.Knight.height
        })
        // this.pos = new Vector(new Random().floating(0,400), new Random().floating(0,400))
        // this.vel = new Vector(new Random().floating(-10,10), new Random().floating(-10,10))
    }

    onInitialize(engine) {
        this.engine = engine
        // Enabling gravity for the actor's body
        this.body.useGravity = true
        // Setting the collision type of the actor's body to "Active"
        this.body.collisionType = CollisionType.Active;
        // Adding the knight's sprite from the Resources module to the actor's graphics
        this.graphics.add(Resources.Knight.toSprite());
        this.pos = new Vector(200, 0)
        //pointerup event for score function
        this.on("pointerup", (event) => this.doScore())

    }

    doScore() {
        this.engine.updateScore()
    }

    OnPreUpdate(engine) {

        // Variable to store the horizontal speed of the knight
        let xspeed = 0;
        // Variable to store the vertical speed of the knight
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            // Code for handling the D key being held
        }
    }

    run() {
        // Code for the knight running
    }

    jump() {
        // Code for the knight jumping
    }

    attack() {
        // Code for the knight attacking
    }
}

