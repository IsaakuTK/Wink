import { ATRS } from "../../components/LogIn/LogIn";
import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./LogIn.css"

const credentials = { 
    username: "",
    email: "",
    password: ""
}

class singin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);

            const form = this.ownerDocument.createElement('section')

            const email = this.ownerDocument.createElement('my-singin')
            email.setAttribute(ATRS.placeholder, "Email")
            email.setAttribute(ATRS.type, "email")
            form.appendChild(email)

            const password = this.ownerDocument.createElement('my-singin')
            password.setAttribute(ATRS.placeholder, "Password")
            password.setAttribute(ATRS.type, "password")
            form.appendChild(password)

            const button = this.ownerDocument.createElement('my-button');
            button.addEventListener('click', ()=>{
                dispatch(
                    navigate(Screens.DASHBOARD)
                )
            })

            const account = this.ownerDocument.createElement('h3')
            account.innerText = 'Already have an account?'

            form.appendChild(button)
            form.appendChild(account)
            this.shadowRoot?.appendChild(form)


        }
    }
}

customElements.define('my-singin', singin)