// import { Actor, Engine, Vector } from "excalibur";
// import { Resources } from "./resources";

// export class Startbutton extends Actor {


//     constructor() {
//         super({ width: Resources.Startbutton.width, height: Resources.Startbutton.height })
//     }

//     onInitialize(engine) {
//         this.graphics.use(Resources.Startbutton.toSprite())
//         this.scale = new Vector(5, 5)
//         this.pos = new Vector(650, 300)
//         this.on('pointerup', (event) => {
//             engine.goToScene('level')
//         })
//     }
// }