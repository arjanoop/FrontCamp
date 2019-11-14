var head = document.querySelector(".header");

//Header's Element
var l1 = document.createElement('span');
l1.className = "l1";
l1.innerHTML = "NEWSFEED &nbsp;&nbsp;";
var l2 = document.createElement('span');
l2.className = "l2";
l2.innerHTML = "Yet another newsfeed";
head.appendChild(l1);
head.appendChild(l2);