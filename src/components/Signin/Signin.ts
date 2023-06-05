import { navigate, newUser } from '../../store/actions';
import { appState, dispatch } from '../../store/index';
import { Screens } from '../../types/store';
import styles from './Signin.css'
import Firebase from "../../utils/firebase"
import { User } from '../../types/user';


const credentials: User = {
    uid: "123",
    username: "",
    email: "",
    image: "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",
    password: "",
  };
  

export default class singin extends HTMLElement{

    texto?:string
    type?:string

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }


    connectedCallback() {
        this.render();
      }

async handleRegisterUser(){
        dispatch(newUser(credentials))

        if(await Firebase.registerUser(credentials)  == true){
          
          await Firebase.AddUser(credentials)
        }
        console.log(credentials);
}
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=``;

            

                const accounts = this.ownerDocument.createElement('h3')
                accounts.innerText = 'Sign in '
                accounts.className = "title"
                this.shadowRoot?.appendChild(accounts)

                const username = this.ownerDocument.createElement("input")
                username.placeholder = "username"
                username.className = "input"
                username.addEventListener(
                    "change",
                    (e: any) => (credentials.username = e.target.value)
                  );
                this.shadowRoot?.appendChild(username)

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
                button.innerText = "Register";

            button.addEventListener('click', ()=>{
                this.handleRegisterUser()
            })
            this.shadowRoot?.appendChild(button)

            const account = this.ownerDocument.createElement('h3')
            account.innerText = 'Already have an account?'
            account.className = "title2"
            account.addEventListener('click', ()=>{
                dispatch(navigate(Screens.LOGIN));
            })
            this.shadowRoot?.appendChild(account)


                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-singing", singin);