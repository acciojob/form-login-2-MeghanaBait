function getFormValue() {
    event.preventDefault();

    let firstName = document.getElementsByName('First Name')[0].value;
    let lastName = document.getElementsByName('Last Name')[0].value;
    let phone = document.getElementsByName('Phone Number')[0].value;
    let email = document.getElementsByName('Email ID')[0].value;

    alert("First Name: " + firstName + '\nLast Name: ' + lastName + '\nPhone Number: ' + phone + '\nEmail ID: ' + email);
}
