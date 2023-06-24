// Get all the important stuff from excalibur
import { Vector, Input, Actor, CollisionType, Shape } from "excalibur"
// Get all the classes which we wrote
import { Resources } from "./resources";
import { platform } from "./platform";
import { Nest } from "./nest";
import { Enemy } from "./enemynormal";
import { Enemylegs } from "./enemylegs";
import { Enemyknife } from "./enemyknife";

// making the player class
export class Mainplayer extends Actor {

    //Declare global variables
    sprite;
    grounded = true
    engine

    constructor() {
        super({
            //set collisiontype to active so that it can interact with other objects in the scene
            collisionType: CollisionType.Active,
            collider: Shape.Box(250, 350, new Vector(0.5,0.5), new Vector(0, 0)),
        });
    }

    onInitialize(engine) {
        this.engine = engine
        // setting useGravity to true so that it can fall to the ground
        this.body.useGravity = true

        // Whenever there is a collision happening we call the this.onCollisionStart method (function)
        this.on('collisionstart', (e) => this.onCollisionStart(e))
    
        // Set the player's sprite and initialize other properties
        this.sprite = Resources.Birb.toSprite()
        this.graphics.use(this.sprite);
        this.scale = new Vector(0.25, 0.25)
        this.pos = new Vector(50, 500);
    }

    // This method is used to update the players position based on which key you are pressing (movement code)
    onPreUpdate(engine) {

        // initially setting the speed to 0, Whenever we arent pressing any keys we dont want to move :|
        let xspeed = 0
        let yspeed = 0

        // Assigning the keyboard class to kb
        let kb = engine.input.keyboard

        // check wether the W key is held or the Up arrow key is held
        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
            // If we are grounded and not in the air
            if (this.grounded == true) {
                // set the yspeed to -500 to jump
                yspeed = -500
                // set this.gounded to false so that we cant jump in the air
                this.grounded = false
            }
        }   
        // check wether the A key is held or the Left arrow key is held
        if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left)) {
            // set the xspeed to -300 to move to the left
            xspeed = -300
            // Setting the sprite variable to flip horizontally
            this.sprite.flipHorizontal = true
            // using this sprite to change the way the sprite looks
            this.graphics.use(this.sprite)
        }
        // check wether the D key is held or the Right arrow key is held
        if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right)) {
            // set the xspeed to 300 to move to the right
            xspeed = 300
            // Setting the sprite variable to flip horizontally
            this.sprite.flipHorizontal = false
            // using this sprite to change the way the sprite looks
            this.graphics.use(this.sprite)
        }
        
        // After checking which buttons were pressed we update the speed of the players
        this.vel = new Vector(xspeed, this.vel.y + yspeed)
        // make sure the camera is following us at all times
        engine.currentScene.camera.x = this.pos.x + 200
    }


    // Whenever we collide with something this method (function) is called
    onCollisionStart(e) {
        // checks wether we collided with a nest 
        //and if we did we would go to the Victory screen and passing the score trough.
        if (e.other instanceof Nest) {
            this.engine.goToScene('Victoryscreen', this.engine.currentScene.score)
        }
        // checks wether we collided with any of the three enemies 
        //and if we did we would go to the Gameoverscreen and passing the score trough
        if (e.other instanceof Enemy || e.other instanceof Enemylegs || e.other instanceof Enemyknife) {
            this.engine.goToScene('Gameoverscreen', this.engine.currentScene.score)
        }
        // if we are colliding with a platform and not gliding trough the air like a majestic bird. 
        //Put the grounded variable to true again so that we may jump once more.
        if (e.other instanceof platform && this.vel.y === 0) {
            this.grounded = true
        }
    }

}