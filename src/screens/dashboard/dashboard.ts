import  Tpost, { Attribute } from "../../components/tpost/tpost";
import dataTs from "../../services/apitryT";
import suggested, { Atributos} from "../../components/suggested/index";
import dataSs from "../../services/apitryS";
import trending, {attribute} from "../../components/trending/index";
import styles from './dashboad.css';
import { getPosts } from "../../store/actions";
import { appState, dispatch } from "../../store";



export default class Dashboard extends HTMLElement{

    posts: Tpost[]=[];
    Trending: trending[]=[];
    Suggested: suggested[]=[];


    constructor(){
        super();
        this.attachShadow({mode:"open"});

        }

    async connectedCallback() {
            if(appState.posts.length === 0){
                dispatch(await getPosts());
                this.render();
            }else{
                this.render()
            }
                

            const dataT = await dataTs.get();

            dataT?.forEach((user) => {
                const trend = this.ownerDocument.createElement(
                "my-trend"
                ) as trending;
                trend.setAttribute(attribute.name, user.name);
                this.Trending.push(trend);
            });

            const dataS = await dataSs.get();

            dataS?.forEach((user) => {
                const sugest = this.ownerDocument.createElement(
                    "my-suggested"
                    ) as suggested;
                    sugest.setAttribute(Atributos.name, user.name);
                    this.Suggested.push(sugest);
                 });
            

        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
            const post = this.ownerDocument.createElement("section")
            post.className = "post";
            appState.posts?.forEach((P) => {
                const profileCard = this.ownerDocument.createElement(
                    "my-post"
                    ) as Tpost;
                    profileCard.setAttribute(Attribute.profile, String(P.imageprofile));
                    profileCard.setAttribute(Attribute.username, String(P.username));
                    profileCard.setAttribute(Attribute.description, P.description)
                    profileCard.setAttribute(Attribute.image, P.image);
                    post.appendChild(profileCard);
                });
                
            

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