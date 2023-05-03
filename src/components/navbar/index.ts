import styles from './index.css';

class Bar extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section class="all">
                <img class="logo" src="../src/fotos/Wink.png">

                <input  class="input" type="text"  placeholder="Search in Wink.">   

                <section class="things">
                <button class="icon"></button>
                <button class="perf"></button>
                </section>

                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}

customElements.define("my-bar", Bar);
export default Bar;
