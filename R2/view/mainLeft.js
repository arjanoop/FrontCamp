var main = document.querySelector(".content");
var c1 = document.querySelector(".c1");
var c11 = document.createElement("div");
let M;
c11.className = "c11";

var p5 = document.createElement("p");
    p5.className = "p5";
    p5.innerHTML = "<br>";
    c11.appendChild(p5);


for(var a = 0; a<pdata.length; a++){
    mainRendering(pdata[a],pdata.length,a);
}

function mainRendering(pdata,len,count){
    let M = document.createElement("div");
    M.className = 'M';
    M.setAttribute ('category-id', pdata.category);
    let A = document.createElement("div");
    A.className = 'A';
    A.id='A'
    let B = document.createElement("div");
    B.className = 'B';
    B.id = 'B';
    var AB = document.createElement("div");
    AB.className ="AB"
    var image = document.createElement('img');
    image.setAttribute('height', '200px');
    image.setAttribute('width', '200px');
    image.setAttribute('src', './assets/image1.jpg');
    A.appendChild(image);
    var titles = document.createElement("span");
    var p1 = document.createElement("p");
    titles.className = "titles";
    titles.innerHTML = pdata.title+"<br>";
    p1.className = "p1";
    p1.innerHTML = "Posted on "+pdata.date+" //Category: Category "+pdata.category;
    var p2 = document.createElement("p");
    p2.className = "p2";
    p2.innerHTML = pdata.content;
    p2.style.textAlign = "justify";
    var cr = document.createElement("button");
    cr.innerText = "Continue Reading";
    cr.className = 'cr';
    cr.id = pdata.category;
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
    c11.appendChild(M);
    c1.appendChild(c11);
}