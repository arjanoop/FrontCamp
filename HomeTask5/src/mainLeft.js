import { dataLoading } from './funData.js'
import { generateElement } from './generateElement.js';
import { continueReadingService } from './funContinueReading.js';

export class MainArticle{
    constructor(){
        this.main = document.querySelector(".content");
        this.articleContainer = document.querySelector(".c1");
        this.c11 = generateElement('div','c11');
        this.crButton = new continueReadingService();
    }

    contentRendering(){
        let p5 = generateElement('p','p5');
        p5.innerHTML = "<br>";
        this.c11.appendChild(p5);

        let apiData = dataLoading();
        apiData.then(data => {
            for (let i = 0; i < data[0].length; i++) {
                this.mainRendering( data[0][i], data[0].length, i);
            } 
            var cr2 = document.getElementsByClassName("cr");
            this.crButton.continueReading(cr2);
        });

    }

    mainRendering(pData,len,count){
        let M = generateElement('div','M');
        M.setAttribute ('category-id', pData.category);
        let A = generateElement('div','A');
        let B = generateElement('div','B');
        var AB = generateElement('div','AB');
        var image = generateElement('img','img');
        image.setAttribute('height', '200px');
        image.setAttribute('width', '200px');
        image.setAttribute('src', pData.images);
        A.appendChild(image);
        var titles = document.createElement("span");
        var p1 = document.createElement("p");
        titles.className = "titles";
        titles.innerHTML = pData.title+"<br>";
        p1.className = "p1";
        p1.innerHTML = "Posted on "+pData.date+" //Category: Category "+pData.category;
        var p2 = document.createElement("p");
        p2.className = "p2";
        p2.innerHTML = pData.content;
        p2.style.textAlign = "justify";
        var cr = document.createElement("button");
        cr.innerText = "Continue Reading";
        cr.className = 'cr';
        cr.id = pData.category;
        B.appendChild(titles);
        B.appendChild(p1);
        B.appendChild(p2);
        B.appendChild(cr);
        if(count==len){
            var p4 = document.createElement("p");
            p4.className = "p4";
            p4.innerHTML = "<br>";
            main.appendChild(p4);
        }else if(count!=0){
            var p3 = document.createElement("p");
            p3.className = "p3";
            p3.innerHTML = "<br><hr><br>";
            M.appendChild(p3);
        }
        M.appendChild(A);
        M.appendChild(B);
        M.appendChild(AB);
        this.c11.appendChild(M);
        this.articleContainer.appendChild(this.c11);
    }

}