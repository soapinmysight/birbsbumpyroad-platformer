import { Actor, Vector, Label, Color, Font, FontUnit, ScreenElement, GraphicsGroup, Text, Sprite } from "excalibur";
import { Resources } from './resources.js';

export class UI extends ScreenElement {             

    constructor() {
        super({ x: 10, y: 10 })                     
    }

    onInitialize(engine) {

        this.pointsText = new Text({               
            text: 'score:',
            font: new Font({
                unit: FontUnit.Px,
                size: 30,
            }),
        })}

    updatePoints(score) {
        this.pointsText.text = `Score: ${score}`                  
    }  }