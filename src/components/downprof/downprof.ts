import { navigate } from '../../store/actions';
import { dispatch } from '../../store/index';
import { Screens } from '../../types/store';
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
                `;

                const all = this.ownerDocument.createElement("section");
                all.className="all"

                const b1 = this.ownerDocument.createElement("button");
                b1.className="edit"
                b1.textContent="Edit profile"

                const b2 = this.ownerDocument.createElement("button");
                b2.className="share"
                b2.textContent="Share profile"

                const b3 = this.ownerDocument.createElement("button");
                b3.className="out"
                b3.textContent="Log out"
                b3.addEventListener('click', ()=>{
                    dispatch(navigate(Screens.LOGIN));
                })

                all.appendChild(b1);
                all.appendChild(b2);
                all.appendChild(b3);

                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-downprof", Downprof);
export default Downprof;