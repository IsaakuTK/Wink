import styles from './published.css';
import dataR from "../../services/apitryR";
import Reel, {Attribute} from "../../components/reel/reel";



export default class Published extends HTMLElement{
    reels : Reel[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        }

    async connectedCallback() {
        const data = await dataR.get();

        data?.forEach((user) => {
            const reels = this.ownerDocument.createElement(
                "my-reel"
                ) as Reel;
                reels.setAttribute(Attribute.image, user.image);

                this.reels.push(reels);
            });

        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
        
            const an = this.ownerDocument.createElement("my-bar");
            this.shadowRoot?.appendChild(an);
            

            const an2 = this.ownerDocument.createElement("my-publish");
            
            const re = this.ownerDocument.createElement("section")
            re.className = "reel";
            for (let index = 0; index < this.reels.length; index++) {
                re.appendChild(this.reels[index]);
            }

            const all= this.ownerDocument.createElement("section");
            all.appendChild(an2);
            this.shadowRoot?.appendChild(all);
            this.shadowRoot?.appendChild(re);


            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-published", Published);