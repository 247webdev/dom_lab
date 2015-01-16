function addSelected() {
	event.target.classList.add("selected");  // 3. add class of `selected` to a clicked `<li>`
	imgElem[0].setAttribute("src", "./images/"+ event.target.innerHTML +".jpeg" );  // 4. change the image to be the last clicked food item
}
function resetWasClicked(){
	document.querySelector("img").setAttribute("src", "./images/panic.jpeg"); // 5. when reset button is clicked: change the image to `panic.jpeg`
	for(var i=0, selectedElems = document.querySelectorAll("li"); i < selectedElems.length; i++){  // 5. when reset button is clicked: remove class `selected` from each `<li>`
		selectedElems[i].classList.remove("selected");  // 5.
	}	
}
var initialize = function () {
	imgElem = document.getElementsByTagName("img");
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";  // 1. change the greeting to "Hello, Planet Earth!"
	document.getElementById("reset").addEventListener("click", resetWasClicked);  // 3.
	for(var i=0, liElems = document.getElementsByTagName("li"); i < liElems.length; i++){
		liElems[i].style.backgroundColor = "yellow";  // 2. set each <li> to backgroundColor `yellow`
		liElems[i].addEventListener("click", addSelected);  // 3.
	}	
};
var imgElem;  // set as global since it is used within two functions
window.onload = initialize;