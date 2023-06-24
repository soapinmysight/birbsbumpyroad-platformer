import { Actor, Vector, Label, Color, Font, FontUnit, ScreenElement, GraphicsGroup, Text, Sprite } from "excalibur";
import { Resources } from './resources.js';

export class UI extends ScreenElement {       
    
    engine;
    pointsText;

    constructor() {
        super({ x: 10, y: 10 })                     
    }

    onInitialize(engine) {
        this.engine = engine

        this.pointsText = new Label({
            text: `Score: 0`
        })
        this.addChild(this.pointsText)
    }

    updatePoints(score) {
        this.pointsText.text = `Score: ${score}`                  
    }

    onPreUpdate() {
        this.pointsText.pos.x = this.engine.currentScene.camera.x + 100
    }
}