import { dataLoading } from '../controller/funData.js'
var c2 = document.querySelector(".c2");

var temp = null;
temp = document.createElement("h3");
temp.innerHTML = "<br><br>SELECT CATEGORY";
c2.appendChild(temp);
var sel = document.createElement("select");
sel.className = "selectCategory";
var opt = document.createElement("option");
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
c2.appendChild(sel);