import { Header } from './header.js';
import { Footer } from './footer.js';
import { Main } from './main.js';
import { generateElement } from './generateElement.js';
import "../style.css";


//Function to render Header
let header = new Header();
header.headerRendering();

//Function to render Main Content
let main = new Main();
main.mainRendering();

//Function to render Footer
let footer = new Footer();
footer.footerRendering();

//Modal Event Handling
let modal = document.querySelector(".modal");
let mspan = document.getElementById("mspan");

mspan.onclick = function(){
    modal.style.display = "none";
}
  
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}