var adj=[
"Large",
"Massive",
"Dangerous",
"Savage",
"Sharp",
"Pointy",
"Tiny",
"Terrible",
"Small",
"Dull",
"Unhappy",
"Bulky",
"Shameful",
"Heavy",
"Light",
"Legendary"
]
function func1(){
	document.getElementsByTagName("body")[0].style.backgroundColor=this.style.backgroundColor;
}
function addElement(){
	var b = document.createElement("button");
	var rand = Math.floor(Math.random() * adj.length);
	b.appendChild(document.createTextNode(adj[rand]+" Button"));
	b.onclick = func1;
	document.getElementsByClassName("bContainer")[0].appendChild(b);
}
function removeElement(){
	var c = document.getElementsByClassName("bContainer")[0];
	if(c.children[0])
		c.removeChild(c.children[0]);
}
function moveElement(){
	document.getElementById("container1").appendChild(document.getElementById("container1").children[0]);
}
function changeText(){
	document.getElementById("header").innerHTML=document.getElementById("header").innerHTML+"!";
}
function changeAttribute(){
	var h = document.getElementById("header")
	if (h.getAttribute("class") == "class1") h.setAttribute("class", "class2");
	else h.setAttribute("class", "class1")
}
function changeStyle(){
	var c = document.getElementsByClassName("bContainer")[0];
	for(var i = 0; i < c.children.length; i++)
		c.children[i].style.backgroundColor="rgb("+(Math.floor(Math.random()*256))+","+(Math.floor(Math.random()*256))+","+(Math.floor(Math.random()*256))+")";
}
function duplicateElement(){
	document.getElementById("container1").appendChild(document.getElementsByClassName("bContainer")[0].cloneNode(true));
}