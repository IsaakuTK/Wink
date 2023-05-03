import styles from './index.css';
class login extends HTMLElement{



    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

   

    connectedCallback() {
        this.render();
      }



        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=`
                <section class="all">
                <section>
                Sign In 
                </section>
                <section>
                <input type= "text" class="input1" name="User Name"
                <input type= "email" class="input2" name="Email"
                <input type= "password" class="input3" name="Password"
                <button class>Enter</button>
                </section>
                   
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-login", login);
export default login;