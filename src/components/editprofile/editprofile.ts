import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import { User } from '../../types/user';
import styles from './editprofile.css';

const credentials: User = {
    uid: "123",
    username: "",
    email: "",
    image: "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",
    password: "",
  };

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

                const username = this.ownerDocument.createElement("h3")
                username.innerText = "New Username"
                container.appendChild(username)

                const iusername = this.ownerDocument.createElement("input")
                iusername.placeholder = "Example: elpepe3000"
                iusername.addEventListener("change", (e:any)=>credentials.username = e.target.value);
                container.appendChild(iusername)

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