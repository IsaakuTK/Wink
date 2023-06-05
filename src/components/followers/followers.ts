import styles from './index.css';

export enum Attribute{
    "image"="image",
    "username"="username",
    "post"="post",
    "followers"="followers",
    "following"="following"
}

class Followers extends HTMLElement{
    
    image?: string;
    username?: string;
    post?: string;
    followers?: string;
    following?: string;

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            image: null,
            username: null,
            post: null,
            followers: null,
            following: null
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
                <section class="all2">
                <img ${this.image}>
                <p>${this.username}</p>
                </section>

                <section class="casiall">
                <section class="post">
                <p>${this.post || 12}</p>
                <p>Post</p>
                </section>

                <section class="followers">
                <p>${this.followers || 125}</p>
                <p>Followers</p>
                </section>

                <section class="following">
                <p>${this.following || 120}</p>
                <p>Following</p>
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
customElements.define("my-followers", Followers);
export default Followers;