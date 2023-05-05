import "./components/export"
import "./screens/export"
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML="";

        switch (appState.screen) {

            case Screens.DASHBOARD:
                const Dasboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(Dasboard);
                break;

            case Screens.LOGIN:
                const Profile = this.ownerDocument.createElement('app-login');
                this.shadowRoot?.appendChild(Profile);
                break;

            case Screens.PUBLISHED:
                const Published = this.ownerDocument.createElement('app-published');
                this.shadowRoot?.appendChild(Published);
                break;

            case Screens.PROFILE:
            const profile = this.ownerDocument.createElement('app-profile');
            this.shadowRoot?.appendChild(profile);
                break;

                case Screens.SIGNIN:
            const a = this.ownerDocument.createElement('my-singi');
            this.shadowRoot?.appendChild(a);
                break;
                
            default:
                break;
        }


    }
}

customElements.define('app-container', AppContainer)