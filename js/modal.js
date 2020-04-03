let modal = document.getElementById("modalMenu");
let burger = document.getElementById("burger");
let closed = document.getElementById("close");


burger.onclick = function(){

	modal.className = modal.className.replace(" closedModal", "");
}

closed.onclick = function(){
	modal.className += " closedModal";
}
