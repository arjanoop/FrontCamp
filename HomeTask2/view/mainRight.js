var c2 = document.querySelector(".c2");

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
b1.id = "b1";
b1.className = "b1";
inp.tagName = "email";
inp.placeholder = "Email Address";
sub.appendChild(inp);
sub.appendChild(b1);
c2.appendChild(sub);