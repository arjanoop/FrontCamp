var pdata  = JSON.parse(data);
var head = document.querySelector(".header");
var main = document.querySelector(".content");
var foot = document.querySelector(".footer");

//Header's Element
var l1 = document.createElement('span');
l1.className = "l1";
l1.innerHTML = "NEWSFEED &nbsp;&nbsp;";
var l2 = document.createElement('span');
l2.className = "l2";
l2.innerHTML = "Yet another newsfeed";
//var l = document.createElement('div');
//l.style.clear = "both";

//Adding Element to Header
head.appendChild(l1);
head.appendChild(l2);


//Main's Element
//m1
var c1 = document.createElement("div");
c1.className = "c1";

var c11 = document.createElement("div");
c11.className = "c11";

/******
Modal Coding
*/

var modal = document.createElement("div");
document.querySelector('body').appendChild(modal);
modal.className = "modal";
modal.id = "myModal";
var mdiv = document.createElement("div");
mdiv.className = "modal-content";
var mspan = document.createElement("span");
mspan.className = "close";
mspan.innerHTML = "&times";
modal.appendChild(mdiv);
mdiv.appendChild(mspan);


for(var a = 0; a<pdata.length; a++){
    let M = document.createElement("div");
    M.className = 'M';
    M.setAttribute ('category-id', pdata[a].category);
    let A = document.createElement("div");
    A.className = 'A';
    let B = document.createElement("div");
    B.className = 'B';
    var AB = document.createElement("div");
    AB.className ="AB"
    var image = document.createElement('img');
    image.setAttribute('height', '200px');
    image.setAttribute('width', '200px');
    image.setAttribute('src', 'img/image1.jpg');
    A.appendChild(image);
    var titles = document.createElement("span");
    var p1 = document.createElement("p");
    titles.className = "titles";
    titles.innerHTML = pdata[a].title+"<br>";
    p1.className = "p1";
    p1.innerHTML = "Posted on "+pdata[a].date+" //Category: Category "+pdata[a].category;
    var p2 = document.createElement("p");
    p2.className = "p2";
    p2.innerHTML = pdata[a].content;
    p2.style.textAlign = "justify";
    var cr = document.createElement("button");
    cr.innerText = "Continue Reading";
    cr.className = 'cr';
    cr.id = pdata[a].category;
    cr.onclick = function() {
        var X = document.createElement('div');
        X.innerHTML = A.innerHTML;
        X.className=  'A';
        
        var Y = document.createElement('div');
        Y.innerHTML = B.innerHTML;
        Y.className=  'B';
        
        mdiv.innerHTML = '';
        mdiv.appendChild(X);
        mdiv.appendChild(Y);
        Y.removeChild(Y.querySelector('.cr'));
        modal.style.display = "block";
        
    }
    
    var p3 = document.createElement("p");
    p3.className = "p3";
    p3.innerHTML = "<br><hr><br>";
    var p4 = document.createElement("p");
    p4.className = "p4";
    p4.innerHTML = "<br>";
    B.appendChild(titles);
    B.appendChild(p1);
    B.appendChild(p2);
    B.appendChild(cr);
    if(a<pdata.length && a>0){
        M.appendChild(p3);
    }else{
        main.appendChild(p4);
    }
    M.appendChild(A);
    M.appendChild(B);
    M.appendChild(AB);
    c11.appendChild(M);
    c1.appendChild(c11);
    console.log (modal);
}
//m2
var c2 = document.createElement("div");
c2.className = "c2";
var temp = null;
temp = document.createElement("h3");
temp.innerHTML = "SELECT CATEGORY";
c2.appendChild(temp);
var sel = document.createElement("select");
sel.className = "selectCategory";
var opt = document.createElement("option");
opt.nodeValue = "ALL";
opt.innerHTML = "All";
sel.appendChild(opt);
var opt1 = document.createElement("option");
opt1.nodeValue = "ONE";
opt1.innerHTML = "One";
sel.appendChild(opt1);
var opt2 = document.createElement("option");
opt2.nodeValue = "TWO";
opt2.innerHTML = "Two";
sel.appendChild(opt2);
var opt3 = document.createElement("option");
opt3.nodeValue = "THREE";
opt3.innerHTML = "Three";
sel.appendChild(opt3);
var opt4 = document.createElement("option");
opt4.nodeValue = "FOUR";
opt4.innerHTML = "Four";
sel.appendChild(opt4);
c2.appendChild(sel);
var temp1 = document.createElement("h6");
temp1.innerHTML = "<br><br>";
c2.appendChild(temp1);
var temp2 = document.createElement("h3");
temp2.innerHTML = "SUBSCRIBE";
c2.appendChild(temp2);
var sub = document.createElement("span");
sub.className = "subscribe";
var inp = document.createElement("input");
inp.name = "email";
inp.setAttribute('type', 'text');
inp.placeholder = "Email Address";
var b1 = document.createElement("input");
b1.type = "submit";
b1.value = "Subscribe";
b1.className = "b1";
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
inp.tagName = "email";
inp.placeholder = "Email Address";
sub.appendChild(inp);
sub.appendChild(b1);
c2.appendChild(sub);
//mend
var c = document.createElement("div");
c.className = "c";



//Main implementation
main.appendChild(c1);
main.appendChild(c2);
main.appendChild(c);

//Footer's implementation
var f = document.createElement("div");
f.className = "footer"
f.innerHTML = "&copy;&nbsp;NewsFeed 2019";
f.style.textAlign = "center";
foot.appendChild(f);

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