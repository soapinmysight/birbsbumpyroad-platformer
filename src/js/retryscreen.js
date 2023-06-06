import { Scene } from "excalibur";
import { Retrybutton } from "./retrybutton";

export class Retryscreen extends Scene {
    retrybutton;

    constructor() {
        super();
    }

    onInitialize() {
        console.log('retry screen is gemaakt');
        this.retrybutton = new Retrybutton();
        this.retrybutton.enableCapturePointer = true;
        this.add(this.retrybutton);
    }

    onActivate(ctx) {
        console.log('retry screen is geactiveerd');
    }
}