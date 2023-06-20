import * as ex from "excalibur";
import { Resources, ResourceLoader } from "./resources";
import { platform } from "./platform";
import { Startscreen } from "./startscreen.js";
import { Nest } from "./nest";
import { Enemy } from "./enemy";

// Define a class named "Mainplayer" that extends the "ex.Actor" class
export class Mainplayer extends ex.Actor {

    //Declare global variables
    speed
    jumped = false
    grounded = true
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
        this.speed = 300;
        this.pos = new ex.Vector(50, 500);
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true;
        this.score = score

    }

    onInitialize(engine) {
        this.game = engine
                // Enable keyboard input
        engine.input.keyboard.enabled = true;

        const keys = ex.Input.Keys;

                // Event listener for key hold event
        engine.input.keyboard.on("hold", (evt) => {
                        // Handle left and right movement
            if (evt.key === keys.A || evt.key === keys.Left) {
                this.vel.x = -this.speed;
            } else if (evt.key === keys.D || evt.key === keys.Right) {
                this.vel.x = this.speed;
            } else if (evt.key === keys.S || evt.key === keys.Down) {
            }
        });

                // Event listener for key release event
        engine.input.keyboard.on("release", (evt) => {
                        // Stop horizontal movement
            if (evt.key === keys.A || evt.key === keys.D || evt.key === keys.Left || evt.key === keys.Right) {
                this.vel.x = 0;
            } else if (evt.key === keys.S || evt.key === keys.Down) {
            }
        });

                // Event listener for key press event for jump
        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.W || evt.key === keys.Up) {
                            // Handle jump
                            //make sure you can only jump when on the ground
                if (this.grounded == true) {
                    //jump
                    this.vel.y = -240
                    //set grounded to false
                    this.grounded = false
                    this.jumped = true
                }
            }
        })
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))

    }


    update(engine) {
        if (this.vel.x > 0) {
            this.vel.x -= 10;
        } else if (this.vel.x < 0) {
            this.vel.x += 10;
        }

        if (this.vel.y === 0) {
            this.grounded = true;
            this.jumped = false;
        } else {
            this.grounded = false;
        }
        engine.currentScene.camera.x = this.pos.x + 80
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