import { generateElement } from '../model/generateElement.js'

export class Footer{
    constructor(){
        this.foot = document.querySelector(".footer");
    }

    footerRendering(){
        let footer = generateElement('div','footer');
        footer.innerHTML = "&copy;&nbsp;NewsFeed 2019";
        footer.style.textAlign = "center";
        this.foot.appendChild(footer);
    }
}