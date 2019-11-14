var head = document.querySelector(".header");

//Header's Element
let mainHeading = document.createElement('div');
mainHeading.className="mainHeading";
var l1 = document.createElement('span');
l1.className = "l1";
l1.innerHTML = "NEWSFEED &nbsp;&nbsp;";
var l2 = document.createElement('span');
l2.className = "l2";
l2.innerHTML = "Yet another newsfeed";
mainHeading.appendChild(l1);
mainHeading.appendChild(l2);
head.appendChild(mainHeading);

let sub = document.createElement("div");
sub.className = "subscribe";
var inp = document.createElement("input");
inp.name = "email";
inp.className = "email";
inp.setAttribute('type', 'text');
inp.placeholder = "Email Address";
let subscribeButton = document.createElement("input");
subscribeButton.type = "submit";
subscribeButton.value = "Subscribe";
subscribeButton.id = "b1";
subscribeButton.className = "subscribeButton";
sub.appendChild(inp);
sub.appendChild(subscribeButton);
head.appendChild(sub);

let mainClear = document.createElement('div');
mainClear.className="mainClear";
head.appendChild(mainClear);