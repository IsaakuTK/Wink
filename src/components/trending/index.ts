import styles from './index.css';

export enum attribute {
    "name" = "name",
    "image" = "image",
}

class MyTrend extends HTMLElement {
    name?: string;
    image?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<attribute, null> = {

            image: null,
            name: null,
           

        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section class ="section">
                
                <button class="button"> <img class="img" src ="../src/fotos/hash.png"> ${this.name} </button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }
    
customElements.define("my-trend", MyTrend);
export default MyTrend;
