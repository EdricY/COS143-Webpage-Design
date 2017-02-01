function formOk(){
	console.log("Validating...")
	formValid = true;
	var txt1=document.getElementById("text1");
	var pass = document.getElementById( "pw"  );
	
	txt1.style.backgroundColor = getColor(txt1.value);
	pass.style.backgroundColor = getColor(pass.value);
	
	if (formValid){
		console.log("All Good.")
		setTimeout(doSubmit, 2000);
		return false;
	}
	console.log("Validation failed.")
	return false;
}
function getColor(valid)
{
	if(valid){return "#DFD"} 
	this.formValid = false;
	return "#FAA";
}

function doSubmit(){
	document.getElementById("myForm").submit();
}

function findProduct(){
	var x = document.getElementById("num1").value * document.getElementById("num2").value;
	document.getElementById("product").value = x;
}