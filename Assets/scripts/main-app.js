import CallToAction from "./callto-action/index.js"
import Slider from "./slider/index.js"
import Utils from "./utils/index.js"

class App {
    constructor () {
        this.utils = new Utils ()
        this.slider = new Slider (
            {
                utils: this.utils   
            }
        )
        new CallToAction ()
        // this.slider.initSlider ()
    }
}

new App ()