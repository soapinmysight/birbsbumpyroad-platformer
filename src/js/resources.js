import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import knightImage from '../images/knight.png'
import floorImage from '../images/floor.png'
import enemyImage from '../images/enemy.png'
import backgroundImage from '../images/background.png'
import startbuttonImage from '../images/startbutton.png'
import retrybuttonImage from '../images/retrybutton.png'

const Resources = {
    Knight: new ImageSource(knightImage),
    Floor: new ImageSource(floorImage),
    Enemy: new ImageSource(enemyImage),
    Background: new ImageSource(backgroundImage),
    Startbutton: new ImageSource(startbuttonImage),
    Retrybutton: new ImageSource(retrybuttonImage)
}

const ResourceLoader = new Loader([Resources.Knight, Resources.Floor, Resources.Enemy, Resources.Background, Resources.Startbutton, Resources.Retrybutton])

export { Resources, ResourceLoader }