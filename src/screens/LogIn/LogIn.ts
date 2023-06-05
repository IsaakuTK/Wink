import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./LogIn.css"

const credentials = { 
    username: "",
    email: "",
    password: ""
}

export default class Login extends HTMLElement {
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

            const all = this.ownerDocument.createElement('section')
            all.className = " all"

            const bar = this.ownerDocument.createElement("my-bardisplay")
            bar.className = "bar";
            all.appendChild(bar)

            const bar1 = this.ownerDocument.createElement("my-downbart")
            bar1.className = "bar1";
            all.appendChild(bar1)

            const l = this.ownerDocument.createElement('my-login')
            l.className="section";
            
            
            all.appendChild(l)
            this.shadowRoot?.appendChild(all)
        }
    }
}

customElements.define('app-login', Login)