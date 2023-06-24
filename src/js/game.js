// Importing the 'style.css' file
import '../css/style.css'
// Importing all exports from the 'excalibur' module and assigning it to the 'ex' variable
import * as ex from "excalibur"
// Importing the 'Resources' and 'ResourceLoader' modules
import { Resources, ResourceLoader } from './resources.js'
// Importing specific modules from specific files
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Background } from './background.js'
import { level1 } from './level1'
import { Startscreen } from './startscreen'
import { Gameoverscreen } from './gameoverscreen'
import { Victoryscreen } from './victoryscreen'

// Defining a class named 'Game' that extends the 'ex.Engine' class
export class Game extends ex.Engine {

     // Declaration of a 'score' property (initially undefined)
    score
    
    constructor() {
        super({
            width: 854,
            height: 600,
            //make the game fit all screens
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        // Starting the resource loading process and then starting the game
        this.start(ResourceLoader).then(() => this.startGame());
        
        // //Enabling debug mode
        // this.showDebug(true);

            //adding gravity
        //Enabling arcade physics
        ex.Physics.useArcadePhysics();
        // Setting the acceleration of the physics to (0, 250)
        ex.Physics.acc = new ex.vec(0, 250);

        // Creating instance of 'Scores' class & assigning it to 'score' property

    }

    //this is the scenes part
    startGame() {
        //creating new instance of 'level1'class and passing 'score'
        const levelone = new level1()
        this.addScene("level1", levelone)

        //creating new instance of 'Gameoverscreen'class and passing 'score'
        const gameoverscreen = new Gameoverscreen()
        this.addScene("Gameoverscreen", gameoverscreen)
        this.addScene('Victoryscreen', new Victoryscreen())

        //creating new instance of 'Startscreen'class and passing no information
        const startscreen = new Startscreen()
        this.addScene('Startscreen', startscreen)
        // Switching to the "Startscreen" scene
        this.goToScene('Startscreen')


    }
}

//starting the game
new Game();
