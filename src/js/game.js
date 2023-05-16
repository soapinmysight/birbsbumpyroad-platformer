import '../css/style.css';
import { Actor, Engine, Vector, Label, FontUnit, Font, Physics} from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Knight} from './knight.js'

export class Game extends Engine {
    knight;

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame());    
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 900);
    }

    startGame() {
        this.knight = new Knight()
        this.add(this.knight)
        Knight.pos = new Vector (0, 500);
        //  //fish code:
        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(400, 300)
        // fish.vel = new Vector(-10,0)
        // this.add(fish)
    }
}

new Game()
