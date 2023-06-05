import styles from './Editprofile.css';
import dataR from "../../services/apitryR";
import Reel, {Attribute} from "../../components/reel/reel";



export default class Editprofile extends HTMLElement{
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
            

            const an2 = this.ownerDocument.createElement("my-editprofile");
            an2.className="editprofile"
            
        
            const downbar = this.ownerDocument.createElement("my-downbar");
            downbar.className = "downbar";

            const all= this.ownerDocument.createElement("section");
            all.appendChild(an2);
            this.shadowRoot?.appendChild(all);
            this.shadowRoot?.appendChild(downbar);


            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-editprofile", Editprofile);