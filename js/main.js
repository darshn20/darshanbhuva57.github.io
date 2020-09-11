function display() {

	var address = document.getElementById('address').value;
	if(address==""){
		alert("Enter Address");
		document.getElementById('address').value="";
	}
	//login100-form-btn
	var number = document.getElementById('number').value;
	if(number=="" || isNaN(number) || number > 999999999 || number < 600000000){
		alert("Enter Valid Number");
		document.getElementById('number').value="";
		
	}

	var pass = document.getElementById('pass').value;
	if(pass==""){
		alert("Enter Password");
		document.getElementById('pass').value="";
	}
	
	var id = document.getElementById('id').value;
	if(id==""){
		alert("Enter Id");
		document.getElementById('id').value="";
	}

	var name = document.getElementById('name').value;
	if(name=""){
		alert("Enter Name");
		document.getElementById('name').value="";
	}
	

}