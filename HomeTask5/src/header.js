import { generateElement } from './generateElement.js'
import { EmailValidator } from './emailValidatorFunction.js'

export class Header{
    constructor(){
        this.head = document.querySelector(".header");
    }
    
    headerRendering(){
        let mainHeading = generateElement('div','mainHeading');
        let l1 = generateElement('span','l1');
        l1.innerHTML = "NEWSFEED &nbsp;&nbsp;";
        let l2 = generateElement('span','l2');
        l2.innerHTML = "Yet another newsfeed";
        mainHeading.appendChild(l1);
        mainHeading.appendChild(l2);
        let sub = generateElement('div','subscribe');
        let inp = generateElement('input','email');
        inp.setAttribute('type', 'text');
        inp.placeholder = "Email Address";
        //Replace this one
        let subscribeButton = document.createElement("input");
        subscribeButton.type = "submit";
        subscribeButton.value = "Subscribe";
        subscribeButton.id = "b1";
        subscribeButton.className = "subscribeButton";
        sub.appendChild(inp);
        sub.appendChild(subscribeButton);
        let mainClear = generateElement('div','mainClear');
        this.head.appendChild(mainHeading);
        this.head.appendChild(sub);
        this.head.appendChild(mainClear);
        let emailValidation = new EmailValidator();
        emailValidation.emailValidator();
    } 
} 