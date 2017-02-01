function createAccount(){
	resetValid();
	var username = validate("username1");
	var password = validate("password1");
	if(!username || !password) {
		document.getElementById("createMessage").innerHTML="Invalid input. Please enter 1-5 alphanumeric characters.";
		return;
	}
	console.log("attempt create..." + username);
	var xhr = new XMLHttpRequest();
	var params = "Name="+username+"&Password="+password;
	xhr.responseType = "json";
	xhr.addEventListener("load", function(){
		if(xhr.response[0].status)
			document.getElementById("createMessage").innerHTML=xhr.response[0].message;
		else document.getElementById("createMessage").innerHTML="That user already exists.";
		console.log(xhr.response[0]);
	});
	xhr.open("POST", "//cse.taylor.edu/~cos143/users.php")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
	document.getElementById("username1Message").style.display = "none";
	document.getElementById("password1Message").style.display = "none";
}
function deleteAccount(){
	resetValid();
	var username = validate("username1");
	if(!username) {
		document.getElementById("createMessage").innerHTML="Invalid input. Please enter 1-5 alphanumeric characters.";
		return;
	}
	
	console.log("attempt delete..." + username)
	var xhr = new XMLHttpRequest();
	var params = "Name="+username;
	xhr.responseType = "json";
	xhr.addEventListener("load", function(){
		document.getElementById("createMessage").innerHTML=xhr.response[0].message;
		console.log(xhr.response[0]);
	});
	xhr.open("POST", "//cse.taylor.edu/~cos143/users.php")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("method=delete&"+params);
	document.getElementById("username1Message").style.display = "none";
	document.getElementById("password1Message").style.display = "none";
}
function changePassword(){
	resetValid();
	var username = validate("username1");
	var password = validate("password1");
	if(!username || !password) {
		document.getElementById("createMessage").innerHTML="Invalid input. Please enter 1-5 alphanumeric characters.";
		return;
	}
	
	console.log("attempt change..." + username.value +" " +password.value)
	var xhr = new XMLHttpRequest();
	var params = "Name="+username+"&Password="+password;
	xhr.responseType = "json";
	xhr.addEventListener("load", function(){
		//if(!xhr.response[0].status)
		document.getElementById("createMessage").innerHTML=xhr.response[0].message;
		console.log(xhr.response[0]);
	});
	xhr.open("POST", "//cse.taylor.edu/~cos143/users.php")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("method=put&"+params);
	document.getElementById("username1Message").style.display = "none";
	document.getElementById("password1Message").style.display = "none";
}
function login(){
	resetValid();
	var username = validate("username2");
	var password = validate("password2");
	if(!username || !password){
		document.getElementById("sessionMessage").innerHTML="Invalid input. Please enter 1-5 alphanumeric characters.";
		return;
	}
	
	console.log("attempt login..." + username.value)
	var xhr = new XMLHttpRequest();
	var params = "Name="+username+"&Password="+password;
	xhr.responseType = "json";
	xhr.addEventListener("load", function(){
		console.log(xhr.response[0]);
		if(xhr.response[0].status){
			document.getElementById("sessionMessage").innerHTML=xhr.response[0].message;
			document.getElementById("login").style.display = "none";
			document.getElementById("logout").style.display = "inline-block";
			document.getElementById("create").style.display = "none";
			document.getElementById("delete").style.display = "inline-block";
			document.getElementById("change").style.display = "inline-block";
		}else{
			document.getElementById("sessionMessage").innerHTML="Not Logged in. Wrong Credentials.";
		}
	});
	xhr.open("POST", "//cse.taylor.edu/~cos143/sessions.php")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
	document.getElementById("username2Message").style.display = "none";
	document.getElementById("password2Message").style.display = "none";
}

function logout(){
	resetValid();
	console.log("attempt logout...")
	var xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	xhr.addEventListener("load", function(){		
		console.log(xhr.response[0]);
		if(xhr.response[0].status){
			document.getElementById("sessionMessage").innerHTML=xhr.response[0].message;
			document.getElementById("login").style.display = "inline-block";
			document.getElementById("logout").style.display = "none";
			document.getElementById("create").style.display = "inline-block";
			document.getElementById("delete").style.display = "none";
			document.getElementById("change").style.display = "none";
		} else document.getElementById("sessionMessage").innerHTML="Logout Failed...?";
	});
	xhr.open("POST", "//cse.taylor.edu/~cos143/sessions.php")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("method=delete");
	document.getElementById("username2Message").style.display = "none";
	document.getElementById("password2Message").style.display = "none";
}

//returns either the input field's value or false, also changes attribute of input
function validate(inputID){
	var input = document.getElementById(inputID)
	var str = input.value;
	var strUP = inputID.charAt(0).toUpperCase() + inputID.substring(1,inputID.length-1);
	var pattern = /^\w+$/;
	if(!str || !pattern.test(str) || str.length < 1 || str.length > 5){
		input.setAttribute("class", "invalid");
		document.getElementById(inputID+"Message").style.display = "inline-block";
		document.getElementById(inputID+"Message").innerHTML='<span class="glyphicon glyphicon-remove" aria-hidden="true" style="color:red"></span> '+strUP+" bad";
		return false;
	}
	input.setAttribute("class", "valid");
	document.getElementById(inputID+"Message").style.display = "inline-block";
	document.getElementById(inputID+"Message").innerHTML='<span class="glyphicon glyphicon-ok" aria-hidden="true" style="color:#7F7"></span> '+strUP+" OK";
	return document.getElementById(inputID).value;
}
function resetValid(){
	document.getElementById("username1").setAttribute("class","");
	document.getElementById("username2").setAttribute("class","");
	document.getElementById("password1").setAttribute("class","");
	document.getElementById("password2").setAttribute("class","");
}