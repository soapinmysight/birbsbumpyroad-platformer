// Importing specific classes from the "excalibur" module
import { Actor, Engine, Vector, Random, CollisionType, Input, Axis } from "excalibur"
// Importing specific classes from the "resources.js" file
import { Resources, ResourceLoader } from './resources.js'
// Importing the Floor class from the "floor.js" file
import { Floor } from './floor.js'

export class Knight extends Actor {

    engine;
    grounded;

    constructor() {
        super({
            //setting the width and height
            width: Resources.Knight.width,
            height: Resources.Knight.height
        })
        //console.log for debugging purposes
        console.log("Knight created");

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

        //collision thing for jumping
        this.on('collisionstart', (event) => { this.isGrounded(event) });

        //camera which follows actor
        engine.currentScene.camera.strategy.lockToActorAxis(this, Axis.X)
    }

    doScore() {
        this.engine.updateScore()
    }

    //grounded function for jumping
    isGrounded(event) {
        if (event.other instanceof Floor)
            this.grounded = true
    }

    onPreUpdate(engine, delta) {
        // Variable to store the horizontal speed of the knight
        let xspeed = 0
        // Variable to store the vertical speed of the knight
        let yspeed = 40

        // Code for handling the D key being held
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            xspeed = 300
        }

        // Code for handling the A key being held
        if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            xspeed = -300
        }

        // Code for handling the W key being pressed (jumping)
        if (engine.input.keyboard.wasPressed(Input.Keys.W)) {
            console.log('ihhtgg')
            yspeed = -900
            this.grounded = false
        }

        if (this.grounded) {
            if (engine.input.keyboard.wasPressed(Input.Keys.W)) {
                yspeed = 30
                this.grounded = false
            }
        }

        this.vel = this.vel.add(new Vector(xspeed * delta, yspeed * delta))
        this.vel = new Vector(xspeed, this.vel.y)
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

