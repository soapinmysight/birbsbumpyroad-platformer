import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import knightImage from '../images/knight.png' 
import floorImage from '../images/floor.png'

const Resources = {
    Knight: new ImageSource(knightImage),
    Floor: new ImageSource(floorImage)
}
const ResourceLoader = new Loader([Resources.Knight, Resources.Floor])

export { Resources, ResourceLoader }