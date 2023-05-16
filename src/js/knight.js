// Importing specific classes from the "excalibur" module
import{Actor, Engine, Vector, Random, CollisionType} from "excalibur"
// Importing specific classes from the "resources.js" file
import {Resources, ResourceLoader} from './resources.js'

export class Knight extends Actor {


    constructor() {
        super()
        // this.pos = new Vector(new Random().floating(0,400), new Random().floating(0,400))
        // this.vel = new Vector(new Random().floating(-10,10), new Random().floating(-10,10))
}
    onInitialize(engine){
        this.body.useGravity  = true
        // Enabling gravity for the actor's body
        this.body.collisionType = CollisionType.Active;
        // Setting the collision type of the actor's body to "Active"
        this.graphics.add(Resources.Knight.toSprite());
        // Adding the knight's sprite from the Resources module to the actor's graphics
        this.scale = new Vector (0.4,0.4);
        // Setting the scale of the actor
    }

OnPreUpdate(engine) {

        // Variable to store the horizontal speed of the knight
        let xspeed = 0;
        // Variable to store the vertical speed of the knight
        let yspeed = 0;

        if(engine.input.keyboard.isHeld(Input.Keys.D)){
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

