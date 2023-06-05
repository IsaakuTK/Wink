import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import styles from './editprofile.css';

class Editprofile extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    connectedCallback() {
        this.render();
    }

        render() {
            const all = this.ownerDocument.createElement("section")
                all.className = "all"

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"

                const tittle = this.ownerDocument.createElement("h2")
                tittle.innerText = "Edit Profile"
                container.appendChild(tittle)

                const desc = this.ownerDocument.createElement("h3")
                desc.innerText = "New Username"
                container.appendChild(desc)

                const descs = this.ownerDocument.createElement("input")
                descs.placeholder = "Example: elpepe3000"
                this.shadowRoot?.appendChild (descs);
                container.appendChild(descs)

                const subtittle = this.ownerDocument.createElement("h3")
                subtittle.innerText = "New profile image"
                container.appendChild(subtittle)

                const url = this.ownerDocument.createElement("input")
                url.placeholder = "Paste the URL"
                url.type = "url"
                this.shadowRoot?.appendChild (url);
                container.appendChild(url)


                const button = this.ownerDocument.createElement("button");
                button.innerText = "Confirm Changes"
                button.addEventListener("click", () =>{
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)

                all.appendChild(container)
                this.shadowRoot?.appendChild(all);

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
}

customElements.define("my-editprofile", Editprofile);
export default Editprofile;