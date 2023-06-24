// Get everything from excalibur from actors to engines and then assigning it to the keyword "ex" short for excalibur.
import * as ex from "excalibur"
// Importing the 'Resources' and 'ResourceLoader' modules to use so that Excalibur can load all the pictures correctly before starting the game, this is basically the loading screen with the play button.
import { ResourceLoader } from './resources.js'
// Importing the scenes from which we will be using to switch scenes
import { level1 } from './level1'
import { Startscreen } from './startscreen'
import { Gameoverscreen } from './gameoverscreen'
import { Victoryscreen } from './victoryscreen'

// Make a game class which purpose is switching scenes
export class Game extends ex.Engine {
    
    constructor() {
        super({
            width: 854,
            height: 600,
            // Make the game fit all screens
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        // Make sure all resources (images, sounds) are loaded BEFORE starting the game. this is crucial because if we were to start the game before everything is loaded in properly there would be undefined sprites and pictures would not apear on screen.
        this.start(ResourceLoader).then(() => this.startGame());
        
        // This allows for all the excalibur classes in the scene to show usefull information when debugging code. 
        //To switch it on just replace the 'false' in the parameter to 'true'
        this.showDebug(false);

        // Eneabling arcade physics so we can use gravity and collision.
        ex.Physics.useArcadePhysics();
    }

    //When everything is loaded this method (function) is called, 
    //this method is for adding scenes to the game so that we can later switch to them
    startGame() {
        // Creating every scene with instances of classes and giving it a name
        this.addScene("level1", new level1())
        this.addScene("Gameoverscreen", new Gameoverscreen())
        this.addScene('Victoryscreen', new Victoryscreen())
        this.addScene('Startscreen', new Startscreen())
        // Switching to the "Startscreen" scene
        this.goToScene('Startscreen')


    }
}

//starting the game
new Game();
