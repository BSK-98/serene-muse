class Email {
    constructor (utils) {
        this.utils = utils
        this.signUp ()
    }
    signUp () {
        let name, email, errors
        const signUpForm = document.querySelector('#sign-up-form')
        signUpForm.addEventListener ('submit', (e) => {
            e.preventDefault ()
            const inputs = document.querySelectorAll (`#${e.target.getAttribute ('id')} div input`)
            let data = {}
            for (let index = 0; index < inputs.length; index++) {
                const key = inputs[index].getAttribute ('name') || ''
                switch (key) {
                    case 'first_name':
                            data.first_name = inputs[index].value
                        break;
                    case 'last_name':
                            data.last_name = inputs[index].value
                        break;
                    case 'middle_name':
                            if (inputs[index].value !== '')
                                data.middle_name = inputs[index].value
                        break;
                    case 'email':
                            data.email = inputs[index].value
                        break;
                    case 'message':
                            data.message = inputs[index].value
                        break;
                
                    default:
                        break;
                }
            }

            if (!this.utils.empty (data.first_name) && !this.utils.empty (data.last_name)) {
                name = data.first_name + ' ' + data.last_name
            }else {
                errors += 'First and Last names must be filled <br />'
            }
            if (!this.utils.empty (data.email)) {
                email = data.email
            }else {
                errors += 'Email must be filled <br />'
            }

            if (this.utils.empty (errors)) {
                const dataToSend = {
                    name,
                    email,
                    message: data.message
                }

                this.sendEmail (dataToSend)
            }

        })
        
    }

    sendEmail (emailData) {
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/nathaniellee20graham@gmail.com',
            // url: 'https://formsubmit.co/ajax/serenemuse@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: emailData,
            success: (data) => this.successfulEmailSent (data),
            error: (err) => this.failedToSendEmail (err)
        });
    }

    successfulEmailSent (data) {
        console.log(data);
    }

    failedToSendEmail (err) {
        console.log(err);
    }
}

export default Email