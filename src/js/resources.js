// Imports the specific image files and assigning it to specific variable
import { ImageSource, Loader } from 'excalibur'
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

// Creates a new 'ImageSource' instance using the specific names assigned to specific images
// and assigns it to the specific property of the 'Resources' object
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

// Adds the specific property image source to the resource loader
const ResourceLoader = new Loader([
    Resources.Birb,
    Resources.Background,
    Resources.Nest,
    Resources.Startbutton,
    Resources.Enemynormal,
    Resources.Enemylegs,
    Resources.Enemyknife,
    Resources.Gameoverbutton,
    Resources.Worm,
    Resources.Platform,
    Resources.Background2
    ])

// Exports the 'Resources' and 'ResourceLoader' variables for external use so we can use the pictures in other files
export { Resources, ResourceLoader }