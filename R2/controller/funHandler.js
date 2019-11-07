var b1 = document.getElementById("b1");
let A = document.querySelector(".A");
let B = document.querySelector(".B");
var modal = document.querySelector(".modal");
let mDiv = document.querySelector(".modal-content");
var mspan = document.getElementById("mspan");


var cr = document.getElementsByClassName("cr");
for(var i = 0; i<cr.length; i++) {
//cr.forEach((element) => {
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


b1.addEventListener ('click', function () {
    var emailElement = document.querySelector('input[type=\'text\']');
    var inputText = emailElement.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat)) {
        emailElement.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        emailElement.focus();
        return false;
    }
});


mspan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('select').addEventListener('change', () => {
    let select = document.querySelector('select');
    selectedCategory = select[select.selectedIndex].value
    let divisions = document.querySelectorAll ('.M');
    for (const division of divisions) {
        if (division.getAttribute('category-id') === selectedCategory || selectedCategory === 'All') {
            division.style.display = 'block';
        } else {
            division.style.display = 'none';
        }
    }
                                            
    
});