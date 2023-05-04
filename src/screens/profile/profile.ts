import styles from './profile.css';
import data from "../../mocks/data";
import  Tpost, { Attribute } from "../../components/tpost/tpost";



export default class Profile extends HTMLElement{
    posts: Tpost[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        data.forEach((user) => {
        const profileCard = this.ownerDocument.createElement(
            "my-post"
            ) as Tpost;
            profileCard.setAttribute(Attribute.profile, user.profile);
            profileCard.setAttribute(Attribute.user, String(user.user));
            profileCard.setAttribute(Attribute.description, user.description)
            profileCard.setAttribute(Attribute.image, user.image);
            profileCard.setAttribute(Attribute.countlikes, String(user.countlikes));
            profileCard.setAttribute(Attribute.countcomments, String(user.countcomments));
            profileCard.setAttribute(Attribute.countrepost, String(user.countrepost));
            profileCard.addEventListener("click", () => console.log(user.countlikes));
            this.posts.push(profileCard);
        });
        }

    connectedCallback() {
        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
        
            const an = this.ownerDocument.createElement("my-bar");
            this.shadowRoot?.appendChild(an);

            const follo = this.ownerDocument.createElement("my-followers");
            follo.className = "followers";
            
            const follow = this.ownerDocument.createElement("my-downprof");
            follow.className = "downprof";

            const post = this.ownerDocument.createElement("section")
            post.className = "post";
            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            } 

            const all= this.ownerDocument.createElement("section");

            all.className="all";
            all.appendChild(follo);
            all.appendChild(follow);
            all.appendChild(post);
            

            const allofall= this.ownerDocument.createElement("section");

            allofall.className="allofall";

            allofall.appendChild(all);
            this.shadowRoot?.appendChild(allofall);

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-profile", Profile);