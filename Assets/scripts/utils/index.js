class Utils {
    constructor () {
        this.getCountDownTimer ()
        this.getCopyright ()
    }

    querySelector (item) {
        const itemFound =  $ (item)
        if (itemFound) return itemFound
        return
    }

    empty (value) {
        if (value === '') return true
        return false
    }

    getCopyright () {
        $ ("#year").html (new Date ().getFullYear ())
    }

    getCountDownTimer () {
        let countdown =  new Date ("October 25, 2023 00:00:00").getTime ()

        let interval = setInterval (() => {
            const day = 1000 * 60 * 60 * 24
            const hour = 1000 * 60 * 60
            const minuet = 1000 * 60
            const second = 1000

            let now = new Date ().getTime ()

            let distance = countdown - now 

            let days = Math.floor (distance / day)
            let hours = Math.floor (distance % day / hour)
            let minuets = Math.floor (distance % hour / minuet)

            let seconds = Math.floor (distance % minuet / second) 

            $ ('#days').html (days)
            $ ('#hours').html (hours)
            $ ('#minutes').html (minuets)
            $ ('#seconds').html (seconds)
            if (distance > 0) {
                clearInterval (interval)
                days = '00'
                hours = '00'
                minuets = '00'
                seconds = '00'
            }

        }, 1000)
    }
}

export default Utils
