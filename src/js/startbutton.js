import { Button } from "./button";
import { Resources } from "./resources";

export class Startbutton extends Button {
    constructor(x, y) {
        super(x, y)
    }

    onInitialize() {
        // Set the graphics of the button to use the sprite from "Resources" 
        this.graphics.use(Resources.Startbutton.toSprite());
    }
}