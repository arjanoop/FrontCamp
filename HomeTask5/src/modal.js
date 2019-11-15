import { generateElement } from './generateElement.js';

export class Modal{
    constructor(){
        this.modal = generateElement('div','modal');
        this.modal.id = "myModal";
    }

    modalRendering(){
        document.querySelector('body').appendChild(this.modal);
        var mdiv = document.createElement("div");
        mdiv.className = "modal-content";
        var mspan = document.createElement("span");
        mspan.id = "mspan";
        mspan.className = "close";
        mspan.innerHTML = "&times";
        this.modal.appendChild(mdiv);
        mdiv.appendChild(mspan);
    }
}