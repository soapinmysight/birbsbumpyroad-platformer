import { Actor, Engine, Vector, Random, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Floor extends Actor {
    constructor() {
        super({
            width: Resources.Floor.width,
            height: Resources.Floor.height
        })
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Fixed;
        this.graphics.add(Resources.Floor.toSprite());
        this.pos = new Vector(0, 1200)
    }



    //if pos of kight is (bij) max1000, maak een nieuwe floor aan, en voeg 100 aan max position toe want position floor verandert niet omdat ik camera niet heb
    //trying to get the floor to repeat
    postUpdate(engine, delta) {
        super.postUpdate(engine, delta);

        //making constante for size of game
        const screenWidth = engine.canvas.clientWidth;
        //making constante for width floor
        const floorWidth = this.width;
        //making constante for position floor
        const floorPos = this.pos.x;

        //if the right edge of the floor (floorPos + floorWidth) are smaller than(outside of) the screenwidth
        if (floorPos + floorWidth < screenWidth) {
            //add constante newx (so we know where to spawn new floor)
            const newX = floorPos + floorWidth;
            //add constante foor newy (which is the same as the y before, so the new floor spawns on the same height as the old floor)
            const newY = this.pos.y;

            //create new floor
            const newFloor = new Floor();
            //assign position to new floor
            newFloor.pos = new Vector(newX, newY);


            //add new floor to the game
            //i think this part is incorrect????1
            engine.add(newFloor);


            // //same thing but with exitviewport
            // this.on("exitviewport", () => {
            //     const newX = this.pos.x + this.width;
            //     const newY = this.pos.y;
            //     const newFloor = new Floor();
            //     newFloor.pos = new Vector(newX, newY);
            //     engine.add(newFloor);
            // });
        }
    }
}