import "./components/export"
import "./screens/dashboard"
import "./screens/published"
import "./screens/profile"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-profile');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)