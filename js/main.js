function display() {
	//document.getElementById("id").innerHTML = document.getElementById('fid').value;

	var address = document.getElementById('address').value;
	document.getElementById("daddress").innerHTML = "Address:  "+address;

	var number = document.getElementById('number').value;
	document.getElementById("dnumber").innerHTML = "Mobile No:  "+number;

	var pass = document.getElementById('pass').value;
	document.getElementById("dpass").innerHTML = "Password:  "+pass;
	document.getElementById("msg").innerHTML = "Data Saved";

	var id = document.getElementById('id').value;
	document.getElementById("did").innerHTML = "Id:  "+id;

	var name = document.getElementById('name').value;
	document.getElementById("dname").innerHTML = "Name:  "+name;


}