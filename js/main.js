let mein = document.getElementsByClassName("main");
let openOrder = document.getElementById("openorder");

let slider = document.getElementsByClassName("slider");
let footer = document.getElementsByClassName("footer");
let startpage = document.getElementById('startpage')
let orderpage = document.getElementById('orderpage')
let header = document.getElementsByClassName("header")

orderpage.style.display = 'none'
openOrder.onclick = function(){
	mein[0].style.width = '100%'
	startpage.style.display = "none"
	slider[0].style.display = "none"
	orderpage.style.display = 'block'
	header[0].style.padding = "55px"
}

