import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import birbImage from '../images/birb.png'
import backgroundImage from '../images/background3.png'
import nestImage from '../images/nest.png'
import startbuttonImage from '../images/startbutton.png'
import enemynormalImage from '../images/enemynormal.png'
import retrybuttonImage from '../images/retrybutton.png'
import wormImage from '../images/worm.png'
import platformImage from '../images/platform.png'

const Resources = {
    Birb: new ImageSource(birbImage),
    Background: new ImageSource(backgroundImage),
    Nest: new ImageSource(nestImage),
    Startbutton: new ImageSource(startbuttonImage),
    Enemynormal: new ImageSource(enemynormalImage),
    Retrybutton: new ImageSource(retrybuttonImage),
    Worm: new ImageSource(wormImage),
    Platform: new ImageSource(platformImage),
}
const ResourceLoader = new Loader([Resources.Birb, Resources.Background, Resources.Nest, Resources.Startbutton, Resources.Enemynormal, Resources.Retrybutton, Resources.Worm, Resources.Platform])

export { Resources, ResourceLoader }