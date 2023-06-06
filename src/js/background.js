import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from './resources.js'


export class Background extends Actor {

    offset
    
    onInitialize(engine){
        const treeImage = Resources.Background.toSprite()
        this.offset = treeImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: treeImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: treeImage,
                    pos: new Vector(treeImage.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)       
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-110, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}