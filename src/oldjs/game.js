// import { Engine } from 'excalibur'
// import { Level } from './level.js'
// import { ResourceLoader } from './resources.js'
// import { Startscreen } from './startscreen.js'
// import { Retryscreen } from './retryscreen.js';

// export class Game extends Engine {
//     level;
//     retry;

//     constructor() {
//         super({ width: 1300, height: 600 });
//         this.start(ResourceLoader).then(() => this.startGame());
//     }

//     onPreUpdate() {

//     }

//     startGame() {
//         this.addScene('start', new Startscreen());
//         this.addScene('level', new Level());
//         this.addScene('retry', new Retryscreen());

//         this.goToScene('start');
//     }
// }

// new Game()
