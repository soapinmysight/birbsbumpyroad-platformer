import * as ex from "excalibur";
import { Resources, ResourceLoader } from "./resources";
import { platform } from "./platform";
import { Startscreen } from "./startscreen.js";
import { Nest } from "./nest";
import { Enemy } from "./enemynormal";

// Define a class named "Mainplayer" that extends the "ex.Actor" class
export class Mainplayer extends ex.Actor {

    //Declare global variables
    speed
    // jumped = false
    // grounded = true
    x
    y
    game
    score

    constructor(score) {
        super({
            //set collisiontype to active
            collisionType: ex.CollisionType.Active,
            collider: ex.Shape.Box(250, 350, ex.Vector.Half, ex.vec(0, 0)),
            displayMode: ex.DisplayMode.FitScreen,
        });
        // Set the player's sprite and initialize other properties
        this.graphics.use(Resources.Birb.toSprite());
        this.scale = new ex.Vector(0.25, 0.25)
        this.pos = new ex.Vector(50, 500);
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true;
        this.score = score
    }

    onInitialize(engine) {
        this.game = engine
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))

    }

    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard

        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
            // // Handle jump
            // //make sure you can only jump when on the ground
            // if (this.grounded == true) {
            //     //jump
                yspeed = -240
                // //set grounded to false
                // this.grounded = false
                // this.jumped = true
            }

            //        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)) {
            //            yspeed = 300
            //        }


            if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left)) {
                xspeed = -300
                // optioneel, flip de sprite
                // this.sprite.flipHorizontal = true
            }
            if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right)) {
                xspeed = 300
                // optioneel, flip de sprite
                // this.sprite.flipHorizontal = false
            }

            //        // schieten en springen gebeurt maar 1 keer na een press
            //        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            //            console.log("jump!")
            //       }

            this.vel = new Vector(xspeed, yspeed)
        }
    }



    update(engine) {
        if (this.vel.x > 0) {
            this.vel.x -= 10;
        } else if (this.vel.x < 0) {
            this.vel.x += 10;
        }

        // if (this.vel.y === 0) {
        //     this.grounded = true;
        //     this.jumped = false;
        // } else {
        //     this.grounded = false;
        // }
        engine.currentScene.camera.x = this.pos.x + 200
    }



    onCollisionStart(evt) {
        if (evt.other instanceof Nest) {
            this.game.goToScene('Startscreen')
        }
        if (evt.other instanceof Enemy) {
            this.game.goToScene('Gameoverscreen')
        }
    }
}