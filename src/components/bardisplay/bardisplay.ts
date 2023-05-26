import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { dispatch } from '../../store/index';
import styles from "./bardisplay.css"

export default class bardisplay extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    async home (){
        dispatch(navigate(Screens.DISPLAY));
    }

    async login (){
        dispatch(navigate(Screens.LOGIN));
    }

    async about (){
        dispatch(navigate(Screens.ABOUT));
    }

    render(){
        if(this.shadowRoot){
        const all = this.ownerDocument.createElement("section");
                all.className="all";

                const logo = this.ownerDocument.createElement("img");
                logo.className="logo";
                logo.src="../src/fotos/Wink.png";

                all.appendChild(logo);

                const text1 = this.ownerDocument.createElement("Button");
                text1.className="text1";
                text1.textContent='Home';
                text1.addEventListener("click", this.home);
                all.appendChild(text1)


                const text2 = this.ownerDocument.createElement("Button");
                text2.className="text2";
                text2.textContent='About';
                text2.addEventListener("click", this.about);
                all.appendChild(text2)

                const text3 = this.ownerDocument.createElement("Button");
                text3.className="text3";
                text3.textContent='Login';
                all.appendChild(text3);
                text3.addEventListener("click", this.login);

                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)
            }
    }

}

customElements.define('my-bardisplay', bardisplay)