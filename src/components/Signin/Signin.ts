import styles from './Signin.css'

export enum ATR{

    "placeholder"="placeholder",
    "type" = "type"

}
export default class singin extends HTMLElement{

    placeholder?:string
    type?:string

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<ATR, null> = {
            placeholder: null,
            type: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:ATR   ,
        _:unknown,
        newValue:string,
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    connectedCallback() {
        this.render();
      }


        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=``;

                const input = this.ownerDocument.createElement("input")
                input.placeholder = `${this.placeholder}`
                input.type= `${this.type}`
                this.shadowRoot?.appendChild(input)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-singin", singin);