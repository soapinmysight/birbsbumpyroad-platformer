import{Actor, Engine, Vector, Random, CollisionType} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'

export class Knight extends Actor {


    constructor() {
        super()
        // this.pos = new Vector(new Random().floating(0,400), new Random().floating(0,400))
        // this.vel = new Vector(new Random().floating(-10,10), new Random().floating(-10,10))
}
    onInitialize(engine){
        this.body.useGravity  = true
        this.body.collisionType = CollisionType.Active;
        this.graphics.add(Resources.Knight.toSprite());
        this.scale = new Vector (0.4,0.4);
    }

OnPreUpdate(engine) {

        let xspeed = 0;
        let yspeed = 0;

        if(engine.input.keyboard.isHeld(Input.Keys.D)){

        }
    }

    run(){

    }

    jump(){

    }

    attack(){

    }
}
