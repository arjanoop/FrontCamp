import { Modal } from '../view/modal.js';

export class continueReadingService{
    constructor(){
        let modal = new Modal();
        modal.modalRendering();
        this.A = document.querySelector(".A");
        this.B = document.querySelector(".B");
        this.modal = document.querySelector(".modal");
        this.mDiv = document.querySelector(".modal-content");
        this.mspan = document.getElementById("mspan");
    }

    continueReading(cr){
        for(var i = 0; i < cr.length; i++) {
            let element = cr[i]; 
            element.addEventListener("click", () => {
                let X = document.createElement('div');
                X.innerHTML = element.parentNode.parentNode.querySelector('.A').innerHTML;
                X.className=  'A';    
                let Y = document.createElement('div');
                Y.innerHTML = element.parentNode.innerHTML;
                Y.className=  'B';
                this.mDiv.innerHTML = '';
                this.mDiv.appendChild(X);
                this.mDiv.appendChild(Y);
                Y.removeChild(Y.querySelector('.cr'));
                this.modal.style.display = "block";
            })
        }
    }
}
