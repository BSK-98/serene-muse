class CallToAction {
    constructor () {
        this.actionBtns = $ ('.call-to-action')
        this.actionClose = $ ('.close-action')
        this.getAction ()
        this.getCloseAction ()
        this.cls
    }

    getAction () {
        for (var i = 0; i < this.actionBtns.length; i++) {
            // console.log(this.actionBtns[i].getAttribute('data-action-type'));
            this.actionBtns[i].addEventListener('click', this.actionBtn)
        }
    }

    getCloseAction () {
        for (var i = 0; i < this.actionClose.length; i++) {
            this.actionClose[i].addEventListener('click', this.closeAction)
        }
    }

    actionBtn (e) {
        switch (e.target.getAttribute('data-action-type')) {
            case 'sign-up':
                signUp ()
                break;

            case 'sign-up-for-a-spot':
                signUpSpace ()
                break;
            
            case 'follow-as':
                console.log(e.target.getAttribute('data-action-type'));
            default:
                break;
        }

    }

    closeAction (e) {
        switch (e.target.getAttribute('data-close-action-type')) {
            case 'sign-up':
                closeSignUp ()
                break;
            case 'sign-up-for-a-spot':
                closeSignUpSpace ()
                break;
        
            case 'follow-as':
                console.log(e.target.getAttribute('data-action-type'));
            default:
                break;
        }

    }
}

function closeSignUp () {
    const popUp = $ ('#sign-up')
    popUp.css ("display", "none")
}
function signUp () {
    const popUp = $ ('#sign-up')
    popUp.css ("display", "flex")
}

function closeSignUpSpace () {
    const popUp = $ ('#sign-up-for-a-spot')
    popUp.css ("display", "none")
}
function signUpSpace () {
    const popUp = $ ('#sign-up-for-a-spot')
    popUp.css ("display", "flex")
}

export default CallToAction
