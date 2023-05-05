import data from "../../mocks/data";
import  Tpost, { Attribute } from "../../components/tpost/tpost";
import dataT from "../../mocks/dataT";
import suggested, { Atributos} from "../../components/suggested/index";
import dataS from "../../mocks/dataS";
import trending, {attribute} from "../../components/trending/index";
import styles from './dashboad.css';



export default class Dashboard extends HTMLElement{

    posts: Tpost[]=[];
    Trending: trending[]=[];
    Suggested: suggested[]=[];


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
                console.log(user.countlikes)
                this.posts.push(profileCard);
            });


            dataT.forEach((user) => {
                const trend = this.ownerDocument.createElement(
                    "my-trend"
                    ) as trending;
                    trend.setAttribute(attribute.name, user.name);
                    this.Trending.push(trend);
                });

            dataS.forEach((user) => {
                const sugest = this.ownerDocument.createElement(
                    "my-suggested"
                    ) as suggested;
                    sugest.setAttribute(Atributos.name, user.name);
                    this.Suggested.push(sugest);
                 });
        }

    connectedCallback() {
        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
                 
            const post = this.ownerDocument.createElement("section")
            post.className = "post";
            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            }  

            const an = this.ownerDocument.createElement("my-bar")
            this.shadowRoot?.appendChild(an);

            const sugest = this.ownerDocument.createElement("section")
            sugest.className = "sugest";

            const sugestittle = this.ownerDocument.createElement("h1");
            sugestittle.className = "sugestt";
            sugestittle.textContent="Topics"
            sugest.appendChild(sugestittle)

             this.Suggested.forEach((profile) => {
                sugest.appendChild(profile);
            });

            const trend = this.ownerDocument.createElement("section")
            trend.className = "trend";

            const trendtittle = this.ownerDocument.createElement("h1");
            trendtittle.className = "trendt";
            trendtittle.textContent="Hashtags Trends"
            trend.appendChild(trendtittle)

            const downbar = this.ownerDocument.createElement("my-downbar");
            downbar.className = "downbar";

            this.Trending.forEach((profile) => {
                trend.appendChild(profile);
            });

            const all = this.ownerDocument.createElement("section")
            all.className = "all";
            all.appendChild(trend);
            all.appendChild(post);
            all.appendChild(sugest);
            all.appendChild(downbar);
            
            this.shadowRoot?.appendChild(all);

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-dashboard", Dashboard);