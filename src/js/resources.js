import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import knightImage from '../images/knight.png' 
import floorImage from '../images/floor.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Knight: new ImageSource(knightImage),
    Floor: new ImageSource(floorImage)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Knight, Resources.Floor])

export { Resources, ResourceLoader }