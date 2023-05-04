import styles from './index.css';
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { dispatch } from '../../store/index';

class Bar extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    connectedCallback() {
        this.render();

        
    }

    async porfilebutton (){
        dispatch(navigate(Screens.PROFILE));
    }

    async publishedbutton (){
        dispatch(navigate(Screens.PUBLISHED));
    }

    async home (){
        dispatch(navigate(Screens.DASHBOARD));
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const all = this.ownerDocument.createElement("section");
                all.className="all";

                const logo = this.ownerDocument.createElement("img");
                logo.className="logo";
                logo.src="../src/fotos/Wink.png";
                logo.addEventListener("click", this.home);

                const input = this.ownerDocument.createElement("input");
                input.className="input";
                input.placeholder = "Search in Wink.";

                const things = this.ownerDocument.createElement("section");
                things.className="things";
                const icon = this.ownerDocument.createElement("button");
                icon.className="icon";
                icon.addEventListener("click", this.publishedbutton);

                const perf = this.ownerDocument.createElement("button");
                perf.className="perf";
                perf.addEventListener("click", this.porfilebutton);

                things.appendChild(icon);
                things.appendChild(perf);

                all.appendChild(logo);
                all.appendChild(input);
                all.appendChild(things);

                this.shadowRoot?.appendChild(all);

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}

customElements.define("my-bar", Bar);
export default Bar;
