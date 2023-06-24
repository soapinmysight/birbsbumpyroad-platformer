import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import birbImage from '../images/birb.png'
import backgroundImage from '../images/background.png'
import nestImage from '../images/nest.png'
import startbuttonImage from '../images/startbutton.png'
import enemynormalImage from '../images/enemynormal.png'
import enemylegsImage from '../images/enemylegs.png'
import enemyknifeImage from '../images/enemyknife.png'
import gameoverbuttonImage from '../images/gameoverbutton.png'
import wormImage from '../images/worm.png'
import platformImage from '../images/platform.png'
import background2Image from '../images/background2.png'



const Resources = {
    Birb: new ImageSource(birbImage),
    Background: new ImageSource(backgroundImage),
    Nest: new ImageSource(nestImage),
    Startbutton: new ImageSource(startbuttonImage),
    Enemynormal: new ImageSource(enemynormalImage),
    Enemylegs: new ImageSource(enemylegsImage),
    Enemyknife: new ImageSource(enemyknifeImage),
    Gameoverbutton: new ImageSource(gameoverbuttonImage),
    Worm: new ImageSource(wormImage),
    Platform: new ImageSource(platformImage),
    Background2: new ImageSource(background2Image),

}
const ResourceLoader = new Loader([Resources.Birb, Resources.Background, Resources.Nest, Resources.Startbutton, Resources.Enemynormal, Resources.Enemylegs, Resources.Enemyknife, Resources.Gameoverbutton, Resources.Worm, Resources.Platform, Resources.Background2])

export { Resources, ResourceLoader }