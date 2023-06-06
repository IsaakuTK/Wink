import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./downbar.css"

export default class Downbar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

             const downbar = this.ownerDocument.createElement("section")
            downbar.className="downbar"

            const icon1 = this.ownerDocument.createElement("img")
            icon1.className="icon1"
            icon1.src= "https://cdn-icons-png.flaticon.com/512/10398/10398223.png"
            icon1.addEventListener("click", () =>{
                dispatch(navigate(Screens.PROFILE))
            } )

            const icon2 = this.ownerDocument.createElement("img")
            icon2.className="icon2"
            icon2.src="https://cdn-icons-png.flaticon.com/512/10398/10398203.png    "
            icon2.addEventListener("click", () =>{
                dispatch(navigate(Screens.DASHBOARD))
            } )

            const icon3 = this.ownerDocument.createElement("img")
            icon3.className="icon3"
            icon3.src="https://cdn-icons-png.flaticon.com/512/10398/10398191.png"
            icon3.addEventListener("click", () =>{
                dispatch(navigate(Screens.PUBLISHED))
            } )


            downbar.appendChild(icon1)
            downbar.appendChild(icon2)
            downbar.appendChild(icon3)

            this.shadowRoot.appendChild(downbar)

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-downbar", Downbar);