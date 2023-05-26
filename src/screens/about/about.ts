import styles from './about.css';



export default class About extends HTMLElement{

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


            const text = this.ownerDocument.createElement("p")
            text.className = "text";
            text.textContent = "We are a social media that wants to connect our users";
            all.appendChild(text)

            this.shadowRoot.appendChild(all)

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-about", About);