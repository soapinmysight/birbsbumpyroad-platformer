// Importing the style.css file
import '../css/style.css';
// Importing specific classes from the "excalibur" module
import { Actor, Engine, Vector, Label, FontUnit, Font, Physics, Color} from "excalibur";
// Importing specific classes from the "resources.js" file
import { Resources, ResourceLoader } from './resources.js'
// Importing the Knight class from the "knight.js" file
import { Knight} from './knight.js'
// Importing the Floor class from the "floor.js" file
import { Floor} from './floor.js'



export class Game extends Engine {
    knight;
    floor;

    constructor() {
        super({ width: 800, height: 600 })
        // Enabling debug mode
        this.showDebug(true)
        // Displaying debug information for all entities
        this.debug.transform.showAll = true
        // Starting the game after loading resources asynchronously
        this.start(ResourceLoader).then(() => this.startGame());    
        // Using realistic physics for the game

        // 7 realistic pysics uitsetten
        // Physics.useRealisticPhysics();

        Physics.useArcadePhysics();
        
        // Setting the gravity vector for the game. 
        //the second number will change the falling speed.
        Physics.gravity = new Vector(0, 900);
    }

    startGame() {
        // // (7) variabeles voor keeping score
        // score;
        // mylabel;
        this.floor = new Floor()
        // Adding the floor to the game
        this.add(this.floor)
        Floor.pos = new Vector(0, 500)

        this.knight = new Knight()
        // Adding the knight to the game
        this.add(this.knight)
        // Setting the initial position of the knight
        Knight.pos = new Vector (0, 500);

       
        // Setting the initial position of the floor

        // // 7 text for keeping score
        // const label = new Label({
        //     text: `Score: ${this.score}`,
        //     pos: new Vector (100, 100),
        //     font: new Font({
        //         family: 'impact',
        //         size: 24,
        //         unit: FontUnit.Px
        //     })
        // });
    }

    // //7 function for updating score
    // updateSocre(){
    //     this.score++
    //     this.mylabel.text = `Score: ${this.score}`
    // }
}


new Game()
