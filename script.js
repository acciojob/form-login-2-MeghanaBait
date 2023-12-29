//your JS code here. If required.
function getFormValue(){
	event.preventDefault();

	let firstName = document.getElementsByName('fname')[0].value;
    let lastName = document.getElementsByName('lname')[0].value;
	let phone = document.getElementsByName('phone')[0].value;
	let email = document.getElementsByName('email')[0].value;

	alert("First Name: "firstName + '\nLastName :' + lastName + '\nPhone Number :' + phone + '\nEmail ID: ');
}