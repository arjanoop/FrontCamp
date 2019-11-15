import { generateElement } from '../model/generateElement.js'
import { RightSidePannel } from './mainRight.js';
import { MainArticle } from './mainLeft.js';

export class Main{
    constructor(){
        this.main = document.querySelector(".content");
    }

    mainRendering(){
        let contentArticle = generateElement('div','c1');
        let rightSidePannel = generateElement('div','c2');
        let contentClear = generateElement('div','c');
        this.main.appendChild(contentArticle);
        this.main.appendChild(rightSidePannel);
        this.main.appendChild(contentClear);

        let content  = new MainArticle();
        content.contentRendering();



        //Right Side Pannel Rendering after the Rending of Main Article
        let pannel  = new RightSidePannel();
        pannel.pannelRendering();
    }
}