import "../../components/Signin/Signin";
import "../../components/export";
import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./Signin.css"

const credentials = { 
    username: "",
    email: "",
    password: ""
}

export default class singin extends HTMLElement {
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
            form.className = " all"

            const ac = this.ownerDocument.createElement('my-singing');
            ac.className = "section"
            
          form.appendChild(ac)
          
            this.shadowRoot?.appendChild(form)

            

        }
    }
}

customElements.define('my-singi', singin)