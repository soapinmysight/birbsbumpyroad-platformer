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
import { Nest } from './nest.js'
import { Enemy } from './enemynormal'
import { Enemylegs } from './enemylegs'
import { Enemyknife } from './enemyknife'
import { Worm } from './worm'

// Defining a class named 'level1' that extends the 'ex.Scene' class
export class level1 extends ex.Scene {

    // Declaration of a 'score' property (initially undefined)
    score

    constructor(score) {
        super({
        })
        // Assigning the 'score' parameter to the 'score' property of the class
        this.score = score
    }

    onInitialize(Engine) {

        // Converting the 'Background' resource to a sprite
        const backgroundImage = Resources.Background.toSprite();
        // Creating a new instance of the 'Background' class with specified parameters
        const background = new Background(-400, -30, 10, 100, backgroundImage);
        this.add(background);

        // Creating actor instances for the left wall, right wall, and floor and setting their properties and adding them to the scene
        let leftWall = new ex.Actor({
            pos: ex.vec(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        let rightWall = new ex.Actor({
            pos: ex.vec(2700, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        let floor = new ex.Actor({
            pos: ex.vec(0, 600),
            width: 10000,
            height: 10,
            collisionType: ex.CollisionType.Fixed
        })

        this.add(floor)
        this.add(leftWall);
        this.add(rightWall)

        // Converting the 'Platform' resource to a sprite
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

        const platform5 = new platform(1400, 380, 1250, 100, platformImage);
        this.add(platform5);

        const platform6 = new platform(1600, 270, 1250, 100, platformImage);
        this.add(platform6);

        const platform7 = new platform(2100, 280, 1250, 100, platformImage);
        this.add(platform7);

        const platform8 = new platform(2300, 220, 1250, 100, platformImage);
        this.add(platform8);

        // Creating instances of worms with different positions and adding them to the scene
        const worm1 = new Worm(450, 470, 600, 400, this.score)
        this.add(worm1)

        const worm2 = new Worm(680, 355, 600, 400, this.score)
        this.add(worm2)

        const worm3 = new Worm(1500, 350, 600, 400, this.score)
        this.add(worm3)

        const worm4 = new Worm(2250, 250, 600, 400, this.score)
        this.add(worm4)

        // Creating an instance of the 'Nest' class and setting its position
        const nest = new Nest();
        nest.pos = new ex.Vector(2500, 110)
        this.add(nest);

        // Creating an instance of the 'Enemy' class and setting its position (and actions)
        const enemy1 = new Enemy()
        enemy1.pos = new ex.Vector(620, 580)
        // Setting the actions of the enemy to repeat forever
        enemy1.actions.repeatForever((repeatCtx) => {
            // Moving the enemy to a specified position (610, 580) over a duration of 100 milliseconds
            repeatCtx.moveTo(620, 580, 100)
            // Moving the enemy to another specified position (1000, 580) over a duration of 100 milliseconds
            repeatCtx.moveTo(900, 580, 100)
        })
        this.add(enemy1)

        //adding more enemies
        const enemy2 = new Enemylegs()
        enemy2.pos = new ex.Vector(1000, 580)
        enemy2.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(1000, 580, 110)
            repeatCtx.moveTo(1310, 580, 110)
        })
        this.add(enemy2)

        const enemy3 = new Enemyknife()
        enemy3.pos = new ex.Vector(1400, 580)
        enemy3.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(1400, 580, 90)
            repeatCtx.moveTo(1700, 580, 90)
        })
        this.add(enemy3)

        // Creating an instance of the 'Mainplayer' class and passing the score as an argument and adding it to the scene
        const player = new Mainplayer(this.score)
        this.add(player)

        // Creating a new label to display the score
        this.scoreLabel = new ex.Label({
            text: `Score: 0`,
            pos: new ex.Vector(100, 100),
            font: new ex.Font({
                unit: ex.FontUnit.Px,
                size: 20,
                color: ex.Color.Black
            })
        })
        this.add(this.scoreLabel)

    }

    // Callback function called before the update of the scene
    onPreUpdate() {
        // Updating the text of the score label with the current score value
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
    }

}
