import styles from './index.css';

class Downprof extends HTMLElement{
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
                <button>Edit profile</button>
                <button>Share profile</button>
                <button>Log out</button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-downprof", Downprof);
export default Downprof;