function login(){
	console.log("asdf")
	var ajax = new XMLHttpRequest();
	ajax.responseType="json";
	ajax.addEventListener("load", function(){console.log("response: ", this.response[0])});
	ajax.open('POST', '//cse.taylor.edu.~cos143/sessions.php');
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("Name=admin&Password=admin");
}