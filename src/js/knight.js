import{Actor, Engine, Vector, Random} from "excalibur"
import {Resources} from './resources.js'

export class Knight extends Actor {


    constructor() {
        super()
        this.graphics.use(Resources.Knight.toSprite())
        this.pos = new Vector(new Random().floating(0,400), new Random().floating(0,400))
        this.vel = new Vector(new Random().floating(-10,10), new Random().floating(-10,10))
    
    }

    onInitialize(engine){
                // Enable the capture of the pointer within the actor
        this.enableCapturePointer = true
                // Set the pointer's bounds to match the graphics of the actor
        this.pointer.useGraphicsBounds = true
                // Add an event listener for when the pointer is released over the actor
        this.on("pointerup", (event) => this.pos = new Vector(new Random().floating(0,800), new Random().floating(0,800)))
                // Add an event listener for when the actor exits the viewport
        this.on("exitviewport", (event) => this.pos = new Vector(new Random().floating(0,800), new Random().floating(0,800)))
    }

    resetPosition(){
                // Set the actor's position to a new Vector object with coordinates (500, 100)
        this.pos = new Vector(500,100)
    }
}