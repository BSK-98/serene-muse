class Slider {
    constructor (config) {
        this.config = config,
        this.utils = config.utils
    }

    getSlider () {
        return this.utils.querySelector ("#slider").children ()
    }

    initSlider () {
        this.slide ()
    }
    slide () {
        const slides = this.getSlider ()
        for (let sliderIndex = 0; sliderIndex < slides.length; sliderIndex++) {
            if (sliderIndex > slides.length) sliderIndex = 0
            slides[sliderIndex].style.left = `-100vw`            
            console.log(slides);
        }
    }
}

export default Slider