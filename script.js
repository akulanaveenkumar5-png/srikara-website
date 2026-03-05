
function toggleMenu(){

var menu=document.getElementById("sideMenu");

if(menu.style.right==="0px"){
menu.style.right="-260px";
}else{
menu.style.right="0px";
}

}

function toggleDisclaimer(){

var x=document.getElementById("legalText");

if(x.style.display==="block"){
x.style.display="none";
}else{
x.style.display="block";
}

}