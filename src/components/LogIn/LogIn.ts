import { loginU, navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import firebase from "../../utils/firebase";
import styles from "./index.css"

const credentials = { email: "", password: "" };

export default class login extends HTMLElement{

    placeholder?:string
    type?:string

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
      }

      async handleLoginButton(){
        await firebase.loginUser(credentials);
        dispatch(await loginU())
        
      }

      render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=``;

            const accounts = this.ownerDocument.createElement('h3')
        accounts.innerText = 'Log In'
        accounts.className = "title"
        this.shadowRoot?.appendChild(accounts)

            const email = this.ownerDocument.createElement("input")
            email.placeholder = "email"
            email.className = "input"
            email.addEventListener(
                "change",
                (e: any) => (credentials.email = e.target.value)
              );
            this.shadowRoot?.appendChild(email)
            

            const password = this.ownerDocument.createElement("input")
            password.placeholder = "password"
            password.type= "password"
            password.className = "input"
            password.addEventListener(
                "change",
                (e: any) => (credentials.password = e.target.value)
              );
            this.shadowRoot?.appendChild(password)

            const button = this.ownerDocument.createElement('button');
            button.className = "Button fourth";
            button.textContent="Get Into";
            button.addEventListener("click", this.handleLoginButton)
        this.shadowRoot?.appendChild(button)

        const account = this.ownerDocument.createElement('h3')
        account.innerText = 'Dont have an account yet?'
        account.className = "title2"
        account.addEventListener('click', ()=>{
            dispatch(navigate(Screens.SIGNIN));
            console.log(credentials);
        })
        this.shadowRoot?.appendChild(account)


            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("my-login", login);