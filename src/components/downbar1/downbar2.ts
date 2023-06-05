import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./downbar2.css"

export default class downbart extends HTMLElement {

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
            icon1.src= "https://www.pngkit.com/png/full/138-1387803_pwp-member-login-icon-login-icon-png.png"
            icon1.addEventListener("click", () =>{
                dispatch(navigate(Screens.SIGNIN))
            } )

            const icon2 = this.ownerDocument.createElement("img")
            icon2.className="icon2"
            icon2.src="https://static.vecteezy.com/system/resources/previews/009/342/018/original/simple-house-symbol-and-home-icon-sign-free-png.png "
            icon2.addEventListener("click", () =>{
                dispatch(navigate(Screens.DISPLAY))
            } )

            const icon3 = this.ownerDocument.createElement("img")
            icon3.className="icon3"
            icon3.src="https://icon-library.com/images/customer-login-icon/customer-login-icon-8.jpg"
            icon3.addEventListener("click", () =>{
                dispatch(navigate(Screens.LOGIN))
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

    customElements.define("my-downbart", downbart);