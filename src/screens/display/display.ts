import styles from './display.css';



export default class Display extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        }

    async connectedCallback() {

        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {

            const all = this.ownerDocument.createElement("section")
            all.className = "all";
            

            const bar = this.ownerDocument.createElement("my-bardisplay")
            bar.className = "bar";
            all.appendChild(bar)

            const bar2 = this.ownerDocument.createElement("my-downbart")
            bar2.className = "bar2";
            all.appendChild(bar2)

            this.shadowRoot.appendChild(all)

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-display", Display);