import { dataLoading } from '../controller/funData.js'
import { SelectList } from '../controller/selectListFunction.js'

export class RightSidePannel{
    constructor(){
        this.pannel = document.querySelector(".c2");
    }

    pannelRendering(){
        let temp = null;
        temp = document.createElement("h3");
        temp.innerHTML = "<br><br>SELECT CATEGORY";
        this.pannel.appendChild(temp);
        let sel = document.createElement("select");
        sel.className = "selectCategory";
        let opt = document.createElement("option");
        opt.nodeValue = "ALL";
        opt.innerHTML = "All";
        sel.appendChild(opt);
        let categoryArray = dataLoading();
        categoryArray.then( (elements) => { 
            elements[1].forEach(element => {
                let opt1 = document.createElement("option");
                opt1.value = element;
                opt1.innerHTML = element;
                sel.appendChild(opt1);
            });
        })
        this.pannel.appendChild(sel);
        let selectList = new SelectList();
        selectList.contentDisplay();
    }
}