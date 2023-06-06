import { appState, dispatch } from '../../store';
import { createPost, navigate } from '../../store/actions';
import { Post } from '../../types/posts';
import { Screens } from '../../types/store';
import styles from './index.css';

const post: Post = {
    id: appState.user.uid,
    imageprofile: appState.user.image,
    username: appState.user.username,
    description:  "",
    image:  "",
  };

class Publish extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    connectedCallback() {
        this.render();
    }

        render() {
            const all = this.ownerDocument.createElement("section")
                all.className = "all"

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"

                const tittle = this.ownerDocument.createElement("h2")
                tittle.innerText = "Create a new Post"
                container.appendChild(tittle)

                const desc = this.ownerDocument.createElement("h3")
                desc.innerText = "Write a description of you post"
                container.appendChild(desc)

                const descs = this.ownerDocument.createElement("input")
                descs.placeholder = "Description"
                descs.addEventListener("change", (e:any)=>post.description = e.target.value);
                container.appendChild(descs)

                const subtittle = this.ownerDocument.createElement("h3")
                subtittle.innerText = "Put the URL image over here"
                container.appendChild(subtittle)

                const url = this.ownerDocument.createElement("input")
                url.placeholder = "Paste the URL"
                url.type = "url"
                url.addEventListener("change", (e:any)=>post.image = e.target.value);
                container.appendChild(url)


                const button = this.ownerDocument.createElement("button");
                button.innerText = "Share Post"
                button.addEventListener("click", async () =>{
                        dispatch(await createPost(post))
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)

                all.appendChild(container)
                this.shadowRoot?.appendChild(all);

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
}

customElements.define("my-publish", Publish);
export default Publish;