// // Importing the style.css file
// import '../css/style.css';
// // Importing specific classes from the "excalibur" module
// import { Actor, Scene, Engine, Vector, Label, FontUnit, Font, Physics, Color } from "excalibur";
// // Importing specific classes from the "resources.js" file
// import { Resources, ResourceLoader } from './resources.js'
// // Importing the specific classes from the js files file
// import { Knight } from './knight.js'
// import { Floor } from './floor.js'
// import { Enemy } from './enemy.js';
// import { Background } from './background.js';

// export class Level extends Scene {    
//     knight;
//     floor;
//     enemy;
//     background;
//     //variabeles voor keeping score
//     score = 0;
//     mylabel;

//     constructor() {
//         super({ width: window.width, height: window.height })
//         // Using realistic physics for the game

//         // Physics.useRealisticPhysics();
//         Physics.useArcadePhysics();

//         // Setting the gravity vector for the game. 
//         //the second number will change the falling speed.
//         Physics.gravity = new Vector(0, 900);

//         // Starting the game 
//         this.startGame();
//     }

//     onPreUpdate() {

//     }

//     startGame() {
        // this.background = new Background()
        // // Adding the floor to the game
        // this.add(this.background)

//         this.floor = new Floor()
//         // Adding the floor to the game
//         this.add(this.floor)

//         this.knight = new Knight()
//         // Adding the knight to the game
//         this.add(this.knight)

//         this.enemy = new Enemy()
//         // Adding the enemy to the game
//         this.add(this.enemy)


//         //text for keeping score
//         this.mylabel = new Label({
//             text: 'Score: 0',
//             pos: new Vector(100, 100),
//             font: new Font({
//                 family: 'impact',
//                 size: 24,
//                 unit: FontUnit.Px
//             })
//         });
//         this.add(this.mylabel)

//     }

//     //function for updating score
//     updateSocre() {
//         this.score++
//         this.mylabel.text = `Score: ${this.score}`
//     }
// }