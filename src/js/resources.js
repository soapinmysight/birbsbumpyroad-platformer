import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import knightImage from '../images/knight.png' 
import floorImage from '../images/floor.png'
import enemyImage from '../images/enemy.png'
import backgroundImage from '../images/background.png'


const Resources = {
    Knight: new ImageSource(knightImage),
    Floor: new ImageSource(floorImage),
    Enemy: new ImageSource(enemyImage),
    Background: new ImageSource(backgroundImage)


}
const ResourceLoader = new Loader([Resources.Knight, Resources.Floor, Resources.Enemy, Resources.Background])

export { Resources, ResourceLoader }