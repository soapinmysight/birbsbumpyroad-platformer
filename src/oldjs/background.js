// import { Actor, Vector, GraphicsGroup } from 'excalibur'
// import { Resources } from './resources.js'

// // Defining a class named 'Background' that extends the 'Actor' class
// export class Background extends Actor {

//     offset

//     onInitialize(engine) {
//         // Converting the 'Background' resource to a sprite
//         const treeImage = Resources.Background.toSprite()
//         // Setting the value of 'offset' to the width of the 'treeImage'
//         this.offset = treeImage.width

//         // Creating a new graphics group
//         const group = new GraphicsGroup({
//             members: [
//                 {
//                     // Setting the 'graphic' property to the 'treeImage' sprite
//                     graphic: treeImage,
//                     //setting the position
//                     pos: new Vector(0, 0),
//                 },
//                 {
//                     // Setting the 'graphic' property to the 'treeImage' sprite
//                     graphic: treeImage,
//                     //setting the position
//                     pos: new Vector(treeImage.width, 0),
//                 }
//             ]
//         })

//         // Setting the anchor of the graphics to (0, 0)
//         this.graphics.anchor = new Vector(0, 0)
//         // Adding the graphics group to the actor's graphics
//         this.graphics.add(group)
//         // Setting the initial position of the actor to (0, 0)
//         this.pos = new Vector(0, 0)
//         // Setting the initial velocity (movement) of the actor to (-110, 0)
//         this.vel = new Vector(-110, 0)
//     }

//     // Callback function called after the actor has been updated
//     onPostUpdate(engine, delta) {
//         // Checking if the x-coordinate of the position is less than the negative value of 'offset'
//         if (this.pos.x < -this.offset) {
//             // Setting the position of the actor to (0, 0)
//             this.pos = new Vector(0, 0)
//         }
//     }
// }