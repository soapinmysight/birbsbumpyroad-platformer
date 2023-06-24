// Get everything from excalibur from actors to engines and then assigning it to the keyword "ex" short for excalibur.
import { Scene, Actor, Vector, Physics, CollisionType } from "excalibur"
// Importing Resources so we can use the sprites we loaded in earlier in the game class
import { Resources } from './resources.js'
// Get all the classes to make our game work properly
import { Mainplayer } from './player'
import { platform } from './platform.js'
import { Background } from './background.js'
import { Nest } from './nest.js'
import { Enemy } from './enemynormal'
import { Enemylegs } from './enemylegs'
import { Enemyknife } from './enemyknife'
import { Worm } from './worm'
import { UI } from "./scoreinsight"

// Creating a level1 scene
export class level1 extends Scene {

    // Global variables
    score = 0;
    player;

    constructor() {
        super()
    }

    // Whenever the retry button is pressed we reset the players position to (50, 500). This is because Excalibur remembers where everthing was when we exit a scene and thus if we come back everything would be exactly where they were last time.
    onActivate() {
       this.player.pos = new Vector(50, 500)
    }

    // Whenever the scene is created make the entire level
    onInitialize(Engine) {
        // Make sure we are using ArcadePhysics because we want to use gravity and collision. We dont want realistic physics because we dont want to rotate our sprites.
        Physics.useArcadePhysics()
        // Make gravity
        Physics.gravity = new Vector(0, 900)

        // Making a background sprite to give to the background
        const backgroundImage = Resources.Background.toSprite();
        // Create the background
        const background = new Background(-400, -30, 10, 100, backgroundImage);
        this.add(background);

        // creating invisible walls and a floor so that the player cannot exit the map or fall trough the floor
        let leftWall = new Actor({
            pos: new Vector(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })
        let rightWall = new Actor({
            pos: new Vector(2700, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })
        // The floor is a platform class because otherwise the player would not able to jump anymore
        let floor = new platform(0, 600, 10000, 10)

        // adding them all the the scene
        this.add(floor)
        this.add(leftWall);
        this.add(rightWall)

        // Making a platform sprite variable to give to all the platforms
        const platformImage = Resources.Platform.toSprite();
        // Creating platform instances with different positions and adding them to the scene
        const platform1 = new platform(0, 580, 1250, 100, platformImage);
        this.add(platform1);

        const platform2 = new platform(300, 500, 1250, 100, platformImage);
        this.add(platform2);

        const platform3 = new platform(620, 385, 1250, 100, platformImage);
        this.add(platform3);

        const platform4 = new platform(800, 440, 1250, 100, platformImage);
        this.add(platform4);

        const platform5 = new platform(1350, 380, 1250, 100, platformImage);
        this.add(platform5);

        const platform6 = new platform(1600, 270, 1250, 100, platformImage);
        this.add(platform6);

        const platform7 = new platform(2100, 280, 1250, 100, platformImage);
        this.add(platform7);

        const platform8 = new platform(2300, 220, 1250, 100, platformImage);
        this.add(platform8);

        // Creating instances of worms with different positions and adding them to the scene
        const worm1 = new Worm(450, 470, 600, 400)
        this.add(worm1)

        const worm2 = new Worm(680, 355, 600, 400)
        this.add(worm2)

        const worm3 = new Worm(1500, 350, 600, 400)
        this.add(worm3)

        const worm4 = new Worm(2250, 250, 600, 400)
        this.add(worm4)

        // Creating an instance of the 'Nest' class and setting its position
        const nest = new Nest();
        nest.pos = new Vector(2500, 110)
        this.add(nest);

        // Create 3 enemies in the scene
        const enemy1 = new Enemy()
        enemy1.pos = new Vector(620, 580)
        this.add(enemy1)

        const enemy2 = new Enemylegs()
        enemy2.pos = new Vector(1000, 580)
        this.add(enemy2)

        const enemy3 = new Enemyknife()
        enemy3.pos = new Vector(1400, 580)
        this.add(enemy3)

        // Creating an instance of the 'Mainplayer' class and passing the score as an argument and adding it to the scene
        this.player = new Mainplayer()
        this.add(this.player)

        // Creating a new label to display the score
        this.scoreLabel = new UI()
        this.add(this.scoreLabel)

    }

    // Whenever our score needs updating any class can acces this method (function) 
    //to update the score with a specified amount
    updateScore(score) {
        this.score += score
        // make sure the label also update with this score 
        //otherwise we wouldnt be able to see our score increase
        this.scoreLabel.updatePoints(this.score)
    }

}
