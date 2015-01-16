// 1. change the greeting from "Hello, World!" to "Hello, Planet Earth!".
function doOne(){
	var greetingElem = document.getElementById("greeting");
	greetingElem.innerHTML = "Hello, Planet Earth!";
}

// 2. set the `backgroundColor` of each `<li>` to `yellow`.
function doTwo(){
	for(var i=0; i < liElems.length; i++){
	liElems[i].style.backgroundColor = "yellow";
// used for task #3
	liElems[i].addEventListener("click", addSelected);
	}	
}

// 3. add the class of `selected` to an `<li>` when it is clicked.
function addSelected() {
	event.target.classList.add("selected");
// 4. change the image to be the last clicked food item.
	var whichFood = event.target.innerHTML;
	var toFood = "./images/"+ whichFood +".jpeg";
	imgElem[0].setAttribute("src", toFood);
}

// 5. clicking the reset button should remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.
function doFive(){
	document.querySelector("img").setAttribute("src", "./images/panic.jpeg"); 
	var selectedElems = document.querySelectorAll("li");
	for(var i=0; i < selectedElems.length; i++){
		selectedElems[i].classList.remove("selected");
	}	
}

var initialize = function () {
	liElems = document.getElementsByTagName("li");
	imgElem = document.getElementsByTagName("img");
	document.getElementById("reset").addEventListener("click", doFive); 
	doOne();
	doTwo();
};

var liElems,
	imgElem;

window.onload = initialize;