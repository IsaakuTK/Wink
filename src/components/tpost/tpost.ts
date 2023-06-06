import styles from './index.css';

export enum Attribute {
    "profile" = "profile",
    "username" = "username",
    "description" = "description",
    "image" = "image",
}

class Tpost extends HTMLElement{
    profile?: string;
    username?: string;
    description?: string;
    image?: string;


    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            profile: null,
            username: null,
            description: null,
            image: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
      }


    attributeChangedCallback(
        propName: Attribute,
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

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=`
                <section class="all">
                    <section >
                    
                        <section class = "up">
                        <img class="prof" src="${this.profile}">
                        <p class = "us">${this.username}</p>
                        </section>    
                        <p class="ndd">${this.description}</p>
                    </section>
                <img class ="pimg" src="${this.image}">
                    <section class = "nd">  
                    <section class="s">
                    <button class="likes"></button>
                
                    </section>
                    <section class="s">
                    <button class="comments"></button>
    
                    </section>
                    <section class="s">
                    <button class="repost"></button>
    
                    </section>
                    </section>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-post", Tpost);
export default Tpost;