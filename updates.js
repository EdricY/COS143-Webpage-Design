//Edric Yu and Josh Clement
var outputs = document.getElementsByTagName("ol");
var count = 0;
var intervalID;
function getTime() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://cse.taylor.edu/~cos143/time.php');
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200){
			count++;
			count %= 10;
			displayTimes(count, this.responseText);
		}	
	}	
	xhr.send();	
}
function displayTimes(num, text){
	if(num   == 0) editList(outputs[3], 2, text)
	if(num%5 == 0) editList(outputs[2], 2, text)
	if(num%2 == 0) editList(outputs[1], 5, text)
	editList(outputs[0], 5, text)
}
function editList(list, max, text){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(text))
	list.appendChild(li);
	if(list.children.length>max) list.removeChild(list.children[0])
}

window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 27) {
		clearInterval(intervalID);
		console.log("cleared!")
	}
}

function makeBeautiful() {
	var fontText = "\<link rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Oswald\" type = \"text\/css\"\>";
	var body = document.getElementsByTagName("body")[0];
	document.getElementsByTagName("head")[0].appendChild(document.createTextNode(fontText));
	body.height = "100%";
	body.style = "background: red; background: -webkit-linear-gradient(red, yellow);background: -o-linear-gradient(right, red, yellow);background: -moz-linear-gradient(right, red, yellow);background: linear-gradient(to right, MediumPurple, RebeccaPurple);";
	body.style.color = "#FFF";
	body.style.fontFamily = "\"Oswald\", sans-serif";
	body.style.textShadow = "2px 2px 3px #000";
	for(var i=0;i < document.getElementsByTagName("div").length;i++){
		document.getElementsByTagName("div")[i].style.border = "2px solid white";
		document.getElementsByTagName("div")[i].style.marginRight = "5px";
	}
	for(var i=0;i < document.getElementsByTagName("h1").length;i++){
		document.getElementsByTagName("h1")[i].style.borderBottom = "2px dashed white";
	}
}
makeBeautiful();
intervalID=setInterval(getTime, 1000);