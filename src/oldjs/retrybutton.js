// import { Actor, Engine, Vector } from "excalibur";
// import { Resources } from "./resources";

// export class Retrybutton extends Actor{

//     constructor(){
//         super({width: Resources.Retrybutton.width, height: Resources.Retrybutton.height})
//     }

//     onInitialize(engine){
//         this.graphics.use(Resources.Retrybutton.toSprite())
//         this.pos = new Vector(650,300)
//         this.on('pointerup', (event) => {
//             engine.goToScene('level')
//         })
//     }
// }