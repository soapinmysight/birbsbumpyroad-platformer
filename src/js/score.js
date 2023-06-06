// // Importing the style.css file
// import '../css/style.css';
// // Importing specific classes from the "excalibur" module
// import {} from "excalibur";
// import Resources from './resources'

// class StartButton extends ex.ScreenElement {
//   constructor() {
//     super({
//       x: 50,
//       y: 50,
//     })
//   }

//   onInitialize() {
//     this.graphics.add('idle', Resources.StartButtonBackground)
//     this.graphics.add('hover', Resources.StartButtonHovered)

//     this.on('pointerup', () => {
//       alert("I've been clicked")
//     })

//     this.on('pointerenter', () => {
//       this.graphics.show('hover')
//     })

//     this.on('pointerleave', () => {
//       this.graphics.show('idle')
//     })
//   }
// }

// game.add(new StartButton())
// game.start()