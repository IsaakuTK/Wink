import styles from './profile.css';
import datas from "../../services/apitry"
import  Tpost, { Attribute } from "../../components/tpost/tpost";
import  Followers, { Attributes } from "../../components/followers/followers";
import { appState } from '../../store';



export default class Profile extends HTMLElement{
    posts: Tpost[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        }

    async connectedCallback() {
        const data =  await datas.get();
        
        data?.forEach((user) => {
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

        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
        
            const an = this.ownerDocument.createElement("my-bar");
            this.shadowRoot?.appendChild(an);

            const follo = this.ownerDocument.createElement("my-followers") as Followers;
            follo.className = "followers";
            follo.setAttribute(Attributes.image, appState.user.image);
            follo.setAttribute(Attributes.username, appState.user.username);
            
            const follow = this.ownerDocument.createElement("my-downprof");
            follow.className = "downprof";

            const post = this.ownerDocument.createElement("section")
            post.className = "post";
            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            } 

            const downbar = this.ownerDocument.createElement("my-downbar");
            downbar.className = "downbar";
            
            const all= this.ownerDocument.createElement("section");
            
            all.className="all";
            all.appendChild(follo);
            all.appendChild(follow);
            all.appendChild(post);
            all.appendChild(downbar);
            

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