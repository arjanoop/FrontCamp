let A = document.querySelector(".A");
let B = document.querySelector(".B");
var modal = document.querySelector(".modal");
let mDiv = document.querySelector(".modal-content");
var mspan = document.getElementById("mspan");
function continueReading(cr){
    for(var i = 0; i < cr.length; i++) {
        let element = cr[i]; 
        element.addEventListener("click", () => {
            let X = document.createElement('div');
            X.innerHTML = element.parentNode.parentNode.querySelector('.A').innerHTML;
            X.className=  'A';    
            let Y = document.createElement('div');
            Y.innerHTML = element.parentNode.innerHTML;
            Y.className=  'B';
            mDiv.innerHTML = '';
            mDiv.appendChild(X);
            mDiv.appendChild(Y);
            Y.removeChild(Y.querySelector('.cr'));
            modal.style.display = "block";
        })
    }
}
export {continueReading};

mspan.onclick = function(){
    modal.style.display = "none";
}
  
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}